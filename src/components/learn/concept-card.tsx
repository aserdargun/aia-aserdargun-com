import Link from "next/link";
import type { Concept, ConceptCategory } from "@/data/learn/schema";
import { getCategoryById } from "@/lib/learn/selectors";
import type { LearnDataset } from "@/data/learn/schema";

const difficultyLabels: Record<Concept["difficulty"], string> = {
  intro: "Intro",
  core: "Core",
  advanced: "Advanced",
};

export function ConceptCard({
  concept,
  category,
  dataset,
}: {
  concept: Concept;
  category: ConceptCategory;
  dataset: LearnDataset;
}) {
  const cat = category ?? getCategoryById(dataset, concept.categoryId);
  return (
    <Link
      href={`/learn/${concept.id}`}
      className="learn-card"
      aria-label={`Open concept: ${concept.title}`}
    >
      <div className="learn-card__meta">
        <span className="learn-pill learn-pill--category">{cat?.shortName ?? concept.categoryId}</span>
        <span className={`learn-pill learn-pill--${concept.difficulty}`}>
          {difficultyLabels[concept.difficulty]}
        </span>
        <span className="learn-card__time">{concept.estimatedMinutes} min</span>
      </div>
      <h3 className="learn-card__title">{concept.title}</h3>
      <p className="learn-card__summary">{concept.summary}</p>
      <ul className="learn-card__tags" aria-label="Tags">
        {concept.tags.slice(0, 4).map((t) => (
          <li key={t} className="learn-tag">
            #{t}
          </li>
        ))}
      </ul>
    </Link>
  );
}
