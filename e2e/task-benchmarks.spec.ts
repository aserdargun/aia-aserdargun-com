import { expect, test } from "@playwright/test";

for (const locale of ["en", "tr"] as const) {
  test(`${locale}: benchmark comparisons, citations, bounded winners and gaps work on mobile`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto(`/taxonomy/tasks?lang=${locale}&task=time-series-forecasting`);
    const panel = page.locator(".task-benchmarks");
    await expect(panel).toHaveAttribute("data-benchmark-status", "comparison");
    const result = panel.locator('[data-benchmark-id="timestral-gift"]');
    await expect(result.locator('tr[data-leader="true"]')).toContainText("Timestral-209M");
    await expect(result.locator('tr[data-leader="true"]')).toContainText(locale === "tr" ? "0,658" : "0.658");
    await expect(result.locator('.benchmark-result__body > a[href*="mistralai/Timestral-209M/blob/"]')).toHaveCount(1);
    await expect(result).toContainText("2026-10-15");
    await panel.locator(".benchmark-candidates summary").click();
    await expect(panel.locator('.benchmark-candidates a[href*="mistralai/Timestral-209M/tree/"]')).toHaveAttribute("href", /[a-f0-9]{40}$/);
    await expect(panel.locator(".benchmark-candidates")).toContainText("Modified MIT");

    const select = page.getByRole("combobox", { name: locale === "tr" ? "Görev seç" : "Select a task" });
    await select.selectOption("re-ranking");
    await expect(panel.locator('tr[data-leader="true"]')).toContainText("Qwen3-Reranker-4B");
    await expect(panel).toContainText(locale === "tr" ? "Önceki yıl referansı" : "Prior-year reference");
    await select.selectOption("formal-theorem-proving");
    await expect(panel).toHaveAttribute("data-benchmark-status", "single");
    await expect(panel.locator('tr[data-leader="true"]')).toHaveCount(0);
    await expect(panel).toContainText("Pass@72");
    await select.selectOption("missing-value-imputation");
    await expect(panel).toHaveAttribute("data-benchmark-status", "comparison");
    await expect(panel.locator('tr[data-leader="true"]')).toContainText("MatrixFormer+");
    await expect(panel.locator('tr[data-leader="true"]')).toContainText(locale === "tr" ? "1,579644" : "1.579644");
    await select.selectOption("rating-prediction");
    await expect(panel.locator('tr[data-leader="true"]')).toHaveCount(2);
    await select.selectOption("part-of-speech-tagging");
    await expect(panel).toHaveAttribute("data-benchmark-status", "single");
    await panel.locator(".benchmark-candidates summary").click();
    await expect(panel.locator('.benchmark-candidates a[href="https://hdl.handle.net/11234/1-6046"]')).toHaveCount(1);
    await select.selectOption("classical-planning");
    await expect(panel).toHaveAttribute("data-benchmark-status", "gap");
    await expect(panel.locator("table")).toHaveCount(0);
    await expect(panel).toContainText("RankSVM");
    await expect(panel.locator(".benchmark-candidates")).toContainText("GOOSE");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(errors).toEqual([]);
  });
}

test("evidence filters and task search preserve a selected deep link and language navigation", async ({ page }) => {
  await page.goto("/taxonomy/tasks?task=classical-planning");
  await page.getByRole("button", { name: /55 with comparisons/ }).click();
  await expect(page.locator('#taxonomy-task-select option[value="time-series-forecasting"]')).toHaveCount(1);
  await expect(page.locator('#taxonomy-task-select option[value="code-translation"]')).toHaveCount(0);
  await expect(page.getByRole("combobox", { name: "Select a task" })).toHaveValue("classical-planning");
  await page.getByRole("searchbox", { name: "Find a task" }).fill("forecast");
  await expect(page.locator('#taxonomy-task-select option[value="re-ranking"]')).toHaveCount(0);
  await page.getByRole("combobox", { name: "Select a task" }).selectOption("time-series-forecasting");
  await page.getByRole("button", { name: "Türkçe", exact: true }).click();
  await expect(page).toHaveURL(/lang=tr&task=time-series-forecasting/);
  await expect(page.locator(".task-benchmarks")).toContainText("Kanıt neyi destekliyor?");
  await page.reload();
  await expect(page.getByRole("searchbox", { name: "Görev ara" })).toHaveValue("");
  await expect(page.locator('#taxonomy-task-select option')).toHaveCount(86);
});
