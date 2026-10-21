import { readFileSync } from "node:fs";
import { openWeightModels, taxonomyTasks } from "@/data/task-models";
import { taskModelSources, taxonomySources } from "@/data/sources";
import { linkTaskCards, taskModelHref, validateTaskModels } from "@/lib/task-models";
import type { TaxonomyTask, TaskModelSource } from "@/data/schema";

const svg = readFileSync("public/assets/taxonomy/ai-task-taxonomy.svg", "utf8");

describe("task-level open-weight evidence", () => {
  it("records bounded research for all twelve former gaps and rejects unsupported outcomes", () => {
    const reviewed = (taxonomyTasks as TaxonomyTask[]).filter((task) => task.review);
    expect(reviewed.map((task) => task.id).sort()).toEqual([
      "top-k-recommendation", "rating-prediction", "clustering", "dimensionality-reduction",
      "density-estimation", "change-point-detection", "node-classification", "graph-classification",
      "constraint-satisfaction", "classical-planning", "robot-localization", "robot-motion-planning",
    ].sort());
    expect(reviewed.filter((task) => task.review!.outcome === "pipeline")).toHaveLength(4);
    expect(taxonomyTasks.every((task) => task.recommendations.length > 0)).toBe(true);
    for (const task of reviewed) {
      expect(task.review!.summary.en).toBeTruthy();
      expect(task.review!.summary.tr).toBeTruthy();
      expect(task.review!.sourceIds.some((id) => task.recommendations.some((entry) => entry.sourceIds.includes(id)))).toBe(true);
    }
    const task = reviewed[0];
    const replace = (value: TaxonomyTask) => taxonomyTasks.map((entry) => entry.id === task.id ? value : entry);
    const validate = (tasks: TaxonomyTask[]) => validateTaskModels(tasks, openWeightModels, taskModelSources, taxonomySources, svg);
    expect(() => validate(replace({ ...task, review: { ...task.review!, sourceIds: ["ow-unknown"] } }))).toThrow(/task review evidence/);
    expect(() => validate(replace({ ...task, review: { ...task.review!, sourceIds: [task.review!.sourceIds[0], task.review!.sourceIds[0]] } }))).toThrow(/Duplicate review source/);
    expect(() => validate(replace({ ...task, review: { ...task.review!, outcome: "no-verified-model" } }))).toThrow(/contradicts/);
    expect(() => validate(replace({ ...task, recommendations: [] }))).toThrow(/contradicts/);
    expect(() => validate(replace({ ...task, recommendations: [], review: { ...task.review!, outcome: "no-verified-model" } }))).not.toThrow();
    expect(openWeightModels.find((model) => model.id === "goose-blocksworld")?.parameterKind).toBe("statistical");
    expect(openWeightModels.find((model) => model.id === "hrm-sudoku")?.licenseScope).toBe("repository");
  });

  it("requires matching Drive IDs and well-formed publisher checksums without inventing revisions", () => {
    const validate = (sources: TaskModelSource[]) => validateTaskModels(taxonomyTasks, openWeightModels, sources, taxonomySources, svg);
    const changed = (id: string, patch: Partial<TaskModelSource>) => taskModelSources.map((source) => source.id === id ? { ...source, ...patch } : source);
    const scan = taskModelSources.find((source) => source.id === "ow-scan-cifar10-weights")!;
    expect(scan.artifact?.type).toBe("google-drive");
    expect(() => validate(changed(scan.id, { url: scan.url.replace("1v6b6jJY5M4-duSqWpGFmdf9e9T3dPrx0", "different-file") }))).toThrow(/file ID/);
    expect(() => validate(changed(scan.id, { revision: "a".repeat(40) }))).toThrow(/fabricated revision/);
    const mpi = taskModelSources.find((source) => source.id === "ow-mpinets-hybrid-weights")!;
    const artifact = mpi.artifact;
    if (artifact?.type !== "publisher-file") throw new Error("Expected the publisher archive fixture");
    expect(artifact.etag).toBeUndefined();
    expect(() => validate(changed(mpi.id, { artifact: { ...artifact, publisherChecksum: undefined } }))).toThrow(/ETag or publisher checksum/);
    expect(() => validate(changed(mpi.id, { artifact: { ...artifact, publisherChecksum: { algorithm: "md5", value: "invalid" } } }))).toThrow();
    expect(() => validate(taskModelSources.filter((source) => source.id !== artifact.evidenceSourceId))).toThrow(/Missing model source|release evidence/);
  });

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
