import type { Reference } from "@/data/learn/schema";

/**
 * Primary, first-party references that ground every factual claim in the
 * Learn module. All URLs are HTTPS; concept records carry their own review dates.
 */
export const references = [
  {
    id: "vaswani-2017-attention-is-all-you-need",
    title: "Attention Is All You Need",
    publisher: "NeurIPS / arXiv",
    url: "https://arxiv.org/abs/1706.03762",
    note: "Original transformer paper introducing scaled dot-product attention.",
  },
  {
    id: "anthropic-claude-constitutional-ai",
    title: "Constitutional AI: Harmlessness from AI Feedback",
    publisher: "Anthropic",
    url: "https://www.anthropic.com/research/constitutional-ai",
    note: "RLHF alternative grounded in explicit principles.",
  },
  {
    id: "anthropic-mcp",
    title: "Model Context Protocol — Introduction",
    publisher: "Anthropic",
    url: "https://modelcontextprotocol.io/introduction",
    note: "Specification for connecting models to tools and data sources.",
  },
  {
    id: "mcp-transports",
    title: "Model Context Protocol — Transports",
    publisher: "Model Context Protocol",
    url: "https://modelcontextprotocol.io/specification/draft/basic/transports",
    note: "Current standard transports and HTTP+SSE compatibility guidance.",
  },
  {
    id: "openai-rag-overview",
    title: "Retrieval Augmented Generation (RAG)",
    publisher: "OpenAI",
    url: "https://help.openai.com/en/articles/8868588-best-practices-for-fine-tuning-and-retrieval-augmented-generation",
    note: "Vendor-neutral summary of RAG patterns.",
  },
  {
    id: "openai-gpt-4o-system-card",
    title: "GPT-4o System Card",
    publisher: "OpenAI",
    url: "https://openai.com/index/gpt-4o-system-card",
    note: "Documents modalities, training, and safety evaluation.",
  },
  {
    id: "openai-tokenizer",
    title: "How tokens work in the OpenAI API",
    publisher: "OpenAI",
    url: "https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them",
    note: "Tokenization and counting reference.",
  },
  {
    id: "huggingface-bpe",
    title: "Byte-Pair Encoding tokenization",
    publisher: "Hugging Face",
    url: "https://huggingface.co/learn/nlp-course/chapter6/5",
    note: "Walkthrough of BPE algorithm and subword merges.",
  },
  {
    id: "deeplearning-ai-embeddings",
    title: "What Are Vector Embeddings?",
    publisher: "DeepLearning.AI",
    url: "https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/",
    note: "Conceptual intro to embeddings and similarity search.",
  },
  {
    id: "chroma-vector-db",
    title: "Chroma — What is a Vector Database?",
    publisher: "Chroma",
    url: "https://docs.trychroma.com/",
    note: "Open-source vector database reference.",
  },
  {
    id: "anthropic-prompt-engineering",
    title: "Prompt Engineering Overview",
    publisher: "Anthropic",
    url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
    note: "Techniques for structuring prompts and tools.",
  },
  {
    id: "openai-function-calling",
    title: "Function Calling Guide",
    publisher: "OpenAI",
    url: "https://platform.openai.com/docs/guides/function-calling",
    note: "Tool-use protocol for GPT models.",
  },
  {
    id: "anthropic-building-effective-agents",
    title: "Building Effective Agents",
    publisher: "Anthropic",
    url: "https://www.anthropic.com/research/building-effective-agents",
    note: "Patterns for orchestrators, sub-agents, and tool loops.",
  },
  {
    id: "wikipedia-hallucination",
    title: "Hallucination (artificial intelligence)",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)",
    note: "Survey of hallucination types and mitigations.",
  },
  {
    id: "wikipedia-mixture-of-experts",
    title: "Mixture of experts",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Mixture_of_experts",
    note: "Sparse expert routing in modern LLMs.",
  },
  {
    id: "anthropic-claude-temperature",
    title: "Sampling parameters — temperature and top-p",
    publisher: "Anthropic",
    url: "https://docs.anthropic.com/en/docs/build-with-claude/sampling",
    note: "How sampling parameters change output distribution.",
  },
  {
    id: "rlhf-original",
    title: "Learning to Summarize from Human Feedback (Christiano et al.)",
    publisher: "OpenAI / arXiv",
    url: "https://arxiv.org/abs/2009.01325",
    note: "Foundational RLHF paper.",
  },
  {
    id: "openai-rlhf-explainer",
    title: "Reinforcement Learning from Human Feedback explained",
    publisher: "OpenAI",
    url: "https://openai.com/index/chatgpt-feedback-training/",
    note: "Plain-language overview of RLHF.",
  },
] satisfies Reference[];
