import { taxonomyMapSchema, taxonomySourceSchema, type TaxonomyMap, type TaxonomySource } from "@/data/schema";
import type { ModelLocale } from "@/lib/labels";

export function taxonomyHref(id: TaxonomyMap["id"], locale: ModelLocale) {
  return `/taxonomy/${id}${locale === "tr" ? "?lang=tr" : ""}`;
}

/** Validate repository-owned SVGs at build time, before inline rendering. */
export function validateTaxonomyMap(map: TaxonomyMap, svg: string, sources: TaxonomySource[]) {
  taxonomyMapSchema.parse(map);
  sources.forEach((source) => taxonomySourceSchema.parse(source));
  if (new Set(sources.map((source) => source.id)).size !== sources.length) {
    throw new Error("Taxonomy sources contain duplicate IDs.");
  }
  if (!svg.trim().startsWith("<svg") || /<\s*(script|foreignObject|iframe|image|use)\b|\son\w+\s*=/i.test(svg)) {
    throw new Error(`Taxonomy ${map.id} must be a static SVG without active or embedded content.`);
  }
  const citedIds = new Set<string>();
  for (const [, href] of svg.matchAll(/\bhref="([^"]+)"/g)) {
    if (href === "sources-and-definitions.md" || /^ai-task-taxonomy\.svg#[a-z0-9-]+$/.test(href)) continue;
    const source = sources.find((entry) => entry.url === href);
    if (!source) throw new Error(`Taxonomy ${map.id} has an unregistered source: ${href}`);
    citedIds.add(source.id);
  }
  if (citedIds.size !== map.sourceIds.length || map.sourceIds.some((id) => !citedIds.has(id))) {
    throw new Error(`Taxonomy ${map.id} source IDs do not match the SVG citations.`);
  }
}

/** Preserve the downloadable original; adapt its local links for the app. */
export function prepareTaxonomySvg(svg: string, locale: ModelLocale) {
  return svg
    .replace(/<metadata>[\s\S]*?<\/metadata>/g, "")
    .replace(/<style>[\s\S]*?<\/style>/g, "")
    .replace('role="img"', 'role="group"')
    .replace(/<a href="ai-task-taxonomy\.svg#([a-z0-9-]+)"[^>]*>/g,
      (_, id: string) => `<a href="${taxonomyHref("tasks", locale)}#${id}" aria-label="Open task family: ${id}">`)
    .replace('href="sources-and-definitions.md"', 'href="#taxonomy-sources"');
}
