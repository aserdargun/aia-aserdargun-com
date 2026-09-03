import { conceptCategories } from "@/data/learn/categories";
import { concepts } from "@/data/learn/concepts";
import { references } from "@/data/learn/references";
import type { LearnDataset } from "@/data/learn/schema";
import { parseLearnDataset } from "@/data/learn/validation";

const rawDataset = {
  categories: conceptCategories,
  concepts,
  references,
} satisfies LearnDataset;

export const learnDataset: LearnDataset = parseLearnDataset(
  rawDataset,
  new Date(),
);
