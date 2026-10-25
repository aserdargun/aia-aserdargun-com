import { expect, test } from "@playwright/test";

for (const locale of ["en", "tr"] as const) {
  for (const width of [1440, 390]) {
    test(`${locale} at ${width}px: decision behavior, mode overlap and hosted references stay distinct`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`/taxonomy/models?lang=${locale}&family=structured-decision-models`);
      await expect(page).toHaveTitle(/AI model taxonomy/);
      const panel = page.locator("#model-family-panel");
      await expect(panel.locator("#model-family-title")).toHaveText(locale === "tr" ? "Yapılandırılmış Karar Modelleri" : "Structured Decision Models");
      await expect(panel).toContainText("Strands Decider");
      await expect(panel).toContainText("Perplexity Decider v1.2");
      await expect(panel).toContainText("Perplexity Decider Flash v1.2");
      await expect(panel).toContainText("Cloudflare Clef");
      await expect(panel.locator(".model-family-card")).toHaveCount(4);
      const hosted = panel.locator('[data-hosted-model="jev-1-14"]');
      await expect(hosted).toContainText("jev-1.14.0");
      await expect(hosted.locator('a[href="https://docs.typesafe.ai/models"]')).toHaveCount(2);
      await expect(hosted.locator('.task-model-weights, .model-artifact-details, a[href*="/tree/"]')).toHaveCount(0);
      await expect(hosted).toContainText(locale === "tr" ? "temel mimariyi açıklamıyor" : "do not disclose its backbone");
      const search = panel.getByRole("searchbox");
      await search.fill("Jev");
      await expect(hosted).toBeVisible();
      await expect(panel.getByText(locale === "tr" ? "Bu aramayla eşleşen model yok." : "No models match this search.", { exact: true })).toHaveCount(0);
      await search.fill(locale === "tr" ? "Eylem" : "Action");
      const strands = panel.locator(".model-family-card").filter({ hasText: "Strands Decider" });
      await expect(strands).toHaveCount(1);
      await expect(hosted).toBeVisible();
      await expect(strands.locator('.model-family-tasks a[href*="action-selection"]')).toHaveText(locale === "tr" ? "Eylem Seçimi →" : "Action Selection →");
      await search.fill("");
      await page.getByRole("combobox", { name: locale === "tr" ? "Model ailesi veya kavram seç" : "Select a model family or concept" }).selectOption("hybrid-adaptive-inference");
      await expect(panel).toContainText("Qwen3-4B");
      await expect(panel).toContainText("enable_thinking");
      await expect(panel.locator('[data-hosted-model]')).toHaveCount(0);
      for (const id of ["action-selection", "rubric-based-scoring"]) {
        await page.goto(`/taxonomy/tasks?lang=${locale}&task=${id}`);
        const task = page.locator("#task-model-panel");
        await expect(task.locator(".task-benchmarks")).toHaveAttribute("data-benchmark-status", "gap");
        await expect(task.locator(".task-benchmarks table")).toHaveCount(0);
        await expect(task).toContainText("Strands Decider");
        await expect(task.locator('[data-hosted-model="jev-1-14"]')).toContainText("Jev 1.14");
        await expect(task.locator("#task-model-title")).toHaveText(id === "action-selection"
          ? (locale === "tr" ? "Eylem Seçimi" : "Action Selection")
          : (locale === "tr" ? "Ölçütlere Göre Puanlama" : "Rubric-Based Scoring"));
      }
      await page.getByRole("button", { name: locale === "tr" ? "English" : "Türkçe", exact: true }).click();
      await expect(page.locator("#task-model-title")).toHaveText(locale === "tr" ? "Rubric-Based Scoring" : "Ölçütlere Göre Puanlama");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect(errors).toEqual([]);
      await page.goto(`/open-weights?q=Jev&lang=${locale}`);
      await expect(page.locator('[data-hosted-model="jev-1-14"]')).toHaveCount(0);
      await expect(page.locator("main").getByRole("heading", { name: "Jev 1.14" })).toHaveCount(0);
    });
  }
}
