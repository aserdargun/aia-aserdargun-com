# AIA content audit — 21 September 2026

Scope: local AIA content, evidence, Learn material, and its place in the aserdargun.com learning system. No publication.

## Coverage and limits

All 396 capability entries, 990 pair assessments, model/plan records and 15 Learn concepts were inventoried. All 204 original source/reference URLs were requested: 181 returned HTTP content and 23 failed the direct HTTP pass. HTTP success is a reachability check, not claim verification. The initial pass is preserved in [the URL inventory](2026-09-21-source-reachability.csv). Targeted primary-source review and browser-tool retries established the changes below. Unchanged dates are not a claim of fresh verification.

Current inventory: 6 vendors, 17 categories, 66 capabilities, 396 vendorEntries, 990 assessments, 27 models, 27 plans, 157 sources.

## Corrections

- Removed 34 citations on minimax.com, which belongs to a fire-protection business, and its invalid platform subdomain. The AI provider uses minimax.io. Unsupported positive claims were withdrawn; the official documentation index is explicitly a review pointer, not proof of availability. Original dates remain on unresolved records.
- Replaced the community-maintained DeepSeek MCP citation with the official Harness guide linked from DeepSeek's own site, and excluded the community host from primary-source validation.
- Recovered five narrower MiniMax Code statements using the official M3 announcement after withdrawing their invalid citations.
- Corrected MiniMax MCP server/client confusion, beta server-tool scope, current M2.7 lifecycle, and suspended new Team purchases.
- Added DeepSeek-V4.1-Flash; marked retired Flash aliases deprecated and removed their obsolete rates. Added peak/off-peak and M3 context-tier price qualifications.
- Added GLM-5.2 and GLM-5.3-FlashX; completed Flash pricing. Updated Qwen Personal tiers and made the old Coding Plan price explicitly unverified after its redirect.
- Corrected causal masking, BPE training versus encoding, illustrative token IDs, RLHF versus DPO, sampling/reproducibility, MoE overhead, RAG/grounding claims, and MCP compatibility/security language. Kept old concept verification dates where a complete reference review was not established.
- Replaced Wikipedia and misdirected RAG references with original research, corrected the RLHF paper attribution, and repaired broken Anthropic references.
- Added bilingual onward navigation to GPU, LLM, USL and the root site; all five destination URLs returned HTTP 200. The existing Atlas and Learn content remains English; the bilingual navigation is not a claim of a fully translated application.
- Added canonical metadata, deterministic sitemap/robots, source-host validation, visible record dates/lifecycle/billing qualifications, and full-route desktop/mobile coverage.

## Rechecked records

The following existing records received 2026-09-21 only after their cited claims were reviewed. New records carry their own sources.

**vendorEntries:** `deepseek-mcp-client`, `deepseek-local-connectors`, `minimax-primary-coding-agent`, `minimax-desktop-coding`, `minimax-multi-agent-orchestration`, `minimax-computer-use-product`, `minimax-long-running-work`, `zai-frontier-model-lineup`, `minimax-frontier-model-lineup`, `minimax-mcp-client`, `minimax-web-search`, `minimax-web-fetch`, `minimax-built-in-api-tools`, `minimax-api-mcp`, `minimax-team-enterprise-plans`, `minimax-business-plans`, `deepseek-frontier-model-lineup`, `deepseek-multimodal-input`, `qwen-consumer-plans`

**models:** `claude-fable-5-1`, `claude-opus-5`, `claude-sonnet-5`, `claude-haiku-4-5`, `gpt-6-astra`, `gpt-5-6-sol`, `gpt-5-6-terra`, `gpt-5-6-luna`, `glm-5-3-flash`, `minimax-m3`, `minimax-m2-7`, `minimax-m2-7-highspeed`, `deepseek-v4-pro`, `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`, `deepseek-v4-1-flash`, `glm-5-2`, `glm-5-3-flashx`

**plans:** `minimax-token-plus`, `minimax-token-max`, `minimax-token-ultra`, `minimax-api`, `deepseek-api`, `qwen-token-plan-personal`, `qwen-token-plan-team`

## Unresolved and frozen evidence

Source failures below retain dependent dates unless an independently reviewed replacement or explicit correction is recorded above. Unavailable access alone is not proof of feature removal.

- `openai-chatgpt-projects`: HTTP Error 403: Forbidden. Dependent records not advanced: `openai-projects`, `openai-project-memory`.
- `openai-chatgpt-memory`: HTTP Error 403: Forbidden. Dependent records not advanced: `openai-chat-memory`.
- `openai-chatgpt-files`: HTTP Error 403: Forbidden. Dependent records not advanced: `openai-file-analysis`.
- `openai-chatgpt-deep-research`: HTTP Error 403: Forbidden. Dependent records not advanced: `openai-deep-research`, `openai-source-citations`.
- `openai-chatgpt-pricing`: HTTP Error 403: Forbidden. Dependent records not advanced: `openai-conversational-chat`, `openai-remote-connectors`, `openai-web-search`, `openai-team-enterprise-plans`, `openai-sso-scim`, `openai-consumer-plans`, `openai-business-plans`, `openai-enterprise-pricing`, `chatgpt-free`, `chatgpt-plus`, `chatgpt-go`, `chatgpt-pro`, `chatgpt-business`, `chatgpt-enterprise`.
- `openai-enterprise`: HTTP Error 403: Forbidden. Dependent records not advanced: `openai-enterprise-policy`, `openai-team-enterprise-plans`, `openai-enterprise-pricing`, `chatgpt-enterprise`.
- `openai-enterprise-privacy`: HTTP Error 403: Forbidden. Dependent records not advanced: `openai-data-retention-controls`.

The Z.ai subscription page and Qwen app shells did not expose enough text to reverify their complete dependent claims. Other unchanged capability records retain their earlier dates.

## Removed citation IDs

`minimax-agents-sdk`, `minimax-background-mode`, `minimax-code`, `minimax-code-agents`, `minimax-code-automations`, `minimax-code-browser`, `minimax-code-cli`, `minimax-code-computer-use`, `minimax-code-hooks`, `minimax-code-ide`, `minimax-code-import`, `minimax-code-long-running`, `minimax-code-memory`, `minimax-code-plugins`, `minimax-code-sandbox`, `minimax-code-security`, `minimax-code-skills`, `minimax-code-subagents`, `minimax-code-voice`, `minimax-computer-use-api`, `minimax-connectors`, `minimax-enterprise`, `minimax-enterprise-audit`, `minimax-enterprise-retention`, `minimax-enterprise-sso`, `minimax-files`, `minimax-memory`, `minimax-multi-agent`, `minimax-pricing`, `minimax-product`, `minimax-projects`, `minimax-research`, `minimax-tasks`, `minimax-webhooks`

## Remaining unknown MiniMax entries

- `minimax-conversational-chat`
- `minimax-projects`
- `minimax-delegated-knowledge-work`
- `minimax-terminal-cli`
- `minimax-ide-integration`
- `minimax-browser-cloud-coding`
- `minimax-custom-subagents`
- `minimax-hosted-agent-runtime`
- `minimax-project-instruction-file`
- `minimax-configuration-scopes`
- `minimax-lifecycle-hooks`
- `minimax-custom-agent-definitions`
- `minimax-agent-skills`
- `minimax-plugin-packaging`
- `minimax-plugin-distribution`
- `minimax-remote-connectors`
- `minimax-local-connectors`
- `minimax-chat-memory`
- `minimax-project-memory`
- `minimax-coding-auto-memory`
- `minimax-cross-provider-import`
- `minimax-file-analysis`
- `minimax-document-generation`
- `minimax-interactive-artifacts`
- `minimax-sandboxed-code-execution`
- `minimax-deep-research`
- `minimax-source-citations`
- `minimax-computer-use-api`
- `minimax-browser-control`
- `minimax-voice-mode`
- `minimax-local-execution`
- `minimax-managed-cloud-environments`
- `minimax-worktree-isolation`
- `minimax-execution-sandbox`
- `minimax-scheduled-tasks`
- `minimax-background-continuation`
- `minimax-event-driven-automation`
- `minimax-permission-modes`
- `minimax-fine-grained-permission-rules`
- `minimax-full-autonomy-mode`
- `minimax-enterprise-policy`
- `minimax-agent-sdk`
- `minimax-sso-scim`
- `minimax-audit-logs`
- `minimax-data-retention-controls`
- `minimax-enterprise-pricing`

## Verification

- `npm run validate:codex` passed: data validation, lint, TypeScript, 119 Vitest tests, 4 Node script tests, production build, static-export verification, 27 Playwright tests, and `git diff --check`.
- All 19 public content routes rendered at 1440px and 320px without horizontal overflow or uncaught page errors. Existing interaction tests also cover 390px and 1024px, URL state, keyboard focus, learning progress/recovery, and exports.
- Static verification includes the 404 page (20 HTML pages total), assets, sitemap, and robots. No live release is claimed.
- Desktop model/plan and mobile Learn screenshots were inspected. A focused two-test browser rerun passed after adjusting screenshot capture to wait for the browser's lazy paint; application code was unchanged.
- No preview or development server was left running by this audit.

## Key primary-source review links

- [MiniMax M3 and Code announcement](https://www.minimax.io/blog/minimax-m3)
- [MiniMax model catalog](https://platform.minimax.io/docs/guides/models-intro)
- [MiniMax Team plan restrictions](https://platform.minimax.io/docs/guides/pricing-token-plan-team)
- [DeepSeek current models and rates](https://api-docs.deepseek.com/quick_start/pricing/)
- [DeepSeek official Harness MCP guide](https://deepseek-harness.github.io/deepseek-harness/en/guide/mcp-memory)
- [Z.ai pricing](https://docs.z.ai/guides/overview/pricing)
- [Z.ai Flash family documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
- [Qwen Token Plan](https://docs.qwencloud.com/token-plan/overview)

Canonical source records and Learn references retain the remaining citation links.

Audit-stage delivery: commit=none; push=none; deploy=none.

Publication follow-up: the user subsequently authorized release. The upstream 18 September model refresh (`1689e9c`) was reconciled before publication; its later dates for unchanged GLM and Qwen records are preserved. The 21 September changes supersede overlapping DeepSeek records and retain the two frozen Z.ai Turbo dates.
