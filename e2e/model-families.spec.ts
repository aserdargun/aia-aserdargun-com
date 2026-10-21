import { expect, test } from "@playwright/test";
import { modelFamilies } from "../src/data/model-families";

for (const width of [1440, 390]) {
  test(`${width}px: family opens models, tasks, membership evidence and checkpoint links`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/taxonomy/models?lang=tr");
    await page.locator('a[data-family-id="convolutional-networks"]').click();
    const panel = page.getByRole("complementary", { name: "Convolutional Networks", exact: true });
    await expect(panel).toBeVisible();
    await expect(panel).toBeFocused();
    await expect(page).toHaveURL(/lang=tr&family=convolutional-networks$/);
    await expect(panel.getByRole("heading", { name: "ECAPA-TDNN · VoxCeleb" })).toBeVisible();
    const ecapa = panel.locator(".model-family-card").filter({ has: page.getByRole("heading", { name: "ECAPA-TDNN · VoxCeleb" }) });
    await expect(ecapa.getByRole("link", { name: "Ağırlık dosyaları" })).toHaveAttribute("href", /huggingface.co\/speechbrain\/spkrec-ecapa-voxceleb\/tree\/[a-f0-9]{40}$/);
    await expect(ecapa.getByRole("link", { name: "Apache-2.0" })).toHaveAttribute("href", "https://huggingface.co/speechbrain/spkrec-ecapa-voxceleb");
    await expect(panel.getByRole("link", { name: "Kavram tanımının kaynağı" })).toHaveAttribute("href", "https://www.deeplearningbook.org/");
    await expect(panel.getByRole("link", { name: "Speaker Verification", exact: false })).toHaveAttribute("href", "/taxonomy/tasks?lang=tr&task=speaker-verification");
    const verification = panel.locator(".model-family-tasks > li").filter({ hasText: "Speaker Verification" });
    await verification.locator("summary").click();
    await expect(verification.getByRole("link", { name: "ECAPA-TDNN · VoxCeleb — model card" })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.reload();
    await expect(panel).toBeVisible();
    await page.getByRole("button", { name: "English", exact: true }).click();
    await expect(page).toHaveURL(/\?family=convolutional-networks$/);
    await expect(ecapa.getByRole("link", { name: "Weight files" })).toBeVisible();
    await page.getByRole("combobox", { name: "Select a model family or concept" }).selectOption("kernel-methods");
    await expect(page.getByRole("heading", { name: "BRISQUE · LIVE-R2 RBF-SVR" })).toBeVisible();
    await expect(page.locator(".model-family-review")).toContainText("support vectors");
    await expect(page.locator(".model-family-card")).toHaveCount(1);
    await page.goBack();
    await expect(panel).toBeVisible();
    await page.goForward();
    await page.getByRole("button", { name: "Close family panel" }).click();
    await expect(page.locator("#model-family-panel")).toHaveCount(0);
    await expect(page.locator('a[data-family-id="kernel-methods"]')).toBeFocused();
    expect(errors).toEqual([]);
  });
}

test("family filtering and task drill-through retain adaptation evidence and Turkish", async ({ page }) => {
  await page.goto("/taxonomy/models?lang=tr&family=transformers");
  const search = page.getByRole("searchbox", { name: "Bu ailede filtrele" });
  await search.fill("CodeT5 base");
  await expect(page.locator(".model-family-card")).toHaveCount(1);
  await expect(page.locator('.model-family-card [data-evidence="adaptation"]')).toHaveCount(4);
  await search.fill("no model with this name");
  await expect(page.getByText("Bu aramayla eşleşen model yok.")).toBeVisible();
  await search.fill("Code Clone Detection");
  await expect(page.locator(".model-family-card")).toHaveCount(1);
  await page.getByRole("link", { name: "Code Clone Detection →", exact: true }).click();
  await expect(page).toHaveURL(/\/taxonomy\/tasks\?lang=tr&task=code-clone-detection$/);
  await expect(page.getByRole("complementary", { name: "Code Clone Detection" })).toBeVisible();
  await expect(page.getByText("Uyarlama gerekiyor", { exact: true })).toBeVisible();
  await page.goBack();
  await expect(page.getByRole("heading", { name: "Transformers", exact: true })).toBeVisible();
});

test("keyboard selection, component scope, invalid IDs and fullscreen work for families", async ({ page }) => {
  await page.goto("/taxonomy/models?family=unknown");
  await expect(page.getByText("This family identifier is not in the catalogue.", { exact: false })).toBeVisible();
  await page.locator('a[data-family-id="variational-autoencoders"]').focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("complementary", { name: "Variational Autoencoders" })).toBeFocused();
  await expect(page.locator('.model-family-card [data-relation="component"]')).toHaveCount(3);
  await page.getByRole("button", { name: "Full screen", exact: true }).click();
  await expect.poll(() => page.evaluate(() => Boolean(document.fullscreenElement))).toBe(true);
  await page.getByRole("combobox", { name: "Select a model family or concept" }).selectOption("mixture-of-experts");
  await expect(page.getByRole("complementary", { name: "Mixture of Experts" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Qwen3-Coder-Next" })).toBeVisible();
  await page.getByRole("button", { name: "Exit full screen", exact: true }).click();
  await page.getByRole("complementary").focus();
  await page.keyboard.press("Escape");
  await expect(page.locator("#model-family-panel")).toHaveCount(0);
  await expect(page.locator('a[data-family-id="mixture-of-experts"]')).toBeFocused();
});

test("every model concept opens its own memberships or explicit scope gap", async ({ page }) => {
  test.setTimeout(120_000);
  await page.goto("/taxonomy/models");
  for (const family of modelFamilies) {
    await page.getByRole("combobox", { name: "Select a model family or concept" }).selectOption(family.id);
    const panel = page.getByRole("complementary", { name: family.name, exact: true });
    await expect(panel.getByRole("heading", { name: family.name, exact: true })).toBeVisible();
    await expect(panel.locator(".model-family-card")).toHaveCount(family.models.length);
    await expect(panel.getByRole("link", { name: "Concept definition source" })).toHaveAttribute("href", /^https:/);
    if (family.models.length) await expect(panel.locator('.model-family-tasks a[href^="/taxonomy/tasks"]')).not.toHaveCount(0);
    else await expect(panel.getByRole("heading", { name: "No verified model mapping in this catalogue" })).toBeVisible();
    if ("review" in family) {
      await expect(panel.getByRole("heading", { name: "Research result and scope" })).toBeVisible();
      await panel.getByText(`Research sources (${family.review!.sourceIds.length})`, { exact: true }).click();
      await expect(panel.locator(".model-family-review a")).toHaveCount(family.review!.sourceIds.length);
    }
  }
});

for (const width of [1440, 390]) {
  test(`${width}px: research separates rules, statistical parameters and nonparametric pipeline components`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/taxonomy/models?lang=tr&family=logical-representations");
    const panel = page.locator("#model-family-panel");
    await expect(panel.getByText("Öğrenilmiş kurallar ve destek istatistikleri", { exact: true })).toBeVisible();
    await expect(panel.getByRole("link", { name: "Öğrenilmiş kural dosyaları" })).toHaveAttribute("href", /anyburl-rules-c5-3600$/);
    const anyburl = panel.locator(".model-family-card").filter({ has: page.locator("#family-model-anyburl-rules") });
    await anyburl.getByText("Model dosyasının kimliği", { exact: true }).click();
    await expect(anyburl.locator(".model-artifact-details")).toContainText("anyburl-rules-c5-3600");
    await panel.getByRole("link", { name: "Link Prediction →", exact: true }).click();
    await expect(page).toHaveURL(/task=link-prediction$/);
    await expect(page.getByRole("heading", { name: "AnyBURL · WN18RR learned rules" })).toBeVisible();
    await page.goBack();
    await panel.getByRole("link", { name: "Classical Planning →", exact: true }).click();
    await expect(page.getByRole("heading", { name: "GOOSE · IPC23LT Blocks World" })).toBeVisible();
    await expect(page.locator('[data-research-outcome="pipeline"]')).toBeVisible();
    await page.goBack();
    const selector = page.getByRole("combobox", { name: "Model ailesi veya kavram seç" });
    await selector.selectOption("nearest-neighbor-models");
    await expect(panel.locator('[data-relation="component"]')).toHaveCount(1);
    await expect(panel.locator(".model-family-review")).toContainText("öğrenilmiş kNN ağırlıkları yoktur");
    await panel.getByText("Model dosyasının kimliği", { exact: true }).click();
    await expect(panel.locator(".model-artifact-details")).toContainText("WavLM-Large.pt");
    await expect(panel.locator(".model-artifact-details")).toContainText("prematch_g_02500000.pt");
    await selector.selectOption("normalizing-flows");
    const glow = panel.locator(".model-family-card").filter({ has: page.locator("#family-model-glow") });
    await glow.getByText("Model dosyasının kimliği", { exact: true }).click();
    await expect(glow.locator(".model-artifact-details")).toContainText("değişmez Git ağırlık sürümü değildir");
    await expect(glow.locator(".model-artifact-details")).toContainText("ETag");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.getByRole("button", { name: "English", exact: true }).click();
    await expect(panel.getByRole("heading", { name: "Research result and scope" })).toBeVisible();
    await expect(glow.getByText("Artifact identity", { exact: true })).toBeVisible();
  });
}
