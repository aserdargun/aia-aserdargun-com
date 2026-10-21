import type { Source, TaxonomySource, TaskModelSource } from "@/data/schema";

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
  }
] satisfies TaskModelSource[];
