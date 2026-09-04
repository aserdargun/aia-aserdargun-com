import Link from "next/link";
import { Suspense } from "react";
import { LearnCatalog } from "@/components/learn/learn-catalog";
import { LearnStatsBanner } from "@/components/learn/learn-stats-banner";

export function generateMetadata() {
  return {
    title: "AI/ML Concept Learner — AI Ecosystem Atlas",
    description:
      "A university-level, visual, spaced-repetition learning layer for AI/ML concepts, grounded in first-party sources.",
  };
}

export default function LearnPage() {
  return (
    <div className="learn-page">
      <header className="learn-page__hero">
        <p className="learn-page__eyebrow">Learn · AI/ML</p>
        <h1>Understand AI, one concept at a time.</h1>
        <p className="learn-page__lede">
          A university-level reading list for the working concepts behind
          modern language models. Every card is grounded in first-party
          sources, paired with a visual diagram, and scheduled with a
          proven spaced-repetition algorithm (SM-2).
        </p>

        <div className="learn-page__actions">
          <Link href="/learn/review" className="learn-cta learn-cta--primary">
            Start today&rsquo;s review
          </Link>
          <Link href="/learn/stats" className="learn-cta learn-cta--ghost">
            See progress
          </Link>
        </div>
      </header>

      <LearnStatsBanner />

      <Suspense
        fallback={
          <div className="learn-empty" role="status">
            <p>Loading the concept catalog…</p>
          </div>
        }
      >
        <LearnCatalog />
      </Suspense>
    </div>
  );
}
