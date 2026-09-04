import { atlasDataset } from "@/data";
import { defineVendorEntry } from "@/data/vendor-entries";
import { parseAtlasDataset } from "@/data/validation";

const expectedCategoryIds = [
  "models",
  "chat-knowledge-work",
  "coding-agents",
  "agentic-workflows",
  "customization",
  "skills-plugins",
  "connectors-mcp",
  "memory-context",
  "files-artifacts",
  "research-web",
  "computer-browser-voice",
  "local-cloud-environments",
  "automation-scheduling",
  "permissions-security",
  "api-sdk",
  "enterprise-governance",
  "pricing-plans",
] as const;

const expectedCapabilityIds = [
  "frontier-model-lineup",
  "context-window",
  "multimodal-input",
  "native-image-generation",
  "conversational-chat",
  "projects",
  "delegated-knowledge-work",
  "long-running-work",
  "primary-coding-agent",
  "terminal-cli",
  "ide-integration",
  "desktop-coding",
  "browser-cloud-coding",
  "custom-subagents",
  "multi-agent-orchestration",
  "hosted-agent-runtime",
  "function-tool-calling",
  "project-instruction-file",
  "configuration-scopes",
  "lifecycle-hooks",
  "custom-agent-definitions",
  "agent-skills",
  "plugin-packaging",
  "plugin-distribution",
  "mcp-client",
  "remote-connectors",
  "local-connectors",
  "chat-memory",
  "project-memory",
  "coding-auto-memory",
  "cross-provider-import",
  "file-analysis",
  "document-generation",
  "interactive-artifacts",
  "sandboxed-code-execution",
  "web-search",
  "deep-research",
  "source-citations",
  "web-fetch",
  "computer-use-product",
  "computer-use-api",
  "browser-control",
  "voice-mode",
  "local-execution",
  "managed-cloud-environments",
  "worktree-isolation",
  "execution-sandbox",
  "scheduled-tasks",
  "background-continuation",
  "event-driven-automation",
  "permission-modes",
  "fine-grained-permission-rules",
  "full-autonomy-mode",
  "enterprise-policy",
  "core-model-api",
  "agent-sdk",
  "built-in-api-tools",
  "api-mcp",
  "team-enterprise-plans",
  "sso-scim",
  "audit-logs",
  "data-retention-controls",
  "consumer-plans",
  "business-plans",
  "enterprise-pricing",
  "api-token-pricing",
] as const;

const officialSourceHosts = new Set([
  "docs.anthropic.com",
  "code.claude.com",
  "support.claude.com",
  "support.anthropic.com",
  "www.anthropic.com",
  "claude.com",
  "platform.claude.com",
  "developers.openai.com",
  "learn.chatgpt.com",
  "platform.openai.com",
  "help.openai.com",
  "openai.com",
  "chatgpt.com",
  "z.ai",
  "chat.z.ai",
  "docs.z.ai",
  "zcode.z.ai",
  "autoclaw.z.ai",
  "minimax.com",
  "platform.minimax.com",
  "docs.minimax.com",
  "www.minimax.io",
  "platform.minimax.io",
  "api-docs.deepseek.com",
  "deepseek.com",
  "www.deepseek.com",
  "deepseekdocs.com",
  "qwen.ai",
  "chat.qwen.ai",
  "qwencloud.com",
  "www.qwencloud.com",
  "docs.qwencloud.com",
  "qwenlm.github.io",
  "www.alibabagroup.com",
]);

const expectedVendorIds = ["anthropic", "openai", "zai", "minimax", "deepseek", "qwen"] as const;
const verificationDateByEntryId = {
  "anthropic-frontier-model-lineup": "2026-09-04",
  "anthropic-context-window": "2026-09-04",
  "anthropic-multimodal-input": "2026-09-04",
  "zai-frontier-model-lineup": "2026-09-04",
  "zai-context-window": "2026-09-04",
  "zai-multimodal-input": "2026-09-04",
  "minimax-frontier-model-lineup": "2026-09-04",
  "minimax-context-window": "2026-09-04",
  "minimax-multimodal-input": "2026-09-04",
  "minimax-core-model-api": "2026-09-04",
  "minimax-consumer-plans": "2026-09-04",
  "minimax-api-token-pricing": "2026-09-04",
  "deepseek-frontier-model-lineup": "2026-09-04",
  "deepseek-context-window": "2026-09-04",
  "deepseek-multimodal-input": "2026-09-04",
  "openai-frontier-model-lineup": "2026-08-31",
  "openai-context-window": "2026-08-31",
  "openai-multimodal-input": "2026-08-31",
  "qwen-frontier-model-lineup": "2026-08-31",
  "qwen-context-window": "2026-08-31",
  "qwen-multimodal-input": "2026-08-31",
  "anthropic-native-image-generation": "2026-08-24",
  "openai-native-image-generation": "2026-08-24",
  "anthropic-core-model-api": "2026-08-24",
  "openai-core-model-api": "2026-08-24",
  "anthropic-api-token-pricing": "2026-08-24",
  "openai-api-token-pricing": "2026-08-24",
} as const;
const expectedVendorPairs = [
  ["anthropic", "minimax"],
  ["anthropic", "openai"],
  ["anthropic", "zai"],
  ["deepseek", "anthropic"],
  ["deepseek", "minimax"],
  ["deepseek", "openai"],
  ["deepseek", "zai"],
  ["minimax", "openai"],
  ["minimax", "zai"],
  ["openai", "zai"],
  ["qwen", "anthropic"],
  ["qwen", "deepseek"],
  ["qwen", "minimax"],
  ["qwen", "openai"],
  ["qwen", "zai"],
] as const;
const expectedPairKeys = expectedVendorPairs
  .map(([left, right]) => [left, right].sort().join("+"))
  .sort();

describe("canonical Atlas dataset", () => {
  it("ships the complete six-vendor seed with evidence for every comparison", () => {
    expect(atlasDataset.vendors.map(({ id }) => id)).toEqual([
      ...expectedVendorIds,
    ]);
    expect(atlasDataset.categories.map(({ id }) => id)).toEqual(
      expectedCategoryIds,
    );
    expect(atlasDataset.categories).toHaveLength(17);
    expect(atlasDataset.capabilities.map(({ id }) => id)).toEqual(
      expectedCapabilityIds,
    );
    expect(
      new Set(atlasDataset.capabilities.map((item) => item.categoryId)).size,
    ).toBe(17);
    expect(atlasDataset.vendorEntries).toHaveLength(396);
    expect(atlasDataset.assessments).toHaveLength(990);
    expect(
      atlasDataset.assessments.every(
        (assessment) => !assessment.summary.includes("undefined"),
      ),
    ).toBe(true);
    expect(atlasDataset.sources.length).toBeGreaterThanOrEqual(100);

    for (const categoryId of expectedCategoryIds) {
      expect(
        atlasDataset.capabilities.filter(
          (capability) => capability.categoryId === categoryId,
        ).length,
        `capability coverage for ${categoryId}`,
      ).toBeGreaterThanOrEqual(2);
    }

    for (const capability of atlasDataset.capabilities) {
      const entries = atlasDataset.vendorEntries.filter(
        (entry) => entry.capabilityId === capability.id,
      );
      expect(
        entries.map(({ vendorId }) => vendorId).sort(),
        `vendor entries for ${capability.id}`,
      ).toEqual([...expectedVendorIds].sort());

      const assessments = atlasDataset.assessments.filter(
        (assessment) => assessment.capabilityId === capability.id,
      );
      expect(assessments, `assessments for ${capability.id}`).toHaveLength(15);
      expect(
        assessments
          .map(({ vendorIds }) => [...vendorIds].sort().join("+"))
          .sort(),
        `assessment pairs for ${capability.id}`,
      ).toEqual(expectedPairKeys);
    }

    expect(
      atlasDataset.sources.every((source) =>
        source.url.startsWith("https://"),
      ),
    ).toBe(true);
    expect(
      atlasDataset.sources.every((source) =>
        officialSourceHosts.has(new URL(source.url).hostname),
      ),
    ).toBe(true);
    expect(
      atlasDataset.vendorEntries.every((entry) => entry.sourceIds.length > 0),
    ).toBe(true);
    const baselineEntryDateByVendor = {
      anthropic: "2026-08-11",
      openai: "2026-08-11",
      zai: "2026-08-19",
      minimax: "2026-08-11",
      deepseek: "2026-08-19",
      qwen: "2026-08-19",
    } as const;
    for (const entry of atlasDataset.vendorEntries) {
      const refreshedDate = verificationDateByEntryId[
        entry.id as keyof typeof verificationDateByEntryId
      ];
      expect(entry.verifiedAt, `verification date for ${entry.id}`).toBe(
        refreshedDate ?? baselineEntryDateByVendor[entry.vendorId],
      );
    }

    for (const model of atlasDataset.models) {
      const expectedDate =
        model.vendorId === "openai"
          ? "2026-08-31"
          : model.vendorId === "qwen" && model.id !== "qwen3-8-flash"
            ? "2026-08-19"
            : model.id === "glm-image"
              ? "2026-08-19"
              : "2026-09-04";
      expect(model.verifiedAt, `verification date for ${model.id}`).toBe(expectedDate);
    }

    const planDateByVendor = {
      anthropic: "2026-08-11",
      openai: "2026-08-11",
      zai: "2026-08-19",
      minimax: "2026-09-04",
      deepseek: "2026-09-04",
      qwen: "2026-08-19",
    } as const;
    for (const plan of atlasDataset.plans) {
      expect(plan.verifiedAt, `verification date for ${plan.id}`).toBe(
        planDateByVendor[plan.vendorId],
      );
    }

    for (const vendorId of expectedVendorIds) {
      expect(
        atlasDataset.models.some((model) => model.vendorId === vendorId),
        `model coverage for ${vendorId}`,
      ).toBe(true);
      expect(
        atlasDataset.plans.some((plan) => plan.vendorId === vendorId),
        `plan coverage for ${vendorId}`,
      ).toBe(true);
    }
  });

  it("accepts a seventh-vendor fact through the same normalized entry contract", () => {
    const googleEntry = defineVendorEntry({
      id: "google-frontier-model-lineup",
      capabilityId: "frontier-model-lineup",
      vendorId: "google",
      title: "Current Gemini models",
      summary: "A normalized sixth-vendor entry used to exercise the authoring contract.",
      details: [],
      productNames: ["Gemini"],
      availability: "available",
      sourceIds: ["openai-models"],
      verifiedAt: "2026-08-19",
    });
    const extended = parseAtlasDataset(
      {
        ...atlasDataset,
        vendors: [
          ...atlasDataset.vendors,
          {
            id: "google",
            name: "Google",
            shortName: "Gemini",
            ecosystemName: "Gemini ecosystem",
            description: "A sixth ecosystem fixture.",
            homepageUrl: "https://www.google.com/",
            accent: "#4285f4",
          },
        ],
        vendorEntries: [...atlasDataset.vendorEntries, googleEntry],
      },
      new Date("2026-09-04T12:00:00Z"),
    );

    expect(extended.vendorEntries.at(-1)).toEqual(googleEntry);
    expect(extended.vendorEntries).toHaveLength(397);
  });

  it("publishes the verified GPT-5.6 token rates", () => {
    const sol = atlasDataset.models.find(({ id }) => id === "gpt-5-6-sol");
    const terra = atlasDataset.models.find(({ id }) => id === "gpt-5-6-terra");
    const luna = atlasDataset.models.find(({ id }) => id === "gpt-5-6-luna");

    expect(sol?.pricing).toEqual({
      inputPerMillionUsd: 4,
      cachedInputPerMillionUsd: 0.4,
      outputPerMillionUsd: 20,
    });
    expect(terra?.pricing).toEqual({
      inputPerMillionUsd: 2,
      cachedInputPerMillionUsd: 0.2,
      outputPerMillionUsd: 12,
    });
    expect(luna?.pricing).toEqual({
      inputPerMillionUsd: 0.2,
      cachedInputPerMillionUsd: 0.02,
      outputPerMillionUsd: 1.2,
    });
  });

  it("publishes the current Claude Fable release and cache-read price", () => {
    const fable = atlasDataset.models.find(({ id }) => id === "claude-fable-5-1");

    expect(fable?.name).toBe("Claude Fable 5.1");
    expect(fable?.knowledgeCutoff).toBe("2026-06");
    expect(fable?.pricing?.cachedInputPerMillionUsd).toBe(0.25);
  });

  it("publishes the verified GLM-5.3 token rates and coding-plan quotas", () => {
    const glm53 = atlasDataset.models.find(({ id }) => id === "glm-5-3");
    const glm5 = atlasDataset.models.find(({ id }) => id === "glm-5");
    const lite = atlasDataset.plans.find(({ id }) => id === "glm-coding-lite");

    expect(glm53?.pricing).toEqual({
      inputPerMillionUsd: 1.4,
      cachedInputPerMillionUsd: 0.26,
      outputPerMillionUsd: 4.4,
    });
    expect(glm53?.contextWindowTokens).toBe(1_000_000);
    expect(glm5?.contextWindowTokens).toBe(200_000);
    expect(lite?.priceDisplay).toBe("$18/month");
    expect(lite?.highlights).toContain("10,000 weekly credits with 2,000 credits per 5 hours");
  });

  it("publishes the verified MiniMax M3 and M2.7 token rates", () => {
    const m3 = atlasDataset.models.find(({ id }) => id === "minimax-m3");
    const m27 = atlasDataset.models.find(({ id }) => id === "minimax-m2-7");
    const highspeed = atlasDataset.models.find(
      ({ id }) => id === "minimax-m2-7-highspeed",
    );

    expect(m3?.pricing).toEqual({
      inputPerMillionUsd: 0.3,
      cachedInputPerMillionUsd: 0.06,
      outputPerMillionUsd: 1.2,
    });
    expect(m3?.lifecycle).toBe("current");
    expect(m27?.lifecycle).toBe("legacy");
    expect(highspeed?.lifecycle).toBe("legacy");
    expect(m27?.pricing).toEqual({
      inputPerMillionUsd: 0.3,
      cachedInputPerMillionUsd: 0.06,
      outputPerMillionUsd: 1.2,
    });
    expect(highspeed?.pricing).toEqual({
      inputPerMillionUsd: 0.6,
      cachedInputPerMillionUsd: 0.06,
      outputPerMillionUsd: 2.4,
    });
  });

  it("describes Claude Max with source-supported usage multiples", () => {
    const max5x = atlasDataset.plans.find(({ id }) => id === "claude-max-5x");
    const max20x = atlasDataset.plans.find(({ id }) => id === "claude-max-20x");

    expect(max5x?.highlights).toContain("5x more usage than Pro");
    expect(max20x?.highlights).toContain("20x more usage than Pro");
    expect([...max5x!.highlights, ...max20x!.highlights].join(" ")).not.toMatch(
      /capacity/i,
    );
  });

  it("publishes the verified DeepSeek-V4 token rates", () => {
    const pro = atlasDataset.models.find(({ id }) => id === "deepseek-v4-pro");
    const flash = atlasDataset.models.find(({ id }) => id === "deepseek-v4-flash");

    expect(pro?.pricing).toEqual({
      inputPerMillionUsd: 0.66,
      cachedInputPerMillionUsd: 0.022,
      outputPerMillionUsd: 1.98,
    });
    expect(pro?.contextWindowTokens).toBe(1_000_000);
    expect(pro?.maxOutputTokens).toBe(384_000);
    expect(flash?.pricing).toEqual({
      inputPerMillionUsd: 0.22,
      cachedInputPerMillionUsd: 0.007,
      outputPerMillionUsd: 0.66,
    });
  });

  it("publishes the verified Qwen3.8-Max token rates", () => {
    const max = atlasDataset.models.find(({ id }) => id === "qwen3-8-max");

    expect(max?.pricing).toEqual({
      inputPerMillionUsd: 2,
      cachedInputPerMillionUsd: 0.25,
      outputPerMillionUsd: 6,
    });
    expect(max?.contextWindowTokens).toBe(1_000_000);
    expect(max?.maxOutputTokens).toBe(128_000);
    expect(max?.inputModalities).toEqual(["text", "image", "video"]);
  });

  it("publishes the current MiniMax Token Plan tiers", () => {
    const plus = atlasDataset.plans.find(({ id }) => id === "minimax-token-plus");
    const max = atlasDataset.plans.find(({ id }) => id === "minimax-token-max");
    const ultra = atlasDataset.plans.find(({ id }) => id === "minimax-token-ultra");

    expect(plus?.priceDisplay).toBe("$20/month");
    expect(max?.priceDisplay).toBe("$50/month");
    expect(ultra?.priceDisplay).toBe("$120/month");
    expect(plus?.highlights).toContain("About 1.7B tokens of M3 usage per month");
    expect(max?.highlights).toContain("About 5.1B tokens of M3 usage per month");
    expect(ultra?.highlights).toContain("About 12.5B tokens of M3 usage per month");
  });
});
