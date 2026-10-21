import { createHash } from "node:crypto";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Next's static HTML contains inline hydration payloads. Authorize the exact
// exported bytes instead of allowing arbitrary inline JavaScript. The union
// also covers direct .html requests and Azure's navigation fallback.
export async function prepareStaticCsp(root = "out", { verify = false } = {}) {
  const hashes = new Set();
  let pages = 0;
  async function visit(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    for (const entry of entries) {
      const path = resolve(directory, entry.name);
      if (entry.isDirectory()) await visit(path);
      else if (entry.isFile() && entry.name.endsWith(".html")) {
        pages++;
        const html = await readFile(path, "utf8");
        for (const [, attributes, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/giu)) {
          if (/\bsrc\s*=/iu.test(attributes) || !body) continue;
          // HTML parsing normalizes line endings before the CSP hash check.
          const digest = createHash("sha256").update(body.replace(/\r\n?/g, "\n")).digest("base64");
          hashes.add(`'sha256-${digest}'`);
        }
      }
    }
  }
  await visit(resolve(root));
  if (!pages || !hashes.size) throw new Error("Static CSP requires exported HTML and inline hydration scripts.");
  const configPath = resolve(root, "staticwebapp.config.json");
  const config = JSON.parse(await readFile(configPath, "utf8"));
  const original = config.globalHeaders?.["Content-Security-Policy"];
  const directives = (original ?? "").split(";").map((directive) => directive.trim()).filter(Boolean);
  const scriptDirectives = directives.filter((directive) => /^script-src(?:\s|$)/u.test(directive));
  if (scriptDirectives.length !== 1 || scriptDirectives[0].replace(/ 'sha256-[A-Za-z0-9+/=]+'/gu, "") !== "script-src 'self'") {
    throw new Error("Static CSP must restrict script-src to 'self' and generated SHA-256 hashes.");
  }
  const policy = directives.map((directive) => directive === scriptDirectives[0]
    ? `script-src 'self' ${[...hashes].sort().join(" ")}` : directive).join("; ");
  // Keep the response header small; fail visibly if future growth needs a
  // route-specific policy rather than silently producing an oversized header.
  if (Buffer.byteLength(policy) > 8_192) throw new Error("Static CSP exceeds the 8 KiB header budget.");
  if (verify) {
    if (original !== policy) throw new Error("Static CSP hashes do not match the exported HTML. Run npm run build.");
  } else {
    config.globalHeaders["Content-Security-Policy"] = policy;
    await writeFile(configPath, JSON.stringify(config, null, 2) + "\n");
  }
  return { pages, hashes: hashes.size };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const result = await prepareStaticCsp();
  console.log(`Static CSP prepared: ${result.hashes} script hashes across ${result.pages} HTML files.`);
}
