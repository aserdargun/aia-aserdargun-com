import { Suspense } from "react";
import { ModelTaskBrowser } from "@/components/atlas/model-task-browser";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { atlasDataset } from "@/data/index";
import { modelBrowserLabels } from "@/lib/labels";

export const metadata = {
  title: "Models by task | AI Ecosystem Atlas",
  description: "Explore source-backed AI model groups for writing, reasoning, coding, agents, documents, vision, and image generation.",
  alternates: { canonical: "/models" },
};

export default function ModelsPage() {
  const sourceIds = new Set(atlasDataset.models.flatMap((model) => model.sourceIds));
  const catalog = {
    models: atlasDataset.models,
    vendors: atlasDataset.vendors,
    sources: atlasDataset.sources.filter((source) => sourceIds.has(source.id)),
  };
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="model-page" tabIndex={-1}>
        <Suspense fallback={<p>{modelBrowserLabels.en.loading} / {modelBrowserLabels.tr.loading}</p>}>
          <ModelTaskBrowser catalog={catalog} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
