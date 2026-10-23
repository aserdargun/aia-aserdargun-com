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
