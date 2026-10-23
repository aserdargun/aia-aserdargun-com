import { modelTaskValues, type AtlasDataset, type Model, type ModelTask } from "@/data/schema";
import type { ExportTable } from "@/lib/export";
import { modelBrowserLabels, modelLifecycleLabels, modelTaskLabels, type ModelLocale } from "@/lib/labels";
import { matchesSearch } from "@/lib/search";

export type ModelCatalog = Pick<AtlasDataset, "models" | "vendors" | "sources">;

export type ModelBrowserState = {
  query: string;
  taskId: ModelTask | null;
  vendorId: string | null;
  includeHistorical: boolean;
  locale: ModelLocale;
};

export const defaultModelBrowserState: Readonly<ModelBrowserState> = Object.freeze({
  query: "", taskId: null, vendorId: null, includeHistorical: false, locale: "en",
});

export function parseModelBrowserState(params: Pick<URLSearchParams, "get">, catalog: ModelCatalog): ModelBrowserState {
  const taskId = modelTaskValues.find((id) => id === params.get("task")) ?? null;
  const vendorId = catalog.vendors.find((vendor) => vendor.id === params.get("vendor"))?.id ?? null;
  return {
    query: (params.get("q") ?? "").slice(0, 120), taskId, vendorId,
    includeHistorical: params.get("history") === "1",
    locale: params.get("lang") === "tr" ? "tr" : "en",
  };
}

export function serializeModelBrowserState(state: ModelBrowserState): string {
  const params = new URLSearchParams();
  if (state.query) params.set("q", state.query.slice(0, 120));
  if (state.taskId) params.set("task", state.taskId);
  if (state.vendorId) params.set("vendor", state.vendorId);
  if (state.includeHistorical) params.set("history", "1");
  if (state.locale !== "en") params.set("lang", state.locale);
  return params.toString();
}

export function selectModelTasks(catalog: ModelCatalog, state: ModelBrowserState) {
  const vendorById = new Map(catalog.vendors.map((vendor) => [vendor.id, vendor]));
  const candidates = catalog.models.filter((model) => {
    if (!state.includeHistorical && (model.lifecycle === "legacy" || model.lifecycle === "deprecated")) return false;
    if (state.vendorId && model.vendorId !== state.vendorId) return false;
    const taskText = model.taskIds.flatMap((id) => [modelTaskLabels.en[id].name, modelTaskLabels.tr[id].name]);
    return matchesSearch([model.name, model.family, vendorById.get(model.vendorId)?.name, ...taskText].join(" "), state.query);
  });
  const counts = new Map(modelTaskValues.map((id) => [id, candidates.filter((model) => model.taskIds.includes(id)).length]));
  const models = candidates.filter((model) => !state.taskId || model.taskIds.includes(state.taskId));
  const groups = modelTaskValues.flatMap((id) => {
    if (state.taskId && state.taskId !== id) return [];
    const members = models.filter((model) => model.taskIds.includes(id));
    return members.length ? [{ id, models: members }] : [];
  });
  return { models, groups, counts, totalCount: candidates.length };
}

export function formatModelPrice(model: Model, locale: ModelLocale): string | null {
  const pricing = model.pricing;
  if (!pricing) {
    return null;
  }
  const format = (value: number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(value);
  const parts: string[] = [];
  if (pricing.inputPerMillionUsd !== undefined) {
    parts.push(`${format(pricing.inputPerMillionUsd)} ${modelBrowserLabels[locale].input}`);
  }
  if (pricing.outputPerMillionUsd !== undefined) {
    parts.push(`${format(pricing.outputPerMillionUsd)} ${modelBrowserLabels[locale].output}`);
  }
  return parts.length ? parts.join(" · ") : null;
}

export function modelTasksExport(catalog: ModelCatalog, state: ModelBrowserState): ExportTable {
  const labels = modelBrowserLabels[state.locale];
  const vendorById = new Map(catalog.vendors.map((vendor) => [vendor.id, vendor]));
  const sourceById = new Map(catalog.sources.map((source) => [source.id, source]));
  const { groups } = selectModelTasks(catalog, state);
  return {
    headers: [labels.exportTask, labels.exportModel, labels.exportVendor, labels.exportStatus, labels.exportDate, labels.exportSources],
    // One row per visible task/model membership; counts in the UI remain unique.
    rows: groups.flatMap((group) => group.models.map((model: Model) => [
      modelTaskLabels[state.locale][group.id].name,
      model.name,
      vendorById.get(model.vendorId)?.name ?? model.vendorId,
      modelLifecycleLabels[state.locale][model.lifecycle],
      model.verifiedAt,
      model.sourceIds.map((id) => sourceById.get(id)?.url ?? "").filter(Boolean).join(" "),
    ])),
  };
}
