import type { Concept } from "@/data/learn/schema";

/**
 * Architecture concepts: Transformer, Self-Attention, Mixture-of-Experts.
 */

const attentionHeatmap = `
<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Self-attention heatmap">
  <rect x="0" y="0" width="720" height="360" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">Self-attention: which tokens attend to which</text>
  <g font-family="ui-monospace, SFMono-Regular, monospace" font-size="12" fill="#24211d">
    <text x="320" y="68"  text-anchor="middle">The</text>
    <text x="360" y="68"  text-anchor="middle">animal</text>
    <text x="408" y="68"  text-anchor="middle">didn't</text>
    <text x="456" y="68"  text-anchor="middle">cross</text>
    <text x="504" y="68"  text-anchor="middle">the</text>
    <text x="552" y="68"  text-anchor="middle">street</text>
    <text x="596" y="68"  text-anchor="middle">.</text>

    <text x="300" y="100" text-anchor="end">The</text>
    <text x="300" y="140" text-anchor="end">animal</text>
    <text x="300" y="180" text-anchor="end">didn't</text>
    <text x="300" y="220" text-anchor="end">cross</text>
    <text x="300" y="260" text-anchor="end">the</text>
    <text x="300" y="300" text-anchor="end">street</text>
    <text x="300" y="340" text-anchor="end">.</text>
  </g>
  <!-- heatmap cells: opacity encodes attention weight -->
  <g>
    <rect x="312" y="84"  width="48" height="28" fill="#f26b3a" opacity="0.20" />
    <rect x="352" y="84"  width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="400" y="84"  width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="448" y="84"  width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="496" y="84"  width="48" height="28" fill="#f26b3a" opacity="0.20" />
    <rect x="544" y="84"  width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="592" y="84"  width="8"  height="28" fill="#f26b3a" opacity="0.05" />

    <rect x="312" y="124" width="48" height="28" fill="#f26b3a" opacity="0.10" />
    <rect x="352" y="124" width="48" height="28" fill="#f26b3a" opacity="0.90" />
    <rect x="400" y="124" width="48" height="28" fill="#f26b3a" opacity="0.10" />
    <rect x="448" y="124" width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="496" y="124" width="48" height="28" fill="#f26b3a" opacity="0.10" />
    <rect x="544" y="124" width="48" height="28" fill="#f26b3a" opacity="0.85" />
    <rect x="592" y="124" width="8"  height="28" fill="#f26b3a" opacity="0.05" />

    <rect x="312" y="164" width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="352" y="164" width="48" height="28" fill="#f26b3a" opacity="0.10" />
    <rect x="400" y="164" width="48" height="28" fill="#f26b3a" opacity="0.85" />
    <rect x="448" y="164" width="48" height="28" fill="#f26b3a" opacity="0.10" />
    <rect x="496" y="164" width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="544" y="164" width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="592" y="164" width="8"  height="28" fill="#f26b3a" opacity="0.05" />

    <rect x="312" y="204" width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="352" y="204" width="48" height="28" fill="#f26b3a" opacity="0.10" />
    <rect x="400" y="204" width="48" height="28" fill="#f26b3a" opacity="0.10" />
    <rect x="448" y="204" width="48" height="28" fill="#f26b3a" opacity="0.80" />
    <rect x="496" y="204" width="48" height="28" fill="#f26b3a" opacity="0.10" />
    <rect x="544" y="204" width="48" height="28" fill="#f26b3a" opacity="0.40" />
    <rect x="592" y="204" width="8"  height="28" fill="#f26b3a" opacity="0.05" />

    <rect x="312" y="244" width="48" height="28" fill="#f26b3a" opacity="0.20" />
    <rect x="352" y="244" width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="400" y="244" width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="448" y="244" width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="496" y="244" width="48" height="28" fill="#f26b3a" opacity="0.20" />
    <rect x="544" y="244" width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="592" y="244" width="8"  height="28" fill="#f26b3a" opacity="0.05" />

    <rect x="312" y="284" width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="352" y="284" width="48" height="28" fill="#f26b3a" opacity="0.80" />
    <rect x="400" y="284" width="48" height="28" fill="#f26b3a" opacity="0.05" />
    <rect x="448" y="284" width="48" height="28" fill="#f26b3a" opacity="0.40" />
    <rect x="496" y="284" width="48" height="28" fill="#f26b3a" opacity="0.10" />
    <rect x="544" y="284" width="48" height="28" fill="#f26b3a" opacity="0.85" />
    <rect x="592" y="284" width="8"  height="28" fill="#f26b3a" opacity="0.05" />
  </g>
  <text x="360" y="350" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#666057">Darker cells = stronger attention. Each row is a query; each column is a key it attends to.</text>
</svg>
`.trim();

const qkvDiagram = `
<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Query Key Value projection">
  <defs>
    <marker id="ah-end" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#24211d" />
    </marker>
  </defs>
  <rect x="0" y="0" width="720" height="320" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">Scaled dot-product attention: Q, K, V</text>
  <g font-family="Inter, sans-serif" font-size="12" fill="#24211d">
    <rect x="60"  y="100" width="120" height="44" rx="6" fill="#ede9e1" stroke="#bdb6aa" />
    <text x="120" y="126" text-anchor="middle" font-weight="700">Input X</text>

    <rect x="240" y="60"  width="120" height="36" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="300" y="82" text-anchor="middle" font-weight="700">Wq</text>
    <rect x="240" y="106" width="120" height="36" rx="6" fill="#e7f1ec" stroke="#168c6b" />
    <text x="300" y="128" text-anchor="middle" font-weight="700">Wk</text>
    <rect x="240" y="152" width="120" height="36" rx="6" fill="#dde7f1" stroke="#1769aa" />
    <text x="300" y="174" text-anchor="middle" font-weight="700">Wv</text>

    <rect x="420" y="60"  width="120" height="36" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="480" y="82" text-anchor="middle" font-weight="700">Q</text>
    <rect x="420" y="106" width="120" height="36" rx="6" fill="#e7f1ec" stroke="#168c6b" />
    <text x="480" y="128" text-anchor="middle" font-weight="700">K</text>
    <rect x="420" y="152" width="120" height="36" rx="6" fill="#dde7f1" stroke="#1769aa" />
    <text x="480" y="174" text-anchor="middle" font-weight="700">V</text>

    <rect x="600" y="100" width="100" height="44" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="650" y="126" text-anchor="middle" font-weight="700">softmax(QKᵀ/√d)V</text>
  </g>
  <g stroke="#24211d" stroke-width="1.5" fill="none" marker-end="url(#ah-end)">
    <line x1="180" y1="122" x2="240" y2="78" />
    <line x1="180" y1="122" x2="240" y2="124" />
    <line x1="180" y1="122" x2="240" y2="170" />
    <line x1="360" y1="78"  x2="420" y2="78" />
    <line x1="360" y1="124" x2="420" y2="124" />
    <line x1="360" y1="170" x2="420" y2="170" />
    <line x1="540" y1="78"  x2="600" y2="118" />
    <line x1="540" y1="124" x2="600" y2="122" />
    <line x1="540" y1="170" x2="600" y2="126" />
  </g>
  <text x="360" y="240" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#666057" font-style="italic">Attention(Q, K, V) = softmax(QKᵀ / √dₖ) V</text>
  <text x="360" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#666057">Three learned projections per head; the same X feeds all three.</text>
</svg>
`.trim();

const moeDiagram = `
<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mixture of experts routing">
  <rect x="0" y="0" width="720" height="320" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">Mixture of Experts: route, don't run everything</text>
  <g font-family="Inter, sans-serif" font-size="12" fill="#24211d">
    <rect x="60"  y="130" width="120" height="44" rx="6" fill="#ede9e1" stroke="#bdb6aa" />
    <text x="120" y="156" text-anchor="middle" font-weight="700">Token</text>

    <rect x="220" y="130" width="120" height="44" rx="6" fill="#dde7f1" stroke="#1769aa" />
    <text x="280" y="150" text-anchor="middle" font-weight="700">Router</text>
    <text x="280" y="166" text-anchor="middle" font-size="10" fill="#666057">gating network</text>

    <g>
      <rect x="380" y="60"  width="120" height="44" rx="6" fill="#fde2d6" stroke="#a73e1b" />
      <text x="440" y="86" text-anchor="middle" font-weight="700">Expert 1</text>

      <rect x="380" y="130" width="120" height="44" rx="6" fill="#e7f1ec" stroke="#168c6b" />
      <text x="440" y="156" text-anchor="middle" font-weight="700">Expert 2</text>

      <rect x="380" y="200" width="120" height="44" rx="6" fill="#f3ecdc" stroke="#bdb6aa" />
      <text x="440" y="226" text-anchor="middle" font-weight="700">Expert 3</text>
    </g>

    <rect x="540" y="130" width="120" height="44" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="600" y="150" text-anchor="middle" font-weight="700">Weighted</text>
    <text x="600" y="166" text-anchor="middle" font-weight="700">output</text>
  </g>
  <g stroke="#a73e1b" stroke-width="2" fill="none" stroke-dasharray="4 3">
    <path d="M 340 150 C 360 150, 360 80, 380 80" />
  </g>
  <g stroke="#bdb6aa" stroke-width="1.2" fill="none" stroke-dasharray="3 3">
    <path d="M 340 150 C 360 150, 360 152, 380 152" />
    <path d="M 340 150 C 360 150, 360 222, 380 222" />
  </g>
  <g stroke="#a73e1b" stroke-width="2" fill="none">
    <path d="M 500 80 C 520 80, 520 150, 540 150" />
  </g>
  <text x="360" y="280" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#666057">Top-k experts (often k=2) are activated per token; the rest are skipped.</text>
</svg>
`.trim();

export const architectureConcepts: Concept[] = [
  {
    id: "transformer",
    categoryId: "architecture",
    title: "The Transformer Architecture",
    summary:
      "A sequence-to-sequence model built from stacked self-attention and feed-forward layers, with residuals and normalization.",
    explanation: `The transformer (Vaswani et al., 2017) replaced recurrence and convolution in sequence modeling with two ingredients: **self-attention** and **position-wise feed-forward networks**.

A transformer block has two sub-layers, each wrapped in a residual connection and layer normalization:

1. **Multi-head self-attention** — mixes information across token positions.
2. **Position-wise MLP** — applies the same two-layer feed-forward network to each position independently.

These blocks are stacked N times. The full network has three pieces:

- **Embeddings** turn input token IDs into vectors and add positional information (sinusoidal or learned).
- **Encoder / decoder stack** of N blocks each. Decoder-only LLMs drop the encoder and use **masked** self-attention so positions cannot see the future during training.
- **Unembedding** projects the final vector at each position back to a distribution over the vocabulary.

Why it works:

- **Parallelism:** unlike RNNs, every position is processed in parallel during training, which is why transformers scale to trillion-parameter models.
- **Long context:** attention lets any token directly read any other token up to the context length, with O(1) hops.
- **Compositionality:** stacking many blocks lets the network build hierarchical features — early layers model syntax, later layers model semantics and reasoning.`,
    keyTakeaways: [
      "A transformer block = self-attention + position-wise MLP, with residuals and norms.",
      "Decoder-only LLMs use masked self-attention to preserve autoregressive order.",
      "Stacking N blocks yields hierarchical representations and emergent capabilities.",
    ],
    diagrams: [
      {
        id: "transformer-stack",
        title: "Single transformer block (simplified)",
        caption:
          "The same block is stacked N times. Residual connections and layer normalization are critical for stable training and are usually drawn around each sub-layer.",
        svg: `
<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stacked transformer blocks">
  <rect x="0" y="0" width="720" height="320" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">N stacked transformer blocks</text>
  <g font-family="Inter, sans-serif" font-size="12" fill="#24211d">
    <rect x="320" y="60"  width="80" height="40" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="360" y="84" text-anchor="middle" font-weight="700">Block 1</text>
    <rect x="320" y="120" width="80" height="40" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="360" y="144" text-anchor="middle" font-weight="700">Block 2</text>
    <rect x="320" y="180" width="80" height="40" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="360" y="204" text-anchor="middle" font-weight="700">Block N</text>
  </g>
  <g stroke="#24211d" stroke-width="1.5" fill="none">
    <line x1="360" y1="100" x2="360" y2="120" />
    <line x1="360" y1="160" x2="360" y2="180" />
  </g>
  <g font-family="Inter, sans-serif" font-size="12" fill="#666057">
    <text x="170" y="80" text-anchor="end">Embeddings →</text>
    <text x="170" y="200" text-anchor="end">Unembed →</text>
    <text x="170" y="140" text-anchor="end">…</text>
  </g>
  <g stroke="#24211d" stroke-width="1.5" fill="none">
    <line x1="180" y1="80" x2="320" y2="80" />
    <line x1="400" y1="200" x2="540" y2="200" />
  </g>
  <text x="360" y="270" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#666057">Modern LLMs use 32–128 blocks and 7B–1.8T parameters.</text>
</svg>
        `.trim(),
      },
    ],
    quiz: [
      {
        id: "tx-q1",
        prompt: "What are the two sub-layers inside a standard transformer block?",
        correctCount: 2,
        options: [
          {
            id: "tx-q1-a",
            text: "Multi-head self-attention",
            correct: true,
            explanation: "Self-attention mixes information across positions.",
          },
          {
            id: "tx-q1-b",
            text: "Convolutional feature extractor",
            correct: false,
            explanation:
              "Convolutions are from earlier architectures (e.g. CNN, ConvS2S), not the transformer block.",
          },
          {
            id: "tx-q1-c",
            text: "Position-wise feed-forward MLP",
            correct: true,
            explanation:
              "A two-layer MLP applied independently to each position.",
          },
          {
            id: "tx-q1-d",
            text: "A recurrent LSTM cell",
            correct: false,
            explanation:
              "The transformer was designed specifically to remove recurrence.",
          },
        ],
      },
      {
        id: "tx-q2",
        prompt: "Why do decoder-only LLMs use masked self-attention?",
        correctCount: 1,
        options: [
          {
            id: "tx-q2-a",
            text: "To prevent the model from seeing future tokens during training",
            correct: true,
            explanation:
              "Masking preserves the autoregressive property: position t can only attend to ≤ t.",
          },
          {
            id: "tx-q2-b",
            text: "To save GPU memory",
            correct: false,
            explanation:
              "Memory savings come from KV-cache tricks, not from the mask itself.",
          },
          {
            id: "tx-q2-c",
            text: "To support multiple languages",
            correct: false,
            explanation:
              "Language coverage is handled by tokenization and training data, not by masking.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "llm" },
      { kind: "deepens", targetId: "self-attention" },
      { kind: "related", targetId: "mixture-of-experts" },
    ],
    difficulty: "core",
    estimatedMinutes: 8,
    tags: ["transformer", "architecture", "deep-learning"],
    referenceIds: ["vaswani-2017-attention-is-all-you-need"],
    verifiedAt: "2026-08-19",
    order: 1,
  },
  {
    id: "self-attention",
    categoryId: "architecture",
    title: "Self-Attention Mechanism",
    summary:
      "Each token computes a weighted average of every other token, where the weights are learned from query/key similarity.",
    explanation: `Self-attention is the operation that lets each token "look at" every other token in the sequence. The classic formulation is **scaled dot-product attention**:

  Attention(Q, K, V) = softmax( Q Kᵀ / √dₖ ) V

Where:

- **Q** (queries), **K** (keys), **V** (values) are three linear projections of the input X.
- The dot product Q Kᵀ measures how compatible each query is with each key.
- The softmax turns those scores into a probability distribution over positions.
- The result is a weighted sum of V vectors.

The division by √dₖ keeps the dot products from growing too large in high dimensions, which would saturate the softmax.

**Multi-head attention** runs h independent attention operations in parallel, each with its own Q/K/V projections, and concatenates the results. Different heads learn to attend to different kinds of relationships — syntactic agreement, coreference, position offsets.

**Masked self-attention** (used in decoder-only LLMs) zeroes out the upper triangle of Q Kᵀ before the softmax, so position t can only see positions ≤ t. This is what makes autoregressive generation possible: at training time, every position's target is known, but each input must remain blind to its own future.

Self-attention has cost O(n²) in sequence length, which is why long-context research focuses on sparse, linear, or chunked attention variants.`,
    keyTakeaways: [
      "Attention(Q, K, V) = softmax(QKᵀ / √dₖ) V.",
      "Multi-head attention lets different heads specialize on different relations.",
      "Masking preserves autoregressive order during training.",
    ],
    diagrams: [
      {
        id: "self-attention-heatmap",
        title: "Attention heatmap for a short sentence",
        caption:
          "Each row is a query position; each column is a key it attends to. Darker cells mean stronger attention.",
        svg: attentionHeatmap,
      },
      {
        id: "self-attention-qkv",
        title: "Q, K, V projections",
        caption:
          "The same input X is projected through three learned matrices Wq, Wk, Wv into queries, keys, and values.",
        svg: qkvDiagram,
      },
    ],
    quiz: [
      {
        id: "sa-q1",
        prompt: "What is the role of the √dₖ scaling factor in attention?",
        correctCount: 1,
        options: [
          {
            id: "sa-q1-a",
            text: "It keeps the softmax from saturating when dₖ is large",
            correct: true,
            explanation:
              "Without scaling, dot products grow with dₖ and push softmax into low-gradient regions.",
          },
          {
            id: "sa-q1-b",
            text: "It compresses the model to fit on consumer GPUs",
            correct: false,
            explanation:
              "Scaling is a numerical-stability device, not a quantization trick.",
          },
          {
            id: "sa-q1-c",
            text: "It increases the model's temperature",
            correct: false,
            explanation:
              "Temperature is a sampling-time parameter, unrelated to attention scaling.",
          },
        ],
      },
      {
        id: "sa-q2",
        prompt: "Why is multi-head attention more expressive than single-head?",
        correctCount: 1,
        options: [
          {
            id: "sa-q2-a",
            text: "Different heads can specialize in different relations",
            correct: true,
            explanation:
              "Empirically, different heads attend to syntax, coreference, and positional patterns.",
          },
          {
            id: "sa-q2-b",
            text: "It uses more parameters, which always helps",
            correct: false,
            explanation:
              "More parameters help only if the model can use them. Multi-head helps via specialization, not size alone.",
          },
          {
            id: "sa-q2-c",
            text: "It allows attention to be computed in parallel on more GPUs",
            correct: false,
            explanation:
              "Parallelism is an implementation benefit, not the source of expressivity.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "transformer" },
    ],
    difficulty: "core",
    estimatedMinutes: 8,
    tags: ["attention", "qkv", "mechanism"],
    referenceIds: ["vaswani-2017-attention-is-all-you-need"],
    verifiedAt: "2026-08-19",
    order: 2,
  },
  {
    id: "mixture-of-experts",
    categoryId: "architecture",
    title: "Mixture of Experts (MoE)",
    summary:
      "A sparse architecture that routes each token to a subset of expert MLPs, increasing capacity without proportional compute cost.",
    explanation: `A **Mixture of Experts (MoE)** layer replaces a single dense MLP in a transformer block with **N parallel expert MLPs** and a small **router** that picks the top-k experts for each token.

For each input token x:
1. The router computes logits R(x) ∈ ℝᴺ.
2. The top-k entries (typically k=2) are kept; the rest are masked to -∞.
3. A softmax over the kept entries produces a mixing weight.
4. The output is the weighted sum of the chosen experts' outputs.

**Why MoE:**

- **Capacity without compute.** A model with 8 experts, top-2 routing, activates only 2 experts per token. Total parameters can grow ~8× while FLOPs per token grow ~2×.
- **Specialization.** Different experts tend to specialize in different topics or syntactic patterns.

**Trade-offs:**

- **Training instability.** Routing decisions are discrete; techniques like load-balancing losses and router-z loss are required.
- **Memory cost.** All experts must be resident or at least sharded across devices, which raises serving cost.
- **Fine-tuning fragility.** Routing can collapse to a few experts if not regularized.

MoE is widely used in modern open and proprietary frontier architectures as a way to scale capacity efficiently.`,
    keyTakeaways: [
      "MoE routes each token to top-k experts out of N total.",
      "Parameter count grows but per-token compute grows much less.",
      "Routing needs a load-balancing loss to avoid expert collapse.",
    ],
    diagrams: [
      {
        id: "moe-routing",
        title: "MoE routing for a single token",
        caption:
          "The router picks the top experts; the rest are skipped. The output is a weighted combination of the activated experts.",
        svg: moeDiagram,
      },
    ],
    quiz: [
      {
        id: "moe-q1",
        prompt: "What is the main efficiency claim of MoE?",
        correctCount: 1,
        options: [
          {
            id: "moe-q1-a",
            text: "More parameters with only modestly more compute per token",
            correct: true,
            explanation:
              "Top-k routing means FLOPs grow with k, not with the total number of experts.",
          },
          {
            id: "moe-q1-b",
            text: "Smaller models that are always faster",
            correct: false,
            explanation:
              "MoE models are typically *larger* in total parameters, not smaller.",
          },
          {
            id: "moe-q1-c",
            text: "Eliminates the need for GPUs",
            correct: false,
            explanation:
              "MoE still runs on accelerators; it just uses them more efficiently.",
          },
        ],
      },
      {
        id: "moe-q2",
        prompt: "What problem does a load-balancing loss address in MoE training?",
        correctCount: 1,
        options: [
          {
            id: "moe-q2-a",
            text: "Expert collapse, where the router sends most tokens to the same expert",
            correct: true,
            explanation:
              "Without balancing, the router can learn to ignore most experts, defeating the point of MoE.",
          },
          {
            id: "moe-q2-b",
            text: "Overfitting on small datasets",
            correct: false,
            explanation:
              "Overfitting is handled by standard regularization, not the load-balancing loss.",
          },
          {
            id: "moe-q2-c",
            text: "Tokenization mismatches",
            correct: false,
            explanation:
              "Tokenization is upstream of MoE; the loss does not affect it.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "transformer" },
    ],
    difficulty: "advanced",
    estimatedMinutes: 6,
    tags: ["moe", "sparse", "scaling"],
    referenceIds: ["wikipedia-mixture-of-experts", "vaswani-2017-attention-is-all-you-need"],
    verifiedAt: "2026-08-19",
    order: 3,
  },
];
