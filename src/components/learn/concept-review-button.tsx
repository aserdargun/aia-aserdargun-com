"use client";

import { useState } from "react";
import { useProgress } from "@/components/learn/progress-provider";
import {
  reviewQualityLabels,
  type ReviewQuality,
} from "@/lib/learn/spaced-repetition";

const reviewQualities: ReviewQuality[] = [0, 3, 4, 5];

export function ConceptReviewButton({ conceptId }: { conceptId: string }) {
  const { ready, progress, review } = useProgress();
  const [expanded, setExpanded] = useState(false);
  const [lastGrade, setLastGrade] = useState<ReviewQuality | null>(null);

  if (!ready) {
    return (
      <p className="learn-grade__status" role="status">
        Preparing spaced-repetition scheduler…
      </p>
    );
  }

  const card = progress[conceptId]?.card;

  function grade(quality: ReviewQuality) {
    review(conceptId, quality);
    setLastGrade(quality);
    setExpanded(false);
  }

  return (
    <div className="learn-grade">
      <div className="learn-grade__row">
        <button
          type="button"
          className="learn-grade__primary"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          How well did you recall this?
        </button>
        {card ? (
          <span className="learn-grade__meta">
            {card.repetitions === 0 && card.lastReviewedAt === null
              ? "Not reviewed yet"
              : `Rep ${card.repetitions} · interval ${card.intervalDays}d · EF ${card.easinessFactor.toFixed(2)}`}
          </span>
        ) : null}
      </div>
      {expanded ? (
        <div className="learn-grade__buttons" role="group" aria-label="Recall quality">
          {reviewQualities.map((q) => (
            <button
              key={q}
              type="button"
              className={`learn-grade__btn learn-grade__btn--q${q}`}
              onClick={() => grade(q)}
            >
              {reviewQualityLabels[q]}
            </button>
          ))}
        </div>
      ) : null}
      {lastGrade !== null ? (
        <p className="learn-grade__status" role="status">
          Saved as <strong>{reviewQualityLabels[lastGrade]}</strong>. Next review scheduled.
        </p>
      ) : null}
    </div>
  );
}
