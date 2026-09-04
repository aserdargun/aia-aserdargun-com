import { Fragment, type ReactNode } from "react";

type RichTextBlock =
  | { type: "paragraph"; text: string }
  | { type: "ordered-list" | "unordered-list"; items: string[] };

const inlineTokenPattern = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;

function renderInline(text: string): ReactNode[] {
  return text.split(inlineTokenPattern).filter(Boolean).map((token, index) => {
    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={index}>{token.slice(2, -2)}</strong>;
    }
    if (token.startsWith("*") && token.endsWith("*")) {
      return <em key={index}>{token.slice(1, -1)}</em>;
    }
    if (token.startsWith("`") && token.endsWith("`")) {
      return <code key={index}>{token.slice(1, -1)}</code>;
    }
    return <Fragment key={index}>{token}</Fragment>;
  });
}

function parseBlocks(content: string): RichTextBlock[] {
  const blocks: RichTextBlock[] = [];
  let paragraph: string[] = [];
  let list: Extract<RichTextBlock, { items: string[] }> | null = null;

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list) {
      blocks.push(list);
      list = null;
    }
  };

  for (const rawLine of content.trim().split("\n")) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const ordered = line.match(/^\d+\.\s+(.+)$/);
    const unordered = line.match(/^[-•]\s+(.+)$/);
    const item = ordered?.[1] ?? unordered?.[1];
    if (item) {
      flushParagraph();
      const type = ordered ? "ordered-list" : "unordered-list";
      if (!list || list.type !== type) {
        flushList();
        list = { type, items: [] };
      }
      list.items.push(item);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

export function RichText({ content }: { content: string }) {
  return parseBlocks(content).map((block, index) => {
    if (block.type === "paragraph") {
      return <p key={index}>{renderInline(block.text)}</p>;
    }

    const items = block.items.map((item, itemIndex) => (
      <li key={itemIndex}>{renderInline(item)}</li>
    ));
    return block.type === "ordered-list" ? (
      <ol key={index}>{items}</ol>
    ) : (
      <ul key={index}>{items}</ul>
    );
  });
}
