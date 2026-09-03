import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { learnDataset } from "@/data/learn";
import { ConceptCard } from "@/components/learn/concept-card";
import { getCategoryById } from "@/lib/learn/selectors";

describe("ConceptCard", () => {
  it("renders the title, summary, and a link to the concept page", () => {
    const concept = learnDataset.concepts[0];
    const category = getCategoryById(learnDataset, concept.categoryId);
    expect(category).toBeDefined();
    render(
      <ConceptCard
        concept={concept}
        category={category!}
        dataset={learnDataset}
      />,
    );
    expect(screen.getByText(concept.title)).toBeInTheDocument();
    expect(screen.getByText(concept.summary)).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /Open concept/i });
    expect(link.getAttribute("href")).toBe(`/learn/${concept.id}`);
  });

  it("includes a difficulty pill", () => {
    const concept = learnDataset.concepts[0];
    const category = getCategoryById(learnDataset, concept.categoryId);
    render(
      <ConceptCard
        concept={concept}
        category={category!}
        dataset={learnDataset}
      />,
    );
    expect(
      screen.getByText(concept.difficulty, { exact: false }),
    ).toBeInTheDocument();
  });
});
