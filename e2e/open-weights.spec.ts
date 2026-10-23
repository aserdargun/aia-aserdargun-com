import { expect, test } from "@playwright/test";
import { openWeightModels, taxonomyTasks } from "../src/data/task-models";

const modelCount = openWeightModels.length;
const taskCount = taxonomyTasks.length;

for (const viewport of [{ name: "desktop", width: 1440, height: 900 }, { name: "mobile", width: 390, height: 844 }]) {
  test(`${viewport.name}: open-weight models list, filters, taxonomy links and languages`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    await page.setViewportSize(viewport);
    await page.goto("/open-weights");
    await expect(page).toHaveTitle("Open weight models | AI Ecosystem Atlas");
    await expect(page.getByRole("heading", { level: 1, name: "Open weight models" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Task coverage" })).toBeVisible();
    await expect(page.locator(".open-weight-coverage li").first()).toContainText(String(taskCount));
    await expect(page.getByRole("status")).toContainText(`Models: ${modelCount}`);

    const cards = page.locator(".open-weight-card");
    await expect(cards).toHaveCount(modelCount);
    const first = cards.first();
    await expect(first.getByRole("link").first()).toHaveAttribute("href", /^https:\/\/huggingface\.co\//);
    await expect(first.locator(".open-weight-specs")).toBeVisible();

    await page.getByRole("button", { name: "Türkçe", exact: true }).click();
    await expect(page.getByRole("heading", { level: 1, name: "Açık ağırlıklı modeller" })).toBeVisible();
    await expect(page.getByRole("status")).toContainText(`Modeller: ${modelCount}`);
    await page.getByRole("button", { name: "English", exact: true }).click();
    await expect(page.getByRole("heading", { level: 1, name: "Open weight models" })).toBeVisible();

    const publisher = page.getByRole("combobox", { name: "Publisher" });
    await publisher.selectOption({ index: 1 });
    const filtered = await page.locator(".open-weight-card").count();
    expect(filtered).toBeGreaterThan(0);
    expect(filtered).toBeLessThan(modelCount);
    await page.getByRole("button", { name: "Clear filters", exact: true }).first().click();
    await expect(page.locator(".open-weight-card")).toHaveCount(modelCount);

    await page.getByRole("combobox", { name: "Group by" }).selectOption("task");
    await expect(page.locator(".open-weight-group").first()).toBeVisible();

    const taskLink = page.locator(".open-weight-tasks a").first();
    await expect(taskLink).toHaveAttribute("href", /\/taxonomy\/tasks\?task=[a-z0-9-]+/);
    const familyLink = page.locator(".open-weight-families a").first();
    await expect(familyLink).toHaveAttribute("href", /\/taxonomy\/models\?family=[a-z0-9-]+/);

    const download = page.waitForEvent("download");
    await page.getByRole("button", { name: "Export CSV" }).click();
    await download;

    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(errors).toEqual([]);
  });
}

test("open-weight filters survive reload and history", async ({ page }) => {
  await page.goto("/open-weights");
  await page.getByRole("combobox", { name: "Local size" }).selectOption("≤24");
  await expect(page).toHaveURL(/size=%E2%89%A424/);
  await page.reload();
  await expect(page.getByRole("combobox", { name: "Local size" })).toHaveValue("≤24");
  await page.goBack();
  await expect(page.getByRole("combobox", { name: "Local size" })).toHaveValue("");
  await page.goto("/open-weights?lang=tr&size=%E2%89%A424");
  await expect(page.getByRole("heading", { level: 1, name: "Açık ağırlıklı modeller" })).toBeVisible();
  await expect(page.getByRole("combobox", { name: "Yerel boyut" })).toHaveValue("≤24");
});

test("grouped cards have unique anchors and deduplicated citations", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  await page.goto("/open-weights?publisher=Qwen");
  for (const group of ["publisher", "task", "family"]) {
    await page.getByRole("combobox", { name: "Group by" }).selectOption(group);
    await expect(page.locator(".open-weight-card").first()).toBeVisible();
    const ids = await page.locator("[id]").evaluateAll((elements) => elements.map((element) => element.id));
    expect(new Set(ids).size).toBe(ids.length);
    const citations = await page.locator(".open-weight-sources").evaluateAll((elements) => elements.map((element) =>
      [...element.querySelectorAll("a")].map((link) => link.href),
    ));
    expect(citations.every((links) => new Set(links).size === links.length)).toBe(true);
    await expect(page.locator(".open-weight-group__count").first()).toContainText("models");
  }
  expect(errors).toEqual([]);
});

test("advanced filters, unknown memory and reset preserve the chosen grouping", async ({ page }) => {
  await page.goto("/open-weights?lang=tr&license=Apache-2.0&group=task");
  await expect(page.getByRole("combobox", { name: "Lisans", exact: true })).toHaveValue("Apache-2.0");
  await page.getByRole("button", { name: "Filtreleri temizle", exact: true }).first().click();
  await expect(page.getByRole("combobox", { name: "Gruplama", exact: true })).toHaveValue("task");
  await page.getByRole("combobox", { name: "Yerel boyut", exact: true }).selectOption("unknown");
  await expect(page.locator(".open-weight-card").first()).toBeVisible();
  const estimates = page.locator(".open-weight-specs div").filter({ has: page.locator("dt", { hasText: "4-bit tahmini" }) }).locator("dd");
  expect(await estimates.count()).toBeGreaterThan(0);
  expect((await estimates.allTextContents()).every((value) => value === "—")).toBe(true);
  await page.getByRole("searchbox", { name: "Model ara", exact: true }).fill("no-such-model-xyz");
  await expect(page.getByRole("heading", { name: "Bu filtrelere uyan model bulunamadı." })).toBeVisible();
  await expect(page.getByRole("button", { name: "CSV indir" })).toBeDisabled();
  await page.getByRole("button", { name: "Filtreleri temizle", exact: true }).last().click();
  await expect(page.getByRole("status")).toContainText(`Modeller: ${modelCount}`);
});

test("Turkish coverage and site navigation stay localized across sections", async ({ page }) => {
  for (const width of [320, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/open-weights?lang=tr");
    await expect(page.locator("html")).toHaveAttribute("lang", "tr");
    await page.locator(".open-weight-coverage summary").click();
    await expect(page.getByText("yayımlanmış modelli", { exact: true })).toBeVisible();
    const nav = page.getByRole("navigation", { name: "Ana gezinme", exact: true });
    await expect(nav.getByRole("link", { name: "Açık ağırlıklar", exact: true })).toHaveAttribute("aria-current", "page");
    await nav.getByRole("link", { name: "Frontier modeller", exact: true }).click();
    await expect(page).toHaveURL(/\/models\?lang=tr$/);
    await expect(page.getByRole("heading", { level: 1, name: "Göreve göre frontier modeller" })).toBeVisible();
    await page.locator(".site-nav__maps summary").click();
    await nav.getByRole("link", { name: "Görev taksonomisi", exact: true }).click();
    await expect(page).toHaveURL(/\/taxonomy\/tasks\?lang=tr$/);
    await expect(page.locator(".site-nav__maps")).toHaveAttribute("data-active", "true");
    await page.locator(".site-nav__maps summary").click();
    await page.keyboard.press("Escape");
    await expect(page.locator(".site-nav__maps")).not.toHaveAttribute("open", "");
    await expect(page.locator(".site-nav__maps summary")).toBeFocused();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});
