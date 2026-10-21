import { modelFamilySchema, taskModelSourceSchema, type ModelFamily, type OpenWeightModel, type TaxonomyTask, type TaskModelSource, type TaxonomySource } from "@/data/schema";
import { modelFamilyLabels, type ModelLocale } from "@/lib/labels";

export function modelFamilyHref(familyId: string | null, locale: ModelLocale, hash = "") {
  const query = new URLSearchParams();
  if (locale === "tr") query.set("lang", locale);
  if (familyId) query.set("family", familyId);
  return `/taxonomy/models${query.size ? `?${query}` : ""}${hash}`;
}

function escapeAttribute(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Adapt only concept cards; preserve task-family navigation and scholarly notes. */
export function linkModelFamilyCards(svg: string, families: ModelFamily[], locale: ModelLocale, selectedId: string | null) {
  return svg.replace(/<a\b[^>]*>\s*(<g data-card="([^"]+)"[^>]*>)/g, (match, group: string, encodedName: string) => {
    const family = families.find((entry) => escapeAttribute(entry.name) === encodedName);
    // Speech & Audio also occurs in the task-family navigation column.
    if (!family || !/href="https:/.test(match)) return match;
    const label = `${family.name}: ${modelFamilyLabels[locale].cardAction}`;
    return `<a href="${escapeAttribute(modelFamilyHref(family.id, locale))}" data-family-id="${family.id}" aria-label="${escapeAttribute(label)}"${family.id === selectedId ? ' aria-current="true"' : ""}>${group}`;
  });
}

/** Reverse the canonical task edges, retaining their exact evidence and caveats. */
export function tasksForModel(modelId: string, tasks: TaxonomyTask[]) {
  return tasks.flatMap((task) => {
    const evidence = task.recommendations.find((entry) => entry.modelId === modelId);
    return evidence ? [{ task, evidence }] : [];
  });
}

export function validateModelFamilies(families: ModelFamily[], models: OpenWeightModel[], tasks: TaxonomyTask[], sources: TaskModelSource[], definitions: TaxonomySource[], svg: string) {
  const unique = (values: string[], label: string) => {
    if (new Set(values).size !== values.length) throw new Error(`Duplicate ${label}.`);
  };
  families.forEach((family) => modelFamilySchema.parse(family));
  sources.forEach((source) => taskModelSourceSchema.parse(source));
  unique(families.map((family) => family.id), "model family ID");
  unique(families.map((family) => family.name), "model family name");
  unique(sources.map((source) => source.id), "family source ID");
  const bySource = new Map(sources.map((source) => [source.id, source]));
  const byModel = new Map(models.map((model) => [model.id, model]));
  const concepts = [...svg.matchAll(/<a href="(https:[^"]+)"[^>]*>\s*<g data-card="([^"]+)"/g)]
    .filter(([, , name]) => !["Paradigms Can Be Combined", "Model / Algorithm Tasks", "System-Level Tasks"].includes(name));
  if (concepts.length !== families.length || concepts.some(([, , name]) => !families.some((family) => escapeAttribute(family.name) === name))) {
    throw new Error("Model family catalogue does not cover the SVG concepts exactly.");
  }
  for (const family of families) {
    const definition = definitions.find((source) => source.id === family.definitionSourceId);
    const concept = concepts.find(([, , name]) => name === escapeAttribute(family.name));
    if (!definition || definition.url !== concept?.[1]) throw new Error(`Incorrect family definition: ${family.id}`);
    unique(family.models.map((entry) => entry.modelId), `model in ${family.id}`);
    for (const entry of family.models) {
      const model = byModel.get(entry.modelId);
      if (!model || entry.sourceIds.some((id) => !bySource.has(id))) throw new Error(`Unresolved family evidence: ${family.id}`);
      unique(entry.sourceIds, `source in ${family.id}/${entry.modelId}`);
      if (!entry.sourceIds.includes(model.cardSourceId)) throw new Error(`Family evidence must cite the exact model: ${family.id}`);
      if (!tasksForModel(model.id, tasks).length) throw new Error(`Family model has no task evidence: ${model.id}`);
    }
  }
  const covered = new Set(families.flatMap((family) => family.models.map((entry) => entry.modelId)));
  if (models.some((model) => !covered.has(model.id))) throw new Error("Open-weight models are missing family coverage.");
}
