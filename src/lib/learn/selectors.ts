import type { Concept, ConceptCategory, LearnDataset } from "@/data/learn/schema";

/**
 * Pure selectors over the Learn dataset. All functions are deterministic
 * and run identically on the server (for static export) and the client.
 */

export interface ConceptWithCategory {
  concept: Concept;
  category: ConceptCategory;
}

export function getConceptById(
  dataset: LearnDataset,
  id: string,
): Concept | undefined {
  return dataset.concepts.find((c) => c.id === id);
}

export function getCategoryById(
  dataset: LearnDataset,
  id: string,
): ConceptCategory | undefined {
  return dataset.categories.find((c) => c.id === id);
}

export function listConceptsByCategory(
  dataset: LearnDataset,
): Array<{ category: ConceptCategory; concepts: Concept[] }> {
  return dataset.categories.map((category) => ({
    category,
    concepts: dataset.concepts
      .filter((c) => c.categoryId === category.id)
      .sort((a, b) => a.order - b.order),
  }));
}

export interface SearchHit {
  concept: Concept;
  category: ConceptCategory;
  score: number;
}

export function searchConcepts(
  dataset: LearnDataset,
  query: string,
  difficulty?: Concept["difficulty"] | "all",
  categoryId?: string | "all",
): ConceptWithCategory[] {
  const q = query.trim().toLowerCase();
  const results: SearchHit[] = [];

  for (const concept of dataset.concepts) {
    if (difficulty && difficulty !== "all" && concept.difficulty !== difficulty) {
      continue;
    }
    if (categoryId && categoryId !== "all" && concept.categoryId !== categoryId) {
      continue;
    }
    let score = 0;
    if (q.length === 0) {
      score = 1;
    } else {
      const haystack = [
        concept.title,
        concept.summary,
        concept.explanation,
        ...concept.tags,
        ...concept.keyTakeaways,
      ]
        .join(" ")
        .toLowerCase();
      if (haystack.includes(q)) {
        score = 3;
        if (concept.title.toLowerCase().includes(q)) score += 4;
        if (concept.tags.some((t) => t.toLowerCase().includes(q))) score += 2;
      } else {
        // tolerate token-level matches
        const tokens = q.split(/\s+/).filter(Boolean);
        const matches = tokens.filter((t) => haystack.includes(t)).length;
        if (matches > 0) {
          score = 0.5 + matches * 0.5;
        }
      }
    }
    if (score > 0) {
      const category = getCategoryById(dataset, concept.categoryId);
      if (category) {
        results.push({ concept, category, score });
      }
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.map((hit) => ({ concept: hit.concept, category: hit.category }));
}

export function getRelatedConcepts(
  dataset: LearnDataset,
  conceptId: string,
): Array<{ relation: Concept["relations"][number]; concept: Concept }> {
  const concept = getConceptById(dataset, conceptId);
  if (!concept) return [];
  const out: Array<{ relation: Concept["relations"][number]; concept: Concept }> = [];
  for (const rel of concept.relations) {
    const target = getConceptById(dataset, rel.targetId);
    if (target) {
      out.push({ relation: rel, concept: target });
    }
  }
  return out;
}

export function getPrerequisiteChain(
  dataset: LearnDataset,
  conceptId: string,
): Concept[] {
  const visited = new Set<string>();
  const out: Concept[] = [];
  const stack = [conceptId];
  while (stack.length > 0) {
    const id = stack.pop();
    if (!id || visited.has(id)) continue;
    visited.add(id);
    const concept = getConceptById(dataset, id);
    if (!concept) continue;
    for (const rel of concept.relations) {
      if (rel.kind === "prerequisite" && !visited.has(rel.targetId)) {
        stack.push(rel.targetId);
      }
    }
    out.push(concept);
  }
  return out;
}

export function getAdjacentConcepts(
  dataset: LearnDataset,
  conceptId: string,
): { previous: Concept | null; next: Concept | null } {
  const sorted = [...dataset.concepts].sort((a, b) => {
    if (a.categoryId === b.categoryId) return a.order - b.order;
    const aCat = getCategoryById(dataset, a.categoryId);
    const bCat = getCategoryById(dataset, b.categoryId);
    return (aCat?.order ?? 0) - (bCat?.order ?? 0);
  });
  const idx = sorted.findIndex((c) => c.id === conceptId);
  if (idx === -1) return { previous: null, next: null };
  return {
    previous: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}
