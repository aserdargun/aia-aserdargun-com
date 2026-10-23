import type { Source, TaxonomySource, TaskModelSource, BenchmarkSource } from "@/data/schema";

export const sources = [
  {
    id: "anthropic-models",
    title: "Models overview",
    publisher: "Anthropic",
    url: "https://platform.claude.com/docs/en/models/overview",
    sourceType: "documentation",
  },
  {
    id: "anthropic-api-pricing",
    title: "Claude API pricing",
    publisher: "Anthropic",
    url: "https://platform.claude.com/docs/en/about-claude/pricing",
    sourceType: "pricing",
  },
  {
    id: "anthropic-tool-use",
    title: "How tool use works",
    publisher: "Anthropic",
    url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works",
    sourceType: "documentation",
  },
  {
    id: "anthropic-tool-reference",
    title: "Tool reference",
    publisher: "Anthropic",
    url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-reference",
    sourceType: "documentation",
  },
  {
    id: "anthropic-server-tools",
    title: "Server tools",
    publisher: "Anthropic",
    url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/server-tools",
    sourceType: "documentation",
  },
  {
    id: "anthropic-managed-agents",
    title: "Claude Managed Agents tools",
    publisher: "Anthropic",
    url: "https://platform.claude.com/docs/en/managed-agents/tools",
    sourceType: "documentation",
  },
  {
    id: "anthropic-mcp",
    title: "Claude API MCP connector",
    publisher: "Anthropic",
    url: "https://platform.claude.com/docs/en/agents-and-tools/mcp-connector",
    sourceType: "documentation",
  },
  {
    id: "anthropic-claude-code-mcp",
    title: "Connect Claude Code to tools via MCP",
    publisher: "Anthropic",
    url: "https://code.claude.com/docs/en/mcp",
    sourceType: "documentation",
  },
  {
    id: "anthropic-connectors-docs",
    title: "Claude connectors overview",
    publisher: "Anthropic",
    url: "https://claude.com/docs/connectors/overview",
    sourceType: "documentation",
  },
  {
    id: "anthropic-claude-code",
    title: "Claude Code overview",
    publisher: "Anthropic",
    url: "https://code.claude.com/docs/en/overview",
    sourceType: "documentation",
  },
  {
    id: "anthropic-claude-code-cli",
    title: "Claude Code CLI reference",
    publisher: "Anthropic",
    url: "https://code.claude.com/docs/en/cli-reference",
    sourceType: "documentation",
  },
  {
    id: "anthropic-claude-code-settings",
    title: "Claude Code settings",
    publisher: "Anthropic",
    url: "https://code.claude.com/docs/en/settings",
    sourceType: "documentation",
  },
  {
    id: "anthropic-claude-code-subagents",
    title: "Claude Code subagents",
    publisher: "Anthropic",
    url: "https://code.claude.com/docs/en/sub-agents",
    sourceType: "documentation",
  },
  {
    id: "anthropic-claude-code-hooks",
    title: "Claude Code hooks",
    publisher: "Anthropic",
    url: "https://code.claude.com/docs/en/hooks",
    sourceType: "documentation",
  },
  {
    id: "anthropic-claude-code-skills",
    title: "Claude Code agent skills",
    publisher: "Anthropic",
    url: "https://code.claude.com/docs/en/skills",
    sourceType: "documentation",
  },
  {
    id: "anthropic-claude-code-plugins",
    title: "Claude Code plugins",
    publisher: "Anthropic",
    url: "https://code.claude.com/docs/en/plugins",
    sourceType: "documentation",
  },
  {
    id: "anthropic-claude-code-memory",
    title: "Claude Code memory",
    publisher: "Anthropic",
    url: "https://code.claude.com/docs/en/memory",
    sourceType: "documentation",
  },
  {
    id: "anthropic-claude-code-security",
    title: "Claude Code security",
    publisher: "Anthropic",
    url: "https://code.claude.com/docs/en/security",
    sourceType: "documentation",
  },
  {
    id: "anthropic-claude-code-sandbox",
    title: "Claude Code sandboxing",
    publisher: "Anthropic",
    url: "https://code.claude.com/docs/en/sandboxing",
    sourceType: "documentation",
  },
  {
    id: "anthropic-product",
    title: "Claude",
    publisher: "Anthropic",
    url: "https://claude.com/",
    sourceType: "product",
  },
  {
    id: "anthropic-connectors",
    title: "Claude connectors",
    publisher: "Anthropic",
    url: "https://claude.com/connectors",
    sourceType: "product",
  },
  {
    id: "anthropic-memory",
    title: "Bringing memory to Claude",
    publisher: "Anthropic",
    url: "https://claude.com/blog/memory",
    sourceType: "announcement",
  },
  {
    id: "anthropic-pricing",
    title: "Claude plans and pricing",
    publisher: "Anthropic",
    url: "https://claude.com/pricing",
    sourceType: "pricing",
  },
  {
    id: "anthropic-enterprise",
    title: "Claude enterprise solutions",
    publisher: "Anthropic",
    url: "https://claude.com/solutions/enterprise",
    sourceType: "product",
  },
  {
    id: "anthropic-cowork-scheduling",
    title: "Schedule recurring tasks in Claude Cowork",
    publisher: "Anthropic",
    url: "https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork",
    sourceType: "help",
  },
  {
    id: "openai-developers",
    title: "OpenAI for developers",
    publisher: "OpenAI",
    url: "https://developers.openai.com/",
    sourceType: "product",
  },
  {
    id: "openai-models",
    title: "OpenAI API models",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/models",
    sourceType: "documentation",
  },
  {
    id: "openai-gpt-6-astra",
    title: "GPT-6 Astra model card",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/models/gpt-6-astra",
    sourceType: "documentation",
  },
  {
    id: "openai-api-pricing",
    title: "OpenAI API pricing",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/pricing",
    sourceType: "pricing",
  },
  {
    id: "openai-tools",
    title: "OpenAI API tools",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/guides/tools",
    sourceType: "documentation",
  },
  {
    id: "openai-mcp",
    title: "MCP and connectors",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/guides/tools-connectors-mcp",
    sourceType: "documentation",
  },
  {
    id: "openai-agents-sdk",
    title: "OpenAI Agents SDK",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/guides/agents",
    sourceType: "documentation",
  },
  {
    id: "openai-multi-agent",
    title: "Multi-agent orchestration",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/guides/responses-multi-agent",
    sourceType: "documentation",
  },
  {
    id: "openai-background-mode",
    title: "Background mode",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/guides/background",
    sourceType: "documentation",
  },
  {
    id: "openai-webhooks",
    title: "Webhooks",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/guides/webhooks",
    sourceType: "documentation",
  },
  {
    id: "openai-image-generation",
    title: "Image generation",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/guides/image-generation",
    sourceType: "documentation",
  },
  {
    id: "openai-web-search",
    title: "Web search",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/guides/tools-web-search",
    sourceType: "documentation",
  },
  {
    id: "openai-computer-use",
    title: "Computer use",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/guides/tools-computer-use",
    sourceType: "documentation",
  },
  {
    id: "openai-codex",
    title: "ChatGPT documentation overview",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-cli",
    title: "Codex CLI",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/codex/cli",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-ide",
    title: "Codex IDE extension",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/codex/ide",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-cloud",
    title: "Codex cloud",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/cloud",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-agents",
    title: "Custom instructions with AGENTS.md",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/agent-configuration/agents-md",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-subagents",
    title: "Codex subagents",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/agent-configuration/subagents",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-config",
    title: "Codex configuration",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/config-file/config-basic",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-skills",
    title: "Codex skills",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/build-skills",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-plugins",
    title: "Codex plugins",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/plugins",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-hooks",
    title: "Codex hooks",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/hooks",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-worktrees",
    title: "Codex worktrees",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/environments/git-worktrees",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-sandbox",
    title: "Codex sandboxing",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/agent-approvals-security",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-security",
    title: "Codex security",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/security",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-memory",
    title: "Codex memories",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/customization/memories",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-automations",
    title: "Codex automations",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/automations",
    sourceType: "documentation",
  },
  {
    id: "openai-codex-long-running",
    title: "Long-running work in Codex",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/long-running-work",
    sourceType: "documentation",
  },
  {
    id: "openai-chatgpt-import",
    title: "Import from another agent",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/import",
    sourceType: "documentation",
  },
  {
    id: "openai-chatgpt-browser",
    title: "Browser in ChatGPT",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/browser",
    sourceType: "documentation",
  },
  {
    id: "openai-chatgpt-computer",
    title: "Computer use in ChatGPT",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/computer-use",
    sourceType: "documentation",
  },
  {
    id: "openai-chatgpt-voice",
    title: "Voice in ChatGPT",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/features/voice",
    sourceType: "documentation",
  },
  {
    id: "openai-chatgpt-projects",
    title: "Projects in ChatGPT",
    publisher: "OpenAI",
    url: "https://help.openai.com/en/articles/10169521-projects-in-chatgpt",
    sourceType: "help",
  },
  {
    id: "openai-chatgpt-memory",
    title: "Memory FAQ",
    publisher: "OpenAI",
    url: "https://help.openai.com/en/articles/8590148-memory-faq",
    sourceType: "help",
  },
  {
    id: "openai-chatgpt-files",
    title: "File uploads FAQ",
    publisher: "OpenAI",
    url: "https://help.openai.com/en/articles/8555545-file-uploads-faq",
    sourceType: "help",
  },
  {
    id: "openai-chatgpt-deep-research",
    title: "Deep research in ChatGPT",
    publisher: "OpenAI",
    url: "https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt",
    sourceType: "help",
  },
  {
    id: "openai-chatgpt-tasks",
    title: "Tasks in ChatGPT",
    publisher: "OpenAI",
    url: "https://help.openai.com/en/articles/10291617-tasks-in-chatgpt",
    sourceType: "help",
  },
  {
    id: "openai-chatgpt-pricing",
    title: "ChatGPT pricing",
    publisher: "OpenAI",
    url: "https://chatgpt.com/pricing/",
    sourceType: "pricing",
  },
  {
    id: "openai-enterprise",
    title: "What is ChatGPT Enterprise?",
    publisher: "OpenAI",
    url: "https://help.openai.com/en/articles/8265053-what-is-chatgpt-enterprise",
    sourceType: "help",
  },
  {
    id: "openai-enterprise-privacy",
    title: "Enterprise privacy at OpenAI",
    publisher: "OpenAI",
    url: "https://openai.com/enterprise-privacy/",
    sourceType: "product",
  },
  {
    id: "openai-enterprise-provisioning",
    title: "Groups and provisioning",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/enterprise/groups-and-provisioning",
    sourceType: "documentation",
  },
  {
    id: "openai-enterprise-governance",
    title: "ChatGPT enterprise governance",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/enterprise/governance",
    sourceType: "documentation",
  },
  {
    id: "openai-enterprise-audit",
    title: "Compliance API and audit events",
    publisher: "OpenAI",
    url: "https://learn.chatgpt.com/docs/enterprise/compliance-api",
    sourceType: "documentation",
  },
  {
    id: "zai-chat",
    title: "Z.ai chat",
    publisher: "Z.ai",
    url: "https://chat.z.ai/",
    sourceType: "product",
  },
  {
    id: "zai-subscribe",
    title: "GLM Coding Plan subscriptions",
    publisher: "Z.ai",
    url: "https://z.ai/subscribe",
    sourceType: "pricing",
  },
  {
    id: "zai-zcode",
    title: "ZCode",
    publisher: "Z.ai",
    url: "https://zcode.z.ai/en",
    sourceType: "product",
  },
  {
    id: "zai-zcode-docs",
    title: "ZCode documentation",
    publisher: "Z.ai",
    url: "https://zcode.z.ai/en/docs/welcome",
    sourceType: "documentation",
  },
  {
    id: "zai-zcode-subagents",
    title: "ZCode subagents",
    publisher: "Z.ai",
    url: "https://zcode.z.ai/en/docs/subagents",
    sourceType: "documentation",
  },
  {
    id: "zai-zcode-hooks",
    title: "ZCode hooks",
    publisher: "Z.ai",
    url: "https://zcode.z.ai/en/docs/hooks",
    sourceType: "documentation",
  },
  {
    id: "zai-zcode-skills",
    title: "ZCode skills",
    publisher: "Z.ai",
    url: "https://zcode.z.ai/en/docs/skill",
    sourceType: "documentation",
  },
  {
    id: "zai-zcode-plugins",
    title: "ZCode plugins",
    publisher: "Z.ai",
    url: "https://zcode.z.ai/en/docs/plugin",
    sourceType: "documentation",
  },
  {
    id: "zai-zcode-memory",
    title: "ZCode memory",
    publisher: "Z.ai",
    url: "https://zcode.z.ai/en/docs/memory",
    sourceType: "documentation",
  },
  {
    id: "zai-zcode-automations",
    title: "ZCode automations",
    publisher: "Z.ai",
    url: "https://zcode.z.ai/en/docs/automations",
    sourceType: "documentation",
  },
  {
    id: "zai-docs",
    title: "Z.AI developer documentation",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/overview/quick-start",
    sourceType: "documentation",
  },
  {
    id: "zai-api-quickstart",
    title: "API quick start",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/overview/quick-start",
    sourceType: "documentation",
  },
  {
    id: "zai-pricing",
    title: "Pricing",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/overview/pricing",
    sourceType: "pricing",
  },
  {
    id: "zai-glm-5-3",
    title: "GLM-5.3 model card",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/llm/glm-5.3",
    sourceType: "documentation",
  },
  {
    id: "zai-glm-5",
    title: "GLM-5 model card",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/llm/glm-5",
    sourceType: "documentation",
  },
  {
    id: "zai-glm-5-turbo",
    title: "GLM-5-Turbo model card",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/llm/glm-5-turbo",
    sourceType: "documentation",
  },
  {
    id: "zai-glm-5v-turbo",
    title: "GLM-5V-Turbo model card",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/vlm/glm-5v-turbo",
    sourceType: "documentation",
  },
  {
    id: "zai-glm-image",
    title: "GLM-Image model card",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/image/glm-image",
    sourceType: "documentation",
  },
  {
    id: "zai-autoglm-phone",
    title: "AutoGLM-Phone-Multilingual",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/vlm/autoglm-phone-multilingual",
    sourceType: "documentation",
  },
  {
    id: "zai-asr",
    title: "GLM-ASR-2512 model card",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/audio/glm-asr-2512",
    sourceType: "documentation",
  },
  {
    id: "zai-function-calling",
    title: "Function calling",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/capabilities/function-calling",
    sourceType: "documentation",
  },
  {
    id: "zai-web-search",
    title: "Web Search tool",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/tools/web-search",
    sourceType: "documentation",
  },
  {
    id: "zai-web-reader",
    title: "Web Reader API",
    publisher: "Z.ai",
    url: "https://docs.z.ai/api-reference/tools/web-reader",
    sourceType: "documentation",
  },
  {
    id: "zai-chat-completions",
    title: "Chat Completion API",
    publisher: "Z.ai",
    url: "https://docs.z.ai/api-reference/llm/chat-completion",
    sourceType: "documentation",
  },
  {
    id: "zai-slide-agent",
    title: "GLM Slide/Poster Agent (beta)",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/agents/slide",
    sourceType: "documentation",
  },
  {
    id: "zai-devpack",
    title: "GLM Coding Plan overview",
    publisher: "Z.ai",
    url: "https://docs.z.ai/devpack/overview",
    sourceType: "documentation",
  },
  {
    id: "zai-devpack-tools",
    title: "Tool integration",
    publisher: "Z.ai",
    url: "https://docs.z.ai/devpack/tool/others",
    sourceType: "documentation",
  },
  {
    id: "zai-devpack-team",
    title: "GLM Coding Team Plan benefits",
    publisher: "Z.ai",
    url: "https://docs.z.ai/devpack/teamplan",
    sourceType: "documentation",
  },
  {
    id: "zai-mcp-server",
    title: "Web Search MCP Server",
    publisher: "Z.ai",
    url: "https://docs.z.ai/devpack/mcp/search-mcp-server",
    sourceType: "documentation",
  },
  {
    id: "zai-memory-guide",
    title: "Coding-agent memory mechanism",
    publisher: "Z.ai",
    url: "https://docs.z.ai/devpack/resources/memory-mechanism",
    sourceType: "documentation",
  },
  {
    id: "zai-zcode-changelog",
    title: "ZCode releases and updates",
    publisher: "Z.ai",
    url: "https://zcode.z.ai/en/changelog",
    sourceType: "announcement",
  },
  {
    id: "zai-glm-5-3-flash",
    title: "GLM-5.3-Flash: More Intelligence with Less Compute",
    publisher: "Z.ai",
    url: "https://autoclaw.z.ai/blog/model/glm-5.3-flash/",
    sourceType: "announcement",
  },
  {
    id: "minimax-models",
    title: "MiniMax M3",
    publisher: "MiniMax",
    url: "https://www.minimax.io/blog/minimax-m3",
    sourceType: "announcement",
  },
  {
    id: "minimax-api-pricing",
    title: "MiniMax API pay-as-you-go pricing",
    publisher: "MiniMax",
    url: "https://platform.minimax.io/docs/guides/pricing-paygo",
    sourceType: "pricing",
  },
  {
    id: "minimax-m2-7",
    title: "MiniMax text generation models",
    publisher: "MiniMax",
    url: "https://platform.minimax.io/docs/guides/text-generation",
    sourceType: "documentation",
  },
  {
    id: "minimax-tool-use",
    title: "Tool use and function calling",
    publisher: "MiniMax",
    url: "https://platform.minimax.io/docs/guides/text-m3-function-call",
    sourceType: "documentation",
  },
  {
    id: "minimax-mcp",
    title: "Model Context Protocol on MiniMax",
    publisher: "MiniMax",
    url: "https://platform.minimax.io/docs/guides/mcp-guide",
    sourceType: "documentation",
  },
  {
    id: "minimax-token-plan",
    title: "MiniMax Token Plan subscription pricing",
    publisher: "MiniMax",
    url: "https://platform.minimax.io/docs/guides/pricing-token-plan",
    sourceType: "pricing",
  },
  {
    id: "minimax-image-generation",
    title: "Image generation on MiniMax",
    publisher: "MiniMax",
    url: "https://platform.minimax.io/docs/guides/image-generation",
    sourceType: "documentation",
  },
  {
    id: "minimax-web-search",
    title: "Web search on MiniMax",
    publisher: "MiniMax",
    url: "https://platform.minimax.io/docs/guides/server-tools",
    sourceType: "documentation",
  },
  {
    id: "deepseek-models",
    title: "Models & Pricing",
    publisher: "DeepSeek",
    url: "https://api-docs.deepseek.com/quick_start/pricing/",
    sourceType: "pricing",
  },
  {
    id: "deepseek-api",
    title: "Your First API Call",
    publisher: "DeepSeek",
    url: "https://api-docs.deepseek.com/",
    sourceType: "documentation",
  },
  {
    id: "deepseek-tool-calls",
    title: "Tool Calls",
    publisher: "DeepSeek",
    url: "https://api-docs.deepseek.com/guides/tool_calls/",
    sourceType: "documentation",
  },
  {
    id: "deepseek-json-output",
    title: "JSON Output",
    publisher: "DeepSeek",
    url: "https://api-docs.deepseek.com/guides/json_mode/",
    sourceType: "documentation",
  },
  {
    id: "deepseek-context-caching",
    title: "Context Caching",
    publisher: "DeepSeek",
    url: "https://api-docs.deepseek.com/guides/kv_cache/",
    sourceType: "documentation",
  },
  {
    id: "deepseek-thinking-mode",
    title: "Thinking Mode",
    publisher: "DeepSeek",
    url: "https://api-docs.deepseek.com/guides/thinking_mode/",
    sourceType: "documentation",
  },
  {
    id: "deepseek-deepcode",
    title: "Integrate with Deep Code",
    publisher: "DeepSeek",
    url: "https://api-docs.deepseek.com/quick_start/agent_integrations/deepcode/",
    sourceType: "documentation",
  },
  {
    id: "deepseek-harness",
    title: "DeepSeek Harness",
    publisher: "DeepSeek",
    url: "https://deepseek.com/harness/en/",
    sourceType: "product",
  },
  {
    id: "deepseek-harness-mcp",
    title: "Connect a third-party memory MCP server",
    publisher: "DeepSeek",
    url: "https://deepseek-harness.github.io/deepseek-harness/en/guide/mcp-memory",
    sourceType: "documentation",
    note: "Official Harness documentation linked from deepseek.com/harness/en/. Replaces a community-maintained page; covers configurable stdio and Streamable HTTP connections, not a vendor-hosted connector service.",
  },
  {
    id: "deepseek-app",
    title: "Introducing DeepSeek App",
    publisher: "DeepSeek",
    url: "https://www.deepseek.com/en/news/deepseek-app/",
    sourceType: "announcement",
  },
  {
    id: "deepseek-updates",
    title: "DeepSeek API change log",
    publisher: "DeepSeek",
    url: "https://api-docs.deepseek.com/updates/",
    sourceType: "announcement",
  },
  {
    id: "deepseek-vision",
    title: "DeepSeek API vision guide",
    publisher: "DeepSeek",
    url: "https://api-docs.deepseek.com/guides/vision/",
    sourceType: "documentation",
  },
  {
    id: "qwen-models",
    title: "Model Marketplace",
    publisher: "Qwen",
    url: "https://www.qwencloud.com/models",
    sourceType: "product",
  },
  {
    id: "qwen-model-card-max",
    title: "Qwen3.8-Max",
    publisher: "Qwen",
    url: "https://www.qwencloud.com/models/qwen3.8-max",
    sourceType: "product",
  },
  {
    id: "qwen-model-card-flash",
    title: "Qwen3.8-Flash",
    publisher: "Qwen",
    url: "https://www.qwencloud.com/models/qwen3.8-flash",
    sourceType: "product",
  },
  {
    id: "qwen-model-selection",
    title: "Choose models",
    publisher: "Qwen",
    url: "https://docs.qwencloud.com/developer-guides/getting-started/model-selection",
    sourceType: "documentation",
  },
  {
    id: "qwen-text-models",
    title: "Text generation models",
    publisher: "Qwen",
    url: "https://docs.qwencloud.com/developer-guides/getting-started/text-generation-models",
    sourceType: "documentation",
  },
  {
    id: "qwen-pricing",
    title: "Pricing",
    publisher: "Qwen",
    url: "https://docs.qwencloud.com/developer-guides/getting-started/pricing",
    sourceType: "pricing",
  },
  {
    id: "qwen-token-plan",
    title: "Token Plan",
    publisher: "Qwen",
    url: "https://docs.qwencloud.com/token-plan/overview",
    sourceType: "pricing",
  },
  {
    id: "qwen-coding-plan",
    title: "Former Coding Plan destination — current Token Plan",
    publisher: "Qwen",
    url: "https://docs.qwencloud.com/token-plan/overview",
    sourceType: "pricing",
  },
  {
    id: "qwen-workspaces",
    title: "Workspaces",
    publisher: "Qwen",
    url: "https://docs.qwencloud.com/developer-guides/administration/workspace",
    sourceType: "documentation",
  },
  {
    id: "qwen-audit-logs",
    title: "Audit & access logs",
    publisher: "Qwen",
    url: "https://docs.qwencloud.com/developer-guides/security-compliance/audit-logs",
    sourceType: "documentation",
  },
  {
    id: "qwen-data-security",
    title: "Data security & privacy",
    publisher: "Qwen",
    url: "https://docs.qwencloud.com/developer-guides/security-compliance/data-security",
    sourceType: "documentation",
  },
  {
    id: "qwen-code",
    title: "Qwen Code Documentation",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-subagents",
    title: "Subagents",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/sub-agents/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-memory",
    title: "Memory",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/memory/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-skills",
    title: "Agent Skills",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/skills/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-hooks",
    title: "Hooks",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/hooks/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-mcp",
    title: "MCP",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/mcp/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-extensions",
    title: "Qwen Code Extensions",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/extension/introduction/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-settings",
    title: "Settings",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/configuration/settings/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-scheduled",
    title: "Run Prompts on a Schedule",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/scheduled-tasks/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-computer",
    title: "Computer Use",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/computer-use/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-approval",
    title: "Approval Mode",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/approval-mode/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-auto",
    title: "Auto Mode",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/auto-mode/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-multiagent",
    title: "Multi-Agent Coordination",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/multi-agent-coordination/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-worktree",
    title: "Worktrees",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/worktree/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-sandbox",
    title: "Sandboxing",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/sandbox/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-headless",
    title: "Headless Mode",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/headless/",
    sourceType: "documentation",
  },
  {
    id: "qwen-code-sdk",
    title: "@qwen-code/sdk",
    publisher: "Qwen",
    url: "https://qwenlm.github.io/qwen-code-docs/en/developers/sdk-typescript/",
    sourceType: "documentation",
  },
  {
    id: "qwen-studio",
    title: "Qwen Studio",
    publisher: "Qwen",
    url: "https://chat.qwen.ai/",
    sourceType: "product",
  },
  {
    id: "qwen-app",
    title: "Qwen",
    publisher: "Qwen",
    url: "https://qwen.ai/",
    sourceType: "product",
  },
  {
    id: "qwen-app-agentic",
    title: "Alibaba's Qwen App Advances Agentic AI Strategy by Turning Core Ecosystem Services into Executable AI Capabilities",
    publisher: "Qwen",
    url: "https://www.alibabagroup.com/en-US/document-1948497434959151104",
    sourceType: "announcement",
  },
  {
    id: "minimax-docs",
    title: "MiniMax official documentation index",
    publisher: "MiniMax",
    url: "https://platform.minimax.io/docs/llms.txt",
    sourceType: "documentation",
    note: "Index reviewed for coverage gaps; not evidence that an undocumented feature is absent."
  },
  {
    id: "minimax-model-catalog",
    title: "MiniMax model catalog",
    publisher: "MiniMax",
    url: "https://platform.minimax.io/docs/guides/models-intro",
    sourceType: "documentation"
  },
  {
    id: "minimax-team-plan",
    title: "MiniMax Token Plan for Teams",
    publisher: "MiniMax",
    url: "https://platform.minimax.io/docs/guides/pricing-token-plan-team",
    sourceType: "pricing"
  },
  {
    id: "zai-glm-5-2",
    title: "GLM-5.2 model documentation",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/llm/glm-5.2",
    sourceType: "documentation"
  },
  {
    id: "zai-flash-docs",
    title: "GLM-5.3-Flash and FlashX",
    publisher: "Z.ai",
    url: "https://docs.z.ai/guides/vlm/glm-5.3-flash",
    sourceType: "documentation"
  },
  {
    id: "zai-release-notes",
    title: "New Released",
    publisher: "Z.ai",
    url: "https://docs.z.ai/release-notes/new-released",
    sourceType: "announcement"
  },
  {
    id: "anthropic-release-notes",
    title: "Claude Platform release notes",
    publisher: "Anthropic",
    url: "https://platform.claude.com/docs/en/release-notes/overview",
    sourceType: "announcement"
  },
  {
    id: "anthropic-model-deprecations",
    title: "Model deprecations",
    publisher: "Anthropic",
    url: "https://platform.claude.com/docs/en/about-claude/model-deprecations",
    sourceType: "documentation"
  },
  {
    id: "anthropic-claude-opus-5-5",
    title: "Claude Opus 5.5 model page",
    publisher: "Anthropic",
    url: "https://platform.claude.com/docs/en/models/claude-opus-5-5",
    sourceType: "documentation"
  },
  {
    id: "anthropic-claude-sonnet-5-5",
    title: "Claude Sonnet 5.5 model page",
    publisher: "Anthropic",
    url: "https://platform.claude.com/docs/en/models/claude-sonnet-5-5",
    sourceType: "documentation"
  },
  {
    id: "anthropic-cowork-merge",
    title: "Claude Cowork and chat are now one Claude",
    publisher: "Anthropic",
    url: "https://claude.com/blog/cowork-is-now-claude",
    sourceType: "announcement"
  },
  {
    id: "openai-changelog",
    title: "OpenAI API changelog",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/changelog",
    sourceType: "announcement"
  },
  {
    id: "openai-gpt-6-1-sol",
    title: "GPT-6.1 Sol model card",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
    sourceType: "documentation"
  },
  {
    id: "openai-gpt-6-sol",
    title: "GPT-6 Sol model card",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/models/gpt-6-sol",
    sourceType: "documentation"
  },
  {
    id: "openai-gpt-6-luna",
    title: "GPT-6 Luna model card",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/models/gpt-6-luna",
    sourceType: "documentation"
  },
  {
    id: "openai-gpt-5-6-sol",
    title: "GPT-5.6 Sol model card",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/models/gpt-5.6-sol",
    sourceType: "documentation"
  },
  {
    id: "openai-gpt-5-6-terra",
    title: "GPT-5.6 Terra model card",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/models/gpt-5.6-terra",
    sourceType: "documentation"
  },
  {
    id: "openai-gpt-5-6-luna",
    title: "GPT-5.6 Luna model card",
    publisher: "OpenAI",
    url: "https://developers.openai.com/api/docs/models/gpt-5.6-luna",
    sourceType: "documentation"
  },
  {
    id: "minimax-m3-1-flash",
    title: "MiniMax text generation models",
    publisher: "MiniMax",
    url: "https://platform.minimax.io/docs/guides/text-generation",
    sourceType: "documentation"
  },
  {
    id: "minimax-model-list",
    title: "MiniMax model list and retirement status",
    publisher: "MiniMax",
    url: "https://platform.minimax.io/docs/faq/models",
    sourceType: "documentation"
  },
  {
    id: "minimax-release-notes",
    title: "MiniMax model releases",
    publisher: "MiniMax",
    url: "https://platform.minimax.io/docs/release-notes/models",
    sourceType: "announcement"
  },
] satisfies Source[];

// Source registry for the curated taxonomy maps; independent of vendor claims.
export const taxonomySources = [
  {
    "id": "S01",
    "title": "AI: A Modern Approach, 4th ed.",
    "url": "https://aima.cs.berkeley.edu/contents.html"
  },
  {
    "id": "S02",
    "title": "scikit-learn User Guide",
    "url": "https://scikit-learn.org/stable/user_guide.html"
  },
  {
    "id": "S03",
    "title": "Speech and Language Processing",
    "url": "https://web.stanford.edu/~jurafsky/slp3/"
  },
  {
    "id": "S04",
    "title": "Hugging Face Tasks",
    "url": "https://huggingface.co/tasks"
  },
  {
    "id": "S05",
    "title": "Deep Learning",
    "url": "https://www.deeplearningbook.org/"
  },
  {
    "id": "S06",
    "title": "Introduction to Information Retrieval",
    "url": "https://nlp.stanford.edu/IR-book/html/htmledition/irbook.html"
  },
  {
    "id": "S07",
    "title": "CodeXGLUE",
    "url": "https://github.com/microsoft/CodeXGLUE#tasks-and-datasets"
  },
  {
    "id": "S08",
    "title": "SUPERB",
    "url": "https://www.isca-archive.org/interspeech_2021/yang21c_interspeech.pdf"
  },
  {
    "id": "S09",
    "title": "SUPERB-SG",
    "url": "https://arxiv.org/html/2203.06849"
  },
  {
    "id": "S10",
    "title": "sktime API Reference",
    "url": "https://www.sktime.net/docs/api-reference/"
  },
  {
    "id": "S11",
    "title": "Open Graph Benchmark",
    "url": "https://ogb.stanford.edu/docs/home/"
  },
  {
    "id": "S12",
    "title": "BEIR",
    "url": "https://openreview.net/pdf?id=wCu6T5xFjeJ"
  },
  {
    "id": "S13",
    "title": "GLUE",
    "url": "https://arxiv.org/abs/1804.07461"
  },
  {
    "id": "S14",
    "title": "CoNLL-2014 Grammatical Error Correction",
    "url": "https://aclanthology.org/W14-1701/"
  },
  {
    "id": "S15",
    "title": "Spider",
    "url": "https://aclanthology.org/D18-1425/"
  },
  {
    "id": "S16",
    "title": "GSM8K: Training Verifiers",
    "url": "https://arxiv.org/abs/2110.14168"
  },
  {
    "id": "S17",
    "title": "miniF2F",
    "url": "https://arxiv.org/abs/2109.00110"
  },
  {
    "id": "S18",
    "title": "WebArena",
    "url": "https://arxiv.org/abs/2307.13854"
  },
  {
    "id": "S19",
    "title": "OSWorld",
    "url": "https://arxiv.org/abs/2404.07972"
  },
  {
    "id": "S20",
    "title": "Berkeley Function Calling Leaderboard",
    "url": "https://gorilla.cs.berkeley.edu/leaderboard"
  },
  {
    "id": "S21",
    "title": "RecBole Evaluation Support",
    "url": "https://recbole.io/docs/v0.2.0/user_guide/evaluation_support.html"
  },
  {
    "id": "S22",
    "title": "AlphaFold",
    "url": "https://www.nature.com/articles/s41586-021-03819-2"
  },
  {
    "id": "S23",
    "title": "MoleculeNet",
    "url": "https://arxiv.org/abs/1703.00564"
  },
  {
    "id": "S24",
    "title": "Attention Is All You Need",
    "url": "https://arxiv.org/abs/1706.03762"
  },
  {
    "id": "S25",
    "title": "Mamba",
    "url": "https://arxiv.org/abs/2312.00752"
  },
  {
    "id": "S26",
    "title": "Sparsely-Gated Mixture-of-Experts",
    "url": "https://arxiv.org/abs/1701.06538"
  },
  {
    "id": "S27",
    "title": "Denoising Diffusion Probabilistic Models",
    "url": "https://arxiv.org/abs/2006.11239"
  },
  {
    "id": "S28",
    "title": "Variational Inference with Normalizing Flows",
    "url": "https://arxiv.org/abs/1505.05770"
  },
  {
    "id": "S29",
    "title": "Auto-Encoding Variational Bayes",
    "url": "https://arxiv.org/abs/1312.6114"
  },
  {
    "id": "S30",
    "title": "Generative Adversarial Networks",
    "url": "https://arxiv.org/abs/1406.2661"
  },
  {
    "id": "S31",
    "title": "SimCLR",
    "url": "https://arxiv.org/abs/2002.05709"
  },
  {
    "id": "S32",
    "title": "Graph Convolutional Networks",
    "url": "https://arxiv.org/abs/1609.02907"
  },
  {
    "id": "S33",
    "title": "Transformer Architectures",
    "url": "https://huggingface.co/learn/llm-course/en/chapter1/4"
  },
  {
    "id": "S34",
    "title": "LoRA",
    "url": "https://arxiv.org/abs/2106.09685"
  },
  {
    "id": "S35",
    "title": "InstructGPT",
    "url": "https://arxiv.org/abs/2203.02155"
  },
  {
    "id": "S36",
    "title": "Direct Preference Optimization",
    "url": "https://arxiv.org/abs/2305.18290"
  },
  {
    "id": "S37",
    "title": "Foundation Models",
    "url": "https://arxiv.org/abs/2108.07258"
  },
  {
    "id": "S38",
    "title": "Knowledge Distillation",
    "url": "https://arxiv.org/abs/1503.02531"
  },
  {
    "id": "S39",
    "title": "Image Segmentation",
    "url": "https://huggingface.co/tasks/image-segmentation"
  },
  {
    "id": "S40",
    "title": "Image-to-Text",
    "url": "https://huggingface.co/tasks/image-to-text"
  },
  {
    "id": "S41",
    "title": "Visual Question Answering",
    "url": "https://huggingface.co/tasks/visual-question-answering"
  },
  {
    "id": "S42",
    "title": "Document Question Answering",
    "url": "https://huggingface.co/tasks/document-question-answering"
  },
  {
    "id": "S43",
    "title": "Image Inpainting",
    "url": "https://huggingface.co/docs/diffusers/using-diffusers/inpaint"
  },
  {
    "id": "S44",
    "title": "Flow Matching",
    "url": "https://arxiv.org/abs/2210.02747"
  },
  {
    "id": "S45",
    "title": "MusicGen",
    "url": "https://arxiv.org/abs/2306.05284"
  },
  {
    "id": "S46",
    "title": "AudioGen",
    "url": "https://arxiv.org/abs/2209.15352"
  },
  {
    "id": "S47",
    "title": "Shap-E",
    "url": "https://arxiv.org/abs/2305.02463"
  },
  {
    "id": "S48",
    "title": "MS2: Multi-Document Summarization",
    "url": "https://aclanthology.org/2021.emnlp-main.594/"
  }
] satisfies TaxonomySource[];

/** First-party model cards, checkpoint listings and author documentation, observed 2026-10-21. */
export const taskModelSources = [
  {
    "id": "ow-qwen38",
    "title": "Qwen3.8-27B — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3.8-27B",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0"
  },
  {
    "id": "ow-qwen38-weights",
    "title": "Qwen3.8-27B — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3.8-27B/tree/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Qwen/Qwen3.8-27B",
      "parameterCount": 27781427952,
      "files": [
        {
          "name": "model-00001-of-00018.safetensors",
          "sizeBytes": 3966730552
        },
        {
          "name": "model-00002-of-00018.safetensors",
          "sizeBytes": 3043080328
        },
        {
          "name": "model-00003-of-00018.safetensors",
          "sizeBytes": 2542796952
        },
        {
          "name": "model-00004-of-00018.safetensors",
          "sizeBytes": 3988973152
        },
        {
          "name": "model-00005-of-00018.safetensors",
          "sizeBytes": 2099339864
        },
        {
          "name": "model-00006-of-00018.safetensors",
          "sizeBytes": 3979553696
        },
        {
          "name": "model-00007-of-00018.safetensors",
          "sizeBytes": 2108759344
        },
        {
          "name": "model-00008-of-00018.safetensors",
          "sizeBytes": 3979553696
        },
        {
          "name": "model-00009-of-00018.safetensors",
          "sizeBytes": 2108759344
        },
        {
          "name": "model-00010-of-00018.safetensors",
          "sizeBytes": 3979553696
        },
        {
          "name": "model-00011-of-00018.safetensors",
          "sizeBytes": 2108759344
        },
        {
          "name": "model-00012-of-00018.safetensors",
          "sizeBytes": 3979553696
        },
        {
          "name": "model-00013-of-00018.safetensors",
          "sizeBytes": 2108759344
        },
        {
          "name": "model-00014-of-00018.safetensors",
          "sizeBytes": 3979553696
        },
        {
          "name": "model-00015-of-00018.safetensors",
          "sizeBytes": 2108759344
        },
        {
          "name": "model-00016-of-00018.safetensors",
          "sizeBytes": 3979564040
        },
        {
          "name": "model-00017-of-00018.safetensors",
          "sizeBytes": 2108759344
        },
        {
          "name": "model-00018-of-00018.safetensors",
          "sizeBytes": 3392197344
        }
      ],
      "totalBytes": 55563006776,
      "gated": false
    }
  },
  {
    "id": "ow-deepseek41",
    "title": "DeepSeek-V4.1-Flash-1017 — model card",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "1bae0e1088993b9b82de08f59de5be5a34e42170"
  },
  {
    "id": "ow-deepseek41-weights",
    "title": "DeepSeek-V4.1-Flash-1017 — checkpoint files",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/tree/1bae0e1088993b9b82de08f59de5be5a34e42170",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "1bae0e1088993b9b82de08f59de5be5a34e42170",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
      "parameterCount": 763205315794,
      "files": [
        {
          "name": "model-00001-of-00048.safetensors",
          "sizeBytes": 970533624
        },
        {
          "name": "model-00002-of-00048.safetensors",
          "sizeBytes": 1323858272
        },
        {
          "name": "model-00003-of-00048.safetensors",
          "sizeBytes": 7389759032
        },
        {
          "name": "model-00004-of-00048.safetensors",
          "sizeBytes": 7389759032
        },
        {
          "name": "model-00005-of-00048.safetensors",
          "sizeBytes": 7405953784
        },
        {
          "name": "model-00006-of-00048.safetensors",
          "sizeBytes": 7389759032
        },
        {
          "name": "model-00007-of-00048.safetensors",
          "sizeBytes": 7389759032
        },
        {
          "name": "model-00008-of-00048.safetensors",
          "sizeBytes": 7389759032
        },
        {
          "name": "model-00009-of-00048.safetensors",
          "sizeBytes": 7389759032
        },
        {
          "name": "model-00010-of-00048.safetensors",
          "sizeBytes": 7389759032
        },
        {
          "name": "model-00011-of-00048.safetensors",
          "sizeBytes": 7405953784
        },
        {
          "name": "model-00012-of-00048.safetensors",
          "sizeBytes": 7389759032
        },
        {
          "name": "model-00013-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00014-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00015-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00016-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00017-of-00048.safetensors",
          "sizeBytes": 7405956128
        },
        {
          "name": "model-00018-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00019-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00020-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00021-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00022-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00023-of-00048.safetensors",
          "sizeBytes": 7400713088
        },
        {
          "name": "model-00024-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00025-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00026-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00027-of-00048.safetensors",
          "sizeBytes": 7395337384
        },
        {
          "name": "model-00028-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00029-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00030-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00031-of-00048.safetensors",
          "sizeBytes": 7395337384
        },
        {
          "name": "model-00032-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00033-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00034-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00035-of-00048.safetensors",
          "sizeBytes": 7395337384
        },
        {
          "name": "model-00036-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00037-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00038-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00039-of-00048.safetensors",
          "sizeBytes": 7395337384
        },
        {
          "name": "model-00040-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00041-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00042-of-00048.safetensors",
          "sizeBytes": 7389761368
        },
        {
          "name": "model-00043-of-00048.safetensors",
          "sizeBytes": 1323837624
        },
        {
          "name": "model-00044-of-00048.safetensors",
          "sizeBytes": 2652728736
        },
        {
          "name": "model-00045-of-00048.safetensors",
          "sizeBytes": 2573998176
        },
        {
          "name": "model-00046-of-00048.safetensors",
          "sizeBytes": 2706402896
        },
        {
          "name": "model-00047-of-00048.safetensors",
          "sizeBytes": 101535150936
        },
        {
          "name": "model-00048-of-00048.safetensors",
          "sizeBytes": 101537926640
        }
      ],
      "totalBytes": 510296708312,
      "gated": false
    }
  },
  {
    "id": "ow-glm53",
    "title": "GLM-5.3 — model card",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-5.3",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "ba32f8c19c8738e2c57c71798c601d477a7bf844"
  },
  {
    "id": "ow-glm53-weights",
    "title": "GLM-5.3 — checkpoint files",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-5.3/tree/ba32f8c19c8738e2c57c71798c601d477a7bf844",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "ba32f8c19c8738e2c57c71798c601d477a7bf844",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/zai-org/GLM-5.3",
      "parameterCount": 753329940480,
      "files": [
        {
          "name": "model-00001-of-00141.safetensors",
          "sizeBytes": 5363940952
        },
        {
          "name": "model-00002-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00003-of-00141.safetensors",
          "sizeBytes": 5363339120
        },
        {
          "name": "model-00004-of-00141.safetensors",
          "sizeBytes": 5361736640
        },
        {
          "name": "model-00005-of-00141.safetensors",
          "sizeBytes": 5366353560
        },
        {
          "name": "model-00006-of-00141.safetensors",
          "sizeBytes": 5361736504
        },
        {
          "name": "model-00007-of-00141.safetensors",
          "sizeBytes": 5366353704
        },
        {
          "name": "model-00008-of-00141.safetensors",
          "sizeBytes": 5361736368
        },
        {
          "name": "model-00009-of-00141.safetensors",
          "sizeBytes": 5366353832
        },
        {
          "name": "model-00010-of-00141.safetensors",
          "sizeBytes": 5361736232
        },
        {
          "name": "model-00011-of-00141.safetensors",
          "sizeBytes": 5363339600
        },
        {
          "name": "model-00012-of-00141.safetensors",
          "sizeBytes": 5366353488
        },
        {
          "name": "model-00013-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00014-of-00141.safetensors",
          "sizeBytes": 5366353496
        },
        {
          "name": "model-00015-of-00141.safetensors",
          "sizeBytes": 5361736680
        },
        {
          "name": "model-00016-of-00141.safetensors",
          "sizeBytes": 5366353520
        },
        {
          "name": "model-00017-of-00141.safetensors",
          "sizeBytes": 5361736544
        },
        {
          "name": "model-00018-of-00141.safetensors",
          "sizeBytes": 5363339264
        },
        {
          "name": "model-00019-of-00141.safetensors",
          "sizeBytes": 5361736408
        },
        {
          "name": "model-00020-of-00141.safetensors",
          "sizeBytes": 5364805840
        },
        {
          "name": "model-00021-of-00141.safetensors",
          "sizeBytes": 5361736336
        },
        {
          "name": "model-00022-of-00141.safetensors",
          "sizeBytes": 5366353872
        },
        {
          "name": "model-00023-of-00141.safetensors",
          "sizeBytes": 5357948328
        },
        {
          "name": "model-00024-of-00141.safetensors",
          "sizeBytes": 5357555688
        },
        {
          "name": "model-00025-of-00141.safetensors",
          "sizeBytes": 5363339104
        },
        {
          "name": "model-00026-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00027-of-00141.safetensors",
          "sizeBytes": 5366353504
        },
        {
          "name": "model-00028-of-00141.safetensors",
          "sizeBytes": 5361736648
        },
        {
          "name": "model-00029-of-00141.safetensors",
          "sizeBytes": 5366353560
        },
        {
          "name": "model-00030-of-00141.safetensors",
          "sizeBytes": 5361736512
        },
        {
          "name": "model-00031-of-00141.safetensors",
          "sizeBytes": 5366353688
        },
        {
          "name": "model-00032-of-00141.safetensors",
          "sizeBytes": 5361736376
        },
        {
          "name": "model-00033-of-00141.safetensors",
          "sizeBytes": 5363339440
        },
        {
          "name": "model-00034-of-00141.safetensors",
          "sizeBytes": 5361736240
        },
        {
          "name": "model-00035-of-00141.safetensors",
          "sizeBytes": 5366353976
        },
        {
          "name": "model-00036-of-00141.safetensors",
          "sizeBytes": 5366353488
        },
        {
          "name": "model-00037-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00038-of-00141.safetensors",
          "sizeBytes": 5366353304
        },
        {
          "name": "model-00039-of-00141.safetensors",
          "sizeBytes": 5361735832
        },
        {
          "name": "model-00040-of-00141.safetensors",
          "sizeBytes": 5366353016
        },
        {
          "name": "model-00041-of-00141.safetensors",
          "sizeBytes": 5361736552
        },
        {
          "name": "model-00042-of-00141.safetensors",
          "sizeBytes": 5363339264
        },
        {
          "name": "model-00043-of-00141.safetensors",
          "sizeBytes": 5361736416
        },
        {
          "name": "model-00044-of-00141.safetensors",
          "sizeBytes": 5366353776
        },
        {
          "name": "model-00045-of-00141.safetensors",
          "sizeBytes": 5361736280
        },
        {
          "name": "model-00046-of-00141.safetensors",
          "sizeBytes": 5366353920
        },
        {
          "name": "model-00047-of-00141.safetensors",
          "sizeBytes": 5366353496
        },
        {
          "name": "model-00048-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00049-of-00141.safetensors",
          "sizeBytes": 5363339104
        },
        {
          "name": "model-00050-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00051-of-00141.safetensors",
          "sizeBytes": 5366353512
        },
        {
          "name": "model-00052-of-00141.safetensors",
          "sizeBytes": 5361736584
        },
        {
          "name": "model-00053-of-00141.safetensors",
          "sizeBytes": 5366353608
        },
        {
          "name": "model-00054-of-00141.safetensors",
          "sizeBytes": 5361736448
        },
        {
          "name": "model-00055-of-00141.safetensors",
          "sizeBytes": 5366353744
        },
        {
          "name": "model-00056-of-00141.safetensors",
          "sizeBytes": 5361736312
        },
        {
          "name": "model-00057-of-00141.safetensors",
          "sizeBytes": 5363339496
        },
        {
          "name": "model-00058-of-00141.safetensors",
          "sizeBytes": 5357950744
        },
        {
          "name": "model-00059-of-00141.safetensors",
          "sizeBytes": 5357552376
        },
        {
          "name": "model-00060-of-00141.safetensors",
          "sizeBytes": 5366352776
        },
        {
          "name": "model-00061-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00062-of-00141.safetensors",
          "sizeBytes": 5366353504
        },
        {
          "name": "model-00063-of-00141.safetensors",
          "sizeBytes": 5361736624
        },
        {
          "name": "model-00064-of-00141.safetensors",
          "sizeBytes": 5366353576
        },
        {
          "name": "model-00065-of-00141.safetensors",
          "sizeBytes": 5361736488
        },
        {
          "name": "model-00066-of-00141.safetensors",
          "sizeBytes": 5363339320
        },
        {
          "name": "model-00067-of-00141.safetensors",
          "sizeBytes": 5361736360
        },
        {
          "name": "model-00068-of-00141.safetensors",
          "sizeBytes": 5366353848
        },
        {
          "name": "model-00069-of-00141.safetensors",
          "sizeBytes": 5361736224
        },
        {
          "name": "model-00070-of-00141.safetensors",
          "sizeBytes": 5366353992
        },
        {
          "name": "model-00071-of-00141.safetensors",
          "sizeBytes": 5366353488
        },
        {
          "name": "model-00072-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00073-of-00141.safetensors",
          "sizeBytes": 5363339112
        },
        {
          "name": "model-00074-of-00141.safetensors",
          "sizeBytes": 5361736672
        },
        {
          "name": "model-00075-of-00141.safetensors",
          "sizeBytes": 5366353528
        },
        {
          "name": "model-00076-of-00141.safetensors",
          "sizeBytes": 5361736528
        },
        {
          "name": "model-00077-of-00141.safetensors",
          "sizeBytes": 5366353672
        },
        {
          "name": "model-00078-of-00141.safetensors",
          "sizeBytes": 5361736392
        },
        {
          "name": "model-00079-of-00141.safetensors",
          "sizeBytes": 5366353168
        },
        {
          "name": "model-00080-of-00141.safetensors",
          "sizeBytes": 5361735408
        },
        {
          "name": "model-00081-of-00141.safetensors",
          "sizeBytes": 5366353872
        },
        {
          "name": "model-00082-of-00141.safetensors",
          "sizeBytes": 5363339104
        },
        {
          "name": "model-00083-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00084-of-00141.safetensors",
          "sizeBytes": 5366353496
        },
        {
          "name": "model-00085-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00086-of-00141.safetensors",
          "sizeBytes": 5366353512
        },
        {
          "name": "model-00087-of-00141.safetensors",
          "sizeBytes": 5361736568
        },
        {
          "name": "model-00088-of-00141.safetensors",
          "sizeBytes": 5366353632
        },
        {
          "name": "model-00089-of-00141.safetensors",
          "sizeBytes": 5361736432
        },
        {
          "name": "model-00090-of-00141.safetensors",
          "sizeBytes": 5363339376
        },
        {
          "name": "model-00091-of-00141.safetensors",
          "sizeBytes": 5361736296
        },
        {
          "name": "model-00092-of-00141.safetensors",
          "sizeBytes": 5366353904
        },
        {
          "name": "model-00093-of-00141.safetensors",
          "sizeBytes": 5366353488
        },
        {
          "name": "model-00094-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00095-of-00141.safetensors",
          "sizeBytes": 5366353488
        },
        {
          "name": "model-00096-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00097-of-00141.safetensors",
          "sizeBytes": 5363339112
        },
        {
          "name": "model-00098-of-00141.safetensors",
          "sizeBytes": 5361736616
        },
        {
          "name": "model-00099-of-00141.safetensors",
          "sizeBytes": 5366353168
        },
        {
          "name": "model-00100-of-00141.safetensors",
          "sizeBytes": 5361735624
        },
        {
          "name": "model-00101-of-00141.safetensors",
          "sizeBytes": 5363339032
        },
        {
          "name": "model-00102-of-00141.safetensors",
          "sizeBytes": 5361736344
        },
        {
          "name": "model-00103-of-00141.safetensors",
          "sizeBytes": 5366353856
        },
        {
          "name": "model-00104-of-00141.safetensors",
          "sizeBytes": 5364883208
        },
        {
          "name": "model-00105-of-00141.safetensors",
          "sizeBytes": 5363207032
        },
        {
          "name": "model-00106-of-00141.safetensors",
          "sizeBytes": 5363339104
        },
        {
          "name": "model-00107-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00108-of-00141.safetensors",
          "sizeBytes": 5366353504
        },
        {
          "name": "model-00109-of-00141.safetensors",
          "sizeBytes": 5361736648
        },
        {
          "name": "model-00110-of-00141.safetensors",
          "sizeBytes": 5366353552
        },
        {
          "name": "model-00111-of-00141.safetensors",
          "sizeBytes": 5361736512
        },
        {
          "name": "model-00112-of-00141.safetensors",
          "sizeBytes": 5366353688
        },
        {
          "name": "model-00113-of-00141.safetensors",
          "sizeBytes": 5361736376
        },
        {
          "name": "model-00114-of-00141.safetensors",
          "sizeBytes": 5363339432
        },
        {
          "name": "model-00115-of-00141.safetensors",
          "sizeBytes": 5361736240
        },
        {
          "name": "model-00116-of-00141.safetensors",
          "sizeBytes": 5366353976
        },
        {
          "name": "model-00117-of-00141.safetensors",
          "sizeBytes": 5366353488
        },
        {
          "name": "model-00118-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00119-of-00141.safetensors",
          "sizeBytes": 5366353304
        },
        {
          "name": "model-00120-of-00141.safetensors",
          "sizeBytes": 5361735832
        },
        {
          "name": "model-00121-of-00141.safetensors",
          "sizeBytes": 5366353016
        },
        {
          "name": "model-00122-of-00141.safetensors",
          "sizeBytes": 5361736552
        },
        {
          "name": "model-00123-of-00141.safetensors",
          "sizeBytes": 5363339256
        },
        {
          "name": "model-00124-of-00141.safetensors",
          "sizeBytes": 5361736416
        },
        {
          "name": "model-00125-of-00141.safetensors",
          "sizeBytes": 5366353784
        },
        {
          "name": "model-00126-of-00141.safetensors",
          "sizeBytes": 5361736288
        },
        {
          "name": "model-00127-of-00141.safetensors",
          "sizeBytes": 5366353920
        },
        {
          "name": "model-00128-of-00141.safetensors",
          "sizeBytes": 5366353488
        },
        {
          "name": "model-00129-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00130-of-00141.safetensors",
          "sizeBytes": 5363339104
        },
        {
          "name": "model-00131-of-00141.safetensors",
          "sizeBytes": 5361736696
        },
        {
          "name": "model-00132-of-00141.safetensors",
          "sizeBytes": 5366353504
        },
        {
          "name": "model-00133-of-00141.safetensors",
          "sizeBytes": 5361736592
        },
        {
          "name": "model-00134-of-00141.safetensors",
          "sizeBytes": 5366353608
        },
        {
          "name": "model-00135-of-00141.safetensors",
          "sizeBytes": 5361736456
        },
        {
          "name": "model-00136-of-00141.safetensors",
          "sizeBytes": 5366338752
        },
        {
          "name": "model-00137-of-00141.safetensors",
          "sizeBytes": 5361736352
        },
        {
          "name": "model-00138-of-00141.safetensors",
          "sizeBytes": 5363351176
        },
        {
          "name": "model-00139-of-00141.safetensors",
          "sizeBytes": 5361735376
        },
        {
          "name": "model-00140-of-00141.safetensors",
          "sizeBytes": 5366353160
        },
        {
          "name": "model-00141-of-00141.safetensors",
          "sizeBytes": 4724454592
        }
      ],
      "totalBytes": 755632050320,
      "gated": false
    }
  },
  {
    "id": "ow-gliner2",
    "title": "GLiNER2 large v1 — model card",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2-large-v1",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "d7aa8a2850d175a9227ff80358ea380723d03ad2"
  },
  {
    "id": "ow-gliner2-weights",
    "title": "GLiNER2 large v1 — checkpoint files",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2-large-v1/tree/d7aa8a2850d175a9227ff80358ea380723d03ad2",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "d7aa8a2850d175a9227ff80358ea380723d03ad2",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/fastino/gliner2-large-v1",
      "parameterCount": 486444053,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 1945828140
        }
      ],
      "totalBytes": 1945828140,
      "gated": false
    }
  },
  {
    "id": "ow-nli",
    "title": "DeBERTa v3 large NLI — model card",
    "publisher": "cross-encoder",
    "url": "https://huggingface.co/cross-encoder/nli-deberta-v3-large",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "bab4bc7178836f731dcfd18c06ca9def0a137712"
  },
  {
    "id": "ow-nli-weights",
    "title": "DeBERTa v3 large NLI — checkpoint files",
    "publisher": "cross-encoder",
    "url": "https://huggingface.co/cross-encoder/nli-deberta-v3-large/tree/bab4bc7178836f731dcfd18c06ca9def0a137712",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "bab4bc7178836f731dcfd18c06ca9def0a137712",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/cross-encoder/nli-deberta-v3-large",
      "parameterCount": 435065347,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 1740312740
        },
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 1740435986
        }
      ],
      "totalBytes": 3480748726,
      "gated": false
    }
  },
  {
    "id": "ow-coref",
    "title": "F-Coref — model card",
    "publisher": "biu-nlp",
    "url": "https://huggingface.co/biu-nlp/f-coref",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "e91dfff12879495d882ba9460d0c5d5dd44ade59"
  },
  {
    "id": "ow-coref-weights",
    "title": "F-Coref — checkpoint files",
    "publisher": "biu-nlp",
    "url": "https://huggingface.co/biu-nlp/f-coref/tree/e91dfff12879495d882ba9460d0c5d5dd44ade59",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "e91dfff12879495d882ba9460d0c5d5dd44ade59",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/biu-nlp/f-coref",
      "files": [
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 362162101
        }
      ],
      "totalBytes": 362162101,
      "gated": false
    }
  },
  {
    "id": "ow-stanza",
    "title": "Stanza English models — model card",
    "publisher": "stanfordnlp",
    "url": "https://huggingface.co/stanfordnlp/stanza-en",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "810dca30ddb25c30582c019dbaeb3a3e040fb958"
  },
  {
    "id": "ow-stanza-weights",
    "title": "Stanza English models — checkpoint files",
    "publisher": "stanfordnlp",
    "url": "https://huggingface.co/stanfordnlp/stanza-en/tree/810dca30ddb25c30582c019dbaeb3a3e040fb958",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "810dca30ddb25c30582c019dbaeb3a3e040fb958",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/stanfordnlp/stanza-en",
      "files": [
        {
          "name": "models/backward_charlm/1billion.pt",
          "sizeBytes": 22743430
        },
        {
          "name": "models/backward_charlm/mimic.pt",
          "sizeBytes": 18914851
        },
        {
          "name": "models/backward_charlm/pubmed.pt",
          "sizeBytes": 19719006
        },
        {
          "name": "models/constituency/ptb3_charlm.pt",
          "sizeBytes": 113974166
        },
        {
          "name": "models/constituency/ptb3_electra-large.pt",
          "sizeBytes": 231451891
        },
        {
          "name": "models/constituency/ptb3-revised_charlm.pt",
          "sizeBytes": 112234113
        },
        {
          "name": "models/constituency/ptb3-revised_electra-large.pt",
          "sizeBytes": 129011540
        },
        {
          "name": "models/coref/gum-nospeakers_roberta-large-lora.pt",
          "sizeBytes": 135852781
        },
        {
          "name": "models/coref/gum-speakers_roberta-large-lora.pt",
          "sizeBytes": 135928877
        },
        {
          "name": "models/coref/ontonotes-singletons_roberta-large-lora.pt",
          "sizeBytes": 135857584
        },
        {
          "name": "models/coref/udcoref_xlm-roberta-lora.pt",
          "sizeBytes": 135847428
        },
        {
          "name": "models/depparse/atis_charlm.pt",
          "sizeBytes": 130951276
        },
        {
          "name": "models/depparse/atis_electra-large.pt",
          "sizeBytes": 150646289
        },
        {
          "name": "models/depparse/atis_nocharlm.pt",
          "sizeBytes": 97457624
        },
        {
          "name": "models/depparse/childes_charlm.pt",
          "sizeBytes": 137506643
        },
        {
          "name": "models/depparse/childes_electra-large.pt",
          "sizeBytes": 157201781
        },
        {
          "name": "models/depparse/childes_nocharlm.pt",
          "sizeBytes": 104021676
        },
        {
          "name": "models/depparse/combined_charlm.pt",
          "sizeBytes": 142384846
        },
        {
          "name": "models/depparse/combined_electra-large.pt",
          "sizeBytes": 162079623
        },
        {
          "name": "models/depparse/combined_nocharlm.pt",
          "sizeBytes": 108966985
        },
        {
          "name": "models/depparse/craft_nocharlm.pt",
          "sizeBytes": 111281963
        },
        {
          "name": "models/depparse/eslspok_charlm.pt",
          "sizeBytes": 134685052
        },
        {
          "name": "models/depparse/eslspok_electra-large.pt",
          "sizeBytes": 154380152
        },
        {
          "name": "models/depparse/eslspok_nocharlm.pt",
          "sizeBytes": 101201785
        },
        {
          "name": "models/depparse/ewt_charlm.pt",
          "sizeBytes": 139631564
        },
        {
          "name": "models/depparse/ewt_electra-large.pt",
          "sizeBytes": 159326333
        },
        {
          "name": "models/depparse/ewt_nocharlm.pt",
          "sizeBytes": 106169083
        },
        {
          "name": "models/depparse/genia_nocharlm.pt",
          "sizeBytes": 110736063
        },
        {
          "name": "models/depparse/gum_charlm.pt",
          "sizeBytes": 139768274
        },
        {
          "name": "models/depparse/gum_electra-large.pt",
          "sizeBytes": 159463150
        },
        {
          "name": "models/depparse/gum_nocharlm.pt",
          "sizeBytes": 106344202
        },
        {
          "name": "models/depparse/lines_charlm.pt",
          "sizeBytes": 135239717
        },
        {
          "name": "models/depparse/lines_electra-large.pt",
          "sizeBytes": 154934485
        },
        {
          "name": "models/depparse/lines_nocharlm.pt",
          "sizeBytes": 101766376
        },
        {
          "name": "models/depparse/mimic_charlm.pt",
          "sizeBytes": 144769247
        },
        {
          "name": "models/depparse/mimic_nocharlm.pt",
          "sizeBytes": 111351864
        },
        {
          "name": "models/depparse/partut_charlm.pt",
          "sizeBytes": 133876748
        },
        {
          "name": "models/depparse/partut_electra-large.pt",
          "sizeBytes": 153572106
        },
        {
          "name": "models/depparse/partut_nocharlm.pt",
          "sizeBytes": 100410870
        },
        {
          "name": "models/forward_charlm/1billion.pt",
          "sizeBytes": 22743428
        },
        {
          "name": "models/forward_charlm/mimic.pt",
          "sizeBytes": 18914850
        },
        {
          "name": "models/forward_charlm/pubmed.pt",
          "sizeBytes": 19719005
        },
        {
          "name": "models/lemma/atis_charlm.pt",
          "sizeBytes": 8498547
        },
        {
          "name": "models/lemma/atis_nocharlm.pt",
          "sizeBytes": 1943848
        },
        {
          "name": "models/lemma/childes_charlm.pt",
          "sizeBytes": 8550565
        },
        {
          "name": "models/lemma/childes_nocharlm.pt",
          "sizeBytes": 1995864
        },
        {
          "name": "models/lemma/combined_charlm.pt",
          "sizeBytes": 30960607
        },
        {
          "name": "models/lemma/combined_nocharlm.pt",
          "sizeBytes": 2514642
        },
        {
          "name": "models/lemma/craft_nocharlm.pt",
          "sizeBytes": 2463789
        },
        {
          "name": "models/lemma/ewt_charlm.pt",
          "sizeBytes": 8772051
        },
        {
          "name": "models/lemma/ewt_nocharlm.pt",
          "sizeBytes": 2217356
        },
        {
          "name": "models/lemma/genia_nocharlm.pt",
          "sizeBytes": 2198346
        },
        {
          "name": "models/lemma/gum_charlm.pt",
          "sizeBytes": 8865286
        },
        {
          "name": "models/lemma/gum_nocharlm.pt",
          "sizeBytes": 2310589
        },
        {
          "name": "models/lemma/lines_charlm.pt",
          "sizeBytes": 8609937
        },
        {
          "name": "models/lemma/lines_nocharlm.pt",
          "sizeBytes": 2055222
        },
        {
          "name": "models/lemma/mimic_nocharlm.pt",
          "sizeBytes": 2356874
        },
        {
          "name": "models/lemma/partut_charlm.pt",
          "sizeBytes": 8610657
        },
        {
          "name": "models/lemma/partut_nocharlm.pt",
          "sizeBytes": 2055934
        },
        {
          "name": "models/mwt/atis.pt",
          "sizeBytes": 459279
        },
        {
          "name": "models/mwt/childes.pt",
          "sizeBytes": 478785
        },
        {
          "name": "models/mwt/combined.pt",
          "sizeBytes": 512405
        },
        {
          "name": "models/mwt/ewt.pt",
          "sizeBytes": 487533
        },
        {
          "name": "models/mwt/gum.pt",
          "sizeBytes": 493026
        },
        {
          "name": "models/mwt/lines.pt",
          "sizeBytes": 473638
        },
        {
          "name": "models/mwt/partut.pt",
          "sizeBytes": 579578
        },
        {
          "name": "models/ner/anatem.pt",
          "sizeBytes": 53084237
        },
        {
          "name": "models/ner/bc4chemd.pt",
          "sizeBytes": 65451670
        },
        {
          "name": "models/ner/bc5cdr.pt",
          "sizeBytes": 50722181
        },
        {
          "name": "models/ner/bionlp13cg.pt",
          "sizeBytes": 49044729
        },
        {
          "name": "models/ner/combined_charlm.pt",
          "sizeBytes": 69672778
        },
        {
          "name": "models/ner/conll03_charlm.pt",
          "sizeBytes": 53877899
        },
        {
          "name": "models/ner/conll03_electra-large.pt",
          "sizeBytes": 84090358
        },
        {
          "name": "models/ner/i2b2.pt",
          "sizeBytes": 49830818
        },
        {
          "name": "models/ner/jnlpba.pt",
          "sizeBytes": 54185498
        },
        {
          "name": "models/ner/linnaeus.pt",
          "sizeBytes": 54611068
        },
        {
          "name": "models/ner/ncbi_disease.pt",
          "sizeBytes": 49646881
        },
        {
          "name": "models/ner/ontonotes_charlm.pt",
          "sizeBytes": 90426468
        },
        {
          "name": "models/ner/ontonotes_electra-large.pt",
          "sizeBytes": 122277321
        },
        {
          "name": "models/ner/ontonotes_nocharlm.pt",
          "sizeBytes": 54907881
        },
        {
          "name": "models/ner/ontonotes-ww-multi_charlm.pt",
          "sizeBytes": 65726470
        },
        {
          "name": "models/ner/ontonotes-ww-multi_electra-large.pt",
          "sizeBytes": 95938650
        },
        {
          "name": "models/ner/ontonotes-ww-multi_nocharlm.pt",
          "sizeBytes": 33286100
        },
        {
          "name": "models/ner/radiology.pt",
          "sizeBytes": 45236049
        },
        {
          "name": "models/ner/s800.pt",
          "sizeBytes": 52460658
        },
        {
          "name": "models/pos/atis_charlm.pt",
          "sizeBytes": 31418005
        },
        {
          "name": "models/pos/atis_electra-large.pt",
          "sizeBytes": 41282600
        },
        {
          "name": "models/pos/atis_nocharlm.pt",
          "sizeBytes": 16385150
        },
        {
          "name": "models/pos/childes_charlm.pt",
          "sizeBytes": 34618996
        },
        {
          "name": "models/pos/childes_electra-large.pt",
          "sizeBytes": 44483467
        },
        {
          "name": "models/pos/childes_nocharlm.pt",
          "sizeBytes": 19594966
        },
        {
          "name": "models/pos/combined_charlm.pt",
          "sizeBytes": 38766335
        },
        {
          "name": "models/pos/combined_electra-large.pt",
          "sizeBytes": 48630981
        },
        {
          "name": "models/pos/combined_nocharlm.pt",
          "sizeBytes": 23809450
        },
        {
          "name": "models/pos/craft_nocharlm.pt",
          "sizeBytes": 21561426
        },
        {
          "name": "models/pos/eslspok_charlm.pt",
          "sizeBytes": 33274233
        },
        {
          "name": "models/pos/eslspok_electra-large.pt",
          "sizeBytes": 43138738
        },
        {
          "name": "models/pos/eslspok_nocharlm.pt",
          "sizeBytes": 18251787
        },
        {
          "name": "models/pos/ewt_charlm.pt",
          "sizeBytes": 37908319
        },
        {
          "name": "models/pos/ewt_electra-large.pt",
          "sizeBytes": 47772871
        },
        {
          "name": "models/pos/ewt_nocharlm.pt",
          "sizeBytes": 22906290
        },
        {
          "name": "models/pos/genia_nocharlm.pt",
          "sizeBytes": 19741285
        },
        {
          "name": "models/pos/gum_charlm.pt",
          "sizeBytes": 37729288
        },
        {
          "name": "models/pos/gum_electra-large.pt",
          "sizeBytes": 47593784
        },
        {
          "name": "models/pos/gum_nocharlm.pt",
          "sizeBytes": 22765637
        },
        {
          "name": "models/pos/lines_charlm.pt",
          "sizeBytes": 33948884
        },
        {
          "name": "models/pos/lines_electra-large.pt",
          "sizeBytes": 43813438
        },
        {
          "name": "models/pos/lines_nocharlm.pt",
          "sizeBytes": 18936457
        },
        {
          "name": "models/pos/mimic_charlm.pt",
          "sizeBytes": 39156316
        },
        {
          "name": "models/pos/partut_charlm.pt",
          "sizeBytes": 32628185
        },
        {
          "name": "models/pos/partut_electra-large.pt",
          "sizeBytes": 42492678
        },
        {
          "name": "models/pos/partut_nocharlm.pt",
          "sizeBytes": 17622932
        },
        {
          "name": "models/pretrain/biomed.pt",
          "sizeBytes": 82635104
        },
        {
          "name": "models/pretrain/conll17.pt",
          "sizeBytes": 106701210
        },
        {
          "name": "models/pretrain/fasttextcrawl.pt",
          "sizeBytes": 122564256
        },
        {
          "name": "models/pretrain/glove.pt",
          "sizeBytes": 42575224
        },
        {
          "name": "models/pretrain/mimic.pt",
          "sizeBytes": 82696384
        },
        {
          "name": "models/sentiment/sstplus_charlm.pt",
          "sizeBytes": 80440039
        },
        {
          "name": "models/sentiment/sstplus_electra-large.pt",
          "sizeBytes": 169908657
        },
        {
          "name": "models/tokenize/atis_charlm.pt",
          "sizeBytes": 2729356
        },
        {
          "name": "models/tokenize/atis_nocharlm.pt",
          "sizeBytes": 631671
        },
        {
          "name": "models/tokenize/childes_charlm.pt",
          "sizeBytes": 2732628
        },
        {
          "name": "models/tokenize/childes_nocharlm.pt",
          "sizeBytes": 634907
        },
        {
          "name": "models/tokenize/combined_charlm.pt",
          "sizeBytes": 2758483
        },
        {
          "name": "models/tokenize/combined_nocharlm.pt",
          "sizeBytes": 660797
        },
        {
          "name": "models/tokenize/craft_nocharlm.pt",
          "sizeBytes": 648917
        },
        {
          "name": "models/tokenize/eslspok_charlm.pt",
          "sizeBytes": 2731836
        },
        {
          "name": "models/tokenize/eslspok_nocharlm.pt",
          "sizeBytes": 634111
        },
        {
          "name": "models/tokenize/ewt_charlm.pt",
          "sizeBytes": 2741838
        },
        {
          "name": "models/tokenize/ewt_nocharlm.pt",
          "sizeBytes": 644162
        },
        {
          "name": "models/tokenize/genia_nocharlm.pt",
          "sizeBytes": 644936
        },
        {
          "name": "models/tokenize/gum_charlm.pt",
          "sizeBytes": 2755991
        },
        {
          "name": "models/tokenize/gum_nocharlm.pt",
          "sizeBytes": 658306
        },
        {
          "name": "models/tokenize/lines_charlm.pt",
          "sizeBytes": 2736976
        },
        {
          "name": "models/tokenize/lines_nocharlm.pt",
          "sizeBytes": 639306
        },
        {
          "name": "models/tokenize/mimic_nocharlm.pt",
          "sizeBytes": 645082
        },
        {
          "name": "models/tokenize/partut_charlm.pt",
          "sizeBytes": 2739491
        },
        {
          "name": "models/tokenize/partut_nocharlm.pt",
          "sizeBytes": 641826
        }
      ],
      "totalBytes": 7802744791,
      "gated": false
    }
  },
  {
    "id": "ow-nllb",
    "title": "NLLB-200 distilled 600M — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/nllb-200-distilled-600M",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "f8d333a098d19b4fd9a8b18f94170487ad3f821d"
  },
  {
    "id": "ow-nllb-weights",
    "title": "NLLB-200 distilled 600M — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/nllb-200-distilled-600M/tree/f8d333a098d19b4fd9a8b18f94170487ad3f821d",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "f8d333a098d19b4fd9a8b18f94170487ad3f821d",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/facebook/nllb-200-distilled-600M",
      "files": [
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 2460457927
        }
      ],
      "totalBytes": 2460457927,
      "gated": false
    }
  },
  {
    "id": "ow-coedit",
    "title": "CoEdIT large — model card",
    "publisher": "grammarly",
    "url": "https://huggingface.co/grammarly/coedit-large",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "5637bcdf9d8d4419f97c8cfea36f7d35c79232b6"
  },
  {
    "id": "ow-coedit-weights",
    "title": "CoEdIT large — checkpoint files",
    "publisher": "grammarly",
    "url": "https://huggingface.co/grammarly/coedit-large/tree/5637bcdf9d8d4419f97c8cfea36f7d35c79232b6",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "5637bcdf9d8d4419f97c8cfea36f7d35c79232b6",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/grammarly/coedit-large",
      "parameterCount": 783092736,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 3132439432
        },
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 3132556293
        },
        {
          "name": "training_args.bin",
          "sizeBytes": 4859
        }
      ],
      "totalBytes": 6265000584,
      "gated": false
    }
  },
  {
    "id": "ow-embedding",
    "title": "Qwen3-Embedding-8B — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Embedding-8B",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "1d8ad4ca9b3dd8059ad90a75d4983776a23d44af"
  },
  {
    "id": "ow-embedding-weights",
    "title": "Qwen3-Embedding-8B — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Embedding-8B/tree/1d8ad4ca9b3dd8059ad90a75d4983776a23d44af",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "1d8ad4ca9b3dd8059ad90a75d4983776a23d44af",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Qwen/Qwen3-Embedding-8B",
      "parameterCount": 7567295488,
      "files": [
        {
          "name": "model-00001-of-00004.safetensors",
          "sizeBytes": 4900037024
        },
        {
          "name": "model-00002-of-00004.safetensors",
          "sizeBytes": 4915959512
        },
        {
          "name": "model-00003-of-00004.safetensors",
          "sizeBytes": 4983067656
        },
        {
          "name": "model-00004-of-00004.safetensors",
          "sizeBytes": 335570376
        }
      ],
      "totalBytes": 15134634568,
      "gated": false
    }
  },
  {
    "id": "ow-reranker",
    "title": "Qwen3-Reranker-8B — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Reranker-8B",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "77d193c791ed757ca307ee72715aa132723da912"
  },
  {
    "id": "ow-reranker-weights",
    "title": "Qwen3-Reranker-8B — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Reranker-8B/tree/77d193c791ed757ca307ee72715aa132723da912",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "77d193c791ed757ca307ee72715aa132723da912",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Qwen/Qwen3-Reranker-8B",
      "parameterCount": 8188548096,
      "files": [
        {
          "name": "model-00001-of-00005.safetensors",
          "sizeBytes": 4027618768
        },
        {
          "name": "model-00002-of-00005.safetensors",
          "sizeBytes": 4060268160
        },
        {
          "name": "model-00003-of-00005.safetensors",
          "sizeBytes": 4043508680
        },
        {
          "name": "model-00004-of-00005.safetensors",
          "sizeBytes": 3003274088
        },
        {
          "name": "model-00005-of-00005.safetensors",
          "sizeBytes": 1242472576
        }
      ],
      "totalBytes": 16377142272,
      "gated": false
    }
  },
  {
    "id": "ow-siglip",
    "title": "SigLIP 2 SO400M — model card",
    "publisher": "google",
    "url": "https://huggingface.co/google/siglip2-so400m-patch14-384",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "e8e487298228002f3d8a82e0cd5c8ea9c567f57f"
  },
  {
    "id": "ow-siglip-weights",
    "title": "SigLIP 2 SO400M — checkpoint files",
    "publisher": "google",
    "url": "https://huggingface.co/google/siglip2-so400m-patch14-384/tree/e8e487298228002f3d8a82e0cd5c8ea9c567f57f",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "e8e487298228002f3d8a82e0cd5c8ea9c567f57f",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/google/siglip2-so400m-patch14-384",
      "parameterCount": 1136008498,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 4544143072
        }
      ],
      "totalBytes": 4544143072,
      "gated": false
    }
  },
  {
    "id": "ow-dino",
    "title": "Grounding DINO base — model card",
    "publisher": "IDEA-Research",
    "url": "https://huggingface.co/IDEA-Research/grounding-dino-base",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "12bdfa3120f3e7ec7b434d90674b3396eccf88eb"
  },
  {
    "id": "ow-dino-weights",
    "title": "Grounding DINO base — checkpoint files",
    "publisher": "IDEA-Research",
    "url": "https://huggingface.co/IDEA-Research/grounding-dino-base/tree/12bdfa3120f3e7ec7b434d90674b3396eccf88eb",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "12bdfa3120f3e7ec7b434d90674b3396eccf88eb",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/IDEA-Research/grounding-dino-base",
      "parameterCount": 232810880,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 933400872
        },
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 936002005
        }
      ],
      "totalBytes": 1869402877,
      "gated": false
    }
  },
  {
    "id": "ow-sam3",
    "title": "SAM 3 — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/sam3",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "3c879f39826c281e95690f02c7821c4de09afae7"
  },
  {
    "id": "ow-sam3-weights",
    "title": "SAM 3 — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/sam3/tree/3c879f39826c281e95690f02c7821c4de09afae7",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "3c879f39826c281e95690f02c7821c4de09afae7",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/facebook/sam3",
      "parameterCount": 859922360,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 3439938512
        },
        {
          "name": "sam3.pt",
          "sizeBytes": 3450062241
        }
      ],
      "totalBytes": 6890000753,
      "gated": true
    }
  },
  {
    "id": "ow-mask2former",
    "title": "Mask2Former Swin large · ADE20K — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/mask2former-swin-large-ade-semantic",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "aa25c92404a40599614215e76514c79b427c7527"
  },
  {
    "id": "ow-mask2former-weights",
    "title": "Mask2Former Swin large · ADE20K — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/mask2former-swin-large-ade-semantic/tree/aa25c92404a40599614215e76514c79b427c7527",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "aa25c92404a40599614215e76514c79b427c7527",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/facebook/mask2former-swin-large-ade-semantic",
      "parameterCount": 215986594,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 866052064
        },
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 866216517
        }
      ],
      "totalBytes": 1732268581,
      "gated": false
    }
  },
  {
    "id": "ow-depth",
    "title": "Depth Anything 3 large — model card",
    "publisher": "depth-anything",
    "url": "https://huggingface.co/depth-anything/DA3-LARGE",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "c54c26b16ec04d218e8d584ecf4bce082a9fcc20"
  },
  {
    "id": "ow-depth-weights",
    "title": "Depth Anything 3 large — checkpoint files",
    "publisher": "depth-anything",
    "url": "https://huggingface.co/depth-anything/DA3-LARGE/tree/c54c26b16ec04d218e8d584ecf4bce082a9fcc20",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "c54c26b16ec04d218e8d584ecf4bce082a9fcc20",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/depth-anything/DA3-LARGE",
      "parameterCount": 410941767,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 1643843860
        }
      ],
      "totalBytes": 1643843860,
      "gated": false
    }
  },
  {
    "id": "ow-pose",
    "title": "ViTPose+ huge — model card",
    "publisher": "usyd-community",
    "url": "https://huggingface.co/usyd-community/vitpose-plus-huge",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "9f36d7aec1800d23e97f10c2e74393aee92aa53f"
  },
  {
    "id": "ow-pose-weights",
    "title": "ViTPose+ huge — checkpoint files",
    "publisher": "usyd-community",
    "url": "https://huggingface.co/usyd-community/vitpose-plus-huge/tree/9f36d7aec1800d23e97f10c2e74393aee92aa53f",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "9f36d7aec1800d23e97f10c2e74393aee92aa53f",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/usyd-community/vitpose-plus-huge",
      "parameterCount": 899405073,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 3597730876
        }
      ],
      "totalBytes": 3597730876,
      "gated": false
    }
  },
  {
    "id": "ow-videomae",
    "title": "VideoMAE large · Kinetics-400 — model card",
    "publisher": "MCG-NJU",
    "url": "https://huggingface.co/MCG-NJU/videomae-large-finetuned-kinetics",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "0f6adcd5f6902900aa0281f9daacfe52bb3c4ad4"
  },
  {
    "id": "ow-videomae-weights",
    "title": "VideoMAE large · Kinetics-400 — checkpoint files",
    "publisher": "MCG-NJU",
    "url": "https://huggingface.co/MCG-NJU/videomae-large-finetuned-kinetics/tree/0f6adcd5f6902900aa0281f9daacfe52bb3c4ad4",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "0f6adcd5f6902900aa0281f9daacfe52bb3c4ad4",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/MCG-NJU/videomae-large-finetuned-kinetics",
      "parameterCount": 304270736,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 1217128032
        },
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 1217201701
        }
      ],
      "totalBytes": 2434329733,
      "gated": false
    }
  },
  {
    "id": "ow-ocr",
    "title": "PaddleOCR-VL-1.6 — model card",
    "publisher": "PaddlePaddle",
    "url": "https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "c5630abae1d940eafe0697512a0325494b02ab42"
  },
  {
    "id": "ow-ocr-weights",
    "title": "PaddleOCR-VL-1.6 — checkpoint files",
    "publisher": "PaddlePaddle",
    "url": "https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6/tree/c5630abae1d940eafe0697512a0325494b02ab42",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "c5630abae1d940eafe0697512a0325494b02ab42",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6",
      "parameterCount": 958588736,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 1917255968
        }
      ],
      "totalBytes": 1917255968,
      "gated": false
    }
  },
  {
    "id": "ow-image",
    "title": "Qwen-Image-2512 — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen-Image-2512",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "25468b98e3276ca6700de15c6628e51b7de54a26"
  },
  {
    "id": "ow-image-weights",
    "title": "Qwen-Image-2512 — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen-Image-2512/tree/25468b98e3276ca6700de15c6628e51b7de54a26",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "25468b98e3276ca6700de15c6628e51b7de54a26",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Qwen/Qwen-Image-2512",
      "parameterCount": 20430401088,
      "files": [
        {
          "name": "text_encoder/model-00001-of-00004.safetensors",
          "sizeBytes": 4968243304
        },
        {
          "name": "text_encoder/model-00002-of-00004.safetensors",
          "sizeBytes": 4991495816
        },
        {
          "name": "text_encoder/model-00003-of-00004.safetensors",
          "sizeBytes": 4932751040
        },
        {
          "name": "text_encoder/model-00004-of-00004.safetensors",
          "sizeBytes": 1691924384
        },
        {
          "name": "transformer/diffusion_pytorch_model-00001-of-00009.safetensors",
          "sizeBytes": 4989364312
        },
        {
          "name": "transformer/diffusion_pytorch_model-00002-of-00009.safetensors",
          "sizeBytes": 4984214160
        },
        {
          "name": "transformer/diffusion_pytorch_model-00003-of-00009.safetensors",
          "sizeBytes": 4946470000
        },
        {
          "name": "transformer/diffusion_pytorch_model-00004-of-00009.safetensors",
          "sizeBytes": 4984213736
        },
        {
          "name": "transformer/diffusion_pytorch_model-00005-of-00009.safetensors",
          "sizeBytes": 4946471896
        },
        {
          "name": "transformer/diffusion_pytorch_model-00006-of-00009.safetensors",
          "sizeBytes": 4946451560
        },
        {
          "name": "transformer/diffusion_pytorch_model-00007-of-00009.safetensors",
          "sizeBytes": 4908690520
        },
        {
          "name": "transformer/diffusion_pytorch_model-00008-of-00009.safetensors",
          "sizeBytes": 4984232856
        },
        {
          "name": "transformer/diffusion_pytorch_model-00009-of-00009.safetensors",
          "sizeBytes": 1170918840
        },
        {
          "name": "vae/diffusion_pytorch_model.safetensors",
          "sizeBytes": 253806966
        }
      ],
      "totalBytes": 57699249390,
      "gated": false
    }
  },
  {
    "id": "ow-imageedit",
    "title": "Qwen-Image-Edit-2511 — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen-Image-Edit-2511",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "6f3ccc0b56e431dc6a0c2b2039706d7d26f22cb9"
  },
  {
    "id": "ow-imageedit-weights",
    "title": "Qwen-Image-Edit-2511 — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen-Image-Edit-2511/tree/6f3ccc0b56e431dc6a0c2b2039706d7d26f22cb9",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "6f3ccc0b56e431dc6a0c2b2039706d7d26f22cb9",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Qwen/Qwen-Image-Edit-2511",
      "parameterCount": 20430401088,
      "files": [
        {
          "name": "text_encoder/model-00001-of-00004.safetensors",
          "sizeBytes": 4968243304
        },
        {
          "name": "text_encoder/model-00002-of-00004.safetensors",
          "sizeBytes": 4991495816
        },
        {
          "name": "text_encoder/model-00003-of-00004.safetensors",
          "sizeBytes": 4932751040
        },
        {
          "name": "text_encoder/model-00004-of-00004.safetensors",
          "sizeBytes": 1691924384
        },
        {
          "name": "transformer/diffusion_pytorch_model-00001-of-00005.safetensors",
          "sizeBytes": 9973578592
        },
        {
          "name": "transformer/diffusion_pytorch_model-00002-of-00005.safetensors",
          "sizeBytes": 9987326072
        },
        {
          "name": "transformer/diffusion_pytorch_model-00003-of-00005.safetensors",
          "sizeBytes": 9987307440
        },
        {
          "name": "transformer/diffusion_pytorch_model-00004-of-00005.safetensors",
          "sizeBytes": 9930685712
        },
        {
          "name": "transformer/diffusion_pytorch_model-00005-of-00005.safetensors",
          "sizeBytes": 982130472
        },
        {
          "name": "vae/diffusion_pytorch_model.safetensors",
          "sizeBytes": 253806966
        }
      ],
      "totalBytes": 57699249798,
      "gated": false
    }
  },
  {
    "id": "ow-fill",
    "title": "FLUX.1 Fill dev — model card",
    "publisher": "black-forest-labs",
    "url": "https://huggingface.co/black-forest-labs/FLUX.1-Fill-dev",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "358293da0354175698b67ec8299acf928313a78a"
  },
  {
    "id": "ow-fill-weights",
    "title": "FLUX.1 Fill dev — checkpoint files",
    "publisher": "black-forest-labs",
    "url": "https://huggingface.co/black-forest-labs/FLUX.1-Fill-dev/tree/358293da0354175698b67ec8299acf928313a78a",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "358293da0354175698b67ec8299acf928313a78a",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/black-forest-labs/FLUX.1-Fill-dev",
      "parameterCount": 11902391360,
      "files": [
        {
          "name": "ae.safetensors",
          "sizeBytes": 335304388
        },
        {
          "name": "flux1-fill-dev.safetensors",
          "sizeBytes": 23804922408
        },
        {
          "name": "text_encoder_2/model-00001-of-00002.safetensors",
          "sizeBytes": 4994582224
        },
        {
          "name": "text_encoder_2/model-00002-of-00002.safetensors",
          "sizeBytes": 4530066360
        },
        {
          "name": "text_encoder/model.safetensors",
          "sizeBytes": 246144352
        },
        {
          "name": "transformer/diffusion_pytorch_model-00001-of-00003.safetensors",
          "sizeBytes": 9985006384
        },
        {
          "name": "transformer/diffusion_pytorch_model-00002-of-00003.safetensors",
          "sizeBytes": 9949328904
        },
        {
          "name": "transformer/diffusion_pytorch_model-00003-of-00003.safetensors",
          "sizeBytes": 3870584832
        },
        {
          "name": "vae/diffusion_pytorch_model.safetensors",
          "sizeBytes": 335306212
        }
      ],
      "totalBytes": 58051246064,
      "gated": true
    }
  },
  {
    "id": "ow-wan",
    "title": "Wan2.2 TI2V 5B — model card",
    "publisher": "Wan-AI",
    "url": "https://huggingface.co/Wan-AI/Wan2.2-TI2V-5B",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "921dbaf3f1674a56f47e83fb80a34bac8a8f203e"
  },
  {
    "id": "ow-wan-weights",
    "title": "Wan2.2 TI2V 5B — checkpoint files",
    "publisher": "Wan-AI",
    "url": "https://huggingface.co/Wan-AI/Wan2.2-TI2V-5B/tree/921dbaf3f1674a56f47e83fb80a34bac8a8f203e",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "921dbaf3f1674a56f47e83fb80a34bac8a8f203e",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Wan-AI/Wan2.2-TI2V-5B",
      "files": [
        {
          "name": "diffusion_pytorch_model-00001-of-00003.safetensors",
          "sizeBytes": 9825014472
        },
        {
          "name": "diffusion_pytorch_model-00002-of-00003.safetensors",
          "sizeBytes": 9995661736
        },
        {
          "name": "diffusion_pytorch_model-00003-of-00003.safetensors",
          "sizeBytes": 178558176
        },
        {
          "name": "models_t5_umt5-xxl-enc-bf16.pth",
          "sizeBytes": 11361920418
        },
        {
          "name": "Wan2.2_VAE.pth",
          "sizeBytes": 2818839170
        }
      ],
      "totalBytes": 34179993972,
      "gated": false
    }
  },
  {
    "id": "ow-shape",
    "title": "Shap-E — model card",
    "publisher": "openai",
    "url": "https://huggingface.co/openai/shap-e",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "7bd337afdea1c17842e1c3cc45c4e268356dba40"
  },
  {
    "id": "ow-shape-weights",
    "title": "Shap-E — checkpoint files",
    "publisher": "openai",
    "url": "https://huggingface.co/openai/shap-e/tree/7bd337afdea1c17842e1c3cc45c4e268356dba40",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "7bd337afdea1c17842e1c3cc45c4e268356dba40",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/openai/shap-e",
      "files": [
        {
          "name": "prior/diffusion_pytorch_model.bin",
          "sizeBytes": 1262937295
        },
        {
          "name": "prior/diffusion_pytorch_model.fp16.safetensors",
          "sizeBytes": 631435880
        },
        {
          "name": "renderer/diffusion_pytorch_model.bin",
          "sizeBytes": 905200536
        },
        {
          "name": "renderer/diffusion_pytorch_model.fp16.safetensors",
          "sizeBytes": 452597858
        },
        {
          "name": "shap_e_renderer/diffusion_pytorch_model.bin",
          "sizeBytes": 905233202
        },
        {
          "name": "text_encoder/model.fp16.safetensors",
          "sizeBytes": 247324608
        },
        {
          "name": "text_encoder/pytorch_model.bin",
          "sizeBytes": 494664885
        }
      ],
      "totalBytes": 4899394264,
      "gated": false
    }
  },
  {
    "id": "ow-asr",
    "title": "Qwen3-ASR-1.7B — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-ASR-1.7B",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "7278e1e70fe206f11671096ffdd38061171dd6e5"
  },
  {
    "id": "ow-asr-weights",
    "title": "Qwen3-ASR-1.7B — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-ASR-1.7B/tree/7278e1e70fe206f11671096ffdd38061171dd6e5",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "7278e1e70fe206f11671096ffdd38061171dd6e5",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Qwen/Qwen3-ASR-1.7B",
      "parameterCount": 2349217408,
      "files": [
        {
          "name": "model-00001-of-00002.safetensors",
          "sizeBytes": 4220320824
        },
        {
          "name": "model-00002-of-00002.safetensors",
          "sizeBytes": 478200688
        }
      ],
      "totalBytes": 4698521512,
      "gated": false
    }
  },
  {
    "id": "ow-seamless",
    "title": "SeamlessM4T v2 large — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/seamless-m4t-v2-large",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "5f8cc790b19fc3f67a61c105133b20b34e3dcb76"
  },
  {
    "id": "ow-seamless-weights",
    "title": "SeamlessM4T v2 large — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/seamless-m4t-v2-large/tree/5f8cc790b19fc3f67a61c105133b20b34e3dcb76",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "5f8cc790b19fc3f67a61c105133b20b34e3dcb76",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/facebook/seamless-m4t-v2-large",
      "parameterCount": 2309249669,
      "files": [
        {
          "name": "m4t_v2_multitask_unity2.pt",
          "sizeBytes": 11386771266
        },
        {
          "name": "model-00001-of-00002.safetensors",
          "sizeBytes": 4999163080
        },
        {
          "name": "model-00002-of-00002.safetensors",
          "sizeBytes": 4238114628
        },
        {
          "name": "seamlessM4T_v2_large.pt",
          "sizeBytes": 9070060243
        },
        {
          "name": "vocoder_v2.pt",
          "sizeBytes": 167785015
        }
      ],
      "totalBytes": 29861894232,
      "gated": false
    }
  },
  {
    "id": "ow-keyword",
    "title": "wav2vec 2.0 · SUPERB KS — model card",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/wav2vec2-base-superb-ks",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "372e0486cd83e6f0c05c20a27262e9ca09450d24"
  },
  {
    "id": "ow-keyword-weights",
    "title": "wav2vec 2.0 · SUPERB KS — checkpoint files",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/wav2vec2-base-superb-ks/tree/372e0486cd83e6f0c05c20a27262e9ca09450d24",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "372e0486cd83e6f0c05c20a27262e9ca09450d24",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/superb/wav2vec2-base-superb-ks",
      "files": [
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 378369297
        }
      ],
      "totalBytes": 378369297,
      "gated": false
    }
  },
  {
    "id": "ow-emotion",
    "title": "HuBERT large · SUPERB ER — model card",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/hubert-large-superb-er",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "ef1a2ebfd7cfc424dc7f0fbcdc406e8b794d63bb"
  },
  {
    "id": "ow-emotion-weights",
    "title": "HuBERT large · SUPERB ER — checkpoint files",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/hubert-large-superb-er/tree/ef1a2ebfd7cfc424dc7f0fbcdc406e8b794d63bb",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "ef1a2ebfd7cfc424dc7f0fbcdc406e8b794d63bb",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/superb/hubert-large-superb-er",
      "files": [
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 1262970923
        }
      ],
      "totalBytes": 1262970923,
      "gated": false
    }
  },
  {
    "id": "ow-ast",
    "title": "Audio Spectrogram Transformer — model card",
    "publisher": "MIT",
    "url": "https://huggingface.co/MIT/ast-finetuned-audioset-10-10-0.4593",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "f826b80d28226b62986cc218e5cec390b1096902"
  },
  {
    "id": "ow-ast-weights",
    "title": "Audio Spectrogram Transformer — checkpoint files",
    "publisher": "MIT",
    "url": "https://huggingface.co/MIT/ast-finetuned-audioset-10-10-0.4593/tree/f826b80d28226b62986cc218e5cec390b1096902",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "f826b80d28226b62986cc218e5cec390b1096902",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/MIT/ast-finetuned-audioset-10-10-0.4593",
      "parameterCount": 86594063,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 346404948
        },
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 346445675
        }
      ],
      "totalBytes": 692850623,
      "gated": false
    }
  },
  {
    "id": "ow-ecapa",
    "title": "ECAPA-TDNN · VoxCeleb — model card",
    "publisher": "speechbrain",
    "url": "https://huggingface.co/speechbrain/spkrec-ecapa-voxceleb",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "0f99f2d0ebe89ac095bcc5903c4dd8f72b367286"
  },
  {
    "id": "ow-ecapa-weights",
    "title": "ECAPA-TDNN · VoxCeleb — checkpoint files",
    "publisher": "speechbrain",
    "url": "https://huggingface.co/speechbrain/spkrec-ecapa-voxceleb/tree/0f99f2d0ebe89ac095bcc5903c4dd8f72b367286",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "0f99f2d0ebe89ac095bcc5903c4dd8f72b367286"
  },
  {
    "id": "ow-diarization",
    "title": "pyannote Community-1 — model card",
    "publisher": "pyannote",
    "url": "https://huggingface.co/pyannote/speaker-diarization-community-1",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "3533c8cf8e369892e6b79ff1bf80f7b0286a54ee"
  },
  {
    "id": "ow-diarization-weights",
    "title": "pyannote Community-1 — checkpoint files",
    "publisher": "pyannote",
    "url": "https://huggingface.co/pyannote/speaker-diarization-community-1/tree/3533c8cf8e369892e6b79ff1bf80f7b0286a54ee",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "3533c8cf8e369892e6b79ff1bf80f7b0286a54ee",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/pyannote/speaker-diarization-community-1",
      "files": [
        {
          "name": "embedding/pytorch_model.bin",
          "sizeBytes": 26646242
        },
        {
          "name": "segmentation/pytorch_model.bin",
          "sizeBytes": 5906507
        }
      ],
      "totalBytes": 32552749,
      "gated": true
    }
  },
  {
    "id": "ow-tts",
    "title": "Qwen3-TTS 1.7B CustomVoice — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "0c0e3051f131929182e2c023b9537f8b1c68adfe"
  },
  {
    "id": "ow-tts-weights",
    "title": "Qwen3-TTS 1.7B CustomVoice — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice/tree/0c0e3051f131929182e2c023b9537f8b1c68adfe",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "0c0e3051f131929182e2c023b9537f8b1c68adfe",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice",
      "parameterCount": 1916676352,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 3833402552
        },
        {
          "name": "speech_tokenizer/model.safetensors",
          "sizeBytes": 682293092
        }
      ],
      "totalBytes": 4515695644,
      "gated": false
    }
  },
  {
    "id": "ow-separation",
    "title": "SepFormer · WHAMR! — model card",
    "publisher": "speechbrain",
    "url": "https://huggingface.co/speechbrain/sepformer-whamr",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "9950fd8055b38679d2af5bef2366b5dba600ec66"
  },
  {
    "id": "ow-separation-weights",
    "title": "SepFormer · WHAMR! — checkpoint files",
    "publisher": "speechbrain",
    "url": "https://huggingface.co/speechbrain/sepformer-whamr/tree/9950fd8055b38679d2af5bef2366b5dba600ec66",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "9950fd8055b38679d2af5bef2366b5dba600ec66"
  },
  {
    "id": "ow-enhancement",
    "title": "MetricGAN+ · VoiceBank — model card",
    "publisher": "speechbrain",
    "url": "https://huggingface.co/speechbrain/metricgan-plus-voicebank",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "a196ce26b3bdace6fa1d819017584bdbcce462a8"
  },
  {
    "id": "ow-enhancement-weights",
    "title": "MetricGAN+ · VoiceBank — checkpoint files",
    "publisher": "speechbrain",
    "url": "https://huggingface.co/speechbrain/metricgan-plus-voicebank/tree/a196ce26b3bdace6fa1d819017584bdbcce462a8",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "a196ce26b3bdace6fa1d819017584bdbcce462a8"
  },
  {
    "id": "ow-voice",
    "title": "Seed-VC v2 — model card",
    "publisher": "Plachta",
    "url": "https://huggingface.co/Plachta/Seed-VC",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "257283f9f41585055e8f858fba4fd044e5caed6e"
  },
  {
    "id": "ow-voice-weights",
    "title": "Seed-VC v2 — checkpoint files",
    "publisher": "Plachta",
    "url": "https://huggingface.co/Plachta/Seed-VC/tree/257283f9f41585055e8f858fba4fd044e5caed6e",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "257283f9f41585055e8f858fba4fd044e5caed6e",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Plachta/Seed-VC",
      "files": [
        {
          "name": "DiT_seed_v2_uvit_whisper_base_f0_44k_bigvgan_pruned_ema.pth",
          "sizeBytes": 820863652
        },
        {
          "name": "DiT_seed_v2_uvit_whisper_base_f0_44k_bigvgan_pruned_ft_ema_v2.pth",
          "sizeBytes": 820865494
        },
        {
          "name": "DiT_seed_v2_uvit_whisper_base_f0_44k_bigvgan_pruned_ft_ema.pth",
          "sizeBytes": 820864573
        },
        {
          "name": "DiT_seed_v2_uvit_whisper_small_wavenet_bigvgan_pruned.pth",
          "sizeBytes": 440312082
        },
        {
          "name": "DiT_uvit_tat_xlsr_ema.pth",
          "sizeBytes": 142112203
        },
        {
          "name": "hift.pt",
          "sizeBytes": 81896716
        },
        {
          "name": "se_db.pt",
          "sizeBytes": 102405286
        },
        {
          "name": "v2/ar_base.pth",
          "sizeBytes": 358846893
        },
        {
          "name": "v2/cfm_small.pth",
          "sizeBytes": 353349694
        }
      ],
      "totalBytes": 3941516593,
      "gated": false
    }
  },
  {
    "id": "ow-audiogen",
    "title": "AudioGen medium — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/audiogen-medium",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "1277dd7dfd8fa57a205a70acc5de0ee90804502f"
  },
  {
    "id": "ow-audiogen-weights",
    "title": "AudioGen medium — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/audiogen-medium/tree/1277dd7dfd8fa57a205a70acc5de0ee90804502f",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "1277dd7dfd8fa57a205a70acc5de0ee90804502f",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/facebook/audiogen-medium",
      "files": [
        {
          "name": "compression_state_dict.bin",
          "sizeBytes": 235740815
        },
        {
          "name": "state_dict.bin",
          "sizeBytes": 3678455287
        }
      ],
      "totalBytes": 3914196102,
      "gated": false
    }
  },
  {
    "id": "ow-musicgen",
    "title": "MusicGen large — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/musicgen-large",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "15ccdc92099879e47b6da12c350cdb71d4eab3ca"
  },
  {
    "id": "ow-musicgen-weights",
    "title": "MusicGen large — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/musicgen-large/tree/15ccdc92099879e47b6da12c350cdb71d4eab3ca",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "15ccdc92099879e47b6da12c350cdb71d4eab3ca",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/facebook/musicgen-large",
      "files": [
        {
          "name": "compression_state_dict.bin",
          "sizeBytes": 236001935
        },
        {
          "name": "pytorch_model-00001-of-00002.bin",
          "sizeBytes": 9987827539
        },
        {
          "name": "pytorch_model-00002-of-00002.bin",
          "sizeBytes": 3731608779
        },
        {
          "name": "state_dict.bin",
          "sizeBytes": 6514108999
        }
      ],
      "totalBytes": 20469547252,
      "gated": false
    }
  },
  {
    "id": "ow-ace",
    "title": "ACE-Step 1.5 — model card",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/Ace-Step1.5",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "19671f406d603126926c1b7e2adc169acbcade22"
  },
  {
    "id": "ow-ace-weights",
    "title": "ACE-Step 1.5 — checkpoint files",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/Ace-Step1.5/tree/19671f406d603126926c1b7e2adc169acbcade22",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "19671f406d603126926c1b7e2adc169acbcade22",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/ACE-Step/Ace-Step1.5",
      "files": [
        {
          "name": "acestep-5Hz-lm-1.7B/model.safetensors",
          "sizeBytes": 3708521528
        },
        {
          "name": "acestep-v15-turbo/model.safetensors",
          "sizeBytes": 4787825604
        },
        {
          "name": "acestep-v15-turbo/silence_latent.pt",
          "sizeBytes": 3841215
        },
        {
          "name": "Qwen3-Embedding-0.6B/model.safetensors",
          "sizeBytes": 1191586416
        },
        {
          "name": "vae/diffusion_pytorch_model.safetensors",
          "sizeBytes": 337431388
        }
      ],
      "totalBytes": 10029206151,
      "gated": false
    }
  },
  {
    "id": "ow-coder",
    "title": "Qwen3-Coder-Next — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Coder-Next",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "a7fbcb5c0e12d62a448eaa0e260346bf5dcc0feb"
  },
  {
    "id": "ow-coder-weights",
    "title": "Qwen3-Coder-Next — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Coder-Next/tree/a7fbcb5c0e12d62a448eaa0e260346bf5dcc0feb",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "a7fbcb5c0e12d62a448eaa0e260346bf5dcc0feb",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Qwen/Qwen3-Coder-Next",
      "parameterCount": 79674391296,
      "files": [
        {
          "name": "model-00001-of-00040.safetensors",
          "sizeBytes": 3999619288
        },
        {
          "name": "model-00002-of-00040.safetensors",
          "sizeBytes": 3999841816
        },
        {
          "name": "model-00003-of-00040.safetensors",
          "sizeBytes": 3999515608
        },
        {
          "name": "model-00004-of-00040.safetensors",
          "sizeBytes": 3999842032
        },
        {
          "name": "model-00005-of-00040.safetensors",
          "sizeBytes": 3999842240
        },
        {
          "name": "model-00006-of-00040.safetensors",
          "sizeBytes": 3999853248
        },
        {
          "name": "model-00007-of-00040.safetensors",
          "sizeBytes": 3999841944
        },
        {
          "name": "model-00008-of-00040.safetensors",
          "sizeBytes": 3999842032
        },
        {
          "name": "model-00009-of-00040.safetensors",
          "sizeBytes": 3999843224
        },
        {
          "name": "model-00010-of-00040.safetensors",
          "sizeBytes": 3999517840
        },
        {
          "name": "model-00011-of-00040.safetensors",
          "sizeBytes": 4000181328
        },
        {
          "name": "model-00012-of-00040.safetensors",
          "sizeBytes": 3999843912
        },
        {
          "name": "model-00013-of-00040.safetensors",
          "sizeBytes": 3999517504
        },
        {
          "name": "model-00014-of-00040.safetensors",
          "sizeBytes": 3999844016
        },
        {
          "name": "model-00015-of-00040.safetensors",
          "sizeBytes": 4000181768
        },
        {
          "name": "model-00016-of-00040.safetensors",
          "sizeBytes": 3999517280
        },
        {
          "name": "model-00017-of-00040.safetensors",
          "sizeBytes": 3999843912
        },
        {
          "name": "model-00018-of-00040.safetensors",
          "sizeBytes": 3999843912
        },
        {
          "name": "model-00019-of-00040.safetensors",
          "sizeBytes": 3999844120
        },
        {
          "name": "model-00020-of-00040.safetensors",
          "sizeBytes": 3999855064
        },
        {
          "name": "model-00021-of-00040.safetensors",
          "sizeBytes": 3999843824
        },
        {
          "name": "model-00022-of-00040.safetensors",
          "sizeBytes": 3999843912
        },
        {
          "name": "model-00023-of-00040.safetensors",
          "sizeBytes": 3999517496
        },
        {
          "name": "model-00024-of-00040.safetensors",
          "sizeBytes": 3999844296
        },
        {
          "name": "model-00025-of-00040.safetensors",
          "sizeBytes": 4000181328
        },
        {
          "name": "model-00026-of-00040.safetensors",
          "sizeBytes": 3999517504
        },
        {
          "name": "model-00027-of-00040.safetensors",
          "sizeBytes": 3999843912
        },
        {
          "name": "model-00028-of-00040.safetensors",
          "sizeBytes": 3999844016
        },
        {
          "name": "model-00029-of-00040.safetensors",
          "sizeBytes": 3999855352
        },
        {
          "name": "model-00030-of-00040.safetensors",
          "sizeBytes": 3999843704
        },
        {
          "name": "model-00031-of-00040.safetensors",
          "sizeBytes": 3999843912
        },
        {
          "name": "model-00032-of-00040.safetensors",
          "sizeBytes": 3999843912
        },
        {
          "name": "model-00033-of-00040.safetensors",
          "sizeBytes": 3999517720
        },
        {
          "name": "model-00034-of-00040.safetensors",
          "sizeBytes": 4000181528
        },
        {
          "name": "model-00035-of-00040.safetensors",
          "sizeBytes": 3999843824
        },
        {
          "name": "model-00036-of-00040.safetensors",
          "sizeBytes": 3999517504
        },
        {
          "name": "model-00037-of-00040.safetensors",
          "sizeBytes": 3999843904
        },
        {
          "name": "model-00038-of-00040.safetensors",
          "sizeBytes": 3999844296
        },
        {
          "name": "model-00039-of-00040.safetensors",
          "sizeBytes": 3999854920
        },
        {
          "name": "model-00040-of-00040.safetensors",
          "sizeBytes": 3365572528
        }
      ],
      "totalBytes": 159358031480,
      "gated": false
    }
  },
  {
    "id": "ow-sql",
    "title": "SQLCoder 70B alpha — model card",
    "publisher": "defog",
    "url": "https://huggingface.co/defog/sqlcoder-70b-alpha",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "8095a5ded3d3ed70fe27e9ed46b91f3e29a1b51a"
  },
  {
    "id": "ow-sql-weights",
    "title": "SQLCoder 70B alpha — checkpoint files",
    "publisher": "defog",
    "url": "https://huggingface.co/defog/sqlcoder-70b-alpha/tree/8095a5ded3d3ed70fe27e9ed46b91f3e29a1b51a",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "8095a5ded3d3ed70fe27e9ed46b91f3e29a1b51a",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/defog/sqlcoder-70b-alpha",
      "parameterCount": 68976910336,
      "files": [
        {
          "name": "model-00001-of-00029.safetensors",
          "sizeBytes": 4718922456
        },
        {
          "name": "model-00002-of-00029.safetensors",
          "sizeBytes": 4664167352
        },
        {
          "name": "model-00003-of-00029.safetensors",
          "sizeBytes": 4999711672
        },
        {
          "name": "model-00004-of-00029.safetensors",
          "sizeBytes": 4966157024
        },
        {
          "name": "model-00005-of-00029.safetensors",
          "sizeBytes": 4664134384
        },
        {
          "name": "model-00006-of-00029.safetensors",
          "sizeBytes": 4664167384
        },
        {
          "name": "model-00007-of-00029.safetensors",
          "sizeBytes": 4664167376
        },
        {
          "name": "model-00008-of-00029.safetensors",
          "sizeBytes": 4999711704
        },
        {
          "name": "model-00009-of-00029.safetensors",
          "sizeBytes": 4966157032
        },
        {
          "name": "model-00010-of-00029.safetensors",
          "sizeBytes": 4664134384
        },
        {
          "name": "model-00011-of-00029.safetensors",
          "sizeBytes": 4664167384
        },
        {
          "name": "model-00012-of-00029.safetensors",
          "sizeBytes": 4664167376
        },
        {
          "name": "model-00013-of-00029.safetensors",
          "sizeBytes": 4999711704
        },
        {
          "name": "model-00014-of-00029.safetensors",
          "sizeBytes": 4966157032
        },
        {
          "name": "model-00015-of-00029.safetensors",
          "sizeBytes": 4664134384
        },
        {
          "name": "model-00016-of-00029.safetensors",
          "sizeBytes": 4664167384
        },
        {
          "name": "model-00017-of-00029.safetensors",
          "sizeBytes": 4664167376
        },
        {
          "name": "model-00018-of-00029.safetensors",
          "sizeBytes": 4999711704
        },
        {
          "name": "model-00019-of-00029.safetensors",
          "sizeBytes": 4966157032
        },
        {
          "name": "model-00020-of-00029.safetensors",
          "sizeBytes": 4664134384
        },
        {
          "name": "model-00021-of-00029.safetensors",
          "sizeBytes": 4664167384
        },
        {
          "name": "model-00022-of-00029.safetensors",
          "sizeBytes": 4664167376
        },
        {
          "name": "model-00023-of-00029.safetensors",
          "sizeBytes": 4999711704
        },
        {
          "name": "model-00024-of-00029.safetensors",
          "sizeBytes": 4966157032
        },
        {
          "name": "model-00025-of-00029.safetensors",
          "sizeBytes": 4664134384
        },
        {
          "name": "model-00026-of-00029.safetensors",
          "sizeBytes": 4664167384
        },
        {
          "name": "model-00027-of-00029.safetensors",
          "sizeBytes": 4664167376
        },
        {
          "name": "model-00028-of-00029.safetensors",
          "sizeBytes": 4999711704
        },
        {
          "name": "model-00029-of-00029.safetensors",
          "sizeBytes": 3779413912
        }
      ],
      "totalBytes": 137953904784,
      "gated": false
    }
  },
  {
    "id": "ow-codet5",
    "title": "CodeT5 base — model card",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "02cd2d31bb7c6d0e4d91156167b2de044989c733"
  },
  {
    "id": "ow-codet5-weights",
    "title": "CodeT5 base — checkpoint files",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base/tree/02cd2d31bb7c6d0e4d91156167b2de044989c733",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "02cd2d31bb7c6d0e4d91156167b2de044989c733",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Salesforce/codet5-base",
      "files": [
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 891641279
        }
      ],
      "totalBytes": 891641279,
      "gated": false
    }
  },
  {
    "id": "ow-codet5plus",
    "title": "CodeT5+ 770M — model card",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5p-770m",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "3f7cc6e80aee6612f41253b5ee28f09f86faa35f"
  },
  {
    "id": "ow-codet5plus-weights",
    "title": "CodeT5+ 770M — checkpoint files",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5p-770m/tree/3f7cc6e80aee6612f41253b5ee28f09f86faa35f",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "3f7cc6e80aee6612f41253b5ee28f09f86faa35f",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Salesforce/codet5p-770m",
      "files": [
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 1475351723
        }
      ],
      "totalBytes": 1475351723,
      "gated": false
    }
  },
  {
    "id": "ow-bart",
    "title": "BART large · CNN/DailyMail — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/bart-large-cnn",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "37f520fa929c961707657b28798b30c003dd100b"
  },
  {
    "id": "ow-bart-weights",
    "title": "BART large · CNN/DailyMail — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/bart-large-cnn/tree/37f520fa929c961707657b28798b30c003dd100b",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "37f520fa929c961707657b28798b30c003dd100b",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/facebook/bart-large-cnn",
      "parameterCount": 406290432,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 1625222120
        },
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 1625270765
        }
      ],
      "totalBytes": 3250492885,
      "gated": false
    }
  },
  {
    "id": "ow-tabpfn",
    "title": "TabPFN 3.5 — model card",
    "publisher": "Prior-Labs",
    "url": "https://huggingface.co/Prior-Labs/tabpfn_3_5",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "06bf2ba35c80a92a3b9abb436b99cf49e7a0365e"
  },
  {
    "id": "ow-tabpfn-weights",
    "title": "TabPFN 3.5 — checkpoint files",
    "publisher": "Prior-Labs",
    "url": "https://huggingface.co/Prior-Labs/tabpfn_3_5/tree/06bf2ba35c80a92a3b9abb436b99cf49e7a0365e",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "06bf2ba35c80a92a3b9abb436b99cf49e7a0365e",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Prior-Labs/tabpfn_3_5",
      "files": [
        {
          "name": "tabpfn-v3.5-20260909_multiclass.safetensors",
          "sizeBytes": 876028348
        },
        {
          "name": "tabpfn-v3.5-20260909.safetensors",
          "sizeBytes": 876027932
        },
        {
          "name": "tabpfn-v3.5-fast-20260909.safetensors",
          "sizeBytes": 334181708
        }
      ],
      "totalBytes": 2086237988,
      "gated": false
    }
  },
  {
    "id": "ow-chronos",
    "title": "Chronos-2 — model card",
    "publisher": "amazon",
    "url": "https://huggingface.co/amazon/chronos-2",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "29ec3766d36d6f73f0696f85560a422f50e8498c"
  },
  {
    "id": "ow-chronos-weights",
    "title": "Chronos-2 — checkpoint files",
    "publisher": "amazon",
    "url": "https://huggingface.co/amazon/chronos-2/tree/29ec3766d36d6f73f0696f85560a422f50e8498c",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "29ec3766d36d6f73f0696f85560a422f50e8498c",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/amazon/chronos-2",
      "parameterCount": 119477664,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 477930472
        }
      ],
      "totalBytes": 477930472,
      "gated": false
    }
  },
  {
    "id": "ow-moment",
    "title": "MOMENT-1 large — model card",
    "publisher": "AutonLab",
    "url": "https://huggingface.co/AutonLab/MOMENT-1-large",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "ca58581bc7bea2ebed4e80dc0a3e4b8b609c6ecc"
  },
  {
    "id": "ow-moment-weights",
    "title": "MOMENT-1 large — checkpoint files",
    "publisher": "AutonLab",
    "url": "https://huggingface.co/AutonLab/MOMENT-1-large/tree/ca58581bc7bea2ebed4e80dc0a3e4b8b609c6ecc",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "ca58581bc7bea2ebed4e80dc0a3e4b8b609c6ecc",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/AutonLab/MOMENT-1-large",
      "parameterCount": 346368520,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 1385501256
        },
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 1385575757
        }
      ],
      "totalBytes": 2771077013,
      "gated": false
    }
  },
  {
    "id": "ow-boltz",
    "title": "Boltz-2 — model card",
    "publisher": "boltz-community",
    "url": "https://huggingface.co/boltz-community/boltz-2",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "6fdef46d763fee7fbb83ca5501ccceff43b85607"
  },
  {
    "id": "ow-boltz-weights",
    "title": "Boltz-2 — checkpoint files",
    "publisher": "boltz-community",
    "url": "https://huggingface.co/boltz-community/boltz-2/tree/6fdef46d763fee7fbb83ca5501ccceff43b85607",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "6fdef46d763fee7fbb83ca5501ccceff43b85607"
  },
  {
    "id": "ow-prover",
    "title": "DeepSeek-Prover-V2 671B — model card",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "a51f899d0599838aa934b21b45b4c1ae7fbce2d3"
  },
  {
    "id": "ow-prover-weights",
    "title": "DeepSeek-Prover-V2 671B — checkpoint files",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B/tree/a51f899d0599838aa934b21b45b4c1ae7fbce2d3",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "a51f899d0599838aa934b21b45b4c1ae7fbce2d3",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B",
      "parameterCount": 684489845504,
      "files": [
        {
          "name": "model-00001-of-000163.safetensors",
          "sizeBytes": 5234139343
        },
        {
          "name": "model-00002-of-000163.safetensors",
          "sizeBytes": 4302383966
        },
        {
          "name": "model-00003-of-000163.safetensors",
          "sizeBytes": 4302384375
        },
        {
          "name": "model-00004-of-000163.safetensors",
          "sizeBytes": 4302349996
        },
        {
          "name": "model-00005-of-000163.safetensors",
          "sizeBytes": 4302384154
        },
        {
          "name": "model-00006-of-000163.safetensors",
          "sizeBytes": 4372073602
        },
        {
          "name": "model-00007-of-000163.safetensors",
          "sizeBytes": 4306080097
        },
        {
          "name": "model-00008-of-000163.safetensors",
          "sizeBytes": 4302384356
        },
        {
          "name": "model-00009-of-000163.safetensors",
          "sizeBytes": 4302350190
        },
        {
          "name": "model-00010-of-000163.safetensors",
          "sizeBytes": 4302383960
        },
        {
          "name": "model-00011-of-000163.safetensors",
          "sizeBytes": 4302384375
        },
        {
          "name": "model-00012-of-000163.safetensors",
          "sizeBytes": 1321583941
        },
        {
          "name": "model-00013-of-000163.safetensors",
          "sizeBytes": 4302317244
        },
        {
          "name": "model-00014-of-000163.safetensors",
          "sizeBytes": 4302384328
        },
        {
          "name": "model-00015-of-000163.safetensors",
          "sizeBytes": 4302350218
        },
        {
          "name": "model-00016-of-000163.safetensors",
          "sizeBytes": 4302383932
        },
        {
          "name": "model-00017-of-000163.safetensors",
          "sizeBytes": 4302384377
        },
        {
          "name": "model-00018-of-000163.safetensors",
          "sizeBytes": 4302350026
        },
        {
          "name": "model-00019-of-000163.safetensors",
          "sizeBytes": 4302384124
        },
        {
          "name": "model-00020-of-000163.safetensors",
          "sizeBytes": 4302384377
        },
        {
          "name": "model-00021-of-000163.safetensors",
          "sizeBytes": 4302350413
        },
        {
          "name": "model-00022-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00023-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00024-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00025-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00026-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00027-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00028-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00029-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00030-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00031-of-000163.safetensors",
          "sizeBytes": 4302350824
        },
        {
          "name": "model-00032-of-000163.safetensors",
          "sizeBytes": 4302384488
        },
        {
          "name": "model-00033-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00034-of-000163.safetensors",
          "sizeBytes": 1747417474
        },
        {
          "name": "model-00035-of-000163.safetensors",
          "sizeBytes": 4302317817
        },
        {
          "name": "model-00036-of-000163.safetensors",
          "sizeBytes": 4302384914
        },
        {
          "name": "model-00037-of-000163.safetensors",
          "sizeBytes": 4302350794
        },
        {
          "name": "model-00038-of-000163.safetensors",
          "sizeBytes": 4302384518
        },
        {
          "name": "model-00039-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00040-of-000163.safetensors",
          "sizeBytes": 4302350602
        },
        {
          "name": "model-00041-of-000163.safetensors",
          "sizeBytes": 4302384710
        },
        {
          "name": "model-00042-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00043-of-000163.safetensors",
          "sizeBytes": 4302350432
        },
        {
          "name": "model-00044-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00045-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00046-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00047-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00048-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00049-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00050-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00051-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00052-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00053-of-000163.safetensors",
          "sizeBytes": 4302350824
        },
        {
          "name": "model-00054-of-000163.safetensors",
          "sizeBytes": 4302384488
        },
        {
          "name": "model-00055-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00056-of-000163.safetensors",
          "sizeBytes": 1747417474
        },
        {
          "name": "model-00057-of-000163.safetensors",
          "sizeBytes": 4302317817
        },
        {
          "name": "model-00058-of-000163.safetensors",
          "sizeBytes": 4302384914
        },
        {
          "name": "model-00059-of-000163.safetensors",
          "sizeBytes": 4302350794
        },
        {
          "name": "model-00060-of-000163.safetensors",
          "sizeBytes": 4302384518
        },
        {
          "name": "model-00061-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00062-of-000163.safetensors",
          "sizeBytes": 4302350602
        },
        {
          "name": "model-00063-of-000163.safetensors",
          "sizeBytes": 4302384710
        },
        {
          "name": "model-00064-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00065-of-000163.safetensors",
          "sizeBytes": 4302350432
        },
        {
          "name": "model-00066-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00067-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00068-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00069-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00070-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00071-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00072-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00073-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00074-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00075-of-000163.safetensors",
          "sizeBytes": 4302350824
        },
        {
          "name": "model-00076-of-000163.safetensors",
          "sizeBytes": 4302384488
        },
        {
          "name": "model-00077-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00078-of-000163.safetensors",
          "sizeBytes": 1747417474
        },
        {
          "name": "model-00079-of-000163.safetensors",
          "sizeBytes": 4302317817
        },
        {
          "name": "model-00080-of-000163.safetensors",
          "sizeBytes": 4302384914
        },
        {
          "name": "model-00081-of-000163.safetensors",
          "sizeBytes": 4302350794
        },
        {
          "name": "model-00082-of-000163.safetensors",
          "sizeBytes": 4302384518
        },
        {
          "name": "model-00083-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00084-of-000163.safetensors",
          "sizeBytes": 4302350602
        },
        {
          "name": "model-00085-of-000163.safetensors",
          "sizeBytes": 4302384710
        },
        {
          "name": "model-00086-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00087-of-000163.safetensors",
          "sizeBytes": 4302350432
        },
        {
          "name": "model-00088-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00089-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00090-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00091-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00092-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00093-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00094-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00095-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00096-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00097-of-000163.safetensors",
          "sizeBytes": 4302350824
        },
        {
          "name": "model-00098-of-000163.safetensors",
          "sizeBytes": 4302384488
        },
        {
          "name": "model-00099-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00100-of-000163.safetensors",
          "sizeBytes": 1747417474
        },
        {
          "name": "model-00101-of-000163.safetensors",
          "sizeBytes": 4302317817
        },
        {
          "name": "model-00102-of-000163.safetensors",
          "sizeBytes": 4302384914
        },
        {
          "name": "model-00103-of-000163.safetensors",
          "sizeBytes": 4302350794
        },
        {
          "name": "model-00104-of-000163.safetensors",
          "sizeBytes": 4302384518
        },
        {
          "name": "model-00105-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00106-of-000163.safetensors",
          "sizeBytes": 4302350602
        },
        {
          "name": "model-00107-of-000163.safetensors",
          "sizeBytes": 4302384710
        },
        {
          "name": "model-00108-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00109-of-000163.safetensors",
          "sizeBytes": 4302350432
        },
        {
          "name": "model-00110-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00111-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00112-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00113-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00114-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00115-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00116-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00117-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00118-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00119-of-000163.safetensors",
          "sizeBytes": 4302350824
        },
        {
          "name": "model-00120-of-000163.safetensors",
          "sizeBytes": 4302384488
        },
        {
          "name": "model-00121-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00122-of-000163.safetensors",
          "sizeBytes": 1747417474
        },
        {
          "name": "model-00123-of-000163.safetensors",
          "sizeBytes": 4302317817
        },
        {
          "name": "model-00124-of-000163.safetensors",
          "sizeBytes": 4302384914
        },
        {
          "name": "model-00125-of-000163.safetensors",
          "sizeBytes": 4302350794
        },
        {
          "name": "model-00126-of-000163.safetensors",
          "sizeBytes": 4302384518
        },
        {
          "name": "model-00127-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00128-of-000163.safetensors",
          "sizeBytes": 4302350602
        },
        {
          "name": "model-00129-of-000163.safetensors",
          "sizeBytes": 4302384710
        },
        {
          "name": "model-00130-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00131-of-000163.safetensors",
          "sizeBytes": 4302350432
        },
        {
          "name": "model-00132-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00133-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00134-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00135-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00136-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00137-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00138-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00139-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00140-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00141-of-000163.safetensors",
          "sizeBytes": 3142388798
        },
        {
          "name": "model-00142-of-000163.safetensors",
          "sizeBytes": 4302317817
        },
        {
          "name": "model-00143-of-000163.safetensors",
          "sizeBytes": 4302384914
        },
        {
          "name": "model-00144-of-000163.safetensors",
          "sizeBytes": 4302350794
        },
        {
          "name": "model-00145-of-000163.safetensors",
          "sizeBytes": 4302384518
        },
        {
          "name": "model-00146-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00147-of-000163.safetensors",
          "sizeBytes": 4302350602
        },
        {
          "name": "model-00148-of-000163.safetensors",
          "sizeBytes": 4302384710
        },
        {
          "name": "model-00149-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00150-of-000163.safetensors",
          "sizeBytes": 4302350432
        },
        {
          "name": "model-00151-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00152-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00153-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00154-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00155-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00156-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00157-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00158-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00159-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00160-of-000163.safetensors",
          "sizeBytes": 5230637362
        },
        {
          "name": "model-00161-of-000163.safetensors",
          "sizeBytes": 4302384321
        },
        {
          "name": "model-00162-of-000163.safetensors",
          "sizeBytes": 4302384948
        },
        {
          "name": "model-00163-of-000163.safetensors",
          "sizeBytes": 6584784447
        }
      ],
      "totalBytes": 688586727753,
      "gated": false
    }
  },
  {
    "id": "ow-uitars",
    "title": "UI-TARS 1.5 7B — model card",
    "publisher": "ByteDance-Seed",
    "url": "https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "683d002dd99d8f95104d31e70391a39348857f4e"
  },
  {
    "id": "ow-uitars-weights",
    "title": "UI-TARS 1.5 7B — checkpoint files",
    "publisher": "ByteDance-Seed",
    "url": "https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B/tree/683d002dd99d8f95104d31e70391a39348857f4e",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "683d002dd99d8f95104d31e70391a39348857f4e",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B",
      "parameterCount": 8292166656,
      "files": [
        {
          "name": "model-00001-of-00007.safetensors",
          "sizeBytes": 4952311608
        },
        {
          "name": "model-00002-of-00007.safetensors",
          "sizeBytes": 4984124272
        },
        {
          "name": "model-00003-of-00007.safetensors",
          "sizeBytes": 4932743936
        },
        {
          "name": "model-00004-of-00007.safetensors",
          "sizeBytes": 4998852296
        },
        {
          "name": "model-00005-of-00007.safetensors",
          "sizeBytes": 4984124336
        },
        {
          "name": "model-00006-of-00007.safetensors",
          "sizeBytes": 4932743992
        },
        {
          "name": "model-00007-of-00007.safetensors",
          "sizeBytes": 3383846800
        }
      ],
      "totalBytes": 33168747240,
      "gated": false
    }
  },
  {
    "id": "ow-sam-license",
    "title": "SAM License",
    "publisher": "Meta",
    "url": "https://github.com/facebookresearch/sam3/blob/main/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-mask-license",
    "title": "Mask2Former model weights license",
    "publisher": "Meta",
    "url": "https://github.com/facebookresearch/Mask2Former/blob/main/MODEL_ZOO.md#license",
    "kind": "license",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-seed-docs",
    "title": "Seed-VC official models and inference",
    "publisher": "Plachta",
    "url": "https://github.com/Plachtaa/seed-vc",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-boltz-docs",
    "title": "Boltz-2 official structure and affinity documentation",
    "publisher": "Boltz authors",
    "url": "https://github.com/jwohlwend/boltz",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-stanza-docs",
    "title": "Stanza processors",
    "publisher": "Stanford NLP",
    "url": "https://stanfordnlp.github.io/stanza/pipeline.html",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-r1",
    "title": "DeepSeek-R1-0528 — model card",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1-0528",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "4236a6af538feda4548eca9ab308586007567f52"
  },
  {
    "id": "ow-r1-weights",
    "title": "DeepSeek-R1-0528 — checkpoint files",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1-0528/tree/4236a6af538feda4548eca9ab308586007567f52",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "4236a6af538feda4548eca9ab308586007567f52",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/deepseek-ai/DeepSeek-R1-0528",
      "parameterCount": 684531386000,
      "files": [
        {
          "name": "model-00001-of-000163.safetensors",
          "sizeBytes": 5234139343
        },
        {
          "name": "model-00002-of-000163.safetensors",
          "sizeBytes": 4302383966
        },
        {
          "name": "model-00003-of-000163.safetensors",
          "sizeBytes": 4302384375
        },
        {
          "name": "model-00004-of-000163.safetensors",
          "sizeBytes": 4302349996
        },
        {
          "name": "model-00005-of-000163.safetensors",
          "sizeBytes": 4302384154
        },
        {
          "name": "model-00006-of-000163.safetensors",
          "sizeBytes": 4372073602
        },
        {
          "name": "model-00007-of-000163.safetensors",
          "sizeBytes": 4306080097
        },
        {
          "name": "model-00008-of-000163.safetensors",
          "sizeBytes": 4302384356
        },
        {
          "name": "model-00009-of-000163.safetensors",
          "sizeBytes": 4302350190
        },
        {
          "name": "model-00010-of-000163.safetensors",
          "sizeBytes": 4302383960
        },
        {
          "name": "model-00011-of-000163.safetensors",
          "sizeBytes": 4302384375
        },
        {
          "name": "model-00012-of-000163.safetensors",
          "sizeBytes": 1321583941
        },
        {
          "name": "model-00013-of-000163.safetensors",
          "sizeBytes": 4302317244
        },
        {
          "name": "model-00014-of-000163.safetensors",
          "sizeBytes": 4302384328
        },
        {
          "name": "model-00015-of-000163.safetensors",
          "sizeBytes": 4302350218
        },
        {
          "name": "model-00016-of-000163.safetensors",
          "sizeBytes": 4302383932
        },
        {
          "name": "model-00017-of-000163.safetensors",
          "sizeBytes": 4302384377
        },
        {
          "name": "model-00018-of-000163.safetensors",
          "sizeBytes": 4302350026
        },
        {
          "name": "model-00019-of-000163.safetensors",
          "sizeBytes": 4302384124
        },
        {
          "name": "model-00020-of-000163.safetensors",
          "sizeBytes": 4302384377
        },
        {
          "name": "model-00021-of-000163.safetensors",
          "sizeBytes": 4302350413
        },
        {
          "name": "model-00022-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00023-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00024-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00025-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00026-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00027-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00028-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00029-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00030-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00031-of-000163.safetensors",
          "sizeBytes": 4302350824
        },
        {
          "name": "model-00032-of-000163.safetensors",
          "sizeBytes": 4302384488
        },
        {
          "name": "model-00033-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00034-of-000163.safetensors",
          "sizeBytes": 1747417474
        },
        {
          "name": "model-00035-of-000163.safetensors",
          "sizeBytes": 4302317817
        },
        {
          "name": "model-00036-of-000163.safetensors",
          "sizeBytes": 4302384914
        },
        {
          "name": "model-00037-of-000163.safetensors",
          "sizeBytes": 4302350794
        },
        {
          "name": "model-00038-of-000163.safetensors",
          "sizeBytes": 4302384518
        },
        {
          "name": "model-00039-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00040-of-000163.safetensors",
          "sizeBytes": 4302350602
        },
        {
          "name": "model-00041-of-000163.safetensors",
          "sizeBytes": 4302384710
        },
        {
          "name": "model-00042-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00043-of-000163.safetensors",
          "sizeBytes": 4302350432
        },
        {
          "name": "model-00044-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00045-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00046-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00047-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00048-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00049-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00050-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00051-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00052-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00053-of-000163.safetensors",
          "sizeBytes": 4302350824
        },
        {
          "name": "model-00054-of-000163.safetensors",
          "sizeBytes": 4302384488
        },
        {
          "name": "model-00055-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00056-of-000163.safetensors",
          "sizeBytes": 1747417474
        },
        {
          "name": "model-00057-of-000163.safetensors",
          "sizeBytes": 4302317817
        },
        {
          "name": "model-00058-of-000163.safetensors",
          "sizeBytes": 4302384914
        },
        {
          "name": "model-00059-of-000163.safetensors",
          "sizeBytes": 4302350794
        },
        {
          "name": "model-00060-of-000163.safetensors",
          "sizeBytes": 4302384518
        },
        {
          "name": "model-00061-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00062-of-000163.safetensors",
          "sizeBytes": 4302350602
        },
        {
          "name": "model-00063-of-000163.safetensors",
          "sizeBytes": 4302384710
        },
        {
          "name": "model-00064-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00065-of-000163.safetensors",
          "sizeBytes": 4302350432
        },
        {
          "name": "model-00066-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00067-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00068-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00069-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00070-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00071-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00072-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00073-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00074-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00075-of-000163.safetensors",
          "sizeBytes": 4302350824
        },
        {
          "name": "model-00076-of-000163.safetensors",
          "sizeBytes": 4302384488
        },
        {
          "name": "model-00077-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00078-of-000163.safetensors",
          "sizeBytes": 1747417474
        },
        {
          "name": "model-00079-of-000163.safetensors",
          "sizeBytes": 4302317817
        },
        {
          "name": "model-00080-of-000163.safetensors",
          "sizeBytes": 4302384914
        },
        {
          "name": "model-00081-of-000163.safetensors",
          "sizeBytes": 4302350794
        },
        {
          "name": "model-00082-of-000163.safetensors",
          "sizeBytes": 4302384518
        },
        {
          "name": "model-00083-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00084-of-000163.safetensors",
          "sizeBytes": 4302350602
        },
        {
          "name": "model-00085-of-000163.safetensors",
          "sizeBytes": 4302384710
        },
        {
          "name": "model-00086-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00087-of-000163.safetensors",
          "sizeBytes": 4302350432
        },
        {
          "name": "model-00088-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00089-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00090-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00091-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00092-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00093-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00094-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00095-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00096-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00097-of-000163.safetensors",
          "sizeBytes": 4302350824
        },
        {
          "name": "model-00098-of-000163.safetensors",
          "sizeBytes": 4302384488
        },
        {
          "name": "model-00099-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00100-of-000163.safetensors",
          "sizeBytes": 1747417474
        },
        {
          "name": "model-00101-of-000163.safetensors",
          "sizeBytes": 4302317817
        },
        {
          "name": "model-00102-of-000163.safetensors",
          "sizeBytes": 4302384914
        },
        {
          "name": "model-00103-of-000163.safetensors",
          "sizeBytes": 4302350794
        },
        {
          "name": "model-00104-of-000163.safetensors",
          "sizeBytes": 4302384518
        },
        {
          "name": "model-00105-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00106-of-000163.safetensors",
          "sizeBytes": 4302350602
        },
        {
          "name": "model-00107-of-000163.safetensors",
          "sizeBytes": 4302384710
        },
        {
          "name": "model-00108-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00109-of-000163.safetensors",
          "sizeBytes": 4302350432
        },
        {
          "name": "model-00110-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00111-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00112-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00113-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00114-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00115-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00116-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00117-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00118-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00119-of-000163.safetensors",
          "sizeBytes": 4302350824
        },
        {
          "name": "model-00120-of-000163.safetensors",
          "sizeBytes": 4302384488
        },
        {
          "name": "model-00121-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00122-of-000163.safetensors",
          "sizeBytes": 1747417474
        },
        {
          "name": "model-00123-of-000163.safetensors",
          "sizeBytes": 4302317817
        },
        {
          "name": "model-00124-of-000163.safetensors",
          "sizeBytes": 4302384914
        },
        {
          "name": "model-00125-of-000163.safetensors",
          "sizeBytes": 4302350794
        },
        {
          "name": "model-00126-of-000163.safetensors",
          "sizeBytes": 4302384518
        },
        {
          "name": "model-00127-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00128-of-000163.safetensors",
          "sizeBytes": 4302350602
        },
        {
          "name": "model-00129-of-000163.safetensors",
          "sizeBytes": 4302384710
        },
        {
          "name": "model-00130-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00131-of-000163.safetensors",
          "sizeBytes": 4302350432
        },
        {
          "name": "model-00132-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00133-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00134-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00135-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00136-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00137-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00138-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00139-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00140-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00141-of-000163.safetensors",
          "sizeBytes": 3142388798
        },
        {
          "name": "model-00142-of-000163.safetensors",
          "sizeBytes": 4302317817
        },
        {
          "name": "model-00143-of-000163.safetensors",
          "sizeBytes": 4302384914
        },
        {
          "name": "model-00144-of-000163.safetensors",
          "sizeBytes": 4302350794
        },
        {
          "name": "model-00145-of-000163.safetensors",
          "sizeBytes": 4302384518
        },
        {
          "name": "model-00146-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00147-of-000163.safetensors",
          "sizeBytes": 4302350602
        },
        {
          "name": "model-00148-of-000163.safetensors",
          "sizeBytes": 4302384710
        },
        {
          "name": "model-00149-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00150-of-000163.safetensors",
          "sizeBytes": 4302350432
        },
        {
          "name": "model-00151-of-000163.safetensors",
          "sizeBytes": 4302384900
        },
        {
          "name": "model-00152-of-000163.safetensors",
          "sizeBytes": 4302350808
        },
        {
          "name": "model-00153-of-000163.safetensors",
          "sizeBytes": 4302384504
        },
        {
          "name": "model-00154-of-000163.safetensors",
          "sizeBytes": 4302384961
        },
        {
          "name": "model-00155-of-000163.safetensors",
          "sizeBytes": 4302350620
        },
        {
          "name": "model-00156-of-000163.safetensors",
          "sizeBytes": 4302384692
        },
        {
          "name": "model-00157-of-000163.safetensors",
          "sizeBytes": 4302384963
        },
        {
          "name": "model-00158-of-000163.safetensors",
          "sizeBytes": 4302350448
        },
        {
          "name": "model-00159-of-000163.safetensors",
          "sizeBytes": 4302384884
        },
        {
          "name": "model-00160-of-000163.safetensors",
          "sizeBytes": 5230637362
        },
        {
          "name": "model-00161-of-000163.safetensors",
          "sizeBytes": 4302384321
        },
        {
          "name": "model-00162-of-000163.safetensors",
          "sizeBytes": 4302384948
        },
        {
          "name": "model-00163-of-000163.safetensors",
          "sizeBytes": 6584784447
        }
      ],
      "totalBytes": 688586727753,
      "gated": false
    }
  },
  {
    "id": "ow-fasttext-lid",
    "title": "fastText lid218e — model card",
    "publisher": "Meta",
    "url": "https://huggingface.co/facebook/fasttext-language-identification",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "3af127d4124fc58b75666f3594bb5143b9757e78"
  },
  {
    "id": "ow-fasttext-lid-weights",
    "title": "fastText lid218e — checkpoint files",
    "publisher": "Meta",
    "url": "https://huggingface.co/facebook/fasttext-language-identification/tree/3af127d4124fc58b75666f3594bb5143b9757e78",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "3af127d4124fc58b75666f3594bb5143b9757e78",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/facebook/fasttext-language-identification",
      "files": [
        {
          "name": "model.bin",
          "sizeBytes": 1176355829
        }
      ],
      "totalBytes": 1176355829,
      "gated": false
    }
  },
  {
    "id": "ow-fasttext-lid-license",
    "title": "fastText lid218e — license declaration",
    "publisher": "Meta",
    "url": "https://huggingface.co/facebook/fasttext-language-identification",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "3af127d4124fc58b75666f3594bb5143b9757e78"
  },
  {
    "id": "ow-fasttext-paper",
    "title": "fastText — rank-constrained linear classifier",
    "publisher": "Joulin et al. / FAIR",
    "url": "https://arxiv.org/abs/1607.01759",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-mamba2",
    "title": "Mamba2 2.7B — model card",
    "publisher": "State Spaces",
    "url": "https://huggingface.co/state-spaces/mamba2-2.7b",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "99b226cc377d131cccc610ed4346db564f381f1e"
  },
  {
    "id": "ow-mamba2-weights",
    "title": "Mamba2 2.7B — checkpoint files",
    "publisher": "State Spaces",
    "url": "https://huggingface.co/state-spaces/mamba2-2.7b/tree/99b226cc377d131cccc610ed4346db564f381f1e",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "99b226cc377d131cccc610ed4346db564f381f1e",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/state-spaces/mamba2-2.7b",
      "files": [
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 5405424282
        }
      ],
      "totalBytes": 5405424282,
      "gated": false
    }
  },
  {
    "id": "ow-mamba2-license",
    "title": "Mamba2 2.7B — license declaration",
    "publisher": "State Spaces",
    "url": "https://huggingface.co/state-spaces/mamba2-2.7b",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "99b226cc377d131cccc610ed4346db564f381f1e"
  },
  {
    "id": "ow-mamba2-method",
    "title": "Mamba2 — architecture, checkpoints and generation",
    "publisher": "Gu & Dao",
    "url": "https://github.com/state-spaces/mamba/blob/e9594ce1c732d97440f0332fdc43170a2294dbfa/README.md",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "e9594ce1c732d97440f0332fdc43170a2294dbfa"
  },
  {
    "id": "ow-olmo2-dpo",
    "title": "OLMo 2 7B DPO · 1124 — model card",
    "publisher": "Ai2",
    "url": "https://huggingface.co/allenai/OLMo-2-1124-7B-DPO",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "e34ea60adff2e575f4fe7569eaffd1b28509b6fd"
  },
  {
    "id": "ow-olmo2-dpo-weights",
    "title": "OLMo 2 7B DPO · 1124 — checkpoint files",
    "publisher": "Ai2",
    "url": "https://huggingface.co/allenai/OLMo-2-1124-7B-DPO/tree/e34ea60adff2e575f4fe7569eaffd1b28509b6fd",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "e34ea60adff2e575f4fe7569eaffd1b28509b6fd",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/allenai/OLMo-2-1124-7B-DPO",
      "files": [
        {
          "name": "pytorch_model-00001-of-00003.bin",
          "sizeBytes": 4970616924
        },
        {
          "name": "pytorch_model-00002-of-00003.bin",
          "sizeBytes": 4981192226
        },
        {
          "name": "pytorch_model-00003-of-00003.bin",
          "sizeBytes": 4645547125
        }
      ],
      "totalBytes": 14597356275,
      "gated": false
    }
  },
  {
    "id": "ow-olmo2-dpo-license",
    "title": "OLMo 2 7B DPO · 1124 — license declaration",
    "publisher": "Ai2",
    "url": "https://huggingface.co/allenai/OLMo-2-1124-7B-DPO",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "e34ea60adff2e575f4fe7569eaffd1b28509b6fd"
  },
  {
    "id": "ow-llama31-rlhf",
    "title": "Llama 3.1 8B Instruct — model card",
    "publisher": "Meta",
    "url": "https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "0e9e39f249a16976918f6564b8830bc894c89659"
  },
  {
    "id": "ow-llama31-rlhf-weights",
    "title": "Llama 3.1 8B Instruct — checkpoint files",
    "publisher": "Meta",
    "url": "https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct/tree/0e9e39f249a16976918f6564b8830bc894c89659",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "0e9e39f249a16976918f6564b8830bc894c89659",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct",
      "parameterCount": 8030261248,
      "files": [
        {
          "name": "model-00001-of-00004.safetensors",
          "sizeBytes": 4976698672
        },
        {
          "name": "model-00002-of-00004.safetensors",
          "sizeBytes": 4999802720
        },
        {
          "name": "model-00003-of-00004.safetensors",
          "sizeBytes": 4915916176
        },
        {
          "name": "model-00004-of-00004.safetensors",
          "sizeBytes": 1168138808
        },
        {
          "name": "original/consolidated.00.pth",
          "sizeBytes": 16060617592
        }
      ],
      "totalBytes": 32121173968,
      "gated": true
    }
  },
  {
    "id": "ow-llama31-rlhf-license",
    "title": "Llama 3.1 8B Instruct — license declaration",
    "publisher": "Meta",
    "url": "https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "0e9e39f249a16976918f6564b8830bc894c89659"
  },
  {
    "id": "ow-mlp-mixer",
    "title": "MLP-Mixer B/16 · ImageNet — model card",
    "publisher": "Google Research / timm",
    "url": "https://huggingface.co/timm/mixer_b16_224.goog_in21k_ft_in1k",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "0006300d604941f96f16cb7d229137363e1b2ac6"
  },
  {
    "id": "ow-mlp-mixer-weights",
    "title": "MLP-Mixer B/16 · ImageNet — checkpoint files",
    "publisher": "Google Research / timm",
    "url": "https://huggingface.co/timm/mixer_b16_224.goog_in21k_ft_in1k/tree/0006300d604941f96f16cb7d229137363e1b2ac6",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "0006300d604941f96f16cb7d229137363e1b2ac6",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/timm/mixer_b16_224.goog_in21k_ft_in1k",
      "parameterCount": 59880472,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 239536434
        },
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 239577701
        }
      ],
      "totalBytes": 479114135,
      "gated": false
    }
  },
  {
    "id": "ow-mlp-mixer-license",
    "title": "MLP-Mixer B/16 · ImageNet — license declaration",
    "publisher": "Google Research / timm",
    "url": "https://huggingface.co/timm/mixer_b16_224.goog_in21k_ft_in1k",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "0006300d604941f96f16cb7d229137363e1b2ac6"
  },
  {
    "id": "ow-mixer-paper",
    "title": "MLP-Mixer — an all-MLP architecture for vision",
    "publisher": "Tolstikhin et al. / Google Research",
    "url": "https://arxiv.org/abs/2105.01601",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-resnet50-ssl",
    "title": "ResNet-50 SSL · YFCC100M → ImageNet — model card",
    "publisher": "Meta / timm",
    "url": "https://huggingface.co/timm/resnet50.fb_ssl_yfcc100m_ft_in1k",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "2bfbb0e194aa59bf9f8c88d3fd3719ed3b7420a5"
  },
  {
    "id": "ow-resnet50-ssl-weights",
    "title": "ResNet-50 SSL · YFCC100M → ImageNet — checkpoint files",
    "publisher": "Meta / timm",
    "url": "https://huggingface.co/timm/resnet50.fb_ssl_yfcc100m_ft_in1k/tree/2bfbb0e194aa59bf9f8c88d3fd3719ed3b7420a5",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "2bfbb0e194aa59bf9f8c88d3fd3719ed3b7420a5",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/timm/resnet50.fb_ssl_yfcc100m_ft_in1k",
      "parameterCount": 25610152,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 102469840
        },
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 102545229
        }
      ],
      "totalBytes": 205015069,
      "gated": false
    }
  },
  {
    "id": "ow-resnet50-ssl-license",
    "title": "ResNet-50 SSL · YFCC100M → ImageNet — license declaration",
    "publisher": "Meta / timm",
    "url": "https://huggingface.co/timm/resnet50.fb_ssl_yfcc100m_ft_in1k",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "2bfbb0e194aa59bf9f8c88d3fd3719ed3b7420a5"
  },
  {
    "id": "ow-ssl-method",
    "title": "ResNet SSL — teacher, unlabeled data and model license",
    "publisher": "Meta",
    "url": "https://github.com/facebookresearch/semi-supervised-ImageNet1K-models/blob/a189fd0ab046bc0eb13c7a24098be8367d3da2f1/README.md",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "a189fd0ab046bc0eb13c7a24098be8367d3da2f1"
  },
  {
    "id": "ow-chgnet",
    "title": "CHGNet 0.3.0 · MPtrj — release documentation",
    "publisher": "Ceder Group / Berkeley Lab",
    "url": "https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/chgnet/pretrained/0.3.0/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "b9a6c15860237297a5a5169660e83b2e61a78e76"
  },
  {
    "id": "ow-chgnet-weights",
    "title": "CHGNet 0.3.0 · MPtrj — published parameters",
    "publisher": "Ceder Group / Berkeley Lab",
    "url": "https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/chgnet/pretrained/0.3.0/chgnet_0.3.0_e29f68s314m37.pth.tar",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "b9a6c15860237297a5a5169660e83b2e61a78e76",
    "artifact": {
      "type": "git",
      "repositoryUrl": "https://github.com/CederGroupHub/chgnet",
      "path": "chgnet/pretrained/0.3.0/chgnet_0.3.0_e29f68s314m37.pth.tar",
      "entry": "blob"
    }
  },
  {
    "id": "ow-chgnet-license",
    "title": "CHGNet 0.3.0 · MPtrj — license terms",
    "publisher": "Ceder Group / Berkeley Lab",
    "url": "https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "b9a6c15860237297a5a5169660e83b2e61a78e76"
  },
  {
    "id": "ow-chgnet-usage",
    "title": "CHGNet — crystal graphs and structure prediction",
    "publisher": "Ceder Group / Berkeley Lab",
    "url": "https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/README.md",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "b9a6c15860237297a5a5169660e83b2e61a78e76"
  },
  {
    "id": "ow-pocketsphinx",
    "title": "PocketSphinx · US English HMM-GMM — release documentation",
    "publisher": "CMUSphinx / Alpha Cephei",
    "url": "https://github.com/cmusphinx/pocketsphinx/blob/f20ff1b7a5db64c5e892a798479e20df86e79a35/model/en-us/en-us/README",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "f20ff1b7a5db64c5e892a798479e20df86e79a35"
  },
  {
    "id": "ow-pocketsphinx-weights",
    "title": "PocketSphinx · US English HMM-GMM — published parameters",
    "publisher": "CMUSphinx / Alpha Cephei",
    "url": "https://github.com/cmusphinx/pocketsphinx/tree/f20ff1b7a5db64c5e892a798479e20df86e79a35/model/en-us",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "f20ff1b7a5db64c5e892a798479e20df86e79a35",
    "artifact": {
      "type": "git",
      "repositoryUrl": "https://github.com/cmusphinx/pocketsphinx",
      "path": "model/en-us",
      "entry": "tree"
    }
  },
  {
    "id": "ow-pocketsphinx-license",
    "title": "PocketSphinx · US English HMM-GMM — license terms",
    "publisher": "CMUSphinx / Alpha Cephei",
    "url": "https://github.com/cmusphinx/pocketsphinx/blob/f20ff1b7a5db64c5e892a798479e20df86e79a35/model/en-us/en-us/README",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "f20ff1b7a5db64c5e892a798479e20df86e79a35"
  },
  {
    "id": "ow-pocketsphinx-usage",
    "title": "PocketSphinx — default models and speech recognition",
    "publisher": "CMUSphinx",
    "url": "https://github.com/cmusphinx/pocketsphinx/blob/f20ff1b7a5db64c5e892a798479e20df86e79a35/README.md",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "f20ff1b7a5db64c5e892a798479e20df86e79a35"
  },
  {
    "id": "ow-sphinx-hmm-gmm",
    "title": "CMUSphinx — HMM states and Gaussian acoustic models",
    "publisher": "CMUSphinx",
    "url": "https://cmusphinx.github.io/wiki/tutorialconcepts/",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-dlib-five",
    "title": "dlib · 5-point face landmarks — release documentation",
    "publisher": "Davis King",
    "url": "https://github.com/davisking/dlib-models/blob/fd81b6308a6a73d4ce08859eb2f4b628a21e27a2/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "fd81b6308a6a73d4ce08859eb2f4b628a21e27a2"
  },
  {
    "id": "ow-dlib-five-weights",
    "title": "dlib · 5-point face landmarks — published parameters",
    "publisher": "Davis King",
    "url": "https://github.com/davisking/dlib-models/blob/fd81b6308a6a73d4ce08859eb2f4b628a21e27a2/shape_predictor_5_face_landmarks.dat.bz2",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "fd81b6308a6a73d4ce08859eb2f4b628a21e27a2",
    "artifact": {
      "type": "git",
      "repositoryUrl": "https://github.com/davisking/dlib-models",
      "path": "shape_predictor_5_face_landmarks.dat.bz2",
      "entry": "blob"
    }
  },
  {
    "id": "ow-dlib-five-license",
    "title": "dlib · 5-point face landmarks — license terms",
    "publisher": "Davis King",
    "url": "https://github.com/davisking/dlib-models/blob/fd81b6308a6a73d4ce08859eb2f4b628a21e27a2/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "fd81b6308a6a73d4ce08859eb2f4b628a21e27a2"
  },
  {
    "id": "ow-dlib-five-training",
    "title": "dlib — exact five-point training program",
    "publisher": "Davis King",
    "url": "https://github.com/davisking/dlib/blob/9dfc591c950a45f7cdc399b961473927da4e892f/tools/archive/train_face_5point_model.cpp",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "9dfc591c950a45f7cdc399b961473927da4e892f"
  },
  {
    "id": "ow-dlib-tree-method",
    "title": "dlib shape predictor — ensemble of regression trees",
    "publisher": "Davis King",
    "url": "https://github.com/davisking/dlib/blob/9dfc591c950a45f7cdc399b961473927da4e892f/dlib/image_processing/shape_predictor_trainer_abstract.h",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "9dfc591c950a45f7cdc399b961473927da4e892f"
  },
  {
    "id": "ow-brisque",
    "title": "BRISQUE · LIVE-R2 RBF-SVR — release documentation",
    "publisher": "OpenCV",
    "url": "https://github.com/opencv/opencv_contrib/blob/eca97a4adb2fa32afc82478947d7f049fce57ee1/modules/quality/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "eca97a4adb2fa32afc82478947d7f049fce57ee1"
  },
  {
    "id": "ow-brisque-weights",
    "title": "BRISQUE · LIVE-R2 RBF-SVR — published parameters",
    "publisher": "OpenCV",
    "url": "https://github.com/opencv/opencv_contrib/tree/eca97a4adb2fa32afc82478947d7f049fce57ee1/modules/quality/samples",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "eca97a4adb2fa32afc82478947d7f049fce57ee1",
    "artifact": {
      "type": "git",
      "repositoryUrl": "https://github.com/opencv/opencv_contrib",
      "path": "modules/quality/samples",
      "entry": "tree"
    }
  },
  {
    "id": "ow-brisque-license",
    "title": "BRISQUE · LIVE-R2 RBF-SVR — license terms",
    "publisher": "OpenCV",
    "url": "https://github.com/opencv/opencv_contrib/blob/eca97a4adb2fa32afc82478947d7f049fce57ee1/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "eca97a4adb2fa32afc82478947d7f049fce57ee1"
  },
  {
    "id": "ow-brisque-parameters",
    "title": "BRISQUE — serialized RBF kernel, support vectors and coefficients",
    "publisher": "OpenCV",
    "url": "https://github.com/opencv/opencv_contrib/blob/eca97a4adb2fa32afc82478947d7f049fce57ee1/modules/quality/samples/brisque_model_live.yml",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "eca97a4adb2fa32afc82478947d7f049fce57ee1"
  },
  {
    "id": "ow-brisque-docs",
    "title": "BRISQUE — released LIVE-R2 model and evaluation",
    "publisher": "OpenCV",
    "url": "https://docs.opencv.org/4.10.0/d8/d99/classcv_1_1quality_1_1QualityBRISQUE.html",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-glove-factors",
    "title": "GloVe 6B · 300-dimensional word factors — model card",
    "publisher": "Stanford NLP",
    "url": "https://huggingface.co/stanfordnlp/glove",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "1db2080b2d94def6e5b0386a523102f9d8849e9d"
  },
  {
    "id": "ow-glove-factors-weights",
    "title": "GloVe 6B · 300-dimensional word factors — checkpoint files",
    "publisher": "Stanford NLP",
    "url": "https://huggingface.co/stanfordnlp/glove/tree/1db2080b2d94def6e5b0386a523102f9d8849e9d",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "1db2080b2d94def6e5b0386a523102f9d8849e9d"
  },
  {
    "id": "ow-glove-factors-license",
    "title": "GloVe 6B · 300-dimensional word factors — license declaration",
    "publisher": "Stanford NLP",
    "url": "https://nlp.stanford.edu/projects/glove/",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "1db2080b2d94def6e5b0386a523102f9d8849e9d"
  },
  {
    "id": "ow-glove-method",
    "title": "GloVe — log-bilinear factors, pretrained vectors and PDDL license",
    "publisher": "Stanford NLP",
    "url": "https://nlp.stanford.edu/projects/glove/",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-glove-paper",
    "title": "GloVe — global matrix-factorization objective",
    "publisher": "Pennington, Socher & Manning",
    "url": "https://nlp.stanford.edu/pubs/glove.pdf",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-asia-bn",
    "title": "ASIA · parameterized Bayesian network — release documentation",
    "publisher": "bnlearn / pgmpy",
    "url": "https://github.com/pgmpy/example_models/blob/920f4e03fce2a319af0fbc8dc6fad1ac99ff4318/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "920f4e03fce2a319af0fbc8dc6fad1ac99ff4318"
  },
  {
    "id": "ow-asia-bn-weights",
    "title": "ASIA · parameterized Bayesian network — published parameters",
    "publisher": "bnlearn / pgmpy",
    "url": "https://github.com/pgmpy/example_models/blob/920f4e03fce2a319af0fbc8dc6fad1ac99ff4318/discrete/asia.bif.gz",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "920f4e03fce2a319af0fbc8dc6fad1ac99ff4318",
    "artifact": {
      "type": "git",
      "repositoryUrl": "https://github.com/pgmpy/example_models",
      "path": "discrete/asia.bif.gz",
      "entry": "blob"
    }
  },
  {
    "id": "ow-asia-bn-license",
    "title": "ASIA · parameterized Bayesian network — license terms",
    "publisher": "bnlearn / pgmpy",
    "url": "https://github.com/pgmpy/example_models/blob/920f4e03fce2a319af0fbc8dc6fad1ac99ff4318/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "920f4e03fce2a319af0fbc8dc6fad1ac99ff4318"
  },
  {
    "id": "ow-asia-description",
    "title": "ASIA — benchmark structure and parameters",
    "publisher": "bnlearn / Marco Scutari",
    "url": "https://www.bnlearn.com/bnrepository/discrete-small.html#asia",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-bn-prediction",
    "title": "Discrete Bayesian networks — predicting missing states",
    "publisher": "pgmpy",
    "url": "https://pgmpy.org/api/generated/models/pgmpy.models.DiscreteBayesianNetwork.html",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-anyburl-rules",
    "title": "AnyBURL · WN18RR learned rules — release documentation",
    "publisher": "University of Mannheim / PyClause",
    "url": "https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "87c82ec3dd904767741a493dcbdf7605377d4535"
  },
  {
    "id": "ow-anyburl-rules-weights",
    "title": "AnyBURL · WN18RR learned rules — published parameters",
    "publisher": "University of Mannheim / PyClause",
    "url": "https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/data/wnrr/anyburl-rules-c5-3600",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "87c82ec3dd904767741a493dcbdf7605377d4535",
    "artifact": {
      "type": "git",
      "repositoryUrl": "https://github.com/symbolic-kg/PyClause",
      "path": "data/wnrr/anyburl-rules-c5-3600",
      "entry": "blob"
    }
  },
  {
    "id": "ow-anyburl-rules-license",
    "title": "AnyBURL · WN18RR learned rules — license terms",
    "publisher": "University of Mannheim / PyClause",
    "url": "https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "87c82ec3dd904767741a493dcbdf7605377d4535"
  },
  {
    "id": "ow-anyburl-loader",
    "title": "PyClause — learned rule file format and confidence",
    "publisher": "University of Mannheim",
    "url": "https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/docs/data/loading_rules.rst",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "87c82ec3dd904767741a493dcbdf7605377d4535"
  },
  {
    "id": "ow-anyburl-syntax",
    "title": "PyClause — first-order atoms, variables and rule bodies",
    "publisher": "University of Mannheim",
    "url": "https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/docs/data/rule_types.rst",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "87c82ec3dd904767741a493dcbdf7605377d4535"
  },
  {
    "id": "ow-anyburl-ranking",
    "title": "PyClause — ranking example using the exact WN18RR rule artifact",
    "publisher": "University of Mannheim",
    "url": "https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/examples/demo-ranking.py",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "87c82ec3dd904767741a493dcbdf7605377d4535"
  },
  {
    "id": "ow-glow",
    "title": "Glow · CelebA-HQ 256 — release documentation",
    "publisher": "OpenAI",
    "url": "https://github.com/openai/glow/blob/91b2c577a5c110b2b38761fc56d81f7d87f077c1/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "91b2c577a5c110b2b38761fc56d81f7d87f077c1"
  },
  {
    "id": "ow-glow-weights",
    "title": "Glow · CelebA-HQ 256 — publisher checkpoint",
    "publisher": "OpenAI",
    "url": "https://openaipublic.azureedge.net/glow-demo/large3/graph_optimized.pb",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "artifact": {
      "type": "publisher-file",
      "evidenceSourceId": "ow-glow-download",
      "fileName": "graph_optimized.pb",
      "sizeBytes": 762496735,
      "etag": "0x8D88C21B9ABD2E7"
    }
  },
  {
    "id": "ow-glow-license",
    "title": "Glow · CelebA-HQ 256 — repository license",
    "publisher": "OpenAI",
    "url": "https://github.com/openai/glow/blob/91b2c577a5c110b2b38761fc56d81f7d87f077c1/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "91b2c577a5c110b2b38761fc56d81f7d87f077c1"
  },
  {
    "id": "ow-jem",
    "title": "JEM · CIFAR-10 — release documentation",
    "publisher": "Grathwohl et al.",
    "url": "https://github.com/wgrathwohl/JEM/blob/3d01161547109b464eee87304f07b2dac8519d03/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "3d01161547109b464eee87304f07b2dac8519d03"
  },
  {
    "id": "ow-jem-weights",
    "title": "JEM · CIFAR-10 — publisher checkpoint",
    "publisher": "Grathwohl et al.",
    "url": "https://www.cs.toronto.edu/~wgrathwohl/CIFAR10_MODEL.pt",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "artifact": {
      "type": "publisher-file",
      "evidenceSourceId": "ow-jem",
      "fileName": "CIFAR10_MODEL.pt",
      "sizeBytes": 268807111,
      "etag": "\"1005abc7-597a61a47a635\""
    }
  },
  {
    "id": "ow-jem-license",
    "title": "JEM · CIFAR-10 — repository license",
    "publisher": "Grathwohl et al.",
    "url": "https://github.com/wgrathwohl/JEM/blob/3d01161547109b464eee87304f07b2dac8519d03/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "3d01161547109b464eee87304f07b2dac8519d03"
  },
  {
    "id": "ow-glow-download",
    "title": "Glow — official demo weight and manipulation-vector URLs",
    "publisher": "OpenAI",
    "url": "https://github.com/openai/glow/blob/91b2c577a5c110b2b38761fc56d81f7d87f077c1/demo/script.sh",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "91b2c577a5c110b2b38761fc56d81f7d87f077c1"
  },
  {
    "id": "ow-glow-inference",
    "title": "Glow — published image manipulation interface",
    "publisher": "OpenAI",
    "url": "https://github.com/openai/glow/blob/91b2c577a5c110b2b38761fc56d81f7d87f077c1/demo/model.py",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "91b2c577a5c110b2b38761fc56d81f7d87f077c1"
  },
  {
    "id": "ow-glow-paper",
    "title": "Glow — invertible flow and likelihood training",
    "publisher": "Kingma & Dhariwal",
    "url": "https://arxiv.org/abs/1807.03039",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-jem-paper",
    "title": "JEM — joint classifier and energy objective",
    "publisher": "Grathwohl et al.",
    "url": "https://arxiv.org/abs/1912.03263",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-knnvc",
    "title": "kNN-VC · prematched HiFi-GAN — model and inference documentation",
    "publisher": "Baas, van Niekerk & Kamper",
    "url": "https://github.com/bshall/knn-vc/blob/c616845c4e309e24d5927f15adbdf277a3d65358/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "c616845c4e309e24d5927f15adbdf277a3d65358"
  },
  {
    "id": "ow-knnvc-weights",
    "title": "kNN-VC · prematched HiFi-GAN — v0.1 checkpoint release",
    "publisher": "Baas, van Niekerk & Kamper",
    "url": "https://github.com/bshall/knn-vc/releases/tag/v0.1",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "artifact": {
      "type": "release",
      "evidenceSourceId": "ow-knnvc-loader",
      "repositoryUrl": "https://github.com/bshall/knn-vc",
      "tag": "v0.1",
      "files": [
        {
          "name": "prematch_g_02500000.pt",
          "sizeBytes": 66214643
        },
        {
          "name": "WavLM-Large.pt",
          "sizeBytes": 1261965425
        }
      ]
    }
  },
  {
    "id": "ow-knnvc-license",
    "title": "kNN-VC · prematched HiFi-GAN — repository terms",
    "publisher": "Baas, van Niekerk & Kamper",
    "url": "https://github.com/bshall/knn-vc/blob/c616845c4e309e24d5927f15adbdf277a3d65358/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "c616845c4e309e24d5927f15adbdf277a3d65358"
  },
  {
    "id": "ow-knnvc-loader",
    "title": "kNN-VC — exact encoder and vocoder release assets",
    "publisher": "Baas, van Niekerk & Kamper",
    "url": "https://github.com/bshall/knn-vc/blob/c616845c4e309e24d5927f15adbdf277a3d65358/hubconf.py",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "c616845c4e309e24d5927f15adbdf277a3d65358"
  },
  {
    "id": "ow-knnvc-paper",
    "title": "kNN-VC — nearest-neighbor conversion and evaluation",
    "publisher": "Baas, van Niekerk & Kamper",
    "url": "https://arxiv.org/abs/2305.18975",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-p5-beauty-small",
    "title": "P5 Beauty Small — author-linked model distribution",
    "publisher": "makitanikaze / linked by P5 authors",
    "url": "https://huggingface.co/makitanikaze/P5_beauty_small",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "8d67aef9aea18955cfb038bbbf48f764104ca09a"
  },
  {
    "id": "ow-p5-beauty-small-weights",
    "title": "P5 Beauty Small — pinned weight files",
    "publisher": "makitanikaze",
    "url": "https://huggingface.co/makitanikaze/P5_beauty_small/tree/8d67aef9aea18955cfb038bbbf48f764104ca09a",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "8d67aef9aea18955cfb038bbbf48f764104ca09a",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/makitanikaze/P5_beauty_small",
      "files": [
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 243063197
        }
      ],
      "totalBytes": 243063197,
      "gated": false
    }
  },
  {
    "id": "ow-p5-author-release",
    "title": "P5 — author release and Hugging Face distribution link",
    "publisher": "P5 authors",
    "url": "https://github.com/jeykigung/P5/blob/1fa28ba7bb3946da94677013cc88e392cfc760ca/README.md",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "1fa28ba7bb3946da94677013cc88e392cfc760ca"
  },
  {
    "id": "ow-p5-beauty-evaluation",
    "title": "P5 Beauty Small — rating and top-k evaluation notebook",
    "publisher": "P5 authors",
    "url": "https://github.com/jeykigung/P5/blob/1fa28ba7bb3946da94677013cc88e392cfc760ca/notebooks/test_beauty_small.ipynb",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "1fa28ba7bb3946da94677013cc88e392cfc760ca"
  },
  {
    "id": "ow-p5-beauty-config",
    "title": "P5 Beauty Small — T5 architecture and training tasks",
    "publisher": "makitanikaze",
    "url": "https://huggingface.co/makitanikaze/P5_beauty_small/blob/8d67aef9aea18955cfb038bbbf48f764104ca09a/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-scan-cifar10",
    "title": "SCAN CIFAR-10 — clustering model zoo and inference",
    "publisher": "SCAN authors",
    "url": "https://github.com/wvangansbeke/Unsupervised-Classification/blob/952ec31eee2c38e7233d8ad3ac0de39bb031877a/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "952ec31eee2c38e7233d8ad3ac0de39bb031877a"
  },
  {
    "id": "ow-scan-license",
    "title": "SCAN — noncommercial license",
    "publisher": "SCAN authors",
    "url": "https://github.com/wvangansbeke/Unsupervised-Classification/blob/952ec31eee2c38e7233d8ad3ac0de39bb031877a/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "952ec31eee2c38e7233d8ad3ac0de39bb031877a"
  },
  {
    "id": "ow-scan-cifar10-weights",
    "title": "SCAN-loss CIFAR-10 — scan_cifar-10.pth.tar",
    "publisher": "SCAN authors",
    "url": "https://drive.google.com/file/d/1v6b6jJY5M4-duSqWpGFmdf9e9T3dPrx0/view",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "artifact": {
      "type": "google-drive",
      "evidenceSourceId": "ow-scan-cifar10",
      "fileId": "1v6b6jJY5M4-duSqWpGFmdf9e9T3dPrx0",
      "fileName": "scan_cifar-10.pth.tar",
      "sizeBytes": 44757714
    }
  },
  {
    "id": "ow-uva-saved-models",
    "title": "UvA deep-learning tutorials — released PyTorch models",
    "publisher": "Phillip Lippe / UvA",
    "url": "https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "e38faed1ab83a593d2c90098ea563d32287fc80f"
  },
  {
    "id": "ow-uva-model-license",
    "title": "UvA saved models — MIT license",
    "publisher": "Phillip Lippe",
    "url": "https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "e38faed1ab83a593d2c90098ea563d32287fc80f"
  },
  {
    "id": "ow-uva-autoencoder-method",
    "title": "UvA Tutorial 9 — CIFAR-10 encoder and pretrained checkpoints",
    "publisher": "Phillip Lippe / UvA",
    "url": "https://github.com/phlippe/uvadlc_notebooks/blob/c7d9e18f42fee53bc8925f08ec2358371b1e9200/docs/tutorial_notebooks/tutorial9/AE_CIFAR10.ipynb",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "c7d9e18f42fee53bc8925f08ec2358371b1e9200"
  },
  {
    "id": "ow-uva-autoencoder128-weights",
    "title": "tutorial9/cifar10_128.ckpt — released artifact",
    "publisher": "phlippe/saved_models",
    "url": "https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/tutorial9/cifar10_128.ckpt",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "e38faed1ab83a593d2c90098ea563d32287fc80f",
    "artifact": {
      "type": "git",
      "repositoryUrl": "https://github.com/phlippe/saved_models",
      "path": "tutorial9/cifar10_128.ckpt",
      "entry": "blob"
    }
  },
  {
    "id": "ow-uva-flow-method",
    "title": "UvA Tutorial 11 — MNIST normalizing-flow likelihood",
    "publisher": "Phillip Lippe / UvA",
    "url": "https://github.com/phlippe/uvadlc_notebooks/blob/c7d9e18f42fee53bc8925f08ec2358371b1e9200/docs/tutorial_notebooks/tutorial11/NF_image_modeling.ipynb",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "c7d9e18f42fee53bc8925f08ec2358371b1e9200"
  },
  {
    "id": "ow-uva-mnist-flow-weights",
    "title": "tutorial11/MNISTFlow_multiscale.ckpt — released artifact",
    "publisher": "phlippe/saved_models",
    "url": "https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/tutorial11/MNISTFlow_multiscale.ckpt",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "e38faed1ab83a593d2c90098ea563d32287fc80f",
    "artifact": {
      "type": "git",
      "repositoryUrl": "https://github.com/phlippe/saved_models",
      "path": "tutorial11/MNISTFlow_multiscale.ckpt",
      "entry": "blob"
    }
  },
  {
    "id": "ow-autocpd-hasc",
    "title": "AutoCPD — pretrained HASC demonstration",
    "publisher": "AutoCPD authors",
    "url": "https://github.com/Jieli12/AutoCPD/blob/a4c244776775e4295ddee241410a85708f6d9a64/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "a4c244776775e4295ddee241410a85708f6d9a64"
  },
  {
    "id": "ow-autocpd-inference",
    "title": "AutoCPD — HASC preprocessing and change-point extraction",
    "publisher": "AutoCPD authors",
    "url": "https://github.com/Jieli12/AutoCPD/blob/a4c244776775e4295ddee241410a85708f6d9a64/test/test_load_pretrained_model.py",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "a4c244776775e4295ddee241410a85708f6d9a64"
  },
  {
    "id": "ow-autocpd-license",
    "title": "AutoCPD — MIT repository license",
    "publisher": "AutoCPD authors",
    "url": "https://github.com/Jieli12/AutoCPD/blob/a4c244776775e4295ddee241410a85708f6d9a64/LICENSE.txt",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "a4c244776775e4295ddee241410a85708f6d9a64"
  },
  {
    "id": "ow-autocpd-package",
    "title": "AutoCPD 0.1.5 — distribution metadata and published digests",
    "publisher": "AutoCPD authors / PyPI",
    "url": "https://pypi.org/pypi/autocpd/0.1.5/json",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-autocpd-hasc-weights",
    "title": "AutoCPD 0.1.5 — wheel containing HASC model and label dictionary",
    "publisher": "AutoCPD authors / PyPI",
    "url": "https://files.pythonhosted.org/packages/1a/85/c3c2af34062ede635d9dd8cc2d45fb6b0835a763ea3a029d77cac27c42ac/autocpd-0.1.5-py3-none-any.whl",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "artifact": {
      "type": "publisher-file",
      "evidenceSourceId": "ow-autocpd-package",
      "fileName": "autocpd-0.1.5-py3-none-any.whl",
      "sizeBytes": 11651829,
      "etag": "\"d77883506012b86f5e572ca51baf9ea6\"",
      "publisherChecksum": {
        "algorithm": "sha256",
        "value": "c27c2c7ba35cc260dbd836da6b20e47a50bbe392e5515c572a7568945255542f"
      }
    }
  },
  {
    "id": "ow-graphany-arxiv",
    "title": "GraphAny Arxiv — released inductive node-classification model",
    "publisher": "GraphAny authors",
    "url": "https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "02c810e9977e89bda66f43ad4e206937af37cf26"
  },
  {
    "id": "ow-graphany-arxiv-weights",
    "title": "checkpoints/graph_any_arxiv.pt — released artifact",
    "publisher": "DeepGraphLearning/GraphAny",
    "url": "https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/checkpoints/graph_any_arxiv.pt",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "02c810e9977e89bda66f43ad4e206937af37cf26",
    "artifact": {
      "type": "git",
      "repositoryUrl": "https://github.com/DeepGraphLearning/GraphAny",
      "path": "checkpoints/graph_any_arxiv.pt",
      "entry": "blob"
    }
  },
  {
    "id": "ow-graphany-license",
    "title": "GraphAny — MIT license",
    "publisher": "GraphAny authors",
    "url": "https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "02c810e9977e89bda66f43ad4e206937af37cf26"
  },
  {
    "id": "ow-graphany-inputs",
    "title": "GraphAny — graph features and labeled support-node inputs",
    "publisher": "GraphAny authors",
    "url": "https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/graphany/data.py",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "02c810e9977e89bda66f43ad4e206937af37cf26"
  },
  {
    "id": "ow-dgl-gcn-tox21",
    "title": "DGL-LifeSci GCN canonical Tox21 — pretrained model registry",
    "publisher": "DGL-LifeSci / AWS",
    "url": "https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/python/dgllife/model/pretrain/moleculenet/tox21.py",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0"
  },
  {
    "id": "ow-dgl-gcn-readout",
    "title": "DGL-LifeSci — graph pooling and classification logits",
    "publisher": "DGL-LifeSci / AWS",
    "url": "https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/python/dgllife/model/model_zoo/gcn_predictor.py",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0"
  },
  {
    "id": "ow-dgl-lifesci-license",
    "title": "DGL-LifeSci — Apache-2.0 repository license",
    "publisher": "DGL-LifeSci / AWS",
    "url": "https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0"
  },
  {
    "id": "ow-dgl-gcn-tox21-weights",
    "title": "GCN canonical Tox21 — published checkpoint",
    "publisher": "DGL-LifeSci / AWS",
    "url": "https://data.dgl.ai/dgllife/pre_trained/gcn_canonical_tox21.pth",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "artifact": {
      "type": "publisher-file",
      "evidenceSourceId": "ow-dgl-gcn-tox21",
      "fileName": "gcn_canonical_tox21.pth",
      "sizeBytes": 68744,
      "etag": "\"b71a98b00ace63e4b22f92dac7e77ad1\""
    }
  },
  {
    "id": "ow-hrm-sudoku",
    "title": "HRM Sudoku Extreme — author checkpoint",
    "publisher": "Sapient Intelligence",
    "url": "https://huggingface.co/sapientinc/HRM-checkpoint-sudoku-extreme",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "fbb4eb883766c31c8e863426460ebaa0ceb1a5f2"
  },
  {
    "id": "ow-hrm-sudoku-weights",
    "title": "HRM Sudoku Extreme — pinned checkpoint and configuration",
    "publisher": "Sapient Intelligence",
    "url": "https://huggingface.co/sapientinc/HRM-checkpoint-sudoku-extreme/tree/fbb4eb883766c31c8e863426460ebaa0ceb1a5f2",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "fbb4eb883766c31c8e863426460ebaa0ceb1a5f2"
  },
  {
    "id": "ow-hrm-author-release",
    "title": "HRM — architecture, Sudoku checkpoint and evaluation",
    "publisher": "Sapient Intelligence",
    "url": "https://github.com/sapientinc/HRM/blob/ac15626f8db096a63c775b84c9dc868776a6feda/README.md",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "ac15626f8db096a63c775b84c9dc868776a6feda"
  },
  {
    "id": "ow-hrm-repository-license",
    "title": "HRM — Apache-2.0 repository license",
    "publisher": "Sapient Intelligence",
    "url": "https://github.com/sapientinc/HRM/blob/ac15626f8db096a63c775b84c9dc868776a6feda/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "ac15626f8db096a63c775b84c9dc868776a6feda"
  },
  {
    "id": "ow-goose-blocksworld",
    "title": "GOOSE — PDDL planning with released learned heuristics",
    "publisher": "Dillon Z. Chen and collaborators",
    "url": "https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57"
  },
  {
    "id": "ow-goose-pretrained",
    "title": "GOOSE — pretrained model versions and benchmark scope",
    "publisher": "GOOSE authors",
    "url": "https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/pretrained_models/README.md",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57"
  },
  {
    "id": "ow-goose-training-config",
    "title": "GOOSE — Weisfeiler–Leman features and rank-SVM training",
    "publisher": "GOOSE authors",
    "url": "https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/configurations/classic.toml",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57"
  },
  {
    "id": "ow-goose-blocksworld-weights",
    "title": "pretrained_models/ipc23lt-blocksworld.model — released artifact",
    "publisher": "DillonZChen/goose",
    "url": "https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/pretrained_models/ipc23lt-blocksworld.model",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57",
    "artifact": {
      "type": "git",
      "repositoryUrl": "https://github.com/DillonZChen/goose",
      "path": "pretrained_models/ipc23lt-blocksworld.model",
      "entry": "blob"
    }
  },
  {
    "id": "ow-goose-license",
    "title": "GOOSE — MIT repository license",
    "publisher": "Dillon Z. Chen",
    "url": "https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57"
  },
  {
    "id": "ow-hloc-superglue",
    "title": "SuperPoint + SuperGlue outdoor — released visual matching models",
    "publisher": "Magic Leap / SuperGlue authors",
    "url": "https://github.com/magicleap/SuperGluePretrainedNetwork/blob/ddcf11f42e7e0732a0c4607648f9448ea8d73590/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "ddcf11f42e7e0732a0c4607648f9448ea8d73590"
  },
  {
    "id": "ow-hloc-superglue-weights",
    "title": "models/weights — released artifact",
    "publisher": "magicleap/SuperGluePretrainedNetwork",
    "url": "https://github.com/magicleap/SuperGluePretrainedNetwork/tree/ddcf11f42e7e0732a0c4607648f9448ea8d73590/models/weights",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "ddcf11f42e7e0732a0c4607648f9448ea8d73590",
    "artifact": {
      "type": "git",
      "repositoryUrl": "https://github.com/magicleap/SuperGluePretrainedNetwork",
      "path": "models/weights",
      "entry": "tree"
    }
  },
  {
    "id": "ow-superglue-license",
    "title": "SuperGlue — noncommercial academic/research license",
    "publisher": "Magic Leap",
    "url": "https://github.com/magicleap/SuperGluePretrainedNetwork/blob/ddcf11f42e7e0732a0c4607648f9448ea8d73590/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "ddcf11f42e7e0732a0c4607648f9448ea8d73590"
  },
  {
    "id": "ow-hloc-pipeline",
    "title": "hloc — image-to-map visual localization pipeline",
    "publisher": "hloc authors",
    "url": "https://github.com/cvg/Hierarchical-Localization/blob/c13273bd0ecc2917a35910fd843712a1c6243193/README.md",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "c13273bd0ecc2917a35910fd843712a1c6243193"
  },
  {
    "id": "ow-hloc-pose",
    "title": "hloc — calibrated 2D–3D absolute pose estimation",
    "publisher": "hloc authors",
    "url": "https://github.com/cvg/Hierarchical-Localization/blob/c13273bd0ecc2917a35910fd843712a1c6243193/hloc/localize_sfm.py",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "c13273bd0ecc2917a35910fd843712a1c6243193"
  },
  {
    "id": "ow-hloc-matcher",
    "title": "hloc — SuperGlue outdoor matcher configuration",
    "publisher": "hloc authors",
    "url": "https://github.com/cvg/Hierarchical-Localization/blob/c13273bd0ecc2917a35910fd843712a1c6243193/hloc/match_features.py",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "c13273bd0ecc2917a35910fd843712a1c6243193"
  },
  {
    "id": "ow-hloc-license",
    "title": "hloc — Apache-2.0 code license",
    "publisher": "hloc authors",
    "url": "https://github.com/cvg/Hierarchical-Localization/blob/c13273bd0ecc2917a35910fd843712a1c6243193/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "c13273bd0ecc2917a35910fd843712a1c6243193"
  },
  {
    "id": "ow-mpinets-hybrid",
    "title": "Motion Policy Networks — released checkpoint and inference",
    "publisher": "MPiNets authors / NVIDIA",
    "url": "https://github.com/NVlabs/motion-policy-networks/blob/42ff07bb95bd75f7c7752bf4300eb53698ae099d/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "42ff07bb95bd75f7c7752bf4300eb53698ae099d"
  },
  {
    "id": "ow-mpinets-rollout",
    "title": "MPiNets — Franka rollout, goals and point-cloud inputs",
    "publisher": "MPiNets authors / NVIDIA",
    "url": "https://github.com/NVlabs/motion-policy-networks/blob/42ff07bb95bd75f7c7752bf4300eb53698ae099d/mpinets/run_inference.py",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "42ff07bb95bd75f7c7752bf4300eb53698ae099d"
  },
  {
    "id": "ow-mpinets-zenodo",
    "title": "MPiNets — publisher archive, file checksum and CC-BY-4.0 license",
    "publisher": "MPiNets authors / Zenodo",
    "url": "https://zenodo.org/records/8319949",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-mpinets-hybrid-weights",
    "title": "MPiNets hybrid expert — pretrained checkpoint",
    "publisher": "MPiNets authors / Zenodo",
    "url": "https://zenodo.org/records/8319949/files/mpinets_hybrid_expert.ckpt?download=1",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "artifact": {
      "type": "publisher-file",
      "evidenceSourceId": "ow-mpinets-zenodo",
      "fileName": "mpinets_hybrid_expert.ckpt",
      "sizeBytes": 228862379,
      "publisherChecksum": {
        "algorithm": "md5",
        "value": "d2eb2da582f1934dea75ce9f4e5efbc9"
      }
    }
  },
  {
    "id": "ow-acestep-v15-turbo-continuous",
    "title": "acestep-v15-turbo-continuous — model card",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-v15-turbo-continuous",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "f8e893768347fd42f5988e07d1d80675fc3e5718"
  },
  {
    "id": "ow-acestep-v15-turbo-continuous-weights",
    "title": "acestep-v15-turbo-continuous — checkpoint files",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-v15-turbo-continuous/tree/f8e893768347fd42f5988e07d1d80675fc3e5718",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "f8e893768347fd42f5988e07d1d80675fc3e5718",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/ACE-Step/acestep-v15-turbo-continuous",
      "parameterCount": 2393872518,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 4787825604
        },
        {
          "name": "silence_latent.pt",
          "sizeBytes": 3841215
        }
      ],
      "totalBytes": 4791666819,
      "gated": false
    }
  },
  {
    "id": "ow-acestep-v15-turbo-continuous-license",
    "title": "acestep-v15-turbo-continuous — license",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-v15-turbo-continuous",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "f8e893768347fd42f5988e07d1d80675fc3e5718"
  },
  {
    "id": "ow-acestep-v15-turbo-shift1",
    "title": "acestep-v15-turbo-shift1 — model card",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-v15-turbo-shift1",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "5b86586cc1faecd5214281b05440c8903b6da20f"
  },
  {
    "id": "ow-acestep-v15-turbo-shift1-weights",
    "title": "acestep-v15-turbo-shift1 — checkpoint files",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-v15-turbo-shift1/tree/5b86586cc1faecd5214281b05440c8903b6da20f",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "5b86586cc1faecd5214281b05440c8903b6da20f",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/ACE-Step/acestep-v15-turbo-shift1",
      "parameterCount": 2393872518,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 4787825604
        },
        {
          "name": "silence_latent.pt",
          "sizeBytes": 3841215
        }
      ],
      "totalBytes": 4791666819,
      "gated": false
    }
  },
  {
    "id": "ow-acestep-v15-turbo-shift1-license",
    "title": "acestep-v15-turbo-shift1 — license",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-v15-turbo-shift1",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "5b86586cc1faecd5214281b05440c8903b6da20f"
  },
  {
    "id": "ow-acestep-captioner",
    "title": "acestep-captioner — model card",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-captioner",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "7109e9af1c6cfe3371730310b3a5cb773145b11e"
  },
  {
    "id": "ow-acestep-captioner-weights",
    "title": "acestep-captioner — checkpoint files",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-captioner/tree/7109e9af1c6cfe3371730310b3a5cb773145b11e",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "7109e9af1c6cfe3371730310b3a5cb773145b11e",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/ACE-Step/acestep-captioner",
      "parameterCount": 10732225408,
      "files": [
        {
          "name": "model-00001-of-00005.safetensors",
          "sizeBytes": 4985055536
        },
        {
          "name": "model-00002-of-00005.safetensors",
          "sizeBytes": 4991496832
        },
        {
          "name": "model-00003-of-00005.safetensors",
          "sizeBytes": 4991496936
        },
        {
          "name": "model-00004-of-00005.safetensors",
          "sizeBytes": 4969489856
        },
        {
          "name": "model-00005-of-00005.safetensors",
          "sizeBytes": 2425322192
        },
        {
          "name": "spk_dict.pt",
          "sizeBytes": 259544
        }
      ],
      "totalBytes": 22363120896,
      "gated": false
    }
  },
  {
    "id": "ow-acestep-captioner-license",
    "title": "acestep-captioner — license",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-captioner",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "7109e9af1c6cfe3371730310b3a5cb773145b11e"
  },
  {
    "id": "ow-acestep-transcriber",
    "title": "acestep-transcriber — model card",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-transcriber",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "53062cf7d0e09d463d7fc4c218ce2ecb71400f29"
  },
  {
    "id": "ow-acestep-transcriber-weights",
    "title": "acestep-transcriber — checkpoint files",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-transcriber/tree/53062cf7d0e09d463d7fc4c218ce2ecb71400f29",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "53062cf7d0e09d463d7fc4c218ce2ecb71400f29",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/ACE-Step/acestep-transcriber",
      "parameterCount": 10732225408,
      "files": [
        {
          "name": "model-00001-of-00005.safetensors",
          "sizeBytes": 4985055536
        },
        {
          "name": "model-00002-of-00005.safetensors",
          "sizeBytes": 4991496832
        },
        {
          "name": "model-00003-of-00005.safetensors",
          "sizeBytes": 4991496936
        },
        {
          "name": "model-00004-of-00005.safetensors",
          "sizeBytes": 4969489856
        },
        {
          "name": "model-00005-of-00005.safetensors",
          "sizeBytes": 2425322192
        },
        {
          "name": "spk_dict.pt",
          "sizeBytes": 259544
        }
      ],
      "totalBytes": 22363120896,
      "gated": false
    }
  },
  {
    "id": "ow-acestep-transcriber-license",
    "title": "acestep-transcriber — license",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-transcriber",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "53062cf7d0e09d463d7fc4c218ce2ecb71400f29"
  },
  {
    "id": "ow-acestep-v15-turbo-shift3",
    "title": "acestep-v15-turbo-shift3 — model card",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-v15-turbo-shift3",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "625a282f7c8d882c930a5e500be4c82800f84fb4"
  },
  {
    "id": "ow-acestep-v15-turbo-shift3-weights",
    "title": "acestep-v15-turbo-shift3 — checkpoint files",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-v15-turbo-shift3/tree/625a282f7c8d882c930a5e500be4c82800f84fb4",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "625a282f7c8d882c930a5e500be4c82800f84fb4",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/ACE-Step/acestep-v15-turbo-shift3",
      "parameterCount": 2393872518,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 4787825604
        },
        {
          "name": "silence_latent.pt",
          "sizeBytes": 3841215
        }
      ],
      "totalBytes": 4791666819,
      "gated": false
    }
  },
  {
    "id": "ow-acestep-v15-turbo-shift3-license",
    "title": "acestep-v15-turbo-shift3 — license",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/acestep-v15-turbo-shift3",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "625a282f7c8d882c930a5e500be4c82800f84fb4"
  },
  {
    "id": "ow-facodec",
    "title": "FAcodec — model card",
    "publisher": "Plachta",
    "url": "https://huggingface.co/Plachta/FAcodec",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "a8e5a0a769c9f2da1d283e30ec3be9a21bad0b93"
  },
  {
    "id": "ow-facodec-weights",
    "title": "FAcodec — checkpoint files",
    "publisher": "Plachta",
    "url": "https://huggingface.co/Plachta/FAcodec/tree/a8e5a0a769c9f2da1d283e30ec3be9a21bad0b93",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "a8e5a0a769c9f2da1d283e30ec3be9a21bad0b93",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Plachta/FAcodec",
      "files": [
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 1498645002
        }
      ],
      "totalBytes": 1498645002,
      "gated": false
    }
  },
  {
    "id": "ow-facodec-license",
    "title": "FAcodec — license",
    "publisher": "Plachta",
    "url": "https://huggingface.co/Plachta/FAcodec",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "a8e5a0a769c9f2da1d283e30ec3be9a21bad0b93"
  },
  {
    "id": "ow-wan-dancer-14b",
    "title": "Wan-Dancer-14B — model card",
    "publisher": "Wan-AI",
    "url": "https://huggingface.co/Wan-AI/Wan-Dancer-14B",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "85ce88dd8d025459dcf0fe93982d6da8b9002957"
  },
  {
    "id": "ow-wan-dancer-14b-weights",
    "title": "Wan-Dancer-14B — checkpoint files",
    "publisher": "Wan-AI",
    "url": "https://huggingface.co/Wan-AI/Wan-Dancer-14B/tree/85ce88dd8d025459dcf0fe93982d6da8b9002957",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "85ce88dd8d025459dcf0fe93982d6da8b9002957",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/Wan-AI/Wan-Dancer-14B",
      "files": [
        {
          "name": "global_model.safetensors",
          "sizeBytes": 34490546744
        },
        {
          "name": "local_model.safetensors",
          "sizeBytes": 34490546744
        },
        {
          "name": "models_clip_open-clip-xlm-roberta-large-vit-huge-14.pth",
          "sizeBytes": 4772359047
        },
        {
          "name": "models_t5_umt5-xxl-enc-bf16.pth",
          "sizeBytes": 11361920418
        },
        {
          "name": "Wan2.1_VAE.pth",
          "sizeBytes": 507609880
        }
      ],
      "totalBytes": 85622982833,
      "gated": false
    }
  },
  {
    "id": "ow-wan-dancer-14b-license",
    "title": "Wan-Dancer-14B — license",
    "publisher": "Wan-AI",
    "url": "https://huggingface.co/Wan-AI/Wan-Dancer-14B",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "85ce88dd8d025459dcf0fe93982d6da8b9002957"
  },
  {
    "id": "ow-alodlm-8b",
    "title": "ALoDLM-8B — model card",
    "publisher": "amazon",
    "url": "https://huggingface.co/amazon/ALoDLM-8B",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "2c4623d93e285bea86a940c2801eac4509862edd"
  },
  {
    "id": "ow-alodlm-8b-weights",
    "title": "ALoDLM-8B — checkpoint files",
    "publisher": "amazon",
    "url": "https://huggingface.co/amazon/ALoDLM-8B/tree/2c4623d93e285bea86a940c2801eac4509862edd",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "2c4623d93e285bea86a940c2801eac4509862edd",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/amazon/ALoDLM-8B",
      "parameterCount": 8190735360,
      "files": [
        {
          "name": "exit_gate.pt",
          "sizeBytes": 10355
        },
        {
          "name": "model-00001-of-00004.safetensors",
          "sizeBytes": 4902257696
        },
        {
          "name": "model-00002-of-00004.safetensors",
          "sizeBytes": 4915960368
        },
        {
          "name": "model-00003-of-00004.safetensors",
          "sizeBytes": 4983068496
        },
        {
          "name": "model-00004-of-00004.safetensors",
          "sizeBytes": 1580230264
        }
      ],
      "totalBytes": 16381527179,
      "gated": false
    }
  },
  {
    "id": "ow-alodlm-8b-license",
    "title": "ALoDLM-8B — license",
    "publisher": "amazon",
    "url": "https://huggingface.co/amazon/ALoDLM-8B/blob/2c4623d93e285bea86a940c2801eac4509862edd/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "2c4623d93e285bea86a940c2801eac4509862edd"
  },
  {
    "id": "ow-chronos-t5-large",
    "title": "chronos-t5-large — model card",
    "publisher": "amazon",
    "url": "https://huggingface.co/amazon/chronos-t5-large",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "0e46c9c7e2e9f74b53db0617fdfcfe42a413e54a"
  },
  {
    "id": "ow-chronos-t5-large-weights",
    "title": "chronos-t5-large — checkpoint files",
    "publisher": "amazon",
    "url": "https://huggingface.co/amazon/chronos-t5-large/tree/0e46c9c7e2e9f74b53db0617fdfcfe42a413e54a",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "0e46c9c7e2e9f74b53db0617fdfcfe42a413e54a",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/amazon/chronos-t5-large",
      "parameterCount": 708963328,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 2835915592
        }
      ],
      "totalBytes": 2835915592,
      "gated": false
    }
  },
  {
    "id": "ow-chronos-t5-large-license",
    "title": "chronos-t5-large — license",
    "publisher": "amazon",
    "url": "https://huggingface.co/amazon/chronos-t5-large",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "0e46c9c7e2e9f74b53db0617fdfcfe42a413e54a"
  },
  {
    "id": "ow-flux-3-image-klein",
    "title": "flux-3-image-klein — model card",
    "publisher": "black-forest-labs",
    "url": "https://huggingface.co/black-forest-labs/flux-3-image-klein",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "337337621b8526e120f2275d250242f4a6bedd75"
  },
  {
    "id": "ow-flux-3-image-klein-weights",
    "title": "flux-3-image-klein — checkpoint files",
    "publisher": "black-forest-labs",
    "url": "https://huggingface.co/black-forest-labs/flux-3-image-klein/tree/337337621b8526e120f2275d250242f4a6bedd75",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "337337621b8526e120f2275d250242f4a6bedd75",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/black-forest-labs/flux-3-image-klein",
      "parameterCount": 5548681984,
      "files": [
        {
          "name": "ae.safetensors",
          "sizeBytes": 336211292
        },
        {
          "name": "model.safetensors",
          "sizeBytes": 11097404512
        },
        {
          "name": "text_encoder/model-00001-of-00002.safetensors",
          "sizeBytes": 4967229296
        },
        {
          "name": "text_encoder/model-00002-of-00002.safetensors",
          "sizeBytes": 3908490048
        },
        {
          "name": "transformer/diffusion_pytorch_model-00001-of-00002.safetensors",
          "sizeBytes": 9907529352
        },
        {
          "name": "transformer/diffusion_pytorch_model-00002-of-00002.safetensors",
          "sizeBytes": 1189878064
        },
        {
          "name": "vae/diffusion_pytorch_model.safetensors",
          "sizeBytes": 336213556
        },
        {
          "name": "variants/fp8r/model.safetensors",
          "sizeBytes": 6270949144
        },
        {
          "name": "variants/nvfp4/model.safetensors",
          "sizeBytes": 5277674144
        }
      ],
      "totalBytes": 43291579408,
      "gated": true
    }
  },
  {
    "id": "ow-flux-3-image-klein-license",
    "title": "flux-3-image-klein — license",
    "publisher": "black-forest-labs",
    "url": "https://huggingface.co/black-forest-labs/flux-3-image-klein",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "337337621b8526e120f2275d250242f4a6bedd75"
  },
  {
    "id": "ow-da3-giant-1-1",
    "title": "DA3-GIANT-1.1 — model card",
    "publisher": "depth-anything",
    "url": "https://huggingface.co/depth-anything/DA3-GIANT-1.1",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "72ee9f89ce4e50d704e9d55ee9c646ec8dc25a19"
  },
  {
    "id": "ow-da3-giant-1-1-weights",
    "title": "DA3-GIANT-1.1 — checkpoint files",
    "publisher": "depth-anything",
    "url": "https://huggingface.co/depth-anything/DA3-GIANT-1.1/tree/72ee9f89ce4e50d704e9d55ee9c646ec8dc25a19",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "72ee9f89ce4e50d704e9d55ee9c646ec8dc25a19",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/depth-anything/DA3-GIANT-1.1",
      "parameterCount": 1355674125,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 5422814644
        }
      ],
      "totalBytes": 5422814644,
      "gated": false
    }
  },
  {
    "id": "ow-da3-giant-1-1-license",
    "title": "DA3-GIANT-1.1 — license",
    "publisher": "depth-anything",
    "url": "https://huggingface.co/depth-anything/DA3-GIANT-1.1",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "72ee9f89ce4e50d704e9d55ee9c646ec8dc25a19"
  },
  {
    "id": "ow-boxer",
    "title": "boxer — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/boxer",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "bfba91291fb3f137c18eb6e45362eeda827eac7b"
  },
  {
    "id": "ow-boxer-weights",
    "title": "boxer — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/boxer/tree/bfba91291fb3f137c18eb6e45362eeda827eac7b",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "bfba91291fb3f137c18eb6e45362eeda827eac7b",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/facebook/boxer",
      "files": [
        {
          "name": "dinov3_vits16plus_pretrain_lvd1689m-4057cbaa.pth",
          "sizeBytes": 114924783
        },
        {
          "name": "owlv2-base-patch16-ensemble.pt",
          "sizeBytes": 742984963
        }
      ],
      "totalBytes": 857909746,
      "gated": false
    }
  },
  {
    "id": "ow-boxer-license",
    "title": "boxer — license",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/boxer",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "bfba91291fb3f137c18eb6e45362eeda827eac7b"
  },
  {
    "id": "ow-glide",
    "title": "GLiDE — model card",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/GLiDE",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "a7e45896be7c96ba3354891da790c5ec99c30b6c"
  },
  {
    "id": "ow-glide-weights",
    "title": "GLiDE — checkpoint files",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/GLiDE/tree/a7e45896be7c96ba3354891da790c5ec99c30b6c",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "a7e45896be7c96ba3354891da790c5ec99c30b6c",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/fastino/GLiDE",
      "parameterCount": 26085330160,
      "files": [
        {
          "name": "model-00001-of-00005.safetensors",
          "sizeBytes": 10752475776
        },
        {
          "name": "model-00002-of-00005.safetensors",
          "sizeBytes": 10821787824
        },
        {
          "name": "model-00003-of-00005.safetensors",
          "sizeBytes": 10791416008
        },
        {
          "name": "model-00004-of-00005.safetensors",
          "sizeBytes": 10748470520
        },
        {
          "name": "model-00005-of-00005.safetensors",
          "sizeBytes": 8135161744
        },
        {
          "name": "model-visual.safetensors",
          "sizeBytes": 921497224
        },
        {
          "name": "readout.safetensors",
          "sizeBytes": 2611288
        }
      ],
      "totalBytes": 52173420384,
      "gated": false
    }
  },
  {
    "id": "ow-glide-license",
    "title": "GLiDE — license",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/GLiDE/blob/a7e45896be7c96ba3354891da790c5ec99c30b6c/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "a7e45896be7c96ba3354891da790c5ec99c30b6c"
  },
  {
    "id": "ow-fastino-nemotron-3-5-lightning-finance",
    "title": "Fastino-Nemotron-3.5-Lightning-Finance — model card",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/Fastino-Nemotron-3.5-Lightning-Finance",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "a6e855cdcae681d4e101aa161e0ce8f6c686405e"
  },
  {
    "id": "ow-fastino-nemotron-3-5-lightning-finance-weights",
    "title": "Fastino-Nemotron-3.5-Lightning-Finance — checkpoint files",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/Fastino-Nemotron-3.5-Lightning-Finance/tree/a6e855cdcae681d4e101aa161e0ce8f6c686405e",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "a6e855cdcae681d4e101aa161e0ce8f6c686405e",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/fastino/Fastino-Nemotron-3.5-Lightning-Finance",
      "parameterCount": 31577937344,
      "files": [
        {
          "name": "model-00001-of-00014.safetensors",
          "sizeBytes": 4991210024
        },
        {
          "name": "model-00002-of-00014.safetensors",
          "sizeBytes": 4992601016
        },
        {
          "name": "model-00003-of-00014.safetensors",
          "sizeBytes": 4992601368
        },
        {
          "name": "model-00004-of-00014.safetensors",
          "sizeBytes": 4995692800
        },
        {
          "name": "model-00005-of-00014.safetensors",
          "sizeBytes": 4980553832
        },
        {
          "name": "model-00006-of-00014.safetensors",
          "sizeBytes": 4989423536
        },
        {
          "name": "model-00007-of-00014.safetensors",
          "sizeBytes": 4992601488
        },
        {
          "name": "model-00008-of-00014.safetensors",
          "sizeBytes": 4992601520
        },
        {
          "name": "model-00009-of-00014.safetensors",
          "sizeBytes": 4995692800
        },
        {
          "name": "model-00010-of-00014.safetensors",
          "sizeBytes": 4992601520
        },
        {
          "name": "model-00011-of-00014.safetensors",
          "sizeBytes": 4995692800
        },
        {
          "name": "model-00012-of-00014.safetensors",
          "sizeBytes": 4995692816
        },
        {
          "name": "model-00013-of-00014.safetensors",
          "sizeBytes": 3249723504
        },
        {
          "name": "model-00014-of-00014.safetensors",
          "sizeBytes": 2670685240
        }
      ],
      "totalBytes": 65827374264,
      "gated": false
    }
  },
  {
    "id": "ow-fastino-nemotron-3-5-lightning-finance-license",
    "title": "Fastino-Nemotron-3.5-Lightning-Finance — license",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/Fastino-Nemotron-3.5-Lightning-Finance",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "a6e855cdcae681d4e101aa161e0ce8f6c686405e"
  },
  {
    "id": "ow-embeddinggemma-2",
    "title": "embeddinggemma-2 — model card",
    "publisher": "google",
    "url": "https://huggingface.co/google/embeddinggemma-2",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "914f7f89142e33e77833254d9c9b90c3cef7303b"
  },
  {
    "id": "ow-embeddinggemma-2-weights",
    "title": "embeddinggemma-2 — checkpoint files",
    "publisher": "google",
    "url": "https://huggingface.co/google/embeddinggemma-2/tree/914f7f89142e33e77833254d9c9b90c3cef7303b",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "914f7f89142e33e77833254d9c9b90c3cef7303b",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/google/embeddinggemma-2",
      "parameterCount": 744371512,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 1488915288
        }
      ],
      "totalBytes": 1488915288,
      "gated": false
    }
  },
  {
    "id": "ow-embeddinggemma-2-license",
    "title": "embeddinggemma-2 — license",
    "publisher": "google",
    "url": "https://huggingface.co/google/embeddinggemma-2",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "914f7f89142e33e77833254d9c9b90c3cef7303b"
  },
  {
    "id": "ow-timesfm-3-0-pytorch",
    "title": "timesfm-3.0-pytorch — model card",
    "publisher": "google",
    "url": "https://huggingface.co/google/timesfm-3.0-pytorch",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "43046b85ec22d584a13f8098c2ed39c889e129c2"
  },
  {
    "id": "ow-timesfm-3-0-pytorch-weights",
    "title": "timesfm-3.0-pytorch — checkpoint files",
    "publisher": "google",
    "url": "https://huggingface.co/google/timesfm-3.0-pytorch/tree/43046b85ec22d584a13f8098c2ed39c889e129c2",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "43046b85ec22d584a13f8098c2ed39c889e129c2",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/google/timesfm-3.0-pytorch",
      "parameterCount": 330710976,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 1322898824
        }
      ],
      "totalBytes": 1322898824,
      "gated": false
    }
  },
  {
    "id": "ow-timesfm-3-0-pytorch-license",
    "title": "timesfm-3.0-pytorch — license",
    "publisher": "google",
    "url": "https://huggingface.co/google/timesfm-3.0-pytorch/blob/43046b85ec22d584a13f8098c2ed39c889e129c2/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "43046b85ec22d584a13f8098c2ed39c889e129c2"
  },
  {
    "id": "ow-tipsv1-g14",
    "title": "tipsv1-g14 — model card",
    "publisher": "google",
    "url": "https://huggingface.co/google/tipsv1-g14",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "79a0b1548c1d6da931ba4c9ef5fd9251744ca4b9"
  },
  {
    "id": "ow-tipsv1-g14-weights",
    "title": "tipsv1-g14 — checkpoint files",
    "publisher": "google",
    "url": "https://huggingface.co/google/tipsv1-g14/tree/79a0b1548c1d6da931ba4c9ef5fd9251744ca4b9",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "79a0b1548c1d6da931ba4c9ef5fd9251744ca4b9",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/google/tipsv1-g14",
      "parameterCount": 1525085696,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 6100424304
        }
      ],
      "totalBytes": 6100424304,
      "gated": false
    }
  },
  {
    "id": "ow-tipsv1-g14-license",
    "title": "tipsv1-g14 — license",
    "publisher": "google",
    "url": "https://huggingface.co/google/tipsv1-g14",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "79a0b1548c1d6da931ba4c9ef5fd9251744ca4b9"
  },
  {
    "id": "ow-tipsv1-so400m14",
    "title": "tipsv1-so400m14 — model card",
    "publisher": "google",
    "url": "https://huggingface.co/google/tipsv1-so400m14",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "9bf0d1426d430e0ce9b19fc84692d9b3d74b3355"
  },
  {
    "id": "ow-tipsv1-so400m14-weights",
    "title": "tipsv1-so400m14 — checkpoint files",
    "publisher": "google",
    "url": "https://huggingface.co/google/tipsv1-so400m14/tree/9bf0d1426d430e0ce9b19fc84692d9b3d74b3355",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "9bf0d1426d430e0ce9b19fc84692d9b3d74b3355",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/google/tipsv1-so400m14",
      "parameterCount": 861726816,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 3446991256
        }
      ],
      "totalBytes": 3446991256,
      "gated": false
    }
  },
  {
    "id": "ow-tipsv1-so400m14-license",
    "title": "tipsv1-so400m14 — license",
    "publisher": "google",
    "url": "https://huggingface.co/google/tipsv1-so400m14",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "9bf0d1426d430e0ce9b19fc84692d9b3d74b3355"
  },
  {
    "id": "ow-tipsv2-so400m14-dpt",
    "title": "tipsv2-so400m14-dpt — model card",
    "publisher": "google",
    "url": "https://huggingface.co/google/tipsv2-so400m14-dpt",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "545c26eaa6a4ce74a54d9ba287eee015635b94d4"
  },
  {
    "id": "ow-tipsv2-so400m14-dpt-weights",
    "title": "tipsv2-so400m14-dpt — checkpoint files",
    "publisher": "google",
    "url": "https://huggingface.co/google/tipsv2-so400m14-dpt/tree/545c26eaa6a4ce74a54d9ba287eee015635b94d4",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "545c26eaa6a4ce74a54d9ba287eee015635b94d4",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/google/tipsv2-so400m14-dpt",
      "parameterCount": 532924265,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 2131758580
        }
      ],
      "totalBytes": 2131758580,
      "gated": false
    }
  },
  {
    "id": "ow-tipsv2-so400m14-dpt-license",
    "title": "tipsv2-so400m14-dpt — license",
    "publisher": "google",
    "url": "https://huggingface.co/google/tipsv2-so400m14-dpt",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "545c26eaa6a4ce74a54d9ba287eee015635b94d4"
  },
  {
    "id": "ow-tabfm-1-1-0-pytorch",
    "title": "tabfm-1.1.0-pytorch — model card",
    "publisher": "google",
    "url": "https://huggingface.co/google/tabfm-1.1.0-pytorch",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "d7cfd3b8d184d7c8fed4210aeba9e1c967d45f2a"
  },
  {
    "id": "ow-tabfm-1-1-0-pytorch-weights",
    "title": "tabfm-1.1.0-pytorch — checkpoint files",
    "publisher": "google",
    "url": "https://huggingface.co/google/tabfm-1.1.0-pytorch/tree/d7cfd3b8d184d7c8fed4210aeba9e1c967d45f2a",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "d7cfd3b8d184d7c8fed4210aeba9e1c967d45f2a",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/google/tabfm-1.1.0-pytorch",
      "files": [
        {
          "name": "classification/model.safetensors",
          "sizeBytes": 820550772
        },
        {
          "name": "regression/model.safetensors",
          "sizeBytes": 824695714
        }
      ],
      "totalBytes": 1645246486,
      "gated": false
    }
  },
  {
    "id": "ow-tabfm-1-1-0-pytorch-license",
    "title": "tabfm-1.1.0-pytorch — license",
    "publisher": "google",
    "url": "https://huggingface.co/google/tabfm-1.1.0-pytorch/blob/d7cfd3b8d184d7c8fed4210aeba9e1c967d45f2a/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "d7cfd3b8d184d7c8fed4210aeba9e1c967d45f2a"
  },
  {
    "id": "ow-wespeaker-voxceleb-resnet34-lm",
    "title": "wespeaker-voxceleb-resnet34-LM — model card",
    "publisher": "pyannote",
    "url": "https://huggingface.co/pyannote/wespeaker-voxceleb-resnet34-LM",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "837717ddb9ff5507820346191109dc79c958d614"
  },
  {
    "id": "ow-wespeaker-voxceleb-resnet34-lm-weights",
    "title": "wespeaker-voxceleb-resnet34-LM — checkpoint files",
    "publisher": "pyannote",
    "url": "https://huggingface.co/pyannote/wespeaker-voxceleb-resnet34-LM/tree/837717ddb9ff5507820346191109dc79c958d614",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "837717ddb9ff5507820346191109dc79c958d614",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/pyannote/wespeaker-voxceleb-resnet34-LM",
      "files": [
        {
          "name": "pytorch_model.bin",
          "sizeBytes": 26645418
        }
      ],
      "totalBytes": 26645418,
      "gated": false
    }
  },
  {
    "id": "ow-wespeaker-voxceleb-resnet34-lm-license",
    "title": "wespeaker-voxceleb-resnet34-LM — license",
    "publisher": "pyannote",
    "url": "https://huggingface.co/pyannote/wespeaker-voxceleb-resnet34-LM",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "837717ddb9ff5507820346191109dc79c958d614"
  },
  {
    "id": "ow-glm-ocr",
    "title": "GLM-OCR — model card",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-OCR",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "2e85a62840ccac27daa451df36c736c4636b8628"
  },
  {
    "id": "ow-glm-ocr-weights",
    "title": "GLM-OCR — checkpoint files",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-OCR/tree/2e85a62840ccac27daa451df36c736c4636b8628",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "2e85a62840ccac27daa451df36c736c4636b8628",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/zai-org/GLM-OCR",
      "parameterCount": 1325258240,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 2650579464
        }
      ],
      "totalBytes": 2650579464,
      "gated": false
    }
  },
  {
    "id": "ow-glm-ocr-license",
    "title": "GLM-OCR — license",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-OCR",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "2e85a62840ccac27daa451df36c736c4636b8628"
  },
  {
    "id": "ow-scail-2",
    "title": "SCAIL-2 — model card",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/SCAIL-2",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "150cc0ca4e98e50e60b9295dacde39442fdccab2"
  },
  {
    "id": "ow-scail-2-weights",
    "title": "SCAIL-2 — checkpoint files",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/SCAIL-2/tree/150cc0ca4e98e50e60b9295dacde39442fdccab2",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "150cc0ca4e98e50e60b9295dacde39442fdccab2",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/zai-org/SCAIL-2",
      "files": [
        {
          "name": "model/1/fsdp2_rank_0000_checkpoint.pt",
          "sizeBytes": 65582563395
        },
        {
          "name": "model/bias-aware-dpo-lora.pt",
          "sizeBytes": 1227381060
        },
        {
          "name": "model/relighting-lora.pt",
          "sizeBytes": 1227381060
        },
        {
          "name": "models_clip_open-clip-xlm-roberta-large-vit-huge-14-onlyvisual.pth",
          "sizeBytes": 2528485611
        },
        {
          "name": "umt5-xxl/models_t5_umt5-xxl-enc-bf16.pth",
          "sizeBytes": 11361920418
        },
        {
          "name": "Wan2.1_VAE.pth",
          "sizeBytes": 507609880
        }
      ],
      "totalBytes": 82435341424,
      "gated": false
    }
  },
  {
    "id": "ow-scail-2-license",
    "title": "SCAIL-2 — license",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/SCAIL-2",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "150cc0ca4e98e50e60b9295dacde39442fdccab2"
  },
  {
    "id": "ow-glm-asr-nano-2512",
    "title": "GLM-ASR-Nano-2512 — model card",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-ASR-Nano-2512",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "61ba4e0b3309b6656edea3e93e419f7bd5c61957"
  },
  {
    "id": "ow-glm-asr-nano-2512-weights",
    "title": "GLM-ASR-Nano-2512 — checkpoint files",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-ASR-Nano-2512/tree/61ba4e0b3309b6656edea3e93e419f7bd5c61957",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "61ba4e0b3309b6656edea3e93e419f7bd5c61957",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/zai-org/GLM-ASR-Nano-2512",
      "parameterCount": 2257843200,
      "files": [
        {
          "name": "model.safetensors",
          "sizeBytes": 4515776712
        }
      ],
      "totalBytes": 4515776712,
      "gated": false
    }
  },
  {
    "id": "ow-glm-asr-nano-2512-license",
    "title": "GLM-ASR-Nano-2512 — license",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-ASR-Nano-2512",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "61ba4e0b3309b6656edea3e93e419f7bd5c61957"
  },
  {
    "id": "ow-glm-image",
    "title": "GLM-Image — model card",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-Image",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "2c433cc0cbc293bde2ac8ca9624f279b5d23fcf4"
  },
  {
    "id": "ow-glm-image-weights",
    "title": "GLM-Image — checkpoint files",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-Image/tree/2c433cc0cbc293bde2ac8ca9624f279b5d23fcf4",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "2c433cc0cbc293bde2ac8ca9624f279b5d23fcf4",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/zai-org/GLM-Image",
      "parameterCount": 6926882880,
      "files": [
        {
          "name": "text_encoder/model.safetensors",
          "sizeBytes": 870643240
        },
        {
          "name": "transformer/diffusion_pytorch_model-00001-of-00003.safetensors",
          "sizeBytes": 4966398856
        },
        {
          "name": "transformer/diffusion_pytorch_model-00002-of-00003.safetensors",
          "sizeBytes": 4984743304
        },
        {
          "name": "transformer/diffusion_pytorch_model-00003-of-00003.safetensors",
          "sizeBytes": 3902674480
        },
        {
          "name": "vae/diffusion_pytorch_model.safetensors",
          "sizeBytes": 812234342
        },
        {
          "name": "vision_language_encoder/model-00001-of-00004.safetensors",
          "sizeBytes": 5295710600
        },
        {
          "name": "vision_language_encoder/model-00002-of-00004.safetensors",
          "sizeBytes": 5303216664
        },
        {
          "name": "vision_language_encoder/model-00003-of-00004.safetensors",
          "sizeBytes": 5303216648
        },
        {
          "name": "vision_language_encoder/model-00004-of-00004.safetensors",
          "sizeBytes": 4326469720
        }
      ],
      "totalBytes": 35765307854,
      "gated": false
    }
  },
  {
    "id": "ow-glm-image-license",
    "title": "GLM-Image — license",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-Image",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "2c433cc0cbc293bde2ac8ca9624f279b5d23fcf4"
  },
  {
    "id": "ow-glm-tts",
    "title": "GLM-TTS — model card",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-TTS",
    "kind": "model-card",
    "observedAt": "2026-10-23",
    "revision": "b3feb691fa4cf590eec4418f6275f95220e58844"
  },
  {
    "id": "ow-glm-tts-weights",
    "title": "GLM-TTS — checkpoint files",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-TTS/tree/b3feb691fa4cf590eec4418f6275f95220e58844",
    "kind": "weights",
    "observedAt": "2026-10-23",
    "revision": "b3feb691fa4cf590eec4418f6275f95220e58844",
    "artifact": {
      "type": "hf-repository",
      "repositoryUrl": "https://huggingface.co/zai-org/GLM-TTS",
      "files": [
        {
          "name": "flow/flow.pt",
          "sizeBytes": 901331642
        },
        {
          "name": "hift/hift.pt",
          "sizeBytes": 83390254
        },
        {
          "name": "llm/model-00001-of-00002.safetensors",
          "sizeBytes": 4999976928
        },
        {
          "name": "llm/model-00002-of-00002.safetensors",
          "sizeBytes": 1208089016
        },
        {
          "name": "speech_tokenizer/model.safetensors",
          "sizeBytes": 1628135704
        }
      ],
      "totalBytes": 8820923544,
      "gated": false
    }
  },
  {
    "id": "ow-glm-tts-license",
    "title": "GLM-TTS — license",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-TTS",
    "kind": "license",
    "observedAt": "2026-10-23",
    "revision": "b3feb691fa4cf590eec4418f6275f95220e58844"
  }
] satisfies TaskModelSource[];

/** Additional architecture observations for the model-family explorer. */
export const modelFamilySources = [
  {
    "id": "ow-family-stanza-paper",
    "title": "Stanza — neural pipeline architecture",
    "publisher": "Stanford NLP",
    "url": "https://arxiv.org/html/2003.07082v2",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-family-qwen-image-paper",
    "title": "Qwen-Image — model architecture and training",
    "publisher": "Qwen",
    "url": "https://arxiv.org/html/2508.02324v1",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "ow-family-gliner2-config",
    "title": "GLiNER2 large v1 — architecture configuration",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2-large-v1/blob/d7aa8a2850d175a9227ff80358ea380723d03ad2/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "d7aa8a2850d175a9227ff80358ea380723d03ad2"
  },
  {
    "id": "ow-family-nli-config",
    "title": "DeBERTa v3 large NLI — architecture configuration",
    "publisher": "cross-encoder",
    "url": "https://huggingface.co/cross-encoder/nli-deberta-v3-large/blob/bab4bc7178836f731dcfd18c06ca9def0a137712/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "bab4bc7178836f731dcfd18c06ca9def0a137712"
  },
  {
    "id": "ow-family-coref-config",
    "title": "F-Coref — architecture configuration",
    "publisher": "biu-nlp",
    "url": "https://huggingface.co/biu-nlp/f-coref/blob/e91dfff12879495d882ba9460d0c5d5dd44ade59/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "e91dfff12879495d882ba9460d0c5d5dd44ade59"
  },
  {
    "id": "ow-family-nllb-config",
    "title": "NLLB-200 distilled 600M — architecture configuration",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/nllb-200-distilled-600M/blob/f8d333a098d19b4fd9a8b18f94170487ad3f821d/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "f8d333a098d19b4fd9a8b18f94170487ad3f821d"
  },
  {
    "id": "ow-family-coedit-config",
    "title": "CoEdIT large — architecture configuration",
    "publisher": "grammarly",
    "url": "https://huggingface.co/grammarly/coedit-large/blob/5637bcdf9d8d4419f97c8cfea36f7d35c79232b6/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "5637bcdf9d8d4419f97c8cfea36f7d35c79232b6"
  },
  {
    "id": "ow-family-embedding-config",
    "title": "Qwen3-Embedding-8B — architecture configuration",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Embedding-8B/blob/1d8ad4ca9b3dd8059ad90a75d4983776a23d44af/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "1d8ad4ca9b3dd8059ad90a75d4983776a23d44af"
  },
  {
    "id": "ow-family-reranker-config",
    "title": "Qwen3-Reranker-8B — architecture configuration",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Reranker-8B/blob/77d193c791ed757ca307ee72715aa132723da912/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "77d193c791ed757ca307ee72715aa132723da912"
  },
  {
    "id": "ow-family-siglip-config",
    "title": "SigLIP 2 SO400M — architecture configuration",
    "publisher": "google",
    "url": "https://huggingface.co/google/siglip2-so400m-patch14-384/blob/e8e487298228002f3d8a82e0cd5c8ea9c567f57f/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "e8e487298228002f3d8a82e0cd5c8ea9c567f57f"
  },
  {
    "id": "ow-family-dino-config",
    "title": "Grounding DINO base — architecture configuration",
    "publisher": "IDEA-Research",
    "url": "https://huggingface.co/IDEA-Research/grounding-dino-base/blob/12bdfa3120f3e7ec7b434d90674b3396eccf88eb/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "12bdfa3120f3e7ec7b434d90674b3396eccf88eb"
  },
  {
    "id": "ow-family-mask2former-config",
    "title": "Mask2Former Swin large · ADE20K — architecture configuration",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/mask2former-swin-large-ade-semantic/blob/aa25c92404a40599614215e76514c79b427c7527/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "aa25c92404a40599614215e76514c79b427c7527"
  },
  {
    "id": "ow-family-depth-config",
    "title": "Depth Anything 3 large — architecture configuration",
    "publisher": "depth-anything",
    "url": "https://huggingface.co/depth-anything/DA3-LARGE/blob/c54c26b16ec04d218e8d584ecf4bce082a9fcc20/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "c54c26b16ec04d218e8d584ecf4bce082a9fcc20"
  },
  {
    "id": "ow-family-pose-config",
    "title": "ViTPose+ huge — architecture configuration",
    "publisher": "usyd-community",
    "url": "https://huggingface.co/usyd-community/vitpose-plus-huge/blob/9f36d7aec1800d23e97f10c2e74393aee92aa53f/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "9f36d7aec1800d23e97f10c2e74393aee92aa53f"
  },
  {
    "id": "ow-family-videomae-config",
    "title": "VideoMAE large · Kinetics-400 — architecture configuration",
    "publisher": "MCG-NJU",
    "url": "https://huggingface.co/MCG-NJU/videomae-large-finetuned-kinetics/blob/0f6adcd5f6902900aa0281f9daacfe52bb3c4ad4/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "0f6adcd5f6902900aa0281f9daacfe52bb3c4ad4"
  },
  {
    "id": "ow-family-ocr-config",
    "title": "PaddleOCR-VL-1.6 — architecture configuration",
    "publisher": "PaddlePaddle",
    "url": "https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6/blob/c5630abae1d940eafe0697512a0325494b02ab42/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "c5630abae1d940eafe0697512a0325494b02ab42"
  },
  {
    "id": "ow-family-seamless-config",
    "title": "SeamlessM4T v2 large — architecture configuration",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/seamless-m4t-v2-large/blob/5f8cc790b19fc3f67a61c105133b20b34e3dcb76/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "5f8cc790b19fc3f67a61c105133b20b34e3dcb76"
  },
  {
    "id": "ow-family-keyword-config",
    "title": "wav2vec 2.0 · SUPERB KS — architecture configuration",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/wav2vec2-base-superb-ks/blob/372e0486cd83e6f0c05c20a27262e9ca09450d24/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "372e0486cd83e6f0c05c20a27262e9ca09450d24"
  },
  {
    "id": "ow-family-emotion-config",
    "title": "HuBERT large · SUPERB ER — architecture configuration",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/hubert-large-superb-er/blob/ef1a2ebfd7cfc424dc7f0fbcdc406e8b794d63bb/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "ef1a2ebfd7cfc424dc7f0fbcdc406e8b794d63bb"
  },
  {
    "id": "ow-family-ast-config",
    "title": "Audio Spectrogram Transformer — architecture configuration",
    "publisher": "MIT",
    "url": "https://huggingface.co/MIT/ast-finetuned-audioset-10-10-0.4593/blob/f826b80d28226b62986cc218e5cec390b1096902/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "f826b80d28226b62986cc218e5cec390b1096902"
  },
  {
    "id": "ow-family-separation-config",
    "title": "SepFormer · WHAMR! — architecture configuration",
    "publisher": "speechbrain",
    "url": "https://huggingface.co/speechbrain/sepformer-whamr/blob/9950fd8055b38679d2af5bef2366b5dba600ec66/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "9950fd8055b38679d2af5bef2366b5dba600ec66"
  },
  {
    "id": "ow-family-musicgen-config",
    "title": "MusicGen large — architecture configuration",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/musicgen-large/blob/15ccdc92099879e47b6da12c350cdb71d4eab3ca/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "15ccdc92099879e47b6da12c350cdb71d4eab3ca"
  },
  {
    "id": "ow-family-sql-config",
    "title": "SQLCoder 70B alpha — architecture configuration",
    "publisher": "defog",
    "url": "https://huggingface.co/defog/sqlcoder-70b-alpha/blob/8095a5ded3d3ed70fe27e9ed46b91f3e29a1b51a/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "8095a5ded3d3ed70fe27e9ed46b91f3e29a1b51a"
  },
  {
    "id": "ow-family-codet5-config",
    "title": "CodeT5 base — architecture configuration",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base/blob/02cd2d31bb7c6d0e4d91156167b2de044989c733/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "02cd2d31bb7c6d0e4d91156167b2de044989c733"
  },
  {
    "id": "ow-family-codet5plus-config",
    "title": "CodeT5+ 770M — architecture configuration",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5p-770m/blob/3f7cc6e80aee6612f41253b5ee28f09f86faa35f/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "3f7cc6e80aee6612f41253b5ee28f09f86faa35f"
  },
  {
    "id": "ow-family-bart-config",
    "title": "BART large · CNN/DailyMail — architecture configuration",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/bart-large-cnn/blob/37f520fa929c961707657b28798b30c003dd100b/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "37f520fa929c961707657b28798b30c003dd100b"
  },
  {
    "id": "ow-family-tabpfn-config",
    "title": "TabPFN 3.5 — architecture configuration",
    "publisher": "Prior-Labs",
    "url": "https://huggingface.co/Prior-Labs/tabpfn_3_5/blob/06bf2ba35c80a92a3b9abb436b99cf49e7a0365e/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "06bf2ba35c80a92a3b9abb436b99cf49e7a0365e"
  },
  {
    "id": "ow-family-chronos-config",
    "title": "Chronos-2 — architecture configuration",
    "publisher": "amazon",
    "url": "https://huggingface.co/amazon/chronos-2/blob/29ec3766d36d6f73f0696f85560a422f50e8498c/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "29ec3766d36d6f73f0696f85560a422f50e8498c"
  },
  {
    "id": "ow-family-prover-config",
    "title": "DeepSeek-Prover-V2 671B — architecture configuration",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B/blob/a51f899d0599838aa934b21b45b4c1ae7fbce2d3/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "a51f899d0599838aa934b21b45b4c1ae7fbce2d3"
  },
  {
    "id": "ow-family-uitars-config",
    "title": "UI-TARS 1.5 7B — architecture configuration",
    "publisher": "ByteDance-Seed",
    "url": "https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B/blob/683d002dd99d8f95104d31e70391a39348857f4e/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "683d002dd99d8f95104d31e70391a39348857f4e"
  },
  {
    "id": "ow-family-r1-config",
    "title": "DeepSeek-R1-0528 — architecture configuration",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1-0528/blob/4236a6af538feda4548eca9ab308586007567f52/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "4236a6af538feda4548eca9ab308586007567f52"
  },
  {
    "id": "ow-family-glm53-config",
    "title": "GLM-5.3 — architecture configuration",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-5.3/blob/ba32f8c19c8738e2c57c71798c601d477a7bf844/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "ba32f8c19c8738e2c57c71798c601d477a7bf844"
  },
  {
    "id": "ow-family-qwen38-config",
    "title": "Qwen3.8-27B — architecture configuration",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0"
  },
  {
    "id": "ow-family-coder-config",
    "title": "Qwen3-Coder-Next — architecture configuration",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Coder-Next/blob/a7fbcb5c0e12d62a448eaa0e260346bf5dcc0feb/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "a7fbcb5c0e12d62a448eaa0e260346bf5dcc0feb"
  },
  {
    "id": "ow-family-deepseek41-config",
    "title": "DeepSeek-V4.1-Flash-1017 — architecture configuration",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/blob/1bae0e1088993b9b82de08f59de5be5a34e42170/config.json",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "1bae0e1088993b9b82de08f59de5be5a34e42170"
  }
] satisfies TaskModelSource[];

// BEGIN task benchmark observations
export const benchmarkSources: BenchmarkSource[] = [
  {
    "id": "bm-card-qwen36",
    "title": "Qwen/Qwen3.6-27B · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3.6-27B/blob/6a9e13bd6fc8f0983b9b99948120bc37f49c13e9/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "6a9e13bd6fc8f0983b9b99948120bc37f49c13e9"
  },
  {
    "id": "bm-weights-qwen36",
    "title": "Qwen3.6-27B · released files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3.6-27B/tree/6a9e13bd6fc8f0983b9b99948120bc37f49c13e9",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "6a9e13bd6fc8f0983b9b99948120bc37f49c13e9"
  },
  {
    "id": "bm-license-qwen36",
    "title": "Qwen3.6-27B · license",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3.6-27B/blob/6a9e13bd6fc8f0983b9b99948120bc37f49c13e9/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "6a9e13bd6fc8f0983b9b99948120bc37f49c13e9"
  },
  {
    "id": "bm-card-gliner25",
    "title": "fastino/gliner2.5-base-v1 · model card",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2.5-base-v1/blob/54785d51df8d86a0d8f2eb212fec15871aad2c4d/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "54785d51df8d86a0d8f2eb212fec15871aad2c4d"
  },
  {
    "id": "bm-weights-gliner25",
    "title": "GLiNER2.5 base v1 · released files",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2.5-base-v1/tree/54785d51df8d86a0d8f2eb212fec15871aad2c4d",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "54785d51df8d86a0d8f2eb212fec15871aad2c4d"
  },
  {
    "id": "bm-license-gliner25",
    "title": "GLiNER2.5 base v1 · license",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2.5-base-v1/blob/54785d51df8d86a0d8f2eb212fec15871aad2c4d/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "54785d51df8d86a0d8f2eb212fec15871aad2c4d"
  },
  {
    "id": "bm-card-gliner25multi",
    "title": "fastino/gliner2.5-multi-v1 · model card",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2.5-multi-v1/blob/cf5593a5d45e3bbf204b9df621b13b1c0cf25ee3/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "cf5593a5d45e3bbf204b9df621b13b1c0cf25ee3"
  },
  {
    "id": "bm-weights-gliner25multi",
    "title": "GLiNER2.5 multi v1 · released files",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2.5-multi-v1/tree/cf5593a5d45e3bbf204b9df621b13b1c0cf25ee3",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "cf5593a5d45e3bbf204b9df621b13b1c0cf25ee3"
  },
  {
    "id": "bm-license-gliner25multi",
    "title": "GLiNER2.5 multi v1 · license",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2.5-multi-v1/blob/cf5593a5d45e3bbf204b9df621b13b1c0cf25ee3/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "cf5593a5d45e3bbf204b9df621b13b1c0cf25ee3"
  },
  {
    "id": "bm-card-gliner2base",
    "title": "fastino/gliner2-base-v1 · model card",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2-base-v1/blob/f9634218e53580c56edf0de97ca1a7d3f1c2354e/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "f9634218e53580c56edf0de97ca1a7d3f1c2354e"
  },
  {
    "id": "bm-weights-gliner2base",
    "title": "GLiNER2 base v1 · released files",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2-base-v1/tree/f9634218e53580c56edf0de97ca1a7d3f1c2354e",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "f9634218e53580c56edf0de97ca1a7d3f1c2354e"
  },
  {
    "id": "bm-license-gliner2base",
    "title": "GLiNER2 base v1 · license",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2-base-v1/blob/f9634218e53580c56edf0de97ca1a7d3f1c2354e/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "f9634218e53580c56edf0de97ca1a7d3f1c2354e"
  },
  {
    "id": "bm-card-gliner2multi",
    "title": "fastino/gliner2-multi-v1 · model card",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2-multi-v1/blob/ce747d79a8e362d3dee0b0b26d1201f7f1a8615a/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "ce747d79a8e362d3dee0b0b26d1201f7f1a8615a"
  },
  {
    "id": "bm-weights-gliner2multi",
    "title": "GLiNER2 multi v1 · released files",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2-multi-v1/tree/ce747d79a8e362d3dee0b0b26d1201f7f1a8615a",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "ce747d79a8e362d3dee0b0b26d1201f7f1a8615a"
  },
  {
    "id": "bm-license-gliner2multi",
    "title": "GLiNER2 multi v1 · license",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2-multi-v1/blob/ce747d79a8e362d3dee0b0b26d1201f7f1a8615a/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "ce747d79a8e362d3dee0b0b26d1201f7f1a8615a"
  },
  {
    "id": "bm-card-e2e-coref",
    "title": "biu-nlp/lingmess-coref · model card",
    "publisher": "biu-nlp",
    "url": "https://huggingface.co/biu-nlp/lingmess-coref/blob/fa5d8a827a09388d03adbe9e800c7d8c509c3935/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "fa5d8a827a09388d03adbe9e800c7d8c509c3935"
  },
  {
    "id": "bm-weights-e2e-coref",
    "title": "LingMess Coref · released files",
    "publisher": "biu-nlp",
    "url": "https://huggingface.co/biu-nlp/lingmess-coref/tree/fa5d8a827a09388d03adbe9e800c7d8c509c3935",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "fa5d8a827a09388d03adbe9e800c7d8c509c3935"
  },
  {
    "id": "bm-license-e2e-coref",
    "title": "LingMess Coref · license",
    "publisher": "biu-nlp",
    "url": "https://huggingface.co/biu-nlp/lingmess-coref/blob/fa5d8a827a09388d03adbe9e800c7d8c509c3935/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "fa5d8a827a09388d03adbe9e800c7d8c509c3935"
  },
  {
    "id": "bm-card-coeditxl",
    "title": "grammarly/coedit-xl · model card",
    "publisher": "grammarly",
    "url": "https://huggingface.co/grammarly/coedit-xl/blob/be7d1aeebbaa0e5c6b97dcf110dd4ba22096d3cf/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "be7d1aeebbaa0e5c6b97dcf110dd4ba22096d3cf"
  },
  {
    "id": "bm-weights-coeditxl",
    "title": "CoEdIT XL · released files",
    "publisher": "grammarly",
    "url": "https://huggingface.co/grammarly/coedit-xl/tree/be7d1aeebbaa0e5c6b97dcf110dd4ba22096d3cf",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "be7d1aeebbaa0e5c6b97dcf110dd4ba22096d3cf"
  },
  {
    "id": "bm-license-coeditxl",
    "title": "CoEdIT XL · license",
    "publisher": "grammarly",
    "url": "https://huggingface.co/grammarly/coedit-xl/blob/be7d1aeebbaa0e5c6b97dcf110dd4ba22096d3cf/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "be7d1aeebbaa0e5c6b97dcf110dd4ba22096d3cf"
  },
  {
    "id": "bm-card-hymt30",
    "title": "tencent/Hy-MT2-30B-A3B · model card",
    "publisher": "tencent",
    "url": "https://huggingface.co/tencent/Hy-MT2-30B-A3B/blob/d3ead4dba61c09aac60a261a96ad1df3e705febb/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "d3ead4dba61c09aac60a261a96ad1df3e705febb"
  },
  {
    "id": "bm-weights-hymt30",
    "title": "Hy-MT2-30B-A3B · released files",
    "publisher": "tencent",
    "url": "https://huggingface.co/tencent/Hy-MT2-30B-A3B/tree/d3ead4dba61c09aac60a261a96ad1df3e705febb",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "d3ead4dba61c09aac60a261a96ad1df3e705febb"
  },
  {
    "id": "bm-license-hymt30",
    "title": "Hy-MT2-30B-A3B · license",
    "publisher": "tencent",
    "url": "https://huggingface.co/tencent/Hy-MT2-30B-A3B/blob/d3ead4dba61c09aac60a261a96ad1df3e705febb/LICENSE.txt",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "d3ead4dba61c09aac60a261a96ad1df3e705febb"
  },
  {
    "id": "bm-card-hymt7",
    "title": "tencent/Hy-MT2-7B · model card",
    "publisher": "tencent",
    "url": "https://huggingface.co/tencent/Hy-MT2-7B/blob/9b0eb4e8f001def3e5ff6469a0ac96fdb39ec223/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "9b0eb4e8f001def3e5ff6469a0ac96fdb39ec223"
  },
  {
    "id": "bm-weights-hymt7",
    "title": "Hy-MT2-7B · released files",
    "publisher": "tencent",
    "url": "https://huggingface.co/tencent/Hy-MT2-7B/tree/9b0eb4e8f001def3e5ff6469a0ac96fdb39ec223",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "9b0eb4e8f001def3e5ff6469a0ac96fdb39ec223"
  },
  {
    "id": "bm-license-hymt7",
    "title": "Hy-MT2-7B · license",
    "publisher": "tencent",
    "url": "https://huggingface.co/tencent/Hy-MT2-7B/blob/9b0eb4e8f001def3e5ff6469a0ac96fdb39ec223/LICENSE.txt",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "9b0eb4e8f001def3e5ff6469a0ac96fdb39ec223"
  },
  {
    "id": "bm-card-emb4",
    "title": "Qwen/Qwen3-Embedding-4B · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Embedding-4B/blob/5cf2132abc99cad020ac570b19d031efec650f2b/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "5cf2132abc99cad020ac570b19d031efec650f2b"
  },
  {
    "id": "bm-weights-emb4",
    "title": "Qwen3-Embedding-4B · released files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Embedding-4B/tree/5cf2132abc99cad020ac570b19d031efec650f2b",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "5cf2132abc99cad020ac570b19d031efec650f2b"
  },
  {
    "id": "bm-license-emb4",
    "title": "Qwen3-Embedding-4B · license",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Embedding-4B/blob/5cf2132abc99cad020ac570b19d031efec650f2b/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "5cf2132abc99cad020ac570b19d031efec650f2b"
  },
  {
    "id": "bm-card-rerank4",
    "title": "Qwen/Qwen3-Reranker-4B · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Reranker-4B/blob/22e683669bc0f0bd69640a1354a6d0aebcfeede5/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "22e683669bc0f0bd69640a1354a6d0aebcfeede5"
  },
  {
    "id": "bm-weights-rerank4",
    "title": "Qwen3-Reranker-4B · released files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Reranker-4B/tree/22e683669bc0f0bd69640a1354a6d0aebcfeede5",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "22e683669bc0f0bd69640a1354a6d0aebcfeede5"
  },
  {
    "id": "bm-license-rerank4",
    "title": "Qwen3-Reranker-4B · license",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Reranker-4B/blob/22e683669bc0f0bd69640a1354a6d0aebcfeede5/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "22e683669bc0f0bd69640a1354a6d0aebcfeede5"
  },
  {
    "id": "bm-card-mask2formertiny",
    "title": "facebook/mask2former-swin-tiny-ade-semantic · model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/mask2former-swin-tiny-ade-semantic/blob/c8cf1b5e823aee214d937d0d001c1850ba44ef6a/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "c8cf1b5e823aee214d937d0d001c1850ba44ef6a"
  },
  {
    "id": "bm-weights-mask2formertiny",
    "title": "Mask2Former Swin tiny · ADE20K · released files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/mask2former-swin-tiny-ade-semantic/tree/c8cf1b5e823aee214d937d0d001c1850ba44ef6a",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "c8cf1b5e823aee214d937d0d001c1850ba44ef6a"
  },
  {
    "id": "bm-license-mask2formertiny",
    "title": "Mask2Former Swin tiny · ADE20K · license",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/mask2former-swin-tiny-ade-semantic/blob/c8cf1b5e823aee214d937d0d001c1850ba44ef6a/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "c8cf1b5e823aee214d937d0d001c1850ba44ef6a"
  },
  {
    "id": "bm-card-posebase",
    "title": "usyd-community/vitpose-plus-base · model card",
    "publisher": "usyd-community",
    "url": "https://huggingface.co/usyd-community/vitpose-plus-base/blob/92be54d7a29e42fad47b6e2ca01dd9e685a61e0d/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "92be54d7a29e42fad47b6e2ca01dd9e685a61e0d"
  },
  {
    "id": "bm-weights-posebase",
    "title": "ViTPose+ base · released files",
    "publisher": "usyd-community",
    "url": "https://huggingface.co/usyd-community/vitpose-plus-base/tree/92be54d7a29e42fad47b6e2ca01dd9e685a61e0d",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "92be54d7a29e42fad47b6e2ca01dd9e685a61e0d"
  },
  {
    "id": "bm-license-posebase",
    "title": "ViTPose+ base · license",
    "publisher": "usyd-community",
    "url": "https://huggingface.co/usyd-community/vitpose-plus-base/blob/92be54d7a29e42fad47b6e2ca01dd9e685a61e0d/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "92be54d7a29e42fad47b6e2ca01dd9e685a61e0d"
  },
  {
    "id": "bm-card-marigold2",
    "title": "huawei-bayerlab/marigold-v2-0 · model card",
    "publisher": "huawei-bayerlab",
    "url": "https://huggingface.co/huawei-bayerlab/marigold-v2-0/blob/cdf9810fb690886391a63aec012b5f501064fb0d/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "cdf9810fb690886391a63aec012b5f501064fb0d"
  },
  {
    "id": "bm-weights-marigold2",
    "title": "Marigold V2 · Log-stage2 · released files",
    "publisher": "huawei-bayerlab",
    "url": "https://huggingface.co/huawei-bayerlab/marigold-v2-0/tree/cdf9810fb690886391a63aec012b5f501064fb0d",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "cdf9810fb690886391a63aec012b5f501064fb0d"
  },
  {
    "id": "bm-license-marigold2",
    "title": "Marigold V2 · Log-stage2 · license",
    "publisher": "huawei-bayerlab",
    "url": "https://huggingface.co/huawei-bayerlab/marigold-v2-0/blob/cdf9810fb690886391a63aec012b5f501064fb0d/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "cdf9810fb690886391a63aec012b5f501064fb0d"
  },
  {
    "id": "bm-card-fluxklein4",
    "title": "black-forest-labs/FLUX.2-klein-4B · model card",
    "publisher": "black-forest-labs",
    "url": "https://huggingface.co/black-forest-labs/FLUX.2-klein-4B/blob/e7b7dc27f91deacad38e78976d1f2b499d76a294/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "e7b7dc27f91deacad38e78976d1f2b499d76a294"
  },
  {
    "id": "bm-weights-fluxklein4",
    "title": "FLUX.2 klein 4B · released files",
    "publisher": "black-forest-labs",
    "url": "https://huggingface.co/black-forest-labs/FLUX.2-klein-4B/tree/e7b7dc27f91deacad38e78976d1f2b499d76a294",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "e7b7dc27f91deacad38e78976d1f2b499d76a294"
  },
  {
    "id": "bm-license-fluxklein4",
    "title": "FLUX.2 klein 4B · license",
    "publisher": "black-forest-labs",
    "url": "https://huggingface.co/black-forest-labs/FLUX.2-klein-4B/blob/e7b7dc27f91deacad38e78976d1f2b499d76a294/LICENSE.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "e7b7dc27f91deacad38e78976d1f2b499d76a294"
  },
  {
    "id": "bm-card-fluxklein9",
    "title": "black-forest-labs/FLUX.2-klein-9B · model card",
    "publisher": "black-forest-labs",
    "url": "https://huggingface.co/black-forest-labs/FLUX.2-klein-9B/blob/92196c8e11f7b6cf2b7493e037d8c5345c559216/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "92196c8e11f7b6cf2b7493e037d8c5345c559216"
  },
  {
    "id": "bm-weights-fluxklein9",
    "title": "FLUX.2 klein 9B · released files",
    "publisher": "black-forest-labs",
    "url": "https://huggingface.co/black-forest-labs/FLUX.2-klein-9B/tree/92196c8e11f7b6cf2b7493e037d8c5345c559216",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "92196c8e11f7b6cf2b7493e037d8c5345c559216"
  },
  {
    "id": "bm-license-fluxklein9",
    "title": "FLUX.2 klein 9B · license",
    "publisher": "black-forest-labs",
    "url": "https://huggingface.co/black-forest-labs/FLUX.2-klein-9B/blob/92196c8e11f7b6cf2b7493e037d8c5345c559216/LICENSE.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "92196c8e11f7b6cf2b7493e037d8c5345c559216"
  },
  {
    "id": "bm-card-moebius",
    "title": "hustvl/Moebius · model card",
    "publisher": "hustvl",
    "url": "https://huggingface.co/hustvl/Moebius/blob/cd01f47fb648219d3fa605806c5ce00b713faa5e/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "cd01f47fb648219d3fa605806c5ce00b713faa5e"
  },
  {
    "id": "bm-weights-moebius",
    "title": "Moebius · Places2 · released files",
    "publisher": "hustvl",
    "url": "https://huggingface.co/hustvl/Moebius/tree/cd01f47fb648219d3fa605806c5ce00b713faa5e",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "cd01f47fb648219d3fa605806c5ce00b713faa5e"
  },
  {
    "id": "bm-license-moebius",
    "title": "Moebius · Places2 · license",
    "publisher": "hustvl",
    "url": "https://huggingface.co/hustvl/Moebius/blob/cd01f47fb648219d3fa605806c5ce00b713faa5e/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "cd01f47fb648219d3fa605806c5ce00b713faa5e"
  },
  {
    "id": "bm-card-asrhf",
    "title": "Qwen/Qwen3-ASR-1.7B-hf · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf/blob/bcd2b5b7f32b480ab5790554cfa8347f246a14f3/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "bcd2b5b7f32b480ab5790554cfa8347f246a14f3"
  },
  {
    "id": "bm-weights-asrhf",
    "title": "Qwen3-ASR-1.7B · Transformers · released files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf/tree/bcd2b5b7f32b480ab5790554cfa8347f246a14f3",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "bcd2b5b7f32b480ab5790554cfa8347f246a14f3"
  },
  {
    "id": "bm-license-asrhf",
    "title": "Qwen3-ASR-1.7B · Transformers · license",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf/blob/bcd2b5b7f32b480ab5790554cfa8347f246a14f3/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "bcd2b5b7f32b480ab5790554cfa8347f246a14f3"
  },
  {
    "id": "bm-card-asr06hf",
    "title": "Qwen/Qwen3-ASR-0.6B-hf · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-ASR-0.6B-hf/blob/7f1569a48a89f3e3f4dc3a5c9d28bddd903bc76c/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "7f1569a48a89f3e3f4dc3a5c9d28bddd903bc76c"
  },
  {
    "id": "bm-weights-asr06hf",
    "title": "Qwen3-ASR-0.6B · Transformers · released files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-ASR-0.6B-hf/tree/7f1569a48a89f3e3f4dc3a5c9d28bddd903bc76c",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "7f1569a48a89f3e3f4dc3a5c9d28bddd903bc76c"
  },
  {
    "id": "bm-license-asr06hf",
    "title": "Qwen3-ASR-0.6B · Transformers · license",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-ASR-0.6B-hf/blob/7f1569a48a89f3e3f4dc3a5c9d28bddd903bc76c/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "7f1569a48a89f3e3f4dc3a5c9d28bddd903bc76c"
  },
  {
    "id": "bm-card-ttscv06",
    "title": "Qwen/Qwen3-TTS-12Hz-0.6B-CustomVoice · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-0.6B-CustomVoice/blob/85e237c12c027371202489a0ec509ded67b5e4b5/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "85e237c12c027371202489a0ec509ded67b5e4b5"
  },
  {
    "id": "bm-weights-ttscv06",
    "title": "Qwen3-TTS 0.6B CustomVoice · released files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-0.6B-CustomVoice/tree/85e237c12c027371202489a0ec509ded67b5e4b5",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "85e237c12c027371202489a0ec509ded67b5e4b5"
  },
  {
    "id": "bm-license-ttscv06",
    "title": "Qwen3-TTS 0.6B CustomVoice · license",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-0.6B-CustomVoice/blob/85e237c12c027371202489a0ec509ded67b5e4b5/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "85e237c12c027371202489a0ec509ded67b5e4b5"
  },
  {
    "id": "bm-card-redimnet",
    "title": "lab260/redimnet2-plus · model card",
    "publisher": "lab260",
    "url": "https://huggingface.co/lab260/redimnet2-plus/blob/fd45d1968c0ea91b62ad0d2469eee4607756bb07/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "fd45d1968c0ea91b62ad0d2469eee4607756bb07"
  },
  {
    "id": "bm-weights-redimnet",
    "title": "ReDimNet2+ · released files",
    "publisher": "lab260",
    "url": "https://huggingface.co/lab260/redimnet2-plus/tree/fd45d1968c0ea91b62ad0d2469eee4607756bb07",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "fd45d1968c0ea91b62ad0d2469eee4607756bb07"
  },
  {
    "id": "bm-license-redimnet",
    "title": "ReDimNet2+ · license",
    "publisher": "lab260",
    "url": "https://huggingface.co/lab260/redimnet2-plus/blob/fd45d1968c0ea91b62ad0d2469eee4607756bb07/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "fd45d1968c0ea91b62ad0d2469eee4607756bb07"
  },
  {
    "id": "bm-card-pyannote31",
    "title": "pyannote/speaker-diarization-3.1 · model card",
    "publisher": "pyannote",
    "url": "https://huggingface.co/pyannote/speaker-diarization-3.1/blob/84fd25912480287da0247647c3d2b4853cb3ee5d/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "84fd25912480287da0247647c3d2b4853cb3ee5d"
  },
  {
    "id": "bm-weights-pyannote31",
    "title": "pyannote speaker-diarization-3.1 · released files",
    "publisher": "pyannote",
    "url": "https://huggingface.co/pyannote/speaker-diarization-3.1/tree/84fd25912480287da0247647c3d2b4853cb3ee5d",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "84fd25912480287da0247647c3d2b4853cb3ee5d"
  },
  {
    "id": "bm-license-pyannote31",
    "title": "pyannote speaker-diarization-3.1 · license",
    "publisher": "pyannote",
    "url": "https://huggingface.co/pyannote/speaker-diarization-3.1/blob/84fd25912480287da0247647c3d2b4853cb3ee5d/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "84fd25912480287da0247647c3d2b4853cb3ee5d"
  },
  {
    "id": "bm-card-audar",
    "title": "audarai/Audar-Diarization-V1 · model card",
    "publisher": "audarai",
    "url": "https://huggingface.co/audarai/Audar-Diarization-V1/blob/230e5afed3f87637c12c8fb819dd0be9b1ddf6cb/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "230e5afed3f87637c12c8fb819dd0be9b1ddf6cb"
  },
  {
    "id": "bm-weights-audar",
    "title": "Audar-Diarization-V1 · released files",
    "publisher": "audarai",
    "url": "https://huggingface.co/audarai/Audar-Diarization-V1/tree/230e5afed3f87637c12c8fb819dd0be9b1ddf6cb",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "230e5afed3f87637c12c8fb819dd0be9b1ddf6cb"
  },
  {
    "id": "bm-license-audar",
    "title": "Audar-Diarization-V1 · license",
    "publisher": "audarai",
    "url": "https://huggingface.co/audarai/Audar-Diarization-V1/blob/230e5afed3f87637c12c8fb819dd0be9b1ddf6cb/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "230e5afed3f87637c12c8fb819dd0be9b1ddf6cb"
  },
  {
    "id": "bm-card-kumo",
    "title": "nvidia/Kumo-Tabular · model card",
    "publisher": "nvidia",
    "url": "https://huggingface.co/nvidia/Kumo-Tabular/blob/c5893d418e162b9f841ae179dc767afefff73831/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "c5893d418e162b9f841ae179dc767afefff73831"
  },
  {
    "id": "bm-weights-kumo",
    "title": "NVIDIA Kumo Tabular · Large · released files",
    "publisher": "nvidia",
    "url": "https://huggingface.co/nvidia/Kumo-Tabular/tree/c5893d418e162b9f841ae179dc767afefff73831",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "c5893d418e162b9f841ae179dc767afefff73831"
  },
  {
    "id": "bm-license-kumo",
    "title": "NVIDIA Kumo Tabular · Large · license",
    "publisher": "nvidia",
    "url": "https://huggingface.co/nvidia/Kumo-Tabular/blob/c5893d418e162b9f841ae179dc767afefff73831/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "c5893d418e162b9f841ae179dc767afefff73831"
  },
  {
    "id": "bm-card-timestral",
    "title": "mistralai/Timestral-209M · model card",
    "publisher": "mistralai",
    "url": "https://huggingface.co/mistralai/Timestral-209M/blob/9874d252ab0aae16f7f7c999f98f98d6ad7d8365/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "9874d252ab0aae16f7f7c999f98f98d6ad7d8365"
  },
  {
    "id": "bm-weights-timestral",
    "title": "Timestral-209M · released files",
    "publisher": "mistralai",
    "url": "https://huggingface.co/mistralai/Timestral-209M/tree/9874d252ab0aae16f7f7c999f98f98d6ad7d8365",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "9874d252ab0aae16f7f7c999f98f98d6ad7d8365"
  },
  {
    "id": "bm-license-timestral",
    "title": "Timestral-209M · license",
    "publisher": "mistralai",
    "url": "https://huggingface.co/mistralai/Timestral-209M/blob/9874d252ab0aae16f7f7c999f98f98d6ad7d8365/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "9874d252ab0aae16f7f7c999f98f98d6ad7d8365"
  },
  {
    "id": "bm-card-timestral28",
    "title": "mistralai/Timestral-28M · model card",
    "publisher": "mistralai",
    "url": "https://huggingface.co/mistralai/Timestral-28M/blob/49b26409ac87b5935539a5d8ffe7f397b720db47/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "49b26409ac87b5935539a5d8ffe7f397b720db47"
  },
  {
    "id": "bm-weights-timestral28",
    "title": "Timestral-28M · released files",
    "publisher": "mistralai",
    "url": "https://huggingface.co/mistralai/Timestral-28M/tree/49b26409ac87b5935539a5d8ffe7f397b720db47",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "49b26409ac87b5935539a5d8ffe7f397b720db47"
  },
  {
    "id": "bm-license-timestral28",
    "title": "Timestral-28M · license",
    "publisher": "mistralai",
    "url": "https://huggingface.co/mistralai/Timestral-28M/blob/49b26409ac87b5935539a5d8ffe7f397b720db47/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "49b26409ac87b5935539a5d8ffe7f397b720db47"
  },
  {
    "id": "bm-card-xiyan",
    "title": "XGenerationLab/XiYanSQL-QwenCoder-32B-2412 · model card",
    "publisher": "XGenerationLab",
    "url": "https://huggingface.co/XGenerationLab/XiYanSQL-QwenCoder-32B-2412/blob/b74605a579662ea82404dde034d4d4c2f032fab6/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "b74605a579662ea82404dde034d4d4c2f032fab6"
  },
  {
    "id": "bm-weights-xiyan",
    "title": "XiYanSQL-QwenCoder-32B-2412 · released files",
    "publisher": "XGenerationLab",
    "url": "https://huggingface.co/XGenerationLab/XiYanSQL-QwenCoder-32B-2412/tree/b74605a579662ea82404dde034d4d4c2f032fab6",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "b74605a579662ea82404dde034d4d4c2f032fab6"
  },
  {
    "id": "bm-license-xiyan",
    "title": "XiYanSQL-QwenCoder-32B-2412 · license",
    "publisher": "XGenerationLab",
    "url": "https://huggingface.co/XGenerationLab/XiYanSQL-QwenCoder-32B-2412/blob/b74605a579662ea82404dde034d4d4c2f032fab6/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "b74605a579662ea82404dde034d4d4c2f032fab6"
  },
  {
    "id": "bm-card-xiyan7",
    "title": "XGenerationLab/XiYanSQL-QwenCoder-7B-2502 · model card",
    "publisher": "XGenerationLab",
    "url": "https://huggingface.co/XGenerationLab/XiYanSQL-QwenCoder-7B-2502/blob/1009ef00833bafa68ca4251a7a2319fa58e9ab77/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "1009ef00833bafa68ca4251a7a2319fa58e9ab77"
  },
  {
    "id": "bm-weights-xiyan7",
    "title": "XiYanSQL-QwenCoder-7B-2502 · released files",
    "publisher": "XGenerationLab",
    "url": "https://huggingface.co/XGenerationLab/XiYanSQL-QwenCoder-7B-2502/tree/1009ef00833bafa68ca4251a7a2319fa58e9ab77",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "1009ef00833bafa68ca4251a7a2319fa58e9ab77"
  },
  {
    "id": "bm-license-xiyan7",
    "title": "XiYanSQL-QwenCoder-7B-2502 · license",
    "publisher": "XGenerationLab",
    "url": "https://huggingface.co/XGenerationLab/XiYanSQL-QwenCoder-7B-2502/blob/1009ef00833bafa68ca4251a7a2319fa58e9ab77/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "1009ef00833bafa68ca4251a7a2319fa58e9ab77"
  },
  {
    "id": "bm-card-longcatprover",
    "title": "meituan-longcat/LongCat-Flash-Prover · model card",
    "publisher": "meituan-longcat",
    "url": "https://huggingface.co/meituan-longcat/LongCat-Flash-Prover/blob/9532d650151da0f91cd14fc8d05eeee85720b93f/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "9532d650151da0f91cd14fc8d05eeee85720b93f"
  },
  {
    "id": "bm-weights-longcatprover",
    "title": "LongCat-Flash-Prover · released files",
    "publisher": "meituan-longcat",
    "url": "https://huggingface.co/meituan-longcat/LongCat-Flash-Prover/tree/9532d650151da0f91cd14fc8d05eeee85720b93f",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "9532d650151da0f91cd14fc8d05eeee85720b93f"
  },
  {
    "id": "bm-license-longcatprover",
    "title": "LongCat-Flash-Prover · license",
    "publisher": "meituan-longcat",
    "url": "https://huggingface.co/meituan-longcat/LongCat-Flash-Prover/blob/9532d650151da0f91cd14fc8d05eeee85720b93f/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "9532d650151da0f91cd14fc8d05eeee85720b93f"
  },
  {
    "id": "bm-card-kimi3",
    "title": "moonshotai/Kimi-K3 · model card",
    "publisher": "moonshotai",
    "url": "https://huggingface.co/moonshotai/Kimi-K3/blob/f831ab66814297da540d832a5235f8e904f29d06/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "f831ab66814297da540d832a5235f8e904f29d06"
  },
  {
    "id": "bm-weights-kimi3",
    "title": "Kimi K3 · released files",
    "publisher": "moonshotai",
    "url": "https://huggingface.co/moonshotai/Kimi-K3/tree/f831ab66814297da540d832a5235f8e904f29d06",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "f831ab66814297da540d832a5235f8e904f29d06"
  },
  {
    "id": "bm-license-kimi3",
    "title": "Kimi K3 · license",
    "publisher": "moonshotai",
    "url": "https://huggingface.co/moonshotai/Kimi-K3/blob/f831ab66814297da540d832a5235f8e904f29d06/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "f831ab66814297da540d832a5235f8e904f29d06"
  },
  {
    "id": "bm-card-ultra",
    "title": "mgalkin/ultra_50g · model card",
    "publisher": "mgalkin",
    "url": "https://huggingface.co/mgalkin/ultra_50g/blob/d46107d8415549e7c7386d26903ad11c9a8de4fd/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "d46107d8415549e7c7386d26903ad11c9a8de4fd"
  },
  {
    "id": "bm-weights-ultra",
    "title": "ULTRA 50g · released files",
    "publisher": "mgalkin",
    "url": "https://huggingface.co/mgalkin/ultra_50g/tree/d46107d8415549e7c7386d26903ad11c9a8de4fd",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "d46107d8415549e7c7386d26903ad11c9a8de4fd"
  },
  {
    "id": "bm-license-ultra",
    "title": "ULTRA 50g · license",
    "publisher": "mgalkin",
    "url": "https://huggingface.co/mgalkin/ultra_50g/blob/d46107d8415549e7c7386d26903ad11c9a8de4fd/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "d46107d8415549e7c7386d26903ad11c9a8de4fd"
  },
  {
    "id": "bm-card-ultra3",
    "title": "mgalkin/ultra_3g · model card",
    "publisher": "mgalkin",
    "url": "https://huggingface.co/mgalkin/ultra_3g/blob/bf98f89c4a47f794396fa895eb6940fdb94bfe9c/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "bf98f89c4a47f794396fa895eb6940fdb94bfe9c"
  },
  {
    "id": "bm-weights-ultra3",
    "title": "ULTRA 3g · released files",
    "publisher": "mgalkin",
    "url": "https://huggingface.co/mgalkin/ultra_3g/tree/bf98f89c4a47f794396fa895eb6940fdb94bfe9c",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "bf98f89c4a47f794396fa895eb6940fdb94bfe9c"
  },
  {
    "id": "bm-license-ultra3",
    "title": "ULTRA 3g · license",
    "publisher": "mgalkin",
    "url": "https://huggingface.co/mgalkin/ultra_3g/blob/bf98f89c4a47f794396fa895eb6940fdb94bfe9c/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "bf98f89c4a47f794396fa895eb6940fdb94bfe9c"
  },
  {
    "id": "bm-card-ltx23",
    "title": "Lightricks/LTX-2.3 · model card",
    "publisher": "Lightricks",
    "url": "https://huggingface.co/Lightricks/LTX-2.3/blob/3c6a4e66e5d0a684231950b9c74dd4ded7b6fadc/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "3c6a4e66e5d0a684231950b9c74dd4ded7b6fadc"
  },
  {
    "id": "bm-weights-ltx23",
    "title": "LTX-2.3 · 22B dev · released files",
    "publisher": "Lightricks",
    "url": "https://huggingface.co/Lightricks/LTX-2.3/tree/3c6a4e66e5d0a684231950b9c74dd4ded7b6fadc",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "3c6a4e66e5d0a684231950b9c74dd4ded7b6fadc"
  },
  {
    "id": "bm-license-ltx23",
    "title": "LTX-2.3 · 22B dev · license",
    "publisher": "Lightricks",
    "url": "https://huggingface.co/Lightricks/LTX-2.3/blob/3c6a4e66e5d0a684231950b9c74dd4ded7b6fadc/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "3c6a4e66e5d0a684231950b9c74dd4ded7b6fadc"
  },
  {
    "id": "bm-card-audiomosaic",
    "title": "hanxunh/AudioMosaic-vit-b16-finetune-as2m · model card",
    "publisher": "hanxunh",
    "url": "https://huggingface.co/hanxunh/AudioMosaic-vit-b16-finetune-as2m/blob/1a7f51c115161d2b564cdb97f6f1268c659ffe4e/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "1a7f51c115161d2b564cdb97f6f1268c659ffe4e"
  },
  {
    "id": "bm-weights-audiomosaic",
    "title": "AudioMosaic ViT-B/16 · AudioSet-2M · released files",
    "publisher": "hanxunh",
    "url": "https://huggingface.co/hanxunh/AudioMosaic-vit-b16-finetune-as2m/tree/1a7f51c115161d2b564cdb97f6f1268c659ffe4e",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "1a7f51c115161d2b564cdb97f6f1268c659ffe4e"
  },
  {
    "id": "bm-license-audiomosaic",
    "title": "AudioMosaic ViT-B/16 · AudioSet-2M · license",
    "publisher": "hanxunh",
    "url": "https://huggingface.co/hanxunh/AudioMosaic-vit-b16-finetune-as2m/blob/1a7f51c115161d2b564cdb97f6f1268c659ffe4e/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "1a7f51c115161d2b564cdb97f6f1268c659ffe4e"
  },
  {
    "id": "bm-card-primeramulti",
    "title": "allenai/PRIMERA-multinews · model card",
    "publisher": "allenai",
    "url": "https://huggingface.co/allenai/PRIMERA-multinews/blob/1b507148874734de104f3a5e98a69f384db616fe/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "1b507148874734de104f3a5e98a69f384db616fe"
  },
  {
    "id": "bm-weights-primeramulti",
    "title": "PRIMERA · Multi-News fine-tuned · released files",
    "publisher": "allenai",
    "url": "https://huggingface.co/allenai/PRIMERA-multinews/tree/1b507148874734de104f3a5e98a69f384db616fe",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "1b507148874734de104f3a5e98a69f384db616fe"
  },
  {
    "id": "bm-license-primeramulti",
    "title": "PRIMERA · Multi-News fine-tuned · license",
    "publisher": "allenai",
    "url": "https://huggingface.co/allenai/PRIMERA-multinews/blob/1b507148874734de104f3a5e98a69f384db616fe/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "1b507148874734de104f3a5e98a69f384db616fe"
  },
  {
    "id": "bm-card-primera",
    "title": "allenai/PRIMERA · model card",
    "publisher": "allenai",
    "url": "https://huggingface.co/allenai/PRIMERA/blob/931d08e790f7d2a2293f2e9901d73a6db8449f5c/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "931d08e790f7d2a2293f2e9901d73a6db8449f5c"
  },
  {
    "id": "bm-weights-primera",
    "title": "PRIMERA · zero-shot · released files",
    "publisher": "allenai",
    "url": "https://huggingface.co/allenai/PRIMERA/tree/931d08e790f7d2a2293f2e9901d73a6db8449f5c",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "931d08e790f7d2a2293f2e9901d73a6db8449f5c"
  },
  {
    "id": "bm-license-primera",
    "title": "PRIMERA · zero-shot · license",
    "publisher": "allenai",
    "url": "https://huggingface.co/allenai/PRIMERA/blob/931d08e790f7d2a2293f2e9901d73a6db8449f5c/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "931d08e790f7d2a2293f2e9901d73a6db8449f5c"
  },
  {
    "id": "bm-card-qwenimage21",
    "title": "Qwen/Qwen-Image-2.1 · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen-Image-2.1/blob/d26bb61231c349cf6b7896fa83353113880e1ba3/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "d26bb61231c349cf6b7896fa83353113880e1ba3"
  },
  {
    "id": "bm-weights-qwenimage21",
    "title": "Qwen-Image-2.1 · released files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen-Image-2.1/tree/d26bb61231c349cf6b7896fa83353113880e1ba3",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "d26bb61231c349cf6b7896fa83353113880e1ba3"
  },
  {
    "id": "bm-license-qwenimage21",
    "title": "Qwen-Image-2.1 · license",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen-Image-2.1/blob/d26bb61231c349cf6b7896fa83353113880e1ba3/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "d26bb61231c349cf6b7896fa83353113880e1ba3"
  },
  {
    "id": "bm-card-driftse",
    "title": "LIANGXU123/DriftSE · model card",
    "publisher": "LIANGXU123",
    "url": "https://huggingface.co/LIANGXU123/DriftSE/blob/c668151cbaa5d1355eca7471d336ef8825e95333/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "c668151cbaa5d1355eca7471d336ef8825e95333"
  },
  {
    "id": "bm-weights-driftse",
    "title": "DriftSE · DistilHuBERT · released files",
    "publisher": "LIANGXU123",
    "url": "https://huggingface.co/LIANGXU123/DriftSE/blob/c668151cbaa5d1355eca7471d336ef8825e95333/logs/distillhubert_three_layers_with_z/last.ckpt",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "c668151cbaa5d1355eca7471d336ef8825e95333"
  },
  {
    "id": "bm-license-driftse",
    "title": "DriftSE · DistilHuBERT · license",
    "publisher": "LIANGXU123",
    "url": "https://huggingface.co/LIANGXU123/DriftSE/blob/c668151cbaa5d1355eca7471d336ef8825e95333/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "c668151cbaa5d1355eca7471d336ef8825e95333"
  },
  {
    "id": "bm-weights-driftse-aux",
    "title": "DriftSE† · DistilHuBERT · released files",
    "publisher": "LIANGXU123",
    "url": "https://huggingface.co/LIANGXU123/DriftSE/blob/c668151cbaa5d1355eca7471d336ef8825e95333/logs/distillhubert_three_layers_pesq_sisdr_ccmse_with_z/last.ckpt",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "c668151cbaa5d1355eca7471d336ef8825e95333"
  },
  {
    "id": "bm-license-driftse-aux",
    "title": "DriftSE† · DistilHuBERT · license",
    "publisher": "LIANGXU123",
    "url": "https://huggingface.co/LIANGXU123/DriftSE/blob/c668151cbaa5d1355eca7471d336ef8825e95333/README.md",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "c668151cbaa5d1355eca7471d336ef8825e95333"
  },
  {
    "id": "bm-gliner25",
    "title": "GLiNER2.5 evaluation tables",
    "publisher": "Fastino",
    "url": "https://fastino.ai/blog/gliner2-5-span-free-information-extraction",
    "kind": "benchmark",
    "observedAt": "2026-10-21"
  },
  {
    "id": "bm-coref",
    "title": "F-coref · Table 1",
    "publisher": "Otmazgin et al.",
    "url": "https://arxiv.org/html/2209.04280v4",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "bm-coedit",
    "title": "CoEdIT · Table 2",
    "publisher": "Raheja et al.",
    "url": "https://arxiv.org/html/2305.09857v2",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "bm-hymt",
    "title": "Hy-MT2 · Table 2",
    "publisher": "Tencent",
    "url": "https://arxiv.org/html/2605.22064v1",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "bm-mask",
    "title": "Mask2Former · ADE20K semantic segmentation",
    "publisher": "Meta",
    "url": "https://github.com/facebookresearch/Mask2Former/blob/9b0651c6c1d5b3af2e6da0589b719c514ec0d69a/MODEL_ZOO.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "9b0651c6c1d5b3af2e6da0589b719c514ec0d69a"
  },
  {
    "id": "bm-pose",
    "title": "ViTPose++ · COCO validation results",
    "publisher": "ViTAE authors",
    "url": "https://github.com/ViTAE-Transformer/ViTPose/blob/c050ed29112da7704797cc1a65af0234b525010d/README.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "c050ed29112da7704797cc1a65af0234b525010d"
  },
  {
    "id": "bm-mage",
    "title": "Mage-Flow · generation and editing comparisons",
    "publisher": "Microsoft",
    "url": "https://github.com/microsoft/Mage/blob/76bec2bb3818863f470de7e867c2dc7f1d0bfd83/mage_flow/README.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "76bec2bb3818863f470de7e867c2dc7f1d0bfd83"
  },
  {
    "id": "bm-moebius",
    "title": "Moebius · Table 1",
    "publisher": "Moebius authors",
    "url": "https://arxiv.org/html/2606.19195v1",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "bm-kumo",
    "title": "Kumo Tabular · TALENT results",
    "publisher": "NVIDIA",
    "url": "https://huggingface.co/blog/nvidia/kumo-tabular",
    "kind": "benchmark",
    "observedAt": "2026-10-21"
  },
  {
    "id": "bm-longcat",
    "title": "LongCat-Flash-Prover technical report",
    "publisher": "Meituan",
    "url": "https://arxiv.org/html/2603.21065v1",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "bm-marigold",
    "title": "Marigold V2 · Table 1",
    "publisher": "HUAWEI Bayer Lab / EPFL",
    "url": "https://arxiv.org/html/2609.08084v1",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "bm-card-mqr",
    "title": "ForwardAILabs/MQR-A1 · model card",
    "publisher": "ForwardAILabs",
    "url": "https://huggingface.co/ForwardAILabs/MQR-A1/blob/6f94e962e4ee86485935648fa2626e8a4afc6b76/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "6f94e962e4ee86485935648fa2626e8a4afc6b76"
  },
  {
    "id": "bm-card-qwen38",
    "title": "Qwen/Qwen3.8-27B · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0"
  },
  {
    "id": "bm-card-deepseek41",
    "title": "deepseek-ai/DeepSeek-V4.1-Flash-1017 · model card",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/blob/1bae0e1088993b9b82de08f59de5be5a34e42170/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "1bae0e1088993b9b82de08f59de5be5a34e42170"
  },
  {
    "id": "bm-card-glm53",
    "title": "zai-org/GLM-5.3 · model card",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-5.3/blob/ba32f8c19c8738e2c57c71798c601d477a7bf844/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "ba32f8c19c8738e2c57c71798c601d477a7bf844"
  },
  {
    "id": "bm-card-embedding",
    "title": "Qwen/Qwen3-Embedding-8B · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Embedding-8B/blob/1d8ad4ca9b3dd8059ad90a75d4983776a23d44af/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "1d8ad4ca9b3dd8059ad90a75d4983776a23d44af"
  },
  {
    "id": "bm-card-reranker",
    "title": "Qwen/Qwen3-Reranker-8B · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Reranker-8B/blob/77d193c791ed757ca307ee72715aa132723da912/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "77d193c791ed757ca307ee72715aa132723da912"
  },
  {
    "id": "bm-card-tts",
    "title": "Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice/blob/0c0e3051f131929182e2c023b9537f8b1c68adfe/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "0c0e3051f131929182e2c023b9537f8b1c68adfe"
  },
  {
    "id": "bm-card-diarization",
    "title": "pyannote/speaker-diarization-community-1 · model card",
    "publisher": "pyannote",
    "url": "https://huggingface.co/pyannote/speaker-diarization-community-1/blob/3533c8cf8e369892e6b79ff1bf80f7b0286a54ee/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "3533c8cf8e369892e6b79ff1bf80f7b0286a54ee"
  },
  {
    "id": "bm-card-keyword",
    "title": "superb/wav2vec2-base-superb-ks · model card",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/wav2vec2-base-superb-ks/blob/372e0486cd83e6f0c05c20a27262e9ca09450d24/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "372e0486cd83e6f0c05c20a27262e9ca09450d24"
  },
  {
    "id": "bm-card-emotion",
    "title": "superb/hubert-large-superb-er · model card",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/hubert-large-superb-er/blob/ef1a2ebfd7cfc424dc7f0fbcdc406e8b794d63bb/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "ef1a2ebfd7cfc424dc7f0fbcdc406e8b794d63bb"
  },
  {
    "id": "bm-card-separation",
    "title": "speechbrain/sepformer-whamr · model card",
    "publisher": "speechbrain",
    "url": "https://huggingface.co/speechbrain/sepformer-whamr/blob/9950fd8055b38679d2af5bef2366b5dba600ec66/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "9950fd8055b38679d2af5bef2366b5dba600ec66"
  },
  {
    "id": "bm-card-r1",
    "title": "deepseek-ai/DeepSeek-R1-0528 · model card",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1-0528/blob/4236a6af538feda4548eca9ab308586007567f52/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "4236a6af538feda4548eca9ab308586007567f52"
  },
  {
    "id": "br2-siglip",
    "title": "SigLIP 2 official model zoo",
    "publisher": "Google Research",
    "url": "https://github.com/google-research/big_vision/blob/0127fb6b337ee2a27bf4e54dea79cff176527356/big_vision/configs/proj/image_text/README_siglip2.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "0127fb6b337ee2a27bf4e54dea79cff176527356"
  },
  {
    "id": "br2-siglip2-giant-card",
    "title": "SigLIP 2 g-opt/16 · 384 · model card",
    "publisher": "google",
    "url": "https://huggingface.co/google/siglip2-giant-opt-patch16-384/blob/a713301b217d38485fb2204c808367d10bc3cc40/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "a713301b217d38485fb2204c808367d10bc3cc40"
  },
  {
    "id": "br2-siglip2-giant-weights",
    "title": "SigLIP 2 g-opt/16 · 384 · released weights",
    "publisher": "google",
    "url": "https://huggingface.co/google/siglip2-giant-opt-patch16-384/tree/a713301b217d38485fb2204c808367d10bc3cc40",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "a713301b217d38485fb2204c808367d10bc3cc40"
  },
  {
    "id": "br2-rfdetr",
    "title": "RF-DETR official COCO detection and segmentation tables",
    "publisher": "Roboflow",
    "url": "https://github.com/roboflow/rf-detr/blob/5b22dfc0940697ce1abdfa681a5f7392b3eddbfb/README.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "5b22dfc0940697ce1abdfa681a5f7392b3eddbfb"
  },
  {
    "id": "br2-rfdetr-m-card",
    "title": "RF-DETR Medium · model card",
    "publisher": "Roboflow",
    "url": "https://huggingface.co/Roboflow/rf-detr-medium/blob/1b5b672408f86dd38e05dd3cf3f2e0834e545a59/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "1b5b672408f86dd38e05dd3cf3f2e0834e545a59"
  },
  {
    "id": "br2-rfdetr-m-weights",
    "title": "RF-DETR Medium · released weights",
    "publisher": "Roboflow",
    "url": "https://huggingface.co/Roboflow/rf-detr-medium/tree/1b5b672408f86dd38e05dd3cf3f2e0834e545a59",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "1b5b672408f86dd38e05dd3cf3f2e0834e545a59"
  },
  {
    "id": "br2-rfdetr-l-card",
    "title": "RF-DETR Large · model card",
    "publisher": "Roboflow",
    "url": "https://huggingface.co/Roboflow/rf-detr-large/blob/f62f7dd5252b61097cbace33886045816dadbde9/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "f62f7dd5252b61097cbace33886045816dadbde9"
  },
  {
    "id": "br2-rfdetr-l-weights",
    "title": "RF-DETR Large · released weights",
    "publisher": "Roboflow",
    "url": "https://huggingface.co/Roboflow/rf-detr-large/tree/f62f7dd5252b61097cbace33886045816dadbde9",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "f62f7dd5252b61097cbace33886045816dadbde9"
  },
  {
    "id": "br2-rfdetr-seg-l-card",
    "title": "RF-DETR Seg Large · model card",
    "publisher": "Roboflow",
    "url": "https://huggingface.co/Roboflow/rf-detr-seg-large/blob/ae012d516cf1fedb21df93fb384debe15df68f29/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "ae012d516cf1fedb21df93fb384debe15df68f29"
  },
  {
    "id": "br2-rfdetr-seg-l-weights",
    "title": "RF-DETR Seg Large · released weights",
    "publisher": "Roboflow",
    "url": "https://huggingface.co/Roboflow/rf-detr-seg-large/tree/ae012d516cf1fedb21df93fb384debe15df68f29",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "ae012d516cf1fedb21df93fb384debe15df68f29"
  },
  {
    "id": "br2-rfdetr-seg-2xl-card",
    "title": "RF-DETR Seg 2XL · model card",
    "publisher": "Roboflow",
    "url": "https://huggingface.co/Roboflow/rf-detr-seg-xxlarge/blob/4a183fe0213deba48a862e16d9e8a69b176cf3df/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "4a183fe0213deba48a862e16d9e8a69b176cf3df"
  },
  {
    "id": "br2-rfdetr-seg-2xl-weights",
    "title": "RF-DETR Seg 2XL · released weights",
    "publisher": "Roboflow",
    "url": "https://huggingface.co/Roboflow/rf-detr-seg-xxlarge/tree/4a183fe0213deba48a862e16d9e8a69b176cf3df",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "4a183fe0213deba48a862e16d9e8a69b176cf3df"
  },
  {
    "id": "br2-florence-base-ft-card",
    "title": "Florence-2 base-ft · model card",
    "publisher": "microsoft",
    "url": "https://huggingface.co/microsoft/Florence-2-base-ft/blob/f6c1a25888ffc1d945ee8a1a77ac833c7303d46e/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "f6c1a25888ffc1d945ee8a1a77ac833c7303d46e"
  },
  {
    "id": "br2-florence-base-ft-weights",
    "title": "Florence-2 base-ft · released weights",
    "publisher": "microsoft",
    "url": "https://huggingface.co/microsoft/Florence-2-base-ft/tree/f6c1a25888ffc1d945ee8a1a77ac833c7303d46e",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "f6c1a25888ffc1d945ee8a1a77ac833c7303d46e"
  },
  {
    "id": "br2-florence-large-ft-card",
    "title": "Florence-2 large-ft · model card",
    "publisher": "microsoft",
    "url": "https://huggingface.co/microsoft/Florence-2-large-ft/blob/4a12a2b54b7016a48a22037fbd62da90cd566f2a/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "4a12a2b54b7016a48a22037fbd62da90cd566f2a"
  },
  {
    "id": "br2-florence-large-ft-weights",
    "title": "Florence-2 large-ft · released weights",
    "publisher": "microsoft",
    "url": "https://huggingface.co/microsoft/Florence-2-large-ft/tree/4a12a2b54b7016a48a22037fbd62da90cd566f2a",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "4a12a2b54b7016a48a22037fbd62da90cd566f2a"
  },
  {
    "id": "br2-qwen25vl72-card",
    "title": "Qwen2.5-VL-72B-Instruct · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen2.5-VL-72B-Instruct/blob/89c86200743eec961a297729e7990e8f2ddbc4c5/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "89c86200743eec961a297729e7990e8f2ddbc4c5"
  },
  {
    "id": "br2-qwen25vl72-weights",
    "title": "Qwen2.5-VL-72B-Instruct · released weights",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen2.5-VL-72B-Instruct/tree/89c86200743eec961a297729e7990e8f2ddbc4c5",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "89c86200743eec961a297729e7990e8f2ddbc4c5"
  },
  {
    "id": "br2-qwen2vl72-card",
    "title": "Qwen2-VL-72B-Instruct · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct/blob/2ac26c967836fbb5729c709ad8f8b5548e1f88aa/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "2ac26c967836fbb5729c709ad8f8b5548e1f88aa"
  },
  {
    "id": "br2-qwen2vl72-weights",
    "title": "Qwen2-VL-72B-Instruct · released weights",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct/tree/2ac26c967836fbb5729c709ad8f8b5548e1f88aa",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "2ac26c967836fbb5729c709ad8f8b5548e1f88aa"
  },
  {
    "id": "br2-codet5-paper",
    "title": "CodeT5 · EMNLP 2021 results",
    "publisher": "Salesforce Research",
    "url": "https://aclanthology.org/2021.emnlp-main.685/",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-codet5-release",
    "title": "CodeT5 task-specific release and replication guide",
    "publisher": "Salesforce Research",
    "url": "https://github.com/salesforce/CodeT5/blob/7de7f696c7fb1c7551406f3079e8fed500673199/CodeT5/README.md",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "7de7f696c7fb1c7551406f3079e8fed500673199"
  },
  {
    "id": "br2-ct-clone-card",
    "title": "CodeT5-base · clone detection · model card",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base-codexglue-clone/blob/b0ee6b1fd48012f6074964bc772342cfa3f42128/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "b0ee6b1fd48012f6074964bc772342cfa3f42128"
  },
  {
    "id": "br2-ct-clone-weights",
    "title": "CodeT5-base · clone detection · released weights",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base-codexglue-clone/tree/b0ee6b1fd48012f6074964bc772342cfa3f42128",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "b0ee6b1fd48012f6074964bc772342cfa3f42128"
  },
  {
    "id": "br2-ct-defect-card",
    "title": "CodeT5-base · defect detection · model card",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base-codexglue-defect/blob/8fc5f350c69bab8d30b144d5fda12e6d60915c8a/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "8fc5f350c69bab8d30b144d5fda12e6d60915c8a"
  },
  {
    "id": "br2-ct-defect-weights",
    "title": "CodeT5-base · defect detection · released weights",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base-codexglue-defect/tree/8fc5f350c69bab8d30b144d5fda12e6d60915c8a",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "8fc5f350c69bab8d30b144d5fda12e6d60915c8a"
  },
  {
    "id": "br2-ct-cs-java-card",
    "title": "CodeT5-base · C# to Java · model card",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base-codexglue-translate-cs-java/blob/c2017eaf9cf78fd7145629b1674d2a4e67cfecd1/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "c2017eaf9cf78fd7145629b1674d2a4e67cfecd1"
  },
  {
    "id": "br2-ct-cs-java-weights",
    "title": "CodeT5-base · C# to Java · released weights",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base-codexglue-translate-cs-java/tree/c2017eaf9cf78fd7145629b1674d2a4e67cfecd1",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "c2017eaf9cf78fd7145629b1674d2a4e67cfecd1"
  },
  {
    "id": "br2-ct-java-cs-card",
    "title": "CodeT5-base · Java to C# · model card",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base-codexglue-translate-java-cs/blob/7d9b9acfa961a27b45e9d4b5e301b2f378fc245d/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "7d9b9acfa961a27b45e9d4b5e301b2f378fc245d"
  },
  {
    "id": "br2-ct-java-cs-weights",
    "title": "CodeT5-base · Java to C# · released weights",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base-codexglue-translate-java-cs/tree/7d9b9acfa961a27b45e9d4b5e301b2f378fc245d",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "7d9b9acfa961a27b45e9d4b5e301b2f378fc245d"
  },
  {
    "id": "br2-ct-sum-py-card",
    "title": "CodeT5-base · Python summarization · model card",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base-codexglue-sum-python/blob/a24de036787ca6acb85b82fb14c2bc6d70118b72/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "a24de036787ca6acb85b82fb14c2bc6d70118b72"
  },
  {
    "id": "br2-ct-sum-py-weights",
    "title": "CodeT5-base · Python summarization · released weights",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base-codexglue-sum-python/tree/a24de036787ca6acb85b82fb14c2bc6d70118b72",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "a24de036787ca6acb85b82fb14c2bc6d70118b72"
  },
  {
    "id": "br2-ct-multi-sum-card",
    "title": "CodeT5-base · multi-language summarization · model card",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base-multi-sum/blob/37cf4c014106a34663da1008855a6d07affae042/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "37cf4c014106a34663da1008855a6d07affae042"
  },
  {
    "id": "br2-ct-multi-sum-weights",
    "title": "CodeT5-base · multi-language summarization · released weights",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base-multi-sum/tree/37cf4c014106a34663da1008855a6d07affae042",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "37cf4c014106a34663da1008855a6d07affae042"
  },
  {
    "id": "br2-vbench-live",
    "title": "VBench live leaderboard · T2V and I2V",
    "publisher": "VBench Team",
    "url": "https://huggingface.co/spaces/Vchitect/VBench_Leaderboard",
    "kind": "benchmark",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-wan22-t2v-card",
    "title": "Wan2.2-T2V-A14B · model card",
    "publisher": "Wan-AI",
    "url": "https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B/blob/c8c270b13ee05bfa474194ac9fb07a5868a97cea/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "c8c270b13ee05bfa474194ac9fb07a5868a97cea"
  },
  {
    "id": "br2-wan22-t2v-weights",
    "title": "Wan2.2-T2V-A14B · released weights",
    "publisher": "Wan-AI",
    "url": "https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B/tree/c8c270b13ee05bfa474194ac9fb07a5868a97cea",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "c8c270b13ee05bfa474194ac9fb07a5868a97cea"
  },
  {
    "id": "br2-wan21-t2v14-card",
    "title": "Wan2.1-T2V-14B · model card",
    "publisher": "Wan-AI",
    "url": "https://huggingface.co/Wan-AI/Wan2.1-T2V-14B/blob/a064a6c71f5be440641209c07bf2a5ce7a2ff5e4/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "a064a6c71f5be440641209c07bf2a5ce7a2ff5e4"
  },
  {
    "id": "br2-wan21-t2v14-weights",
    "title": "Wan2.1-T2V-14B · released weights",
    "publisher": "Wan-AI",
    "url": "https://huggingface.co/Wan-AI/Wan2.1-T2V-14B/tree/a064a6c71f5be440641209c07bf2a5ce7a2ff5e4",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "a064a6c71f5be440641209c07bf2a5ce7a2ff5e4"
  },
  {
    "id": "br2-wan22-i2v-card",
    "title": "Wan2.2-I2V-A14B · model card",
    "publisher": "Wan-AI",
    "url": "https://huggingface.co/Wan-AI/Wan2.2-I2V-A14B/blob/206a9ee1b7bfaaf8f7e4d81335650533490646a3/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "206a9ee1b7bfaaf8f7e4d81335650533490646a3"
  },
  {
    "id": "br2-wan22-i2v-weights",
    "title": "Wan2.2-I2V-A14B · released weights",
    "publisher": "Wan-AI",
    "url": "https://huggingface.co/Wan-AI/Wan2.2-I2V-A14B/tree/206a9ee1b7bfaaf8f7e4d81335650533490646a3",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "206a9ee1b7bfaaf8f7e4d81335650533490646a3"
  },
  {
    "id": "br2-videomaev2",
    "title": "MMAction2 · VideoMAE V2 tested checkpoints",
    "publisher": "OpenMMLab",
    "url": "https://github.com/open-mmlab/mmaction2/blob/a5a167dff2399e2d182a60332325f9c0d4663517/configs/recognition/videomaev2/README.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "a5a167dff2399e2d182a60332325f9c0d4663517"
  },
  {
    "id": "br2-videomaev2-s-weights",
    "title": "VideoMAE V2 Small · MMAction2 · released artifact",
    "publisher": "VideoMAE V2 Small",
    "url": "https://github.com/open-mmlab/mmaction2/blob/a5a167dff2399e2d182a60332325f9c0d4663517/configs/recognition/videomaev2/README.md",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "a5a167dff2399e2d182a60332325f9c0d4663517"
  },
  {
    "id": "br2-videomaev2-b-weights",
    "title": "VideoMAE V2 Base · MMAction2 · released artifact",
    "publisher": "VideoMAE V2 Base",
    "url": "https://github.com/open-mmlab/mmaction2/blob/a5a167dff2399e2d182a60332325f9c0d4663517/configs/recognition/videomaev2/README.md",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "a5a167dff2399e2d182a60332325f9c0d4663517"
  },
  {
    "id": "br2-shape-paper",
    "title": "Shap-E · text-conditional COCO evaluation",
    "publisher": "OpenAI",
    "url": "https://arxiv.org/abs/2305.02463",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-hy3d-bench",
    "title": "HY3D-Bench evaluation scope",
    "publisher": "Tencent Hunyuan",
    "url": "https://github.com/Tencent-Hunyuan/HY3D-Bench",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-udpipe",
    "title": "UDPipe 2 · UD 2.17 official performance",
    "publisher": "Charles University UFAL",
    "url": "https://ufal.mff.cuni.cz/udpipe/2/models#universal_dependencies_217_models",
    "kind": "benchmark",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-udpipe-ewt-weights",
    "title": "UDPipe 2 · English EWT 2.17-251125 · released artifact",
    "publisher": "UDPipe 2",
    "url": "https://hdl.handle.net/11234/1-6046",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "releaseId": "11234/1-6046"
  },
  {
    "id": "br2-stanza-performance",
    "title": "Stanza performance by treebank version",
    "publisher": "Stanford NLP",
    "url": "https://stanfordnlp.github.io/stanza/performance.html",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-compact-re",
    "title": "Compact relation extraction · released artifact and evaluation",
    "publisher": "Christou and Tsoumakas",
    "url": "https://github.com/DespinaChristou/compact-relex/blob/00b9d2c24632b5c183d7d64e7648de4497074e92/README.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "00b9d2c24632b5c183d7d64e7648de4497074e92"
  },
  {
    "id": "br2-compact-re05-card",
    "title": "Qwen2.5-0.5B · RE GenTune 2-shot adapter · model card",
    "publisher": "Despina",
    "url": "https://huggingface.co/Despina/Qwen2.5-0.5B-Instruct-re_gentune-2-shot/blob/5b9c14e6730ac4e65547fa6025c452670d9e53a5/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "5b9c14e6730ac4e65547fa6025c452670d9e53a5"
  },
  {
    "id": "br2-compact-re05-weights",
    "title": "Qwen2.5-0.5B · RE GenTune 2-shot adapter · released weights",
    "publisher": "Despina",
    "url": "https://huggingface.co/Despina/Qwen2.5-0.5B-Instruct-re_gentune-2-shot/tree/5b9c14e6730ac4e65547fa6025c452670d9e53a5",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "5b9c14e6730ac4e65547fa6025c452670d9e53a5"
  },
  {
    "id": "br2-compact-paper",
    "title": "Compact RE · full evaluation and limits",
    "publisher": "Christou and Tsoumakas",
    "url": "https://arxiv.org/abs/2606.22606",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-thinkqe",
    "title": "ThinkQE · published BRIGHT evaluation",
    "publisher": "Lei, Shen and Yates",
    "url": "https://arxiv.org/html/2506.09260v1",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-r1-qwen14-card",
    "title": "DeepSeek-R1-Distill-Qwen-14B · ThinkQE · model card",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B/blob/1df8507178afcc1bef68cd8c393f61a886323761/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "1df8507178afcc1bef68cd8c393f61a886323761"
  },
  {
    "id": "br2-r1-qwen14-weights",
    "title": "DeepSeek-R1-Distill-Qwen-14B · ThinkQE · released weights",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B/tree/1df8507178afcc1bef68cd8c393f61a886323761",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "1df8507178afcc1bef68cd8c393f61a886323761"
  },
  {
    "id": "br2-thinkqe-code",
    "title": "ThinkQE retrieval and expansion implementation",
    "publisher": "Lei, Shen and Yates",
    "url": "https://github.com/Yibin-Lei/Think_QE",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-sri-paper",
    "title": "SRI code infilling · 2026 evaluation",
    "publisher": "SRI-Coder authors",
    "url": "https://arxiv.org/html/2601.13384v1",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-qwen25coder32base-card",
    "title": "Qwen2.5-Coder-32B Base · model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen2.5-Coder-32B/blob/2e12b5f7bc878d424d222e224ed40aee564ec45f/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "2e12b5f7bc878d424d222e224ed40aee564ec45f"
  },
  {
    "id": "br2-qwen25coder32base-weights",
    "title": "Qwen2.5-Coder-32B Base · released weights",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen2.5-Coder-32B/tree/2e12b5f7bc878d424d222e224ed40aee564ec45f",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "2e12b5f7bc878d424d222e224ed40aee564ec45f"
  },
  {
    "id": "br2-deepseekv3base-card",
    "title": "DeepSeek-V3 Base · model card",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V3-Base/blob/afb92e1fa402c2be2a9eb085312bb02e0384d6c7/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "afb92e1fa402c2be2a9eb085312bb02e0384d6c7"
  },
  {
    "id": "br2-deepseekv3base-weights",
    "title": "DeepSeek-V3 Base · released weights",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V3-Base/tree/afb92e1fa402c2be2a9eb085312bb02e0384d6c7",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "afb92e1fa402c2be2a9eb085312bb02e0384d6c7"
  },
  {
    "id": "br2-qmsum",
    "title": "QMSum · frozen scorer and released checkpoints",
    "publisher": "Ertas AI",
    "url": "https://github.com/ErtasAI/qmsum-retrieved-span-training/blob/3c3dcdb77cd9c2a55d1962adfc770f4b465ad2f7/README.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "3c3dcdb77cd9c2a55d1962adfc770f4b465ad2f7"
  },
  {
    "id": "br2-segenc-spans-card",
    "title": "SegEnc 406M · span-trained · model card",
    "publisher": "ErtasAI",
    "url": "https://huggingface.co/ErtasAI/qmsum-summarizer-segenc-406m-spans/blob/26abdfc1b0373c21b54dfd5584eb432e9e9d0a40/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "26abdfc1b0373c21b54dfd5584eb432e9e9d0a40"
  },
  {
    "id": "br2-segenc-spans-weights",
    "title": "SegEnc 406M · span-trained · released weights",
    "publisher": "ErtasAI",
    "url": "https://huggingface.co/ErtasAI/qmsum-summarizer-segenc-406m-spans/tree/26abdfc1b0373c21b54dfd5584eb432e9e9d0a40",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "26abdfc1b0373c21b54dfd5584eb432e9e9d0a40"
  },
  {
    "id": "br2-segenc-stock-card",
    "title": "Socratic SegEnc 406M · ported inference · model card",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/socratic-pretraining-qmsum/blob/d127cbc54b974a58e8bd75935f2863d136e0bc3d/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "d127cbc54b974a58e8bd75935f2863d136e0bc3d"
  },
  {
    "id": "br2-segenc-stock-weights",
    "title": "Socratic SegEnc 406M · ported inference · released weights",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/socratic-pretraining-qmsum/tree/d127cbc54b974a58e8bd75935f2863d136e0bc3d",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "d127cbc54b974a58e8bd75935f2863d136e0bc3d"
  },
  {
    "id": "br2-sid-hubert-card",
    "title": "HuBERT Base · SUPERB speaker ID · model card",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/hubert-base-superb-sid/blob/fd0c9962f8a01e274b9a7996e007775293d1d77e/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "fd0c9962f8a01e274b9a7996e007775293d1d77e"
  },
  {
    "id": "br2-sid-hubert-weights",
    "title": "HuBERT Base · SUPERB speaker ID · released weights",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/hubert-base-superb-sid/tree/fd0c9962f8a01e274b9a7996e007775293d1d77e",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "fd0c9962f8a01e274b9a7996e007775293d1d77e"
  },
  {
    "id": "br2-sid-wav2vec-card",
    "title": "wav2vec 2.0 Base · SUPERB speaker ID · model card",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/wav2vec2-base-superb-sid/blob/73365f1ed139a3d88fb8a72b98ecac3a38a1fa0e/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "73365f1ed139a3d88fb8a72b98ecac3a38a1fa0e"
  },
  {
    "id": "br2-sid-wav2vec-weights",
    "title": "wav2vec 2.0 Base · SUPERB speaker ID · released weights",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/wav2vec2-base-superb-sid/tree/73365f1ed139a3d88fb8a72b98ecac3a38a1fa0e",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "73365f1ed139a3d88fb8a72b98ecac3a38a1fa0e"
  },
  {
    "id": "br2-seamless-v1-card",
    "title": "SeamlessM4T Large v1 · model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/seamless-m4t-large/blob/be77b87c4966c795d4793c1806f6c6dcdca30b49/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "be77b87c4966c795d4793c1806f6c6dcdca30b49"
  },
  {
    "id": "br2-seamless-v1-weights",
    "title": "SeamlessM4T Large v1 · released weights",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/seamless-m4t-large/tree/be77b87c4966c795d4793c1806f6c6dcdca30b49",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "be77b87c4966c795d4793c1806f6c6dcdca30b49"
  },
  {
    "id": "br2-seamless-v2-metrics",
    "title": "SeamlessM4T v2 · official evaluation CSV bundle",
    "publisher": "Meta AI",
    "url": "https://dl.fbaipublicfiles.com/seamless/metrics/seamlessM4T_large_v2.zip",
    "kind": "benchmark",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-seamless-v1-metrics",
    "title": "SeamlessM4T v1 · official evaluation CSV bundle",
    "publisher": "Meta AI",
    "url": "https://dl.fbaipublicfiles.com/seamless/metrics/seamlessM4T_large.zip",
    "kind": "benchmark",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-seed-eval",
    "title": "Seed-VC · objective evaluation",
    "publisher": "Seed-VC authors",
    "url": "https://github.com/Plachtaa/seed-vc/blob/51383efd921027683c89e5348211d93ff12ac2a8/EVAL.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "51383efd921027683c89e5348211d93ff12ac2a8"
  },
  {
    "id": "br2-seed-eval-code",
    "title": "Seed-VC evaluation code at result publication",
    "publisher": "Seed-VC authors",
    "url": "https://github.com/Plachtaa/seed-vc/blob/904a65b673146f6b1d8343c2674493b084cd4de0/eval.py",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "904a65b673146f6b1d8343c2674493b084cd4de0"
  },
  {
    "id": "br2-seedvc-2024-weights",
    "title": "Seed-VC · 2024 Whisper-small checkpoint · released weights",
    "publisher": "Plachta",
    "url": "https://huggingface.co/Plachta/Seed-VC/blob/257283f9f41585055e8f858fba4fd044e5caed6e/DiT_seed_v2_uvit_whisper_small_wavenet_bigvgan_pruned.pth",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "257283f9f41585055e8f858fba4fd044e5caed6e"
  },
  {
    "id": "br2-tangoflux",
    "title": "TangoFlux · objective audio generation evaluation",
    "publisher": "Declare Lab",
    "url": "https://github.com/declare-lab/TangoFlux/blob/164420faa2b3f8a28bb013ccde7006422a616fc7/README.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "164420faa2b3f8a28bb013ccde7006422a616fc7"
  },
  {
    "id": "br2-tangoflux-card",
    "title": "TangoFlux · CRPO · model card",
    "publisher": "declare-lab",
    "url": "https://huggingface.co/declare-lab/TangoFlux/blob/367005e963cb3a9fb2e03a46104d7de23e34ceea/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "367005e963cb3a9fb2e03a46104d7de23e34ceea"
  },
  {
    "id": "br2-tangoflux-weights",
    "title": "TangoFlux · CRPO · released weights",
    "publisher": "declare-lab",
    "url": "https://huggingface.co/declare-lab/TangoFlux/tree/367005e963cb3a9fb2e03a46104d7de23e34ceea",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "367005e963cb3a9fb2e03a46104d7de23e34ceea"
  },
  {
    "id": "br2-tango2-card",
    "title": "Tango 2 · model card",
    "publisher": "declare-lab",
    "url": "https://huggingface.co/declare-lab/tango2/blob/86d7260a578b8a51218d26f1ba4e8398eaac9761/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "86d7260a578b8a51218d26f1ba4e8398eaac9761"
  },
  {
    "id": "br2-tango2-weights",
    "title": "Tango 2 · released weights",
    "publisher": "declare-lab",
    "url": "https://huggingface.co/declare-lab/tango2/tree/86d7260a578b8a51218d26f1ba4e8398eaac9761",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "86d7260a578b8a51218d26f1ba4e8398eaac9761"
  },
  {
    "id": "br2-audioldm2-l-card",
    "title": "AudioLDM 2 Large · model card",
    "publisher": "cvssp",
    "url": "https://huggingface.co/cvssp/audioldm2-large/blob/4b0b875a9e0c5305dfc917da808584e50e1c7ed4/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "4b0b875a9e0c5305dfc917da808584e50e1c7ed4"
  },
  {
    "id": "br2-audioldm2-l-weights",
    "title": "AudioLDM 2 Large · released weights",
    "publisher": "cvssp",
    "url": "https://huggingface.co/cvssp/audioldm2-large/tree/4b0b875a9e0c5305dfc917da808584e50e1c7ed4",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "4b0b875a9e0c5305dfc917da808584e50e1c7ed4"
  },
  {
    "id": "br2-tangoflux-paper",
    "title": "TangoFlux · evaluation data and protocol",
    "publisher": "Declare Lab",
    "url": "https://arxiv.org/html/2412.21037v1",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-ace15-paper",
    "title": "ACE-Step 1.5 · objective music evaluation",
    "publisher": "ACE-Step authors",
    "url": "https://arxiv.org/html/2602.00744v1",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-p5-eval",
    "title": "P5 · recorded Beauty evaluation outputs",
    "publisher": "P5 authors",
    "url": "https://github.com/jeykigung/P5/blob/1fa28ba7bb3946da94677013cc88e392cfc760ca/notebooks/test_beauty_small.ipynb",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "1fa28ba7bb3946da94677013cc88e392cfc760ca"
  },
  {
    "id": "br2-matrixformer",
    "title": "MatrixFormer+ · frozen October 2026 results",
    "publisher": "TabImpute authors",
    "url": "https://github.com/jacobf18/tabular/blob/2cf54ac47dbcc1154b35e875b527ed0c42a9f416/mcpfn/MATRIXFORMER_PLUS_RESULTS.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "2cf54ac47dbcc1154b35e875b527ed0c42a9f416"
  },
  {
    "id": "br2-matrixformer-card",
    "title": "MatrixFormer · general expert · model card",
    "publisher": "Tabimpute",
    "url": "https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "6fabde6aa21ded04f818b63631f1c2155260ebdc"
  },
  {
    "id": "br2-matrixformer-weights",
    "title": "MatrixFormer · general expert · released weights",
    "publisher": "Tabimpute",
    "url": "https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/matrixformer/impute/model.safetensors",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "6fabde6aa21ded04f818b63631f1c2155260ebdc"
  },
  {
    "id": "br2-matrixformer-recsys-card",
    "title": "MatrixFormer · recommender specialist · model card",
    "publisher": "Tabimpute",
    "url": "https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "6fabde6aa21ded04f818b63631f1c2155260ebdc"
  },
  {
    "id": "br2-matrixformer-recsys-weights",
    "title": "MatrixFormer · recommender specialist · released weights",
    "publisher": "Tabimpute",
    "url": "https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/matrixformer/recsys/model.safetensors",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "6fabde6aa21ded04f818b63631f1c2155260ebdc"
  },
  {
    "id": "br2-matrixformer-plus-card",
    "title": "MatrixFormer+ · two-expert blend · model card",
    "publisher": "Tabimpute",
    "url": "https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "6fabde6aa21ded04f818b63631f1c2155260ebdc"
  },
  {
    "id": "br2-matrixformer-plus-weights",
    "title": "MatrixFormer+ · two-expert blend · released weights",
    "publisher": "Tabimpute",
    "url": "https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/matrixformer",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "6fabde6aa21ded04f818b63631f1c2155260ebdc"
  },
  {
    "id": "br2-graphany",
    "title": "GraphAny · released seed-0 checkpoints",
    "publisher": "GraphAny authors",
    "url": "https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/README.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "02c810e9977e89bda66f43ad4e206937af37cf26"
  },
  {
    "id": "br2-graphany-cora-weights",
    "title": "GraphAny · Cora · released artifact",
    "publisher": "GraphAny",
    "url": "https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/checkpoints/graph_any_cora.pt",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "02c810e9977e89bda66f43ad4e206937af37cf26"
  },
  {
    "id": "br2-graphany-product-weights",
    "title": "GraphAny · Product · released artifact",
    "publisher": "GraphAny",
    "url": "https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/checkpoints/graph_any_product.pt",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "02c810e9977e89bda66f43ad4e206937af37cf26"
  },
  {
    "id": "br2-dgl-molecule",
    "title": "DGL-LifeSci · pretrained MoleculeNet performance",
    "publisher": "DGL-LifeSci",
    "url": "https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/examples/property_prediction/moleculenet/README.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0"
  },
  {
    "id": "br2-dgl-tox21-registry",
    "title": "DGL-LifeSci Tox21 checkpoint registry",
    "publisher": "DGL-LifeSci",
    "url": "https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/python/dgllife/model/pretrain/moleculenet/tox21.py",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0"
  },
  {
    "id": "br2-chgnet",
    "title": "CHGNet 0.3.0 · MPtrj test performance",
    "publisher": "Ceder Group",
    "url": "https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/chgnet/pretrained/0.3.0/README.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "b9a6c15860237297a5a5169660e83b2e61a78e76"
  },
  {
    "id": "br2-scan",
    "title": "SCAN · released CIFAR-10 model zoo",
    "publisher": "SCAN authors",
    "url": "https://github.com/wvangansbeke/Unsupervised-Classification/blob/952ec31eee2c38e7233d8ad3ac0de39bb031877a/README.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "952ec31eee2c38e7233d8ad3ac0de39bb031877a"
  },
  {
    "id": "br2-uva-flow",
    "title": "UvA · saved MNIST normalizing-flow evaluation",
    "publisher": "University of Amsterdam",
    "url": "https://github.com/phlippe/uvadlc_notebooks/blob/c7d9e18f42fee53bc8925f08ec2358371b1e9200/docs/tutorial_notebooks/tutorial11/NF_image_modeling.ipynb",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "c7d9e18f42fee53bc8925f08ec2358371b1e9200"
  },
  {
    "id": "br2-uva-flow-simple-weights",
    "title": "UvA MNISTFlow · simple · released artifact",
    "publisher": "UvA MNISTFlow",
    "url": "https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/tutorial11/MNISTFlow_simple.ckpt",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "e38faed1ab83a593d2c90098ea563d32287fc80f"
  },
  {
    "id": "br2-uva-flow-vardeq-weights",
    "title": "UvA MNISTFlow · vardeq · released artifact",
    "publisher": "UvA MNISTFlow",
    "url": "https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/tutorial11/MNISTFlow_vardeq.ckpt",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "e38faed1ab83a593d2c90098ea563d32287fc80f"
  },
  {
    "id": "br2-timeradar",
    "title": "TimeRadar · released pretrained anomaly model",
    "publisher": "TimeRadar authors",
    "url": "https://github.com/mala-lab/TimeRadar/blob/4e06d0ad2bbe4c7e349c5a230fa5787d186e1eb2/README.md",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "4e06d0ad2bbe4c7e349c5a230fa5787d186e1eb2"
  },
  {
    "id": "br2-timeradar-paper",
    "title": "TimeRadar · zero-shot anomaly evaluation",
    "publisher": "TimeRadar authors",
    "url": "https://arxiv.org/html/2602.19068v1",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-timeradar-weights",
    "title": "TimeRadar · pretrained 100-step model · released artifact",
    "publisher": "TimeRadar",
    "url": "https://github.com/mala-lab/TimeRadar/blob/4e06d0ad2bbe4c7e349c5a230fa5787d186e1eb2/TimeRadar/model.safetensors",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "4e06d0ad2bbe4c7e349c5a230fa5787d186e1eb2"
  },
  {
    "id": "br2-autocpd-paper",
    "title": "AutoCPD · HASC residual classifier evaluation",
    "publisher": "Li, Fearnhead, Fryzlewicz and Wang",
    "url": "https://arxiv.org/abs/2211.03860",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-blitz-boltz-k8-card",
    "title": "Blitz-Boltz2 · K8 · model card",
    "publisher": "vinaymatt",
    "url": "https://huggingface.co/vinaymatt/Blitz-Boltz2/blob/56af33e632523a3a3729811dceaa798782bf03d9/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "56af33e632523a3a3729811dceaa798782bf03d9"
  },
  {
    "id": "br2-blitz-boltz-k8-weights",
    "title": "Blitz-Boltz2 · K8 · released weights",
    "publisher": "vinaymatt",
    "url": "https://huggingface.co/vinaymatt/Blitz-Boltz2/blob/56af33e632523a3a3729811dceaa798782bf03d9/blitz-boltz2-k8.ckpt",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "56af33e632523a3a3729811dceaa798782bf03d9"
  },
  {
    "id": "br2-blitz-boltz-k16-card",
    "title": "Blitz-Boltz2 · K16 · model card",
    "publisher": "vinaymatt",
    "url": "https://huggingface.co/vinaymatt/Blitz-Boltz2/blob/56af33e632523a3a3729811dceaa798782bf03d9/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "56af33e632523a3a3729811dceaa798782bf03d9"
  },
  {
    "id": "br2-blitz-boltz-k16-weights",
    "title": "Blitz-Boltz2 · K16 · released weights",
    "publisher": "vinaymatt",
    "url": "https://huggingface.co/vinaymatt/Blitz-Boltz2/blob/56af33e632523a3a3729811dceaa798782bf03d9/blitz-boltz2-k16.ckpt",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "56af33e632523a3a3729811dceaa798782bf03d9"
  },
  {
    "id": "br2-blitz-paper",
    "title": "Blitz · common evaluation protocol",
    "publisher": "Mathew et al.",
    "url": "https://arxiv.org/abs/2610.23703",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-eqr",
    "title": "Equilibrium Reasoners · released Sudoku full evaluation",
    "publisher": "CMU / locuslab",
    "url": "https://github.com/locuslab/EqR/blob/134c7541711125860954c78463023c583b2ef21b/README.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "134c7541711125860954c78463023c583b2ef21b"
  },
  {
    "id": "br2-eqr-sudoku-weights",
    "title": "EqR · Sudoku-Extreme · released weights",
    "publisher": "locuslab",
    "url": "https://huggingface.co/locuslab/EqR-model/blob/89069c8c9c1e8a24c0c7e6404bc0a1a7507ab377/sudoku-extreme/eqr.pth",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "89069c8c9c1e8a24c0c7e6404bc0a1a7507ab377"
  },
  {
    "id": "br2-hloc-aachen",
    "title": "Aachen benchmark · SuperPoint + SuperGlue submission",
    "publisher": "Visual Localization benchmark",
    "url": "https://www.visuallocalization.net/details/10931/",
    "kind": "benchmark",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-hloc-history",
    "title": "hloc historical result and configuration table",
    "publisher": "hloc authors",
    "url": "https://github.com/cvg/Hierarchical-Localization/blob/9895a77ea0fc4bc323e421fe36a4a84952881a48/README.md",
    "kind": "benchmark",
    "observedAt": "2026-10-21",
    "revision": "9895a77ea0fc4bc323e421fe36a4a84952881a48"
  },
  {
    "id": "br2-neuralmp",
    "title": "Neural Motion Planner · released inference system",
    "publisher": "Neural Motion Planner authors",
    "url": "https://github.com/mihdalal/neuralmotionplanner/blob/5b1e7095c8031b4f011806ac2a58bbe80a2292e6/README.md",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "5b1e7095c8031b4f011806ac2a58bbe80a2292e6"
  },
  {
    "id": "br2-neuralmp-paper",
    "title": "Neural Motion Planner · real-world test results",
    "publisher": "Dalal et al.",
    "url": "https://mihdalal.github.io/neuralmotionplanner/resources/paper.pdf",
    "kind": "paper",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-neuralmp-card",
    "title": "Neural Motion Planner · released policy · model card",
    "publisher": "mihdalal",
    "url": "https://huggingface.co/mihdalal/NeuralMP/blob/494c25ee32469374f2d6ac68a1d04e71d627a1fa/README.md",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "494c25ee32469374f2d6ac68a1d04e71d627a1fa"
  },
  {
    "id": "br2-neuralmp-weights",
    "title": "Neural Motion Planner · released policy · released weights",
    "publisher": "mihdalal",
    "url": "https://huggingface.co/mihdalal/NeuralMP/tree/494c25ee32469374f2d6ac68a1d04e71d627a1fa",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "494c25ee32469374f2d6ac68a1d04e71d627a1fa"
  },
  {
    "id": "br2-uva-ae",
    "title": "UvA · autoencoder dimensionality/reconstruction evaluation",
    "publisher": "University of Amsterdam",
    "url": "https://github.com/phlippe/uvadlc_notebooks/blob/c7d9e18f42fee53bc8925f08ec2358371b1e9200/docs/tutorial_notebooks/tutorial9/AE_CIFAR10.ipynb",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "c7d9e18f42fee53bc8925f08ec2358371b1e9200"
  },
  {
    "id": "br2-goose-release",
    "title": "GOOSE · pretrained model provenance",
    "publisher": "GOOSE authors",
    "url": "https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/pretrained_models/README.md",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57"
  },
  {
    "id": "br2-goose-main",
    "title": "GOOSE · versioned training and planning configuration",
    "publisher": "GOOSE authors",
    "url": "https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/README.md",
    "kind": "documentation",
    "observedAt": "2026-10-21",
    "revision": "04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57"
  },
  {
    "id": "br2-ipc23",
    "title": "IPC 2023 Learning Track official results presentation",
    "publisher": "IPC 2023 organizers",
    "url": "https://ipc2023-learning.github.io/talk.pdf",
    "kind": "documentation",
    "observedAt": "2026-10-21"
  },
  {
    "id": "br2-mmaction-license",
    "title": "MMAction2 repository license",
    "publisher": "OpenMMLab",
    "url": "https://github.com/open-mmlab/mmaction2/blob/a5a167dff2399e2d182a60332325f9c0d4663517/LICENSE",
    "kind": "license",
    "observedAt": "2026-10-21",
    "revision": "a5a167dff2399e2d182a60332325f9c0d4663517"
  }
];
