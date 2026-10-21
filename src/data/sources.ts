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
    "observedAt": "2026-10-21",
    "revision": "1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0"
  },
  {
    "id": "ow-qwen38-weights",
    "title": "Qwen3.8-27B — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3.8-27B/tree/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0"
  },
  {
    "id": "ow-deepseek41",
    "title": "DeepSeek-V4.1-Flash-1017 — model card",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "1bae0e1088993b9b82de08f59de5be5a34e42170"
  },
  {
    "id": "ow-deepseek41-weights",
    "title": "DeepSeek-V4.1-Flash-1017 — checkpoint files",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/tree/1bae0e1088993b9b82de08f59de5be5a34e42170",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "1bae0e1088993b9b82de08f59de5be5a34e42170"
  },
  {
    "id": "ow-glm53",
    "title": "GLM-5.3 — model card",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-5.3",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "ba32f8c19c8738e2c57c71798c601d477a7bf844"
  },
  {
    "id": "ow-glm53-weights",
    "title": "GLM-5.3 — checkpoint files",
    "publisher": "zai-org",
    "url": "https://huggingface.co/zai-org/GLM-5.3/tree/ba32f8c19c8738e2c57c71798c601d477a7bf844",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "ba32f8c19c8738e2c57c71798c601d477a7bf844"
  },
  {
    "id": "ow-gliner2",
    "title": "GLiNER2 large v1 — model card",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2-large-v1",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "d7aa8a2850d175a9227ff80358ea380723d03ad2"
  },
  {
    "id": "ow-gliner2-weights",
    "title": "GLiNER2 large v1 — checkpoint files",
    "publisher": "fastino",
    "url": "https://huggingface.co/fastino/gliner2-large-v1/tree/d7aa8a2850d175a9227ff80358ea380723d03ad2",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "d7aa8a2850d175a9227ff80358ea380723d03ad2"
  },
  {
    "id": "ow-nli",
    "title": "DeBERTa v3 large NLI — model card",
    "publisher": "cross-encoder",
    "url": "https://huggingface.co/cross-encoder/nli-deberta-v3-large",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "bab4bc7178836f731dcfd18c06ca9def0a137712"
  },
  {
    "id": "ow-nli-weights",
    "title": "DeBERTa v3 large NLI — checkpoint files",
    "publisher": "cross-encoder",
    "url": "https://huggingface.co/cross-encoder/nli-deberta-v3-large/tree/bab4bc7178836f731dcfd18c06ca9def0a137712",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "bab4bc7178836f731dcfd18c06ca9def0a137712"
  },
  {
    "id": "ow-coref",
    "title": "F-Coref — model card",
    "publisher": "biu-nlp",
    "url": "https://huggingface.co/biu-nlp/f-coref",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "e91dfff12879495d882ba9460d0c5d5dd44ade59"
  },
  {
    "id": "ow-coref-weights",
    "title": "F-Coref — checkpoint files",
    "publisher": "biu-nlp",
    "url": "https://huggingface.co/biu-nlp/f-coref/tree/e91dfff12879495d882ba9460d0c5d5dd44ade59",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "e91dfff12879495d882ba9460d0c5d5dd44ade59"
  },
  {
    "id": "ow-stanza",
    "title": "Stanza English models — model card",
    "publisher": "stanfordnlp",
    "url": "https://huggingface.co/stanfordnlp/stanza-en",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "810dca30ddb25c30582c019dbaeb3a3e040fb958"
  },
  {
    "id": "ow-stanza-weights",
    "title": "Stanza English models — checkpoint files",
    "publisher": "stanfordnlp",
    "url": "https://huggingface.co/stanfordnlp/stanza-en/tree/810dca30ddb25c30582c019dbaeb3a3e040fb958",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "810dca30ddb25c30582c019dbaeb3a3e040fb958"
  },
  {
    "id": "ow-nllb",
    "title": "NLLB-200 distilled 600M — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/nllb-200-distilled-600M",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "f8d333a098d19b4fd9a8b18f94170487ad3f821d"
  },
  {
    "id": "ow-nllb-weights",
    "title": "NLLB-200 distilled 600M — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/nllb-200-distilled-600M/tree/f8d333a098d19b4fd9a8b18f94170487ad3f821d",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "f8d333a098d19b4fd9a8b18f94170487ad3f821d"
  },
  {
    "id": "ow-coedit",
    "title": "CoEdIT large — model card",
    "publisher": "grammarly",
    "url": "https://huggingface.co/grammarly/coedit-large",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "5637bcdf9d8d4419f97c8cfea36f7d35c79232b6"
  },
  {
    "id": "ow-coedit-weights",
    "title": "CoEdIT large — checkpoint files",
    "publisher": "grammarly",
    "url": "https://huggingface.co/grammarly/coedit-large/tree/5637bcdf9d8d4419f97c8cfea36f7d35c79232b6",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "5637bcdf9d8d4419f97c8cfea36f7d35c79232b6"
  },
  {
    "id": "ow-embedding",
    "title": "Qwen3-Embedding-8B — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Embedding-8B",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "1d8ad4ca9b3dd8059ad90a75d4983776a23d44af"
  },
  {
    "id": "ow-embedding-weights",
    "title": "Qwen3-Embedding-8B — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Embedding-8B/tree/1d8ad4ca9b3dd8059ad90a75d4983776a23d44af",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "1d8ad4ca9b3dd8059ad90a75d4983776a23d44af"
  },
  {
    "id": "ow-reranker",
    "title": "Qwen3-Reranker-8B — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Reranker-8B",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "77d193c791ed757ca307ee72715aa132723da912"
  },
  {
    "id": "ow-reranker-weights",
    "title": "Qwen3-Reranker-8B — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Reranker-8B/tree/77d193c791ed757ca307ee72715aa132723da912",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "77d193c791ed757ca307ee72715aa132723da912"
  },
  {
    "id": "ow-siglip",
    "title": "SigLIP 2 SO400M — model card",
    "publisher": "google",
    "url": "https://huggingface.co/google/siglip2-so400m-patch14-384",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "e8e487298228002f3d8a82e0cd5c8ea9c567f57f"
  },
  {
    "id": "ow-siglip-weights",
    "title": "SigLIP 2 SO400M — checkpoint files",
    "publisher": "google",
    "url": "https://huggingface.co/google/siglip2-so400m-patch14-384/tree/e8e487298228002f3d8a82e0cd5c8ea9c567f57f",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "e8e487298228002f3d8a82e0cd5c8ea9c567f57f"
  },
  {
    "id": "ow-dino",
    "title": "Grounding DINO base — model card",
    "publisher": "IDEA-Research",
    "url": "https://huggingface.co/IDEA-Research/grounding-dino-base",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "12bdfa3120f3e7ec7b434d90674b3396eccf88eb"
  },
  {
    "id": "ow-dino-weights",
    "title": "Grounding DINO base — checkpoint files",
    "publisher": "IDEA-Research",
    "url": "https://huggingface.co/IDEA-Research/grounding-dino-base/tree/12bdfa3120f3e7ec7b434d90674b3396eccf88eb",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "12bdfa3120f3e7ec7b434d90674b3396eccf88eb"
  },
  {
    "id": "ow-sam3",
    "title": "SAM 3 — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/sam3",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "3c879f39826c281e95690f02c7821c4de09afae7"
  },
  {
    "id": "ow-sam3-weights",
    "title": "SAM 3 — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/sam3/tree/3c879f39826c281e95690f02c7821c4de09afae7",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "3c879f39826c281e95690f02c7821c4de09afae7"
  },
  {
    "id": "ow-mask2former",
    "title": "Mask2Former Swin large · ADE20K — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/mask2former-swin-large-ade-semantic",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "aa25c92404a40599614215e76514c79b427c7527"
  },
  {
    "id": "ow-mask2former-weights",
    "title": "Mask2Former Swin large · ADE20K — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/mask2former-swin-large-ade-semantic/tree/aa25c92404a40599614215e76514c79b427c7527",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "aa25c92404a40599614215e76514c79b427c7527"
  },
  {
    "id": "ow-depth",
    "title": "Depth Anything 3 large — model card",
    "publisher": "depth-anything",
    "url": "https://huggingface.co/depth-anything/DA3-LARGE",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "c54c26b16ec04d218e8d584ecf4bce082a9fcc20"
  },
  {
    "id": "ow-depth-weights",
    "title": "Depth Anything 3 large — checkpoint files",
    "publisher": "depth-anything",
    "url": "https://huggingface.co/depth-anything/DA3-LARGE/tree/c54c26b16ec04d218e8d584ecf4bce082a9fcc20",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "c54c26b16ec04d218e8d584ecf4bce082a9fcc20"
  },
  {
    "id": "ow-pose",
    "title": "ViTPose+ huge — model card",
    "publisher": "usyd-community",
    "url": "https://huggingface.co/usyd-community/vitpose-plus-huge",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "9f36d7aec1800d23e97f10c2e74393aee92aa53f"
  },
  {
    "id": "ow-pose-weights",
    "title": "ViTPose+ huge — checkpoint files",
    "publisher": "usyd-community",
    "url": "https://huggingface.co/usyd-community/vitpose-plus-huge/tree/9f36d7aec1800d23e97f10c2e74393aee92aa53f",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "9f36d7aec1800d23e97f10c2e74393aee92aa53f"
  },
  {
    "id": "ow-videomae",
    "title": "VideoMAE large · Kinetics-400 — model card",
    "publisher": "MCG-NJU",
    "url": "https://huggingface.co/MCG-NJU/videomae-large-finetuned-kinetics",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "0f6adcd5f6902900aa0281f9daacfe52bb3c4ad4"
  },
  {
    "id": "ow-videomae-weights",
    "title": "VideoMAE large · Kinetics-400 — checkpoint files",
    "publisher": "MCG-NJU",
    "url": "https://huggingface.co/MCG-NJU/videomae-large-finetuned-kinetics/tree/0f6adcd5f6902900aa0281f9daacfe52bb3c4ad4",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "0f6adcd5f6902900aa0281f9daacfe52bb3c4ad4"
  },
  {
    "id": "ow-ocr",
    "title": "PaddleOCR-VL-1.6 — model card",
    "publisher": "PaddlePaddle",
    "url": "https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "c5630abae1d940eafe0697512a0325494b02ab42"
  },
  {
    "id": "ow-ocr-weights",
    "title": "PaddleOCR-VL-1.6 — checkpoint files",
    "publisher": "PaddlePaddle",
    "url": "https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6/tree/c5630abae1d940eafe0697512a0325494b02ab42",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "c5630abae1d940eafe0697512a0325494b02ab42"
  },
  {
    "id": "ow-image",
    "title": "Qwen-Image-2512 — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen-Image-2512",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "25468b98e3276ca6700de15c6628e51b7de54a26"
  },
  {
    "id": "ow-image-weights",
    "title": "Qwen-Image-2512 — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen-Image-2512/tree/25468b98e3276ca6700de15c6628e51b7de54a26",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "25468b98e3276ca6700de15c6628e51b7de54a26"
  },
  {
    "id": "ow-imageedit",
    "title": "Qwen-Image-Edit-2511 — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen-Image-Edit-2511",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "6f3ccc0b56e431dc6a0c2b2039706d7d26f22cb9"
  },
  {
    "id": "ow-imageedit-weights",
    "title": "Qwen-Image-Edit-2511 — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen-Image-Edit-2511/tree/6f3ccc0b56e431dc6a0c2b2039706d7d26f22cb9",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "6f3ccc0b56e431dc6a0c2b2039706d7d26f22cb9"
  },
  {
    "id": "ow-fill",
    "title": "FLUX.1 Fill dev — model card",
    "publisher": "black-forest-labs",
    "url": "https://huggingface.co/black-forest-labs/FLUX.1-Fill-dev",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "358293da0354175698b67ec8299acf928313a78a"
  },
  {
    "id": "ow-fill-weights",
    "title": "FLUX.1 Fill dev — checkpoint files",
    "publisher": "black-forest-labs",
    "url": "https://huggingface.co/black-forest-labs/FLUX.1-Fill-dev/tree/358293da0354175698b67ec8299acf928313a78a",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "358293da0354175698b67ec8299acf928313a78a"
  },
  {
    "id": "ow-wan",
    "title": "Wan2.2 TI2V 5B — model card",
    "publisher": "Wan-AI",
    "url": "https://huggingface.co/Wan-AI/Wan2.2-TI2V-5B",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "921dbaf3f1674a56f47e83fb80a34bac8a8f203e"
  },
  {
    "id": "ow-wan-weights",
    "title": "Wan2.2 TI2V 5B — checkpoint files",
    "publisher": "Wan-AI",
    "url": "https://huggingface.co/Wan-AI/Wan2.2-TI2V-5B/tree/921dbaf3f1674a56f47e83fb80a34bac8a8f203e",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "921dbaf3f1674a56f47e83fb80a34bac8a8f203e"
  },
  {
    "id": "ow-shape",
    "title": "Shap-E — model card",
    "publisher": "openai",
    "url": "https://huggingface.co/openai/shap-e",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "7bd337afdea1c17842e1c3cc45c4e268356dba40"
  },
  {
    "id": "ow-shape-weights",
    "title": "Shap-E — checkpoint files",
    "publisher": "openai",
    "url": "https://huggingface.co/openai/shap-e/tree/7bd337afdea1c17842e1c3cc45c4e268356dba40",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "7bd337afdea1c17842e1c3cc45c4e268356dba40"
  },
  {
    "id": "ow-asr",
    "title": "Qwen3-ASR-1.7B — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-ASR-1.7B",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "7278e1e70fe206f11671096ffdd38061171dd6e5"
  },
  {
    "id": "ow-asr-weights",
    "title": "Qwen3-ASR-1.7B — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-ASR-1.7B/tree/7278e1e70fe206f11671096ffdd38061171dd6e5",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "7278e1e70fe206f11671096ffdd38061171dd6e5"
  },
  {
    "id": "ow-seamless",
    "title": "SeamlessM4T v2 large — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/seamless-m4t-v2-large",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "5f8cc790b19fc3f67a61c105133b20b34e3dcb76"
  },
  {
    "id": "ow-seamless-weights",
    "title": "SeamlessM4T v2 large — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/seamless-m4t-v2-large/tree/5f8cc790b19fc3f67a61c105133b20b34e3dcb76",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "5f8cc790b19fc3f67a61c105133b20b34e3dcb76"
  },
  {
    "id": "ow-keyword",
    "title": "wav2vec 2.0 · SUPERB KS — model card",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/wav2vec2-base-superb-ks",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "372e0486cd83e6f0c05c20a27262e9ca09450d24"
  },
  {
    "id": "ow-keyword-weights",
    "title": "wav2vec 2.0 · SUPERB KS — checkpoint files",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/wav2vec2-base-superb-ks/tree/372e0486cd83e6f0c05c20a27262e9ca09450d24",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "372e0486cd83e6f0c05c20a27262e9ca09450d24"
  },
  {
    "id": "ow-emotion",
    "title": "HuBERT large · SUPERB ER — model card",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/hubert-large-superb-er",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "ef1a2ebfd7cfc424dc7f0fbcdc406e8b794d63bb"
  },
  {
    "id": "ow-emotion-weights",
    "title": "HuBERT large · SUPERB ER — checkpoint files",
    "publisher": "superb",
    "url": "https://huggingface.co/superb/hubert-large-superb-er/tree/ef1a2ebfd7cfc424dc7f0fbcdc406e8b794d63bb",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "ef1a2ebfd7cfc424dc7f0fbcdc406e8b794d63bb"
  },
  {
    "id": "ow-ast",
    "title": "Audio Spectrogram Transformer — model card",
    "publisher": "MIT",
    "url": "https://huggingface.co/MIT/ast-finetuned-audioset-10-10-0.4593",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "f826b80d28226b62986cc218e5cec390b1096902"
  },
  {
    "id": "ow-ast-weights",
    "title": "Audio Spectrogram Transformer — checkpoint files",
    "publisher": "MIT",
    "url": "https://huggingface.co/MIT/ast-finetuned-audioset-10-10-0.4593/tree/f826b80d28226b62986cc218e5cec390b1096902",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "f826b80d28226b62986cc218e5cec390b1096902"
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
    "observedAt": "2026-10-21",
    "revision": "3533c8cf8e369892e6b79ff1bf80f7b0286a54ee"
  },
  {
    "id": "ow-diarization-weights",
    "title": "pyannote Community-1 — checkpoint files",
    "publisher": "pyannote",
    "url": "https://huggingface.co/pyannote/speaker-diarization-community-1/tree/3533c8cf8e369892e6b79ff1bf80f7b0286a54ee",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "3533c8cf8e369892e6b79ff1bf80f7b0286a54ee"
  },
  {
    "id": "ow-tts",
    "title": "Qwen3-TTS 1.7B CustomVoice — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "0c0e3051f131929182e2c023b9537f8b1c68adfe"
  },
  {
    "id": "ow-tts-weights",
    "title": "Qwen3-TTS 1.7B CustomVoice — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice/tree/0c0e3051f131929182e2c023b9537f8b1c68adfe",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "0c0e3051f131929182e2c023b9537f8b1c68adfe"
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
    "observedAt": "2026-10-21",
    "revision": "257283f9f41585055e8f858fba4fd044e5caed6e"
  },
  {
    "id": "ow-voice-weights",
    "title": "Seed-VC v2 — checkpoint files",
    "publisher": "Plachta",
    "url": "https://huggingface.co/Plachta/Seed-VC/tree/257283f9f41585055e8f858fba4fd044e5caed6e",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "257283f9f41585055e8f858fba4fd044e5caed6e"
  },
  {
    "id": "ow-audiogen",
    "title": "AudioGen medium — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/audiogen-medium",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "1277dd7dfd8fa57a205a70acc5de0ee90804502f"
  },
  {
    "id": "ow-audiogen-weights",
    "title": "AudioGen medium — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/audiogen-medium/tree/1277dd7dfd8fa57a205a70acc5de0ee90804502f",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "1277dd7dfd8fa57a205a70acc5de0ee90804502f"
  },
  {
    "id": "ow-musicgen",
    "title": "MusicGen large — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/musicgen-large",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "15ccdc92099879e47b6da12c350cdb71d4eab3ca"
  },
  {
    "id": "ow-musicgen-weights",
    "title": "MusicGen large — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/musicgen-large/tree/15ccdc92099879e47b6da12c350cdb71d4eab3ca",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "15ccdc92099879e47b6da12c350cdb71d4eab3ca"
  },
  {
    "id": "ow-ace",
    "title": "ACE-Step 1.5 — model card",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/Ace-Step1.5",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "19671f406d603126926c1b7e2adc169acbcade22"
  },
  {
    "id": "ow-ace-weights",
    "title": "ACE-Step 1.5 — checkpoint files",
    "publisher": "ACE-Step",
    "url": "https://huggingface.co/ACE-Step/Ace-Step1.5/tree/19671f406d603126926c1b7e2adc169acbcade22",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "19671f406d603126926c1b7e2adc169acbcade22"
  },
  {
    "id": "ow-coder",
    "title": "Qwen3-Coder-Next — model card",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Coder-Next",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "a7fbcb5c0e12d62a448eaa0e260346bf5dcc0feb"
  },
  {
    "id": "ow-coder-weights",
    "title": "Qwen3-Coder-Next — checkpoint files",
    "publisher": "Qwen",
    "url": "https://huggingface.co/Qwen/Qwen3-Coder-Next/tree/a7fbcb5c0e12d62a448eaa0e260346bf5dcc0feb",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "a7fbcb5c0e12d62a448eaa0e260346bf5dcc0feb"
  },
  {
    "id": "ow-sql",
    "title": "SQLCoder 70B alpha — model card",
    "publisher": "defog",
    "url": "https://huggingface.co/defog/sqlcoder-70b-alpha",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "8095a5ded3d3ed70fe27e9ed46b91f3e29a1b51a"
  },
  {
    "id": "ow-sql-weights",
    "title": "SQLCoder 70B alpha — checkpoint files",
    "publisher": "defog",
    "url": "https://huggingface.co/defog/sqlcoder-70b-alpha/tree/8095a5ded3d3ed70fe27e9ed46b91f3e29a1b51a",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "8095a5ded3d3ed70fe27e9ed46b91f3e29a1b51a"
  },
  {
    "id": "ow-codet5",
    "title": "CodeT5 base — model card",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "02cd2d31bb7c6d0e4d91156167b2de044989c733"
  },
  {
    "id": "ow-codet5-weights",
    "title": "CodeT5 base — checkpoint files",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5-base/tree/02cd2d31bb7c6d0e4d91156167b2de044989c733",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "02cd2d31bb7c6d0e4d91156167b2de044989c733"
  },
  {
    "id": "ow-codet5plus",
    "title": "CodeT5+ 770M — model card",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5p-770m",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "3f7cc6e80aee6612f41253b5ee28f09f86faa35f"
  },
  {
    "id": "ow-codet5plus-weights",
    "title": "CodeT5+ 770M — checkpoint files",
    "publisher": "Salesforce",
    "url": "https://huggingface.co/Salesforce/codet5p-770m/tree/3f7cc6e80aee6612f41253b5ee28f09f86faa35f",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "3f7cc6e80aee6612f41253b5ee28f09f86faa35f"
  },
  {
    "id": "ow-bart",
    "title": "BART large · CNN/DailyMail — model card",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/bart-large-cnn",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "37f520fa929c961707657b28798b30c003dd100b"
  },
  {
    "id": "ow-bart-weights",
    "title": "BART large · CNN/DailyMail — checkpoint files",
    "publisher": "facebook",
    "url": "https://huggingface.co/facebook/bart-large-cnn/tree/37f520fa929c961707657b28798b30c003dd100b",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "37f520fa929c961707657b28798b30c003dd100b"
  },
  {
    "id": "ow-tabpfn",
    "title": "TabPFN 3.5 — model card",
    "publisher": "Prior-Labs",
    "url": "https://huggingface.co/Prior-Labs/tabpfn_3_5",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "06bf2ba35c80a92a3b9abb436b99cf49e7a0365e"
  },
  {
    "id": "ow-tabpfn-weights",
    "title": "TabPFN 3.5 — checkpoint files",
    "publisher": "Prior-Labs",
    "url": "https://huggingface.co/Prior-Labs/tabpfn_3_5/tree/06bf2ba35c80a92a3b9abb436b99cf49e7a0365e",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "06bf2ba35c80a92a3b9abb436b99cf49e7a0365e"
  },
  {
    "id": "ow-chronos",
    "title": "Chronos-2 — model card",
    "publisher": "amazon",
    "url": "https://huggingface.co/amazon/chronos-2",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "29ec3766d36d6f73f0696f85560a422f50e8498c"
  },
  {
    "id": "ow-chronos-weights",
    "title": "Chronos-2 — checkpoint files",
    "publisher": "amazon",
    "url": "https://huggingface.co/amazon/chronos-2/tree/29ec3766d36d6f73f0696f85560a422f50e8498c",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "29ec3766d36d6f73f0696f85560a422f50e8498c"
  },
  {
    "id": "ow-moment",
    "title": "MOMENT-1 large — model card",
    "publisher": "AutonLab",
    "url": "https://huggingface.co/AutonLab/MOMENT-1-large",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "ca58581bc7bea2ebed4e80dc0a3e4b8b609c6ecc"
  },
  {
    "id": "ow-moment-weights",
    "title": "MOMENT-1 large — checkpoint files",
    "publisher": "AutonLab",
    "url": "https://huggingface.co/AutonLab/MOMENT-1-large/tree/ca58581bc7bea2ebed4e80dc0a3e4b8b609c6ecc",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "ca58581bc7bea2ebed4e80dc0a3e4b8b609c6ecc"
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
    "observedAt": "2026-10-21",
    "revision": "a51f899d0599838aa934b21b45b4c1ae7fbce2d3"
  },
  {
    "id": "ow-prover-weights",
    "title": "DeepSeek-Prover-V2 671B — checkpoint files",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B/tree/a51f899d0599838aa934b21b45b4c1ae7fbce2d3",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "a51f899d0599838aa934b21b45b4c1ae7fbce2d3"
  },
  {
    "id": "ow-uitars",
    "title": "UI-TARS 1.5 7B — model card",
    "publisher": "ByteDance-Seed",
    "url": "https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "683d002dd99d8f95104d31e70391a39348857f4e"
  },
  {
    "id": "ow-uitars-weights",
    "title": "UI-TARS 1.5 7B — checkpoint files",
    "publisher": "ByteDance-Seed",
    "url": "https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B/tree/683d002dd99d8f95104d31e70391a39348857f4e",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "683d002dd99d8f95104d31e70391a39348857f4e"
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
    "observedAt": "2026-10-21",
    "revision": "4236a6af538feda4548eca9ab308586007567f52"
  },
  {
    "id": "ow-r1-weights",
    "title": "DeepSeek-R1-0528 — checkpoint files",
    "publisher": "deepseek-ai",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1-0528/tree/4236a6af538feda4548eca9ab308586007567f52",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "4236a6af538feda4548eca9ab308586007567f52"
  },
  {
    "id": "ow-fasttext-lid",
    "title": "fastText lid218e — model card",
    "publisher": "Meta",
    "url": "https://huggingface.co/facebook/fasttext-language-identification",
    "kind": "model-card",
    "observedAt": "2026-10-21",
    "revision": "3af127d4124fc58b75666f3594bb5143b9757e78"
  },
  {
    "id": "ow-fasttext-lid-weights",
    "title": "fastText lid218e — checkpoint files",
    "publisher": "Meta",
    "url": "https://huggingface.co/facebook/fasttext-language-identification/tree/3af127d4124fc58b75666f3594bb5143b9757e78",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "3af127d4124fc58b75666f3594bb5143b9757e78"
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
    "observedAt": "2026-10-21",
    "revision": "99b226cc377d131cccc610ed4346db564f381f1e"
  },
  {
    "id": "ow-mamba2-weights",
    "title": "Mamba2 2.7B — checkpoint files",
    "publisher": "State Spaces",
    "url": "https://huggingface.co/state-spaces/mamba2-2.7b/tree/99b226cc377d131cccc610ed4346db564f381f1e",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "99b226cc377d131cccc610ed4346db564f381f1e"
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
    "observedAt": "2026-10-21",
    "revision": "e34ea60adff2e575f4fe7569eaffd1b28509b6fd"
  },
  {
    "id": "ow-olmo2-dpo-weights",
    "title": "OLMo 2 7B DPO · 1124 — checkpoint files",
    "publisher": "Ai2",
    "url": "https://huggingface.co/allenai/OLMo-2-1124-7B-DPO/tree/e34ea60adff2e575f4fe7569eaffd1b28509b6fd",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "e34ea60adff2e575f4fe7569eaffd1b28509b6fd"
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
    "observedAt": "2026-10-21",
    "revision": "0e9e39f249a16976918f6564b8830bc894c89659"
  },
  {
    "id": "ow-llama31-rlhf-weights",
    "title": "Llama 3.1 8B Instruct — checkpoint files",
    "publisher": "Meta",
    "url": "https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct/tree/0e9e39f249a16976918f6564b8830bc894c89659",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "0e9e39f249a16976918f6564b8830bc894c89659"
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
    "observedAt": "2026-10-21",
    "revision": "0006300d604941f96f16cb7d229137363e1b2ac6"
  },
  {
    "id": "ow-mlp-mixer-weights",
    "title": "MLP-Mixer B/16 · ImageNet — checkpoint files",
    "publisher": "Google Research / timm",
    "url": "https://huggingface.co/timm/mixer_b16_224.goog_in21k_ft_in1k/tree/0006300d604941f96f16cb7d229137363e1b2ac6",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "0006300d604941f96f16cb7d229137363e1b2ac6"
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
    "observedAt": "2026-10-21",
    "revision": "2bfbb0e194aa59bf9f8c88d3fd3719ed3b7420a5"
  },
  {
    "id": "ow-resnet50-ssl-weights",
    "title": "ResNet-50 SSL · YFCC100M → ImageNet — checkpoint files",
    "publisher": "Meta / timm",
    "url": "https://huggingface.co/timm/resnet50.fb_ssl_yfcc100m_ft_in1k/tree/2bfbb0e194aa59bf9f8c88d3fd3719ed3b7420a5",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "2bfbb0e194aa59bf9f8c88d3fd3719ed3b7420a5"
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
    "observedAt": "2026-10-21",
    "revision": "8d67aef9aea18955cfb038bbbf48f764104ca09a"
  },
  {
    "id": "ow-p5-beauty-small-weights",
    "title": "P5 Beauty Small — pinned weight files",
    "publisher": "makitanikaze",
    "url": "https://huggingface.co/makitanikaze/P5_beauty_small/tree/8d67aef9aea18955cfb038bbbf48f764104ca09a",
    "kind": "weights",
    "observedAt": "2026-10-21",
    "revision": "8d67aef9aea18955cfb038bbbf48f764104ca09a"
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
  }
];
