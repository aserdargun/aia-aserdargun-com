import { atlasDataset } from "../src/data/index";
import { readFile } from "node:fs/promises";
import { taxonomyMaps } from "../src/data/taxonomy";
import { taxonomySources, taskModelSources } from "../src/data/sources";
import { taxonomyTasks, openWeightModels } from "../src/data/task-models";
import { validateTaskModels } from "../src/lib/task-models";
import { validateTaxonomyMap } from "../src/lib/taxonomy";

for (const map of taxonomyMaps) {
  validateTaxonomyMap(map, await readFile(`public${map.assetPath}`, "utf8"), taxonomySources);
}
console.log(`Taxonomy maps: ${taxonomyMaps.length}; scholarly references: ${taxonomySources.length}`);
validateTaskModels(taxonomyTasks, openWeightModels, taskModelSources, taxonomySources, await readFile("public/assets/taxonomy/ai-task-taxonomy.svg", "utf8"));
console.log(`Task catalogue: ${taxonomyTasks.length} tasks; ${openWeightModels.length} open-weight models; ${taskModelSources.length} primary observations`);

const collections = [
  ["Vendors", atlasDataset.vendors.length],
  ["Categories", atlasDataset.categories.length],
  ["Capabilities", atlasDataset.capabilities.length],
  ["Vendor entries", atlasDataset.vendorEntries.length],
  ["Assessments", atlasDataset.assessments.length],
  ["Models", atlasDataset.models.length],
  ["Plans", atlasDataset.plans.length],
  ["Sources", atlasDataset.sources.length],
] as const;

for (const [label, count] of collections) {
  console.log(`${label}: ${count}`);
}

const latestVerification = [
  ...atlasDataset.vendorEntries,
  ...atlasDataset.models,
  ...atlasDataset.plans,
].reduce(
  (latest, record) => (record.verifiedAt > latest ? record.verifiedAt : latest),
  "",
);

console.log(`Latest verification: ${latestVerification}`);
