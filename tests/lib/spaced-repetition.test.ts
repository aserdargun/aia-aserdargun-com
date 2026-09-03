import { describe, expect, it } from "vitest";
import {
  daysUntilDue,
  initialCardState,
  isDue,
  reviewCard,
} from "@/lib/learn/spaced-repetition";

const now = new Date("2026-08-19T12:00:00Z");

describe("spaced-repetition / SM-2", () => {
  it("returns a fresh card from initialCardState", () => {
    const card = initialCardState(now);
    expect(card.repetitions).toBe(0);
    expect(card.easinessFactor).toBe(2.5);
    expect(card.intervalDays).toBe(0);
    expect(card.lastReviewedAt).toBeNull();
    expect(new Date(card.dueAt).getTime()).toBe(now.getTime());
  });

  it("resets repetitions and schedules tomorrow on a 'Again' (q=0) review", () => {
    const card = reviewCard(initialCardState(now), 4, now);
    const good = reviewCard(card, 4, now);
    const failed = reviewCard(good, 0, now);
    expect(failed.repetitions).toBe(0);
    expect(failed.intervalDays).toBe(1);
    expect(daysUntilDue(failed, now)).toBeGreaterThanOrEqual(0);
  });

  it("uses a 1-day then 6-day ramp on Good (q=4) reviews", () => {
    const first = reviewCard(initialCardState(now), 4, now);
    expect(first.intervalDays).toBe(1);
    const second = reviewCard(first, 4, now);
    expect(second.intervalDays).toBe(6);
    const third = reviewCard(second, 4, now);
    expect(third.intervalDays).toBeGreaterThanOrEqual(6);
  });

  it("keeps easiness above the 1.3 floor after repeated failures", () => {
    let card = initialCardState(now);
    for (let i = 0; i < 20; i += 1) {
      card = reviewCard(card, 0, now);
    }
    expect(card.easinessFactor).toBeGreaterThanOrEqual(1.3);
  });

  it("raises easiness on Easy (q=5) reviews", () => {
    const card = initialCardState(now);
    const easy = reviewCard(card, 5, now);
    expect(easy.easinessFactor).toBeGreaterThan(2.5);
  });

  it("isDue returns true when dueAt is in the past", () => {
    const card = {
      ...initialCardState(now),
      dueAt: new Date(now.getTime() - 1000).toISOString(),
    };
    expect(isDue(card, now)).toBe(true);
  });

  it("isDue returns false for future cards", () => {
    const card = {
      ...initialCardState(now),
      dueAt: new Date(now.getTime() + 60_000).toISOString(),
    };
    expect(isDue(card, now)).toBe(false);
  });

  it("daysUntilDue rounds up to the next day", () => {
    const card = {
      ...initialCardState(now),
      dueAt: new Date(now.getTime() + 12 * 60 * 60 * 1000).toISOString(),
    };
    expect(daysUntilDue(card, now)).toBe(1);
  });
});
