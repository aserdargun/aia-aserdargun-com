import type { Vendor } from "@/data/schema";

export const vendors = [
  {
    id: "anthropic",
    name: "Anthropic",
    shortName: "Claude",
    ecosystemName: "Claude ecosystem",
    description:
      "Anthropic's Claude products, coding agents, developer platform, and organizational offerings.",
    homepageUrl: "https://www.anthropic.com/",
    accent: "#d97757",
  },
  {
    id: "openai",
    name: "OpenAI",
    shortName: "ChatGPT",
    ecosystemName: "ChatGPT ecosystem",
    description:
      "OpenAI's ChatGPT products, Codex coding agents, developer platform, and organizational offerings.",
    homepageUrl: "https://openai.com/",
    accent: "#168c6b",
  },
  {
    id: "zai",
    name: "Z.ai",
    shortName: "GLM",
    ecosystemName: "GLM ecosystem",
    description:
      "Z.ai's GLM models, Z.ai chat, ZCode coding agent, developer platform, and organizational offerings.",
    homepageUrl: "https://z.ai/",
    accent: "#3a66c4",
  },
  {
    id: "minimax",
    name: "MiniMax",
    shortName: "MiniMax",
    ecosystemName: "MiniMax ecosystem",
    description:
      "MiniMax's foundation models, MiniMax Code coding agent, multimodal products, and developer platform.",
    homepageUrl: "https://www.minimax.io/",
    accent: "#5b5fc7",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    shortName: "DeepSeek",
    ecosystemName: "DeepSeek ecosystem",
    description:
      "DeepSeek's open-weight models, free chat app, developer API, and agent harness.",
    homepageUrl: "https://www.deepseek.com/",
    accent: "#4d6bfe",
  },
  {
    id: "qwen",
    name: "Qwen",
    shortName: "Qwen",
    ecosystemName: "Qwen ecosystem",
    description:
      "Qwen's models, Qwen Studio chat app, Qwen Code coding agent, QwenCloud developer platform, and organizational offerings.",
    homepageUrl: "https://qwen.ai/",
    accent: "#615ced",
  },
] satisfies Vendor[];
