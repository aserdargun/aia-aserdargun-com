import { expect, test, type Page } from "@playwright/test";

async function expectOverviewMatchesMap(page: Page) {
  await expect.poll(() => page.evaluate(() => {
    const viewport = document.querySelector<HTMLElement>(".taxonomy-viewport")!;
    const svg = viewport.querySelector("svg")!;
    const area = document.querySelector<SVGRectElement>(".taxonomy-minimap__area");
    if (!area) return false;
    const factor = svg.viewBox.baseVal.width / svg.getBoundingClientRect().width;
    return Math.abs(area.x.baseVal.value - viewport.scrollLeft * factor) < 2 &&
      Math.abs(area.y.baseVal.value - viewport.scrollTop * factor) < 2 &&
      Math.abs(area.width.baseVal.value - Math.min(svg.viewBox.baseVal.width, viewport.clientWidth * factor)) < 2 &&
      Math.abs(area.height.baseVal.value - Math.min(svg.viewBox.baseVal.height, viewport.clientHeight * factor)) < 2;
  })).toBe(true);
}

async function expectOverviewInsideMap(page: Page) {
  const viewport = (await page.locator(".taxonomy-viewport").boundingBox())!;
  const mini = (await page.getByRole("group", { name: /^(Mini map|Mini harita)$/ }).boundingBox())!;
  expect(mini.x).toBeGreaterThan(viewport.x);
  expect(mini.y).toBeGreaterThan(viewport.y);
  expect(mini.x + mini.width).toBeLessThan(viewport.x + viewport.width);
  expect(mini.y + mini.height).toBeLessThan(viewport.y + viewport.height);
}

for (const scenario of [
  { map: "tasks", query: "task=time-series-forecasting" },
  { map: "models", query: "family=transformers" },
]) {
  test(`${scenario.map}: mini map tracks pan, zoom, panel resizing and fullscreen; clicking jumps without changing selection`, async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1000 });
    await page.goto(`/taxonomy/${scenario.map}?${scenario.query}`);
    const viewport = page.locator(".taxonomy-viewport");
    const mini = page.getByRole("button", { name: "Navigate using mini map", exact: true });
    const frame = page.locator(".taxonomy-minimap__area");
    await expect(page.getByRole("status", { name: "Zoom level" })).toHaveText("100%");
    await expect.poll(() => mini.locator("img").evaluate((img) => (img as HTMLImageElement).complete && (img as HTMLImageElement).naturalWidth > 0)).toBe(true);
    await expectOverviewInsideMap(page);
    await expectOverviewMatchesMap(page);
    const url = page.url();
    const bounds = (await mini.boundingBox())!;
    await mini.click({ position: { x: bounds.width * 0.7, y: bounds.height * 0.6 } });
    // The clicked map point must be at the centre of the main visible area.
    await expect.poll(() => viewport.evaluate((element) => {
      const svg = element.querySelector("svg")!.getBoundingClientRect();
      return Math.abs((element.scrollLeft + element.clientWidth / 2) / svg.width - 0.7) < 0.01 &&
        Math.abs((element.scrollTop + element.clientHeight / 2) / svg.height - 0.6) < 0.01;
    })).toBe(true);
    await expectOverviewMatchesMap(page);
    await expect(page).toHaveURL(url);
    await expect(page.getByRole("complementary")).toBeVisible();
    await expect(page.getByRole("status", { name: "Zoom level" })).toHaveText("100%");

    const beforeZoom = Number(await frame.getAttribute("width"));
    const mapBounds = (await viewport.boundingBox())!;
    await page.mouse.move(mapBounds.x + 200, mapBounds.y + 200);
    await page.mouse.wheel(0, -120);
    await expect.poll(async () => Number(await frame.getAttribute("width"))).toBeLessThan(beforeZoom);
    await expectOverviewMatchesMap(page);
    const beforeDrag = Number(await frame.getAttribute("x"));
    await page.mouse.move(mapBounds.x + 300, mapBounds.y + 200);
    await page.mouse.down();
    await page.mouse.move(mapBounds.x + 220, mapBounds.y + 150, { steps: 6 });
    await page.mouse.up();
    await expect.poll(async () => Number(await frame.getAttribute("x"))).toBeGreaterThan(beforeDrag);
    await expectOverviewMatchesMap(page);
    await expect(page).toHaveURL(url);
    await page.getByRole("button", { name: "Focus selected", exact: true }).click();
    await expectOverviewMatchesMap(page);
    await page.setViewportSize({ width: 1024, height: 768 });
    await expectOverviewInsideMap(page);
    await expectOverviewMatchesMap(page);
    await page.getByRole("button", { name: "Full screen", exact: true }).click();
    await expect.poll(() => page.evaluate(() => Boolean(document.fullscreenElement))).toBe(true);
    await expectOverviewInsideMap(page);
    await expectOverviewMatchesMap(page);
    await page.getByRole("button", { name: "Exit full screen", exact: true }).click();
    await page.getByRole("button", { name: "Fit width", exact: true }).click();
    await expectOverviewMatchesMap(page);
    await expect(frame).toHaveAttribute("x", "0");
    await page.getByRole("button", { name: scenario.map === "tasks" ? "Close model panel" : "Close family panel" }).click();
    await expect(page.getByRole("complementary")).toHaveCount(0);
    await expectOverviewMatchesMap(page);
    await expectOverviewInsideMap(page);
  });

  test(`${scenario.map}: mini map supports keyboard movement, edge clamping, collapse and both languages`, async ({ page }) => {
    await page.goto(`/taxonomy/${scenario.map}?${scenario.query}`);
    const viewport = page.locator(".taxonomy-viewport");
    const mini = page.getByRole("button", { name: "Navigate using mini map", exact: true });
    await expect(page.getByRole("status", { name: "Zoom level" })).toHaveText("100%");
    await mini.focus();
    await mini.press("Home");
    await expect.poll(() => viewport.evaluate((element) => element.scrollLeft + element.scrollTop)).toBe(0);
    await mini.press("ArrowRight");
    await mini.press("ArrowDown");
    await expect.poll(() => viewport.evaluate((element) => element.scrollLeft > 0 && element.scrollTop > 0)).toBe(true);
    await expectOverviewMatchesMap(page);
    await mini.press("End");
    await expect.poll(() => viewport.evaluate((element) =>
      Math.abs(element.scrollWidth - element.clientWidth - element.scrollLeft) < 2 &&
      Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 2)).toBe(true);
    await expectOverviewMatchesMap(page);
    await mini.press("Enter");
    await expect(viewport).toBeFocused();
    await page.getByRole("button", { name: "Hide mini map", exact: true }).click();
    await expect(mini).toBeHidden();
    await expect(page.getByRole("button", { name: "Show mini map", exact: true })).toHaveAttribute("aria-expanded", "false");
    await page.getByRole("button", { name: "Fit width", exact: true }).click();
    await page.getByRole("button", { name: "Türkçe", exact: true }).click();
    await page.getByRole("button", { name: "Mini haritayı göster", exact: true }).click();
    await expect(page.getByRole("button", { name: "Mini haritayla gezin", exact: true })).toBeVisible();
    await expectOverviewMatchesMap(page);
    await expect(page.locator(".taxonomy-minimap__area")).toHaveAttribute("x", "0");
  });
}

test.describe("mini map on touch screens", () => {
  test.use({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } });
  for (const map of ["tasks", "models"]) {
    test(`${map}: tap navigation is usable without a details panel and with one open`, async ({ page }) => {
      await page.goto(`/taxonomy/${map}?lang=tr`);
      await page.getByRole("button", { name: "%100", exact: true }).tap();
      const mini = page.getByRole("button", { name: "Mini haritayla gezin", exact: true });
      await mini.scrollIntoViewIfNeeded();
      const bounds = (await mini.boundingBox())!;
      await page.touchscreen.tap(bounds.x + bounds.width * 0.65, bounds.y + bounds.height * 0.55);
      const viewport = page.locator(".taxonomy-viewport");
      await expect.poll(() => viewport.evaluate((element) => element.scrollLeft > 0 && element.scrollTop > 0)).toBe(true);
      await expectOverviewMatchesMap(page);
      await expect(page.getByRole("complementary")).toHaveCount(0);
      await page.locator(map === "tasks" ? "#taxonomy-task-select" : "#taxonomy-family-select").selectOption(map === "tasks" ? "time-series-forecasting" : "transformers");
      await page.getByRole("button", { name: "Seçilene odaklan", exact: true }).tap();
      await expectOverviewInsideMap(page);
      await expectOverviewMatchesMap(page);
      await expect(page.getByRole("complementary")).toHaveCount(1);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    });
  }
});
