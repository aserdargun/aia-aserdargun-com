import { readFileSync } from "node:fs";
import { openWeightModels, taxonomyTasks } from "@/data/task-models";
import { taskModelSources, taxonomySources } from "@/data/sources";
import { linkTaskCards, taskModelHref, validateTaskModels } from "@/lib/task-models";
import type { TaskModelSource } from "@/data/schema";

const svg = readFileSync("public/assets/taxonomy/ai-task-taxonomy.svg", "utf8");

describe("task-level open-weight evidence", () => {
  it("covers every original task exactly and resolves model, license, revision and evidence references", () => {
    expect(() => validateTaskModels(taxonomyTasks, openWeightModels, taskModelSources, taxonomySources, svg)).not.toThrow();
    expect(taxonomyTasks).toHaveLength(85);
    const original = new DOMParser().parseFromString(svg, "image/svg+xml");
    for (const task of taxonomyTasks) {
      const card = [...original.querySelectorAll("g[data-card]")].find((element) => element.getAttribute("data-card") === task.name)!;
      const definition = taxonomySources.find((source) => source.id === task.definitionSourceId)!;
      expect(card.parentElement?.getAttribute("href")).toBe(definition.url);
      expect(card.querySelector("title")?.textContent).toContain(task.definition);
    }
    expect(new Set(taxonomyTasks.flatMap((task) => task.recommendations.map((entry) => entry.modelId))).size).toBe(openWeightModels.length);
  });

  it("rejects missing evidence, mismatched revisions, duplicate recommendations and incomplete map coverage", () => {
    expect(() => validateTaskModels(taxonomyTasks, openWeightModels, taskModelSources.slice(1), taxonomySources, svg)).toThrow(/Missing model source/);
    const badSources = taskModelSources.map((source) => source.kind === "weights" ? { ...source, revision: "0".repeat(40) } : source);
    expect(() => validateTaskModels(taxonomyTasks, openWeightModels, badSources, taxonomySources, svg)).toThrow(/revision/);
    const duplicate = { ...taxonomyTasks[0], recommendations: [...taxonomyTasks[0].recommendations, taxonomyTasks[0].recommendations[0]] };
    expect(() => validateTaskModels([duplicate, ...taxonomyTasks.slice(1)], openWeightModels, taskModelSources, taxonomySources, svg)).toThrow(/Duplicate recommendation/);
    expect(() => validateTaskModels(taxonomyTasks.slice(1), openWeightModels, taskModelSources, taxonomySources, svg)).toThrow(/cover the SVG/);
  });

  it("turns all card links into keyboard-accessible task URLs without changing the original download", () => {
    for (const locale of ["en", "tr"] as const) {
      const linked = new DOMParser().parseFromString(linkTaskCards(svg, taxonomyTasks, locale, "text-classification"), "image/svg+xml");
      expect(linked.querySelector("parsererror")).toBeNull();
      expect(linked.querySelectorAll("a[data-task-id]")).toHaveLength(85);
      expect(linked.querySelectorAll('a[aria-current="true"]')).toHaveLength(1);
      for (const task of taxonomyTasks) {
        const link = linked.querySelector(`a[data-task-id="${task.id}"]`)!;
        expect(link.getAttribute("href")).toBe(taskModelHref(task.id, locale));
        expect(link.hasAttribute("target")).toBe(false);
      }
    }
    expect(svg).not.toContain("data-task-id");
  });

  it("distinguishes pinned parameter artifacts from publisher-hosted checkpoints and release bundles", () => {
    const validate = (sources: TaskModelSource[]) => validateTaskModels(taxonomyTasks, openWeightModels, sources, taxonomySources, svg);
    const changed = (id: string, patch: Partial<TaskModelSource>) => taskModelSources.map((source) => source.id === id ? { ...source, ...patch } : source);
    const git = taskModelSources.find((source) => source.id === "ow-anyburl-rules-weights")!;
    expect(git.artifact?.type).toBe("git");
    expect(() => validate(changed(git.id, { url: git.url.replace(git.revision!, "main") }))).toThrow(/revision/);
    const glow = taskModelSources.find((source) => source.id === "ow-glow-weights")!;
    expect(glow.artifact?.type).toBe("publisher-file");
    expect(glow.revision).toBeUndefined();
    expect(() => validate(changed(glow.id, { revision: "a".repeat(40) }))).toThrow(/fabricated revision/);
    expect(() => validate(changed(glow.id, { url: "https://example.com/different.pb" }))).toThrow(/filename/);
    expect(() => validate(taskModelSources.filter((source) => source.id !== "ow-glow-download"))).toThrow(/release evidence/);
    const release = taskModelSources.find((source) => source.id === "ow-knnvc-weights")!;
    expect(release.artifact?.type).toBe("release");
    expect(() => validate(changed(release.id, { url: "https://github.com/bshall/knn-vc/releases/latest" }))).toThrow(/release artifact/);
    expect(() => validate(changed("ow-knnvc", { artifact: release.artifact }))).toThrow(/Only weight sources/);
  });
});
