import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { MouseEvent, PointerEvent } from "react";

export const MIN_SCALE = 0.05;
export const MAX_SCALE = 2;

type Point = { x: number; y: number };
type Camera = { zoom: number | null; scroll: Point | null };
type Drag = { pointerId: number; start: Point; scroll: Point; moved: boolean };

const clampScale = (value: number) => Math.max(MIN_SCALE, Math.min(MAX_SCALE, value));

export function useTaxonomyNavigation(mapWidth: number, selection: string | null) {
  const viewport = useRef<HTMLDivElement>(null);
  const drag = useRef<Drag | null>(null);
  const suppressClick = useRef(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [camera, setCamera] = useState<Camera>({ zoom: null, scroll: null });
  const scale = camera.zoom ?? (viewportWidth ? viewportWidth / mapWidth : 1);

  // Read the rendered scale, including fit-width changes when the panel opens.
  const renderedScale = useCallback(() => {
    const canvas = viewport.current?.querySelector(".taxonomy-canvas");
    return canvas ? canvas.getBoundingClientRect().width / mapWidth : 1;
  }, [mapWidth]);

  const setScale = useCallback((value: number, anchor?: Point) => {
    const element = viewport.current;
    if (!element) return;
    const next = clampScale(value);
    const point = anchor ?? { x: element.clientWidth / 2, y: element.clientHeight / 2 };
    const ratio = next / renderedScale();
    setCamera({
      zoom: next,
      scroll: {
        x: (element.scrollLeft + point.x) * ratio - point.x,
        y: (element.scrollTop + point.y) * ratio - point.y,
      },
    });
  }, [renderedScale]);

  const fitWidth = useCallback(() => {
    setCamera({ zoom: null, scroll: { x: 0, y: 0 } });
  }, []);

  const focusSelected = useCallback(() => {
    const element = viewport.current;
    const card = element?.querySelector('a[aria-current="true"] [data-card]');
    if (!element || !card) return;
    const [x, y, width, height] = ["x", "y", "width", "height"].map((name) => Number(card.getAttribute(`data-card-${name}`)));
    if (![x, y, width, height].every(Number.isFinite) || width <= 0 || height <= 0) return;
    // Fit the selected card into the actual map space beside the details panel.
    const next = clampScale(Math.min(1, (element.clientWidth - 64) / width, (element.clientHeight - 64) / height));
    setCamera({
      zoom: next,
      scroll: {
        x: (x + width / 2) * next - element.clientWidth / 2,
        y: (y + height / 2) * next - element.clientHeight / 2,
      },
    });
  }, []);

  useLayoutEffect(() => {
    if (camera.scroll) {
      viewport.current?.scrollTo({ left: camera.scroll.x, top: camera.scroll.y, behavior: "instant" });
    }
  }, [camera]);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const observer = new ResizeObserver(() => setViewportWidth(element.clientWidth));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selection) return;
    const frame = requestAnimationFrame(focusSelected);
    return () => cancelAnimationFrame(frame);
  }, [selection, focusSelected]);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    let frame: number | null = null;
    let delta = 0;
    let anchor: Point = { x: 0, y: 0 };
    const wheel = (event: WheelEvent) => {
      if (!event.deltaY) return;
      event.preventDefault();
      if (drag.current?.moved) return;
      const bounds = element.getBoundingClientRect();
      anchor = { x: event.clientX - bounds.left - element.clientLeft, y: event.clientY - bounds.top - element.clientTop };
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? element.clientHeight : 1;
      delta += event.deltaY * unit;
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        setScale(renderedScale() * Math.exp(-Math.max(-240, Math.min(240, delta)) * 0.002), anchor);
        delta = 0;
        frame = null;
      });
    };
    // React's passive wheel listener cannot cancel native page/pinch scrolling.
    element.addEventListener("wheel", wheel, { passive: false });
    return () => {
      element.removeEventListener("wheel", wheel);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [renderedScale, setScale]);

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (drag.current?.pointerId !== event.pointerId) return;
    drag.current = null;
    delete event.currentTarget.dataset.dragging;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }

  const panHandlers = {
    onPointerDown(event: PointerEvent<HTMLDivElement>) {
      // Touch keeps native scrolling and pinch gestures; modified clicks keep link behavior.
      if (event.pointerType === "touch" || event.button !== 0 || !event.isPrimary || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      suppressClick.current = false;
      drag.current = {
        pointerId: event.pointerId,
        start: { x: event.clientX, y: event.clientY },
        scroll: { x: event.currentTarget.scrollLeft, y: event.currentTarget.scrollTop },
        moved: false,
      };
    },
    onPointerMove(event: PointerEvent<HTMLDivElement>) {
      const active = drag.current;
      if (!active || active.pointerId !== event.pointerId) return;
      if (!(event.buttons & 1)) { endDrag(event); return; }
      const x = event.clientX - active.start.x;
      const y = event.clientY - active.start.y;
      if (!active.moved && Math.hypot(x, y) < 5) return;
      if (!active.moved) {
        active.moved = true;
        suppressClick.current = true;
        event.currentTarget.dataset.dragging = "true";
        // Capture only after the drag threshold so ordinary SVG link clicks still work.
        event.currentTarget.setPointerCapture(event.pointerId);
        event.currentTarget.focus({ preventScroll: true });
      }
      event.preventDefault();
      event.currentTarget.scrollTo({ left: active.scroll.x - x, top: active.scroll.y - y, behavior: "instant" });
    },
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
    onLostPointerCapture: endDrag,
    onPointerLeave(event: PointerEvent<HTMLDivElement>) {
      if (!drag.current?.moved) endDrag(event);
    },
    onClickCapture(event: MouseEvent<HTMLDivElement>) {
      if (suppressClick.current && event.detail !== 0) {
        event.preventDefault();
        event.stopPropagation();
        suppressClick.current = false;
      }
    },
    onDragStart(event: MouseEvent<HTMLDivElement>) { event.preventDefault(); },
  };

  return { viewport, zoom: camera.zoom, scale, setScale, fitWidth, focusSelected, panHandlers };
}
