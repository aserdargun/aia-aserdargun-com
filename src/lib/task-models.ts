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
    if (card.kind !== "model-card" || weights.kind !== "weights") throw new Error(`Invalid model source kind: ${model.id}`);
    const artifact = weights.artifact;
    if (!artifact) {
      if (!weights.revision || weights.url !== `${card.url}/tree/${weights.revision}` || card.revision !== weights.revision) {
        throw new Error(`Model weights must identify the observed checkpoint revision: ${model.id}`);
      }
    } else if (artifact.type === "git") {
      const repository = new URL(artifact.repositoryUrl);
      if (repository.hostname !== "github.com" || !/^\/[^/]+\/[^/]+$/.test(repository.pathname)
        || artifact.path.split("/").some((part) => !part || part === "." || part === "..")
        || !weights.revision || card.revision !== weights.revision
        || !card.url.startsWith(`${artifact.repositoryUrl}/blob/${weights.revision}/`)
        || weights.url !== `${artifact.repositoryUrl}/${artifact.entry}/${weights.revision}/${artifact.path}`) {
        throw new Error(`Git artifact must identify the observed checkpoint revision: ${model.id}`);
      }
    } else if (artifact.type === "hf-repository") {
      const repository = new URL(artifact.repositoryUrl);
      if (repository.hostname !== "huggingface.co" || !/^\/[^/]+\/[^/]+$/.test(repository.pathname)
        || !weights.revision || card.revision !== weights.revision
        || card.url !== artifact.repositoryUrl
        || weights.url !== `${artifact.repositoryUrl}/tree/${weights.revision}`) {
        throw new Error(`Hugging Face artifact must identify the observed repository revision: ${model.id}`);
      }
      if (artifact.files.reduce((total, file) => total + file.sizeBytes, 0) !== artifact.totalBytes) {
        throw new Error(`Hugging Face file sizes do not add up to the published total: ${model.id}`);
      }
      if (artifact.gated !== (model.access === "gated")) {
        throw new Error(`Access state does not match the publisher repository: ${model.id}`);
      }
    } else {
      const evidence = bySource.get(artifact.evidenceSourceId);
      if (!evidence || !["model-card", "documentation"].includes(evidence.kind) || weights.revision) {
        throw new Error(`Publisher artifact needs release evidence, not a fabricated revision: ${model.id}`);
      }
      if (artifact.type === "publisher-file" && decodeURIComponent(new URL(weights.url).pathname.split("/").at(-1)!) !== artifact.fileName) {
        throw new Error(`Publisher artifact filename does not match: ${model.id}`);
      }
      if (artifact.type === "google-drive" && weights.url !== `https://drive.google.com/file/d/${artifact.fileId}/view`) {
        throw new Error(`Google Drive artifact must match the observed file ID: ${model.id}`);
      }
      if (artifact.type === "release") {
        const repository = new URL(artifact.repositoryUrl);
        if (repository.hostname !== "github.com" || !/^\/[^/]+\/[^/]+$/.test(repository.pathname)
          || weights.url !== `${artifact.repositoryUrl}/releases/tag/${artifact.tag}`) throw new Error(`Invalid release artifact: ${model.id}`);
        unique(artifact.files.map((file) => file.name), `release file in ${model.id}`);
      }
    }
  }
  if (sources.some((source) => source.artifact && source.kind !== "weights")) throw new Error("Only weight sources can declare artifacts.");
  for (const task of tasks) {
    if (!definitions.some((source) => source.id === task.definitionSourceId)) throw new Error(`Missing task definition: ${task.id}`);
    unique(task.recommendations.map((entry) => entry.modelId), `recommendation in ${task.id}`);
    if (task.review) {
      unique(task.review.sourceIds, `review source in ${task.id}`);
      if (task.review.sourceIds.some((id) => !bySource.has(id))) throw new Error(`Unresolved task review evidence: ${task.id}`);
      const hasDocumentedModel = task.recommendations.some((entry) => entry.evidence !== "adaptation");
      if ((task.review.outcome === "no-verified-model") === hasDocumentedModel) throw new Error(`Task review outcome contradicts model evidence: ${task.id}`);
    }
    for (const entry of task.recommendations) {
      const model = byModel.get(entry.modelId);
      if (!model || entry.sourceIds.some((id) => !bySource.has(id))) throw new Error(`Unresolved task evidence: ${task.id}`);
      unique(entry.sourceIds, `source in ${task.id}/${entry.modelId}`);
      if (!entry.sourceIds.includes(model.cardSourceId)) throw new Error(`Task evidence must cite the exact model: ${task.id}`);
    }
  }
}
