import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";

const storageKey = "aia.learn.progress.v1";

for (const width of [1440, 390]) {
  test(`${width}px: quiz, review, reload, cross-tab sync, and reset preserve accurate progress`, async ({ page, context }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/learn/llm");
    const question = page.locator(".learn-quiz__item").first();
    await question.getByRole("checkbox").first().check();
    await question.getByRole("button", { name: "Check answer" }).click();
    await expect(question.getByRole("button", { name: "Try again" })).toBeVisible();
    await expect.poll(() => page.evaluate((key) => JSON.parse(localStorage.getItem(key)!).llm.quizTotal, storageKey)).toBe(1);
    await page.getByRole("button", { name: "How well did you recall this?" }).click();
    await page.getByRole("group", { name: "Recall quality" }).getByRole("button", { name: "Good", exact: true }).click();
    await page.reload();
    await expect(page.getByText(/Rep 1 · interval 1d/)).toBeVisible();

    const other = await context.newPage();
    await other.goto("/learn/stats");
    await expect(other.getByRole("heading", { name: "Quiz accuracy" }).locator("..")).toContainText("/ 1 answers");
    await page.goto("/learn/stats");
    await page.getByRole("button", { name: "Reset all progress" }).click();
    await page.getByRole("button", { name: "Keep my progress" }).click();
    await expect(page.getByRole("heading", { name: "Quiz accuracy" }).locator("..")).toContainText("/ 1 answers");
    await page.getByRole("button", { name: "Reset all progress" }).click();
    await page.getByRole("button", { name: "Confirm reset" }).click();
    await expect(other.getByRole("heading", { name: "Quiz accuracy" }).locator("..")).toContainText("0 / 0 answers");
    await expect(page.getByRole("heading", { name: "Due now" }).locator("..")).toContainText("15");
    expect(errors).toEqual([]);
    await other.close();
  });
}

test("corrupt learning storage does not crash a concept or stats", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript((key) => localStorage.setItem(key, '{"llm":{"card":null},"ghost":{}}'), storageKey);
  await page.goto("/learn/llm");
  await expect(page.getByText("Not reviewed yet")).toBeVisible();
  await page.goto("/learn/stats");
  await expect(page.getByRole("heading", { name: "Due now" }).locator("..")).toContainText("15");
  expect(errors).toEqual([]);
});

test("matrix category counts, evidence and downloaded provenance match the active results", async ({ page }) => {
  await page.goto("/?view=all-vendors&q=Qwen&status=vendor-specific");
  await expect(page.getByRole("table", { name: "All vendors capability matrix" })).toBeVisible();
  await expect(page.getByRole("status")).toHaveText("66 capabilities shown");
  await expect(page.getByRole("button", { name: "All categories 66" })).toBeVisible();
  await page.getByRole("button", { name: "Models 4", exact: true }).click();
  await expect(page.getByRole("status")).toHaveText("4 capabilities shown");
  await page.getByText("Evidence for Qwen", { exact: true }).first().click();
  const evidence = page.locator(".matrix-evidence[open]");
  await expect(evidence.locator("time")).toBeVisible();
  await expect(evidence.getByRole("link").first()).toHaveAttribute("href", /^https:/);
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Export CSV", exact: true }).click();
  const download = await downloadPromise;
  const csv = await readFile((await download.path())!, "utf8");
  expect(csv).toContain("Qwen verified,Qwen sources");
  expect(csv).toContain("https://");
  expect(csv.trim().split("\r\n")).toHaveLength(5);
});

test("clearing Learn filters updates the form fields as well as results", async ({ page }) => {
  await page.goto("/learn?q=unmatchable-query&difficulty=advanced&category=agents");
  await page.getByRole("link", { name: "Clear filters", exact: true }).click();
  await expect(page.getByRole("searchbox", { name: "Search", exact: true })).toHaveValue("");
  await expect(page.getByRole("combobox", { name: "Difficulty", exact: true })).toHaveValue("all");
  await expect(page.getByRole("combobox", { name: "Category", exact: true })).toHaveValue("all");
  await expect(page.getByRole("heading", { name: "Foundations", exact: true })).toBeVisible();
});

test("browser back and forward restore atlas URL state", async ({ page }) => {
  await page.goto("/?q=lifecycle+hooks");
  const search = page.getByRole("searchbox", { name: /search capabilities/i });
  await expect(search).toHaveValue("lifecycle hooks");
  // Create a second same-document history entry, then exercise real traversal.
  await page.evaluate(() => history.pushState(null, "", "/?q=terminal+cli&left=openai&right=anthropic"));
  await page.goBack();
  await expect(search).toHaveValue("lifecycle hooks");
  await page.goForward();
  await expect(search).toHaveValue("terminal cli");
  await expect(page.getByRole("combobox", { name: /left vendor/i })).toHaveValue("openai");
  await expect(page.getByRole("row", { name: /terminal cli/i })).toBeVisible();
});

test("320px: masthead keeps its navigation visible without page overflow", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Learn", exact: true })).toBeInViewport();
  await expect(page.getByRole("link", { name: "GitHub ↗", exact: true })).toBeInViewport();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
});
