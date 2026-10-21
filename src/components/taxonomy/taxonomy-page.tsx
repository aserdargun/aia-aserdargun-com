import { readFile } from "node:fs/promises";
import path from "node:path";
import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TaxonomyExplorer } from "@/components/taxonomy/taxonomy-explorer";
import { taxonomyMaps } from "@/data/taxonomy";
import { taxonomySources } from "@/data/sources";
import type { TaxonomyMap } from "@/data/schema";
import { taxonomyLabels } from "@/lib/labels";
import { validateTaxonomyMap } from "@/lib/taxonomy";

export async function TaxonomyPage({ id }: { id: TaxonomyMap["id"] }) {
  const map = taxonomyMaps.find((entry) => entry.id === id)!;
  const svg = await readFile(path.join(process.cwd(), "public", map.assetPath), "utf8");
  validateTaxonomyMap(map, svg, taxonomySources);
  const sources = taxonomySources.filter((source) => map.sourceIds.includes(source.id));
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="taxonomy-page" tabIndex={-1}>
        <Suspense fallback={<p>{taxonomyLabels.en.loading} / {taxonomyLabels.tr.loading} <a href={map.assetPath}>{taxonomyLabels.en.original} / {taxonomyLabels.tr.original}</a></p>}>
          <TaxonomyExplorer key={id} map={map} svg={svg} sources={sources} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
