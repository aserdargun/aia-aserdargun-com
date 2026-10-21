import { readFileSync } from "node:fs";
import { modelFamilies } from "@/data/model-families";
import { openWeightModels, taxonomyTasks } from "@/data/task-models";
import { modelFamilySources, taskModelSources, taxonomySources } from "@/data/sources";
import { linkModelFamilyCards, modelFamilyHref, tasksForModel, validateModelFamilies } from "@/lib/model-families";
import { prepareTaxonomySvg } from "@/lib/taxonomy";

const svg = readFileSync("public/assets/taxonomy/ai-model-taxonomy.svg", "utf8");
const sources = [...taskModelSources, ...modelFamilySources];
const validate = (families = modelFamilies, evidence = sources) => validateModelFamilies(families, openWeightModels, taxonomyTasks, evidence, taxonomySources, svg);

describe("model-family evidence and task traversal", () => {
  it("covers the 50 original concepts with independently sourced memberships and canonical tasks", () => {
    expect(() => validate()).not.toThrow();
    expect(modelFamilies).toHaveLength(50);
    expect(new Set(modelFamilies.flatMap((family) => family.models.map((entry) => entry.modelId))).size).toBe(openWeightModels.length);
    for (const model of openWeightModels) {
      const reversed = tasksForModel(model.id, taxonomyTasks);
      expect(reversed.length).toBeGreaterThan(0);
      for (const { task, evidence } of reversed) {
        expect(evidence).toBe(task.recommendations.find((entry) => entry.modelId === model.id));
      }
    }
    expect(tasksForModel("not-in-the-catalogue", taxonomyTasks)).toEqual([]);
  });

  it("rejects fabricated members, missing evidence, duplicates, wrong definitions and missing concepts", () => {
    expect(() => validate(modelFamilies.slice(1))).toThrow(/cover the SVG/);
    expect(() => validate(undefined, sources.filter((source) => source.id !== "ow-codet5"))).toThrow(/Unresolved family evidence/);
    const neural = modelFamilies.find((family) => family.id === "neural-networks")!;
    const replace = (value: typeof neural) => modelFamilies.map((family) => family.id === neural.id ? value : family);
    expect(() => validate(replace({ ...neural, models: [...neural.models, neural.models[0]] }))).toThrow(/Duplicate model/);
    expect(() => validate(replace({ ...neural, models: [{ ...neural.models[0], modelId: "unknown" }] }))).toThrow(/Unresolved family evidence/);
    expect(() => validate(replace({ ...neural, definitionSourceId: "S01" }))).toThrow(/Incorrect family definition/);
    expect(() => validate(replace({ ...neural, models: [{ ...neural.models[0], sourceIds: ["ow-bart"] }] }))).toThrow(/exact model/);
  });

  it("does not infer architectures, human preference training or task readiness from names", () => {
    const members = (id: string) => modelFamilies.find((family) => family.id === id)!.models;
    expect(members("mixture-of-experts").map((entry) => entry.modelId)).not.toContain("wan");
    expect(members("encoder-only").map((entry) => entry.modelId)).not.toContain("embedding");
    expect(members("decoder-only").find((entry) => entry.modelId === "embedding")?.relation).toBe("member");
    expect(members("variational-autoencoders").find((entry) => entry.modelId === "wan")?.relation).toBe("component");
    expect(members("rl-from-human-feedback").map((entry) => entry.modelId)).toEqual(["llama31-rlhf"]);
    expect(members("direct-preference-optimization").map((entry) => entry.modelId)).toEqual(["olmo2-dpo"]);
    expect(members("nearest-neighbor-models").find((entry) => entry.modelId === "knnvc")?.relation).toBe("component");
    expect(members("gaussian-mixture-models").find((entry) => entry.modelId === "pocketsphinx")?.relation).toBe("component");
    expect(tasksForModel("codet5", taxonomyTasks).every(({ evidence }) => evidence.evidence === "adaptation")).toBe(true);
  });

  it("records source-backed research for all twenty former gaps and rejects dangling review sources", () => {
    const reviewed = modelFamilies.filter((family) => "review" in family);
    expect(reviewed).toHaveLength(20);
    expect(modelFamilies.every((family) => family.models.length > 0)).toBe(true);
    for (const family of reviewed) {
      expect(family.review?.summary.en).toBeTruthy();
      expect(family.review?.summary.tr).toBeTruthy();
      expect(family.review?.sourceIds.some((id) => family.models.some((entry) => entry.sourceIds.includes(id)))).toBe(true);
    }
    const family = reviewed[0];
    expect(() => validate(modelFamilies.map((item) => item.id === family.id
      ? { ...item, review: { ...family.review!, sourceIds: ["ow-missing-research"] } } : item))).toThrow(/review evidence/);
    const rules = openWeightModels.find((model) => model.id === "anyburl-rules")!;
    expect(rules.parameterKind).toBe("rules");
    expect(openWeightModels.find((model) => model.id === "asia-bn")?.parameterKind).toBe("statistical");
    expect(tasksForModel("anyburl-rules", taxonomyTasks).map(({ task }) => task.id)).toEqual(["link-prediction"]);
    expect(tasksForModel("chgnet", taxonomyTasks).map(({ task }) => task.id)).toEqual(["graph-regression"]);
    expect(tasksForModel("glow", taxonomyTasks).map(({ task }) => task.id)).not.toContain("density-estimation");
  });

  it("makes only concept cards interactive and preserves the duplicate Speech & Audio navigation", () => {
    for (const locale of ["en", "tr"] as const) {
      const linked = linkModelFamilyCards(prepareTaxonomySvg(svg, locale), modelFamilies, locale, "transformers");
      const document = new DOMParser().parseFromString(linked, "image/svg+xml");
      expect(document.querySelector("parsererror")).toBeNull();
      expect(document.querySelectorAll("a[data-family-id]")).toHaveLength(50);
      expect(document.querySelectorAll('a[aria-current="true"]')).toHaveLength(1);
      expect(document.querySelectorAll('#task-families a[data-family-id]')).toHaveLength(0);
      expect(document.querySelector('#task-families a[href$="#speech-audio"]')).not.toBeNull();
      expect(document.querySelectorAll('a[href^="https://"]')).toHaveLength(3);
      for (const family of modelFamilies) {
        expect(document.querySelector(`a[data-family-id="${family.id}"]`)?.getAttribute("href")).toBe(modelFamilyHref(family.id, locale));
      }
    }
    expect(svg).not.toContain("data-family-id");
    expect(modelFamilyHref(null, "en")).toBe("/taxonomy/models");
    expect(modelFamilyHref("transformers", "tr", "#taxonomy-sources")).toBe("/taxonomy/models?lang=tr&family=transformers#taxonomy-sources");
  });
});
