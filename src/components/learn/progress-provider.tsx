"use client";

import { createContext, useContext, useMemo, useState, useSyncExternalStore } from "react";
import type { LearnDataset } from "@/data/learn/schema";
import {
  PROGRESS_STORAGE_KEY,
  applyReview,
  createEmptyProgress,
  loadProgress,
  mergeProgress,
  recordQuizAnswer,
  saveProgress,
  summarize,
  type LearnProgress,
  type ProgressSummary,
} from "@/lib/learn/progress";
import type { ReviewQuality } from "@/lib/learn/spaced-repetition";

interface ProgressContextValue {
  progress: LearnProgress;
  summary: ProgressSummary;
  ready: boolean;
  storageAvailable: boolean;
  review: (conceptId: string, quality: ReviewQuality) => void;
  answer: (conceptId: string, correct: boolean) => void;
  reset: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

function createProgressStore(conceptIds: string[]) {
  const serverSnapshot = {
    progress: {} as LearnProgress,
    ready: false,
    storageAvailable: true,
    now: new Date(0),
  };
  let snapshot = serverSnapshot;
  const listeners = new Set<() => void>();
  const emit = () => listeners.forEach((listener) => listener());
  const hydrate = () => {
    const now = new Date();
    snapshot = {
      ...snapshot,
      progress: mergeProgress(createEmptyProgress(conceptIds, now), loadProgress()),
      now,
      ready: true,
    };
    emit();
  };
  const tick = () => {
    snapshot = { ...snapshot, now: new Date() };
    emit();
  };
  const commit = (progress: LearnProgress) => {
    if (!snapshot.ready) return;
    snapshot = {
      ...snapshot,
      progress,
      now: new Date(),
      storageAvailable: saveProgress(progress),
    };
    emit();
  };
  return {
    getSnapshot: () => snapshot,
    getServerSnapshot: () => serverSnapshot,
    subscribe(listener: () => void) {
      listeners.add(listener);
      hydrate();
      const handle = (event: StorageEvent) => {
        if ((event.key === PROGRESS_STORAGE_KEY || event.key === null) &&
            (event.storageArea === null || event.storageArea === window.localStorage)) hydrate();
      };
      // Remote snapshots are read only; only user actions write to storage.
      window.addEventListener("storage", handle);
      document.addEventListener("visibilitychange", tick);
      const timer = window.setInterval(tick, 60_000);
      return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", handle);
        document.removeEventListener("visibilitychange", tick);
        window.clearInterval(timer);
      };
    },
    review: (conceptId: string, quality: ReviewQuality) =>
      commit(applyReview(snapshot.progress, conceptId, quality, new Date())),
    answer: (conceptId: string, correct: boolean) =>
      commit(recordQuizAnswer(snapshot.progress, conceptId, correct)),
    reset: () => commit(createEmptyProgress(conceptIds, new Date())),
  };
}

export function ProgressProvider({ dataset, children }: { dataset: LearnDataset; children: React.ReactNode }) {
  const [store] = useState(() => createProgressStore(dataset.concepts.map((concept) => concept.id)));
  const snapshot = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
  const summary = useMemo(() => summarize(snapshot.progress, snapshot.now), [snapshot]);
  const value = { ...snapshot, summary, review: store.review, answer: store.answer, reset: store.reset };

  return (
    <ProgressContext.Provider value={value}>
      {!snapshot.storageAvailable && (
        <p role="status" className="learn-grade__status">
          Your browser could not save progress. Changes are available in this tab only and may be lost when you leave.
        </p>
      )}
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within a ProgressProvider.");
  return ctx;
}
