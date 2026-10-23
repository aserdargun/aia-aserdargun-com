import { modelFamilies } from "@/data/model-families";
import { taskModelSources } from "@/data/sources";
import { openWeightModels, taxonomyTasks } from "@/data/task-models";

const sources = taskModelSources;
const sourceById = new Map(sources.map((source) => [source.id, source]));

describe("open-weight catalogue", () => {
  it("keeps identifiers unique across models and sources", () => {
    expect(new Set(openWeightModels.map((model) => model.id)).size).toBe(openWeightModels.length);
    expect(new Set(sources.map((source) => source.id)).size).toBe(sources.length);
    expect(new Set(taxonomyTasks.map((task) => task.id)).size).toBe(taxonomyTasks.length);
    expect(new Set(modelFamilies.map((family) => family.id)).size).toBe(modelFamilies.length);
  });

  it("cites the publisher's own Hugging Face repository when the checkpoint lives there", () => {
    const huggingFaceModels = openWeightModels.filter((model) => {
      const card = sourceById.get(model.cardSourceId);
      return card?.url.startsWith("https://huggingface.co/");
    });
    expect(huggingFaceModels.length).toBeGreaterThan(0);
    for (const model of huggingFaceModels) {
      const card = sourceById.get(model.cardSourceId)!;
      const weights = sourceById.get(model.weightsSourceId)!;
      expect(card.url).toMatch(/^https:\/\/huggingface\.co\/[^/]+\/[^/]+$/);
      expect(weights.url).toMatch(/^https:\/\/huggingface\.co\/[^/]+\/[^/]+\/tree\/[a-f0-9]{40}$/);
      expect(weights.revision).toBe(card.revision);
    }
  });

  it("records published Hugging Face file listings that add up", () => {
    const artifacts = sources.filter((source) => source.artifact?.type === "hf-repository");
    for (const source of artifacts) {
      const artifact = source.artifact!;
      if (artifact.type !== "hf-repository") continue;
      expect(artifact.repositoryUrl).toMatch(/^https:\/\/huggingface\.co\/[^/]+\/[^/]+$/);
      expect(artifact.files.length).toBeGreaterThan(0);
      expect(artifact.files.reduce((total, file) => total + file.sizeBytes, 0)).toBe(artifact.totalBytes);
      expect(artifact.totalBytes).toBeGreaterThan(0);
      expect(source.kind).toBe("weights");
    }
  });

  it("keeps the access state aligned with the publisher repository", () => {
    for (const model of openWeightModels) {
      const weights = sourceById.get(model.weightsSourceId);
      const artifact = weights?.artifact;
      if (artifact?.type !== "hf-repository") continue;
      expect(model.access).toBe(artifact.gated ? "gated" : "public");
    }
  });

  it("marks automatically discovered models so the editorial shortlist stays distinct", () => {
    for (const model of openWeightModels) {
      if (model.discovery === undefined) continue;
      expect(model.discovery).toBe("auto");
      expect(model.role).toBe("reference");
    }
  });
});
