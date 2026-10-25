import { readFile } from "node:fs/promises";
import { expect, test } from "@playwright/test";
import { taxonomyMaps } from "../src/data/taxonomy";

for (const width of [1440, 390]) {
  for (const map of taxonomyMaps) {
    test(`${map.id} taxonomy at ${width}px: zoom, evidence, download and language`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`/taxonomy/${map.id}`);
      await expect(page).toHaveTitle(`AI ${map.id === "models" ? "model" : "task"} taxonomy | AI Ecosystem Atlas`);
      await expect(page.locator(".taxonomy-canvas svg")).toBeVisible();
      await expect(page.locator('.taxonomy-canvas a[href^="https://"]')).toHaveCount(map.id === "models" ? 3 : 0);
      if (map.id === "models") await expect(page.locator('.taxonomy-canvas a[data-family-id]')).toHaveCount(54);
      if (map.id === "tasks") await expect(page.locator('.taxonomy-canvas a[data-task-id]')).toHaveCount(87);
      await page.getByRole("button", { name: "100%", exact: true }).click();
      await expect(page.getByRole("status", { name: "Zoom level" })).toHaveText("100%");
      const viewport = page.getByRole("region", { name: "Scrollable taxonomy map" });
      expect(await viewport.evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
      await viewport.evaluate((element) => element.scrollTo(0, 0));
      await viewport.focus();
      await page.keyboard.press("ArrowRight");
      await expect.poll(() => viewport.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
      await page.getByRole("button", { name: "Fit width", exact: true }).click();
      await expect.poll(() => viewport.evaluate((element) => element.scrollWidth - element.clientWidth)).toBeLessThan(2);

      const downloadPromise = page.waitForEvent("download");
      await page.getByRole("link", { name: "Download SVG", exact: true }).click();
      const download = await downloadPromise;
      expect(download.suggestedFilename()).toBe(map.assetPath.split("/").at(-1));
      const content = await readFile((await download.path())!, "utf8");
      expect(content).toContain(map.title);
      expect(content).toBe(await readFile(`public${map.assetPath}`, "utf8"));

      await page.getByRole("button", { name: "Türkçe", exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`/taxonomy/${map.id}\\?lang=tr$`));
      await expect(page.locator("h1")).toHaveText(`Yapay zekâ ${map.id === "models" ? "model" : "görev"} taksonomisi`);
      await page.reload();
      await expect(page.getByRole("button", { name: "Türkçe", exact: true })).toHaveAttribute("aria-pressed", "true");
      await page.getByRole("link", { name: "Kaynakları görüntüle", exact: true }).click();
      await expect(page.locator("#taxonomy-sources")).toHaveAttribute("open", "");
      await expect(page.locator("#taxonomy-sources li")).toHaveCount(map.sourceIds.length);
      await expect(page.locator("#taxonomy-sources a").first()).toHaveAttribute("href", "https://aima.cs.berkeley.edu/contents.html");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      expect(errors).toEqual([]);
    });
  }
}

test("both maps are reachable from navigation and preserve language across pages", async ({ page }) => {
  await page.goto("/");
  const menu = page.getByRole("banner").locator(".site-nav__maps");
  await menu.locator("summary").click();
  await menu.getByRole("link", { name: "Model taxonomy", exact: true }).click();
  await expect(page).toHaveURL(/\/taxonomy\/models$/);
  await page.getByRole("button", { name: "Türkçe", exact: true }).click();
  await page.getByRole("navigation", { name: "Taksonomi haritaları" }).getByRole("link", { name: "Görev taksonomisi", exact: true }).click();
  await expect(page).toHaveURL(/\/taxonomy\/tasks\?lang=tr$/);
  await expect(page.locator("h1")).toHaveText("Yapay zekâ görev taksonomisi");
  await page.goBack();
  await expect(page).toHaveURL(/\/taxonomy\/models\?lang=tr$/);
  await expect(page.locator('.taxonomy-canvas a[href="/taxonomy/tasks?lang=tr#language-text"]')).toBeAttached();
  await menu.locator("summary").click();
  await menu.getByRole("link", { name: "Görev taksonomisi", exact: true }).click();
  await expect(page).toHaveURL(/\/taxonomy\/tasks\?lang=tr$/);
});

test("full screen can be entered and exited; task-family deep links render", async ({ page }) => {
  await page.goto("/taxonomy/tasks#vision-video-3d");
  await expect(page.locator(".taxonomy-canvas #vision-video-3d")).toBeInViewport();
  await page.getByRole("button", { name: "Full screen", exact: true }).click();
  await expect.poll(() => page.evaluate(() => Boolean(document.fullscreenElement))).toBe(true);
  await page.getByRole("button", { name: "Exit full screen", exact: true }).click();
  await expect.poll(() => page.evaluate(() => Boolean(document.fullscreenElement))).toBe(false);
});
