import Link from "next/link";
import { notFound } from "next/navigation";
import { learnDataset } from "@/data/learn";
import {
  getAdjacentConcepts,
  getCategoryById,
  getConceptById,
  getRelatedConcepts,
} from "@/lib/learn/selectors";
import { DiagramBlock } from "@/components/learn/diagram-block";
import { QuizRunner } from "@/components/learn/quiz-runner";
import { ConceptReviewButton } from "@/components/learn/concept-review-button";
import { RichText } from "@/components/learn/rich-text";
import type { Concept } from "@/data/learn/schema";

export function generateStaticParams() {
  return learnDataset.concepts.map((c) => ({ slug: c.id }));
}

interface ConceptPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ConceptPageProps) {
  const { slug } = await params;
  const concept = getConceptById(learnDataset, slug);
  if (!concept) return { title: "Concept not found — Learn" };
  return {
    title: `${concept.title} — Learn · AI Ecosystem Atlas`,
    description: concept.summary,
  };
}

const relationLabel: Record<Concept["relations"][number]["kind"], string> = {
  prerequisite: "Prerequisite",
  related: "Related",
  deepens: "Deepens",
};

export default async function ConceptPage({ params }: ConceptPageProps) {
  const { slug } = await params;
  const concept = getConceptById(learnDataset, slug);
  if (!concept) {
    notFound();
  }
  const category = getCategoryById(learnDataset, concept.categoryId);
  const related = getRelatedConcepts(learnDataset, concept.id);
  const { previous, next } = getAdjacentConcepts(learnDataset, concept.id);
  const referenceRecords = concept.referenceIds
    .map((id) => learnDataset.references.find((r) => r.id === id))
    .filter((r): r is (typeof learnDataset.references)[number] => Boolean(r));

  return (
    <article className="learn-concept">
      <nav className="learn-breadcrumb" aria-label="Breadcrumb">
        <Link href="/learn">Learn</Link>
        <span aria-hidden="true">›</span>
        {category ? (
          <>
            <Link href={`/learn?category=${category.id}`}>{category.name}</Link>
            <span aria-hidden="true">›</span>
          </>
        ) : null}
        <span aria-current="page">{concept.title}</span>
      </nav>

      <header className="learn-concept__header">
        <div className="learn-concept__meta">
          {category ? (
            <Link href={`/learn?category=${category.id}`} className="learn-pill learn-pill--category">
              {category.shortName}
            </Link>
          ) : null}
          <span className={`learn-pill learn-pill--${concept.difficulty}`}>
            {concept.difficulty}
          </span>
          <span className="learn-concept__time">{concept.estimatedMinutes} min read</span>
        </div>
        <h1>{concept.title}</h1>
        <p className="learn-concept__summary">{concept.summary}</p>
        <ConceptReviewButton conceptId={concept.id} />
      </header>

      <section className="learn-concept__body" aria-label="Explanation">
        <RichText content={concept.explanation} />
      </section>

      {concept.example ? (
        <aside className="learn-example" aria-label="Worked example">
          <h2>Worked example</h2>
          <h3>{concept.example.title}</h3>
          <RichText content={concept.example.body} />
        </aside>
      ) : null}

      {concept.diagrams.length > 0 ? (
        <section className="learn-concept__diagrams" aria-label="Diagrams">
          {concept.diagrams.map((d) => (
            <DiagramBlock key={d.id} diagram={d} />
          ))}
        </section>
      ) : null}

      <section className="learn-concept__takeaways" aria-label="Key takeaways">
        <h2>Key takeaways</h2>
        <ul>
          {concept.keyTakeaways.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="learn-concept__quiz" aria-label="Self-check quiz">
        <QuizRunner conceptId={concept.id} items={concept.quiz} />
      </section>

      {related.length > 0 ? (
        <section className="learn-concept__related" aria-label="Related concepts">
          <h2>Related concepts</h2>
          <ul>
            {related.map(({ relation, concept: c }) => (
              <li key={c.id}>
                <span className="learn-pill learn-pill--category">
                  {relationLabel[relation.kind]}
                </span>
                <Link href={`/learn/${c.id}`}>{c.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="learn-concept__references" aria-label="References">
        <h2>References</h2>
        <ol>
          {referenceRecords.map((r) => (
            <li key={r.id}>
              <a href={r.url} target="_blank" rel="noreferrer">
                {r.title}
              </a>
              <span className="learn-concept__ref-meta"> — {r.publisher}</span>
              {r.note ? <p className="learn-concept__ref-note">{r.note}</p> : null}
            </li>
          ))}
        </ol>
        <p className="learn-concept__verified">
          Last verified {concept.verifiedAt}.
        </p>
      </section>

      <nav className="learn-concept__pager" aria-label="Concept navigation">
        {previous ? (
          <Link href={`/learn/${previous.id}`} className="learn-pager__link learn-pager__link--prev">
            <span>← Previous</span>
            <strong>{previous.title}</strong>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/learn/${next.id}`} className="learn-pager__link learn-pager__link--next">
            <span>Next →</span>
            <strong>{next.title}</strong>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
