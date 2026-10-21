import type { OpenWeightModel, TaskModelSource } from "@/data/schema";
import { benchmarkCandidates, taskBenchmarks, taskBenchmarkReviews } from "@/data/task-benchmarks";
import { benchmarkSources } from "@/data/sources";
import { benchmarkLeaders, benchmarkStatus } from "@/lib/task-benchmarks";
import { taskBenchmarkLabels, type ModelLocale } from "@/lib/labels";

export function TaskBenchmarkPanel({ taskId, models, sources, locale }: {
  taskId: string; models: OpenWeightModel[]; sources: TaskModelSource[]; locale: ModelLocale;
}) {
  const labels = taskBenchmarkLabels[locale];
  const review = taskBenchmarkReviews.find((entry) => entry.taskId === taskId)!;
  const matching = taskBenchmarks.filter((entry) => entry.taskIds.includes(taskId));
  const status = benchmarkStatus(taskId, taskBenchmarks);
  const byModel = new Map([...models, ...benchmarkCandidates].map((model) => [model.id, model]));
  const bySource = new Map([...sources, ...benchmarkSources].map((source) => [source.id, source]));
  const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 6 });

  return <section className="task-benchmarks" aria-labelledby="task-benchmark-title" data-benchmark-status={status}>
    <header>
      <h3 id="task-benchmark-title">{labels.title}</h3>
      <p className="task-benchmarks__date">{labels.reviewed} · <time dateTime={review.checkedAt}>{review.checkedAt}</time></p>
      <span className="task-benchmarks__status">{labels[status]}</span>
    </header>
    <h4>{labels.why}</h4><p>{review.summary[locale]}</p>
    <h4>{labels.limits}</h4><p>{review.limitation[locale]}</p>
    {matching.map((benchmark, index) => {
      const source = bySource.get(benchmark.sourceId)!;
      const leaders = benchmarkLeaders(benchmark);
      const rows = [...benchmark.results].sort((a, b) => benchmark.direction === "higher" ? b.score - a.score : a.score - b.score);
      return <details className="benchmark-result" key={benchmark.id} open={index === 0} data-benchmark-id={benchmark.id}>
        <summary><span lang="en">{benchmark.title}</span><small>{benchmark.metric} · {benchmark.direction === "higher" ? "↑" : "↓"}</small></summary>
        <div className="benchmark-result__body">
          <p className="benchmark-result__badges"><span>{labels[benchmark.provenance]}</span><span>{labels[benchmark.scope]}</span>
            {benchmark.resultDate && benchmark.resultDate.slice(0, 4) < review.checkedAt.slice(0, 4) ? <span>{labels.historical}</span> : null}
          </p>
          <p className="task-benchmarks__date">{benchmark.resultDate ? <>{labels.published} · <time dateTime={benchmark.resultDate}>{benchmark.resultDate}</time></> : labels.undated}</p>
          <table>
            <caption><span lang="en">{benchmark.dataset}</span> · {benchmark.metric} · {labels[benchmark.direction]}</caption>
            <thead><tr><th scope="col">{labels.model}</th><th scope="col">{labels.score}</th></tr></thead>
            <tbody>{rows.map((row) => {
              const model = byModel.get(row.candidateId)!;
              const lead = rows.length > 1 && leaders.includes(model.id);
              return <tr key={model.id} data-leader={lead || undefined}>
                <th scope="row"><a href={bySource.get(model.cardSourceId)!.url} target="_blank" rel="noreferrer" lang="en">{model.name} ↗</a>
                  {row.configuration ? <small>{row.configuration[locale]}</small> : null}
                  {lead ? <small className="benchmark-leader">{leaders.length > 1 ? labels.tied : labels.leader}</small> : null}
                </th>
                <td>{number.format(row.score)}{benchmark.unit === "score" ? "" : ` ${benchmark.unit}`}</td>
              </tr>;
            })}</tbody>
          </table>
          <h5>{labels.protocol}</h5><p>{benchmark.protocol[locale]}</p>
          <p className="benchmark-result__limit">{benchmark.limitation[locale]}</p>
          <a href={source.url} target="_blank" rel="noreferrer">{labels.source}: <span lang="en">{source.publisher} · {benchmark.locator}</span> ↗</a>
        </div>
      </details>;
    })}
    <details className="benchmark-candidates" open={status === "gap"}>
      <summary>{labels.candidates} ({review.candidateIds.length})</summary>
      <ul>{review.candidateIds.map((id) => {
        const model = byModel.get(id)!;
        return <li key={id}>
          <a href={bySource.get(model.cardSourceId)!.url} target="_blank" rel="noreferrer" lang="en"><strong>{model.name}</strong> ↗</a>
          <div><a href={bySource.get(model.weightsSourceId)!.url} target="_blank" rel="noreferrer">{labels.weights} ↗</a>
            <a href={bySource.get(model.licenseSourceId)!.url} target="_blank" rel="noreferrer">{labels.license}: {model.license} ↗</a>
          </div>
          <small>{labels[model.access]}</small>
        </li>;
      })}</ul>
    </details>
    <details className="task-model-evidence benchmark-references"><summary>{labels.references} ({review.sourceIds.length})</summary>
      <ul>{review.sourceIds.map((id) => {
        const source = bySource.get(id)!;
        return <li key={id}><a href={source.url} target="_blank" rel="noreferrer" lang="en">{source.title} ↗</a><small>{source.publisher} · {source.observedAt}</small></li>;
      })}</ul>
    </details>
    <p className="task-benchmarks__method">{labels.notRun}</p>
  </section>;
}
