export const MINIMAP_MIN_WIDTH = 144;
export const MINIMAP_MAX_WIDTH = 480;
const STORAGE_KEY = "aia.taxonomy.minimap.v1";

type MinimapPreferences = { width: number | null; expanded: boolean };
const defaults: MinimapPreferences = { width: null, expanded: true };
let snapshot = defaults;
let unsaved = false;
const listeners = new Set<() => void>();

function parse(raw: string | null): MinimapPreferences {
  if (!raw) return defaults;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object" || Array.isArray(value)) return defaults;
    const { width, expanded } = value as Record<string, unknown>;
    return {
      width: typeof width === "number" && Number.isFinite(width) && width >= 1 && width <= MINIMAP_MAX_WIDTH ? width : null,
      expanded: typeof expanded === "boolean" ? expanded : true,
    };
  } catch { return defaults; }
}

function publish(next: MinimapPreferences) {
  if (snapshot.width === next.width && snapshot.expanded === next.expanded) return;
  snapshot = next;
  listeners.forEach((listener) => listener());
}

function refresh() {
  try {
    publish(parse(window.localStorage.getItem(STORAGE_KEY)));
    unsaved = false;
  } catch {
    // Storage can be disabled; keep the current tab's working preferences.
  }
}

function handleStorage(event: StorageEvent) {
  if (event.key !== STORAGE_KEY && event.key !== null) return;
  try {
    if (event.storageArea !== window.localStorage) return;
    refresh();
  } catch { /* Storage access can be revoked while the page is open. */ }
}

export const minimapPreferences = {
  getSnapshot: () => snapshot,
  // Static rendering and hydration start from the same responsive defaults.
  getServerSnapshot: () => defaults,
  subscribe(listener: () => void) {
    listeners.add(listener);
    if (listeners.size === 1) {
      if (!unsaved) refresh();
      window.addEventListener("storage", handleStorage);
    }
    return () => {
      listeners.delete(listener);
      if (listeners.size === 0) window.removeEventListener("storage", handleStorage);
    };
  },
  update(patch: Partial<MinimapPreferences>) {
    const next = { ...snapshot, ...patch };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      unsaved = false;
    } catch { unsaved = true; }
    // Only deliberate user changes write storage, never responsive size limits.
    publish(next);
  },
};
