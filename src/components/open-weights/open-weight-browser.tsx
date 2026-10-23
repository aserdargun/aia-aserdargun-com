"use client";

import { useSearchParams } from "next/navigation";
import { useId, useMemo } from "react";
import type { TaskModelSource } from "@/data/schema";
import { downloadFile, toCsv, toExcelXml } from "@/lib/export";
import { openWeightLabels, type ModelLocale } from "@/lib/labels";
import {
  defaultOpenWeightBrowserState, groupOpenWeightRows, openWeightLicenses,
  openWeightPublishers, openWeightsExport, parseOpenWeightBrowserState,
  selectOpenWeights, serializeOpenWeightBrowserState,
  type OpenWeightBrowserState, type OpenWeightCatalog, type OpenWeightRow, type OpenWeightGroupBy,
} from "@/lib/open-weight-browser";
import { formatBytes, formatParameterCount, footprintBandValues, taxonomyCoverage, type FootprintBand } from "@/lib/open-weights";

function taskHref(taskId: string, locale: ModelLocale) {
  return `/taxonomy/tasks?task=${taskId}${locale === "tr" ? "&lang=tr" : ""}`;
}

function familyHref(familyId: string, locale: ModelLocale) {
  return `/taxonomy/models?family=${familyId}${locale === "tr" ? "&lang=tr" : ""}`;
}

function OpenWeightCard({ row, locale, sources, anchorId }: {
  row: OpenWeightRow; locale: ModelLocale; sources: Map<string, TaskModelSource>; anchorId: string;
}) {
  const headingId = useId();
  const labels = openWeightLabels[locale];
  const { model, footprint, publisher, tasks, families, evidence } = row;
  return (
    <article className="open-weight-card" id={anchorId} aria-labelledby={headingId}>
      <header className="open-weight-card__head">
        <h3 id={headingId}>
          <a href={evidence.card.url} target="_blank" rel="noreferrer" lang="en">{model.name} ↗</a>
        </h3>
        <p className="open-weight-badges">
          <span>{labels[model.role]}</span>
          <span data-access={model.access}>{model.access === "gated" ? labels.gated : labels.public}</span>
          {model.discovery === "auto" ? <span data-discovery="auto">{labels.auto}</span> : null}
        </p>
      </header>
      <p className="open-weight-context">{model.context[locale]}</p>
      <dl className="open-weight-specs">
        <div><dt>{labels.publisher}</dt><dd>{publisher}</dd></div>
        <div><dt>{labels.parameters}</dt><dd>{formatParameterCount(footprint.parameters, locale)}</dd></div>
        <div><dt>{labels.weights}</dt><dd>{footprint.bytes === null ? labels.unknownSize : formatBytes(footprint.bytes, locale)}</dd></div>
        <div><dt>{labels.vram4}</dt><dd title={footprint.vram4 === null ? labels.unknownMemory : labels.estimateHint}>{footprint.vram4 === null ? "—" : `≈ ${footprint.vram4} GiB`}</dd></div>
        <div><dt>{labels.memory8}</dt><dd title={footprint.memory8 === null ? labels.unknownMemory : labels.estimateHint}>{footprint.memory8 === null ? "—" : `≈ ${footprint.memory8} GiB`}</dd></div>
        <div><dt>{labels.license}</dt><dd><a href={evidence.license.url} target="_blank" rel="noreferrer">{model.license} ↗</a></dd></div>
        <div><dt>{labels.checked}</dt><dd><time dateTime={evidence.card.observedAt}>{evidence.card.observedAt}</time></dd></div>
      </dl>
      {tasks.length ? (
        <p className="open-weight-tasks">
          <strong>{labels.task}: </strong>
          {tasks.map((task, index) => (
            <span key={task.id}>
              {index ? " · " : ""}
              <a href={taskHref(task.id, locale)}>{task.name}</a>
            </span>
          ))}
        </p>
      ) : null}
      {families.length ? (
        <p className="open-weight-families">
          <strong>{labels.family}: </strong>
          {families.map((family, index) => (
            <span key={family.id}>
              {index ? " · " : ""}
              <a href={familyHref(family.id, locale)}>{family.name}</a>
            </span>
          ))}
        </p>
      ) : null}
      <details className="open-weight-sources">
        <summary>{labels.sources} ({row.sourceIds.length})</summary>
        <ul>
          {row.sourceIds.map((id) => {
            const source = sources.get(id);
            if (!source) return null;
            return (
              <li key={id}>
                <a href={source.url} target="_blank" rel="noreferrer" lang="en">{source.title} ↗</a>
                <small>{source.publisher} · {source.observedAt}</small>
              </li>
            );
          })}
        </ul>
      </details>
    </article>
  );
}

export function OpenWeightBrowser({ catalog }: { catalog: OpenWeightCatalog }) {
  const params = useSearchParams();
  const state = useMemo(() => parseOpenWeightBrowserState(params, catalog), [params, catalog]);
  const labels = openWeightLabels[state.locale];
  const rows = useMemo(() => selectOpenWeights(catalog, state), [catalog, state]);
  const groups = useMemo(() => groupOpenWeightRows(rows, state), [rows, state]);
  const sourceById = useMemo(() => new Map(catalog.sources.map((source) => [source.id, source])), [catalog]);
  const coverage = useMemo(() => taxonomyCoverage(catalog.tasks), [catalog]);
  const publishers = useMemo(() => openWeightPublishers(catalog), [catalog]);
  const licenses = useMemo(() => openWeightLicenses(catalog), [catalog]);
  const advancedFilterCount = [state.license, state.access, state.taskId, state.familyId].filter(Boolean).length;
  const hasFilters = Boolean(
    state.query || state.publisher || state.license || state.band || state.access || state.taskId || state.familyId,
  );

  function updateState(update: Partial<OpenWeightBrowserState>, replace = false) {
    const current = parseOpenWeightBrowserState(new URLSearchParams(window.location.search), catalog);
    const query = serializeOpenWeightBrowserState({ ...current, ...update });
    const url = query ? `/open-weights?${query}` : "/open-weights";
    if (replace) window.history.replaceState(null, "", url);
    else window.history.pushState(null, "", url);
  }

  function reset() {
    updateState({ ...defaultOpenWeightBrowserState, locale: state.locale, groupBy: state.groupBy });
  }

  function exportModels(format: "csv" | "xls") {
    const table = openWeightsExport(catalog, state);
    downloadFile(
      `aia-open-weight-models.${format}`,
      format === "csv" ? toCsv(table) : toExcelXml(table),
      format === "csv" ? "text/csv;charset=utf-8" : "application/vnd.ms-excel",
    );
  }

  return (
    <div className="open-weight-browser" lang={state.locale}>
      <header className="open-weight-browser__intro">
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

      <details className="open-weight-coverage">
        <summary>
          <h2>{labels.coverage}</h2>
          <span>{coverage.tasksWithModels}/{coverage.totalTasks} {labels.tasks} · {catalog.models.length} {labels.modelCount}</span>
        </summary>
        <p>{labels.coverageHint}</p>
        <ul>
          <li><strong>{coverage.totalTasks}</strong> <span>{labels.tasks}</span></li>
          <li><strong>{coverage.tasksWithModels}</strong> <span>{labels.withModels}</span></li>
          <li><strong>{coverage.specialist}</strong> <span>{labels.specialist}</span></li>
          <li><strong>{coverage.pipeline}</strong> <span>{labels.pipeline}</span></li>
          <li><strong>{coverage.withoutModels}</strong> <span>{labels.withoutModels}</span></li>
        </ul>
      </details>

      <div className="open-weight-controls">
        <label className="open-weight-controls__search">
          <span>{labels.search}</span>
          <input type="search" value={state.query} maxLength={120} placeholder={labels.placeholder}
            onChange={(event) => updateState({ query: event.currentTarget.value }, true)} />
        </label>
        <label>
          <span>{labels.publisher}</span>
          <select value={state.publisher ?? ""} onChange={(event) => updateState({ publisher: event.currentTarget.value || null })}>
            <option value="">{labels.allPublishers}</option>
            {publishers.map((publisher) => <option value={publisher} key={publisher}>{publisher}</option>)}
          </select>
        </label>
        <label>
          <span>{labels.size}</span>
          <select value={state.band ?? ""} onChange={(event) => updateState({ band: (event.currentTarget.value || null) as FootprintBand | null })}>
            <option value="">{labels.allSizes}</option>
            {[...footprintBandValues, "unknown" as const].map((band) => <option value={band} key={band}>{labels.bands[band]}</option>)}
          </select>
        </label>
        <label>
          <span>{labels.groupBy}</span>
          <select value={state.groupBy} onChange={(event) => updateState({ groupBy: event.currentTarget.value as OpenWeightGroupBy })}>
            {(["publisher", "task", "family"] as const).map((group) => (
              <option value={group} key={group}>{labels.groups[group]}</option>
            ))}
          </select>
        </label>
        <details className="open-weight-controls__advanced" open={advancedFilterCount > 0}>
          <summary>{labels.moreFilters}{advancedFilterCount ? ` · ${advancedFilterCount}` : ""}</summary>
          <div>
            <label>
              <span>{labels.license}</span>
              <select value={state.license ?? ""} onChange={(event) => updateState({ license: event.currentTarget.value || null })}>
                <option value="">{labels.allLicenses}</option>
                {licenses.map((license) => <option value={license} key={license}>{license}</option>)}
              </select>
            </label>
            <label>
              <span>{labels.access}</span>
              <select value={state.access ?? ""} onChange={(event) => updateState({ access: (event.currentTarget.value || null) as OpenWeightBrowserState["access"] })}>
                <option value="">{labels.allAccess}</option>
                <option value="public">{labels.public}</option>
                <option value="gated">{labels.gated}</option>
              </select>
            </label>
            <label>
              <span>{labels.task}</span>
              <select value={state.taskId ?? ""} onChange={(event) => updateState({ taskId: event.currentTarget.value || null })}>
                <option value="">{labels.allTasks}</option>
                {catalog.tasks.map((task) => <option value={task.id} key={task.id}>{task.name}</option>)}
              </select>
            </label>
            <label>
              <span>{labels.family}</span>
              <select value={state.familyId ?? ""} onChange={(event) => updateState({ familyId: event.currentTarget.value || null })}>
                <option value="">{labels.allFamilies}</option>
                {catalog.families.map((family) => <option value={family.id} key={family.id}>{family.name}</option>)}
              </select>
            </label>
          </div>
        </details>
      </div>

      <div className="model-results-bar">
        <p role="status" aria-live="polite">{labels.models}: <strong>{rows.length}</strong> · {labels.groupCount}: <strong>{groups.length}</strong></p>
        <div className="export-controls" role="group" aria-label={labels.exports}>
          {hasFilters ? <button type="button" onClick={reset}>{labels.reset}</button> : null}
          <button type="button" onClick={() => exportModels("csv")} disabled={!rows.length}>{labels.csv}</button>
          <button type="button" onClick={() => exportModels("xls")} disabled={!rows.length}>{labels.excel}</button>
        </div>
      </div>
      <div className="open-weight-browser__scope">
        <p>{labels.estimateHint}</p>
        <details><summary>{labels.methodology}</summary><p>{labels.scope}</p></details>
      </div>

      {groups.length ? (
        <div className="open-weight-groups">
          {groups.map((group) => (
            <section className="open-weight-group" key={group.id} aria-labelledby={`group-${encodeURIComponent(group.id)}`}>
              <header>
                <h2 id={`group-${encodeURIComponent(group.id)}`}>{group.name}</h2>
                <span className="open-weight-group__count">{group.rows.length} {labels.modelCount}</span>
              </header>
              <div className="open-weight-group__cards">
                {group.rows.map((row) => (
                  <OpenWeightCard key={`${group.id}-${row.model.id}`} row={row} locale={state.locale} sources={sourceById}
                    anchorId={state.groupBy === "publisher" ? `model-${row.model.id}` : `model-${row.model.id}-${encodeURIComponent(group.id)}`} />
                ))}
              </div>
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
