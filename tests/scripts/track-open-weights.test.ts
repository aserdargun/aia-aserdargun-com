import {
  compareVersions, familyIdsFor, isBaseCheckpoint, isFineTune, isQuantizedCopy, isVariantOf,
  licenseChanged, licenseFor, pipelineTaskId, primaryWeightFiles, productLine, repositoryFromUrl,
  slugify, versionTokens,
  type HuggingFaceModel,
} from "../../scripts/track-open-weights";

function model(overrides: Partial<HuggingFaceModel>): HuggingFaceModel {
  return { id: "publisher/model", sha: "a".repeat(40), ...overrides };
}

describe("open-weight tracker rules", () => {
  it("maps a publisher repository to its catalogue identifier", () => {
    expect(repositoryFromUrl("https://huggingface.co/Qwen/Qwen3-Embedding-8B")).toBe("Qwen/Qwen3-Embedding-8B");
    expect(repositoryFromUrl("https://huggingface.co/Qwen/Qwen3-Embedding-8B/tree/abc")).toBe("Qwen/Qwen3-Embedding-8B");
    expect(repositoryFromUrl("https://github.com/CederGroupHub/chgnet")).toBeNull();
  });

  it("builds identifiers that the schema accepts", () => {
    expect(slugify("Qwen3-Embedding-8B")).toBe("qwen3-embedding-8b");
    expect(slugify("GLM-5.3")).toBe("glm-5-3");
    expect(slugify("DeepSeek_V4.1 Flash")).toBe("deepseek-v4-1-flash");
  });

  it("keeps adapters and quantised re-uploads out of the checkpoint list", () => {
    expect(isBaseCheckpoint("Qwen/Qwen3-8B")).toBe(true);
    expect(isBaseCheckpoint("Qwen/Qwen3-8B-GGUF")).toBe(false);
    expect(isBaseCheckpoint("Qwen/Qwen3-8B-Lora")).toBe(false);
    expect(isBaseCheckpoint("Qwen/Qwen3-8B-AWQ")).toBe(false);
  });

  it("counts only the publisher's own weight files", () => {
    const files = primaryWeightFiles([
      { rfilename: "model-00001-of-00002.safetensors", size: 100 },
      { rfilename: "model-00002-of-00002.safetensors", size: 50 },
      { rfilename: "model.gguf", size: 900 },
      { rfilename: "tokenizer.json", size: 5 },
      { rfilename: "empty.safetensors", size: 0 },
    ]);
    expect(files).toEqual([
      { name: "model-00001-of-00002.safetensors", sizeBytes: 100 },
      { name: "model-00002-of-00002.safetensors", sizeBytes: 50 },
    ]);
  });

  it("maps a pipeline tag to a taxonomy task", () => {
    expect(pipelineTaskId(model({ pipeline_tag: "text-generation" }))).toBe("text-generation");
    expect(pipelineTaskId(model({ pipeline_tag: "feature-extraction" }))).toBe("semantic-textual-similarity");
    expect(pipelineTaskId(model({ pipeline_tag: null, tags: ["automatic-speech-recognition"] }))).toBe("automatic-speech-recognition");
    expect(pipelineTaskId(model({ pipeline_tag: "unknown-task" }))).toBeNull();
  });

  it("maps architecture metadata to a model family", () => {
    expect(familyIdsFor(model({ config: { architectures: ["Qwen3_5ForConditionalGeneration"] } }))).toContain("multimodal-models");
    expect(familyIdsFor(model({ config: { architectures: ["LlamaForCausalLM"] } }))).toContain("decoder-only");
    expect(familyIdsFor(model({ library_name: "diffusers" }))).toContain("diffusion-models");
    expect(familyIdsFor(model({ tags: ["moe"] }))).toContain("mixture-of-experts");
  });

  it("reads the published license from the card or the tag list", () => {
    expect(licenseFor(model({ cardData: { license: "apache-2.0" } }))).toBe("apache-2.0");
    expect(licenseFor(model({ tags: ["transformers", "license:mit"] }))).toBe("mit");
    expect(licenseFor(model({ tags: ["transformers"] }))).toBeNull();
  });

  it("reports a license change only when the identifier really differs", () => {
    expect(licenseChanged("MIT", "mit")).toBe(false);
    expect(licenseChanged("Apache-2.0", "apache-2.0")).toBe(false);
    expect(licenseChanged("TabPFN-3.5 License v1.0", "other")).toBe(false);
    expect(licenseChanged("MIT", "apache-2.0")).toBe(true);
  });

  it("separates fine-tunes and quantised copies from published checkpoints", () => {
    expect(isFineTune(model({ tags: ["base_model:Qwen/Qwen3-32B"] }))).toBe(true);
    expect(isFineTune(model({ tags: ["transformers"] }))).toBe(false);
    expect(isQuantizedCopy(model({ tags: ["quantization", "int4"] }))).toBe(true);
    expect(isQuantizedCopy(model({ tags: ["safetensors"] }))).toBe(false);
    expect(isBaseCheckpoint("facebook/MobileMoE-L-QAT")).toBe(false);
    expect(isBaseCheckpoint("amazon/GDN-primed-HQwen3-32B-Instruct")).toBe(false);
  });

  it("compares product lines and versions before adding a release", () => {
    expect(productLine("zai-org/GLM-5.3-Flash-BF16")).toBe("glm");
    expect(productLine("zai-org/GLM-OCR")).toBe("glm");
    expect(versionTokens("GLM-5.3")).toEqual([5, 3]);
    expect(versionTokens("GLM-5.3-BF16")).toEqual([5, 3, 16]);
    expect(compareVersions([5, 3], [5, 2])).toBeGreaterThan(0);
    expect(compareVersions([5, 3], [5, 3])).toBe(0);
    expect(compareVersions([5, 2], [5, 3])).toBeLessThan(0);
    expect(isVariantOf("zai-org/GLM-5.3-BF16", ["GLM-5.3"])).toBe(true);
    expect(isVariantOf("zai-org/GLM-OCR", ["GLM-5.3"])).toBe(false);
  });
});
