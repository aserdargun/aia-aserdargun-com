/** Reviewed first-party hosts; new providers require an explicit evidence review. */
export const primarySourceHosts: Readonly<Record<string, readonly string[]>> = {
  "Anthropic": [
    "claude.com",
    "code.claude.com",
    "platform.claude.com",
    "support.claude.com"
  ],
  "OpenAI": [
    "chatgpt.com",
    "developers.openai.com",
    "help.openai.com",
    "learn.chatgpt.com",
    "openai.com"
  ],
  "Z.ai": [
    "autoclaw.z.ai",
    "chat.z.ai",
    "docs.z.ai",
    "z.ai",
    "zcode.z.ai"
  ],
  "MiniMax": [
    "platform.minimax.io",
    "www.minimax.io"
  ],
  "DeepSeek": [
    "api-docs.deepseek.com",
    "deepseek.com",
    "deepseek-harness.github.io",
    "www.deepseek.com"
  ],
  "Qwen": [
    "chat.qwen.ai",
    "docs.qwencloud.com",
    "qwen.ai",
    "qwenlm.github.io",
    "www.alibabagroup.com",
    "www.qwencloud.com"
  ]
};
