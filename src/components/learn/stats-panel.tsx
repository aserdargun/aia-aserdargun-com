"use client";

import { useProgress } from "@/components/learn/progress-provider";

export function StatsPanel() {
  const { summary, ready, reset } = useProgress();

  if (!ready) {
    return <p className="learn-stats__loading">Loading your progress…</p>;
  }

  const accuracyPct = Math.round(summary.accuracy * 100);
  const reviewedPct =
    summary.totalConcepts > 0
      ? Math.round(((summary.reviewed) / summary.totalConcepts) * 100)
      : 0;

  return (
    <div className="learn-stats">
      <h2 className="learn-stats__title">Your learning journey</h2>
      <p className="learn-stats__intro">
        Progress lives in your browser. Resetting clears local data only.
      </p>

      <div className="learn-stats__grid">
        <article className="learn-stats__cell">
          <h3>Reviewed</h3>
          <p className="learn-stats__big">
            {summary.reviewed} <span>/ {summary.totalConcepts}</span>
          </p>
          <div className="learn-bar" aria-hidden="true">
            <div className="learn-bar__fill" style={{ width: `${reviewedPct}%` }} />
          </div>
          <p className="learn-stats__small">{reviewedPct}% of concepts touched</p>
        </article>

        <article className="learn-stats__cell">
          <h3>Due now</h3>
          <p className="learn-stats__big">{summary.due}</p>
          <p className="learn-stats__small">
            {summary.newCount} brand new &middot; {summary.learning} learning &middot; {summary.mastered} mastered
          </p>
        </article>

        <article className="learn-stats__cell">
          <h3>Quiz accuracy</h3>
          <p className="learn-stats__big">
            {accuracyPct}<span>%</span>
          </p>
          <p className="learn-stats__small">
            {summary.totalQuizCorrect} / {summary.totalQuizAnswered} answers
          </p>
        </article>

        <article className="learn-stats__cell">
          <h3>Average easiness</h3>
          <p className="learn-stats__big">{summary.averageEasiness.toFixed(2)}</p>
          <p className="learn-stats__small">SM-2 easiness factor across cards (floor 1.3).</p>
        </article>
      </div>

      <button type="button" className="learn-stats__reset" onClick={reset}>
        Reset all progress
      </button>
    </div>
  );
}
