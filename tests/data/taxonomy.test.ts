import { readFileSync } from "node:fs";
import { taxonomyMaps } from "@/data/taxonomy";
import { taxonomySources } from "@/data/sources";
import { prepareTaxonomySvg, validateTaxonomyMap } from "@/lib/taxonomy";

describe("taxonomy SVG integration", () => {
  const modelMap = taxonomyMaps.find((map) => map.id === "models")!;
  const modelSvg = readFileSync(`public${modelMap.assetPath}`, "utf8");

  it("keeps both maps' citations, dimensions and cross-map fragments resolvable", () => {
    const taskMap = taxonomyMaps.find((map) => map.id === "tasks")!;
    const taskDocument = new DOMParser().parseFromString(readFileSync(`public${taskMap.assetPath}`, "utf8"), "image/svg+xml");
    for (const map of taxonomyMaps) {
      const svg = readFileSync(`public${map.assetPath}`, "utf8");
      expect(() => validateTaxonomyMap(map, svg, taxonomySources)).not.toThrow();
      const document = new DOMParser().parseFromString(svg, "image/svg+xml");
      expect(document.querySelector("parsererror")).toBeNull();
      expect(document.documentElement.getAttribute("viewBox")).toBe(`0 0 ${map.width} ${map.height}`);
      for (const link of document.querySelectorAll('a[href^="ai-task-taxonomy.svg#"]')) {
        const fragment = link.getAttribute("href")!.split("#")[1];
        expect(taskDocument.getElementById(fragment)).not.toBeNull();
      }
    }
  });

  it("rejects unregistered evidence and active SVG content before inline rendering", () => {
    expect(() => validateTaxonomyMap(modelMap, modelSvg.replace('href="https://aima.cs.berkeley.edu/contents.html"', 'href="https://example.org/unreviewed"'), taxonomySources)).toThrow(/unregistered source/);
    expect(() => validateTaxonomyMap(modelMap, modelSvg.replace("</svg>", "<script>alert(1)</script></svg>"), taxonomySources)).toThrow(/static SVG/);
    expect(() => validateTaxonomyMap(modelMap, modelSvg, taxonomySources.slice(1))).toThrow(/unregistered source/);
    expect(() => validateTaxonomyMap({ ...modelMap, sourceIds: modelMap.sourceIds.map((id, index) => index === 1 ? modelMap.sourceIds[0] : id) }, modelSvg, taxonomySources)).toThrow(/unique/);
  });

  it("adapts app links in both languages without leaking SVG styles or changing citations", () => {
    for (const locale of ["en", "tr"] as const) {
      const svg = prepareTaxonomySvg(modelSvg, locale);
      expect(svg).toContain(`/taxonomy/tasks${locale === "tr" ? "?lang=tr" : ""}#language-text`);
      expect(svg).toContain('href="#taxonomy-sources"');
      expect(svg).toContain('href="https://aima.cs.berkeley.edu/contents.html"');
      expect(svg).not.toMatch(/<style>|<metadata>|href="ai-task-taxonomy/);
    }
  });
});
