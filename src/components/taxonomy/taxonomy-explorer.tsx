"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { TaxonomyMap, TaxonomySource, TaxonomyTask, OpenWeightModel, TaskModelSource, ModelFamily } from "@/data/schema";
import { taxonomyLabels, taskModelLabels, taskBenchmarkLabels, modelFamilyLabels, type ModelLocale } from "@/lib/labels";
import { benchmarkCandidates, taskBenchmarks, taskBenchmarkReviews } from "@/data/task-benchmarks";
import { benchmarkStatus } from "@/lib/task-benchmarks";
import { prepareTaxonomySvg, taxonomyHref } from "@/lib/taxonomy";
import { linkTaskCards, taskModelHref } from "@/lib/task-models";
import { TaskModelPanel } from "@/components/taxonomy/task-model-panel";
import { linkModelFamilyCards, modelFamilyHref } from "@/lib/model-families";
import { ModelFamilyPanel } from "@/components/taxonomy/model-family-panel";
import { MAX_SCALE, MIN_SCALE, useTaxonomyNavigation } from "@/components/taxonomy/use-taxonomy-navigation";
import { TaxonomyMinimap } from "@/components/taxonomy/taxonomy-minimap";

export function TaxonomyExplorer({ map, svg, sources, tasks, models, modelSources, families }: {
  map: TaxonomyMap; svg: string; sources: TaxonomySource[];
  tasks: TaxonomyTask[]; models: OpenWeightModel[]; modelSources: TaskModelSource[]; families: ModelFamily[];
}) {
  const params = useSearchParams();
  const locale: ModelLocale = params.get("lang") === "tr" ? "tr" : "en";
  const labels = taxonomyLabels[locale];
  const content = labels[map.id];
  const modelLabels = taskModelLabels[locale];
  const familyLabels = modelFamilyLabels[locale];
  const benchmarkLabels = taskBenchmarkLabels[locale];
  const [evidenceFilter, setEvidenceFilter] = useState<"all" | "comparison" | "single" | "gap">("all");
  const [taskQuery, setTaskQuery] = useState("");
  const taskId = map.id === "tasks" ? params.get("task") : null;
  const familyId = map.id === "models" ? params.get("family") : null;
  const selectedTask = tasks.find((task) => task.id === taskId);
  const selectedFamily = families.find((family) => family.id === familyId);
  const preparedSvg = useMemo(() => {
    const prepared = prepareTaxonomySvg(svg, locale);
    return map.id === "tasks" ? linkTaskCards(prepared, tasks, locale, taskId) : linkModelFamilyCards(prepared, families, locale, familyId);
  }, [svg, locale, map.id, tasks, taskId, families, familyId]);
  const taskGroups = [...new Set(tasks.map((task) => task.family))];
  const filteredTasks = tasks.filter((task) => task.id === selectedTask?.id ||
    ((evidenceFilter === "all" || benchmarkStatus(task.id, taskBenchmarks) === evidenceFilter) &&
      task.name.toLocaleLowerCase("en").includes(taskQuery.trim().toLocaleLowerCase("en"))));
  const axes = [...new Set(families.map((family) => family.axis))];
  const viewer = useRef<HTMLElement>(null);
  const { viewport, zoom, scale, setScale, fitWidth, focusSelected, panHandlers } = useTaxonomyNavigation(map.width, selectedTask?.id ?? selectedFamily?.id ?? null);
  const sourceList = useRef<HTMLDetailsElement>(null);
  const guide = useRef<HTMLDetailsElement>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState(false);

  useEffect(() => {
    if (selectedTask || selectedFamily) {
      const panel = document.getElementById(selectedTask ? "task-model-panel" : "model-family-panel");
      panel?.focus({ preventScroll: true });
      if (window.matchMedia("(max-width: 900px)").matches) {
        panel?.scrollIntoView({ block: "nearest", inline: "nearest" });
      }
      if (panel) panel.scrollTop = 0;
    }
  }, [selectedTask, selectedFamily]);

  function selectionHref(id: string | null, language = locale, hash = "") {
    return map.id === "tasks" ? taskModelHref(id, language, hash) : modelFamilyHref(id, language, hash);
  }

  function selectEntry(id: string | null) {
    window.history.pushState(null, "", selectionHref(id));
  }

  function closePanel() {
    const previous = selectedTask?.id ?? selectedFamily?.id;
    selectEntry(null);
    requestAnimationFrame(() => {
      viewport.current?.querySelector<SVGAElement>(`a[data-${map.id === "tasks" ? "task" : "family"}-id="${previous}"]`)?.focus();
    });
  }

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const onFullscreen = () => setFullscreen(document.fullscreenElement === viewer.current);
    document.addEventListener("fullscreenchange", onFullscreen);
    const closeGuide = (event: PointerEvent) => {
      if (guide.current && !guide.current.contains(event.target as Node)) guide.current.open = false;
    };
    document.addEventListener("pointerdown", closeGuide);
    // A direct link to a task family can arrive before the client map hydrates.
    const hash = window.location.hash.slice(1);
    if (hash === "taxonomy-sources" && sourceList.current) {
      sourceList.current.open = true;
      sourceList.current.scrollIntoView();
    } else if (/^[a-z0-9-]+$/.test(hash)) {
      element.querySelector(`#${hash}`)?.scrollIntoView({ block: "start", inline: "nearest" });
    }
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreen);
      document.removeEventListener("pointerdown", closeGuide);
    };
  }, [viewport]);

  function changeLocale(next: ModelLocale) {
    window.history.pushState(null, "", selectionHref(taskId ?? familyId, next, window.location.hash));
  }

  function showSelectedCard() {
    focusSelected();
    if (window.matchMedia("(max-width: 900px)").matches) {
      viewport.current?.scrollIntoView({ block: "center", behavior: "instant" });
    }
  }

  async function openSources(event?: { preventDefault(): void }) {
    event?.preventDefault();
    if (document.fullscreenElement === viewer.current) await document.exitFullscreen();
    if (sourceList.current) sourceList.current.open = true;
    sourceList.current?.scrollIntoView({ block: "start" });
    window.history.replaceState(null, "", selectionHref(taskId ?? familyId, locale, "#taxonomy-sources"));
  }

  async function toggleFullscreen() {
    setFullscreenError(false);
    try {
      if (document.fullscreenElement === viewer.current) await document.exitFullscreen();
      else if (viewer.current?.requestFullscreen) await viewer.current.requestFullscreen();
      else setFullscreenError(true);
    } catch {
      setFullscreenError(true);
    }
  }

  return (
    <div className="taxonomy-explorer" lang={locale}>
      <div className="taxonomy-shell">
      <header className="taxonomy-intro">
        <div>
          <p className="taxonomy-eyebrow">{map.branchCount} {content.branches} · {map.entryCount} {content.entries}</p>
          <h1>{content.title}</h1>
        </div>
        <nav className="taxonomy-tabs" aria-label={labels.navigationLabel}>
          <Link href={taxonomyHref("models", locale)} aria-current={map.id === "models" ? "page" : undefined}>{labels.modelNav}</Link>
          <Link href={taxonomyHref("tasks", locale)} aria-current={map.id === "tasks" ? "page" : undefined}>{labels.taskNav}</Link>
        </nav>
        <div className="model-language" role="group" aria-label={labels.language}>
          {(["en", "tr"] as const).map((next) => (
            <button type="button" key={next} lang={next} aria-pressed={locale === next} onClick={() => changeLocale(next)}>
              {next === "en" ? "English" : "Türkçe"}
            </button>
          ))}
        </div>
      </header>

      <section ref={viewer} className="taxonomy-viewer" aria-label={map.title}>
        {map.id === "tasks" ? <div className="task-model-finder task-model-finder--tasks">
          <div><h2>{modelLabels.title}</h2><p>{tasks.filter((task) => task.recommendations.length).length}/{tasks.length} {modelLabels.coverage} · {models.length} {modelLabels.modelCount}</p></div>
          <label htmlFor="taxonomy-task-select">{modelLabels.select}
            <select id="taxonomy-task-select" value={selectedTask?.id ?? ""} onChange={(event) => selectEntry(event.target.value || null)}>
              <option value="">{modelLabels.placeholder}</option>
              {taskGroups.filter((family) => filteredTasks.some((task) => task.family === family)).map((family) => <optgroup key={family} label={family}>{filteredTasks.filter((task) => task.family === family).map((task) => <option value={task.id} key={task.id}>{task.name}</option>)}</optgroup>)}
            </select>
          </label>
          <label htmlFor="taxonomy-task-search">{benchmarkLabels.search}<input id="taxonomy-task-search" type="search" value={taskQuery} onChange={(event) => setTaskQuery(event.target.value)} placeholder={benchmarkLabels.placeholder} /></label>
            <div className="benchmark-filters" role="group" aria-label={benchmarkLabels.filter}>
              {(["all", "comparison", "single", "gap"] as const).map((status) => <button type="button" key={status} aria-pressed={evidenceFilter === status} onClick={() => setEvidenceFilter(status)}>
                {status === "all" ? benchmarkLabels.all : <>{tasks.filter((task) => benchmarkStatus(task.id, taskBenchmarks) === status).length} {status === "comparison" ? benchmarkLabels.comparisons : status === "single" ? benchmarkLabels.singles : benchmarkLabels.gaps}</>}
              </button>)}
            </div>
          {taskId && !selectedTask ? <p role="status">{modelLabels.invalid}</p> : null}
        </div> : <div className="task-model-finder">
          <div><h2>{familyLabels.title}</h2><p>{families.filter((family) => family.models.length).length}/{families.length} {familyLabels.coverage} · {models.length} {familyLabels.modelCount}</p></div>
          <label htmlFor="taxonomy-family-select">{familyLabels.select}
            <select id="taxonomy-family-select" value={selectedFamily?.id ?? ""} onChange={(event) => selectEntry(event.target.value || null)}>
              <option value="">{familyLabels.placeholder}</option>
              {axes.map((axis) => <optgroup key={axis} label={familyLabels.axes[axis]}>{families.filter((family) => family.axis === axis).map((family) => <option value={family.id} key={family.id}>{family.name}</option>)}</optgroup>)}
            </select>
          </label>
          {familyId && !selectedFamily ? <p role="status">{familyLabels.invalid}</p> : null}
        </div>}
        <div className="taxonomy-toolbar" role="group" aria-label={labels.controls}>
          <div className="taxonomy-zoom">
            <button type="button" aria-label={labels.zoomOut} title={labels.zoomOut} onClick={() => setScale(scale / 1.3)} disabled={scale <= MIN_SCALE}>−</button>
            <output aria-label={labels.zoom} aria-live="polite">{new Intl.NumberFormat(locale, { style: "percent", maximumFractionDigits: 0 }).format(scale)}</output>
            <button type="button" aria-label={labels.zoomIn} title={labels.zoomIn} onClick={() => setScale(scale * 1.3)} disabled={scale >= MAX_SCALE}>+</button>
            <button type="button" onClick={fitWidth}>{labels.fit}</button>
            <button type="button" onClick={() => setScale(1)}>{labels.actual}</button>
            <button type="button" onClick={showSelectedCard} disabled={!selectedTask && !selectedFamily}>{labels.focusSelected}</button>
          </div>
          <div className="taxonomy-actions">
            <button type="button" onClick={toggleFullscreen}>{fullscreen ? labels.exitFullscreen : labels.fullscreen}</button>
            <a href={map.assetPath} download>{labels.download}</a>
            <a href={map.assetPath} target="_blank" rel="noreferrer">{labels.original} ↗</a>
            {!fullscreen ? <a href="#taxonomy-sources" onClick={openSources}>{labels.sourcesLink}</a> : null}
            <details ref={guide} className="taxonomy-guide" onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.currentTarget.open = false;
                event.currentTarget.querySelector("summary")?.focus();
              }
            }}>
              <summary>{labels.guide}</summary>
              <div className="taxonomy-guide__body">
                <p>{content.intro}</p>
                <p>{labels.scope}</p>
                <p>{labels.englishLabels}{map.id === "tasks" ? ` ${labels.systemNote}` : ""}</p>
                <p id="taxonomy-map-hint">{map.id === "tasks" ? modelLabels.hint : familyLabels.hint} {labels.hint}</p>
                {map.id === "tasks" ? <>
                  <p><strong>{taskBenchmarkReviews.length} {benchmarkLabels.reviewedTasks}</strong> · 2026-10-21 · {benchmarkCandidates.length} {benchmarkLabels.additional}</p>
                  <details className="task-model-method"><summary>{benchmarkLabels.method}</summary><p>{benchmarkLabels.methodology}</p><p>{benchmarkLabels.notRun}</p></details>
                  <details className="task-model-method"><summary>{modelLabels.method}</summary><p>{modelLabels.methodology}</p><p>{modelLabels.evidenceHelp}</p></details>
                </> : <details className="task-model-method"><summary>{familyLabels.method}</summary><p>{familyLabels.methodology}</p><p>{familyLabels.evidenceHelp}</p></details>}
              </div>
            </details>
          </div>
        </div>
        {fullscreenError ? <p role="status" className="taxonomy-hint">{labels.fullscreenError}</p> : null}
        <div className={`taxonomy-workspace${selectedTask || selectedFamily ? " taxonomy-workspace--selected" : ""}`}>
        <div className="taxonomy-map-stage">
        <div ref={viewport} className="taxonomy-viewport" tabIndex={0} role="region" aria-label={labels.region} aria-describedby="taxonomy-map-hint" {...panHandlers}>
          <div
            className="taxonomy-canvas"
            lang="en"
            style={{ width: zoom === null ? "100%" : map.width * zoom }}
            onClick={(event) => {
              const link = (event.target as Element).closest("a");
              const id = link?.getAttribute(map.id === "tasks" ? "data-task-id" : "data-family-id");
              if (id && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                event.preventDefault();
                selectEntry(id);
              } else if (link?.getAttribute("href") === "#taxonomy-sources") void openSources(event);
            }}
            dangerouslySetInnerHTML={{ __html: preparedSvg }}
          />
        </div>
        <TaxonomyMinimap map={map} viewport={viewport} locale={locale} />
        </div>
        {selectedTask ? <TaskModelPanel task={selectedTask} models={models} sources={modelSources} definitions={sources} locale={locale} onClose={closePanel} /> : null}
        {selectedFamily ? <ModelFamilyPanel key={selectedFamily.id} family={selectedFamily} models={models} tasks={tasks} sources={modelSources} definitions={sources} locale={locale} onClose={closePanel} /> : null}
        </div>
      </section>
      </div>

      <details ref={sourceList} id="taxonomy-sources" className="taxonomy-sources">
        <summary>{labels.sources} <span>{sources.length}</span></summary>
        <p>{labels.sourceScope}</p>
        <ol>
          {sources.map((source) => (
            <li key={source.id}>
              <span className="taxonomy-source-id">{source.id}</span>
              <a href={source.url} target="_blank" rel="noreferrer" lang="en">{source.title} ↗</a>
            </li>
          ))}
        </ol>
        <a className="taxonomy-definitions" href="/assets/taxonomy/sources-and-definitions.md" download>{labels.definitions}</a>
      </details>
    </div>
  );
}
