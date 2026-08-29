import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Page from "@/app/page";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: vi.fn() }),
}));

it("identifies the statically renderable public application", () => {
  render(<Page />);
  expect(
    screen.getByRole("link", { name: "AI Ecosystem Atlas home" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Compare the ecosystems." }),
  ).toBeInTheDocument();
  expect(screen.getByText("Evidence snapshot")).toBeVisible();
  expect(screen.queryByText("Latest verification")).not.toBeInTheDocument();
  expect(
    screen.getByText("Verification dates record source checks, not release dates."),
  ).toBeVisible();
  expect(
    screen.queryByText(
      "Next: methodology, freshness rules, and public update provenance",
    ),
  ).not.toBeInTheDocument();
});
