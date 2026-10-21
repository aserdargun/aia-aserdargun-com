import { z } from "zod";

export const schemaVersions = {
  vendor: 1, category: 1, capability: 1, vendorEntry: 1,
  assessment: 1, model: 3, plan: 1, source: 2, taxonomyMap: 1, taxonomySource: 1,
  taskModelSource: 3, openWeightModel: 2, taxonomyTask: 2, modelFamily: 2,
  benchmarkSource: 1, benchmarkCandidate: 1, taskBenchmark: 1, taskBenchmarkReview: 1,
} as const;

// Ordered, editorial focus areas based on the model's cited evidence.
// Membership is non-exclusive and does not represent a quality ranking.
export const modelTaskValues = [
  "writing-chat",
  "reasoning",
  "coding",
  "agents",
  "documents",
  "visual-understanding",
  "image-generation",
] as const;

export const modelTaskSchema = z.enum(modelTaskValues);

export const requiredCategoryIds = [
  "models",
  "chat-knowledge-work",
  "coding-agents",
  "agentic-workflows",
  "customization",
  "skills-plugins",
  "connectors-mcp",
  "memory-context",
  "files-artifacts",
  "research-web",
  "computer-browser-voice",
  "local-cloud-environments",
  "automation-scheduling",
  "permissions-security",
  "api-sdk",
  "enterprise-governance",
  "pricing-plans",
] as const;

export const availabilityValues = [
  "available",
  "limited",
  "not-available",
  "not-documented",
  "unknown",
] as const;

export const comparisonStatusValues = [
  "strong-parity",
  "partial-parity",
  "different-approach",
  "vendor-specific",
  "insufficient-evidence",
] as const;

const idSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "ID must be lowercase kebab-case.");

function isCalendarIsoDate(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) {
    return false;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const daysInMonth = [
    31,
    isLeapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  return month >= 1 && month <= 12 && day >= 1 && day <= daysInMonth[month - 1];
}

const isoDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must use ISO YYYY-MM-DD format.")
  .refine(isCalendarIsoDate, "Date must be a valid calendar date.");

const httpsUrlSchema = z
  .url("URL must be valid.")
  .refine((url) => url.startsWith("https://"), "URL must use HTTPS.");

export const availabilitySchema = z.enum(availabilityValues);
export const comparisonStatusSchema = z.enum(comparisonStatusValues);

export const vendorSchema = z
  .object({
    id: idSchema,
    name: z.string(),
    shortName: z.string(),
    ecosystemName: z.string(),
    description: z.string(),
    homepageUrl: httpsUrlSchema,
    accent: z.string(),
  })
  .strict();

export const categorySchema = z
  .object({
    id: idSchema,
    name: z.string(),
    shortName: z.string(),
    description: z.string(),
    order: z.number().int(),
  })
  .strict();

export const capabilitySchema = z
  .object({
    id: idSchema,
    categoryId: idSchema,
    name: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    order: z.number().int(),
  })
  .strict();

export const vendorEntrySchema = z
  .object({
    id: idSchema,
    capabilityId: idSchema,
    vendorId: idSchema,
    title: z.string(),
    summary: z.string(),
    details: z.array(z.string()),
    productNames: z.array(z.string()),
    availability: availabilitySchema,
    sourceIds: z.array(idSchema),
    verifiedAt: isoDateSchema,
  })
  .strict();

export const comparisonAssessmentSchema = z
  .object({
    capabilityId: idSchema,
    vendorIds: z.tuple([idSchema, idSchema]),
    status: comparisonStatusSchema,
    summary: z.string(),
  })
  .strict();

export const modelSchema = z
  .object({
    id: idSchema,
    vendorId: idSchema,
    name: z.string(),
    family: z.string(),
    taskIds: z.array(modelTaskSchema).min(1).refine(
      (ids) => new Set(ids).size === ids.length,
      "Model task IDs must be unique.",
    ),
    positioning: z.string(),
    lifecycle: z.enum(["current", "preview", "legacy", "deprecated"]),
    inputModalities: z.array(z.string()),
    outputModalities: z.array(z.string()),
    contextWindowTokens: z.number().int().optional(),
    maxOutputTokens: z.number().int().optional(),
    knowledgeCutoff: z.string().optional(),
    pricingNote: z.string().optional(),
    pricing: z
      .object({
        inputPerMillionUsd: z.number().optional(),
        cachedInputPerMillionUsd: z.number().optional(),
        outputPerMillionUsd: z.number().optional(),
      })
      .strict()
      .optional(),
    sourceIds: z.array(idSchema),
    verifiedAt: isoDateSchema,
  })
  .strict();

export const planSchema = z
  .object({
    id: idSchema,
    vendorId: idSchema,
    name: z.string(),
    audience: z.string(),
    priceDisplay: z.string(),
    billingNote: z.string().optional(),
    highlights: z.array(z.string()),
    sourceIds: z.array(idSchema),
    verifiedAt: isoDateSchema,
  })
  .strict();

export const sourceSchema = z
  .object({
    id: idSchema,
    title: z.string(),
    publisher: z.enum(["Anthropic", "OpenAI", "Z.ai", "MiniMax", "DeepSeek", "Qwen"]),
    url: httpsUrlSchema,
    sourceType: z.enum([
      "documentation",
      "help",
      "product",
      "pricing",
      "announcement",
    ]),
    note: z.string().optional(),
  })
  .strict();

// Scholarly references belong to the taxonomy maps, not the vendor evidence
// dataset. Keep the vendor publisher/host contract unchanged.
export const taxonomySourceSchema = z.object({
  id: z.string().regex(/^S\d{2}$/),
  title: z.string().min(1),
  url: httpsUrlSchema,
}).strict();

export const taxonomyMapSchema = z.object({
  id: z.enum(["models", "tasks"]),
  title: z.string().min(1),
  assetPath: z.string().regex(/^\/assets\/taxonomy\/ai-(model|task)-taxonomy\.svg$/),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  branchCount: z.number().int().positive(),
  entryCount: z.number().int().positive(),
  sourceIds: z.array(taxonomySourceSchema.shape.id).min(1).refine(
    (ids) => new Set(ids).size === ids.length,
    "Taxonomy source IDs must be unique.",
  ),
}).strict();

export type TaxonomySource = z.infer<typeof taxonomySourceSchema>;
export type TaxonomyMap = z.infer<typeof taxonomyMapSchema>;

const bilingualTextSchema = z.object({ en: z.string().min(1), tr: z.string().min(1) }).strict();

export const taskModelSourceSchema = z.object({
  id: z.string().regex(/^ow-[a-z0-9-]+$/),
  title: z.string().min(1),
  publisher: z.string().min(1),
  url: httpsUrlSchema,
  kind: z.enum(["model-card", "weights", "documentation", "license"]),
  observedAt: z.iso.date(),
  revision: z.string().regex(/^[a-f0-9]{40}$/).optional(),
  artifact: z.discriminatedUnion("type", [
    z.object({ type: z.literal("git"), repositoryUrl: httpsUrlSchema, path: z.string().min(1), entry: z.enum(["blob", "tree"]) }).strict(),
    z.object({
      type: z.literal("publisher-file"), evidenceSourceId: z.string().regex(/^ow-[a-z0-9-]+$/),
      fileName: z.string().min(1), sizeBytes: z.number().int().positive(), etag: z.string().min(1).optional(),
      publisherChecksum: z.discriminatedUnion("algorithm", [
        z.object({ algorithm: z.literal("sha256"), value: z.string().regex(/^[a-f0-9]{64}$/) }).strict(),
        z.object({ algorithm: z.literal("md5"), value: z.string().regex(/^[a-f0-9]{32}$/) }).strict(),
      ]).optional(),
    }).strict().refine((artifact) => Boolean(artifact.etag || artifact.publisherChecksum), "Publisher file needs an ETag or publisher checksum."),
    z.object({ type: z.literal("google-drive"), evidenceSourceId: z.string().regex(/^ow-[a-z0-9-]+$/), fileId: z.string().regex(/^[a-zA-Z0-9_-]+$/), fileName: z.string().min(1), sizeBytes: z.number().int().positive() }).strict(),
    z.object({ type: z.literal("release"), evidenceSourceId: z.string().regex(/^ow-[a-z0-9-]+$/), repositoryUrl: httpsUrlSchema, tag: z.string().min(1), files: z.array(z.object({ name: z.string().min(1), sizeBytes: z.number().int().positive() }).strict()).min(1) }).strict(),
  ]).optional(),
}).strict();

export const openWeightModelSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  cardSourceId: taskModelSourceSchema.shape.id,
  weightsSourceId: taskModelSourceSchema.shape.id,
  licenseSourceId: taskModelSourceSchema.shape.id,
  license: z.string().min(1),
  access: z.enum(["public", "gated"]),
  role: z.enum(["shortlist", "reference"]),
  parameterKind: z.enum(["weights", "statistical", "rules", "pipeline"]).optional(),
  licenseScope: z.enum(["artifact", "repository"]).optional(),
  context: bilingualTextSchema,
}).strict();

export const taxonomyTaskSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  family: z.string().min(1),
  definition: z.string().min(1),
  definitionSourceId: taxonomySourceSchema.shape.id,
  note: bilingualTextSchema,
  review: z.object({
    observedAt: z.iso.date(),
    outcome: z.enum(["specialist", "pipeline", "no-verified-model"]),
    summary: bilingualTextSchema,
    sourceIds: z.array(taskModelSourceSchema.shape.id).min(1),
  }).strict().optional(),
  recommendations: z.array(z.object({
    modelId: openWeightModelSchema.shape.id,
    evidence: z.enum(["evaluated", "documented", "adaptation"]),
    rationale: bilingualTextSchema,
    sourceIds: z.array(taskModelSourceSchema.shape.id).min(1),
  }).strict()),
}).strict();

export type TaskModelSource = z.infer<typeof taskModelSourceSchema>;
export type OpenWeightModel = z.infer<typeof openWeightModelSchema>;
export type TaxonomyTask = z.infer<typeof taxonomyTaskSchema>;

export const modelFamilySchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  axis: z.enum(["model-families", "neural-architectures", "learning-paradigms", "generative-formulations", "modalities-data", "training-adaptation"]),
  definition: z.string().min(1),
  definitionSourceId: taxonomySourceSchema.shape.id,
  note: bilingualTextSchema,
  review: z.object({
    observedAt: z.iso.date(),
    summary: bilingualTextSchema,
    sourceIds: z.array(taskModelSourceSchema.shape.id).min(1),
  }).strict().optional(),
  models: z.array(z.object({
    modelId: openWeightModelSchema.shape.id,
    relation: z.enum(["member", "component", "compatible"]),
    rationale: bilingualTextSchema,
    sourceIds: z.array(taskModelSourceSchema.shape.id).min(1),
  }).strict()),
}).strict();

export type ModelFamily = z.infer<typeof modelFamilySchema>;

export const benchmarkSourceSchema = z.object({
  id: idSchema,
  title: z.string().min(1),
  publisher: z.string().min(1),
  url: httpsUrlSchema,
  kind: z.enum(["benchmark", "paper", "model-card", "weights", "license", "documentation"]),
  observedAt: isoDateSchema,
  revision: z.string().regex(/^[a-f0-9]{40}$/).optional(),
}).strict();

// Additional comparison participants are separate from the task/family shortlist.
// Their exact release and license must still be traceable to primary sources.
export const benchmarkCandidateSchema = z.object({
  id: idSchema,
  name: z.string().min(1),
  cardSourceId: idSchema,
  weightsSourceId: idSchema,
  licenseSourceId: idSchema,
  license: z.string().min(1),
  access: z.enum(["public", "gated"]),
}).strict();

export const taskBenchmarkSchema = z.object({
  id: idSchema,
  taskIds: z.array(idSchema).min(1),
  title: z.string().min(1),
  dataset: z.string().min(1),
  metric: z.string().min(1),
  unit: z.enum(["%", "score", "dB", "bits/dim"]),
  direction: z.enum(["higher", "lower"]),
  scope: z.enum(["direct", "proxy"]),
  provenance: z.enum(["publisher", "independent"]),
  // A source check is not an evaluation date. Null means the publication does not date the result.
  resultDate: z.string().regex(/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/).refine((value) => {
    const full = value.length === 4 ? `${value}-01-01` : value.length === 7 ? `${value}-01` : value;
    const date = new Date(`${full}T00:00:00Z`);
    return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === full;
  }, "Invalid publication date").nullable(),
  sourceId: idSchema,
  locator: z.string().min(1),
  protocol: bilingualTextSchema,
  limitation: bilingualTextSchema,
  results: z.array(z.object({
    candidateId: idSchema,
    score: z.number().finite(),
    configuration: bilingualTextSchema.optional(),
  }).strict()).min(1),
}).strict();

export const taskBenchmarkReviewSchema = z.object({
  taskId: idSchema,
  checkedAt: isoDateSchema,
  candidateIds: z.array(idSchema).min(1),
  summary: bilingualTextSchema,
  limitation: bilingualTextSchema,
  sourceIds: z.array(idSchema).min(1),
}).strict();

export type BenchmarkSource = z.infer<typeof benchmarkSourceSchema>;
export type BenchmarkCandidate = z.infer<typeof benchmarkCandidateSchema>;
export type TaskBenchmark = z.infer<typeof taskBenchmarkSchema>;
export type TaskBenchmarkReview = z.infer<typeof taskBenchmarkReviewSchema>;

export const atlasDatasetSchema = z
  .object({
    vendors: z.array(vendorSchema),
    categories: z.array(categorySchema),
    capabilities: z.array(capabilitySchema),
    vendorEntries: z.array(vendorEntrySchema),
    assessments: z.array(comparisonAssessmentSchema),
    models: z.array(modelSchema),
    plans: z.array(planSchema),
    sources: z.array(sourceSchema),
  })
  .strict();

export type Availability = z.infer<typeof availabilitySchema>;
export type ComparisonStatus = z.infer<typeof comparisonStatusSchema>;
export type Vendor = z.infer<typeof vendorSchema>;
export type Category = z.infer<typeof categorySchema>;
export type Capability = z.infer<typeof capabilitySchema>;
export type VendorEntry = z.infer<typeof vendorEntrySchema>;
export type ComparisonAssessment = z.infer<typeof comparisonAssessmentSchema>;
export type Model = z.infer<typeof modelSchema>;
export type ModelTask = z.infer<typeof modelTaskSchema>;
export type Plan = z.infer<typeof planSchema>;
export type Source = z.infer<typeof sourceSchema>;
export type AtlasDataset = z.infer<typeof atlasDatasetSchema>;
