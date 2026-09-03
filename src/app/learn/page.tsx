import Link from "next/link";
import { learnDataset } from "@/data/learn";
import { listConceptsByCategory, searchConcepts } from "@/lib/learn/selectors";
import { ConceptCard } from "@/components/learn/concept-card";
import { LearnStatsBanner } from "@/components/learn/learn-stats-banner";

interface LearnPageProps {
  searchParams: { q?: string; difficulty?: string; category?: string };
}

export function generateMetadata() {
  return {
    title: "AI/ML Concept Learner — AI Ecosystem Atlas",
    description:
      "A university-level, visual, spaced-repetition learning layer for AI/ML concepts, grounded in first-party sources.",
  };
}

export default function LearnPage({ searchParams }: LearnPageProps) {
  const q = searchParams.q ?? "";
  const difficulty =
    searchParams.difficulty && searchParams.difficulty !== "all"
      ? (searchParams.difficulty as "intro" | "core" | "advanced")
      : "all";
  const categoryId = searchParams.category ?? "all";

  const filtered = searchConcepts(learnDataset, q, difficulty, categoryId);
  const grouped = listConceptsByCategory(learnDataset);
  const allCategories = learnDataset.categories;
  const difficulties: Array<"intro" | "core" | "advanced"> = ["intro", "core", "advanced"];

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

      <form className="learn-filters" method="get" action="/learn">
        <label className="learn-filters__field">
          <span>Search</span>
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="e.g. attention, RAG, tokenization"
            autoComplete="off"
          />
        </label>
        <label className="learn-filters__field">
          <span>Difficulty</span>
          <select name="difficulty" defaultValue={difficulty}>
            <option value="all">All levels</option>
            {difficulties.map((d) => (
              <option key={d} value={d}>
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </option>
            ))}
          </select>
        </label>
        <label className="learn-filters__field">
          <span>Category</span>
          <select name="category" defaultValue={categoryId}>
            <option value="all">All categories</option>
            {allCategories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="learn-filters__submit">
          Apply
        </button>
      </form>

      {filtered.length === 0 ? (
        <div className="learn-empty">
          <h2>No concepts match your filters.</h2>
          <p>Try clearing the search or picking a different category.</p>
          <Link href="/learn" className="learn-cta learn-cta--ghost">
            Clear filters
          </Link>
        </div>
      ) : (
        <div className="learn-results">
          {q || difficulty !== "all" || categoryId !== "all" ? (
            <p className="learn-results__count">
              {filtered.length} match{filtered.length === 1 ? "" : "es"}
            </p>
          ) : (
            grouped.map(({ category, concepts }) =>
              concepts.length === 0 ? null : (
                <section key={category.id} className="learn-section">
                  <header className="learn-section__header">
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                  </header>
                  <div className="learn-grid">
                    {concepts.map((concept) => (
                      <ConceptCard
                        key={concept.id}
                        concept={concept}
                        category={category}
                        dataset={learnDataset}
                      />
                    ))}
                  </div>
                </section>
              ),
            )
          )}
          {q || difficulty !== "all" || categoryId !== "all" ? (
            <div className="learn-grid">
              {filtered.map(({ concept, category }) => (
                <ConceptCard
                  key={concept.id}
                  concept={concept}
                  category={category}
                  dataset={learnDataset}
                />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
