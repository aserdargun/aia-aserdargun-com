import { describe, expect, it } from "vitest";
import { learnDataset } from "@/data/learn";
import {
  getAdjacentConcepts,
  getCategoryById,
  getConceptById,
  getPrerequisiteChain,
  getRelatedConcepts,
  listConceptsByCategory,
  searchConcepts,
} from "@/lib/learn/selectors";

describe("learn selectors", () => {
  it("finds concepts by id", () => {
    expect(getConceptById(learnDataset, "llm")?.title).toMatch(/Large Language Model/);
    expect(getConceptById(learnDataset, "missing")).toBeUndefined();
  });

  it("finds categories by id", () => {
    expect(getCategoryById(learnDataset, "agents")?.name).toBe("Agents & Tool Use");
  });

  it("groups concepts by category, ordered", () => {
    const grouped = listConceptsByCategory(learnDataset);
    expect(grouped[0].category.id).toBe("foundations");
    expect(grouped[0].concepts[0].id).toBe("llm");
    for (const bucket of grouped) {
      for (let i = 1; i < bucket.concepts.length; i += 1) {
        expect(bucket.concepts[i - 1].order).toBeLessThan(bucket.concepts[i].order);
      }
    }
  });

  it("searches by title, summary, and tags", () => {
    const results = searchConcepts(learnDataset, "embedding");
    expect(results.length).toBeGreaterThan(0);
    expect(results.map((r) => r.concept.id)).toContain("embeddings");
  });

  it("filters by difficulty", () => {
    const intro = searchConcepts(learnDataset, "", "intro");
    for (const r of intro) {
      expect(r.concept.difficulty).toBe("intro");
    }
  });

  it("filters by category id", () => {
    const results = searchConcepts(learnDataset, "", "all", "architecture");
    for (const r of results) {
      expect(r.concept.categoryId).toBe("architecture");
    }
  });

  it("returns related concepts only for declared relations", () => {
    const related = getRelatedConcepts(learnDataset, "self-attention");
    for (const entry of related) {
      expect(["prerequisite", "related", "deepens"]).toContain(entry.relation.kind);
    }
  });

  it("walks prerequisite chains without cycles", () => {
    const chain = getPrerequisiteChain(learnDataset, "mcp");
    expect(chain.length).toBeGreaterThan(0);
    expect(chain.find((c) => c.id === "mcp")).toBeTruthy();
  });

  it("returns previous and next concept across categories", () => {
    const llm = getConceptById(learnDataset, "llm");
    const next = getAdjacentConcepts(learnDataset, "llm");
    expect(next.previous).toBeNull();
    expect(next.next?.id).not.toBe("llm");
  });
});
