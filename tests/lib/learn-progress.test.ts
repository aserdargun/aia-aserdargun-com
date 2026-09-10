import { describe, expect, it } from "vitest";
import {
  applyReview,
  createEmptyProgress,
  recordQuizAnswer,
  summarize,
} from "@/lib/learn/progress";

const now = new Date("2026-08-19T12:00:00Z");

describe("learn progress store", () => {
  it("creates a baseline with all concepts present", () => {
    const progress = createEmptyProgress(["a", "b", "c"], now);
    expect(Object.keys(progress).sort()).toEqual(["a", "b", "c"]);
    for (const entry of Object.values(progress)) {
      expect(entry.quizTotal).toBe(0);
      expect(entry.quizCorrect).toBe(0);
    }
  });

  it("applies a review to the right card", () => {
    const progress = createEmptyProgress(["a", "b"], now);
    const next = applyReview(progress, "a", 4, now);
    expect(next.a.card.repetitions).toBe(1);
    expect(next.b.card.repetitions).toBe(0);
  });

  it("is a no-op for unknown concept IDs", () => {
    const progress = createEmptyProgress(["a"], now);
    const next = applyReview(progress, "ghost", 4, now);
    expect(next).toEqual(progress);
  });

  it("accumulates quiz counters", () => {
    const progress = createEmptyProgress(["a"], now);
    const once = recordQuizAnswer(progress, "a", true);
    const twice = recordQuizAnswer(once, "a", false);
    expect(twice.a.quizCorrect).toBe(1);
    expect(twice.a.quizTotal).toBe(2);
  });

  it("summarizes reviewed / due / mastered counts", () => {
    let progress = createEmptyProgress(["a", "b", "c", "d"], now);
    progress = applyReview(progress, "a", 5, now);
    progress = applyReview(progress, "a", 5, now);
    progress = applyReview(progress, "a", 5, now);
    progress = applyReview(progress, "a", 5, now);
    progress = applyReview(progress, "b", 4, now);
    const summary = summarize(progress, now);
    expect(summary.totalConcepts).toBe(4);
    expect(summary.reviewed).toBe(2);
    expect(summary.newCount).toBe(2);
    expect(summary.mastered).toBe(1);
    expect(summary.learning).toBe(1);
    expect(summary.due).toBe(2);
  });

  it("computes accuracy only from answered questions", () => {
    let progress = createEmptyProgress(["a"], now);
    progress = recordQuizAnswer(progress, "a", true);
    progress = recordQuizAnswer(progress, "a", true);
    progress = recordQuizAnswer(progress, "a", false);
    const summary = summarize(progress, now);
    expect(summary.totalQuizAnswered).toBe(3);
    expect(summary.totalQuizCorrect).toBe(2);
    expect(summary.accuracy).toBeCloseTo(2 / 3, 5);
  });
});

it("recovers valid cards while rejecting corrupt storage entries", async () => {
  const { parseProgress, mergeProgress } = await import("@/lib/learn/progress");
  const base = createEmptyProgress(["a", "b"], now);
  const incoming = {
    a: { ...base.a, quizCorrect: 1, quizTotal: 2 },
    b: { card: null, quizCorrect: -3, quizTotal: "bad" },
    removed: base.a,
  };
  expect(mergeProgress(base, incoming as never)).toEqual({ a: incoming.a, b: base.b });
  expect(parseProgress([])).toEqual({});
  expect(parseProgress({ a: { ...base.a, quizCorrect: 2, quizTotal: 1 } })).toEqual({});
  expect(parseProgress({ a: { ...base.a, card: { ...base.a.card, dueAt: "invalid" } } })).toEqual({});
  expect(parseProgress(JSON.parse('{"__proto__": {"card": null}}'))).toEqual({});
});
