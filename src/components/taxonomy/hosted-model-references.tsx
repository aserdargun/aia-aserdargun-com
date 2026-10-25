"use client";

import Link from "next/link";
import { hostedModels } from "@/data/hosted-models";
import type { HostedReference, TaxonomyTask, TaskModelSource } from "@/data/schema";
import { hostedModelLabels, type ModelLocale } from "@/lib/labels";
import { taskModelHref } from "@/lib/task-models";

export function HostedModelReferences({ references = [], sources, locale, tasks = [] }: {
  references?: HostedReference[]; sources: TaskModelSource[]; locale: ModelLocale;
  tasks?: TaxonomyTask[];
}) {
  const labels = hostedModelLabels[locale];
  const bySource = new Map(sources.map((source) => [source.id, source]));
  const entries = references.flatMap((entry) => {
    const model = hostedModels.find((model) => model.id === entry.modelId);
    if (!model) return [];
    const supported = tasks.filter((task) => task.hostedReferences?.some((reference) => reference.modelId === model.id));
    return [{ entry, model, supported }];
  });
  if (!references.length) return null;
  return <section className="hosted-model-references" aria-label={labels.title}>
    <h3>{labels.title} ({entries.length})</h3>
    <p className="task-model-note">{labels.scope}</p>
    {entries.map(({ entry, model, supported }) => <article className="task-model-card" data-hosted-model={model.id} key={model.id}>
      <div className="task-model-badges"><span>{labels.access}</span><span>{labels.documented}</span></div>
      <h3><a href={bySource.get(model.cardSourceId)!.url} target="_blank" rel="noreferrer">{model.name} ↗</a></h3>
      <dl>
        <div><dt>{labels.provider}</dt><dd>{model.provider}</dd></div>
        <div><dt>{labels.version}</dt><dd><a href={bySource.get(model.versionSourceId)!.url} target="_blank" rel="noreferrer">{model.version} ↗</a></dd></div>
      </dl>
      <p>{entry.rationale[locale]}</p>
      <p>{model.context[locale]}</p>
      <details className="task-model-evidence" open>
        <summary>{labels.sources} ({entry.sourceIds.length})</summary>
        <ul>{entry.sourceIds.map((id) => {
          const source = bySource.get(id)!;
          return <li key={id}><a href={source.url} target="_blank" rel="noreferrer" lang="en">{source.title} ↗</a><small>{source.publisher} · {source.observedAt}</small></li>;
        })}</ul>
      </details>
      {supported.length ? <><h4>{labels.tasks}</h4><ul>{supported.map((task) => <li key={task.id}>
        <Link href={taskModelHref(task.id, locale)}>{task.localizedName?.[locale] ?? task.name} →</Link>
      </li>)}</ul></> : null}
    </article>)}
  </section>;
}
