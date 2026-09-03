import { z } from "zod";

/**
 * Learn module — schema.
 *
 * The Learn module is a sibling to the Atlas: it does not import or mutate
 * any Atlas record. Concepts are evidence-backed, source-linked, and
 * validated at build time. Spaced-repetition progress lives in localStorage
 * on the client and is therefore outside this schema.
 *
 * IDs are stable lowercase kebab-case strings. Dates use ISO YYYY-MM-DD.
 */

export const requiredConceptCategoryIds = [
  "foundations",
  "architecture",
  "training",
  "retrieval",
  "agents",
  "operations",
] as const;

export const conceptDifficultyValues = [
  "intro",
  "core",
  "advanced",
] as const;

export const conceptRelationKindValues = [
  "prerequisite",
  "related",
  "deepens",
] as const;

const idSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "ID must be lowercase kebab-case.");

const isoDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must use ISO YYYY-MM-DD format.");

const httpsUrlSchema = z
  .url("URL must be valid.")
  .refine((url) => url.startsWith("https://"), "URL must use HTTPS.");

export const conceptCategorySchema = z
  .object({
    id: idSchema,
    name: z.string(),
    shortName: z.string(),
    description: z.string(),
    order: z.number().int(),
  })
  .strict();

export const conceptDifficultySchema = z.enum(conceptDifficultyValues);
export const conceptRelationKindSchema = z.enum(conceptRelationKindValues);

export const conceptRelationSchema = z
  .object({
    kind: conceptRelationKindSchema,
    targetId: idSchema,
  })
  .strict();

export const diagramSchema = z
  .object({
    id: idSchema,
    title: z.string(),
    caption: z.string(),
    /** Inline SVG markup. Must not contain scripts. */
    svg: z.string(),
  })
  .strict();

export const quizOptionSchema = z
  .object({
    id: idSchema,
    text: z.string(),
    correct: z.boolean(),
    explanation: z.string(),
  })
  .strict();

export const quizItemSchema = z
  .object({
    id: idSchema,
    prompt: z.string(),
    options: z.array(quizOptionSchema).min(2),
    /** Number of options that must be marked correct. */
    correctCount: z.number().int().min(1),
  })
  .strict();

export const referenceSchema = z
  .object({
    id: idSchema,
    title: z.string(),
    publisher: z.string(),
    url: httpsUrlSchema,
    /** Why this source supports the claim. */
    note: z.string().optional(),
  })
  .strict();

export const conceptSchema = z
  .object({
    id: idSchema,
    categoryId: idSchema,
    title: z.string(),
    /** One-sentence headline for the catalog card. */
    summary: z.string(),
    /** Long-form explanation. May contain paragraphs separated by blank lines. */
    explanation: z.string(),
    /** Compact bullet list of takeaways the student should remember. */
    keyTakeaways: z.array(z.string()).min(1),
    /** Optional worked example that grounds the concept. */
    example: z
      .object({
        title: z.string(),
        body: z.string(),
      })
      .strict()
      .optional(),
    /** Inline SVG diagrams embedded in the explanation. */
    diagrams: z.array(diagramSchema),
    /** Self-check quiz at the bottom of the page. */
    quiz: z.array(quizItemSchema),
    /** Graph edges to other concepts. */
    relations: z.array(conceptRelationSchema),
    /** Difficulty band — drives catalog badges. */
    difficulty: conceptDifficultySchema,
    /** Estimated reading + recall time in minutes. */
    estimatedMinutes: z.number().int().min(1),
    /** Topic tags for filtering. */
    tags: z.array(z.string()),
    /** Source IDs that support the factual claims. */
    referenceIds: z.array(idSchema).min(1),
    /** Date the references were last verified. */
    verifiedAt: isoDateSchema,
    /** Display order within its category. */
    order: z.number().int(),
  })
  .strict();

export const learnDatasetSchema = z
  .object({
    categories: z.array(conceptCategorySchema),
    concepts: z.array(conceptSchema),
    references: z.array(referenceSchema),
  })
  .strict();

export type ConceptCategory = z.infer<typeof conceptCategorySchema>;
export type ConceptDifficulty = z.infer<typeof conceptDifficultySchema>;
export type ConceptRelationKind = z.infer<typeof conceptRelationKindSchema>;
export type ConceptRelation = z.infer<typeof conceptRelationSchema>;
export type Diagram = z.infer<typeof diagramSchema>;
export type QuizOption = z.infer<typeof quizOptionSchema>;
export type QuizItem = z.infer<typeof quizItemSchema>;
export type Reference = z.infer<typeof referenceSchema>;
export type Concept = z.infer<typeof conceptSchema>;
export type LearnDataset = z.infer<typeof learnDatasetSchema>;
