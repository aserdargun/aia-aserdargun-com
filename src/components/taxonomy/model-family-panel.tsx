"use client";

import Link from "next/link";
import { useState } from "react";
import type { ModelFamily, OpenWeightModel, TaxonomyTask, TaxonomySource, TaskModelSource } from "@/data/schema";
import { modelFamilyLabels, taskModelLabels, type ModelLocale } from "@/lib/labels";
import { tasksForModel } from "@/lib/model-families";
import { taskModelHref } from "@/lib/task-models";
import { ModelArtifactDetails } from "@/components/taxonomy/model-artifact-details";
import { HostedModelReferences } from "@/components/taxonomy/hosted-model-references";
import { hostedModels } from "@/data/hosted-models";
import { filterHostedReferences } from "@/lib/hosted-models";

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
  }).filter(({ model, supportedTasks }) => !normalized || [model.name, ...supportedTasks.flatMap(({ task }) => [task.name, task.localizedName?.[locale] ?? ""])]
    .some((text) => text.toLocaleLowerCase(locale).includes(normalized)));
  const hosted = filterHostedReferences(family.hostedReferences ?? [], hostedModels, tasks, query, locale);

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
        <div><p>{labels.panel} · {labels.axes[family.axis]}</p><h2 id="model-family-title" lang={family.localizedName ? locale : "en"}>{family.localizedName?.[locale] ?? family.name}</h2></div>
        <button type="button" onClick={onClose} aria-label={labels.close}>×</button>
      </header>
      <p className="task-model-definition" lang={family.localizedDefinition ? locale : "en"}>{family.localizedDefinition?.[locale] ?? family.definition}</p>
      <a className="task-model-definition-link" href={definition.url} target="_blank" rel="noreferrer">{labels.definition} ↗</a>
      <p className="task-model-note">{family.note[locale]}</p>
      {family.review ? <section className="model-family-review" aria-labelledby="family-review-title">
        <h3 id="family-review-title">{labels.research}</h3>
        <small>{common.reviewed} · <time dateTime={family.review.observedAt}>{family.review.observedAt}</time></small>
        <p>{family.review.summary[locale]}</p>
        <details className="task-model-evidence"><summary>{labels.researchSources} ({family.review.sourceIds.length})</summary>{sourceLinks(family.review.sourceIds)}</details>
      </section> : null}
      {family.models.length > 0 || family.hostedReferences?.length ? <>
        <p className="task-model-note">{labels.taskScope}</p>
        <label className="model-family-search">{labels.search}<input type="search" value={query} placeholder={labels.searchPlaceholder} onChange={(event) => setQuery(event.target.value)} /></label>
      </> : null}
      <p className="task-model-count" role="status">{entries.length}/{family.models.length} {labels.count}</p>
      {family.models.length === 0 && !family.hostedReferences?.length ? <h3 className="task-model-empty">{labels.empty}</h3> : entries.length === 0 && hosted.length === 0 ? <p>{labels.noMatches}</p> : null}
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
          <a className="task-model-weights" href={weights.url} target="_blank" rel="noreferrer">{model.parameterKind === "statistical" ? common.parameterFiles : model.parameterKind === "rules" ? common.ruleFiles : common.weights} ↗</a>
          <ModelArtifactDetails model={model} weights={weights} sources={sources} locale={locale} />
          <h4>{labels.tasks} ({supportedTasks.length})</h4>
          <ul className="model-family-tasks">{supportedTasks.map(({ task, evidence }) => <li key={task.id}>
            <Link href={taskModelHref(task.id, locale)} lang={task.localizedName ? locale : "en"}>{task.localizedName?.[locale] ?? task.name} →</Link>
            <div className="task-model-badges"><span data-evidence={evidence.evidence}>{common[evidence.evidence]}</span></div>
            <details className="task-model-evidence">
              <summary>{labels.taskEvidence}</summary>
              <p>{evidence.rationale[locale]}</p>
              {sourceLinks(evidence.sourceIds)}
            </details>
          </li>)}</ul>
        </article>;
      })}
      <HostedModelReferences references={hosted} sources={sources} tasks={tasks} locale={locale} />
      <p className="task-model-note">{common.notRun}</p>
    </aside>
  );
}
