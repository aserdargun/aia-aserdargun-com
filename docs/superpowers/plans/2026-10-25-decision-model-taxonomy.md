# Decision Model Taxonomy Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement task-by-task in this isolated workspace. The user approved the research decision and requested implementation; no further design approval is needed.

**Goal:** Integrate structured decision models and qualified System 1/System 2 modes into both source-backed taxonomy maps.

**Architecture:** Keep hosted service references separate from open-weight recommendations. Add a complementary model-behavior axis, two tasks, primary evidence and bilingual panels without running any model or changing human review decisions.

**Tech Stack:** Next.js 16.3.4, React 19, Zod, static SVG, Vitest, Playwright.

**Spec:** `docs/audits/2026-10-25-decision-models-system-1-system-2-taxonomy.md`

## Global Constraints

- Local work only; preserve the original checkout and running processes.
- Primary observations in `src/data/sources.ts`; no fetch or React in data files.
- System 1/System 2 are qualified inference modes, separate from architecture and output contract.
- Exactly 87 tasks in 8 task families; 8 branches on the model map.
- Hosted references never acquire weight-file links or local-memory estimates.
- English identifiers and equivalent English/Turkish explanations.
- Run `npm run validate:codex` and `git diff --check` before handoff.

## Review Focus

- Hosted references cannot satisfy open-weight artifact or license requirements: validator rejection test.
- Missing, duplicated or mismatched citations fail validation: negative tests for hosted edges.
- Hybrid inference evidence refers to the exact original Qwen3 release: source-backed example test.
- New tasks show benchmark gaps rather than fabricated scores: coverage test.
- Both languages and narrow layouts show hosted evidence without download controls: browser test.

### Task 1: Source-backed contracts and catalogue

**Files:** `src/data/schema.ts`, `src/data/sources.ts`, `src/data/task-models.ts`, `src/data/model-families.ts`, `src/data/hosted-models.ts`, `src/data/task-benchmarks.ts`, `src/lib/task-models.ts`, `src/lib/model-families.ts`, `src/lib/hosted-models.ts`, `tests/data/decision-models.test.ts`.

**Interfaces:** Optional `hostedReferences` on tasks and families reference a separately validated `HostedModel` catalogue. Existing open-weight validators retain their artifact checks. New concepts use `inference-decision-behavior`; new task IDs are `action-selection` and `rubric-based-scoring`.

- [x] Add failing tests for behavior placement, hosted/open separation and invalid citations.
- [x] Run `npx vitest run tests/data/decision-models.test.ts`; expect missing-feature failures.
- [x] Add versioned schemas, primary sources, exact release observations, task and family mappings, and hosted validation.
- [x] Verify the focused tests once both maps are integrated in Task 2.

### Task 2: Maps and bilingual evidence panels

**Files:** `public/assets/taxonomy/*`, `src/data/taxonomy.ts`, `src/lib/labels.ts`, `src/components/taxonomy/*`, affected data tests and validation scripts.

**Interfaces:** Existing task/family URLs remain stable. Hosted references render with documentation, version and scope, never weight downloads. Model cards may expose bilingual names/definitions and aliases while SVG identifiers remain English.

- [x] Extend static SVGs, metadata, registered source IDs and reference definitions; preserve existing cards and geometry.
- [x] Render hosted references and inference-mode caveats in both languages; add exact-release open examples.
- [x] Update benchmark reviews for the two new tasks with explicit gaps.
- [x] Run focused data tests and `npm run validate:data`; expect all mappings and citations to resolve.

### Task 3: Verification and handoff

**Files:** `e2e/decision-models.spec.ts`, research record implementation status.

- [x] Add browser coverage for the new axis, both tasks, hosted/open separation and English/Turkish interactions.
- [x] Run `npm run validate:codex`; expect a successful exit.
- [x] Inspect desktop/mobile screenshots and browser console; review the complete diff and `git diff --check`.
- [x] Update the research record with actual implementation and verification status; leave changes reviewable locally.

### Additional authorized scope: Open-weight decision shortlist

- [x] Compare original publisher cards and original experiment reports; retain training-overlap and serving caveats.
- [x] Add Perplexity Decider v1.2, Decider Flash v1.2 and Cloudflare Clef alongside Strands Decider v21, with exact weight revisions, licenses, sizes, behavior memberships and the three supported task mappings.
- [x] Verify the shortlist's public artifact and graph contracts in `tests/data/decision-models.test.ts`.
- [x] Include the expanded catalogue in the final full validation and browser QA.
