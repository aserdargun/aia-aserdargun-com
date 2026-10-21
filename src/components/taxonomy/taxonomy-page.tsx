import { readFile } from "node:fs/promises";
import path from "node:path";
import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TaxonomyExplorer } from "@/components/taxonomy/taxonomy-explorer";
import { taxonomyMaps } from "@/data/taxonomy";
import { taxonomySources, taskModelSources, modelFamilySources, benchmarkSources } from "@/data/sources";
import { benchmarkCandidates, taskBenchmarks, taskBenchmarkReviews } from "@/data/task-benchmarks";
import { validateTaskBenchmarks } from "@/lib/task-benchmarks";
import { taxonomyTasks, openWeightModels } from "@/data/task-models";
import { modelFamilies } from "@/data/model-families";
import type { TaxonomyMap } from "@/data/schema";
import { taxonomyLabels } from "@/lib/labels";
import { validateTaxonomyMap } from "@/lib/taxonomy";
import { validateTaskModels } from "@/lib/task-models";
import { validateModelFamilies } from "@/lib/model-families";

export async function TaxonomyPage({ id }: { id: TaxonomyMap["id"] }) {
  const map = taxonomyMaps.find((entry) => entry.id === id)!;
  const svg = await readFile(path.join(process.cwd(), "public", map.assetPath), "utf8");
  validateTaxonomyMap(map, svg, taxonomySources);
  if (id === "tasks") validateTaskModels(taxonomyTasks, openWeightModels, taskModelSources, taxonomySources, svg);
  if (id === "tasks") validateTaskBenchmarks(taskBenchmarkReviews, taskBenchmarks, benchmarkCandidates, benchmarkSources, taxonomyTasks, openWeightModels, taskModelSources);
  const modelSources = id === "models" ? [...taskModelSources, ...modelFamilySources] : taskModelSources;
  if (id === "models") validateModelFamilies(modelFamilies, openWeightModels, taxonomyTasks, modelSources, taxonomySources, svg);
  const sources = taxonomySources.filter((source) => map.sourceIds.includes(source.id));
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="taxonomy-page" tabIndex={-1}>
        <Suspense fallback={<p>{taxonomyLabels.en.loading} / {taxonomyLabels.tr.loading} <a href={map.assetPath}>{taxonomyLabels.en.original} / {taxonomyLabels.tr.original}</a></p>}>
          <TaxonomyExplorer key={id} map={map} svg={svg} sources={sources}
            tasks={taxonomyTasks} models={openWeightModels} modelSources={modelSources}
            families={id === "models" ? modelFamilies : []} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
