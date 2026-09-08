# AIA working contract

- Build a source-backed research console for comparing AI products and developer ecosystems.
- Keep UI truth in `src/app/` and `src/components/`; data truth in `src/data/` (pure data, no React, no DOM, no fetch); framework-agnostic helpers in `src/lib/`. Static assets live in `public/`.
- Primary observations live in `src/data/sources.ts` (vendor docs, official pricing pages). Human-authored review status (the `comparisonStatusValues` enum) is a decision input. AI/LLM-generated explanations under `src/lib/learn/` are observer outputs, never citations.
- Product, vendor, source, category, capability, plan, and assessment schema versions are explicit (Zod in `src/data/schema.ts`). Update affected versions when semantics change.
- Build output is deterministic; the static export snapshots sitemap and pages under `out/`. Freshness timestamps live in `src/lib/freshness.ts`; export utilities in `src/lib/export.ts`. Reject vendors or sources with invalid or missing primary citations.
- Keep Turkish and English controls and explanations equivalent. Learn module (`src/app/learn/`, `src/lib/learn/`) maintains parity; labels centralized in `src/lib/labels.ts`.
- Verify `npm run validate:codex` and review `git diff --check` before handoff.
- Local work only unless the user authorizes external publication. Preserve unrelated work and processes.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
