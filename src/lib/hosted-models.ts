import {
  hostedModelSchema, hostedReferenceSchema, taskModelSourceSchema,
  type HostedModel, type HostedReference, type ModelFamily, type OpenWeightModel, type TaxonomyTask, type TaskModelSource,
} from "@/data/schema";
import type { ModelLocale } from "@/lib/labels";

export function filterHostedReferences(references: HostedReference[], models: HostedModel[], tasks: TaxonomyTask[], query: string, locale: ModelLocale) {
  const normalized = query.trim().toLocaleLowerCase(locale);
  return references.filter((entry) => {
    const model = models.find((model) => model.id === entry.modelId);
    if (!model) return false;
    const supported = tasks.filter((task) => task.hostedReferences?.some((reference) => reference.modelId === model.id));
    return !normalized || [model.name, model.provider, ...supported.flatMap((task) => [task.name, task.localizedName?.[locale] ?? ""])]
      .some((text) => text.toLocaleLowerCase(locale).includes(normalized));
  });
}

/** Validate the service graph separately; never relax checkpoint validation. */
export function validateHostedReferences(
  tasks: TaxonomyTask[], families: ModelFamily[], models: HostedModel[],
  sources: TaskModelSource[], openModels: OpenWeightModel[],
) {
  const unique = (ids: string[], owner: string) => {
    if (new Set(ids).size !== ids.length) throw new Error(`Duplicate hosted ${owner}.`);
  };
  models.forEach((model) => hostedModelSchema.parse(model));
  sources.forEach((source) => taskModelSourceSchema.parse(source));
  unique(sources.map((source) => source.id), "source");
  unique(models.map((model) => model.id), "model");
  const bySource = new Map(sources.map((source) => [source.id, source]));
  const byModel = new Map(models.map((model) => [model.id, model]));
  for (const model of models) {
    if (openModels.some((entry) => entry.id === model.id)) throw new Error(`Hosted model overlaps open weights: ${model.id}`);
    for (const id of [model.cardSourceId, model.versionSourceId]) {
      const source = bySource.get(id);
      if (!source || !["documentation", "model-card"].includes(source.kind) || source.artifact) {
        throw new Error(`Missing or invalid hosted source: ${model.id}/${id}`);
      }
      if (source.publisher !== model.provider) throw new Error(`Hosted source publisher mismatch: ${model.id}/${id}`);
    }
    const identity = bySource.get(model.versionSourceId)!.serviceIdentity;
    if (identity?.modelId !== model.id || identity.version !== model.version) {
      throw new Error(`Hosted version source must identify the exact model version: ${model.id}`);
    }
  }
  for (const owner of [...tasks, ...families]) {
    const entries = owner.hostedReferences ?? [];
    unique(entries.map((entry) => entry.modelId), `reference in ${owner.id}`);
    for (const entry of entries) {
      hostedReferenceSchema.parse(entry);
      const model = byModel.get(entry.modelId);
      if (!model) throw new Error(`Unknown hosted model: ${owner.id}/${entry.modelId}`);
      unique(entry.sourceIds, `source in ${owner.id}/${model.id}`);
      if (entry.sourceIds.some((id) => !bySource.has(id) || bySource.get(id)!.kind === "weights")) {
        throw new Error(`Unresolved hosted source: ${owner.id}/${model.id}`);
      }
      if (!entry.sourceIds.includes(model.cardSourceId) || !entry.sourceIds.includes(model.versionSourceId)) {
        throw new Error(`Hosted evidence must cite the exact versioned model: ${owner.id}/${model.id}`);
      }
    }
  }
}
