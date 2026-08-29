# AIA Structural Console Renewal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver the approved compact, full-width, responsive evidence console while preserving the current dataset and editorial identity.

**Architecture:** Keep `ResearchConsole` as the only interactive state boundary. Recompose its existing category and filter components into a horizontal taxonomy plus a closed secondary-filter disclosure, then reflow the existing semantic comparison table into cards with responsive CSS rather than duplicating the interactive DOM.

**Tech Stack:** Next.js 16, React 19, TypeScript 5.9, Tailwind CSS 4 global styles, Vitest, Testing Library, Playwright

**Spec:** `docs/superpowers/specs/2026-08-29-aia-structural-console-renewal-design.md`

## Global Constraints

- Preserve the current Anthropic/OpenAI canonical records and 17-category taxonomy.
- Do not modify the pre-existing `src/data/`, `tests/data/dataset.test.ts`, or freshness-date changes except to preserve them.
- Do not add dependencies, routes, remote assets, network requests, commits, pushes, deployments, cloud changes, or DNS changes.
- Keep the page English-only and retain its no-ranking/no-winner framing.

---

### Task 1: Compact evidence-snapshot introduction

**Files:**
- Modify: `tests/app/page.test.tsx`
- Modify: `src/components/atlas/atlas-intro.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `AtlasDataset` and its existing `verifiedAt` fields.
- Produces: one `Evidence snapshot` label, one formatted latest check date, and no repeated `Latest verification` card.

- [ ] **Step 1: Write the failing page test**

```tsx
expect(screen.getByText("Evidence snapshot")).toBeVisible();
expect(screen.queryByText("Latest verification")).not.toBeInTheDocument();
```

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm test -- tests/app/page.test.tsx`

Expected: FAIL because the page still renders `Latest verification` twice and has no `Evidence snapshot` label.

- [ ] **Step 3: Implement the compact introduction**

Remove `.atlas-summary`, label the single date statistic `Evidence snapshot`, render the date in a `<time>`, and add the sentence `Verification dates record source checks, not release dates.`

- [ ] **Step 4: Run the focused test and verify GREEN**

Run: `npm test -- tests/app/page.test.tsx`

Expected: PASS.

### Task 2: Recompose taxonomy and secondary filters

**Files:**
- Modify: `tests/components/research-console.test.tsx`
- Modify: `src/components/atlas/mobile-filter-sheet.tsx`
- Modify: `src/components/atlas/research-console.tsx`
- Modify: `src/components/atlas/category-rail.tsx`
- Modify: `src/components/atlas/filter-toolbar.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: existing `AtlasState`, `CategoryRail`, and `FilterGroups` callbacks.
- Produces: `More filters` as a closed native disclosure, a horizontal `Capability categories` navigation, visible result count, and `.active-filter-summary` chips.

- [ ] **Step 1: Write the failing component test**

```tsx
const filters = screen.getByText("More filters").closest("details");
expect(filters).not.toHaveAttribute("open");
expect(screen.getByRole("navigation", { name: "Capability categories" })).toBeVisible();
```

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm test -- tests/components/research-console.test.tsx`

Expected: FAIL because the disclosure is currently named `Categories & filters` and starts open.

- [ ] **Step 3: Implement the command and taxonomy structure**

Move `CategoryRail` outside `MobileFilterSheet`, remove the `open` attribute, rename the summary to `More filters`, keep only `FilterGroups` in the panel, and render the existing constraints as chips.

- [ ] **Step 4: Run the focused component test and verify GREEN**

Run: `npm test -- tests/components/research-console.test.tsx`

Expected: PASS.

### Task 3: Reflow the semantic comparison into responsive cards

**Files:**
- Modify: `e2e/atlas.spec.ts`
- Modify: `src/components/atlas/comparison-row.tsx`
- Modify: `src/components/atlas/comparison-table.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: the current semantic table, row expansion state, vendor names, and `EvidencePanel`.
- Produces: a full-width desktop table with no horizontal overflow and a single-DOM responsive card layout below the desktop breakpoint.

- [ ] **Step 1: Write failing responsive assertions**

```ts
expect(tableOverflow.scrollWidth).toBeLessThanOrEqual(tableOverflow.clientWidth);
expect(firstComparison.top).toBeLessThan(viewport.height);
```

- [ ] **Step 2: Run the focused browser tests and verify RED**

Run: `npx playwright test e2e/atlas.spec.ts --grep "searches|first-viewport"`

Expected: FAIL because the table is wider than its scroller and the mobile filter disclosure starts open.

- [ ] **Step 3: Implement responsive row labels and CSS reflow**

Pass `leftVendor.name` and `rightVendor.name` into comparison rows, add visible `.comparison-cell-label` spans for responsive states, reduce the desktop table minimum width, and reflow table sections into bordered cards below 1200 px. Keep evidence rows directly adjacent to their owning comparison rows.

- [ ] **Step 4: Run focused unit and browser tests and verify GREEN**

Run: `npm test -- tests/components/research-console.test.tsx && npx playwright test e2e/atlas.spec.ts --grep "searches|first-viewport"`

Expected: PASS.

### Task 4: Improve vendor-summary readability

**Files:**
- Modify: `src/components/atlas/vendor-comparison.tsx`
- Modify: `src/app/globals.css`
- Test: `tests/components/vendor-comparison.test.tsx`

**Interfaces:**
- Consumes: existing `buildVendorSummary` output and canonical model/plan records.
- Produces: readable category coverage at desktop and stacked vendor coverage blocks at narrow widths with the same accessible labels.

- [ ] **Step 1: Add a behavior test for labelled coverage**

Assert that both vendor coverage cells expose complete accessible availability summaries and that no ranking label appears.

- [ ] **Step 2: Run the test and establish whether behavior already passes**

Run: `npm test -- tests/components/vendor-comparison.test.tsx`

If the semantic behavior already passes, retain the existing test as characterization and limit this task to CSS refactoring; do not invent a failing assertion for styling internals.

- [ ] **Step 3: Implement the responsive coverage layout**

Increase label size, let each category row use full-width vendor groups below 768 px, and remove the mobile `min-width: 560px` horizontal-scroll requirement.

- [ ] **Step 4: Run the focused test**

Run: `npm test -- tests/components/vendor-comparison.test.tsx`

Expected: PASS.

### Task 5: Complete repository and browser verification

**Files:**
- Review: all modified files and the pre-existing dirty data files

**Interfaces:**
- Consumes: the complete implementation.
- Produces: fresh validation evidence, accepted desktop/mobile screenshots, no console errors, and a stopped local server.

- [ ] **Step 1: Run the complete local contract**

Run: `npm run validate:codex`

Expected: validation, lint, typecheck, unit/component tests, static build verification, and all Playwright tests pass.

- [ ] **Step 2: Inspect desktop and mobile in the in-app browser**

Verify 1440 × 900 and 390 × 844 initial states, category selection, more-filters disclosure, search, evidence expansion, vendor comparison, focus visibility, absence of page overflow, and clean console logs.

- [ ] **Step 3: Stop and audit**

Run: `npm run stop:codex && git diff --check && git status --short && git diff --stat`

Expected: no listener owned by this checkout, no whitespace errors, only intended UI/docs/test changes plus the preserved pre-existing data refresh.
