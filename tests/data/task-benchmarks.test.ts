import { benchmarkCandidates, taskBenchmarks, taskBenchmarkReviews } from "@/data/task-benchmarks";
import { benchmarkSources, taskModelSources } from "@/data/sources";
import { openWeightModels, taxonomyTasks } from "@/data/task-models";
import { benchmarkLeaders, benchmarkStatus, validateTaskBenchmarks } from "@/lib/task-benchmarks";

const fixture = () => structuredClone({ reviews: taskBenchmarkReviews, benchmarks: taskBenchmarks, candidates: benchmarkCandidates, sources: benchmarkSources });
const validate = (data = fixture()) => validateTaskBenchmarks(data.reviews, data.benchmarks, data.candidates, data.sources, taxonomyTasks, openWeightModels, taskModelSources);

describe("published task benchmark evidence", () => {
  it("covers every task with bilingual research, exact releases and resolvable primary citations", () => {
    expect(() => validate()).not.toThrow();
    expect(taskBenchmarkReviews).toHaveLength(taxonomyTasks.length);
    // A review never predates the evidence it cites and never runs ahead of today.
    const bySource = new Map([...benchmarkSources, ...taskModelSources].map((source) => [source.id, source]));
    const today = new Date().toISOString().slice(0, 10);
    expect(taskBenchmarkReviews.every((review) => review.sourceIds.every((id) => bySource.get(id)!.observedAt <= review.checkedAt))).toBe(true);
    expect(taskBenchmarkReviews.every((review) => review.checkedAt <= today)).toBe(true);
    expect(new Set(taskBenchmarkReviews.map((review) => review.taskId)).size).toBe(87);
    expect(taskBenchmarks.some((benchmark) => benchmark.resultDate?.startsWith("2026-10"))).toBe(true);
    expect(taskBenchmarks.some((benchmark) => benchmark.resultDate?.startsWith("2022"))).toBe(true);
    expect(taskBenchmarks.some((benchmark) => benchmark.resultDate === null)).toBe(true);
    expect(taskBenchmarkReviews.filter((review) => benchmarkStatus(review.taskId, taskBenchmarks) === "gap").map((review) => review.taskId).sort()).toEqual(["action-selection", "classical-planning", "dimensionality-reduction", "rubric-based-scoring"]);
  });

  it("uses each metric’s direction, preserves ties and never converts missing evidence to a zero", () => {
    const error = taskBenchmarks.find((entry) => entry.id === "timestral-gift")!;
    expect(benchmarkLeaders(error)).toEqual(["timestral"]);
    const reranker = taskBenchmarks.find((entry) => entry.id === "rerank-mteb")!;
    expect(benchmarkLeaders(reranker)).toEqual(["rerank4"]);
    expect(benchmarkLeaders({ ...reranker, results: reranker.results.map((row) => ({ ...row, score: 69 })) })).toEqual(["reranker", "rerank4"]);
    expect(benchmarkStatus("classical-planning", taskBenchmarks)).toBe("gap");
    expect(benchmarkStatus("formal-theorem-proving", taskBenchmarks)).toBe("single");
    expect(benchmarkStatus("time-series-forecasting", taskBenchmarks)).toBe("comparison");
  });

  it("rejects uncovered tasks and invented or unreviewed comparison participants", () => {
    const missing = fixture(); missing.reviews.pop();
    expect(() => validate(missing)).toThrow(/every task/);
    const unknown = fixture(); unknown.benchmarks[0].results[0].candidateId = "nonexistent-model";
    expect(() => validate(unknown)).toThrow(/unknown candidate/);
    const unreviewed = fixture(); unreviewed.reviews[0].candidateIds = ["gliner2"];
    expect(() => validate(unreviewed)).toThrow(/unreviewed comparison participant/);
    const duplicated = fixture(); duplicated.benchmarks[0].results.push(duplicated.benchmarks[0].results[0]);
    expect(() => validate(duplicated)).toThrow(/duplicate/);
  });

  it("rejects missing, future, wrong-kind and unpinned evidence", () => {
    const missing = fixture(); missing.benchmarks[0].sourceId = "missing-source";
    expect(() => validate(missing)).toThrow(/unknown source/);
    const wrong = fixture(); wrong.benchmarks[0].sourceId = wrong.candidates[0].weightsSourceId;
    expect(() => validate(wrong)).toThrow(/research source/);
    const unpinned = fixture();
    const weights = unpinned.sources.find((source) => source.id === unpinned.candidates[0].weightsSourceId)!;
    weights.url = weights.url.replace(weights.revision!, "main");
    expect(() => validate(unpinned)).toThrow(/pin the weight release/);
    const future = fixture(); future.benchmarks[0].resultDate = "2027-01";
    expect(() => validate(future)).toThrow(/postdates observation/);
    const invalidDate = fixture(); invalidDate.benchmarks[0].resultDate = "2026-02-30";
    expect(() => validate(invalidDate)).toThrow(/Invalid publication date/);
    const uncited = fixture(); uncited.reviews[0].sourceIds = ["ow-gliner2"];
    expect(() => validate(uncited)).toThrow(/missing benchmark citation/);
  });

  it("requires a persistent publisher release identifier to remain bound to its source URL", () => {
    const data = fixture();
    const release = data.sources.find((source) => source.releaseId)!;
    expect(release.releaseId).toBe("11234/1-6046");
    release.url = "https://hdl.handle.net/11234/1-unrelated";
    expect(() => validate(data)).toThrow(/pin the weight release/);
    release.url = `https://example.com/${release.releaseId}`;
    expect(() => validate(data)).toThrow(/pin the weight release/);
  });

  it("requires finite values, bilingual limits and valid percentage ranges", () => {
    const infinite = fixture(); infinite.benchmarks[0].results[0].score = Number.POSITIVE_INFINITY;
    expect(() => validate(infinite)).toThrow();
    const range = fixture(); range.benchmarks[0].results[0].score = 101;
    expect(() => validate(range)).toThrow(/percentage/);
    const translation = fixture(); translation.reviews[0].limitation.tr = "";
    expect(() => validate(translation)).toThrow();
  });

  it("keeps proxy metrics and incompatible diarization protocols in separate tables", () => {
    expect(taskBenchmarks.find((entry) => entry.id === "glm-toolathlon")?.scope).toBe("proxy");
    expect(taskBenchmarks.find((entry) => entry.id === "qwen-ocr")?.scope).toBe("proxy");
    expect(taskBenchmarks.filter((entry) => entry.taskIds.includes("document-question-answering")).map((entry) => entry.metric)).toEqual(["ANLS"]);
    const diarization = taskBenchmarks.filter((entry) => entry.taskIds.includes("speaker-diarization"));
    expect(diarization).toHaveLength(2);
    expect(diarization[0].protocol.en).toContain("no forgiveness collar");
    expect(diarization[1].protocol.en).toContain("0.25-second collar");
    expect(taskBenchmarkReviews.find((entry) => entry.taskId === "query-expansion")?.candidateIds).not.toContain("mqr");
    expect(taskBenchmarks.find((entry) => entry.id === "autocpd-hasc-eval")?.scope).toBe("proxy");
    expect(taskBenchmarks.find((entry) => entry.id === "hloc-aachen-night")?.scope).toBe("proxy");
    expect(taskBenchmarks.filter((entry) => entry.taskIds.includes("code-translation")).every((entry) => entry.results.length === 1)).toBe(true);
  });
});
