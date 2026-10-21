import { atlasDataset } from "@/data";
import { modelTaskValues } from "@/data/schema";
import { modelBrowserLabels, modelTaskLabels } from "@/lib/labels";
import {
  defaultModelBrowserState, modelTasksExport, parseModelBrowserState,
  selectModelTasks, serializeModelBrowserState,
} from "@/lib/model-tasks";

describe("model task browsing", () => {
  it("groups all eligible models without double-counting overlapping membership", () => {
    const { models, groups } = selectModelTasks(atlasDataset, defaultModelBrowserState);
    expect(groups.map((group) => group.id)).toEqual([...modelTaskValues]);
    expect(models.every((model) => model.lifecycle !== "legacy" && model.lifecycle !== "deprecated")).toBe(true);
    expect(models.map((model) => model.id)).toEqual(expect.arrayContaining([
      "claude-opus-5-5", "claude-sonnet-5-5", "claude-haiku-5-5", "gpt-6-1-sol", "gpt-6-luna", "minimax-m3-1-flash",
    ]));
    const memberships = groups.flatMap((group) => group.models.map((model) => model.id));
    expect(new Set(memberships).size).toBe(models.length);
    expect(memberships.length).toBeGreaterThan(models.length);
    expect(memberships.filter((id) => id === "gpt-6-astra").length).toBeGreaterThan(1);
    expect(selectModelTasks(atlasDataset, { ...defaultModelBrowserState, includeHistorical: true }).models).toEqual(atlasDataset.models);
  });

  it("does not confuse image input with image generation", () => {
    const { models } = selectModelTasks(atlasDataset, { ...defaultModelBrowserState, taskId: "image-generation" });
    expect(models.map((model) => model.id)).toEqual(["glm-image"]);
    const vision = selectModelTasks(atlasDataset, { ...defaultModelBrowserState, taskId: "visual-understanding" });
    expect(vision.models.some((model) => model.id === "glm-image")).toBe(false);
    expect(vision.models.some((model) => model.id === "gpt-6-astra")).toBe(true);
  });

  it("intersects task, vendor, search, and lifecycle filters", () => {
    const state = { ...defaultModelBrowserState, vendorId: "deepseek", query: "flash", taskId: "visual-understanding" as const };
    expect(selectModelTasks(atlasDataset, state).models.map((model) => model.id)).toEqual(["deepseek-v4-1-flash"]);
    expect(selectModelTasks(atlasDataset, { ...state, includeHistorical: true }).models.map((model) => model.id)).toEqual([
      "deepseek-v4-flash-vision-exp", "deepseek-v4-1-flash",
    ]);
  });

  it("counts task choices before applying the task filter and handles empty intersections", () => {
    const state = { ...defaultModelBrowserState, vendorId: "anthropic", taskId: "image-generation" as const };
    const result = selectModelTasks(atlasDataset, state);
    expect(result.models).toEqual([]);
    expect(result.groups).toEqual([]);
    expect(result.totalCount).toBe(4);
    expect(result.counts.get("visual-understanding")).toBe(4);
    expect(result.counts.get("image-generation")).toBe(0);
  });

  it("searches task names in Turkish and English regardless of the display language", () => {
    const turkish = selectModelTasks(atlasDataset, { ...defaultModelBrowserState, query: "GÖRSEL ÜRETİMİ" });
    const english = selectModelTasks(atlasDataset, { ...defaultModelBrowserState, query: "image generation", locale: "tr" });
    expect(turkish.models.map((model) => model.id)).toEqual(["glm-image"]);
    expect(english.models).toEqual(turkish.models);
  });

  it("restores validated URL filters and drops unknown choices", () => {
    const state = { ...defaultModelBrowserState, query: "DeepSeek", vendorId: "deepseek", taskId: "visual-understanding" as const, includeHistorical: true, locale: "tr" as const };
    expect(parseModelBrowserState(new URLSearchParams(serializeModelBrowserState(state)), atlasDataset)).toEqual(state);
    expect(parseModelBrowserState(new URLSearchParams("task=nope&vendor=nope&history=yes&lang=nope"), atlasDataset)).toEqual(defaultModelBrowserState);
    expect(serializeModelBrowserState(defaultModelBrowserState)).toBe("");
    expect(parseModelBrowserState(new URLSearchParams(`q=${"x".repeat(150)}`), atlasDataset).query).toHaveLength(120);
    expect(new URLSearchParams(serializeModelBrowserState({ ...state, query: "x".repeat(150) })).get("q")).toHaveLength(120);
  });

  it("exports exactly the visible memberships with evidence and bilingual headers", () => {
    const state = { ...defaultModelBrowserState, taskId: "image-generation" as const, locale: "tr" as const };
    const table = modelTasksExport(atlasDataset, state);
    expect(table.headers).toEqual(["Görev", "Model", "Sağlayıcı", "Kaydedilen durum", "Kaynak doğrulaması", "Resmî kaynaklar"]);
    const imageModel = atlasDataset.models.find((model) => model.id === "glm-image")!;
    const urls = imageModel.sourceIds.map((id) => atlasDataset.sources.find((source) => source.id === id)!.url);
    expect(table.rows).toEqual([["Görsel üretimi", "GLM-Image", "Z.ai", "Güncel", imageModel.verifiedAt, urls.join(" ")]]);
    expect(modelTasksExport(atlasDataset, { ...state, vendorId: "anthropic" }).rows).toEqual([]);
  });

  it("keeps controls and task explanations available in both languages", () => {
    expect(Object.keys(modelBrowserLabels.en).sort()).toEqual(Object.keys(modelBrowserLabels.tr).sort());
    for (const id of modelTaskValues) {
      expect(modelTaskLabels.en[id].description.length).toBeGreaterThan(0);
      expect(modelTaskLabels.tr[id].description.length).toBeGreaterThan(0);
    }
  });
});
