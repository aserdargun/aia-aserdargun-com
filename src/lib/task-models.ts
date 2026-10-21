import { openWeightModelSchema, taxonomyTaskSchema, taskModelSourceSchema, type OpenWeightModel, type TaxonomyTask, type TaskModelSource, type TaxonomySource } from "@/data/schema";
import { taskModelLabels, type ModelLocale } from "@/lib/labels";

export function taskModelHref(taskId: string | null, locale: ModelLocale, hash = "") {
  const query = new URLSearchParams();
  if (locale === "tr") query.set("lang", locale);
  if (taskId) query.set("task", taskId);
  return `/taxonomy/tasks${query.size ? `?${query}` : ""}${hash}`;
}

function escapeAttribute(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Only adapt trusted repository SVG links. The downloadable source remains intact. */
export function linkTaskCards(svg: string, tasks: TaxonomyTask[], locale: ModelLocale, selectedId: string | null) {
  return svg.replace(/<a\b[^>]*>\s*(<g data-card="([^"]+)"[^>]*>)/g, (match, group: string, encodedName: string) => {
    const task = tasks.find((entry) => escapeAttribute(entry.name) === encodedName);
    if (!task) return match;
    const label = `${task.name}: ${taskModelLabels[locale].cardAction}`;
    return `<a href="${escapeAttribute(taskModelHref(task.id, locale))}" data-task-id="${task.id}" aria-label="${escapeAttribute(label)}"${task.id === selectedId ? ' aria-current="true"' : ""}>${group}`;
  });
}

export function validateTaskModels(tasks: TaxonomyTask[], models: OpenWeightModel[], sources: TaskModelSource[], definitions: TaxonomySource[], svg: string) {
  function unique(values: string[], label: string) {
    if (new Set(values).size !== values.length) throw new Error(`Duplicate ${label}.`);
  }
  tasks.forEach((task) => taxonomyTaskSchema.parse(task));
  models.forEach((model) => openWeightModelSchema.parse(model));
  sources.forEach((source) => taskModelSourceSchema.parse(source));
  unique(tasks.map((task) => task.id), "task ID");
  unique(tasks.map((task) => task.name), "task name");
  unique(models.map((model) => model.id), "model ID");
  unique(sources.map((source) => source.id), "model source ID");
  const bySource = new Map(sources.map((source) => [source.id, source]));
  const byModel = new Map(models.map((model) => [model.id, model]));
  const cardNames = [...svg.matchAll(/data-card="([^"]+)"/g)].map((match) => match[1]);
  if (cardNames.length !== tasks.length || tasks.some((task) => !cardNames.includes(escapeAttribute(task.name)))) {
    throw new Error("Task catalogue does not cover the SVG cards exactly.");
  }
  for (const model of models) {
    const card = bySource.get(model.cardSourceId);
    const weights = bySource.get(model.weightsSourceId);
    if (!card || !weights || !bySource.has(model.licenseSourceId)) throw new Error(`Missing model source: ${model.id}`);
    if (card.kind !== "model-card" || weights.kind !== "weights" || !weights.revision || weights.url !== `${card.url}/tree/${weights.revision}` || card.revision !== weights.revision) {
      throw new Error(`Model weights must identify the observed checkpoint revision: ${model.id}`);
    }
  }
  for (const task of tasks) {
    if (!definitions.some((source) => source.id === task.definitionSourceId)) throw new Error(`Missing task definition: ${task.id}`);
    unique(task.recommendations.map((entry) => entry.modelId), `recommendation in ${task.id}`);
    for (const entry of task.recommendations) {
      const model = byModel.get(entry.modelId);
      if (!model || entry.sourceIds.some((id) => !bySource.has(id))) throw new Error(`Unresolved task evidence: ${task.id}`);
      if (!entry.sourceIds.includes(model.cardSourceId)) throw new Error(`Task evidence must cite the exact model: ${task.id}`);
    }
  }
}
