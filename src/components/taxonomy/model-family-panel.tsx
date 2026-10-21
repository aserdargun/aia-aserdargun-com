"use client";

import Link from "next/link";
import { useState } from "react";
import type { ModelFamily, OpenWeightModel, TaxonomyTask, TaxonomySource, TaskModelSource } from "@/data/schema";
import { modelFamilyLabels, taskModelLabels, type ModelLocale } from "@/lib/labels";
import { tasksForModel } from "@/lib/model-families";
import { taskModelHref } from "@/lib/task-models";

export function ModelFamilyPanel({ family, models, tasks, sources, definitions, locale, onClose }: {
  family: ModelFamily; models: OpenWeightModel[]; tasks: TaxonomyTask[]; sources: TaskModelSource[];
  definitions: TaxonomySource[]; locale: ModelLocale; onClose(): void;
}) {
  const labels = modelFamilyLabels[locale];
  const common = taskModelLabels[locale];
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLocaleLowerCase(locale);
  const definition = definitions.find((source) => source.id === family.definitionSourceId)!;
  const bySource = new Map(sources.map((source) => [source.id, source]));
  const entries = family.models.map((entry) => {
    const model = models.find((model) => model.id === entry.modelId)!;
    return { entry, model, supportedTasks: tasksForModel(model.id, tasks) };
  }).filter(({ model, supportedTasks }) => !normalized || [model.name, ...supportedTasks.map(({ task }) => task.name)]
    .some((text) => text.toLocaleLowerCase(locale).includes(normalized)));

  function sourceLinks(ids: string[]) {
    return <ul>{ids.map((id) => {
      const source = bySource.get(id)!;
      return <li key={id}><a href={source.url} target="_blank" rel="noreferrer" lang="en">{source.title} ↗</a><small>{source.publisher} · {source.observedAt}</small></li>;
    })}</ul>;
  }

  return (
    <aside id="model-family-panel" className="task-model-panel" tabIndex={-1} aria-labelledby="model-family-title"
      onKeyDown={(event) => { if (event.key === "Escape") { event.stopPropagation(); onClose(); } }}>
      <header className="task-model-panel__heading">
        <div><p>{labels.panel} · {labels.axes[family.axis]}</p><h2 id="model-family-title" lang="en">{family.name}</h2></div>
        <button type="button" onClick={onClose} aria-label={labels.close}>×</button>
      </header>
      <p className="task-model-definition" lang="en">{family.definition}</p>
      <a className="task-model-definition-link" href={definition.url} target="_blank" rel="noreferrer">{labels.definition} ↗</a>
      <p className="task-model-note">{family.note[locale]}</p>
      {family.models.length > 0 ? <>
        <p className="task-model-note">{labels.taskScope}</p>
        <label className="model-family-search">{labels.search}<input type="search" value={query} placeholder={labels.searchPlaceholder} onChange={(event) => setQuery(event.target.value)} /></label>
      </> : null}
      <p className="task-model-count" role="status">{entries.length}/{family.models.length} {labels.count}</p>
      {family.models.length === 0 ? <h3 className="task-model-empty">{labels.empty}</h3> : entries.length === 0 ? <p>{labels.noMatches}</p> : null}
      {entries.map(({ entry, model, supportedTasks }) => {
        const card = bySource.get(model.cardSourceId)!;
        const weights = bySource.get(model.weightsSourceId)!;
        const license = bySource.get(model.licenseSourceId)!;
        return <article className="task-model-card model-family-card" key={model.id} aria-labelledby={`family-model-${model.id}`}>
          <div className="task-model-badges"><span>{common[model.role]}</span><span data-relation={entry.relation}>{labels[entry.relation]}</span></div>
          <h3 id={`family-model-${model.id}`}><a href={card.url} target="_blank" rel="noreferrer" lang="en">{model.name} ↗</a></h3>
          <h4>{labels.why}</h4><p>{entry.rationale[locale]}</p>
          <details className="task-model-evidence" open><summary>{labels.sources} ({entry.sourceIds.length})</summary>{sourceLinks(entry.sourceIds)}</details>
          <h4>{common.context}</h4><p>{model.context[locale]}</p>
          <dl>
            <div><dt>{common.license}</dt><dd><a href={license.url} target="_blank" rel="noreferrer">{model.license} ↗</a></dd></div>
            <div><dt>{common.access}</dt><dd>{common[model.access]}</dd></div>
            <div><dt>{common.reviewed}</dt><dd><time dateTime={card.observedAt}>{card.observedAt}</time></dd></div>
          </dl>
          <a className="task-model-weights" href={weights.url} target="_blank" rel="noreferrer">{common.weights} ↗</a>
          <h4>{labels.tasks} ({supportedTasks.length})</h4>
          <ul className="model-family-tasks">{supportedTasks.map(({ task, evidence }) => <li key={task.id}>
            <Link href={taskModelHref(task.id, locale)} lang="en">{task.name} →</Link>
            <div className="task-model-badges"><span data-evidence={evidence.evidence}>{common[evidence.evidence]}</span></div>
            <details className="task-model-evidence">
              <summary>{labels.taskEvidence}</summary>
              <p>{evidence.rationale[locale]}</p>
              {sourceLinks(evidence.sourceIds)}
            </details>
          </li>)}</ul>
        </article>;
      })}
      <p className="task-model-note">{common.notRun}</p>
    </aside>
  );
}
