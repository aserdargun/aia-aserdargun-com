import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { once } from "node:events";
import test from "node:test";

test("static preview serves deep links, HEAD and genuine 404s within the export", { timeout: 15_000 }, async () => {
  const dir = await mkdtemp(join(tmpdir(), "aia-static-"));
  await mkdir(join(dir, "out", "learn"), { recursive: true });
  await writeFile(join(dir, "out", "index.html"), "Atlas");
  await writeFile(join(dir, "out", "learn", "llm.html"), "Concept");
  await writeFile(join(dir, "out", "404.html"), "Not found");
  await writeFile(join(dir, "private.txt"), "outside export");
  const child = spawn(process.execPath, [fileURLToPath(new URL("./serve-static.mjs", import.meta.url))], {
    cwd: dir, env: { ...process.env, PORT: "0" }, stdio: ["ignore", "pipe", "pipe"],
  });
  try {
    const [chunk] = await once(child.stdout, "data");
    const url = chunk.toString().match(/http:\/\/127\.0\.0\.1:\d+/)[0];
    const response = await fetch(url + "/learn/llm");
    assert.equal(response.status, 200);
    assert.equal(await response.text(), "Concept");
    assert.match(response.headers.get("content-type"), /text\/html/);
    assert.equal((await fetch(url + "/learn/llm", { method: "HEAD" })).status, 200);
    assert.equal((await fetch(url + "/missing")).status, 404);
    assert.equal((await fetch(url + "/", { method: "POST" })).status, 405);
    assert.equal((await fetch(url + "/..%2fprivate.txt")).status, 400);
  } finally {
    child.kill();
    await once(child, "exit");
    await rm(dir, { recursive: true, force: true });
  }
});
