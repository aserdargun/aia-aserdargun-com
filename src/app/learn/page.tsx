import Link from "next/link";
import { Suspense } from "react";
import { LearnCatalog } from "@/components/learn/learn-catalog";
import { LearnStatsBanner } from "@/components/learn/learn-stats-banner";

export function generateMetadata() {
  return {
    alternates: { canonical: "/learn" },
    title: "AI/ML Concept Learner — AI Ecosystem Atlas",
    description:
      "Explore AI/ML concepts with primary references, explanatory diagrams, quizzes, and local spaced-repetition reviews.",
  };
}

export default function LearnPage() {
  return (
    <div className="learn-page">
      <header className="learn-page__hero">
        <p className="learn-page__eyebrow">Learn · AI/ML</p>
        <h1>Understand AI, one concept at a time.</h1>
        <p className="learn-page__lede">
          Explore 15 concepts behind modern language models with primary
          references, explanatory diagrams, and self-check quizzes. Diagrams
          simplify the systems they describe. Reviews use an SM-2 scheduling
          adaptation; progress stays in this browser and is not synced across devices.
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
