import type { ModelFamily, OpenWeightModel, TaskModelSource, TaxonomyTask } from "@/data/schema";
import { tasksForModel } from "@/lib/model-families";
import type { ModelLocale } from "@/lib/labels";

/**
 * Local-footprint estimates for open-weight models.
 *
 * Published file bytes describe disk size; published parameter counts drive
 * the separate, hypothetical quantized-memory estimate. File bytes cannot stand
 * in for parameters: checkpoints can store different dtypes or multiple variants.
 *
 * Method: 4-bit checkpoints store roughly 0.55 bytes per parameter including
 * block scales, 8-bit roughly 1.05 bytes per parameter. A fixed 2 GiB runtime
 * allowance is a planning assumption, not a bound on cache or runtime memory.
 * Quantization support and device fit require separate verification. Sizes use
 * binary units (1 GiB = 1024^3 bytes).
 */
const GIB = 1024 ** 3;
const RUNTIME_ALLOWANCE_BYTES = 2 * GIB;
const FOUR_BIT_BYTES_PER_PARAMETER = 0.55;
const EIGHT_BIT_BYTES_PER_PARAMETER = 1.05;

export const footprintBandValues = ["≤8", "≤16", "≤24", "≤48", "≤80", ">80"] as const;
export type FootprintBand = (typeof footprintBandValues)[number] | "unknown";

export type OpenWeightFootprint = {
  /** Total bytes of the publisher's weight files, when the artifact lists them. */
  bytes: number | null;
  /** Parameter count reported by the publisher, when it is published. */
  parameters: number | null;
  /** Hypothetical 4-bit memory estimate, including a fixed allowance, in GiB. */
  vram4: number | null;
  /** Hypothetical 8-bit memory estimate, including a fixed allowance, in GiB. */
  memory8: number | null;
  band: FootprintBand;
  known: boolean;
};

export type OpenWeightEvidence = {
  card: TaskModelSource;
  weights: TaskModelSource;
  license: TaskModelSource;
};

export function openWeightEvidence(
  model: OpenWeightModel,
  sources: TaskModelSource[],
): OpenWeightEvidence | null {
  const byId = new Map(sources.map((source) => [source.id, source]));
  const card = byId.get(model.cardSourceId);
  const weights = byId.get(model.weightsSourceId);
  const license = byId.get(model.licenseSourceId);
  if (!card || !weights || !license) {
    return null;
  }
  return { card, weights, license };
}

/** Weight bytes come from the artifact the publisher published, never from an estimate. */
export function weightBytes(model: OpenWeightModel, sources: TaskModelSource[]): number | null {
  const evidence = openWeightEvidence(model, sources);
  const artifact = evidence?.weights.artifact;
  if (!artifact) {
    return null;
  }
  if (artifact.type === "hf-repository" || artifact.type === "release") {
    return artifact.files.reduce((total, file) => total + file.sizeBytes, 0);
  }
  if (artifact.type === "publisher-file" || artifact.type === "google-drive") {
    return artifact.sizeBytes;
  }
  return null;
}

export function parameterCount(model: OpenWeightModel, sources: TaskModelSource[]): number | null {
  const evidence = openWeightEvidence(model, sources);
  const artifact = evidence?.weights.artifact;
  if (artifact?.type !== "hf-repository") {
    return null;
  }
  return artifact.parameterCount ?? null;
}

export function footprintBand(vram4: number | null): FootprintBand {
  if (vram4 === null) {
    return "unknown";
  }
  if (vram4 <= 8) return "≤8";
  if (vram4 <= 16) return "≤16";
  if (vram4 <= 24) return "≤24";
  if (vram4 <= 48) return "≤48";
  if (vram4 <= 80) return "≤80";
  return ">80";
}

export function footprintFor(model: OpenWeightModel, sources: TaskModelSource[]): OpenWeightFootprint {
  const bytes = weightBytes(model, sources);
  const parameters = parameterCount(model, sources);
  if (parameters === null) {
    return { bytes, parameters, vram4: null, memory8: null, band: "unknown", known: false };
  }
  const vram4 = Math.ceil((parameters * FOUR_BIT_BYTES_PER_PARAMETER + RUNTIME_ALLOWANCE_BYTES) / GIB);
  const memory8 = Math.ceil((parameters * EIGHT_BIT_BYTES_PER_PARAMETER + RUNTIME_ALLOWANCE_BYTES) / GIB);
  return { bytes, parameters, vram4, memory8, band: footprintBand(vram4), known: true };
}

export function formatParameterCount(count: number | null, locale: ModelLocale): string {
  if (count === null) {
    return "—";
  }
  const units: Array<[number, string]> = [
    [1e12, "T"],
    [1e9, "B"],
    [1e6, "M"],
    [1e3, "K"],
  ];
  for (const [scale, suffix] of units) {
    if (count >= scale) {
      const value = count / scale;
      const digits = value >= 100 ? 0 : value >= 10 ? 1 : 2;
      return `${new Intl.NumberFormat(locale, { maximumFractionDigits: digits }).format(value)}${suffix}`;
    }
  }
  return new Intl.NumberFormat(locale).format(count);
}

export function formatBytes(bytes: number | null, locale: ModelLocale): string {
  if (bytes === null) {
    return "—";
  }
  if (bytes >= GIB) {
    const value = bytes / GIB;
    const digits = value >= 100 ? 0 : value >= 10 ? 1 : 2;
    return `${new Intl.NumberFormat(locale, { maximumFractionDigits: digits }).format(value)} GiB`;
  }
  const megabytes = bytes / 1024 ** 2;
  return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(megabytes)} MiB`;
}

export function openWeightPublisher(model: OpenWeightModel, sources: TaskModelSource[]): string {
  return openWeightEvidence(model, sources)?.card.publisher ?? "—";
}

export type OpenWeightTaskLink = { task: TaxonomyTask; evidence: { evidence: string; rationale: { en: string; tr: string } } };
export type OpenWeightFamilyLink = { family: ModelFamily; relation: string };

export function tasksByModel(
  models: OpenWeightModel[],
  tasks: TaxonomyTask[],
): Map<string, OpenWeightTaskLink[]> {
  const links = new Map<string, OpenWeightTaskLink[]>();
  for (const model of models) {
    links.set(model.id, tasksForModel(model.id, tasks));
  }
  return links;
}

export function familiesByModel(
  models: OpenWeightModel[],
  families: ModelFamily[],
): Map<string, OpenWeightFamilyLink[]> {
  const links = new Map<string, OpenWeightFamilyLink[]>();
  for (const model of models) {
    links.set(
      model.id,
      families.flatMap((family) => {
        const entry = family.models.find((candidate) => candidate.modelId === model.id);
        return entry ? [{ family, relation: entry.relation }] : [];
      }),
    );
  }
  return links;
}

export type OpenWeightGroup = {
  id: string;
  name: string;
  models: OpenWeightModel[];
};

export function groupOpenWeights(
  models: OpenWeightModel[],
  groupBy: (model: OpenWeightModel) => { id: string; name: string } | null,
): OpenWeightGroup[] {
  const groups = new Map<string, OpenWeightGroup>();
  for (const model of models) {
    const key = groupBy(model);
    if (!key) {
      continue;
    }
    const group = groups.get(key.id);
    if (group) {
      group.models.push(model);
    } else {
      groups.set(key.id, { id: key.id, name: key.name, models: [model] });
    }
  }
  return [...groups.values()].sort((left, right) =>
    left.name.localeCompare(right.name, "en"),
  );
}

export type TaxonomyCoverage = {
  totalTasks: number;
  tasksWithModels: number;
  specialist: number;
  pipeline: number;
  withoutModels: number;
};

/** Coverage is derived from the task review outcome, never from a guess. */
export function taxonomyCoverage(tasks: TaxonomyTask[]): TaxonomyCoverage {
  let tasksWithModels = 0;
  let specialist = 0;
  let pipeline = 0;
  let withoutModels = 0;
  for (const task of tasks) {
    const hasModel = task.recommendations.length > 0;
    if (hasModel) {
      tasksWithModels += 1;
    } else {
      withoutModels += 1;
    }
    if (task.review?.outcome === "specialist") specialist += 1;
    if (task.review?.outcome === "pipeline") pipeline += 1;
  }
  return { totalTasks: tasks.length, tasksWithModels, specialist, pipeline, withoutModels };
}

export function openWeightHref(modelId: string, locale: ModelLocale, hash = "") {
  const query = locale === "tr" ? "?lang=tr" : "";
  return `/open-weights${query}#model-${modelId}${hash}`;
}
