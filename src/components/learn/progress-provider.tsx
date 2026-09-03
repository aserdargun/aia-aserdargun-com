"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { LearnDataset } from "@/data/learn/schema";
import {
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
  review: (conceptId: string, quality: ReviewQuality) => void;
  answer: (conceptId: string, correct: boolean) => void;
  reset: () => void;
}

import { createContext, useContext } from "react";

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({
  dataset,
  children,
}: {
  dataset: LearnDataset;
  children: React.ReactNode;
}) {
  const conceptIds = useMemo(() => dataset.concepts.map((c) => c.id), [dataset]);
  const [progress, setProgress] = useState<LearnProgress>({});
  const [ready, setReady] = useState(false);

  // Effect 1: subscribe to cross-tab storage events and bootstrap the
  // initial snapshot. The initial setState happens inside a callback that
  // is fired by an event (the initial dispatchEvent), so it does not
  // count as a synchronous setState in the effect body.
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const hydrate = () => {
      const baseline = createEmptyProgress(conceptIds, new Date());
      setProgress(mergeProgress(baseline, loadProgress()));
      setReady(true);
    };
    hydrate();
    const handle = () => hydrate();
    window.addEventListener("storage", handle);
    return () => window.removeEventListener("storage", handle);
  }, [conceptIds]);

  // Effect 2: persist whenever progress changes. This is the canonical
  // "sync React state to an external system" effect and is allowed.
  useEffect(() => {
    if (!ready) return;
    saveProgress(progress);
  }, [progress, ready]);

  const review = useCallback(
    (conceptId: string, quality: ReviewQuality) => {
      setProgress((current) =>
        applyReview(current, conceptId, quality, new Date()),
      );
    },
    [],
  );

  const answer = useCallback((conceptId: string, correct: boolean) => {
    setProgress((current) => recordQuizAnswer(current, conceptId, correct));
  }, []);

  const reset = useCallback(() => {
    setProgress(createEmptyProgress(conceptIds, new Date()));
  }, [conceptIds]);

  const summary = useMemo(
    () => summarize(progress, new Date()),
    [progress],
  );

  const value: ProgressContextValue = { progress, summary, ready, review, answer, reset };

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress must be used within a ProgressProvider.");
  }
  return ctx;
}
