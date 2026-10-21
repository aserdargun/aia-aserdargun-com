import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { prepareStaticCsp } from "./prepare-static-csp.mjs";

const template = {
  navigationFallback: { rewrite: "/index.html" },
  globalHeaders: {
    "X-Frame-Options": "DENY",
    "Content-Security-Policy": "default-src 'self'; script-src 'self'; object-src 'none'",
  },
};
async function fixture(t, html = "<script>window.ready = true;</script>", config = template) {
  const root = await mkdtemp(join(tmpdir(), "aia-csp-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  await writeFile(join(root, "staticwebapp.config.json"), JSON.stringify(config));
  await writeFile(join(root, "index.html"), html);
  return root;
}

test("hashes exact inline bodies across nested pages, deduplicates, and preserves security headers", async (t) => {
  const body = "window.ready = true;\nwindow.answer = 42;";
  const root = await fixture(t, `<script>${body.replaceAll("\n", "\r\n")}</script><script src='/app.js'></script>`);
  await mkdir(join(root, "learn"));
  await writeFile(join(root, "learn", "index.html"), `<script>${body}</script>`);
  assert.deepEqual(await prepareStaticCsp(root), { pages: 2, hashes: 1 });
  const config = JSON.parse(await readFile(join(root, "staticwebapp.config.json"), "utf8"));
  const hash = createHash("sha256").update(body).digest("base64");
  assert.equal(config.globalHeaders["Content-Security-Policy"], `default-src 'self'; script-src 'self' 'sha256-${hash}'; object-src 'none'`);
  assert.equal(config.globalHeaders["X-Frame-Options"], "DENY");
  assert.deepEqual(config.navigationFallback, template.navigationFallback);
  const before = await readFile(join(root, "staticwebapp.config.json"), "utf8");
  await prepareStaticCsp(root);
  assert.equal(await readFile(join(root, "staticwebapp.config.json"), "utf8"), before);
  await prepareStaticCsp(root, { verify: true });
});

test("rejects stale hashes when an exported script changes, then replaces them on rebuild", async (t) => {
  const root = await fixture(t);
  await prepareStaticCsp(root);
  await writeFile(join(root, "index.html"), "<script>window.ready = false;</script>");
  await assert.rejects(prepareStaticCsp(root, { verify: true }), /do not match/);
  await prepareStaticCsp(root);
  await prepareStaticCsp(root, { verify: true });
  const config = await readFile(join(root, "staticwebapp.config.json"), "utf8");
  assert.ok(!config.includes(createHash("sha256").update("window.ready = true;").digest("base64")));
});

test("fails closed for an unsafe script policy or missing hydration output", async (t) => {
  const root = await fixture(t, undefined, { globalHeaders: { "Content-Security-Policy": "script-src 'self' 'unsafe-inline'" } });
  await assert.rejects(prepareStaticCsp(root), /must restrict/);
  await writeFile(join(root, "index.html"), "<p>No scripts</p>");
  await assert.rejects(prepareStaticCsp(root), /requires exported HTML/);
});
