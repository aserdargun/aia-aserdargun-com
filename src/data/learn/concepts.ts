import { foundationConcepts } from "@/data/learn/concepts.part1";
import { architectureConcepts } from "@/data/learn/concepts.part2";
import { trainingAndRetrievalConcepts } from "@/data/learn/concepts.part3";
import { agentsAndOpsConcepts } from "@/data/learn/concepts.part4";
import type { Concept } from "@/data/learn/schema";

/**
 * Flat list of every concept in the Learn module. Ordering inside each
 * part is intentional and the validation step enforces uniqueness of
 * `order` per category.
 */
export const concepts: Concept[] = [
  ...foundationConcepts,
  ...architectureConcepts,
  ...trainingAndRetrievalConcepts,
  ...agentsAndOpsConcepts,
];
