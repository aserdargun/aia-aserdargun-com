import {
  benchmarkCandidateSchema, benchmarkSourceSchema, taskBenchmarkSchema, taskBenchmarkReviewSchema,
  type BenchmarkCandidate, type BenchmarkSource, type OpenWeightModel, type TaxonomyTask,
  type TaskBenchmark, type TaskBenchmarkReview, type TaskModelSource,
} from "@/data/schema";

export function benchmarkLeaders(benchmark: TaskBenchmark) {
  const best = (benchmark.direction === "higher" ? Math.max : Math.min)(...benchmark.results.map((row) => row.score));
  return benchmark.results.filter((row) => row.score === best).map((row) => row.candidateId);
}

export function benchmarkStatus(taskId: string, benchmarks: TaskBenchmark[]) {
  const matching = benchmarks.filter((entry) => entry.taskIds.includes(taskId));
  return matching.some((entry) => entry.results.length > 1) ? "comparison" : matching.length ? "single" : "gap";
}

export function validateTaskBenchmarks(
  reviews: TaskBenchmarkReview[], benchmarks: TaskBenchmark[], candidates: BenchmarkCandidate[],
  sources: BenchmarkSource[], tasks: TaxonomyTask[], models: OpenWeightModel[], modelSources: TaskModelSource[],
) {
  const fail = (message: string): never => { throw new Error(`Task benchmarks: ${message}`); };
  const unique = (values: string[], name: string) => {
    if (new Set(values).size !== values.length) fail(`duplicate ${name}`);
  };
  sources.forEach((source) => benchmarkSourceSchema.parse(source));
  candidates.forEach((candidate) => benchmarkCandidateSchema.parse(candidate));
  benchmarks.forEach((benchmark) => taskBenchmarkSchema.parse(benchmark));
  reviews.forEach((review) => taskBenchmarkReviewSchema.parse(review));
  unique([...sources, ...modelSources].map((source) => source.id), "source");
  unique([...models, ...candidates].map((model) => model.id), "candidate");
  unique(benchmarks.map((benchmark) => benchmark.id), "benchmark");
  unique(reviews.map((review) => review.taskId), "task review");
  const bySource = new Map([...sources, ...modelSources].map((source) => [source.id, source]));
  const byModel = new Map([...models, ...candidates].map((model) => [model.id, model]));
  const taskIds = new Set(tasks.map((task) => task.id));
  const checkSources = (ids: string[], owner: string) => {
    unique(ids, `${owner} citation`);
    ids.forEach((id) => { if (!bySource.has(id)) fail(`${owner}: unknown source ${id}`); });
  };
  candidates.forEach((candidate) => {
    checkSources([...new Set([candidate.cardSourceId, candidate.weightsSourceId, candidate.licenseSourceId])], candidate.id);
    const weights = bySource.get(candidate.weightsSourceId)!;
    if (weights.kind !== "weights") fail(`${candidate.id}: weight evidence required`);
    const gitPinned = weights.revision && weights.url.includes(weights.revision);
    const weightUrl = new URL(weights.url);
    const releasePinned = "releaseId" in weights && weights.releaseId
      && weightUrl.hostname === "hdl.handle.net"
      && decodeURIComponent(weightUrl.pathname) === `/${weights.releaseId}`;
    if (!gitPinned && !releasePinned) fail(`${candidate.id}: pin the weight release`);
  });
  benchmarks.forEach((benchmark) => {
    unique(benchmark.taskIds, `${benchmark.id} task`);
    benchmark.taskIds.forEach((id) => { if (!taskIds.has(id)) fail(`${benchmark.id}: unknown task ${id}`); });
    unique(benchmark.results.map((row) => row.candidateId), `${benchmark.id} result`);
    checkSources([benchmark.sourceId], benchmark.id);
    const source = bySource.get(benchmark.sourceId)!;
    if (benchmark.resultDate && benchmark.resultDate > source.observedAt) fail(`${benchmark.id}: result postdates observation`);
    if (!("kind" in source) || !["benchmark", "paper", "model-card", "documentation"].includes(source.kind)) fail(`${benchmark.id}: result needs a research source`);
    benchmark.results.forEach((row) => {
      if (!byModel.has(row.candidateId)) fail(`${benchmark.id}: unknown candidate ${row.candidateId}`);
      if (benchmark.unit === "%" && (row.score < 0 || row.score > 100)) fail(`${benchmark.id}: percentage out of range`);
    });
  });
  reviews.forEach((review) => {
    if (!taskIds.has(review.taskId)) fail(`unknown reviewed task ${review.taskId}`);
    unique(review.candidateIds, `${review.taskId} reviewed candidate`);
    review.candidateIds.forEach((id) => { if (!byModel.has(id)) fail(`${review.taskId}: unknown candidate ${id}`); });
    checkSources(review.sourceIds, review.taskId);
    review.sourceIds.forEach((id) => { if (bySource.get(id)!.observedAt > review.checkedAt) fail(`${review.taskId}: review predates evidence`); });
    benchmarks.filter((entry) => entry.taskIds.includes(review.taskId)).forEach((benchmark) => {
      if (!review.sourceIds.includes(benchmark.sourceId)) fail(`${review.taskId}: missing benchmark citation`);
      benchmark.results.forEach((row) => { if (!review.candidateIds.includes(row.candidateId)) fail(`${review.taskId}: unreviewed comparison participant`); });
    });
  });
  if (reviews.length !== tasks.length || tasks.some((task) => !reviews.some((review) => review.taskId === task.id))) fail("every task needs a review");
}
