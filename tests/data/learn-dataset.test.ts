import { describe, expect, it } from "vitest";
import { learnDataset } from "@/data/learn";
import {
  requiredConceptCategoryIds,
  type ConceptCategory,
} from "@/data/learn/schema";

describe("learn dataset integrity", () => {
  it("has the expected number of concepts and references", () => {
    expect(learnDataset.concepts.length).toBe(15);
    expect(learnDataset.references.length).toBeGreaterThanOrEqual(10);
  });

  it("preserves the required category taxonomy", () => {
    expect(learnDataset.categories.length).toBe(requiredConceptCategoryIds.length);
    learnDataset.categories.forEach((category: ConceptCategory, index: number) => {
      expect(category.id).toBe(requiredConceptCategoryIds[index]);
      expect(category.order).toBe(index + 1);
    });
  });

  it("every concept has a quiz with at least one correct option", () => {
    for (const concept of learnDataset.concepts) {
      expect(concept.quiz.length).toBeGreaterThan(0);
      for (const item of concept.quiz) {
        expect(item.options.some((o) => o.correct)).toBe(true);
      }
    }
  });

  it("every concept has at least one verified reference", () => {
    for (const concept of learnDataset.concepts) {
      expect(concept.referenceIds.length).toBeGreaterThan(0);
    }
  });

  it("diagram SVGs are well-formed and contain no scripts", () => {
    for (const concept of learnDataset.concepts) {
      for (const diagram of concept.diagrams) {
        expect(diagram.svg.trim().startsWith("<svg")).toBe(true);
        expect(/<\s*script/i.test(diagram.svg)).toBe(false);
        expect(/on\w+\s*=/i.test(diagram.svg)).toBe(false);
      }
    }
  });

  it("every concept's relations point to a known concept", () => {
    const ids = new Set(learnDataset.concepts.map((c) => c.id));
    for (const concept of learnDataset.concepts) {
      for (const relation of concept.relations) {
        expect(ids.has(relation.targetId)).toBe(true);
      }
    }
  });
});
