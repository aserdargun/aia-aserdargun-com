import Link from "next/link";
import { StatsPanel } from "@/components/learn/stats-panel";

export function generateMetadata() {
  return {
    title: "Progress — Learn · AI Ecosystem Atlas",
    description:
      "How many AI/ML concepts you have reviewed, how many are due, and your quiz accuracy.",
  };
}

export default function StatsPage() {
  return (
    <div className="learn-stats-page">
      <header className="learn-page__hero">
        <p className="learn-page__eyebrow">Learn · Progress</p>
        <h1>What you have learned so far</h1>
        <p className="learn-page__lede">
          Your progress is stored only in this browser. Reset to wipe local
          state without affecting the rest of the atlas.
        </p>
        <div className="learn-page__actions">
          <Link href="/learn" className="learn-cta learn-cta--ghost">
            Browse concepts
          </Link>
          <Link href="/learn/review" className="learn-cta learn-cta--primary">
            Open today&rsquo;s review
          </Link>
        </div>
      </header>
      <StatsPanel />
    </div>
  );
}
