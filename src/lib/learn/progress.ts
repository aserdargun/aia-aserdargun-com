import {
  initialCardState,
  isDue,
  type CardState,
  type ReviewQuality,
} from "@/lib/learn/spaced-repetition";

/**
 * Progress store for the Learn module.
 *
 * Persistence shape: a record keyed by concept id. Each value holds an SM-2
 * `CardState` plus per-concept interaction counters (correct / total quiz
 * answers). State is stored in localStorage under a single versioned key
 * so future schema changes can migrate cleanly.
 *
 * The pure helpers (`createEmptyProgress`, `applyReview`, `summarize`)
 * are deterministic and unit-testable. The storage adapter
 * (`loadProgress`, `saveProgress`) is the only side-effecting layer; it is
 * only imported from client components.
 */

export const PROGRESS_STORAGE_KEY = "aia.learn.progress.v1";

export interface ConceptProgress {
  card: CardState;
  quizCorrect: number;
  quizTotal: number;
}

export type LearnProgress = Record<string, ConceptProgress>;

export function createEmptyProgress(conceptIds: string[], now: Date): LearnProgress {
  const out: LearnProgress = {};
  for (const id of conceptIds) {
    out[id] = {
      card: initialCardState(now),
      quizCorrect: 0,
      quizTotal: 0,
    };
  }
  return out;
}

export function applyReview(
  progress: LearnProgress,
  conceptId: string,
  quality: ReviewQuality,
  now: Date,
): LearnProgress {
  const existing = progress[conceptId];
  if (!existing) {
    return progress;
  }
  const next = { ...progress };
  next[conceptId] = {
    ...existing,
    card: reviewCardWith(existing.card, quality, now),
  };
  return next;
}

export function recordQuizAnswer(
  progress: LearnProgress,
  conceptId: string,
  correct: boolean,
): LearnProgress {
  const existing = progress[conceptId];
  if (!existing) {
    return progress;
  }
  const next = { ...progress };
  next[conceptId] = {
    ...existing,
    quizCorrect: existing.quizCorrect + (correct ? 1 : 0),
    quizTotal: existing.quizTotal + 1,
  };
  return next;
}

export interface ProgressSummary {
  totalConcepts: number;
  reviewed: number;
  due: number;
  newCount: number;
  learning: number;
  mastered: number;
  averageEasiness: number;
  totalQuizAnswered: number;
  totalQuizCorrect: number;
  accuracy: number;
}

export function summarize(progress: LearnProgress, now: Date): ProgressSummary {
  const totalConcepts = Object.keys(progress).length;
  let reviewed = 0;
  let due = 0;
  let newCount = 0;
  let learning = 0;
  let mastered = 0;
  let efSum = 0;
  let totalQuizAnswered = 0;
  let totalQuizCorrect = 0;

  for (const entry of Object.values(progress)) {
    const reps = entry.card.repetitions;
    if (reps === 0 && entry.card.lastReviewedAt === null) {
      newCount += 1;
      due += 1;
    } else {
      reviewed += 1;
      if (entry.card.repetitions >= 4) {
        mastered += 1;
      } else {
        learning += 1;
      }
      if (isDue(entry.card, now)) {
        due += 1;
      }
    }
    efSum += entry.card.easinessFactor;
    totalQuizAnswered += entry.quizTotal;
    totalQuizCorrect += entry.quizCorrect;
  }

  return {
    totalConcepts,
    reviewed,
    due,
    newCount,
    learning,
    mastered,
    averageEasiness: totalConcepts > 0 ? Number((efSum / totalConcepts).toFixed(2)) : 0,
    totalQuizAnswered,
    totalQuizCorrect,
    accuracy: totalQuizAnswered > 0 ? totalQuizCorrect / totalQuizAnswered : 0,
  };
}

/**
 * Browser-only loader. Returns an empty record on the server and when
 * localStorage is unavailable (private mode, quota errors, etc.).
 */
export function loadProgress(): LearnProgress {
  if (typeof window === "undefined") {
    return {};
  }
  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as LearnProgress;
  } catch {
    return {};
  }
}

export function saveProgress(progress: LearnProgress): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.setItem(
      PROGRESS_STORAGE_KEY,
      JSON.stringify(progress),
    );
  } catch {
    /* ignore quota / private-mode failures */
  }
}

export function mergeProgress(
  base: LearnProgress,
  incoming: LearnProgress,
): LearnProgress {
  const out: LearnProgress = { ...base };
  for (const [id, value] of Object.entries(incoming)) {
    out[id] = value;
  }
  return out;
}

// re-export to keep the public surface in one module
export { initialCardState, isDue };
export type { CardState, ReviewQuality } from "@/lib/learn/spaced-repetition";

import { reviewCard as reviewCardWith } from "@/lib/learn/spaced-repetition";
