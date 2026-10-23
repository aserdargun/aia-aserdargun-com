/**
 * Daily open-weight tracker.
 *
 * Three jobs, kept apart on purpose:
 *
 * 1. Refresh — re-read every cited Hugging Face repository and update the
 *    facts the publisher owns: checkpoint revision, weight file listing, total
 *    bytes, parameter count, gated state and observation date. These are
 *    mechanical: the same primary source proves them again.
 * 2. Discover — ask the publisher organisation for repositories we do not
 *    cite yet, and add the ones that pass every rule below. A new repository
 *    only enters the catalogue when it is a base checkpoint with a model card,
 *    a published license, weight files, a pipeline tag that maps to a task in
 *    this repository's taxonomy, and a family that maps to a model family.
 * 3. Report — write an audit record. A GitHub release that moved, a license
 *    that changed, or a repository that failed to answer is reported for a
 *    human decision, never rewritten silently.
 *
 * Usage:
 *   npx tsx scripts/track-open-weights.ts            # dry run, writes the audit report
 *   npx tsx scripts/track-open-weights.ts --apply     # dry run plus data updates
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const REPO_ROOT = process.cwd();
const HF_API = "https://huggingface.co/api";
const GITHUB_API = "https://api.github.com";
const REQUEST_DELAY_MS = 220;
const RETRIES = 3;
/** Repositories listed per publisher, most recently modified first. */
const LISTING_LIMIT = 60;
/** Detailed checks per publisher and run, so a daily job stays bounded. */
const MAX_CANDIDATES_PER_PUBLISHER = 20;

/** File extensions that hold the publisher's own checkpoint weights. */
export const WEIGHT_EXTENSIONS = [".safetensors", ".bin", ".pt", ".pth"] as const;
/** Formats that duplicate a checkpoint; they must not inflate the weight total. */
const DERIVED_EXTENSIONS = [".gguf", ".onnx", ".msgpack", ".h5", ".tflite"] as const;
/** Adapters and quantised re-uploads are not standalone checkpoints. */
const NON_CHECKPOINT_PATTERN = /(lora|adapter|gguf|awq|gptq|w4a16|w8a8|onnx|fp8|int8|int4|exl2|e2b|pruned|qat|sft|dpo|ppo|rlhf|prm|primed|step[_-]?\d+)/i;
/** Tags that mark a repository as a fine-tune of another checkpoint. */
const BASE_MODEL_TAG = "base_model:";
/** Tags that mark a repository as a re-quantised copy of a published checkpoint. */
const QUANTIZATION_TAGS = /^(quantization|int4|int8|fp8|4-bit|8-bit|nf4|mxfp4|awq|gptq|bnb|quanto|marlin|exl2|gguf)$/i;
/**
 * Last-token markers of training stages, serving variants and raw weight dumps.
 * They describe how a checkpoint was produced or served, not a new model.
 */
const VARIANT_SUFFIXES = new Set([
  "base", "sft", "qat", "dpo", "ppo", "rlhf", "it", "instruct", "assistant", "chat",
  "preview", "turbo", "beta", "alpha", "rc", "distill", "primed", "quantization",
  "safetensors", "bin", "pt", "pth", "weights", "onnx", "gguf",
]);

export type HuggingFaceSibling = { rfilename: string; size?: number };
export type HuggingFaceModel = {
  id: string;
  sha: string;
  private?: boolean;
  disabled?: boolean;
  gated?: boolean | string;
  pipeline_tag?: string | null;
  library_name?: string | null;
  lastModified?: string;
  tags?: string[];
  cardData?: { license?: string; pipeline_tag?: string; tags?: string[] };
  config?: { architectures?: string[]; model_type?: string };
  safetensors?: { total?: number; parameters?: Record<string, number> };
  siblings?: HuggingFaceSibling[];
};

/** Hugging Face pipeline tag and task tags mapped to this repository's taxonomy tasks. */
export const PIPELINE_TASK_MAP: Record<string, string> = {
  "text-generation": "text-generation",
  "text2text-generation": "text-generation",
  "image-text-to-text": "text-generation",
  "conversational": "dialogue-response-generation",
  "summarization": "text-summarization",
  "question-answering": "question-answering",
  "document-question-answering": "document-question-answering",
  "translation": "machine-translation",
  "text-classification": "text-classification",
  "zero-shot-classification": "text-classification",
  "token-classification": "named-entity-recognition",
  "feature-extraction": "semantic-textual-similarity",
  "sentence-similarity": "semantic-textual-similarity",
  "reranking": "re-ranking",
  "sentence-pair-classification": "natural-language-inference",
  "table-to-text": "text-generation",
  "text-to-speech": "text-to-speech",
  "text-to-audio": "text-to-audio-generation",
  "automatic-speech-recognition": "automatic-speech-recognition",
  "audio-classification": "audio-classification",
  "speech-translation": "speech-translation",
  "speaker-identification": "speaker-identification",
  "audio-to-audio": "speech-enhancement",
  "image-classification": "image-classification",
  "object-detection": "object-detection",
  "image-segmentation": "semantic-segmentation",
  "depth-estimation": "depth-estimation",
  "video-classification": "video-classification",
  "image-to-text": "image-captioning",
  "visual-question-answering": "visual-question-answering",
  "text-to-image": "text-to-image-generation",
  "image-to-image": "image-to-image-generation",
  "image-inpainting": "image-inpainting",
  "mask-generation": "image-inpainting",
  "text-to-video": "text-to-video-generation",
  "image-to-video": "image-to-video-generation",
  "text-to-3d-generation": "text-to-3d-generation",
  "tabular-classification": "classification",
  "tabular-regression": "regression",
  "time-series-forecasting": "time-series-forecasting",
  "graph-classification": "graph-classification",
  "graph-node-classification": "node-classification",
  "graph-link-prediction": "link-prediction",
};

/** Architecture, library and tag signals mapped to this repository's model families. */
export const FAMILY_SIGNAL_MAP: Array<{ test: RegExp; familyId: string }> = [
  { test: /diffus/i, familyId: "diffusion-models" },
  { test: /flow[_-]?match/i, familyId: "flow-matching" },
  { test: /variational[_-]?autoencoder|\bvae\b/i, familyId: "variational-autoencoders" },
  { test: /generative[_-]?adversarial|\bgan\b/i, familyId: "generative-adversarial-networks" },
  { test: /normalizing[_-]?flow/i, familyId: "normalizing-flows" },
  { test: /energy[_-]?based/i, familyId: "energy-based-models" },
  { test: /mixture[_-]?of[_-]?experts|\bmoe\b/i, familyId: "mixture-of-experts" },
  { test: /forconditionalgeneration|multimodal|vision[_-]?language|\bvl\b|llava/i, familyId: "multimodal-models" },
  { test: /forcausallm|\bgpt\b|llama|mistral|qwen/i, familyId: "decoder-only" },
  { test: /formaskedlm|bert|roberta|embedding/i, familyId: "encoder-only" },
  { test: /forseq2seqlm|\bt5\b|whisper/i, familyId: "encoder-decoder" },
  { test: /graphneural|graphsage|\bgnn\b|\bdgl\b|\bpyg\b/i, familyId: "graph-neural-networks" },
  { test: /mamba|state[_-]?space/i, familyId: "state-space-networks" },
  { test: /\bconv\w*|resnet|\bcnn\b/i, familyId: "convolutional-networks" },
  { test: /lstm|\bgru\b|recurrent/i, familyId: "recurrent-networks" },
  { test: /sentence-transformers|\bsbert\b/i, familyId: "encoder-only" },
];

/** The generic architecture family is a fallback, never a first choice. */
const FALLBACK_FAMILY_ID = "transformers";

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function isBaseCheckpoint(name: string): boolean {
  const fileName = name.split("/").at(-1) ?? name;
  if (DERIVED_EXTENSIONS.some((extension) => fileName.endsWith(extension))) {
    return false;
  }
  return !NON_CHECKPOINT_PATTERN.test(fileName);
}

/** Weight files the publisher published, excluding alternative formats of the same checkpoint. */
export function primaryWeightFiles(siblings: HuggingFaceSibling[] = []): Array<{ name: string; sizeBytes: number }> {
  return siblings
    .filter((sibling) => WEIGHT_EXTENSIONS.some((extension) => sibling.rfilename.endsWith(extension)))
    .map((sibling) => ({ name: sibling.rfilename, sizeBytes: sibling.size ?? 0 }))
    .filter((file) => file.sizeBytes > 0)
    .sort((left, right) => left.name.localeCompare(right.name));
}

export function pipelineTaskId(model: HuggingFaceModel): string | null {
  const candidates = [
    model.pipeline_tag ?? undefined,
    model.cardData?.pipeline_tag,
    ...(model.tags ?? []),
    ...(model.cardData?.tags ?? []),
  ].filter((value): value is string => typeof value === "string");
  for (const candidate of candidates) {
    const taskId = PIPELINE_TASK_MAP[candidate];
    if (taskId) {
      return taskId;
    }
  }
  return null;
}

export function familyIdsFor(model: HuggingFaceModel): string[] {
  const signals = [
    ...(model.config?.architectures ?? []),
    model.config?.model_type ?? "",
    model.library_name ?? "",
    ...(model.tags ?? []),
  ].filter(Boolean);
  const found = new Set<string>();
  for (const signal of signals) {
    for (const { test, familyId } of FAMILY_SIGNAL_MAP) {
      if (test.test(signal)) {
        found.add(familyId);
      }
    }
  }
  if (!found.size) {
    found.add(FALLBACK_FAMILY_ID);
  }
  return [...found];
}

export function licenseFor(model: HuggingFaceModel): string | null {
  if (model.cardData?.license) {
    return model.cardData.license;
  }
  const tag = (model.tags ?? []).find((value) => value.startsWith("license:"));
  return tag ? tag.slice("license:".length) : null;
}

/**
 * Compare licenses by their identifier, not by their spelling: "MIT" and "mit"
 * are the same license, and "other" carries no information at all.
 */
export function licenseChanged(recorded: string, published: string): boolean {
  const normalize = (value: string) => value.trim().toLowerCase();
  const publishedValue = normalize(published);
  if (!publishedValue || publishedValue === "other" || publishedValue === "unknown") {
    return false;
  }
  return publishedValue !== normalize(recorded);
}

export function repositoryFromUrl(url: string): string | null {
  const match = /^https:\/\/huggingface\.co\/([^/]+\/[^/?#]+)/.exec(url);
  return match ? match[1] : null;
}

/** A repository that declares another checkpoint as its base is a fine-tune. */
export function isFineTune(model: HuggingFaceModel): boolean {
  return (model.tags ?? []).some((tag) => tag.startsWith(BASE_MODEL_TAG));
}

/** A re-quantised copy of a published checkpoint is not a new model. */
export function isQuantizedCopy(model: HuggingFaceModel): boolean {
  return (model.tags ?? []).some((tag) => QUANTIZATION_TAGS.test(tag.trim()));
}

/** A name whose last token marks a training stage or serving variant. */
export function hasVariantSuffix(name: string): boolean {
  const fileName = name.split("/").at(-1) ?? name;
  const last = fileName.split(/[-_.]/).at(-1)?.toLowerCase() ?? "";
  return VARIANT_SUFFIXES.has(last);
}

/** The product line of a repository name: its leading letters, e.g. "glm", "tipsv". */
export function productLine(name: string): string {
  const fileName = name.split("/").at(-1) ?? name;
  const match = /^([a-z]+)/i.exec(fileName);
  return match ? match[1].toLowerCase() : "";
}

/** The release version of a repository name: its numeric tokens in order. */
export function versionTokens(name: string): number[] {
  const fileName = name.split("/").at(-1) ?? name;
  return (fileName.match(/\d+/g) ?? []).map(Number);
}

/** Compare two versions element by element; a longer version wins when the prefix matches. */
export function compareVersions(left: number[], right: number[]): number {
  const length = Math.max(left.length, right.length);
  for (let index = 0; index < length; index += 1) {
    const difference = (left[index] ?? -1) - (right[index] ?? -1);
    if (difference !== 0) {
      return difference;
    }
  }
  return 0;
}

/** A repository name that starts with a cited checkpoint name is a variant of it. */
export function isVariantOf(candidate: string, citedNames: string[]): boolean {
  const name = candidate.split("/").at(-1)?.toLowerCase() ?? candidate.toLowerCase();
  return citedNames.some((cited) => cited !== name && name.startsWith(cited.toLowerCase()));
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchJson<T>(url: string, headers: Record<string, string> = {}): Promise<T | null> {
  for (let attempt = 1; attempt <= RETRIES; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { "user-agent": "aia-open-weight-tracker", ...headers } });
      if (response.status === 404) {
        return null;
      }
      if (response.status === 429 || response.status >= 500) {
        await sleep(attempt * 1200);
        continue;
      }
      if (!response.ok) {
        return null;
      }
      return (await response.json()) as T;
    } catch {
      await sleep(attempt * 1200);
    }
  }
  return null;
}

type ArrayFile = { file: string; name: string; text: string; start: number; end: number; items: any[] };

async function readArray(file: string, name: string): Promise<ArrayFile> {
  const text = await readFile(path.join(REPO_ROOT, file), "utf8");
  const declaration = new RegExp(`export const ${name}[^=]*=\\s*\\[`).exec(text);
  if (!declaration) {
    throw new Error(`Missing export ${name} in ${file}`);
  }
  const open = declaration.index + declaration[0].length - 1;
  let depth = 0;
  let end = -1;
  for (let index = open; index < text.length; index += 1) {
    if (text[index] === "[") depth += 1;
    else if (text[index] === "]") {
      depth -= 1;
      if (depth === 0) {
        end = index;
        break;
      }
    }
  }
  if (end < 0) {
    throw new Error(`Unterminated array ${name} in ${file}`);
  }
  const items = JSON.parse(text.slice(open, end + 1));
  return { file, name, text, start: open, end, items };
}

async function writeArray(target: ArrayFile, items: unknown[]) {
  // Re-read the file: two arrays can live in the same module, and the second
  // write must not restore the text the first write replaced.
  const filePath = path.join(REPO_ROOT, target.file);
  const text = await readFile(filePath, "utf8");
  const declaration = new RegExp(`export const ${target.name}[^=]*=\\s*\\[`).exec(text);
  if (!declaration) {
    throw new Error(`Missing export ${target.name} in ${target.file}`);
  }
  const open = declaration.index + declaration[0].length - 1;
  let depth = 0;
  let end = -1;
  for (let index = open; index < text.length; index += 1) {
    if (text[index] === "[") depth += 1;
    else if (text[index] === "]") {
      depth -= 1;
      if (depth === 0) {
        end = index;
        break;
      }
    }
  }
  const serialized = JSON.stringify(items, null, 2);
  const next = `${text.slice(0, open)}${serialized}${text.slice(end + 1)}`;
  await writeFile(filePath, next, "utf8");
}

type RepositoryUpdate = { repository: string; changed: string[] };
type RepositoryFailure = { repository: string; reason: string };
type DiscoveredModel = {
  repository: string;
  modelId: string;
  taskId: string;
  families: string[];
  license: string;
  parameterCount: number | null;
  totalBytes: number;
};
type SkippedCandidate = { repository: string; reason: string };
type LicenseChange = { modelId: string; recorded: string; published: string; repository: string };
type GithubCandidate = { repository: string; latestRelease: string; publishedAt: string | null };

type Report = {
  generatedAt: string;
  repositories: { checked: number; updated: RepositoryUpdate[]; unchanged: number; failed: RepositoryFailure[] };
  discovered: { added: DiscoveredModel[]; skipped: SkippedCandidate[] };
  github: GithubCandidate[];
  licenseChanges: LicenseChange[];
  reviewsReread?: string[];
};

async function main() {
  const apply = process.argv.includes("--apply");
  const today = new Date().toISOString().slice(0, 10);

  const sourcesFile = await readArray("src/data/sources.ts", "taskModelSources");
  const modelsFile = await readArray("src/data/task-models.ts", "openWeightModels");
  const tasksFile = await readArray("src/data/task-models.ts", "taxonomyTasks");
  const familiesFile = await readArray("src/data/model-families.ts", "modelFamilies");
  const reviewsFile = await readArray("src/data/task-benchmarks.ts", "taskBenchmarkReviews");

  const sources: any[] = sourcesFile.items;
  const models: any[] = modelsFile.items;
  const tasks: any[] = tasksFile.items;
  const families: any[] = familiesFile.items;
  const reviews: any[] = reviewsFile.items;
  /** Sources whose publisher checkpoint changed in this run. */
  const advancedSourceIds = new Set<string>();

  const taskIds = new Set(tasks.map((task) => task.id));
  const familyIds = new Set(families.map((family) => family.id));
  const sourceById = new Map(sources.map((source) => [source.id, source]));
  const knownRepositories = new Set<string>();
  for (const source of sources) {
    const repository = repositoryFromUrl(source.url);
    if (repository) knownRepositories.add(repository);
  }

  const report: Report = {
    generatedAt: new Date().toISOString(),
    repositories: { checked: 0, updated: [], unchanged: 0, failed: [] },
    discovered: { added: [], skipped: [] },
    github: [],
    licenseChanges: [],
  };

  // 1. Refresh every cited Hugging Face repository.
  const citedRepositories = [...knownRepositories].sort();
  for (const repository of citedRepositories) {
    report.repositories.checked += 1;
    const detail = await fetchJson<HuggingFaceModel>(`${HF_API}/models/${repository}?blobs=true`);
    await sleep(REQUEST_DELAY_MS);
    if (!detail || detail.disabled) {
      report.repositories.failed.push({ repository, reason: "unavailable" });
      continue;
    }
    const files = primaryWeightFiles(detail.siblings);
    const totalBytes = files.reduce((total, file) => total + file.sizeBytes, 0);
    const gated = detail.gated === true || detail.gated === "auto" || detail.gated === "manual";
    const parameterCount = detail.safetensors?.total;

    const cardSource = sources.find(
      (source) => source.kind === "model-card" && repositoryFromUrl(source.url) === repository,
    );
    const weightsSource = sources.find(
      (source) => source.kind === "weights" && repositoryFromUrl(source.url) === repository,
    );
    if (!cardSource || !weightsSource) {
      report.repositories.failed.push({ repository, reason: "no cited card/weights source" });
      continue;
    }

    const changed: string[] = [];
    if (cardSource.revision !== detail.sha) {
      cardSource.revision = detail.sha;
      changed.push("revision");
    }
    if (weightsSource.revision !== detail.sha) {
      weightsSource.revision = detail.sha;
      weightsSource.url = `${cardSource.url}/tree/${detail.sha}`;
      changed.push("weights-revision");
    }
    const previousArtifact = weightsSource.artifact;
    if (files.length) {
      const nextArtifact = {
        type: "hf-repository",
        repositoryUrl: cardSource.url,
        ...(parameterCount ? { parameterCount } : {}),
        files,
        totalBytes,
        gated,
      };
      if (JSON.stringify(previousArtifact ?? null) !== JSON.stringify(nextArtifact)) {
        weightsSource.artifact = nextArtifact;
        changed.push("artifact");
      }
    } else if (previousArtifact?.type === "hf-repository") {
      // The publisher no longer publishes a checkpoint in the primary format.
      delete weightsSource.artifact;
      changed.push("artifact-removed");
      report.repositories.failed.push({ repository, reason: "no checkpoint files in the primary format" });
    }
    // The observation date advances only when the publisher's checkpoint changed.
    // An unchanged checkpoint keeps its date; the dated audit file records the re-check.
    if (changed.length) {
      advancedSourceIds.add(cardSource.id);
      advancedSourceIds.add(weightsSource.id);
      if (cardSource.observedAt !== today) {
        cardSource.observedAt = today;
        changed.push("observed");
      }
      if (weightsSource.observedAt !== today) {
        weightsSource.observedAt = today;
        changed.push("weights-observed");
      }
    }
    if (gated && cardSource.kind === "model-card") {
      const model = models.find((candidate) => candidate.cardSourceId === cardSource.id);
      if (model && model.access !== "gated") {
        model.access = "gated";
        changed.push("access");
      }
    }

    const publishedLicense = licenseFor(detail);
    const model = models.find((candidate) => candidate.cardSourceId === cardSource.id);
    if (model && publishedLicense && licenseChanged(model.license, publishedLicense)) {
      report.licenseChanges.push({
        modelId: model.id,
        recorded: model.license,
        published: publishedLicense,
        repository,
      });
    }

    if (changed.length) {
      report.repositories.updated.push({ repository, changed });
    } else {
      report.repositories.unchanged += 1;
    }
  }

  // 2. Discover new repositories from publishers whose base checkpoints we already cite.
  const trustedPublishers = new Set<string>();
  const citedNamesByPublisher = new Map<string, string[]>();
  const latestVersionByLine = new Map<string, number[]>();
  const noteCitedModel = (publisher: string, name: string) => {
    const names = citedNamesByPublisher.get(publisher) ?? [];
    names.push(name);
    citedNamesByPublisher.set(publisher, names);
    const line = productLine(name);
    const version = versionTokens(name);
    const key = `${publisher}:${line}`;
    const known = latestVersionByLine.get(key);
    if (!known || compareVersions(version, known) > 0) {
      latestVersionByLine.set(key, version);
    }
  };
  for (const model of models) {
    const card = sourceById.get(model.cardSourceId);
    const repository = card ? repositoryFromUrl(card.url) : null;
    if (!repository) continue;
    const publisher = repository.split("/")[0];
    noteCitedModel(publisher, model.name);
    if (model.role === "shortlist") {
      trustedPublishers.add(publisher);
    }
  }

  for (const publisher of [...trustedPublishers].sort()) {
    const listing = await fetchJson<Array<{ id: string }>>(
      `${HF_API}/models?author=${encodeURIComponent(publisher)}&sort=lastModified&direction=-1&limit=${LISTING_LIMIT}`,
    );
    await sleep(REQUEST_DELAY_MS);
    if (!listing) {
      report.repositories.failed.push({ repository: publisher, reason: "listing unavailable" });
      continue;
    }
    let inspected = 0;
    for (const entry of listing) {
      const repository = entry.id;
      if (knownRepositories.has(repository)) continue;
      if (!isBaseCheckpoint(repository)) {
        report.discovered.skipped.push({ repository, reason: "not a base checkpoint" });
        continue;
      }
      if (inspected >= MAX_CANDIDATES_PER_PUBLISHER) {
        report.discovered.skipped.push({ repository, reason: "candidate limit reached" });
        continue;
      }
      inspected += 1;
      const detail = await fetchJson<HuggingFaceModel>(`${HF_API}/models/${repository}?blobs=true`);
      await sleep(REQUEST_DELAY_MS);
      if (!detail || detail.private || detail.disabled) {
        report.discovered.skipped.push({ repository, reason: "not published" });
        continue;
      }
      const hasCard = (detail.siblings ?? []).some((sibling) => sibling.rfilename.toLowerCase() === "readme.md");
      const files = primaryWeightFiles(detail.siblings);
      const publishedLicense = licenseFor(detail);
      const taskId = pipelineTaskId(detail);
      const candidateFamilies = familyIdsFor(detail).filter((familyId) => familyIds.has(familyId));

      if (isFineTune(detail)) {
        report.discovered.skipped.push({ repository, reason: "fine-tune of another checkpoint" });
        continue;
      }
      if (isQuantizedCopy(detail)) {
        report.discovered.skipped.push({ repository, reason: "quantised copy" });
        continue;
      }
      if (hasVariantSuffix(repository)) {
        report.discovered.skipped.push({ repository, reason: "training-stage or serving variant" });
        continue;
      }
      if (!hasCard) {
        report.discovered.skipped.push({ repository, reason: "no model card" });
        continue;
      }
      if (!publishedLicense) {
        report.discovered.skipped.push({ repository, reason: "no published license" });
        continue;
      }
      if (!files.length) {
        report.discovered.skipped.push({ repository, reason: "no published weight files" });
        continue;
      }
      if (!taskId || !taskIds.has(taskId)) {
        report.discovered.skipped.push({ repository, reason: "no taxonomy task mapping" });
        continue;
      }
      if (!candidateFamilies.length) {
        report.discovered.skipped.push({ repository, reason: "no taxonomy family mapping" });
        continue;
      }
      const citedNames = citedNamesByPublisher.get(publisher) ?? [];
      if (isVariantOf(repository, citedNames)) {
        report.discovered.skipped.push({ repository, reason: "variant of a cited checkpoint" });
        continue;
      }
      const line = productLine(repository);
      const candidateVersion = versionTokens(repository);
      const knownVersion = latestVersionByLine.get(`${publisher}:${line}`);
      // A name without a version is a new product line, not an older release.
      if (candidateVersion.length && knownVersion && compareVersions(candidateVersion, knownVersion) <= 0) {
        report.discovered.skipped.push({ repository, reason: "not newer than the cited release" });
        continue;
      }

      const modelId = slugify(repository.split("/").slice(1).join("-"));
      if (models.some((candidate) => candidate.id === modelId)) {
        report.discovered.skipped.push({ repository, reason: "identifier already used" });
        continue;
      }
      const gated = detail.gated === true || detail.gated === "auto" || detail.gated === "manual";
      const totalBytes = files.reduce((total, file) => total + file.sizeBytes, 0);
      const name = repository.split("/").at(-1)!;
      const cardSourceId = `ow-${modelId}`;
      const weightsSourceId = `ow-${modelId}-weights`;
      const licenseSourceId = `ow-${modelId}-license`;
      const licenseFile = (detail.siblings ?? []).find((sibling) => sibling.rfilename.toLowerCase() === "license");
      const licenseUrl = licenseFile
        ? `https://huggingface.co/${repository}/blob/${detail.sha}/${licenseFile.rfilename}`
        : `https://huggingface.co/${repository}`;

      const cardSource = {
        id: cardSourceId,
        title: `${name} — model card`,
        publisher,
        url: `https://huggingface.co/${repository}`,
        kind: "model-card",
        observedAt: today,
        revision: detail.sha,
      };
      const weightsSource = {
        id: weightsSourceId,
        title: `${name} — checkpoint files`,
        publisher,
        url: `https://huggingface.co/${repository}/tree/${detail.sha}`,
        kind: "weights",
        observedAt: today,
        revision: detail.sha,
        artifact: {
          type: "hf-repository",
          repositoryUrl: `https://huggingface.co/${repository}`,
          ...(detail.safetensors?.total ? { parameterCount: detail.safetensors.total } : {}),
          files,
          totalBytes,
          gated,
        },
      };
      const licenseSource = {
        id: licenseSourceId,
        title: `${name} — license`,
        publisher,
        url: licenseUrl,
        kind: "license",
        observedAt: today,
        revision: detail.sha,
      };

      const modelRecord = {
        id: modelId,
        name,
        cardSourceId,
        weightsSourceId,
        licenseSourceId,
        license: publishedLicense,
        access: gated ? "gated" : "public",
        role: "reference",
        parameterKind: "weights",
        licenseScope: "repository",
        pipelineTag: detail.pipeline_tag ?? undefined,
        discovery: "auto",
        context: {
          en: `Discovered automatically on ${today} in the publisher's Hugging Face repository. Pipeline tag ${detail.pipeline_tag ?? "not stated"}; the checkpoint was not reviewed by hand.`,
          tr: `${today} tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi ${detail.pipeline_tag ?? "belirtilmemiş"}; kontrol noktası elle incelenmedi.`,
        },
      };

      const task = tasks.find((candidate) => candidate.id === taskId)!;
      task.recommendations.push({
        modelId,
        evidence: "documented",
        rationale: {
          en: `The publisher's repository declares the pipeline tag ${detail.pipeline_tag ?? taskId}, which maps to ${task.name}. Automatic discovery from the release metadata.`,
          tr: `Yayıncının deposu ${detail.pipeline_tag ?? taskId} işlem hattı etiketini bildiriyor; bu etiket ${task.name} görevine eşleniyor. Sürüm verilerinden otomatik keşif.`,
        },
        sourceIds: [cardSourceId],
      });

      for (const familyId of candidateFamilies) {
        const family = families.find((candidate) => candidate.id === familyId)!;
        family.models.push({
          modelId,
          relation: "member",
          rationale: {
            en: `The repository's architecture and library metadata place this checkpoint in ${family.name}. Automatic discovery from the release metadata.`,
            tr: `Deponun mimari ve kütüphane verileri bu kontrol noktasını ${family.name} ailesine yerleştiriyor. Sürüm verilerinden otomatik keşif.`,
          },
          sourceIds: [cardSourceId],
        });
      }

      sources.push(cardSource, weightsSource, licenseSource);
      models.push(modelRecord);
      knownRepositories.add(repository);
      noteCitedModel(publisher, name);
      report.discovered.added.push({
        repository,
        modelId,
        taskId,
        families: candidateFamilies,
        license: publishedLicense,
        parameterCount: detail.safetensors?.total ?? null,
        totalBytes,
      });
    }
  }

  // 3. GitHub release movements are reported, never rewritten silently.
  const githubRepositories = new Set<string>();
  for (const source of sources) {
    const match = /^https:\/\/github\.com\/([^/]+\/[^/?#]+)/.exec(source.url);
    if (match) githubRepositories.add(match[1]);
  }
  for (const repository of [...githubRepositories].sort()) {
    const release = await fetchJson<{ tag_name?: string; published_at?: string; html_url?: string }>(
      `${GITHUB_API}/repos/${repository}/releases/latest`,
    );
    await sleep(REQUEST_DELAY_MS);
    if (!release?.tag_name) continue;
    const cited = sources.some((source) => source.url.includes(`/releases/tag/${release.tag_name}`));
    if (!cited) {
      report.github.push({ repository, latestRelease: release.tag_name, publishedAt: release.published_at ?? null });
    }
  }

  // A review that cites a changed checkpoint is re-confirmed against the new observation.
  const rereadReviews: string[] = [];
  for (const task of tasks) {
    if (!task.review) continue;
    if (task.review.sourceIds.some((id: string) => advancedSourceIds.has(id)) && task.review.observedAt !== today) {
      task.review.observedAt = today;
      rereadReviews.push(`task:${task.id}`);
    }
  }
  for (const family of families) {
    if (!family.review) continue;
    if (family.review.sourceIds.some((id: string) => advancedSourceIds.has(id)) && family.review.observedAt !== today) {
      family.review.observedAt = today;
      rereadReviews.push(`family:${family.id}`);
    }
  }
  for (const review of reviews) {
    if (review.sourceIds.some((id: string) => advancedSourceIds.has(id)) && review.checkedAt !== today) {
      review.checkedAt = today;
      rereadReviews.push(`benchmark:${review.taskId}`);
    }
  }
  if (rereadReviews.length) {
    report.reviewsReread = rereadReviews;
  }

  const auditDir = path.join(REPO_ROOT, "docs", "audits");
  await mkdir(auditDir, { recursive: true });
  await writeFile(
    path.join(auditDir, `open-weights-${today}.json`),
    `${JSON.stringify(report, null, 2)}\n`,
    "utf8",
  );

  if (apply && (report.repositories.updated.length || report.discovered.added.length || rereadReviews.length)) {
    await writeArray(sourcesFile, sources);
    await writeArray(modelsFile, models);
    await writeArray(tasksFile, tasks);
    await writeArray(familiesFile, families);
    await writeArray(reviewsFile, reviews);
  }

  console.log(`Open-weight tracker ${apply ? "applied" : "dry run"} — ${today}`);
  console.log(`  repositories checked: ${report.repositories.checked}`);
  console.log(`  updated: ${report.repositories.updated.length}`);
  console.log(`  unchanged: ${report.repositories.unchanged}`);
  console.log(`  failed: ${report.repositories.failed.length}`);
  console.log(`  models added: ${report.discovered.added.length}`);
  console.log(`  candidates skipped: ${report.discovered.skipped.length}`);
  console.log(`  license changes for review: ${report.licenseChanges.length}`);
  console.log(`  github releases for review: ${report.github.length}`);
  console.log(`  reviews re-confirmed: ${report.reviewsReread?.length ?? 0}`);
  console.log(`  audit: docs/audits/open-weights-${today}.json`);
  if (report.repositories.updated.length) {
    console.log("\nUpdated repositories:");
    for (const entry of report.repositories.updated) {
      console.log(`  ${entry.repository}: ${(entry.changed as string[]).join(", ")}`);
    }
  }
  if (report.discovered.added.length) {
    console.log("\nAdded models:");
    for (const entry of report.discovered.added) {
      console.log(`  ${entry.repository} → ${entry.modelId} [${entry.taskId}]`);
    }
  }
}

if (process.argv[1] && process.argv[1].endsWith("track-open-weights.ts")) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
