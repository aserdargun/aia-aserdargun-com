/**
 * SM-2 spaced repetition.
 *
 * Pure functions. No DOM, no storage, no side effects. Given a current card
 * state and a review quality, return the next state. The same algorithm
 * powers Anki and most academic flashcard apps; see Wozniak's original
 * formulation.
 *
 * Quality scale (we use four user-facing buttons that map to these):
 *   0 — Again  (no recall)
 *   3 — Hard   (recalled with serious difficulty)
 *   4 — Good   (recalled with some effort)
 *   5 — Easy   (recalled easily)
 *
 * The repository keeps the implementation dependency-free so it can be
 * unit-tested with node --test and reused on the client and the server.
 */

export type ReviewQuality = 0 | 3 | 4 | 5;

export const reviewQualityLabels: Record<ReviewQuality, string> = {
  0: "Again",
  3: "Hard",
  4: "Good",
  5: "Easy",
};

export interface CardState {
  /** Repetition count, n in the SM-2 paper. */
  repetitions: number;
  /** Easiness factor, EF in the SM-2 paper. Floor 1.3. */
  easinessFactor: number;
  /** Interval in days until the next review. */
  intervalDays: number;
  /** ISO timestamp of the last review. */
  lastReviewedAt: string | null;
  /** ISO timestamp of the next scheduled review. */
  dueAt: string;
}

export const initialCardState = (now: Date): CardState => ({
  repetitions: 0,
  easinessFactor: 2.5,
  intervalDays: 0,
  lastReviewedAt: null,
  dueAt: now.toISOString(),
});

/**
 * Apply one SM-2 step and return the new state.
 *
 * The next-state calculation:
 *   if quality < 3:
 *     repetitions = 0
 *     intervalDays = 1
 *   else:
 *     repetitions += 1
 *     intervalDays = 1 if repetitions == 1
 *                 = 6 if repetitions == 2
 *                 = round(previousInterval * EF) otherwise
 *   EF' = max(1.3, EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)))
 */
export function reviewCard(
  state: CardState,
  quality: ReviewQuality,
  now: Date,
): CardState {
  let { repetitions, easinessFactor, intervalDays } = state;

  if (quality < 3) {
    repetitions = 0;
    intervalDays = 1;
  } else {
    repetitions += 1;
    if (repetitions === 1) {
      intervalDays = 1;
    } else if (repetitions === 2) {
      intervalDays = 6;
    } else {
      intervalDays = Math.max(1, Math.round(intervalDays * easinessFactor));
    }
  }

  const delta = 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02);
  const nextEf = Math.max(1.3, easinessFactor + delta);

  const next = new Date(now.getTime());
  next.setUTCDate(next.getUTCDate() + intervalDays);

  return {
    repetitions,
    easinessFactor: Number(nextEf.toFixed(3)),
    intervalDays,
    lastReviewedAt: now.toISOString(),
    dueAt: next.toISOString(),
  };
}

export function isDue(state: CardState, now: Date): boolean {
  return new Date(state.dueAt).getTime() <= now.getTime();
}

export function daysUntilDue(state: CardState, now: Date): number {
  const diffMs = new Date(state.dueAt).getTime() - now.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}
