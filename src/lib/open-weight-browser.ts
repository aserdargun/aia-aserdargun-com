import type { ModelFamily, OpenWeightModel, TaskModelSource, TaxonomyTask } from "@/data/schema";
import type { ExportTable } from "@/lib/export";
import { openWeightLabels, type ModelLocale } from "@/lib/labels";
import {
  footprintBandValues,
  formatBytes,
  formatParameterCount,
  footprintFor,
  openWeightEvidence,
  openWeightPublisher,
  type FootprintBand,
  type OpenWeightEvidence,
  type OpenWeightFootprint,
} from "@/lib/open-weights";
import { matchesSearch } from "@/lib/search";

export type OpenWeightCatalog = {
  models: OpenWeightModel[];
  sources: TaskModelSource[];
  tasks: TaxonomyTask[];
  families: ModelFamily[];
};

export type OpenWeightGroupBy = "publisher" | "task" | "family";

export type OpenWeightBrowserState = {
  query: string;
  publisher: string | null;
  license: string | null;
  band: FootprintBand | null;
  access: "public" | "gated" | null;
  taskId: string | null;
  familyId: string | null;
  groupBy: OpenWeightGroupBy;
  locale: ModelLocale;
};

export const defaultOpenWeightBrowserState: Readonly<OpenWeightBrowserState> = Object.freeze({
  query: "", publisher: null, license: null, band: null, access: null,
  taskId: null, familyId: null, groupBy: "publisher", locale: "en",
});

const groupByValues: OpenWeightGroupBy[] = ["publisher", "task", "family"];

export function parseOpenWeightBrowserState(
  params: Pick<URLSearchParams, "get">,
  catalog: OpenWeightCatalog,
): OpenWeightBrowserState {
  const band = params.get("size");
  const access = params.get("access");
  const group = params.get("group");
  return {
    query: (params.get("q") ?? "").slice(0, 120),
    publisher: catalog.models.some((model) => openWeightPublisher(model, catalog.sources) === params.get("publisher"))
      ? params.get("publisher")
      : null,
    license: catalog.models.some((model) => model.license === params.get("license"))
      ? params.get("license")
      : null,
    band: band !== null && (footprintBandValues as readonly string[]).includes(band)
      ? (band as FootprintBand)
      : null,
    access: access === "public" || access === "gated" ? access : null,
    taskId: catalog.tasks.some((task) => task.id === params.get("task")) ? params.get("task") : null,
    familyId: catalog.families.some((family) => family.id === params.get("family")) ? params.get("family") : null,
    groupBy: group !== null && (groupByValues as readonly string[]).includes(group)
      ? (group as OpenWeightGroupBy)
      : "publisher",
    locale: params.get("lang") === "tr" ? "tr" : "en",
  };
}

export function serializeOpenWeightBrowserState(state: OpenWeightBrowserState): string {
  const params = new URLSearchParams();
  if (state.query) params.set("q", state.query.slice(0, 120));
  if (state.publisher) params.set("publisher", state.publisher);
  if (state.license) params.set("license", state.license);
  if (state.band) params.set("size", state.band);
  if (state.access) params.set("access", state.access);
  if (state.taskId) params.set("task", state.taskId);
  if (state.familyId) params.set("family", state.familyId);
  if (state.groupBy !== defaultOpenWeightBrowserState.groupBy) params.set("group", state.groupBy);
  if (state.locale !== "en") params.set("lang", state.locale);
  return params.toString();
}

export type OpenWeightRow = {
  model: OpenWeightModel;
  footprint: OpenWeightFootprint;
  publisher: string;
  tasks: TaxonomyTask[];
  families: ModelFamily[];
  evidence: OpenWeightEvidence;
  sourceIds: string[];
};

export function selectOpenWeights(catalog: OpenWeightCatalog, state: OpenWeightBrowserState): OpenWeightRow[] {
  const taskByModel = new Map<string, TaxonomyTask[]>();
  for (const task of catalog.tasks) {
    for (const entry of task.recommendations) {
      const list = taskByModel.get(entry.modelId) ?? [];
      list.push(task);
      taskByModel.set(entry.modelId, list);
    }
  }
  const familyByModel = new Map<string, ModelFamily[]>();
  for (const family of catalog.families) {
    for (const entry of family.models) {
      const list = familyByModel.get(entry.modelId) ?? [];
      list.push(family);
      familyByModel.set(entry.modelId, list);
    }
  }

  return catalog.models.flatMap((model) => {
    const evidence = openWeightEvidence(model, catalog.sources);
    if (!evidence) {
      return [];
    }
    const publisher = evidence.card.publisher;
    const footprint = footprintFor(model, catalog.sources);
    const tasks = taskByModel.get(model.id) ?? [];
    const families = familyByModel.get(model.id) ?? [];
    if (state.publisher && publisher !== state.publisher) return [];
    if (state.license && model.license !== state.license) return [];
    if (state.band && footprint.band !== state.band) return [];
    if (state.access && model.access !== state.access) return [];
    if (state.taskId && !tasks.some((task) => task.id === state.taskId)) return [];
    if (state.familyId && !families.some((family) => family.id === state.familyId)) return [];
    const haystack = [
      model.name, publisher, model.license, model.context.en, model.context.tr,
      ...tasks.map((task) => task.name),
      ...families.map((family) => family.name),
    ].join(" ");
    if (!matchesSearch(haystack, state.query)) return [];
    return [{
      model,
      footprint,
      publisher,
      tasks,
      families,
      evidence,
      sourceIds: [model.cardSourceId, model.weightsSourceId, model.licenseSourceId],
    }];
  });
}

export function groupOpenWeightRows(
  rows: OpenWeightRow[],
  state: OpenWeightBrowserState,
): Array<{ id: string; name: string; rows: OpenWeightRow[] }> {
  const groups = new Map<string, { id: string; name: string; rows: OpenWeightRow[] }>();
  for (const row of rows) {
    const keys: Array<{ id: string; name: string }> = state.groupBy === "publisher"
      ? [{ id: row.publisher, name: row.publisher }]
      : state.groupBy === "task"
        ? row.tasks.map((task) => ({ id: task.id, name: task.name }))
        : row.families.map((family) => ({ id: family.id, name: family.name }));
    for (const key of keys) {
      const group = groups.get(key.id);
      if (group) {
        group.rows.push(row);
      } else {
        groups.set(key.id, { id: key.id, name: key.name, rows: [row] });
      }
    }
  }
  return [...groups.values()].sort((left, right) => left.name.localeCompare(right.name, "en"));
}

export function openWeightPublishers(catalog: OpenWeightCatalog): string[] {
  return [...new Set(catalog.models.map((model) => openWeightPublisher(model, catalog.sources)))].sort();
}

export function openWeightLicenses(catalog: OpenWeightCatalog): string[] {
  return [...new Set(catalog.models.map((model) => model.license))].sort();
}

export function openWeightsExport(catalog: OpenWeightCatalog, state: OpenWeightBrowserState): ExportTable {
  const labels = openWeightLabels[state.locale];
  const rows = selectOpenWeights(catalog, state);
  return {
    headers: [
      labels.exportModel, labels.exportPublisher, labels.exportLicense, labels.exportParameters,
      labels.exportWeights, labels.exportVram4, labels.exportAccess, labels.exportTasks,
      labels.exportFamilies, labels.exportDate, labels.exportRepository,
    ],
    rows: rows.map((row) => [
      row.model.name,
      row.publisher,
      row.model.license,
      formatParameterCount(row.footprint.parameters, state.locale),
      formatBytes(row.footprint.bytes, state.locale),
      row.footprint.vram4 ?? "",
      row.model.access === "gated" ? labels.gated : labels.public,
      row.tasks.map((task) => task.name).join(" · "),
      row.families.map((family) => family.name).join(" · "),
      row.evidence.card.observedAt,
      row.evidence.card.url,
    ]),
  };
}
