import { modelFamilies } from "@/data/model-families";
import { taskModelSources } from "@/data/sources";
import { openWeightModels, taxonomyTasks } from "@/data/task-models";
import {
  formatBytes, formatParameterCount, footprintBand, footprintBandValues, footprintFor,
  openWeightEvidence, openWeightPublisher, parameterCount, taxonomyCoverage, weightBytes,
} from "@/lib/open-weights";

const sources = taskModelSources;
const byId = new Map(sources.map((source) => [source.id, source]));

describe("open-weight footprint", () => {
  it("resolves every model to its card, weights and license evidence", () => {
    expect(openWeightModels.length).toBeGreaterThan(0);
    for (const model of openWeightModels) {
      const evidence = openWeightEvidence(model, sources);
      expect(evidence, model.id).not.toBeNull();
      expect(evidence!.card.kind).toBe("model-card");
      expect(evidence!.weights.kind).toBe("weights");
      expect(byId.has(model.licenseSourceId), `${model.id} license source`).toBe(true);
      expect(openWeightPublisher(model, sources)).not.toBe("—");
    }
  });

  it("derives local size only from published weight files", () => {
    let withFiles = 0;
    for (const model of openWeightModels) {
      const bytes = weightBytes(model, sources);
      if (bytes === null) {
        expect(footprintFor(model, sources).known).toBe(false);
        continue;
      }
      withFiles += 1;
      expect(bytes).toBeGreaterThan(0);
      const footprint = footprintFor(model, sources);
      expect(footprint.known).toBe(true);
      expect(footprint.vram4).toBeGreaterThan(0);
      expect(footprint.memory8).toBeGreaterThanOrEqual(footprint.vram4);
      expect(footprint.band).toBe(footprintBand(footprint.vram4));
    }
    expect(withFiles).toBeGreaterThan(0);
  });

  it("keeps the memory bands ordered and honest", () => {
    expect(footprintBand(null)).toBe("unknown");
    expect(footprintBand(4)).toBe("≤8");
    expect(footprintBand(8)).toBe("≤8");
    expect(footprintBand(8.1)).toBe("≤16");
    expect(footprintBand(24)).toBe("≤24");
    expect(footprintBand(48)).toBe("≤48");
    expect(footprintBand(80)).toBe("≤80");
    expect(footprintBand(80.1)).toBe(">80");
    expect(footprintBandValues).toHaveLength(6);
  });

  it("formats parameter counts and byte totals for both languages", () => {
    expect(formatParameterCount(null, "en")).toBe("—");
    expect(formatParameterCount(27_781_427_952, "en")).toBe("27.8B");
    expect(formatParameterCount(7_567_295_488, "en")).toBe("7.57B");
    expect(formatParameterCount(600_000_000, "en")).toBe("600M");
    expect(formatParameterCount(600_000_000, "tr")).toBe("600M");
    expect(formatBytes(null, "en")).toBe("—");
    expect(formatBytes(55_586_114_863, "en")).toBe("51.8 GB");
    expect(formatBytes(1024 ** 3, "en")).toBe("1 GB");
  });

  it("reports a parameter count only when the publisher published one", () => {
    for (const model of openWeightModels) {
      const count = parameterCount(model, sources);
      const artifact = byId.get(model.weightsSourceId)?.artifact;
      if (artifact?.type !== "hf-repository") {
        expect(count, model.id).toBeNull();
      } else if (count !== null) {
        expect(count).toBeGreaterThan(0);
      }
    }
  });
});

describe("taxonomy coverage", () => {
  it("counts the tasks the catalogue can answer", () => {
    const coverage = taxonomyCoverage(taxonomyTasks);
    expect(coverage.totalTasks).toBe(taxonomyTasks.length);
    expect(coverage.tasksWithModels + coverage.withoutModels).toBe(coverage.totalTasks);
    expect(coverage.specialist + coverage.pipeline).toBeLessThanOrEqual(coverage.totalTasks);
    expect(coverage.tasksWithModels).toBeGreaterThan(0);
  });

  it("keeps every open-weight model inside the taxonomy", () => {
    const referenced = new Set(
      taxonomyTasks.flatMap((task) => task.recommendations.map((entry) => entry.modelId)),
    );
    const inFamily = new Set(
      modelFamilies.flatMap((family) => family.models.map((entry) => entry.modelId)),
    );
    for (const model of openWeightModels) {
      expect(referenced.has(model.id), `${model.id} task evidence`).toBe(true);
      expect(inFamily.has(model.id), `${model.id} family evidence`).toBe(true);
    }
  });
});
