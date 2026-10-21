"use client";

import { useSearchParams } from "next/navigation";
import { modelTaskValues, type Model, type Source, type Vendor } from "@/data/schema";
import { downloadFile, toCsv, toExcelXml } from "@/lib/export";
import {
  modelBrowserLabels, modelLifecycleLabels, modelModalityLabels, modelTaskLabels,
  type ModelLocale,
} from "@/lib/labels";
import {
  defaultModelBrowserState, modelTasksExport, parseModelBrowserState,
  selectModelTasks, serializeModelBrowserState,
  type ModelBrowserState, type ModelCatalog,
} from "@/lib/model-tasks";

function ModelRecord({ model, vendor, sources, locale }: {
  model: Model; vendor: Vendor | undefined; sources: Source[]; locale: ModelLocale;
}) {
  const labels = modelBrowserLabels[locale];
  const modalities = modelModalityLabels[locale];
  return (
    <details className="model-record">
      <summary>
        <span className="model-record__identity">
          <strong>{model.name}</strong>
          <span>{vendor?.name}</span>
        </span>
        {model.lifecycle !== "current" ? (
          <span className="model-record__lifecycle">{modelLifecycleLabels[locale][model.lifecycle]}</span>
        ) : null}
        <span className="model-record__expand" aria-hidden="true">+</span>
      </summary>
      <div className="model-record__details">
        <dl>
          <div><dt>{labels.input}</dt><dd>{model.inputModalities.map((value) => modalities[value] ?? value).join(", ")}</dd></div>
          <div><dt>{labels.output}</dt><dd>{model.outputModalities.map((value) => modalities[value] ?? value).join(", ")}</dd></div>
          <div><dt>{labels.context}</dt><dd>{model.contextWindowTokens === undefined ? labels.notListed : `${new Intl.NumberFormat(locale).format(model.contextWindowTokens)} ${labels.tokens}`}</dd></div>
          <div><dt>{labels.status}</dt><dd>{modelLifecycleLabels[locale][model.lifecycle]}</dd></div>
          <div><dt>{labels.checked}</dt><dd><time dateTime={model.verifiedAt}>{model.verifiedAt}</time></dd></div>
        </dl>
        <p><strong>{labels.focus}: </strong>{model.taskIds.map((id) => modelTaskLabels[locale][id].name).join(" · ")}</p>
        <div className="model-record__sources">
          <strong>{labels.evidence}</strong>
          <ul>
            {sources.map((source) => (
              <li key={source.id}>
                <a href={source.url} target="_blank" rel="noreferrer" aria-label={`${labels.evidence} — ${model.name}: ${source.title}`}>
                  {source.title} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}

export function ModelTaskBrowser({ catalog }: { catalog: ModelCatalog }) {
  const params = useSearchParams();
  const state = parseModelBrowserState(params, catalog);
  const { models, groups, counts, totalCount } = selectModelTasks(catalog, state);
  const labels = modelBrowserLabels[state.locale];
  const tasks = modelTaskLabels[state.locale];
  const vendorById = new Map(catalog.vendors.map((vendor) => [vendor.id, vendor]));
  const sourceById = new Map(catalog.sources.map((source) => [source.id, source]));
  const hasFilters = Boolean(state.query || state.taskId || state.vendorId || state.includeHistorical);

  function updateState(update: Partial<ModelBrowserState>, replace = false) {
    // Read the latest URL so rapid input cannot overwrite another filter change.
    const current = parseModelBrowserState(new URLSearchParams(window.location.search), catalog);
    const query = serializeModelBrowserState({ ...current, ...update });
    const url = query ? `/models?${query}` : "/models";
    if (replace) window.history.replaceState(null, "", url);
    else window.history.pushState(null, "", url);
  }

  function reset() {
    updateState({ ...defaultModelBrowserState, locale: state.locale });
  }

  function exportModels(format: "csv" | "xls") {
    const table = modelTasksExport(catalog, state);
    downloadFile(`aia-models-by-task.${format}`, format === "csv" ? toCsv(table) : toExcelXml(table),
      format === "csv" ? "text/csv;charset=utf-8" : "application/vnd.ms-excel");
  }

  return (
    <div className="model-browser" lang={state.locale}>
      <header className="model-browser__intro">
        <div>
          <h1>{labels.title}</h1>
          <p>{labels.intro}</p>
        </div>
        <div className="model-language" role="group" aria-label="Language / Dil">
          {(["en", "tr"] as const).map((locale) => (
            <button key={locale} type="button" lang={locale} aria-pressed={state.locale === locale} onClick={() => updateState({ locale })}>
              {locale === "en" ? "English" : "Türkçe"}
            </button>
          ))}
        </div>
      </header>

      <div className="model-controls">
        <label className="model-controls__search">
          <span>{labels.search}</span>
          <input type="search" value={state.query} maxLength={120} placeholder={labels.placeholder}
            onChange={(event) => updateState({ query: event.currentTarget.value }, true)} />
        </label>
        <label>
          <span>{labels.vendor}</span>
          <select value={state.vendorId ?? ""} onChange={(event) => updateState({ vendorId: event.currentTarget.value || null })}>
            <option value="">{labels.allVendors}</option>
            {catalog.vendors.map((vendor) => <option value={vendor.id} key={vendor.id}>{vendor.name}</option>)}
          </select>
        </label>
        <label className="model-controls__history">
          <input type="checkbox" checked={state.includeHistorical} onChange={(event) => updateState({ includeHistorical: event.currentTarget.checked })} />
          <span>{labels.historical}</span>
        </label>
      </div>

      <nav className="model-tasks" aria-label={labels.tasks}>
        <button type="button" aria-pressed={!state.taskId} onClick={() => updateState({ taskId: null })}>
          {labels.allTasks}<span>{totalCount}</span>
        </button>
        {modelTaskValues.map((id) => (
          <button type="button" key={id} aria-pressed={state.taskId === id} onClick={() => updateState({ taskId: id })}>
            {tasks[id].name}<span>{counts.get(id) ?? 0}</span>
          </button>
        ))}
      </nav>

      <div className="model-results-bar">
        <p role="status" aria-live="polite">{labels.unique}: <strong>{models.length}</strong> · {labels.groups}: <strong>{groups.length}</strong></p>
        <div className="export-controls" role="group" aria-label={labels.exports}>
          {hasFilters ? <button type="button" onClick={reset}>{labels.reset}</button> : null}
          <button type="button" onClick={() => exportModels("csv")} disabled={!models.length}>{labels.csv}</button>
          <button type="button" onClick={() => exportModels("xls")} disabled={!models.length}>{labels.excel}</button>
        </div>
      </div>
      <p className="model-browser__scope">{labels.scope}</p>

      {groups.length ? (
        <div className={`model-groups${state.taskId ? " model-groups--single" : ""}`}>
          {groups.map((group) => (
            <section className="model-task-group" key={group.id} aria-labelledby={`task-${group.id}`}>
              <header>
                <div><h2 id={`task-${group.id}`}>{tasks[group.id].name}</h2><p>{tasks[group.id].description}</p></div>
                <span className="model-task-group__count">{group.models.length} {labels.groupCount}</span>
              </header>
              <ul>
                {group.models.map((model) => (
                  <li key={model.id}>
                    <ModelRecord model={model} vendor={vendorById.get(model.vendorId)} locale={state.locale}
                      sources={model.sourceIds.flatMap((id) => { const source = sourceById.get(id); return source ? [source] : []; })} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>{labels.empty}</h2><p>{labels.emptyHint}</p><button type="button" onClick={reset}>{labels.reset}</button>
        </div>
      )}
    </div>
  );
}
