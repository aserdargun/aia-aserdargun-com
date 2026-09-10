import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT ?? 3000);
const mimeTypes = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json",
  ".txt": "text/plain; charset=utf-8", ".svg": "image/svg+xml",
  ".png": "image/png", ".ico": "image/x-icon", ".woff2": "font/woff2",
};
await stat(resolve(root, "index.html"));

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const path = resolve(root, "." + pathname);
    if ((path !== root && !path.startsWith(root + sep)) || pathname.includes("\0")) {
      response.writeHead(400); response.end(); return;
    }
    const candidates = pathname === "/" ? [resolve(root, "index.html")]
      : [path, path + ".html", resolve(path, "index.html")];
    let body;
    let file;
    for (const candidate of candidates) {
      try {
        if (!(await stat(candidate)).isFile()) continue;
        body = await readFile(candidate);
        file = candidate;
        break;
      } catch (error) {
        if (error.code !== "ENOENT" && error.code !== "ENOTDIR") throw error;
      }
    }
    const status = file ? 200 : 404;
    if (!file) { file = resolve(root, "404.html"); body = await readFile(file); }
    response.writeHead(status, {
      "Content-Type": mimeTypes[extname(file)] ?? "application/octet-stream",
      "Content-Length": body.length,
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    response.writeHead(400); response.end("Invalid request");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Static export preview: http://127.0.0.1:${server.address().port}`);
});
