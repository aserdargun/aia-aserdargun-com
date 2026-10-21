import { expect, test } from "@playwright/test";
import { taxonomyTasks } from "../src/data/task-models";

for (const width of [1440, 390]) {
  test(`${width}px: task click opens models, checkpoint files, license and primary evidence`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/taxonomy/tasks?lang=tr");
    await page.locator('a[data-task-id="automatic-speech-recognition"]').click();
    const panel = page.getByRole("complementary", { name: "Automatic Speech Recognition" });
    await expect(panel).toBeVisible();
    await expect(panel).toBeFocused();
    await expect(page).toHaveURL(/lang=tr&task=automatic-speech-recognition$/);
    await expect(panel.getByRole("heading", { name: "Qwen3-ASR-1.7B" })).toBeVisible();
    const qwenAsr = panel.locator(".task-model-card").filter({ has: page.getByRole("heading", { name: "Qwen3-ASR-1.7B" }) });
    await expect(qwenAsr.getByRole("link", { name: "Ağırlık dosyaları" })).toHaveAttribute("href", /huggingface.co\/Qwen\/Qwen3-ASR-1.7B\/tree\/[a-f0-9]{40}$/);
    await expect(qwenAsr.getByRole("link", { name: "Apache-2.0" })).toHaveAttribute("href", "https://huggingface.co/Qwen/Qwen3-ASR-1.7B");
    await expect(panel.getByRole("link", { name: "Qwen3-ASR-1.7B — model card" })).toBeVisible();
    await expect(panel.getByRole("link", { name: "Görev tanımının kaynağı" })).toHaveAttribute("href", /^https:/);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.reload();
    await expect(panel).toBeVisible();
    await page.getByRole("button", { name: "English", exact: true }).click();
    await expect(page).toHaveURL(/\?task=automatic-speech-recognition$/);
    await expect(qwenAsr.getByRole("link", { name: "Weight files" })).toBeVisible();
    await page.getByRole("combobox", { name: "Select a task" }).selectOption("constraint-satisfaction");
    await expect(page.getByRole("heading", { name: "HRM · Sudoku Extreme 9×9" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Research result and scope" })).toBeVisible();
    await expect(page.locator(".task-research-review")).toContainText("not a complete solver");
    await expect(page.locator(".task-model-card")).toHaveCount(1);
    await page.goBack();
    await expect(panel).toBeVisible();
    await page.goForward();
    await expect(page.getByRole("heading", { name: "HRM · Sudoku Extreme 9×9" })).toBeVisible();
    await page.getByRole("button", { name: "Close model panel" }).click();
    await expect(page.locator("#task-model-panel")).toHaveCount(0);
    await expect(page.locator('a[data-task-id="constraint-satisfaction"]')).toBeFocused();
    expect(errors).toEqual([]);
  });
}

test("keyboard, invalid IDs and fullscreen preserve task interaction", async ({ page }) => {
  await page.goto("/taxonomy/tasks?task=unknown");
  await expect(page.getByText("This task identifier is not in the catalogue.", { exact: false })).toBeVisible();
  const task = page.locator('a[data-task-id="code-clone-detection"]');
  await task.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByText("Adaptation required", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Full screen", exact: true }).click();
  await expect.poll(() => page.evaluate(() => Boolean(document.fullscreenElement))).toBe(true);
  await page.getByRole("combobox", { name: "Select a task" }).selectOption("instance-segmentation");
  await expect(page.getByRole("heading", { name: "SAM 3" })).toBeVisible();
  await expect(page.getByText("Acceptance or approval required", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Exit full screen", exact: true }).click();
  await page.getByRole("complementary").focus();
  await page.keyboard.press("Escape");
  await expect(page.locator("#task-model-panel")).toHaveCount(0);
});

test("every task selects its own evidence or explicit coverage gap", async ({ page }) => {
  test.setTimeout(120_000);
  await page.goto("/taxonomy/tasks");
  for (const task of taxonomyTasks) {
    await page.getByRole("combobox", { name: "Select a task" }).selectOption(task.id);
    const panel = page.getByRole("complementary", { name: task.name, exact: true });
    await expect(panel.getByRole("heading", { name: task.name, exact: true })).toBeVisible();
    await expect(panel.locator(".task-model-card")).toHaveCount(task.recommendations.length);
    await expect(panel.locator('a[href^="https://"]')).not.toHaveCount(0);
  }
});

for (const locale of ["en", "tr"] as const) {
  test(`${locale}: researched tasks disclose scope, non-neural parameters and publisher artifact identities`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto(`/taxonomy/tasks?lang=${locale}&task=classical-planning`);
    const panel = page.locator("#task-model-panel");
    await expect(panel.getByRole("heading", { name: "GOOSE · IPC23LT Blocks World" })).toBeVisible();
    await expect(panel.locator('[data-research-outcome="pipeline"]')).toBeVisible();
    await expect(panel.locator('[data-parameter-kind="statistical"]')).toBeVisible();
    await panel.locator(".task-research-review summary").click();
    await expect(panel.locator('.task-research-review a[href*="DillonZChen/goose"]')).toHaveCount(4);

    const select = page.getByRole("combobox", { name: locale === "tr" ? "Görev seç" : "Select a task" });
    await select.selectOption("clustering");
    await panel.locator(".model-artifact-details summary").click();
    await expect(panel.locator(".model-artifact-details")).toContainText("scan_cifar-10.pth.tar");
    await expect(panel.locator(".model-artifact-details")).toContainText("1v6b6jJY5M4-duSqWpGFmdf9e9T3dPrx0");

    await select.selectOption("robot-motion-planning");
    await panel.locator(".model-artifact-details summary").click();
    await expect(panel.locator(".model-artifact-details")).toContainText("d2eb2da582f1934dea75ce9f4e5efbc9");
    await expect(panel.locator(".model-artifact-details")).toContainText(locale === "tr" ? "yeniden hesaplanmadı" : "not been recomputed");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    const researched = taxonomyTasks.filter((task) => "review" in task);
    expect(researched).toHaveLength(12);
    for (const task of researched) {
      await select.selectOption(task.id);
      await expect(panel.locator(".task-research-review")).toBeVisible();
      await expect(panel.locator(".task-model-card")).toHaveCount(task.recommendations.length);
    }
  });
}
