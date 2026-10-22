import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type KeyboardEvent, type MouseEvent, type PointerEvent, type RefObject } from "react";
import type { TaxonomyMap } from "@/data/schema";
import { taxonomyLabels, type ModelLocale } from "@/lib/labels";
import { minimapPreferences } from "@/lib/taxonomy-minimap-preferences";
import { useMinimapResize } from "./use-minimap-resize";

type VisibleArea = { x: number; y: number; width: number; height: number };
type FrameDrag = {
  pointerId: number;
  x: number;
  y: number;
  scrollLeft: number;
  scrollTop: number;
  scaleX: number;
  scaleY: number;
  moved: boolean;
};

export function TaxonomyMinimap({ map, viewport, locale }: {
  map: TaxonomyMap;
  viewport: RefObject<HTMLDivElement | null>;
  locale: ModelLocale;
}) {
  const labels = taxonomyLabels[locale];
  const preferences = useSyncExternalStore(minimapPreferences.subscribe, minimapPreferences.getSnapshot, minimapPreferences.getServerSnapshot);
  const { expanded } = preferences;
  const [area, setArea] = useState<VisibleArea | null>(null);
  const drag = useRef<FrameDrag | null>(null);
  const suppressClick = useRef(false);
  const minimap = useRef<HTMLDivElement>(null);
  const size = useMinimapResize({
    minimap, viewport, aspectRatio: map.width / map.height, preferredWidth: preferences.width,
    onWidthChange: (width) => minimapPreferences.update({ width }),
  });
  const contentId = `taxonomy-${map.id}-minimap`;

  useEffect(() => {
    const element = viewport.current;
    const canvas = element?.querySelector<HTMLElement>(".taxonomy-canvas");
    if (!element || !canvas) return;
    let frame: number | null = null;
    const measure = () => {
      frame = null;
      const scale = canvas.getBoundingClientRect().width / map.width;
      if (scale <= 0) return;
      const width = Math.min(map.width, element.clientWidth / scale);
      const height = Math.min(map.height, element.clientHeight / scale);
      const next = {
        x: Math.max(0, Math.min(map.width - width, element.scrollLeft / scale)),
        y: Math.max(0, Math.min(map.height - height, element.scrollTop / scale)),
        width, height,
      };
      setArea((previous) => previous && previous.x === next.x && previous.y === next.y &&
        previous.width === next.width && previous.height === next.height ? previous : next);
    };
    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(measure);
    };
    // Observe both: zoom resizes the canvas; panels/fullscreen resize the viewport.
    const observer = new ResizeObserver(schedule);
    observer.observe(element);
    observer.observe(canvas);
    element.addEventListener("scroll", schedule, { passive: true });
    schedule();
    return () => {
      observer.disconnect();
      element.removeEventListener("scroll", schedule);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [map.width, map.height, viewport]);

  function jumpTo(event: MouseEvent<HTMLButtonElement>) {
    // Pointer release also generates a click. A completed drag must not recenter the map.
    if (event.detail !== 0 && suppressClick.current) {
      suppressClick.current = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const element = viewport.current;
    const canvas = element?.querySelector<HTMLElement>(".taxonomy-canvas");
    if (!element || !canvas) return;
    if (event.detail === 0) {
      element.focus({ preventScroll: true });
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    const scale = canvas.getBoundingClientRect().width / map.width;
    element.scrollTo({
      left: (event.clientX - bounds.left) / bounds.width * map.width * scale - element.clientWidth / 2,
      top: (event.clientY - bounds.top) / bounds.height * map.height * scale - element.clientHeight / 2,
      behavior: "instant",
    });
  }

  function startDrag(event: PointerEvent<HTMLButtonElement>) {
    if (!event.isPrimary || event.button !== 0 || drag.current) return;
    suppressClick.current = false;
    if (!(event.target instanceof Element) || !event.target.closest(".taxonomy-minimap__area")) return;
    const element = viewport.current;
    const canvas = element?.querySelector<HTMLElement>(".taxonomy-canvas");
    if (!element || !canvas) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const renderedMap = canvas.getBoundingClientRect();
    if (bounds.width <= 0 || bounds.height <= 0) return;
    // Keep the grab offset, including when the frame is held away from its centre.
    drag.current = {
      pointerId: event.pointerId, x: event.clientX, y: event.clientY,
      scrollLeft: element.scrollLeft, scrollTop: element.scrollTop,
      scaleX: renderedMap.width / bounds.width, scaleY: renderedMap.height / bounds.height,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveDrag(event: PointerEvent<HTMLButtonElement>) {
    const current = drag.current;
    const element = viewport.current;
    if (!current || current.pointerId !== event.pointerId || !element) return;
    const dx = event.clientX - current.x;
    const dy = event.clientY - current.y;
    if (!current.moved && Math.hypot(dx, dy) < 3) return;
    current.moved = true;
    suppressClick.current = true;
    event.currentTarget.dataset.dragging = "true";
    event.preventDefault();
    element.scrollTo({
      left: current.scrollLeft + dx * current.scaleX,
      top: current.scrollTop + dy * current.scaleY,
      behavior: "instant",
    });
  }

  function endDrag(event: PointerEvent<HTMLButtonElement>) {
    if (drag.current?.pointerId !== event.pointerId) return;
    drag.current = null;
    delete event.currentTarget.dataset.dragging;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function navigateByKeyboard(event: KeyboardEvent<HTMLButtonElement>) {
    const element = viewport.current;
    if (!element || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const steps: Record<string, [number, number]> = {
      ArrowLeft: [-element.clientWidth * 0.8, 0], ArrowRight: [element.clientWidth * 0.8, 0],
      ArrowUp: [0, -element.clientHeight * 0.8], ArrowDown: [0, element.clientHeight * 0.8],
    };
    if (steps[event.key]) {
      event.preventDefault();
      const [left, top] = steps[event.key];
      element.scrollBy({ left, top, behavior: "instant" });
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      element.scrollTo({
        left: event.key === "Home" ? 0 : element.scrollWidth,
        top: event.key === "Home" ? 0 : element.scrollHeight,
        behavior: "instant",
      });
    }
  }

  return (
    <div ref={minimap} className={`taxonomy-minimap${expanded ? "" : " taxonomy-minimap--collapsed"}`}
      style={{ width: expanded ? size.width ?? undefined : undefined, "--taxonomy-minimap-max-width": `${size.max}px` } as CSSProperties}
      role="group" aria-label={labels.minimap}>
      <div className="taxonomy-minimap__header">
        <span>{labels.minimap}</span>
        <button type="button" aria-label={expanded ? labels.minimapHide : labels.minimapShow}
          aria-expanded={expanded} aria-controls={contentId} onClick={() => minimapPreferences.update({ expanded: !expanded })}>
          {expanded ? "−" : "+"}
        </button>
      </div>
      <div id={contentId} hidden={!expanded}>
        <button type="button" className="taxonomy-minimap__surface" aria-label={labels.minimapNavigate}
          aria-describedby={`${contentId}-hint`} title={labels.minimapHint}
          aria-keyshortcuts="ArrowUp ArrowDown ArrowLeft ArrowRight Home End Enter Space"
          onClick={jumpTo} onKeyDown={navigateByKeyboard}
          onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag}
          onPointerCancel={endDrag} onLostPointerCapture={endDrag}>
          <Image src={map.assetPath} alt="" width={map.width} height={map.height} unoptimized loading="eager" draggable={false} />
          <svg viewBox={`0 0 ${map.width} ${map.height}`} aria-hidden="true" focusable="false">
            {area ? <rect className="taxonomy-minimap__area" x={area.x} y={area.y} width={area.width} height={area.height}
              vectorEffect="non-scaling-stroke" /> : null}
          </svg>
        </button>
        <span id={`${contentId}-hint`} className="taxonomy-minimap__hint">{labels.minimapHint}</span>
        <div className="taxonomy-minimap__resize" role="slider" tabIndex={0} aria-label={labels.minimapSize}
          aria-orientation="horizontal" aria-valuemin={size.min} aria-valuemax={size.max} aria-valuenow={size.value}
          aria-valuetext={`${size.value} px`} aria-describedby={`${contentId}-resize-hint`} title={labels.minimapResizeHint}
          aria-keyshortcuts="ArrowUp ArrowDown ArrowLeft ArrowRight Home End" {...size.handlers}>
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M5 12V5h7M5 5l10 10" /></svg>
        </div>
        <span id={`${contentId}-resize-hint`} className="taxonomy-minimap__hint">{labels.minimapResizeHint}</span>
      </div>
    </div>
  );
}
