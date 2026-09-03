import type { Concept } from "@/data/learn/schema";

/**
 * Foundation concepts: LLM, Tokenization, Embeddings.
 *
 * Each concept is a self-contained card. The `explanation` field uses
 * paragraph breaks (\n\n) to separate ideas; the renderer turns those into
 * real <p> elements. Diagrams are inline SVG so they remain crisp at any
 * density and ship in the bundle without extra HTTP requests.
 */

const transformerBlockDiagram = `
<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Transformer block diagram">
  <defs>
    <marker id="arrow-end" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#24211d" />
    </marker>
  </defs>
  <rect x="0" y="0" width="720" height="360" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">Transformer Block</text>
  <g font-family="Inter, sans-serif" font-size="12" fill="#24211d">
    <rect x="60"  y="80"  width="160" height="48" rx="8" fill="#fde2d6" stroke="#a73e1b" />
    <text x="140" y="110" text-anchor="middle" font-weight="700">Input tokens</text>

    <rect x="60"  y="160" width="160" height="48" rx="8" fill="#ede9e1" stroke="#bdb6aa" />
    <text x="140" y="180" text-anchor="middle">Token embedding</text>
    <text x="140" y="196" text-anchor="middle" font-size="10" fill="#666057">+ positional</text>

    <rect x="280" y="160" width="160" height="48" rx="8" fill="#e7f1ec" stroke="#168c6b" />
    <text x="360" y="180" text-anchor="middle" font-weight="700">Multi-head</text>
    <text x="360" y="196" text-anchor="middle" font-weight="700">self-attention</text>

    <rect x="280" y="240" width="160" height="48" rx="8" fill="#e7f1ec" stroke="#168c6b" />
    <text x="360" y="260" text-anchor="middle" font-weight="700">Feed-forward</text>
    <text x="360" y="276" text-anchor="middle" font-size="10" fill="#666057">MLP + GeLU</text>

    <rect x="500" y="200" width="160" height="48" rx="8" fill="#fde2d6" stroke="#a73e1b" />
    <text x="580" y="220" text-anchor="middle" font-weight="700">Output</text>
    <text x="580" y="236" text-anchor="middle" font-size="10" fill="#666057">next-token logits</text>
  </g>
  <g stroke="#24211d" stroke-width="1.5" fill="none" marker-end="url(#arrow-end)">
    <line x1="220" y1="184" x2="280" y2="184" />
    <line x1="360" y1="208" x2="360" y2="240" />
    <line x1="440" y1="184" x2="500" y2="216" />
  </g>
  <g font-family="Inter, sans-serif" font-size="10" fill="#666057">
    <text x="360" y="320" text-anchor="middle">Residual connections and layer normalization wrap each sub-layer (omitted for clarity).</text>
    <text x="360" y="340" text-anchor="middle">Stacking N blocks gives a deep transformer; weights are learned, not hard-coded.</text>
  </g>
</svg>
`.trim();

const tokenizationDiagram = `
<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tokenization pipeline">
  <rect x="0" y="0" width="720" height="280" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">Tokenization: text to IDs</text>
  <g font-family="ui-monospace, SFMono-Regular, monospace" font-size="13">
    <text x="40"  y="80" fill="#24211d">"ChatGPT öneriyor"</text>
    <text x="40"  y="110" fill="#666057">↓ BPE merges (UTF-8 bytes → subwords)</text>
    <g font-size="13">
      <rect x="40"  y="130" width="60"  height="34" rx="4" fill="#fde2d6" stroke="#a73e1b" />
      <text x="70"  y="152" text-anchor="middle" fill="#24211d">Chat</text>

      <rect x="106" y="130" width="40"  height="34" rx="4" fill="#fde2d6" stroke="#a73e1b" />
      <text x="126" y="152" text-anchor="middle" fill="#24211d">G</text>

      <rect x="152" y="130" width="50"  height="34" rx="4" fill="#fde2d6" stroke="#a73e1b" />
      <text x="177" y="152" text-anchor="middle" fill="#24211d">PT</text>

      <rect x="208" y="130" width="70"  height="34" rx="4" fill="#e7f1ec" stroke="#168c6b" />
      <text x="243" y="152" text-anchor="middle" fill="#24211d">▁öner</text>

      <rect x="284" y="130" width="60"  height="34" rx="4" fill="#e7f1ec" stroke="#168c6b" />
      <text x="314" y="152" text-anchor="middle" fill="#24211d">iyor</text>
    </g>
    <text x="40"  y="200" fill="#666057">↓ vocabulary lookup (integer IDs)</text>
    <g font-size="13" fill="#24211d">
      <text x="40"  y="234">[</text>
      <text x="58"  y="234" fill="#a73e1b">15496</text>
      <text x="115" y="234">,</text>
      <text x="130" y="234" fill="#a73e1b">38</text>
      <text x="160" y="234">,</text>
      <text x="175" y="234" fill="#a73e1b">2898</text>
      <text x="220" y="234">,</text>
      <text x="235" y="234" fill="#168c6b">247</text>
      <text x="265" y="234">,</text>
      <text x="280" y="234" fill="#168c6b">2958</text>
      <text x="320" y="234">]</text>
    </g>
  </g>
</svg>
`.trim();

const embeddingDiagram = `
<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Word embedding space">
  <rect x="0" y="0" width="720" height="320" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">Embedding space: meaning ≈ direction</text>
  <g stroke="#d9d4ca" stroke-width="1">
    <line x1="80" y1="280" x2="640" y2="280" />
    <line x1="80" y1="60"  x2="80"  y2="280" />
  </g>
  <g font-family="Inter, sans-serif" font-size="12" fill="#666057">
    <text x="78" y="74" text-anchor="end">↑</text>
    <text x="640" y="298" text-anchor="end">→</text>
  </g>
  <g font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#24211d">
    <circle cx="200" cy="110" r="6" fill="#168c6b" /><text x="212" y="114">king</text>
    <circle cx="200" cy="180" r="6" fill="#168c6b" /><text x="212" y="184">queen</text>
    <circle cx="200" cy="240" r="6" fill="#168c6b" /><text x="212" y="244">man</text>
    <circle cx="200" cy="280" r="6" fill="#168c6b" /><text x="212" y="284">woman</text>
    <circle cx="520" cy="170" r="6" fill="#a73e1b" /><text x="532" y="174">prince</text>
    <circle cx="520" cy="220" r="6" fill="#a73e1b" /><text x="532" y="224">princess</text>
  </g>
  <g stroke="#a73e1b" stroke-width="1.5" stroke-dasharray="4 3" fill="none">
    <line x1="200" y1="110" x2="520" y2="170" />
    <line x1="200" y1="240" x2="520" y2="220" />
  </g>
  <text x="360" y="180" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#666057" font-style="italic">
    king − man + woman ≈ queen
  </text>
</svg>
`.trim();

export const foundationConcepts: Concept[] = [
  {
    id: "llm",
    categoryId: "foundations",
    title: "Large Language Model (LLM)",
    summary:
      "A neural network trained to predict the next token in a sequence, scaled to billions of parameters.",
    explanation: `A Large Language Model is a deep neural network — almost always built from stacked **transformer blocks** — that is trained on a single self-supervised objective: given a sequence of tokens, predict the next one. The "large" refers to the parameter count (commonly 7B–1.8T) and the training corpus (trillions of tokens).

The same next-token objective, scaled up, surprisingly produces models that can summarize, translate, write code, follow instructions, and reason. This is the **autoregressive language modeling** objective: P(tₙ | t₁, …, tₙ₋₁).

The model does not store facts as a database. Instead, knowledge is **compressed into the weights** of the network. During inference the model performs a *search over its own parameters* every time it samples a token. This has two practical consequences:

1. Knowledge has a **soft cutoff** baked into training data, not a hard query-time lookup.
2. The model can produce fluent text that is factually wrong — it is not retrieving a fact, it is completing a pattern.

A modern LLM is wrapped in a chat template (system + user + assistant turns), but the underlying mechanism is still next-token prediction.`,
    keyTakeaways: [
      "An LLM is a next-token predictor over a discrete vocabulary.",
      "Scaling parameters, data, and compute together yields emergent capabilities.",
      "Knowledge lives in the weights, not in a queryable memory.",
    ],
    example: {
      title: "Why 'predict the next word' is enough",
      body: "If a model can predict the next token well, it implicitly models syntax, semantics, and even factual associations — because the most likely next token depends on all of them. This is why a single training objective, scaled up, can produce a general-purpose assistant.",
    },
    diagrams: [
      {
        id: "llm-transformer-block",
        title: "Transformer block (simplified)",
        caption:
          "A single transformer block: embeddings go in, multi-head attention mixes token information, a feed-forward MLP transforms each position, residuals and norms wrap each sub-layer.",
        svg: transformerBlockDiagram,
      },
    ],
    quiz: [
      {
        id: "llm-q1",
        prompt:
          "What single training objective is the basis of almost every modern LLM?",
        correctCount: 1,
        options: [
          {
            id: "llm-q1-a",
            text: "Autoregressive next-token prediction",
            correct: true,
            explanation:
              "Given tokens t₁…tₙ₋₁, predict tₙ. This is the autoregressive LM objective.",
          },
          {
            id: "llm-q1-b",
            text: "Supervised image classification",
            correct: false,
            explanation:
              "Image classification is a different task. LLMs are trained on text streams.",
          },
          {
            id: "llm-q1-c",
            text: "Reinforcement learning from human preferences only",
            correct: false,
            explanation:
              "RLHF is a *post-training* alignment step, not the foundational objective.",
          },
        ],
      },
      {
        id: "llm-q2",
        prompt: "Where does an LLM store factual knowledge?",
        correctCount: 1,
        options: [
          {
            id: "llm-q2-a",
            text: "In an external SQL database it queries at runtime",
            correct: false,
            explanation:
              "A pure LLM has no external DB. RAG layers one on top, but the base model does not.",
          },
          {
            id: "llm-q2-b",
            text: "Compressed into its learned weights",
            correct: true,
            explanation:
              "Knowledge is baked into the parameters through training; it is a soft, lossy memory.",
          },
          {
            id: "llm-q2-c",
            text: "In the tokenizer's vocabulary",
            correct: false,
            explanation:
              "The vocabulary maps text to integer IDs. It contains no factual associations.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "tokenization" },
      { kind: "prerequisite", targetId: "embeddings" },
      { kind: "related", targetId: "transformer" },
    ],
    difficulty: "intro",
    estimatedMinutes: 6,
    tags: ["llm", "autoregressive", "fundamentals"],
    referenceIds: ["vaswani-2017-attention-is-all-you-need", "openai-gpt-4o-system-card"],
    verifiedAt: "2026-08-19",
    order: 1,
  },
  {
    id: "tokenization",
    categoryId: "foundations",
    title: "Tokenization & Subword Units",
    summary:
      "How raw text becomes the integer sequence the model actually operates on, using subword algorithms like BPE.",
    explanation: `An LLM cannot read characters. It reads a fixed **vocabulary** of integer IDs, each standing for a chunk of text called a **token**. The pipeline is: text → token strings → integer IDs → embedding lookup.

Modern LLMs use **subword tokenization** algorithms, the most common being **Byte-Pair Encoding (BPE)**. BPE works bottom-up:

1. Start with the UTF-8 bytes of the text.
2. Repeatedly merge the most frequent adjacent pair into a new symbol.
3. After a fixed number of merges, you have a vocabulary of subwords.

The result is a vocabulary where common words are single tokens ("the", "Chat"), rare words split into pieces ("unhappiness" → "un", "happiness"), and unknown characters fall back to byte tokens. This makes the vocabulary finite, multilingual, and free of "out of vocabulary" errors.

**Why it matters:**

- **Cost:** APIs charge per token, not per character.
- **Performance:** a model that sees "un", "happiness" can generalize to "unkindness" even if the word never appeared in training.
- **Language coverage:** byte-level BPE handles any UTF-8 string, including Turkish, Arabic, and emoji.`,
    keyTakeaways: [
      "BPE merges frequent byte pairs into a finite subword vocabulary.",
      "Token count, not character count, is the unit of cost and context.",
      "Multilingual coverage comes from byte-level fallback, not from per-language vocabularies.",
    ],
    example: {
      title: "Counting tokens",
      body: `"ChatGPT öneriyor" tokenizes to roughly 5 subwords in a BPE-style tokenizer. The Turkish suffix and the dotless-ı are handled because BPE operates on raw UTF-8 bytes — no language-specific rules are required.`,
    },
    diagrams: [
      {
        id: "tokenization-pipeline",
        title: "From text to integer IDs",
        caption:
          "Text is split into subwords via BPE merges, then each subword is mapped to an integer ID via a fixed vocabulary.",
        svg: tokenizationDiagram,
      },
    ],
    quiz: [
      {
        id: "tok-q1",
        prompt: "What does BPE merge to build its vocabulary?",
        correctCount: 1,
        options: [
          {
            id: "tok-q1-a",
            text: "Whole words by frequency",
            correct: false,
            explanation:
              "Whole-word vocabularies cannot represent rare or unseen words. BPE works at the subword level.",
          },
          {
            id: "tok-q1-b",
            text: "The most frequent adjacent byte or subword pair",
            correct: true,
            explanation:
              "Each BPE iteration merges the most common adjacent pair, growing the vocabulary.",
          },
          {
            id: "tok-q1-c",
            text: "One token per Unicode character",
            correct: false,
            explanation:
              "That would make vocabularies enormous and miss morphological patterns.",
          },
        ],
      },
      {
        id: "tok-q2",
        prompt: "Why are byte-level tokenizers multilingual by construction?",
        correctCount: 1,
        options: [
          {
            id: "tok-q2-a",
            text: "They ship a separate Turkish model",
            correct: false,
            explanation:
              "Modern tokenizers are shared across languages, not per-language.",
          },
          {
            id: "tok-q2-b",
            text: "They can fall back to raw UTF-8 bytes for any unseen character",
            correct: true,
            explanation:
              "Starting from bytes means the vocabulary is closed: there is always a token for any input.",
          },
          {
            id: "tok-q2-c",
            text: "They use Google Translate at tokenization time",
            correct: false,
            explanation:
              "Tokenization is purely local and does not call external services.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "llm" },
      { kind: "related", targetId: "embeddings" },
    ],
    difficulty: "intro",
    estimatedMinutes: 5,
    tags: ["tokenization", "bpe", "preprocessing"],
    referenceIds: ["huggingface-bpe", "openai-tokenizer"],
    verifiedAt: "2026-08-19",
    order: 2,
  },
  {
    id: "embeddings",
    categoryId: "foundations",
    title: "Embeddings & Vector Space",
    summary:
      "Tokens are mapped to dense vectors so that geometric relationships encode semantic similarity.",
    explanation: `An **embedding** is a learned function E: token → ℝᵈ that maps each token in the vocabulary to a dense vector of d dimensions (typically 768–12288 in modern LLMs).

The crucial property is that **semantic similarity corresponds to geometric proximity**. After training, vectors that point in similar directions represent tokens used in similar contexts. The classic illustration is the analogy:

  king − man + woman ≈ queen

This is not hard-coded. It emerges because the model learned to use the same axes for "gender", "royalty", "verb tense" and so on.

**Why embeddings are central:**

- They are the *input* to the transformer. The model never sees raw text — only vectors.
- They compress a discrete, huge vocabulary into a continuous, smooth space where gradients flow.
- They make **similarity search** possible: given a query, find the k nearest vectors in ℝᵈ. This is the basis of every vector database and of retrieval-augmented generation (RAG).

When an LLM generates, every intermediate layer also produces embeddings. These **contextualized embeddings** depend on the surrounding tokens, which is how attention lets each position "see" the rest of the sequence.`,
    keyTakeaways: [
      "An embedding is a learned vector representation of a token in ℝᵈ.",
      "Geometric proximity encodes semantic similarity.",
      "Contextualized embeddings change with surrounding text; static embeddings do not.",
    ],
    diagrams: [
      {
        id: "embeddings-space",
        title: "Embedding space",
        caption:
          "Words with similar meaning cluster; algebraic relations between vectors can mirror semantic relations.",
        svg: embeddingDiagram,
      },
    ],
    quiz: [
      {
        id: "emb-q1",
        prompt:
          "Why is the equation king − man + woman ≈ queen famous in NLP?",
        correctCount: 1,
        options: [
          {
            id: "emb-q1-a",
            text: "It proves embeddings store explicit knowledge bases",
            correct: false,
            explanation:
              "Embeddings are not databases. The analogy is an emergent geometric regularity, not a stored rule.",
          },
          {
            id: "emb-q1-b",
            text: "It shows semantic relationships can be expressed as vector arithmetic",
            correct: true,
            explanation:
              "Differences between vectors can correspond to consistent semantic axes such as gender.",
          },
          {
            id: "emb-q1-c",
            text: "It is hard-coded by the model creators",
            correct: false,
            explanation:
              "These relations emerge from training; they are not hard-coded.",
          },
        ],
      },
      {
        id: "emb-q2",
        prompt: "How does a contextualized embedding differ from a static one?",
        correctCount: 1,
        options: [
          {
            id: "emb-q2-a",
            text: "Contextualized embeddings depend on surrounding tokens",
            correct: true,
            explanation:
              "Inside a transformer, the vector for 'bank' differs in 'river bank' vs 'bank account'.",
          },
          {
            id: "emb-q2-b",
            text: "Contextualized embeddings are stored in a database",
            correct: false,
            explanation:
              "They are recomputed each forward pass; they are not persisted.",
          },
          {
            id: "emb-q2-c",
            text: "Static embeddings are higher dimensional",
            correct: false,
            explanation:
              "Dimensionality is unrelated to whether an embedding is contextual.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "llm" },
      { kind: "deepens", targetId: "rag" },
      { kind: "related", targetId: "vector-database" },
    ],
    difficulty: "core",
    estimatedMinutes: 5,
    tags: ["embeddings", "vectors", "similarity"],
    referenceIds: ["deeplearning-ai-embeddings", "vaswani-2017-attention-is-all-you-need"],
    verifiedAt: "2026-08-19",
    order: 3,
  },
];
