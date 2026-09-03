"use client";

import Link from "next/link";
import { useState } from "react";
import type { LearnDataset } from "@/data/learn/schema";
import { useProgress } from "@/components/learn/progress-provider";
import {
  isDue,
  reviewQualityLabels,
  type ReviewQuality,
} from "@/lib/learn/spaced-repetition";

const reviewQualities: ReviewQuality[] = [0, 3, 4, 5];

export function ReviewRunner({ dataset }: { dataset: LearnDataset }) {
  const { progress, summary, ready, review } = useProgress();
  const [completedToday, setCompletedToday] = useState<Set<string>>(new Set());

  if (!ready) {
    return (
      <p className="learn-review__status" role="status">
        Loading your progress…
      </p>
    );
  }

  const now = new Date();
  const dueConcepts = dataset.concepts.filter((c) => {
    if (completedToday.has(c.id)) return false;
    const entry = progress[c.id];
    if (!entry) return true;
    if (entry.card.repetitions === 0 && entry.card.lastReviewedAt === null) {
      return true;
    }
    return isDue(entry.card, now);
  });

  if (dueConcepts.length === 0) {
    return (
      <div className="learn-review__empty">
        <h3>You are all caught up.</h3>
        <p>
          {summary.totalConcepts - summary.reviewed === 0
            ? "Every concept has been seen at least once. Add a new concept or wait for tomorrow's review."
            : "No cards are due right now. Come back later, or pick a new concept to start."}
        </p>
        <Link href="/learn" className="learn-review__cta">
          Browse the catalog
        </Link>
      </div>
    );
  }

  function grade(conceptId: string, quality: ReviewQuality) {
    review(conceptId, quality);
    setCompletedToday((current) => {
      const next = new Set(current);
      next.add(conceptId);
      return next;
    });
  }

  return (
    <div className="learn-review">
      <p className="learn-review__status" role="status">
        <strong>{dueConcepts.length}</strong> card{dueConcepts.length === 1 ? "" : "s"} due right now.
      </p>
      <ol className="learn-review__list">
        {dueConcepts.map((concept) => (
          <li key={concept.id} className="learn-review__card">
            <div className="learn-review__meta">
              <Link href={`/learn/${concept.id}`} className="learn-review__title">
                {concept.title}
              </Link>
              <p className="learn-review__summary">{concept.summary}</p>
            </div>
            <div className="learn-review__actions" role="group" aria-label={`Grade ${concept.title}`}>
              {reviewQualities.map((q) => (
                <button
                  key={q}
                  type="button"
                  className={`learn-review__btn learn-review__btn--q${q}`}
                  onClick={() => grade(concept.id, q)}
                >
                  {reviewQualityLabels[q]}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
