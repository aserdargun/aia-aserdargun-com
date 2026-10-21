"use client";

import type { OpenWeightModel, TaxonomyTask, TaxonomySource, TaskModelSource } from "@/data/schema";
import { taskModelLabels, type ModelLocale } from "@/lib/labels";
import { ModelArtifactDetails } from "@/components/taxonomy/model-artifact-details";

export function TaskModelPanel({ task, models, sources, definitions, locale, onClose }: {
  task: TaxonomyTask; models: OpenWeightModel[]; sources: TaskModelSource[];
  definitions: TaxonomySource[]; locale: ModelLocale; onClose(): void;
}) {
  const labels = taskModelLabels[locale];
  const definition = definitions.find((source) => source.id === task.definitionSourceId)!;
  const bySource = new Map(sources.map((source) => [source.id, source]));
  return (
    <aside id="task-model-panel" className="task-model-panel" tabIndex={-1} aria-labelledby="task-model-title"
      onKeyDown={(event) => { if (event.key === "Escape") { event.stopPropagation(); onClose(); } }}>
      <header className="task-model-panel__heading">
        <div><p>{labels.panel}</p><h2 id="task-model-title" lang="en">{task.name}</h2></div>
        <button type="button" onClick={onClose} aria-label={labels.close}>×</button>
      </header>
      <p className="task-model-definition" lang="en">{task.definition}</p>
      <a className="task-model-definition-link" href={definition.url} target="_blank" rel="noreferrer">{labels.definition} ↗</a>
      <p className="task-model-note">{task.note[locale]}</p>
      <p className="task-model-count" role="status">{task.recommendations.length} {labels.count}</p>
      {task.recommendations.length === 0 ? <h3 className="task-model-empty">{labels.empty}</h3> : null}
      {task.recommendations.map((entry) => {
        const model = models.find((candidate) => candidate.id === entry.modelId)!;
        const card = bySource.get(model.cardSourceId)!;
        const weights = bySource.get(model.weightsSourceId)!;
        const license = bySource.get(model.licenseSourceId)!;
        return (
          <article className="task-model-card" key={model.id} aria-labelledby={`model-${model.id}`}>
            <div className="task-model-badges"><span>{labels[model.role]}</span><span data-evidence={entry.evidence}>{labels[entry.evidence]}</span></div>
            <h3 id={`model-${model.id}`}><a href={card.url} target="_blank" rel="noreferrer" lang="en">{model.name} ↗</a></h3>
            <h4>{labels.why}</h4><p>{entry.rationale[locale]}</p>
            <h4>{labels.context}</h4><p>{model.context[locale]}</p>
            <dl>
              <div><dt>{labels.license}</dt><dd><a href={license.url} target="_blank" rel="noreferrer">{model.license} ↗</a></dd></div>
              <div><dt>{labels.access}</dt><dd>{labels[model.access]}</dd></div>
              <div><dt>{labels.reviewed}</dt><dd><time dateTime={card.observedAt}>{card.observedAt}</time></dd></div>
            </dl>
            <a className="task-model-weights" href={weights.url} target="_blank" rel="noreferrer">{model.parameterKind === "statistical" ? labels.parameterFiles : model.parameterKind === "rules" ? labels.ruleFiles : labels.weights} ↗</a>
            <ModelArtifactDetails model={model} weights={weights} sources={sources} locale={locale} />
            <details className="task-model-evidence" open>
              <summary>{labels.sources} ({entry.sourceIds.length})</summary>
              <ul>{entry.sourceIds.map((id) => {
                const source = bySource.get(id)!;
                return <li key={id}><a href={source.url} target="_blank" rel="noreferrer" lang="en">{source.title} ↗</a><small>{source.publisher} · {source.observedAt}</small></li>;
              })}</ul>
            </details>
          </article>
        );
      })}
      <p className="task-model-note">{labels.notRun}</p>
    </aside>
  );
}
