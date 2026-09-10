import { constants } from "node:fs";
import { access, readdir } from "node:fs/promises";

async function requireReadablePath(path: string): Promise<void> {
  try {
    await access(path, constants.R_OK);
  } catch {
    throw new Error(`Static export is missing required path: ${path}`);
  }
}

const { learnDataset } = await import("@/data/learn");
const routes = ["index", "404", "learn", "learn/review", "learn/stats", ...learnDataset.concepts.map((concept) => `learn/${concept.id}`)];
for (const route of routes) await requireReadablePath(`out/${route}.html`);
await requireReadablePath("out/favicon.svg");
await requireReadablePath("out/_next/static");

const staticEntries = await readdir("out/_next/static");
if (staticEntries.length === 0) {
  throw new Error("Static export contains no Next.js static assets.");
}

console.log(
  `Static export verified: ${routes.length} pages, favicon, and ${staticEntries.length} asset group(s).`,
);
