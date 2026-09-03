import type { Concept } from "@/data/learn/schema";

/**
 * Agents concepts: Prompt Engineering, Agent Architecture, MCP.
 * Operations concepts: Temperature & Sampling, Hallucination.
 */

const agentLoopDiagram = `
<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Agent loop">
  <defs>
    <marker id="al-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#24211d" />
    </marker>
  </defs>
  <rect x="0" y="0" width="720" height="360" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">Agent loop: think → act → observe</text>
  <g font-family="Inter, sans-serif" font-size="12" fill="#24211d">
    <ellipse cx="360" cy="170" rx="80" ry="42" fill="#fde2d6" stroke="#a73e1b" />
    <text x="360" y="166" text-anchor="middle" font-weight="700">Model</text>
    <text x="360" y="184" text-anchor="middle" font-weight="700">(reasoning)</text>

    <rect x="80"  y="80"  width="160" height="44" rx="6" fill="#ede9e1" stroke="#bdb6aa" />
    <text x="160" y="100" text-anchor="middle" font-weight="700">Goal / user request</text>
    <text x="160" y="116" text-anchor="middle" font-size="10" fill="#666057">system + user prompt</text>

    <rect x="480" y="80"  width="160" height="44" rx="6" fill="#e7f1ec" stroke="#168c6b" />
    <text x="560" y="100" text-anchor="middle" font-weight="700">Tool call</text>
    <text x="560" y="116" text-anchor="middle" font-size="10" fill="#666057">search, code, API, file</text>

    <rect x="80"  y="240" width="160" height="44" rx="6" fill="#dde7f1" stroke="#1769aa" />
    <text x="160" y="260" text-anchor="middle" font-weight="700">Observation</text>
    <text x="160" y="276" text-anchor="middle" font-size="10" fill="#666057">tool result text</text>

    <rect x="480" y="240" width="160" height="44" rx="6" fill="#ede9e1" stroke="#bdb6aa" />
    <text x="560" y="260" text-anchor="middle" font-weight="700">Final answer</text>
    <text x="560" y="276" text-anchor="middle" font-size="10" fill="#666057">when stop is emitted</text>
  </g>
  <g stroke="#24211d" stroke-width="1.5" fill="none" marker-end="url(#al-arrow)">
    <line x1="240" y1="102" x2="280" y2="148" />
    <path d="M 440 170 C 510 170, 510 102, 480 102" />
    <line x1="640" y1="124" x2="700" y2="180" />
    <path d="M 700 200 C 700 280, 600 280, 640 262" />
    <line x1="480" y1="262" x2="240" y2="262" />
    <line x1="160" y1="240" x2="280" y2="200" />
  </g>
  <text x="360" y="328" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#666057">The loop runs until the model emits a stop signal or a max-iteration guard fires.</text>
</svg>
`.trim();

const mcpDiagram = `
<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MCP architecture">
  <defs>
    <marker id="mcp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#24211d" />
    </marker>
  </defs>
  <rect x="0" y="0" width="720" height="280" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">Model Context Protocol: host, client, server</text>
  <g font-family="Inter, sans-serif" font-size="12" fill="#24211d">
    <rect x="40"  y="80"  width="160" height="60" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="120" y="106" text-anchor="middle" font-weight="700">MCP Host</text>
    <text x="120" y="122" text-anchor="middle" font-size="10" fill="#666057">IDE, chat app, agent</text>

    <rect x="280" y="80"  width="160" height="60" rx="6" fill="#e7f1ec" stroke="#168c6b" />
    <text x="360" y="106" text-anchor="middle" font-weight="700">MCP Client</text>
    <text x="360" y="122" text-anchor="middle" font-size="10" fill="#666057">one per server</text>

    <rect x="520" y="80"  width="160" height="60" rx="6" fill="#dde7f1" stroke="#1769aa" />
    <text x="600" y="106" text-anchor="middle" font-weight="700">MCP Server</text>
    <text x="600" y="122" text-anchor="middle" font-size="10" fill="#666057">tools + resources</text>

    <rect x="520" y="180" width="160" height="44" rx="6" fill="#ede9e1" stroke="#bdb6aa" />
    <text x="600" y="200" text-anchor="middle" font-weight="700">Filesystem / DB / API</text>
    <text x="600" y="216" text-anchor="middle" font-size="10" fill="#666057">actual data source</text>
  </g>
  <g stroke="#24211d" stroke-width="1.5" fill="none" marker-end="url(#mcp-arrow)">
    <line x1="200" y1="110" x2="280" y2="110" />
    <line x1="440" y1="110" x2="520" y2="110" />
    <line x1="600" y1="140" x2="600" y2="180" />
  </g>
  <g font-family="Inter, sans-serif" font-size="11" fill="#666057">
    <text x="240" y="76" text-anchor="middle">JSON-RPC</text>
    <text x="480" y="76" text-anchor="middle">JSON-RPC</text>
  </g>
  <text x="360" y="252" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#666057">MCP standardizes the contract between models and tools so servers are reusable across hosts.</text>
</svg>
`.trim();

const samplingDiagram = `
<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Temperature and top-p sampling">
  <rect x="0" y="0" width="720" height="320" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">Sampling: how temperature and top-p shape output</text>
  <g font-family="Inter, sans-serif" font-size="11" fill="#24211d">
    <!-- Bar chart: probabilities -->
    <g>
      <line x1="80"  y1="240" x2="640" y2="240" stroke="#bdb6aa" />
      <rect x="100" y="120" width="40" height="120" fill="#f26b3a" />
      <rect x="150" y="80"  width="40" height="160" fill="#f26b3a" />
      <rect x="200" y="60"  width="40" height="180" fill="#f26b3a" />
      <rect x="250" y="40"  width="40" height="200" fill="#f26b3a" />
      <rect x="300" y="20"  width="40" height="220" fill="#f26b3a" />
      <rect x="350" y="100" width="40" height="140" fill="#f26b3a" opacity="0.6" />
      <rect x="400" y="180" width="40" height="60"  fill="#f26b3a" opacity="0.4" />
      <rect x="450" y="200" width="40" height="40"  fill="#f26b3a" opacity="0.25" />
      <rect x="500" y="210" width="40" height="30"  fill="#f26b3a" opacity="0.15" />
      <rect x="550" y="220" width="40" height="20"  fill="#f26b3a" opacity="0.10" />
    </g>
    <text x="320" y="270" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#666057">candidate tokens → probability mass</text>
  </g>
  <g font-family="Inter, sans-serif" font-size="12" fill="#24211d">
    <text x="120" y="306" text-anchor="middle" font-weight="700">T = 0.1</text>
    <text x="320" y="306" text-anchor="middle" font-weight="700">T = 0.7</text>
    <text x="520" y="306" text-anchor="middle" font-weight="700">T = 1.5</text>
  </g>
  <g font-family="Inter, sans-serif" font-size="11" fill="#666057">
    <text x="120" y="320" text-anchor="middle">peaked, deterministic</text>
    <text x="320" y="320" text-anchor="middle">balanced, focused</text>
    <text x="520" y="320" text-anchor="middle">flatter, creative</text>
  </g>
</svg>
`.trim();

const promptAnatomyDiagram = `
<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Prompt anatomy">
  <rect x="0" y="0" width="720" height="320" fill="#fffdf8" />
  <text x="360" y="28" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#24211d" font-weight="700">A well-shaped prompt</text>
  <g font-family="Inter, sans-serif" font-size="12" fill="#24211d">
    <rect x="40"  y="70"  width="640" height="36" rx="6" fill="#fde2d6" stroke="#a73e1b" />
    <text x="60"  y="92"  font-weight="700">System</text>
    <text x="120" y="92" fill="#666057">persona, constraints, output schema, refusal policy</text>

    <rect x="40"  y="116" width="640" height="36" rx="6" fill="#e7f1ec" stroke="#168c6b" />
    <text x="60"  y="138" font-weight="700">Context</text>
    <text x="120" y="138" fill="#666057">retrieved documents, prior turns, tool results</text>

    <rect x="40"  y="162" width="640" height="36" rx="6" fill="#dde7f1" stroke="#1769aa" />
    <text x="60"  y="184" font-weight="700">Task</text>
    <text x="120" y="184" fill="#666057">clear, single ask with success criteria</text>

    <rect x="40"  y="208" width="640" height="36" rx="6" fill="#ede9e1" stroke="#bdb6aa" />
    <text x="60"  y="230" font-weight="700">Format</text>
    <text x="120" y="230" fill="#666057">JSON, bullets, length, language</text>

    <rect x="40"  y="254" width="640" height="36" rx="6" fill="#f3ecdc" stroke="#bdb6aa" />
    <text x="60"  y="276" font-weight="700">Examples</text>
    <text x="120" y="276" fill="#666057">few-shot demos of desired behavior</text>
  </g>
</svg>
`.trim();

export const agentsAndOpsConcepts: Concept[] = [
  {
    id: "prompt-engineering",
    categoryId: "agents",
    title: "Prompt Engineering",
    summary:
      "Structuring the model's input — system, context, task, format, examples — to get reliable, high-quality outputs.",
    explanation: `A prompt is not just the user question. A well-shaped prompt has five named parts, and thinking in those parts makes the difference between a flaky demo and a production feature:

1. **System** — persona, role, hard constraints, refusal policy, output schema. Sets the rules.
2. **Context** — retrieved documents, prior turns, tool results, user data. Grounds the response.
3. **Task** — the actual ask, phrased precisely with success criteria.
4. **Format** — JSON shape, length, language, bullet vs prose, citation style.
5. **Examples** — few-shot demonstrations of the desired behavior, especially for edge cases.

**Key techniques:**

- **Be explicit about format.** "Return a JSON object with keys {summary, references}" beats "summarize this".
- **Show, don't tell.** A two-line example of the desired output is more reliable than a paragraph of instructions.
- **Order matters.** Place the most important instructions at the start or end of the prompt; the middle is weaker (lost in the middle).
- **Chain-of-thought.** Asking the model to reason step-by-step improves accuracy on multi-step problems, at the cost of more output tokens.
- **Self-critique.** Asking the model to verify its own answer before returning it catches a fraction of errors.

**Limits:** prompt engineering cannot teach the model new knowledge. For that you need RAG or fine-tuning. It is, however, the cheapest, fastest lever you have.`,
    keyTakeaways: [
      "A prompt = system + context + task + format + examples.",
      "Place key instructions at the start or end; the middle is weaker.",
      "Few-shot examples beat long instructions for format-sensitive tasks.",
    ],
    diagrams: [
      {
        id: "prompt-anatomy",
        title: "Anatomy of a prompt",
        caption:
          "Every well-shaped prompt has five named parts. Naming them turns 'prompting' into engineering.",
        svg: promptAnatomyDiagram,
      },
    ],
    quiz: [
      {
        id: "pe-q1",
        prompt: "Which part of a prompt defines persona, refusal policy, and output schema?",
        correctCount: 1,
        options: [
          {
            id: "pe-q1-a",
            text: "The system message",
            correct: true,
            explanation:
              "The system message sets persistent rules and persona across the conversation.",
          },
          {
            id: "pe-q1-b",
            text: "The user message",
            correct: false,
            explanation:
              "The user message is the actual ask; rules belong in the system message.",
          },
          {
            id: "pe-q1-c",
            text: "Few-shot examples",
            correct: false,
            explanation:
              "Examples teach format, not persistent rules.",
          },
        ],
      },
      {
        id: "pe-q2",
        prompt: "Why does chain-of-thought improve multi-step reasoning?",
        correctCount: 1,
        options: [
          {
            id: "pe-q2-a",
            text: "It forces the model to externalize intermediate steps",
            correct: true,
            explanation:
              "The model can attend to its own scratchpad, which reduces arithmetic and logic errors.",
          },
          {
            id: "pe-q2-b",
            text: "It reduces inference cost",
            correct: false,
            explanation:
              "Chain-of-thought *increases* token usage; the win is accuracy, not cost.",
          },
          {
            id: "pe-q2-c",
            text: "It changes the model weights",
            correct: false,
            explanation:
              "Prompting is inference-time; weights are unchanged.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "llm" },
      { kind: "related", targetId: "agent-architecture" },
    ],
    difficulty: "intro",
    estimatedMinutes: 5,
    tags: ["prompting", "system", "few-shot"],
    referenceIds: ["anthropic-prompt-engineering", "openai-function-calling"],
    verifiedAt: "2026-08-19",
    order: 1,
  },
  {
    id: "agent-architecture",
    categoryId: "agents",
    title: "Agent Architecture & Tool Use",
    summary:
      "A loop where the model reads a goal, chooses a tool, observes the result, and repeats until a stop condition is met.",
    explanation: `An **agent** is a model wrapped in a control loop that gives it access to **tools** — functions it can call. The classic loop is **think → act → observe**:

1. The model receives a goal and the current transcript.
2. It **reasons** about what to do next.
3. It emits a **tool call** with structured arguments (e.g. JSON).
4. The runtime executes the tool and returns the **observation** (a string) to the model.
5. The model continues until it emits a stop signal, a max-iteration guard fires, or a budget is exhausted.

**Tool calling** is the contract that makes this work. The model is trained to produce structured outputs (JSON or XML) that match a tool schema. The runtime parses the call, runs the function, and feeds the result back.

**Common patterns:**

- **Single-tool agent** — the model has one tool (e.g. a search API) and decides what to query.
- **Multi-tool agent** — the model picks among N tools, each with a typed schema.
- **Orchestrator + sub-agents** — a top-level agent delegates to specialized sub-agents (e.g. "researcher" and "coder") that themselves have tools.
- **Reactive vs deliberative** — some agents stream a plan first; others interleave thinking and actions.

**Failure modes:**

- **Loops** — the model repeats the same tool call. Guardrails: max iterations, idempotency, loop detection.
- **Hallucinated tool calls** — invalid arguments. Guardrails: schema validation, retries with error feedback.
- **Side effects** — agents that write to files or send email need **human-in-the-loop** approval for sensitive actions.

Frameworks (LangGraph, the OpenAI Agents SDK, the Claude Agent SDK) implement these patterns, but the underlying model is the same next-token predictor with a tool-calling format.`,
    keyTakeaways: [
      "An agent = model + tools + control loop.",
      "Tool calls are structured outputs validated against a schema.",
      "Always bound iterations and require human approval for sensitive actions.",
    ],
    diagrams: [
      {
        id: "agent-loop",
        title: "The agent loop",
        caption:
          "Think → act → observe repeats until the model emits a stop or a guardrail fires.",
        svg: agentLoopDiagram,
      },
    ],
    quiz: [
      {
        id: "ag-q1",
        prompt: "What is a tool call, structurally?",
        correctCount: 1,
        options: [
          {
            id: "ag-q1-a",
            text: "A structured output that matches a declared tool schema",
            correct: true,
            explanation:
              "The model emits JSON or XML with function name and arguments; the runtime validates and executes.",
          },
          {
            id: "ag-q1-b",
            text: "Free-form natural language",
            correct: false,
            explanation:
              "Free-form text is hard for the runtime to dispatch safely.",
          },
          {
            id: "ag-q1-c",
            text: "A shell command to be eval'd",
            correct: false,
            explanation:
              "Executing arbitrary shell is a security risk; tool calls go through a validated schema.",
          },
        ],
      },
      {
        id: "ag-q2",
        prompt: "Why are max-iteration guards important in agent loops?",
        correctCount: 1,
        options: [
          {
            id: "ag-q2-a",
            text: "To prevent infinite loops if the model repeats the same call",
            correct: true,
            explanation:
              "Without a guard, a stuck agent can run for a long time and burn budget.",
          },
          {
            id: "ag-q2-b",
            text: "To keep the model warm",
            correct: false,
            explanation:
              "Iteration count has nothing to do with model temperature.",
          },
          {
            id: "ag-q2-c",
            text: "To reduce GPU power consumption",
            correct: false,
            explanation:
              "Budgets matter, but the primary reason is correctness and cost control, not power.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "prompt-engineering" },
      { kind: "related", targetId: "mcp" },
    ],
    difficulty: "core",
    estimatedMinutes: 7,
    tags: ["agents", "tool-use", "loop"],
    referenceIds: ["anthropic-building-effective-agents", "openai-function-calling"],
    verifiedAt: "2026-08-19",
    order: 2,
  },
  {
    id: "mcp",
    categoryId: "agents",
    title: "Model Context Protocol (MCP)",
    summary:
      "An open standard that lets models call tools and read resources exposed by any compatible server, across hosts.",
    explanation: `Before MCP, every agent framework had its own tool-calling convention. **Model Context Protocol (MCP)** is an open standard introduced by Anthropic in late 2024 that defines a single contract between a **host** (the model-bearing app) and one or more **servers** (tools, data sources, or context providers).

**Three roles:**

- **MCP Host** — the application that owns the model. Examples: Claude Desktop, an IDE plugin, a chat product.
- **MCP Client** — a connector inside the host. There is one client per server the host talks to.
- **MCP Server** — a process that exposes **tools** (callable functions), **resources** (read-only data), and **prompts** (reusable templates) over JSON-RPC.

**Why it matters:**

- **Reusability.** A community-written MCP server for GitHub works with every MCP host. No per-framework integration.
- **Security boundary.** Servers run as separate processes; the host controls which tools the model can see and what arguments are allowed.
- **Composability.** A host can mix local servers (filesystem) with remote servers (a hosted database) through the same protocol.

MCP is transport-agnostic: servers can run over stdio for local tools or over HTTP+SSE for remote tools. The contract is plain JSON-RPC, which is trivial to implement in any language.`,
    keyTakeaways: [
      "MCP defines host ↔ client ↔ server over JSON-RPC.",
      "Servers expose tools, resources, and prompts.",
      "It is the open standard that decouples agent frameworks from tool integrations.",
    ],
    diagrams: [
      {
        id: "mcp-architecture",
        title: "MCP architecture",
        caption:
          "Host → Client → Server → data source. Servers are reusable across hosts.",
        svg: mcpDiagram,
      },
    ],
    quiz: [
      {
        id: "mcp-q1",
        prompt: "What three primitives does an MCP server expose?",
        correctCount: 3,
        options: [
          {
            id: "mcp-q1-a",
            text: "Tools",
            correct: true,
            explanation: "Callable functions the model can invoke.",
          },
          {
            id: "mcp-q1-b",
            text: "Resources",
            correct: true,
            explanation: "Read-only data the model can fetch.",
          },
          {
            id: "mcp-q1-c",
            text: "Prompts",
            correct: true,
            explanation: "Reusable prompt templates.",
          },
          {
            id: "mcp-q1-d",
            text: "Datasets",
            correct: false,
            explanation:
              "Datasets are not a separate primitive; they are exposed as resources.",
          },
        ],
      },
      {
        id: "mcp-q2",
        prompt: "What transport does MCP use?",
        correctCount: 1,
        options: [
          {
            id: "mcp-q2-a",
            text: "JSON-RPC over stdio or HTTP+SSE",
            correct: true,
            explanation:
              "MCP is transport-agnostic; the most common transports are stdio (local) and HTTP+SSE (remote).",
          },
          {
            id: "mcp-q2-b",
            text: "gRPC only",
            correct: false,
            explanation:
              "gRPC is a popular RPC framework, but MCP standardizes on JSON-RPC, not gRPC.",
          },
          {
            id: "mcp-q2-c",
            text: "FTP",
            correct: false,
            explanation:
              "FTP is for file transfer, not for tool calling.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "agent-architecture" },
    ],
    difficulty: "advanced",
    estimatedMinutes: 5,
    tags: ["mcp", "tool-use", "protocol"],
    referenceIds: ["anthropic-mcp"],
    verifiedAt: "2026-08-19",
    order: 3,
  },
  {
    id: "temperature-sampling",
    categoryId: "operations",
    title: "Temperature, Top-p & Sampling",
    summary:
      "How decoding parameters turn the model's full softmax distribution into a single chosen token.",
    explanation: `At every step the model produces a **logit vector** over the entire vocabulary, then converts it to a probability distribution via softmax. The sampling step picks one token from that distribution according to a decoding strategy.

**Temperature (T)** rescales the logits before softmax: Pᵢ ∝ exp(zᵢ / T).

- **T → 0** makes the distribution peaked. The argmax is almost always chosen. Outputs become deterministic and "safe" but also flat and repetitive.
- **T = 1** is the unmodified distribution.
- **T > 1** flattens the distribution, raising the probability of less-likely tokens. Outputs become more varied and creative, but also more error-prone.

**Top-p (nucleus sampling)** keeps the smallest set of tokens whose cumulative probability mass exceeds p, then samples from that set. Top-p = 0.9 means "draw from the tokens that together account for 90% of the probability mass, ignoring the long tail." Top-p = 1.0 is equivalent to no truncation.

**Top-k** is a related idea: keep only the k most probable tokens, then sample. It is more rigid than top-p because it ignores probability mass.

**When to use what:**

- **Code, math, structured extraction:** T ≤ 0.2, top-p ≈ 0.95. You want determinism.
- **Chat, general Q&A:** T ≈ 0.7, top-p ≈ 0.9. Balanced.
- **Brainstorming, creative writing:** T ≥ 1.0, top-p ≈ 0.95. You want variety.

These parameters change the **output distribution**, not the model's beliefs. They are the cheapest knob you have.`,
    keyTakeaways: [
      "Temperature rescales logits; T=0 is greedy, T>1 is creative.",
      "Top-p samples from the smallest token set whose probability mass ≥ p.",
      "Low temperature for code, higher for creative work.",
    ],
    diagrams: [
      {
        id: "sampling-bars",
        title: "Effect of temperature on a distribution",
        caption:
          "Same logits, different temperatures. Lower T makes the highest bar dominate; higher T flattens the long tail.",
        svg: samplingDiagram,
      },
    ],
    quiz: [
      {
        id: "ts-q1",
        prompt: "What does top-p = 0.9 mean?",
        correctCount: 1,
        options: [
          {
            id: "ts-q1-a",
            text: "Sample from the smallest set of tokens whose cumulative probability ≥ 0.9",
            correct: true,
            explanation:
              "Nucleus sampling trims the long tail, then renormalizes and samples.",
          },
          {
            id: "ts-q1-b",
            text: "Keep the top 90% of tokens by rank",
            correct: false,
            explanation:
              "That would be a top-k style rule with k = 0.9 * vocab_size, which is not what top-p does.",
          },
          {
            id: "ts-q1-c",
            text: "Use 90% of the temperature",
            correct: false,
            explanation:
              "Top-p and temperature are independent parameters.",
          },
        ],
      },
      {
        id: "ts-q2",
        prompt: "Which setting is most appropriate for code generation?",
        correctCount: 1,
        options: [
          {
            id: "ts-q2-a",
            text: "Low temperature and moderate top-p",
            correct: true,
            explanation:
              "T ≈ 0.0–0.2 keeps code deterministic; top-p ≈ 0.95 trims the tail.",
          },
          {
            id: "ts-q2-b",
            text: "High temperature and high top-p",
            correct: false,
            explanation:
              "High T/top-p adds noise, which makes code less reliable.",
          },
          {
            id: "ts-q2-c",
            text: "Greedy decoding with no constraints",
            correct: false,
            explanation:
              "Pure greedy can loop; a small amount of top-p is usually safer.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "llm" },
    ],
    difficulty: "intro",
    estimatedMinutes: 5,
    tags: ["sampling", "temperature", "top-p"],
    referenceIds: ["anthropic-claude-temperature"],
    verifiedAt: "2026-08-19",
    order: 1,
  },
  {
    id: "hallucination",
    categoryId: "operations",
    title: "Hallucination & Grounding",
    summary:
      "Why models confidently produce false statements, and the operational patterns that reduce the failure rate.",
    explanation: `A **hallucination** is a model output that is fluent, confident, and not grounded in the provided context or the model's real beliefs. There are three common kinds:

1. **Closed-domain hallucination** — the model is given a document and asked to answer from it, but invents a fact that contradicts or goes beyond the document. The fix is **grounding**: instruct the model to answer only from the provided context, and to say "I don't know" otherwise.

2. **Open-domain hallucination** — the model is asked a factual question with no source. The model may produce a plausible-but-wrong answer, especially for niche or recent topics beyond its training cutoff. The fix is **RAG** plus **citation**: provide the source, force the model to cite it.

3. **Reasoning hallucination** — the model produces a chain of steps that is internally inconsistent or arithmetically wrong, but the final answer is presented as correct. The fix is **chain-of-thought** with **self-critique** or external verifiers (e.g. a calculator for math).

**Why does it happen?** The model is a next-token predictor, not a fact database. When its training data is sparse on a topic, or when the prompt pushes it into an unfamiliar region of the input space, the most *probable* next token is not the most *true* one. Confident, fluent text is a property of the language modeling objective — it does not imply confidence in truth.

**Operational mitigations:**

- **RAG with citations** for fresh or proprietary facts.
- **Tool use** for verifiable computation (search, code execution, calculators).
- **Self-consistency**: sample multiple answers and take the majority.
- **Refusal training**: teach the model to say "I don't know" when context is insufficient.
- **Evaluation**: build a labeled eval set and track hallucination rate over time.`,
    keyTakeaways: [
      "Hallucination is fluent-but-ungrounded output from a next-token predictor.",
      "RAG, tool use, and refusal training are the main mitigations.",
      "Always build an evaluation set and measure hallucination rate over time.",
    ],
    diagrams: [],
    quiz: [
      {
        id: "ha-q1",
        prompt: "What is a closed-domain hallucination?",
        correctCount: 1,
        options: [
          {
            id: "ha-q1-a",
            text: "The model invents facts that go beyond or contradict the provided source",
            correct: true,
            explanation:
              "Even with RAG, the model can extrapolate beyond the document unless explicitly constrained.",
          },
          {
            id: "ha-q1-b",
            text: "The model refuses to answer",
            correct: false,
            explanation:
              "Refusal is the *opposite* of hallucination — the model abstains.",
          },
          {
            id: "ha-q1-c",
            text: "The embedding index is empty",
            correct: false,
            explanation:
              "An empty index is a system error, not a hallucination.",
          },
        ],
      },
      {
        id: "ha-q2",
        prompt: "Why is self-consistency (sample-many, take-majority) a partial mitigation?",
        correctCount: 1,
        options: [
          {
            id: "ha-q2-a",
            text: "It averages out independent errors and surfaces consensus",
            correct: true,
            explanation:
              "When errors are uncorrelated, the majority vote is more often correct than any single sample.",
          },
          {
            id: "ha-q2-b",
            text: "It retrains the model",
            correct: false,
            explanation:
              "Self-consistency is inference-time; no weights are updated.",
          },
          {
            id: "ha-q2-c",
            text: "It reduces token cost",
            correct: false,
            explanation:
              "Sampling many answers increases cost; the trade is accuracy, not cost.",
          },
        ],
      },
    ],
    relations: [
      { kind: "prerequisite", targetId: "llm" },
      { kind: "related", targetId: "rag" },
    ],
    difficulty: "core",
    estimatedMinutes: 5,
    tags: ["hallucination", "grounding", "evaluation"],
    referenceIds: ["wikipedia-hallucination", "openai-rag-overview"],
    verifiedAt: "2026-08-19",
    order: 2,
  },
];
