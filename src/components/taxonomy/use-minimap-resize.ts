import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent, type RefObject } from "react";

type ResizeGesture = { pointerId: number; x: number; y: number; width: number };
const MIN_WIDTH = 144;
const MAX_WIDTH = 480;
const KEY_STEP = 16;

export function useMinimapResize({ minimap, viewport, aspectRatio }: {
  minimap: RefObject<HTMLDivElement | null>;
  viewport: RefObject<HTMLDivElement | null>;
  aspectRatio: number;
}) {
  const [width, setWidth] = useState<number | null>(null);
  const [limits, setLimits] = useState({ min: MIN_WIDTH, max: MAX_WIDTH, defaultWidth: 196 });
  const gesture = useRef<ResizeGesture | null>(null);
  const clamp = (value: number) => Math.max(limits.min, Math.min(limits.max, value));

  useEffect(() => {
    const element = minimap.current;
    const mapViewport = viewport.current;
    const header = element?.querySelector<HTMLElement>(".taxonomy-minimap__header");
    if (!element || !mapViewport || !header) return;
    let frame: number | null = null;
    const measure = () => {
      frame = null;
      const style = getComputedStyle(element);
      const horizontalChrome = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) +
        parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
      const verticalChrome = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) +
        parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth) + header.offsetHeight;
      // Include the header and frame when fitting the overview inside the main map.
      const max = Math.max(1, Math.floor(Math.min(MAX_WIDTH,
        mapViewport.clientWidth - 2 * parseFloat(style.right),
        (mapViewport.clientHeight - 2 * parseFloat(style.bottom) - verticalChrome) * aspectRatio + horizontalChrome,
      )));
      const next = { min: Math.min(MIN_WIDTH, max), max, defaultWidth: parseFloat(style.getPropertyValue("--taxonomy-minimap-default-width")) };
      setLimits((previous) => previous.min === next.min && previous.max === next.max &&
        previous.defaultWidth === next.defaultWidth ? previous : next);
    };
    const schedule = () => { if (frame === null) frame = requestAnimationFrame(measure); };
    const observer = new ResizeObserver(schedule);
    observer.observe(mapViewport);
    observer.observe(header);
    schedule();
    return () => {
      observer.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [minimap, viewport, aspectRatio]);

  function start(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0 || gesture.current || !minimap.current) return;
    event.preventDefault();
    event.currentTarget.focus({ preventScroll: true });
    gesture.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, width: minimap.current.getBoundingClientRect().width };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.dataset.resizing = "true";
  }

  function move(event: PointerEvent<HTMLDivElement>) {
    const current = gesture.current;
    if (!current || current.pointerId !== event.pointerId) return;
    event.preventDefault();
    // The bottom-right corner stays anchored. Either axis can drive proportional resizing.
    const dx = current.x - event.clientX;
    const dy = (current.y - event.clientY) * aspectRatio;
    setWidth(clamp(current.width + (Math.abs(dx) >= Math.abs(dy) ? dx : dy)));
  }

  function end(event: PointerEvent<HTMLDivElement>) {
    if (gesture.current?.pointerId !== event.pointerId) return;
    gesture.current = null;
    delete event.currentTarget.dataset.resizing;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const current = minimap.current?.getBoundingClientRect().width;
    if (current === undefined) return;
    const steps: Record<string, number> = { ArrowRight: KEY_STEP, ArrowUp: KEY_STEP, ArrowLeft: -KEY_STEP, ArrowDown: -KEY_STEP };
    if (steps[event.key] || event.key === "Home" || event.key === "End") {
      event.preventDefault();
      setWidth(event.key === "Home" ? limits.min : event.key === "End" ? limits.max : clamp(current + steps[event.key]));
    }
  }

  return {
    width: width === null ? null : clamp(width),
    min: limits.min, max: limits.max, value: Math.round(clamp(width ?? limits.defaultWidth)),
    handlers: { onPointerDown: start, onPointerMove: move, onPointerUp: end, onPointerCancel: end, onLostPointerCapture: end, onKeyDown },
  };
}
