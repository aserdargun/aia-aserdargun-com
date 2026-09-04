"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ConceptCard } from "@/components/learn/concept-card";
import { learnDataset } from "@/data/learn";
import { listConceptsByCategory, searchConcepts } from "@/lib/learn/selectors";

const difficulties = ["intro", "core", "advanced"] as const;

export function LearnCatalog() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const requestedDifficulty = searchParams.get("difficulty");
  const difficulty = difficulties.includes(
    requestedDifficulty as (typeof difficulties)[number],
  )
    ? (requestedDifficulty as (typeof difficulties)[number])
    : "all";
  const categoryId = searchParams.get("category") ?? "all";

  const filtered = searchConcepts(learnDataset, q, difficulty, categoryId);
  const grouped = listConceptsByCategory(learnDataset);
  const hasFilters = q || difficulty !== "all" || categoryId !== "all";

  return (
    <>
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
            {difficulties.map((value) => (
              <option key={value} value={value}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </option>
            ))}
          </select>
        </label>
        <label className="learn-filters__field">
          <span>Category</span>
          <select name="category" defaultValue={categoryId}>
            <option value="all">All categories</option>
            {learnDataset.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
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
          {hasFilters ? (
            <>
              <p className="learn-results__count">
                {filtered.length} match{filtered.length === 1 ? "" : "es"}
              </p>
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
            </>
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
        </div>
      )}
    </>
  );
}
