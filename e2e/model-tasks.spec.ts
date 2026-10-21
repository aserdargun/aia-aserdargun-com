import { readFile } from "node:fs/promises";
import { expect, test } from "@playwright/test";
import { models } from "../src/data/models";

const visibleModelCount = models.filter((model) => model.lifecycle !== "legacy" && model.lifecycle !== "deprecated").length;
const imageModel = models.find((model) => model.id === "glm-image")!;

for (const viewport of [{ name: "desktop", width: 1440, height: 900 }, { name: "mobile", width: 390, height: 844 }]) {
  test(`${viewport.name}: groups models by task in both languages and opens evidence`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    await page.setViewportSize(viewport);
    await page.goto("/");
    await page.getByRole("navigation", { name: "Primary navigation" }).getByRole("link", { name: "Models", exact: true }).click();
    await expect(page).toHaveTitle("Models by task | AI Ecosystem Atlas");
    await expect(page.getByRole("heading", { level: 1, name: "Models by task" })).toBeVisible();
    await expect(page.getByRole("status")).toHaveText(`Unique models: ${visibleModelCount} · Task groups: 7`);
    await expect(page.locator(".model-record").first()).toBeInViewport();
    await page.getByRole("button", { name: "Türkçe", exact: true }).click();
    await expect(page.getByRole("heading", { level: 1, name: "Göreve göre modeller" })).toBeVisible();
    await expect(page.locator(".model-record").first()).toBeInViewport();
    await page.getByRole("button", { name: /^Görsel üretimi/ }).click();
    await expect(page.getByRole("status")).toHaveText("Benzersiz model: 1 · Görev grupları: 1");
    const group = page.getByRole("region", { name: "Görsel üretimi", exact: true });
    await group.locator("summary").filter({ hasText: "GLM-Image" }).click();
    await expect(group.getByText("Görüntü", { exact: true })).toBeVisible();
    await expect(group.getByText(imageModel.verifiedAt, { exact: true })).toBeVisible();
    await expect(group.getByRole("link", { name: /Resmî kaynaklar/ }).filter({ hasText: "GLM-Image" })).toHaveAttribute("href", "https://docs.z.ai/guides/image/glm-image");
    await page.getByRole("button", { name: "English", exact: true }).click();
    await expect(page.getByRole("region", { name: "Image generation", exact: true })).toBeVisible();
    await expect(page.getByRole("status")).toHaveText("Unique models: 1 · Task groups: 1");
    await page.getByRole("combobox", { name: "Vendor", exact: true }).selectOption("anthropic");
    await expect(page.getByRole("heading", { name: "No models match these filters." })).toBeVisible();
    await expect(page.getByRole("button", { name: "Export CSV" })).toBeDisabled();
    await page.getByRole("button", { name: "Clear filters", exact: true }).first().click();
    await page.getByRole("searchbox", { name: "Search models" }).fill("Qwen");
    await expect(page.getByRole("status")).toContainText("Unique models: 4");
    await page.getByRole("button", { name: /^Coding/ }).click();
    await expect(page.getByRole("status")).toHaveText("Unique models: 3 · Task groups: 1");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
    expect(errors).toEqual([]);
  });
}

test("task links survive reload and history; retired records are opt-in", async ({ page }) => {
  await page.goto("/models?task=visual-understanding&vendor=deepseek&lang=tr");
  await expect(page.getByRole("status")).toHaveText("Benzersiz model: 1 · Görev grupları: 1");
  await page.getByRole("checkbox", { name: /Eski ve kullanımdan kaldırılmış/ }).check();
  await expect(page.getByRole("status")).toHaveText("Benzersiz model: 2 · Görev grupları: 1");
  await expect(page.getByText("Kullanımdan kaldırılmış", { exact: true }).first()).toBeVisible();
  await page.reload();
  await expect(page.getByRole("checkbox")).toBeChecked();
  await expect(page.getByRole("status")).toHaveText("Benzersiz model: 2 · Görev grupları: 1");
  await page.goBack();
  await expect(page.getByRole("checkbox")).not.toBeChecked();
  await expect(page.getByRole("status")).toHaveText("Benzersiz model: 1 · Görev grupları: 1");
  await page.goForward();
  await expect(page.getByRole("status")).toHaveText("Benzersiz model: 2 · Görev grupları: 1");
});

test("downloads only the selected task and preserves source URLs", async ({ page }) => {
  await page.goto("/models?task=image-generation&vendor=zai&lang=tr");
  const csvDownload = page.waitForEvent("download");
  await page.getByRole("button", { name: "CSV indir", exact: true }).click();
  const csv = await csvDownload;
  expect(csv.suggestedFilename()).toBe("aia-models-by-task.csv");
  const csvContent = await readFile((await csv.path())!, "utf8");
  expect(csvContent).toContain("Görsel üretimi");
  expect(csvContent).toContain("GLM-Image");
  expect(csvContent).toContain("https://docs.z.ai/guides/image/glm-image");
  expect(csvContent).not.toContain("GPT-6");
  const excelDownload = page.waitForEvent("download");
  await page.getByRole("button", { name: "Excel indir", exact: true }).click();
  const excel = await excelDownload;
  expect(excel.suggestedFilename()).toBe("aia-models-by-task.xls");
  const xml = await readFile((await excel.path())!, "utf8");
  expect(xml).toContain("GLM-Image");
  expect(xml).not.toContain("GPT-6");
});
