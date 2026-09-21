import { expect, test } from "@playwright/test";
import { learnDataset } from "../src/data/learn";

test("every public content route renders on desktop and narrow mobile", async ({ page }) => {
  test.setTimeout(180_000);
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const paths = ["/", "/learn", "/learn/review", "/learn/stats", ...learnDataset.concepts.map((c) => `/learn/${c.id}`)];
  for (const width of [1440, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of paths) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.getByRole("navigation", { name: "Continue learning / Öğrenmeye devam et" })).toBeAttached();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${path} at ${width}px`).toBe(true);
      expect(await page.locator('a[href*="minimax.com"]').count()).toBe(0);
    }
  }
  expect(errors).toEqual([]);
  await page.goto("/learn/self-attention");
  await expect(page.getByText(/sets disallowed future-position scores to −∞/)).toBeVisible();
  await page.screenshot({ path: "/tmp/aia-content-mobile.png", fullPage: true });
});

test("corrected evidence and historical model states are visible", async ({ page }) => {
  await page.goto("/?left=minimax&right=deepseek");
  const coding = page.getByRole("row", { name: /ide integration/i });
  await expect(coding).toContainText("Unknown");
  await expect(coding).toContainText("Insufficient evidence");
  await page.getByRole("button", { name: "Vendor comparison" }).click();
  await expect(page.getByText("DeepSeek-V4.1-Flash", { exact: true })).toBeVisible();
  const retired = page.locator(".vendor-record-list li").filter({ has: page.getByText("DeepSeek-V4-Flash", { exact: true }) });
  await expect(retired).toContainText("deprecated");
  await expect(retired).toContainText("Retired model");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.screenshot({ path: "/tmp/aia-content-desktop.png" });
  await page.locator(".vendor-record-list li").first().scrollIntoViewIfNeeded();
  await page.evaluate(() => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
  await page.screenshot({ path: "/tmp/aia-content-models.png" });
});
