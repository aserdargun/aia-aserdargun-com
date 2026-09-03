"use client";

import Link from "next/link";
import { useProgress } from "@/components/learn/progress-provider";

export function LearnStatsBanner() {
  const { summary, ready } = useProgress();
  if (!ready) return null;
  return (
    <aside className="learn-banner" aria-label="Learning progress summary">
      <div className="learn-banner__cell">
        <span className="learn-banner__label">Due today</span>
        <strong className="learn-banner__big">{summary.due}</strong>
      </div>
      <div className="learn-banner__cell">
        <span className="learn-banner__label">Learning</span>
        <strong className="learn-banner__big">{summary.learning}</strong>
      </div>
      <div className="learn-banner__cell">
        <span className="learn-banner__label">Mastered</span>
        <strong className="learn-banner__big">{summary.mastered}</strong>
      </div>
      <div className="learn-banner__cell">
        <span className="learn-banner__label">Quiz accuracy</span>
        <strong className="learn-banner__big">
          {Math.round(summary.accuracy * 100)}%
        </strong>
      </div>
      <Link href="/learn/review" className="learn-banner__cta">
        Open review
      </Link>
    </aside>
  );
}
