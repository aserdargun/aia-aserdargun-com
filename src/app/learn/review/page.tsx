import Link from "next/link";
import { ReviewRunner } from "@/components/learn/review-runner";
import { learnDataset } from "@/data/learn";

export function generateMetadata() {
  return {
    title: "Review — Learn · AI Ecosystem Atlas",
    description:
      "Today\u2019s spaced-repetition queue for AI/ML concepts. SM-2 picks what is due, you grade yourself.",
  };
}

export default function ReviewPage() {
  return (
    <div className="learn-review-page">
      <header className="learn-page__hero">
        <p className="learn-page__eyebrow">Learn · Review</p>
        <h1>Today&rsquo;s spaced-repetition queue</h1>
        <p className="learn-page__lede">
          The SM-2 scheduler picks concepts whose interval has elapsed, plus
          any brand-new cards you have not seen yet. After you grade yourself,
          the next review date is recomputed automatically.
        </p>
        <div className="learn-page__actions">
          <Link href="/learn" className="learn-cta learn-cta--ghost">
            Back to catalog
          </Link>
        </div>
      </header>
      <ReviewRunner dataset={learnDataset} />
    </div>
  );
}
