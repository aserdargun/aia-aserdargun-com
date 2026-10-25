import { readFileSync } from "node:fs";
import { hostedModels } from "@/data/hosted-models";
import { hostedModelSchema, type ModelFamily, type TaxonomyTask } from "@/data/schema";
import { modelFamilies } from "@/data/model-families";
import { openWeightModels, taxonomyTasks } from "@/data/task-models";
import { taskModelSources, taxonomySources } from "@/data/sources";
import { taxonomyMaps } from "@/data/taxonomy";
import { validateHostedReferences } from "@/lib/hosted-models";
import { benchmarkStatus } from "@/lib/task-benchmarks";
import { taskBenchmarks } from "@/data/task-benchmarks";
import { validateTaskModels } from "@/lib/task-models";

const families: ModelFamily[] = modelFamilies;
const tasks: TaxonomyTask[] = taxonomyTasks;
const validate = (nextTasks = tasks, nextFamilies = families, sources = taskModelSources) =>
  validateHostedReferences(nextTasks, nextFamilies, hostedModels, sources, openWeightModels);

describe("decision models and inference modes", () => {
  it("keeps the output contract separate from architectures and inference modes", () => {
    const concepts = families.filter((family) => family.axis === "inference-decision-behavior");
    expect(concepts.map((family) => family.id)).toEqual([
      "structured-decision-models", "direct-inference", "deliberative-inference", "hybrid-adaptive-inference",
    ]);
    expect(taxonomyMaps.find((map) => map.id === "models")?.branchCount).toBe(8);
    expect(concepts.every((family) => family.localizedName?.tr && family.localizedDefinition?.tr)).toBe(true);
    expect(concepts.find((family) => family.id === "structured-decision-models")?.models.some((entry) => entry.modelId === "strands-decider-v21")).toBe(true);
    expect(concepts.find((family) => family.id === "hybrid-adaptive-inference")?.models.map((entry) => entry.modelId)).toContain("qwen3-4b-hybrid");
    expect(families.filter((family) => family.axis === "neural-architectures").every((family) => !family.hostedReferences?.some((entry) => entry.modelId === "jev-1-14"))).toBe(true);
  });

  it("adds two operational tasks and preserves explicit benchmark gaps", () => {
    expect(tasks).toHaveLength(87);
    expect(new Set(tasks.map((task) => task.family)).size).toBe(8);
    for (const id of ["action-selection", "rubric-based-scoring"]) {
      const task = tasks.find((entry) => entry.id === id)!;
      expect(task.family).toBe("Reasoning, Planning & Action");
      expect(task.hostedReferences?.[0].modelId).toBe("jev-1-14");
      expect(task.recommendations.some((entry) => entry.modelId === "strands-decider-v21")).toBe(true);
      expect(benchmarkStatus(id, taskBenchmarks)).toBe("gap");
    }
    expect(tasks.find((task) => task.id === "text-classification")?.hostedReferences?.[0].modelId).toBe("jev-1-14");
    expect(tasks.some((task) => /system-[12]/.test(task.id))).toBe(false);
  });

  it("validates hosted evidence without inventing an open-weight artifact", () => {
    expect(() => validate()).not.toThrow();
    expect(openWeightModels.some((model) => model.id === "jev-1-14")).toBe(false);
    const jev = hostedModels[0];
    expect(jev.version).toBe("jev-1.14.0");
    expect(hostedModelSchema.safeParse({ ...jev, weightsSourceId: "fake" }).success).toBe(false);
    const svg = readFileSync("public/assets/taxonomy/ai-task-taxonomy.svg", "utf8");
    expect(() => validateTaskModels(tasks, [...openWeightModels, jev as never], taskModelSources, taxonomySources, svg)).toThrow();
  });

  it("rejects unknown models, missing citations, duplicate references and unversioned evidence", () => {
    const task = tasks.find((entry) => entry.id === "action-selection")!;
    const edge = task.hostedReferences![0];
    const replace = (hostedReferences: NonNullable<TaxonomyTask["hostedReferences"]>) => tasks.map((entry) => entry.id === task.id ? { ...entry, hostedReferences } : entry);
    expect(() => validate(replace([{ ...edge, modelId: "unknown" }]))).toThrow(/hosted.*model/i);
    expect(() => validate(replace([{ ...edge, sourceIds: ["ow-unknown"] }]))).toThrow(/hosted.*source/i);
    expect(() => validate(replace([edge, edge]))).toThrow(/duplicate/i);
    expect(() => validate(undefined, undefined, taskModelSources.filter((source) => source.id !== hostedModels[0].versionSourceId))).toThrow(/hosted.*source/i);
    expect(() => validate(replace([{ ...edge, sourceIds: ["ow-jev-routing"] }]))).toThrow(/exact.*model/i);
  });

  it("rejects a version citation belonging to another model even when every edge cites it", () => {
    const wrong = "ow-qwen3-4b-hybrid";
    const changedModels = hostedModels.map((model) => ({ ...model, versionSourceId: wrong }));
    const addCitation = <T extends TaxonomyTask | ModelFamily>(owners: T[]): T[] => owners.map((owner) => ({
      ...owner, hostedReferences: owner.hostedReferences?.map((entry) => ({ ...entry, sourceIds: [...entry.sourceIds, wrong] })),
    }));
    expect(() => validateHostedReferences(addCitation(tasks), addCitation(families), changedModels, taskModelSources, openWeightModels)).toThrow(/version|publisher/i);
  });

  it("shortlists public decision checkpoints with pinned weights, licenses and task-specific mappings", () => {
    for (const id of ["pplx-decider-v12", "pplx-decider-flash-v12", "clef-27b"]) {
      const model = openWeightModels.find((entry) => entry.id === id)!;
      expect(model).toBeDefined();
      expect(model.role).toBe("shortlist");
      expect(model.license).toBe("Apache-2.0");
      const weights = taskModelSources.find((source) => source.id === model.weightsSourceId)!;
      expect(weights.revision).toMatch(/^[a-f0-9]{40}$/);
      expect(weights.artifact?.type).toBe("hf-repository");
      if (weights.artifact?.type !== "hf-repository") throw new Error("Missing publisher file listing");
      expect(weights.artifact.totalBytes).toBeGreaterThan(1_000_000_000);
      expect(weights.artifact.gated).toBe(false);
      for (const taskId of ["text-classification", "action-selection", "rubric-based-scoring"]) {
        expect(tasks.find((task) => task.id === taskId)?.recommendations.some((entry) => entry.modelId === id)).toBe(true);
      }
      for (const familyId of ["structured-decision-models", "direct-inference"]) {
        expect(families.find((family) => family.id === familyId)?.models.some((entry) => entry.modelId === id)).toBe(true);
      }
    }
  });
});
