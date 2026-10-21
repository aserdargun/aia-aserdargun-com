"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { TaxonomyMap, TaxonomySource } from "@/data/schema";
import { taxonomyLabels, type ModelLocale } from "@/lib/labels";
import { prepareTaxonomySvg, taxonomyHref } from "@/lib/taxonomy";

const MIN_SCALE = 0.05;
const MAX_SCALE = 2;

export function TaxonomyExplorer({ map, svg, sources }: {
  map: TaxonomyMap; svg: string; sources: TaxonomySource[];
}) {
  const params = useSearchParams();
  const locale: ModelLocale = params.get("lang") === "tr" ? "tr" : "en";
  const labels = taxonomyLabels[locale];
  const content = labels[map.id];
  const preparedSvg = useMemo(() => prepareTaxonomySvg(svg, locale), [svg, locale]);
  const viewer = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const sourceList = useRef<HTMLDetailsElement>(null);
  const pendingScroll = useRef<{ x: number; y: number } | null>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [zoom, setZoom] = useState<number | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState(false);
  const scale = zoom ?? (viewportWidth ? viewportWidth / map.width : 1);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const observer = new ResizeObserver(() => setViewportWidth(element.clientWidth));
    observer.observe(element);
    const onFullscreen = () => setFullscreen(document.fullscreenElement === viewer.current);
    document.addEventListener("fullscreenchange", onFullscreen);
    // A direct link to a task family can arrive before the client map hydrates.
    const hash = window.location.hash.slice(1);
    if (hash === "taxonomy-sources" && sourceList.current) {
      sourceList.current.open = true;
      sourceList.current.scrollIntoView();
    } else if (/^[a-z0-9-]+$/.test(hash)) {
      element.querySelector(`#${hash}`)?.scrollIntoView({ block: "start", inline: "nearest" });
    }
    return () => {
      observer.disconnect();
      document.removeEventListener("fullscreenchange", onFullscreen);
    };
  }, []);

  useEffect(() => {
    const next = pendingScroll.current;
    if (next && viewport.current) {
      viewport.current.scrollTo({ left: next.x, top: next.y, behavior: "instant" });
      pendingScroll.current = null;
    }
  }, [zoom]);

  function setScale(value: number) {
    const next = Math.max(MIN_SCALE, Math.min(MAX_SCALE, value));
    const element = viewport.current;
    if (element) {
      pendingScroll.current = {
        x: (element.scrollLeft + element.clientWidth / 2) * next / scale - element.clientWidth / 2,
        y: (element.scrollTop + element.clientHeight / 2) * next / scale - element.clientHeight / 2,
      };
    }
    setZoom(next);
  }

  function fitWidth() {
    pendingScroll.current = { x: 0, y: 0 };
    viewport.current?.scrollTo({ left: 0, top: 0, behavior: "instant" });
    setZoom(null);
  }

  function changeLocale(next: ModelLocale) {
    window.history.pushState(null, "", `${taxonomyHref(map.id, next)}${window.location.hash}`);
  }

  async function openSources(event?: { preventDefault(): void }) {
    event?.preventDefault();
    if (document.fullscreenElement === viewer.current) await document.exitFullscreen();
    if (sourceList.current) sourceList.current.open = true;
    sourceList.current?.scrollIntoView({ block: "start" });
    window.history.replaceState(null, "", `${taxonomyHref(map.id, locale)}#taxonomy-sources`);
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
      <header className="taxonomy-intro">
        <div>
          <p className="taxonomy-eyebrow">{map.branchCount} {content.branches} · {map.entryCount} {content.entries}</p>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
        </div>
        <div className="model-language" role="group" aria-label={labels.language}>
          {(["en", "tr"] as const).map((next) => (
            <button type="button" key={next} lang={next} aria-pressed={locale === next} onClick={() => changeLocale(next)}>
              {next === "en" ? "English" : "Türkçe"}
            </button>
          ))}
        </div>
      </header>

      <nav className="taxonomy-tabs" aria-label={labels.navigationLabel}>
        <Link href={taxonomyHref("models", locale)} aria-current={map.id === "models" ? "page" : undefined}>{labels.modelNav}</Link>
        <Link href={taxonomyHref("tasks", locale)} aria-current={map.id === "tasks" ? "page" : undefined}>{labels.taskNav}</Link>
      </nav>
      <div className="taxonomy-scope">
        <p>{labels.scope}</p>
        <p>{labels.englishLabels}{map.id === "tasks" ? ` ${labels.systemNote}` : ""}</p>
      </div>

      <section ref={viewer} className="taxonomy-viewer" aria-label={map.title}>
        <div className="taxonomy-toolbar" role="group" aria-label={labels.controls}>
          <div className="taxonomy-zoom">
            <button type="button" aria-label={labels.zoomOut} title={labels.zoomOut} onClick={() => setScale(scale / 1.3)} disabled={scale <= MIN_SCALE}>−</button>
            <output aria-label={labels.zoom} aria-live="polite">{new Intl.NumberFormat(locale, { style: "percent", maximumFractionDigits: 0 }).format(scale)}</output>
            <button type="button" aria-label={labels.zoomIn} title={labels.zoomIn} onClick={() => setScale(scale * 1.3)} disabled={scale >= MAX_SCALE}>+</button>
            <button type="button" onClick={fitWidth}>{labels.fit}</button>
            <button type="button" onClick={() => setScale(1)}>{labels.actual}</button>
          </div>
          <div className="taxonomy-actions">
            <button type="button" onClick={toggleFullscreen}>{fullscreen ? labels.exitFullscreen : labels.fullscreen}</button>
            <a href={map.assetPath} download>{labels.download}</a>
            <a href={map.assetPath} target="_blank" rel="noreferrer">{labels.original} ↗</a>
            {!fullscreen ? <a href="#taxonomy-sources" onClick={openSources}>{labels.sourcesLink}</a> : null}
          </div>
        </div>
        <p id="taxonomy-map-hint" className="taxonomy-hint">{labels.hint}</p>
        {fullscreenError ? <p role="status" className="taxonomy-hint">{labels.fullscreenError}</p> : null}
        <div ref={viewport} className="taxonomy-viewport" tabIndex={0} role="region" aria-label={labels.region} aria-describedby="taxonomy-map-hint">
          <div
            className="taxonomy-canvas"
            lang="en"
            style={{ width: zoom === null ? "100%" : map.width * zoom }}
            onClick={(event) => {
              if ((event.target as Element).closest("a")?.getAttribute("href") === "#taxonomy-sources") void openSources(event);
            }}
            dangerouslySetInnerHTML={{ __html: preparedSvg }}
          />
        </div>
      </section>

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
