import type { ConceptCategory } from "@/data/learn/schema";

export const conceptCategories = [
  [
    "foundations",
    "Foundations",
    "Foundations",
    "Tokens, embeddings, and the language modeling objective that powers every modern LLM.",
  ],
  [
    "architecture",
    "Architecture",
    "Architecture",
    "Transformer blocks, attention, and the structural choices that shape model behavior.",
  ],
  [
    "training",
    "Training",
    "Training",
    "How models learn from data: pre-training, fine-tuning, alignment, and optimization trade-offs.",
  ],
  [
    "retrieval",
    "Retrieval & Memory",
    "Retrieval",
    "Retrieval-augmented generation, vector databases, and how external knowledge reaches the model.",
  ],
  [
    "agents",
    "Agents & Tool Use",
    "Agents",
    "Reasoning loops, tool calling, MCP, and the patterns that turn a model into an agent.",
  ],
  [
    "operations",
    "Operations & Quality",
    "Operations",
    "Sampling, evaluation, hallucination, and the levers that control production behavior.",
  ],
].map(([id, name, shortName, description], index) => ({
  id,
  name,
  shortName,
  description,
  order: index + 1,
})) satisfies ConceptCategory[];
