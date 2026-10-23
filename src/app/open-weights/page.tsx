import { readFile } from "node:fs/promises";
import path from "node:path";
import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OpenWeightBrowser } from "@/components/open-weights/open-weight-browser";
import { modelFamilies } from "@/data/model-families";
import { modelFamilySources, taskModelSources, taxonomySources } from "@/data/sources";
import { openWeightModels, taxonomyTasks } from "@/data/task-models";
import { openWeightLabels } from "@/lib/labels";
import { validateModelFamilies } from "@/lib/model-families";
import { taxonomyCoverage } from "@/lib/open-weights";
import { validateTaskModels } from "@/lib/task-models";

export const metadata = {
  title: "Open weight models | AI Ecosystem Atlas",
  description:
    "Every open-weight model the AI task taxonomy cites, with published weight files, license, access conditions and local footprint estimates.",
  alternates: { canonical: "/open-weights" },
};

export default async function OpenWeightsPage() {
  // The catalogue stays honest at build time: every model needs task and family evidence.
  const svg = await readFile(
    path.join(process.cwd(), "public", "assets", "taxonomy", "ai-task-taxonomy.svg"),
    "utf8",
  );
  validateTaskModels(taxonomyTasks, openWeightModels, taskModelSources, taxonomySources, svg);
  validateModelFamilies(
    modelFamilies,
    openWeightModels,
    taxonomyTasks,
    [...taskModelSources, ...modelFamilySources],
    taxonomySources,
    await readFile(path.join(process.cwd(), "public", "assets", "taxonomy", "ai-model-taxonomy.svg"), "utf8"),
  );

  const coverage = taxonomyCoverage(taxonomyTasks);
  const labels = openWeightLabels.en;
  const catalog = {
    models: openWeightModels,
    sources: taskModelSources,
    tasks: taxonomyTasks,
    families: modelFamilies,
  };

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="open-weight-page" tabIndex={-1}>
        <section className="open-weight-coverage" aria-label={labels.coverage}>
          <h2>{labels.coverage}</h2>
          <p>{labels.coverageHint}</p>
          <ul>
            <li><strong>{coverage.totalTasks}</strong> <span>{labels.tasks}</span></li>
            <li><strong>{coverage.tasksWithModels}</strong> <span>{labels.withModels}</span></li>
            <li><strong>{coverage.specialist}</strong> <span>{labels.specialist}</span></li>
            <li><strong>{coverage.pipeline}</strong> <span>{labels.pipeline}</span></li>
            <li><strong>{coverage.withoutModels}</strong> <span>{labels.withoutModels}</span></li>
          </ul>
        </section>
        <Suspense fallback={<p>{labels.loading}</p>}>
          <OpenWeightBrowser catalog={catalog} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
