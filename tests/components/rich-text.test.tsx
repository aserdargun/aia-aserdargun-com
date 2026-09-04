import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RichText } from "@/components/learn/rich-text";

describe("RichText", () => {
  it("renders inline emphasis and semantic lists without exposing markup", () => {
    const { container } = render(
      <RichText
        content={`A **strong** idea with *emphasis* and \`code\`.

1. First **ordered** item
2. Second item

- One bullet
- Another bullet`}
      />,
    );

    expect(screen.getByText("strong").tagName).toBe("STRONG");
    expect(screen.getByText("emphasis").tagName).toBe("EM");
    expect(screen.getByText("code").tagName).toBe("CODE");
    expect(screen.getAllByRole("list")).toHaveLength(2);
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(container.textContent).not.toContain("**");
  });
});
