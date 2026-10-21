import { constants } from "node:fs";
import { access, readdir } from "node:fs/promises";
import { prepareStaticCsp } from "./prepare-static-csp.mjs";

async function requireReadablePath(path: string): Promise<void> {
  try {
    await access(path, constants.R_OK);
  } catch {
    throw new Error(`Static export is missing required path: ${path}`);
  }
}

const { learnDataset } = await import("@/data/learn");
const { taxonomyMaps } = await import("@/data/taxonomy");
const routes = ["index", "404", "models", ...taxonomyMaps.map((map) => `taxonomy/${map.id}`), "learn", "learn/review", "learn/stats", ...learnDataset.concepts.map((concept) => `learn/${concept.id}`)];
for (const route of routes) await requireReadablePath(`out/${route}.html`);
for (const map of taxonomyMaps) await requireReadablePath(`out${map.assetPath}`);
await requireReadablePath("out/assets/taxonomy/sources-and-definitions.md");
await requireReadablePath("out/favicon.svg");
await requireReadablePath("out/sitemap.xml");
await requireReadablePath("out/robots.txt");
await requireReadablePath("out/_next/static");

const staticEntries = await readdir("out/_next/static");
if (staticEntries.length === 0) {
  throw new Error("Static export contains no Next.js static assets.");
}

await prepareStaticCsp("out", { verify: true });

console.log(
  `Static export verified: ${routes.length} pages, favicon, and ${staticEntries.length} asset group(s).`,
);
