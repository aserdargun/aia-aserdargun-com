# AIA Structural Console Renewal Design

**Status:** Approved in chat on 2026-08-29

**Repository:** `aserdargun/ai-ecosystem-atlas`

## Purpose

Renew the existing research console without replacing its evidence-first editorial identity. The revision must make the first comparison reachable sooner, eliminate forced horizontal reading at supported viewports, and distinguish an evidence snapshot from a product release date.

## Boundaries

- Preserve the current Anthropic/OpenAI dataset and the existing provider-neutral taxonomy.
- Do not edit or overwrite the in-progress 2026-08-24 source, model, vendor-entry, or dataset-test refresh.
- Do not add a changelog or claim that a verification date is a release date.
- Do not add dependencies, routes, remote assets, analytics, authentication, or network requests.
- Do not commit, push, deploy, or change cloud or DNS state.

## Visual Direction

Keep the warm paper canvas, charcoal masthead, restrained orange highlight, vendor accents, editorial serif moments, square controls, and visible borders. The revision changes density and hierarchy rather than introducing a new brand language.

The title remains “Compare the ecosystems.” The repeated latest-verification card is removed. Coverage statistics become one compact strip with a single “Evidence snapshot” value and explanatory copy that verification dates record source checks rather than release dates.

## Console Structure

The search, vendor pair, result count, reset action, and view switch remain the primary command surface. Category navigation moves out of the left rail into a horizontally scrollable taxonomy strip, returning the full content width to the comparison.

Availability, assessment, and freshness controls live in a native `details` disclosure labelled “More filters.” It starts closed at every viewport. Active constraints appear as readable chips beneath the command surface so users can understand the current slice without reopening the disclosure.

## Responsive Comparison

At desktop widths the existing semantic table remains. With the left rail removed and narrower column allocation, its complete five-column anatomy must fit the available console width at 1440 px without horizontal scrolling.

At tablet and mobile widths the same semantic rows reflow into bordered comparison cards. Each card presents capability, left vendor, right vendor, assessment, and evidence in reading order. Vendor and assessment cells gain visible mobile labels. Evidence expands directly beneath its owning card and must not inherit a horizontal scroll position.

The category strip remains directly available on mobile. “More filters” starts closed, targets are at least 44 px high, and the first comparison card should enter the initial 390 × 844 viewport.

## Vendor Comparison

Preserve the no-ranking/no-aggregate-score framing. Increase the space available to category coverage, simplify tiny labels, and allow coverage rows to stack on mobile without a separate horizontal scroller. Models, plans, and assessment groups remain derived from the canonical records.

## Accessibility

- Preserve semantic headings, table structure, disclosure state, labels, URL state, and keyboard activation.
- Preserve the global visible focus indicator and reduced-motion behavior.
- Use native `details`/`summary` for secondary filters.
- Keep all interactive targets at least 44 px high on narrow screens.
- Do not duplicate interactive comparison controls in separate desktop/mobile DOM trees.

## Verification

Update unit/component expectations before production code and confirm they fail for the missing behavior. Then implement the minimum structural changes and run focused tests after each slice. Finish with `npm run validate:codex`, a fresh desktop/mobile browser walkthrough, console-log inspection, process cleanup, and full diff review.
