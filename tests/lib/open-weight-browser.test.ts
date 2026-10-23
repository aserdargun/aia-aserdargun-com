import { modelFamilies } from "@/data/model-families";
import { taskModelSources } from "@/data/sources";
import { openWeightModels, taxonomyTasks } from "@/data/task-models";
import {
  defaultOpenWeightBrowserState, groupOpenWeightRows, openWeightLicenses, openWeightPublishers,
  openWeightsExport, parseOpenWeightBrowserState, selectOpenWeights, serializeOpenWeightBrowserState,
  type OpenWeightBrowserState, type OpenWeightCatalog,
} from "@/lib/open-weight-browser";

const catalog: OpenWeightCatalog = {
  models: openWeightModels,
  sources: taskModelSources,
  tasks: taxonomyTasks,
  families: modelFamilies,
};

function state(update: Partial<OpenWeightBrowserState> = {}): OpenWeightBrowserState {
  return { ...defaultOpenWeightBrowserState, ...update };
}

describe("open-weight browser state", () => {
  it("starts with every catalogue model visible", () => {
    const rows = selectOpenWeights(catalog, state());
    expect(rows).toHaveLength(openWeightModels.length);
    expect(rows.every((row) => row.tasks.length > 0)).toBe(true);
    expect(rows.every((row) => row.families.length > 0)).toBe(true);
    expect(rows.every((row) => row.evidence.card.url.startsWith("https://"))).toBe(true);
  });

  it("round-trips through the URL without losing a filter", () => {
    const current = state({
      query: "qwen", publisher: "Qwen", license: "Apache-2.0", band: "≤24",
      access: "public", taskId: "text-generation", familyId: "transformers",
      groupBy: "task", locale: "tr",
    });
    const query = serializeOpenWeightBrowserState(current);
    const parsed = parseOpenWeightBrowserState(new URLSearchParams(query), catalog);
    expect(parsed).toEqual(current);
  });

  it("ignores unknown identifiers instead of trusting the URL", () => {
    const parsed = parseOpenWeightBrowserState(
      new URLSearchParams("publisher=unknown-publisher&license=unknown&task=nope&family=nope&size=512&group=galaxy&lang=fr"),
      catalog,
    );
    expect(parsed.publisher).toBeNull();
    expect(parsed.license).toBeNull();
    expect(parsed.taskId).toBeNull();
    expect(parsed.familyId).toBeNull();
    expect(parsed.band).toBeNull();
    expect(parsed.groupBy).toBe("publisher");
    expect(parsed.locale).toBe("en");
  });

  it("filters by publisher, license, size band, task and family", () => {
    const publisher = openWeightPublishers(catalog)[0];
    const byPublisher = selectOpenWeights(catalog, state({ publisher }));
    expect(byPublisher.length).toBeGreaterThan(0);
    expect(byPublisher.every((row) => row.publisher === publisher)).toBe(true);

    const license = openWeightLicenses(catalog)[0];
    expect(selectOpenWeights(catalog, state({ license })).every((row) => row.model.license === license)).toBe(true);

    const gated = selectOpenWeights(catalog, state({ access: "gated" }));
    expect(gated.every((row) => row.model.access === "gated")).toBe(true);

    const task = taxonomyTasks.find((candidate) => candidate.recommendations.length > 0)!;
    const byTask = selectOpenWeights(catalog, state({ taskId: task.id }));
    expect(byTask.length).toBeGreaterThan(0);
    expect(byTask.every((row) => row.tasks.some((candidate) => candidate.id === task.id))).toBe(true);

    const family = modelFamilies[0];
    const byFamily = selectOpenWeights(catalog, state({ familyId: family.id }));
    expect(byFamily.every((row) => row.families.some((candidate) => candidate.id === family.id))).toBe(true);
  });

  it("groups the visible rows by publisher, task or family", () => {
    const rows = selectOpenWeights(catalog, state());
    const byPublisher = groupOpenWeightRows(rows, state({ groupBy: "publisher" }));
    expect(byPublisher.length).toBeGreaterThan(0);
    expect(byPublisher.reduce((total, group) => total + group.rows.length, 0)).toBeGreaterThanOrEqual(rows.length);

    const byTask = groupOpenWeightRows(rows, state({ groupBy: "task" }));
    expect(byTask.length).toBeGreaterThan(0);
    expect(byTask.reduce((total, group) => total + group.rows.length, 0)).toBeGreaterThanOrEqual(rows.length);

    const byFamily = groupOpenWeightRows(rows, state({ groupBy: "family" }));
    expect(byFamily.length).toBeGreaterThan(0);
  });

  it("includes smaller models in a memory ceiling and separates unknown estimates", () => {
    const all = selectOpenWeights(catalog, state());
    for (const limit of [8, 16, 24, 48, 80]) {
      const band = `≤${limit}` as OpenWeightBrowserState["band"];
      expect(selectOpenWeights(catalog, state({ band })).map((row) => row.model.id)).toEqual(
        all.filter((row) => row.footprint.vram4 !== null && row.footprint.vram4 <= limit).map((row) => row.model.id),
      );
    }
    const unknown = state({ band: "unknown" });
    expect(parseOpenWeightBrowserState(new URLSearchParams(serializeOpenWeightBrowserState(unknown)), catalog)).toEqual(unknown);
    const unknownRows = selectOpenWeights(catalog, unknown);
    expect(unknownRows.length).toBeGreaterThan(0);
    expect(unknownRows.every((row) => row.footprint.vram4 === null)).toBe(true);
  });

  it("lists a shared model-card and license citation only once", () => {
    for (const row of selectOpenWeights(catalog, state())) {
      expect(new Set(row.sourceIds).size).toBe(row.sourceIds.length);
      expect(row.sourceIds).toContain(row.model.cardSourceId);
      expect(row.sourceIds).toContain(row.model.weightsSourceId);
      expect(row.sourceIds).toContain(row.model.licenseSourceId);
    }
  });

  it("exports the visible rows with their evidence", () => {
    const table = openWeightsExport(catalog, state());
    expect(table.headers.length).toBe(11);
    expect(table.rows).toHaveLength(openWeightModels.length);
    expect(table.rows[0][0]).toBe(openWeightModels[0].name);
    expect(String(table.rows[0][10])).toMatch(/^https:\/\//);
  });
});
