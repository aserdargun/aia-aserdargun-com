import type { Concept } from "@/data/learn/schema";

/**
 * Training concepts: Fine-tuning vs RAG, RLHF.
 * Retrieval concepts: RAG, Vector Database.
 */

const ftVsRagDiagram = `
<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fine-tuning vs RAG">
  <rect x="0" y="0" width="720" height="360" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">Fine-tuning vs RAG: where does new knowledge live?</text>
  <g font-family="Inter, sans-serif" font-size="12" fill="#24211d">
    <text x="180" y="68" text-anchor="middle" font-weight="700">Fine-tuning</text>
    <text x="540" y="68" text-anchor="middle" font-weight="700">RAG</text>

    <rect x="80"  y="100" width="200" height="44" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="180" y="120" text-anchor="middle" font-weight="700">Update model weights</text>
    <text x="180" y="136" text-anchor="middle" font-size="10" fill="#666057">slow, expensive, persistent</text>

    <rect x="80"  y="160" width="200" height="44" rx="6" fill="#ede9e1" stroke="#bdb6aa" />
    <text x="180" y="180" text-anchor="middle" font-weight="700">Knowledge baked in</text>
    <text x="180" y="196" text-anchor="middle" font-size="10" fill="#666057">no runtime cost</text>

    <rect x="80"  y="220" width="200" height="44" rx="6" fill="#ede9e1" stroke="#bdb6aa" />
    <text x="180" y="240" text-anchor="middle" font-weight="700">Best for style &amp; skills</text>
    <text x="180" y="256" text-anchor="middle" font-size="10" fill="#666057">not for fresh facts</text>

    <rect x="440" y="100" width="200" height="44" rx="6" fill="#e7f1ec" stroke="#168c6b" />
    <text x="540" y="120" text-anchor="middle" font-weight="700">External index queried</text>
    <text x="540" y="136" text-anchor="middle" font-size="10" fill="#666057">prompt-time, no retrain</text>

    <rect x="440" y="160" width="200" height="44" rx="6" fill="#ede9e1" stroke="#bdb6aa" />
    <text x="540" y="180" text-anchor="middle" font-weight="700">Knowledge stays in DB</text>
    <text x="540" y="196" text-anchor="middle" font-size="10" fill="#666057">updatable in seconds</text>

    <rect x="440" y="220" width="200" height="44" rx="6" fill="#ede9e1" stroke="#bdb6aa" />
    <text x="540" y="240" text-anchor="middle" font-weight="700">Best for fresh facts</text>
    <text x="540" y="256" text-anchor="middle" font-size="10" fill="#666057">cites sources</text>
  </g>
  <g font-family="Inter, sans-serif" font-size="11" fill="#666057">
    <text x="180" y="310" text-anchor="middle">Cost: data + GPU hours + serving the new model.</text>
    <text x="540" y="310" text-anchor="middle">Cost: a vector index and retrieval latency.</text>
    <text x="360" y="340" text-anchor="middle" font-style="italic" fill="#24211d">Combine: fine-tune for tone, RAG for facts.</text>
  </g>
</svg>
`.trim();

const rlhfDiagram = `
<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RLHF three-stage pipeline">
  <rect x="0" y="0" width="720" height="320" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">RLHF in three stages</text>
  <g font-family="Inter, sans-serif" font-size="12" fill="#24211d">
    <rect x="40"  y="80" width="180" height="64" rx="8" fill="#fde2d6" stroke="#a73e1b" />
    <text x="130" y="106" text-anchor="middle" font-weight="700">1. Pre-train</text>
    <text x="130" y="124" text-anchor="middle" font-size="10" fill="#666057">next-token on web text</text>
    <text x="130" y="138" text-anchor="middle" font-size="10" fill="#666057">→ base model</text>

    <rect x="270" y="80" width="180" height="64" rx="8" fill="#e7f1ec" stroke="#168c6b" />
    <text x="360" y="106" text-anchor="middle" font-weight="700">2. Reward model</text>
    <text x="360" y="124" text-anchor="middle" font-size="10" fill="#666057">humans rank outputs</text>
    <text x="360" y="138" text-anchor="middle" font-size="10" fill="#666057">→ RM scores</text>

    <rect x="500" y="80" width="180" height="64" rx="8" fill="#dde7f1" stroke="#1769aa" />
    <text x="590" y="106" text-anchor="middle" font-weight="700">3. PPO / DPO</text>
    <text x="590" y="124" text-anchor="middle" font-size="10" fill="#666057">optimize against RM</text>
    <text x="590" y="138" text-anchor="middle" font-size="10" fill="#666057">→ aligned model</text>
  </g>
  <g stroke="#24211d" stroke-width="1.5" fill="none">
    <line x1="220" y1="112" x2="270" y2="112" marker-end="url(#rlhf-arrow)" />
    <line x1="450" y1="112" x2="500" y2="112" marker-end="url(#rlhf-arrow)" />
  </g>
  <defs>
    <marker id="rlhf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#24211d" />
    </marker>
  </defs>
  <g font-family="Inter, sans-serif" font-size="11" fill="#666057">
    <text x="360" y="190" text-anchor="middle">Pre-training gives knowledge. Reward modeling and RL/DPO add behavior.</text>
    <text x="360" y="220" text-anchor="middle">RLHF = learning from preference comparisons, not from explicit rules.</text>
    <text x="360" y="260" text-anchor="middle" font-style="italic" fill="#24211d">Constitutional AI replaces the human ranker with a principles-based critique loop.</text>
  </g>
</svg>
`.trim();

const ragPipelineDiagram = `
<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RAG pipeline">
  <defs>
    <marker id="rag-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#24211d" />
    </marker>
  </defs>
  <rect x="0" y="0" width="720" height="360" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">Retrieval-Augmented Generation (RAG)</text>
  <g font-family="Inter, sans-serif" font-size="12" fill="#24211d">
    <rect x="40"  y="80" width="120" height="44" rx="6" fill="#ede9e1" stroke="#bdb6aa" />
    <text x="100" y="106" text-anchor="middle" font-weight="700">User query</text>

    <rect x="40"  y="160" width="120" height="44" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="100" y="186" text-anchor="middle" font-weight="700">Embedding</text>
    <text x="100" y="200" text-anchor="middle" font-size="10" fill="#666057">encoder model</text>

    <rect x="40"  y="240" width="120" height="44" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="100" y="266" text-anchor="middle" font-weight="700">Top-k chunks</text>

    <rect x="220" y="160" width="160" height="44" rx="6" fill="#e7f1ec" stroke="#168c6b" />
    <text x="300" y="180" text-anchor="middle" font-weight="700">Vector index</text>
    <text x="300" y="196" text-anchor="middle" font-size="10" fill="#666057">ANN search</text>

    <rect x="220" y="240" width="160" height="44" rx="6" fill="#e7f1ec" stroke="#168c6b" />
    <text x="300" y="266" text-anchor="middle" font-weight="700">Rerank (optional)</text>

    <rect x="440" y="80" width="240" height="44" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="560" y="106" text-anchor="middle" font-weight="700">LLM with retrieved context</text>

    <rect x="440" y="160" width="240" height="44" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="560" y="186" text-anchor="middle" font-weight="700">Grounded answer + citations</text>
  </g>
  <g stroke="#24211d" stroke-width="1.5" fill="none" marker-end="url(#rag-arrow)">
    <line x1="100" y1="124" x2="100" y2="160" />
    <line x1="160" y1="182" x2="220" y2="182" />
    <line x1="160" y1="262" x2="220" y2="262" />
    <line x1="380" y1="262" x2="440" y2="182" />
    <line x1="100"  y1="102" x2="440" y2="102" />
  </g>
  <text x="360" y="320" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#666057">Indexing is offline; retrieved chunks enter the model context at query time.</text>
</svg>
`.trim();

const vectorDbDiagram = `
<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vector database nearest neighbor search">
  <rect x="0" y="0" width="720" height="320" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">Vector database: nearest-neighbor lookup</text>
  <g stroke="#d9d4ca" stroke-width="1">
    <line x1="60" y1="280" x2="660" y2="280" />
    <line x1="60" y1="60"  x2="60"  y2="280" />
  </g>
  <g font-family="Inter, sans-serif" font-size="12" fill="#24211d">
    <circle cx="170" cy="120" r="5" fill="#168c6b" />
    <circle cx="200" cy="170" r="5" fill="#168c6b" />
    <circle cx="160" cy="200" r="5" fill="#168c6b" />
    <circle cx="230" cy="150" r="5" fill="#168c6b" />
    <circle cx="180" cy="240" r="5" fill="#168c6b" />
    <circle cx="220" cy="210" r="5" fill="#168c6b" />
    <circle cx="450" cy="160" r="5" fill="#168c6b" />
    <circle cx="490" cy="200" r="5" fill="#168c6b" />
    <circle cx="520" cy="140" r="5" fill="#168c6b" />
    <circle cx="540" cy="180" r="5" fill="#168c6b" />
    <circle cx="470" cy="230" r="5" fill="#168c6b" />
    <circle cx="430" cy="190" r="5" fill="#168c6b" />
  </g>
  <circle cx="290" cy="180" r="9" fill="#f26b3a" stroke="#a73e1b" stroke-width="2" />
  <text x="290" y="208" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#a73e1b">query</text>
  <circle cx="290" cy="180" r="120" fill="none" stroke="#a73e1b" stroke-dasharray="4 4" />
  <text x="290" y="74" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#666057">search radius</text>
  <text x="360" y="304" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#666057">ANN indexes (HNSW, IVF) make this sub-linear in corpus size.</text>
</svg>
`.trim();

export const trainingAndRetrievalConcepts: Concept[] = [
  {
    id: "fine-tuning-vs-rag",
    categoryId: "training",
    title: "Fine-tuning vs RAG",
    summary:
      "Two complementary ways to specialize a model: bake knowledge into weights, or fetch it from an external index at query time.",
    explanation: `When you need a model to know something new, you have two fundamentally different levers:

**Fine-tuning** updates the model's weights using additional supervised or preference data. After fine-tuning, the new knowledge is *in the model itself*. There is no runtime cost beyond a normal forward pass.

- ✅ Best for: **style, tone, format, tool-use patterns, reasoning style**.
- ❌ Worst for: **fresh facts** — every update requires another training run, and old knowledge can be forgotten (catastrophic forgetting).
- Cost: data labeling + GPU hours.

**Retrieval-Augmented Generation (RAG)** keeps the base model unchanged and instead provides external context at query time. A retriever finds relevant chunks from an index, and the model conditions on them.

- ✅ Best for: **fresh, citable, fast-changing facts** — docs, policies, internal wikis.
- ❌ Worst for: **teaching a new reasoning style** — the model already knows how to use the context, but RAG alone does not change *how* it reasons.
- Cost: an index and per-query retrieval latency.

**Use them together.** Fine-tune for behavior, RAG for knowledge. Most production assistants are built exactly this way.`,
    keyTakeaways: [
      "Fine-tuning changes weights; RAG adds context at inference time.",
      "Fine-tune for style, RAG for facts.",
      "RAG is updatable in seconds; fine-tuning takes hours to days.",
    ],
    diagrams: [
      {
        id: "ft-vs-rag",
        title: "Where new knowledge lives",
        caption:
          "Fine-tuning bakes knowledge into weights; RAG keeps it in an external index and feeds it via the prompt.",
        svg: ftVsRagDiagram,
      },
    ],
    quiz: [
      {
        id: "ftr-q1",
        prompt: "Which lever is best for teaching a model a new writing style?",
        correctCount: 1,
        options: [
          {
            id: "ftr-q1-a",
            text: "Fine-tuning on style examples",
            correct: true,
            explanation:
              "Style is best learned by updating weights on representative examples.",
          },
          {
            id: "ftr-q1-b",
            text: "RAG only",
            correct: false,
            explanation:
              "RAG provides content, not style transfer; the model's default style is unchanged.",
          },
          {
            id: "ftr-q1-c",
            text: "Increase the temperature",
            correct: false,
            explanation:
              "Temperature changes sampling randomness, not the underlying style.",
          },
        ],
      },
      {
        id: "ftr-q2",
        prompt: "Why is RAG preferable for fresh facts?",
        correctCount: 1,
        options: [
          {
            id: "ftr-q2-a",
            text: "It updates instantly by re-indexing; no retraining required",
            correct: true,
            explanation:
              "An updated document becomes available the moment the index is rebuilt.",
          },
          {
            id: "ftr-q2-b",
            text: "It always gives 100% accurate answers",
            correct: false,
            explanation:
              "RAG can still hallucinate if the retrieved chunks are not relevant.",
          },
          {
            id: "ftr-q2-c",
            text: "It is cheaper to run than a model",
            correct: false,
            explanation:
              "RAG still runs the LLM at inference; the saving is in *updates*, not queries.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "llm" },
      { kind: "deepens", targetId: "rag" },
    ],
    difficulty: "core",
    estimatedMinutes: 6,
    tags: ["fine-tuning", "rag", "specialization"],
    referenceIds: ["openai-rag-overview"],
    verifiedAt: "2026-08-19",
    order: 1,
  },
  {
    id: "rlhf",
    categoryId: "training",
    title: "Reinforcement Learning from Human Feedback (RLHF)",
    summary:
      "Aligns a pretrained model to human preferences by training a reward model on comparisons, then optimizing the model against it.",
    explanation: `Pretraining on next-token prediction produces a model that *can* continue text well, but does not necessarily follow instructions, refuse harmful requests, or behave helpfully. **RLHF** and related preference-optimization methods are widely used to close that gap.

**Three stages:**

1. **Pretrain** the base model on a large text corpus with the language-modeling objective. This gives broad capability.

2. **Train a reward model (RM).** Humans are shown pairs of model outputs to the same prompt and asked which is better. The RM is a separate model trained to predict, given a prompt and a response, the score a human would assign. It is a *scalar* model: a regression head over a transformer.

3. **Optimize the policy against the RM.** Use reinforcement learning (PPO is traditional; DPO is a modern direct alternative) to update the model so that its outputs score higher under the RM. A KL penalty keeps the policy close to the reference model so it does not "reward hack" by producing gibberish that fools the RM.

**Why it works:** the RM captures a fuzzy notion of "helpfulness" that is hard to specify with rules. By training against thousands of comparisons, the policy inherits that notion.

**Failure modes:**

- **Reward hacking:** the policy finds outputs the RM scores highly but humans do not actually prefer.
- **Sycophancy:** the model learns to agree with the user rather than tell the truth.
- **Over-refusal:** the model becomes too cautious on benign prompts.

**Constitutional AI** (Anthropic) replaces the human ranker with a principles-based critique loop: the model critiques its own outputs against a written constitution. This is RLAIF (RL from AI feedback).`,
    keyTakeaways: [
      "RLHF = pretrain + reward model + policy optimization against the RM.",
      "A KL penalty keeps the aligned model from drifting too far from the base.",
      "Reward hacking and sycophancy are the main failure modes.",
    ],
    diagrams: [
      {
        id: "rlhf-pipeline",
        title: "RLHF pipeline",
        caption:
          "Pretraining produces a base model. A reward model is trained on human preference comparisons. A RL stage (PPO or DPO) optimizes the base model against the RM.",
        svg: rlhfDiagram,
      },
    ],
    quiz: [
      {
        id: "rl-q1",
        prompt: "What does a reward model in RLHF actually predict?",
        correctCount: 1,
        options: [
          {
            id: "rl-q1-a",
            text: "The next token, like the base model",
            correct: false,
            explanation:
              "The RM is a regression model, not a language model.",
          },
          {
            id: "rl-q1-b",
            text: "A scalar score for a (prompt, response) pair",
            correct: true,
            explanation:
              "The RM assigns a single quality score that the policy is optimized to maximize.",
          },
          {
            id: "rl-q1-c",
            text: "The user's hidden intent",
            correct: false,
            explanation:
              "Intent is a research concept; the RM is a measurable proxy, not an intent detector.",
          },
        ],
      },
      {
        id: "rl-q2",
        prompt: "Why is a KL penalty added during the policy optimization step?",
        correctCount: 1,
        options: [
          {
            id: "rl-q2-a",
            text: "To keep the policy close to the reference model and prevent reward hacking",
            correct: true,
            explanation:
              "Without it, the policy can drift into degenerate text that the RM rates highly.",
          },
          {
            id: "rl-q2-b",
            text: "To reduce GPU memory",
            correct: false,
            explanation:
              "KL is a training-time regularizer, not a memory optimization.",
          },
          {
            id: "rl-q2-c",
            text: "To make the model multilingual",
            correct: false,
            explanation:
              "Multilinguality comes from training data, not from the KL term.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "llm" },
      { kind: "related", targetId: "fine-tuning-vs-rag" },
    ],
    difficulty: "advanced",
    estimatedMinutes: 7,
    tags: ["rlhf", "alignment", "training"],
    referenceIds: ["rlhf-original", "openai-rlhf-explainer", "anthropic-claude-constitutional-ai"],
    verifiedAt: "2026-08-19",
    order: 2,
  },
  {
    id: "rag",
    categoryId: "retrieval",
    title: "Retrieval-Augmented Generation (RAG)",
    summary:
      "Fetch relevant context from an external index at query time, then condition the model on it to ground its answer.",
    explanation: `RAG is a pattern, not a single algorithm. The shape is:

1. **Offline indexing.** Documents are split into chunks, each chunk is embedded by an encoder model, and the resulting vectors are stored in a vector index (e.g. HNSW, IVF) along with the original text and metadata.

2. **Online query.** The user query is embedded with the same encoder. The index returns the top-k chunks by cosine similarity (or another metric). Optional rerankers refine the ordering.

3. **Generation.** The retrieved chunks are stuffed into the model's context window with the user query, and the model produces an answer that is *conditioned on the retrieved evidence*. Citations are typically included by referring to chunk IDs or document names.

**Why RAG works:**

- **Freshness:** new documents become available the moment the index is rebuilt — no retraining.
- **Attribution:** the prompt contains the source, so the model can be instructed to cite it.
- **Cost:** far cheaper than continual pretraining or frequent fine-tuning.
- **Privacy control:** source documents can stay in your index and are not added to base-model training, but retrieved chunks still reach the inference endpoint unless the model runs inside your own security boundary.

**Failure modes:**

- **Retrieval miss:** the right chunk is not in the top-k, so the model fabricates.
- **Lost in the middle:** LLMs attend less faithfully to mid-context information; placing the answer near the start or end of the prompt helps.
- **Stale or noisy chunks:** garbage in, garbage out. Quality of the corpus and the chunking strategy matter.

RAG remains a standard production pattern for "chat with your data" features.`,
    keyTakeaways: [
      "RAG = offline index + online retrieval + grounded generation.",
      "Attribution and freshness are the main wins over parametric knowledge.",
      "Chunking strategy, embedding choice, and reranking dominate quality.",
    ],
    diagrams: [
      {
        id: "rag-pipeline",
        title: "RAG pipeline",
        caption:
          "User query → embedding → vector search → top-k chunks → optional rerank → prompt with citations → LLM answer.",
        svg: ragPipelineDiagram,
      },
    ],
    quiz: [
      {
        id: "rag-q1",
        prompt: "What does the retriever return to the LLM?",
        correctCount: 1,
        options: [
          {
            id: "rag-q1-a",
            text: "The top-k most similar chunks of source text",
            correct: true,
            explanation:
              "The chunks are inserted into the prompt; the model reads them like any other context.",
          },
          {
            id: "rag-q1-b",
            text: "Pre-trained model weights",
            correct: false,
            explanation:
              "The base model is unchanged. Retrieval returns text, not weights.",
          },
          {
            id: "rag-q1-c",
            text: "Random samples from the corpus",
            correct: false,
            explanation:
              "Retrieval is by similarity, not by random sampling.",
          },
        ],
      },
      {
        id: "rag-q2",
        prompt: "What is the 'lost in the middle' problem?",
        correctCount: 1,
        options: [
          {
            id: "rag-q2-a",
            text: "Embeddings compress to a single dimension",
            correct: false,
            explanation:
              "Embeddings remain high-dimensional; the issue is how the model attends to long contexts.",
          },
          {
            id: "rag-q2-b",
            text: "LLMs attend less reliably to mid-context information",
            correct: true,
            explanation:
              "Empirically, models use the start and end of the context more faithfully than the middle.",
          },
          {
            id: "rag-q2-c",
            text: "Vector indexes drop vectors over time",
            correct: false,
            explanation:
              "Indexes do not silently drop vectors.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "embeddings" },
      { kind: "deepens", targetId: "vector-database" },
      { kind: "related", targetId: "fine-tuning-vs-rag" },
    ],
    difficulty: "core",
    estimatedMinutes: 7,
    tags: ["rag", "retrieval", "grounding"],
    referenceIds: ["openai-rag-overview", "chroma-vector-db"],
    verifiedAt: "2026-09-04",
    order: 1,
  },
  {
    id: "vector-database",
    categoryId: "retrieval",
    title: "Vector Database & ANN Search",
    summary:
      "An index that supports fast approximate nearest-neighbor lookup over millions of embedding vectors.",
    explanation: `A **vector database** stores embedding vectors and supports two operations at scale: **insert** and **k-nearest-neighbors (kNN)**. Exact kNN is O(n · d) per query — too slow at web scale. Vector databases use **approximate** algorithms that trade a small loss in recall for orders-of-magnitude speedups.

**Common ANN algorithms:**

- **HNSW (Hierarchical Navigable Small World):** a graph where each vector connects to its neighbors across layers. Search walks the graph from a top layer down. Default in many production systems.
- **IVF (Inverted File Index):** vectors are clustered at index time; at query time only the nearest clusters are scanned.
- **PQ (Product Quantization):** compresses vectors into compact codes to reduce memory.

**Quality metrics:**

- **Recall@k:** fraction of true top-k neighbors that the index returns. Target ≥ 0.95 in practice.
- **Latency:** wall-clock time per query at a given recall target.
- **Memory:** total RAM or disk needed for the index.

**Production systems** (Pinecone, Weaviate, Qdrant, Chroma, pgvector, Milvus) combine these techniques and add persistence, replication, and metadata filtering. Hybrid search — vector similarity plus a BM25 keyword signal — is a common refinement.

**Trade-off:** increasing recall increases latency and memory. Pick the lowest recall your downstream task can tolerate.`,
    keyTakeaways: [
      "ANN = HNSW / IVF / PQ trade exact recall for huge speedups.",
      "Recall@k is the headline quality metric; latency and memory are the cost metrics.",
      "Hybrid search combines vector similarity with keyword signals.",
    ],
    diagrams: [
      {
        id: "vector-db-search",
        title: "Nearest-neighbor lookup",
        caption:
          "The query (orange) is embedded, then the index returns the closest stored vectors within a search radius.",
        svg: vectorDbDiagram,
      },
    ],
    quiz: [
      {
        id: "vd-q1",
        prompt: "Why do vector databases use approximate rather than exact nearest-neighbor search?",
        correctCount: 1,
        options: [
          {
            id: "vd-q1-a",
            text: "Exact kNN is too slow at millions of vectors",
            correct: true,
            explanation:
              "O(n·d) brute force is infeasible at web scale; ANN algorithms are sub-linear with small recall loss.",
          },
          {
            id: "vd-q1-b",
            text: "Approximate search uses less GPU memory",
            correct: false,
            explanation:
              "Speed, not memory, is the primary motivation. Memory is a separate, secondary concern.",
          },
          {
            id: "vd-q1-c",
            text: "Exact search is mathematically impossible",
            correct: false,
            explanation:
              "Exact kNN is well-defined; it is just expensive.",
          },
        ],
      },
      {
        id: "vd-q2",
        prompt: "What is a typical target recall@k in production retrieval?",
        correctCount: 1,
        options: [
          {
            id: "vd-q2-a",
            text: "≥ 0.95",
            correct: true,
            explanation:
              "Most teams target ≥ 95% recall at the k they actually consume downstream.",
          },
          {
            id: "vd-q2-b",
            text: "Exactly 1.00",
            correct: false,
            explanation:
              "Forcing 100% recall usually destroys latency and is unnecessary for grounded generation.",
          },
          {
            id: "vd-q2-c",
            text: "Below 0.5",
            correct: false,
            explanation:
              "Below 50% recall is unusable for most RAG workloads.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "embeddings" },
      { kind: "related", targetId: "rag" },
    ],
    difficulty: "core",
    estimatedMinutes: 6,
    tags: ["vector-db", "ann", "hnsw"],
    referenceIds: ["chroma-vector-db", "deeplearning-ai-embeddings"],
    verifiedAt: "2026-08-19",
    order: 2,
  },
];
