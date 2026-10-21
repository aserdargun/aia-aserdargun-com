import { expect, test, type Locator } from "@playwright/test";

async function camera(viewport: Locator) {
  return viewport.evaluate((element) => {
    const svg = element.querySelector("svg")!;
    return {
      x: element.scrollLeft, y: element.scrollTop,
      scale: svg.getBoundingClientRect().width / svg.viewBox.baseVal.width,
      pageY: window.scrollY,
    };
  });
}

async function expectCardInMap(viewport: Locator, card: Locator) {
  await expect.poll(async () => {
    const map = await viewport.boundingBox();
    const leaf = await card.boundingBox();
    return Boolean(map && leaf && leaf.x >= map.x && leaf.y >= map.y &&
      leaf.x + leaf.width <= map.x + map.width && leaf.y + leaf.height <= map.y + map.height);
  }).toBe(true);
}

for (const scenario of [
  { map: "tasks", param: "task", id: "time-series-forecasting", select: "Select a task" },
  { map: "models", param: "family", id: "transformers", select: "Select a model family or concept" },
]) {
  test(`${scenario.map}: wheel zoom holds the pointer location; panel wheel stays independent`, async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1000 });
    await page.goto(`/taxonomy/${scenario.map}?${scenario.param}=${scenario.id}`);
    const viewport = page.locator(".taxonomy-viewport");
    await expect(page.getByRole("status", { name: "Zoom level" })).toHaveText("100%");
    await viewport.evaluate((element) => element.scrollTo(800, 550));
    const bounds = (await viewport.boundingBox())!;
    const point = { x: bounds.width * 0.4, y: bounds.height * 0.45 };
    await page.mouse.move(bounds.x + point.x, bounds.y + point.y + 1);
    const before = await camera(viewport);
    await page.mouse.wheel(0, -140);
    await expect.poll(async () => (await camera(viewport)).scale).toBeGreaterThan(1.2);
    const after = await camera(viewport);
    expect(Math.abs((after.x + point.x) / after.scale - (before.x + point.x) / before.scale)).toBeLessThan(2);
    expect(Math.abs((after.y + point.y) / after.scale - (before.y + point.y) / before.scale)).toBeLessThan(2);
    expect(after.pageY).toBe(before.pageY);
    await page.mouse.wheel(0, 140);
    await expect.poll(async () => (await camera(viewport)).scale).toBeCloseTo(1, 2);

    const panel = page.getByRole("complementary");
    await panel.hover();
    const mapBeforePanelScroll = await camera(viewport);
    await page.mouse.wheel(0, 300);
    await expect.poll(() => panel.evaluate((element) => element.scrollTop)).toBeGreaterThan(0);
    expect(await camera(viewport)).toEqual(mapBeforePanelScroll);
  });

  test(`${scenario.map}: dragging a card pans without selecting it; ordinary and keyboard clicks still select`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`/taxonomy/${scenario.map}`);
    const viewport = page.locator(".taxonomy-viewport");
    const card = page.locator(`a[data-${scenario.param}-id="${scenario.id}"]`);
    await page.getByRole("button", { name: "100%", exact: true }).click();
    await card.scrollIntoViewIfNeeded();
    const bounds = (await card.locator(".leaf").boundingBox())!;
    const before = await camera(viewport);
    await page.mouse.move(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
    await page.mouse.down();
    await page.mouse.move(bounds.x + bounds.width / 2 - 100, bounds.y + bounds.height / 2 - 65, { steps: 8 });
    await expect(viewport).toHaveAttribute("data-dragging", "true");
    await page.mouse.up();
    await expect(viewport).not.toHaveAttribute("data-dragging");
    await expect(page).toHaveURL(new RegExp(`/taxonomy/${scenario.map}$`));
    await expect(page.getByRole("complementary")).toHaveCount(0);
    const after = await camera(viewport);
    expect(after.x - before.x).toBeCloseTo(100, 0);
    expect(after.y - before.y).toBeCloseTo(65, 0);
    expect(after.pageY).toBe(before.pageY);

    await card.click();
    await expect(page.getByRole("complementary")).toBeFocused();
    await expectCardInMap(viewport, card.locator(".leaf"));
    await page.getByRole("button", { name: scenario.map === "tasks" ? "Close model panel" : "Close family panel" }).click();
    await expect(card).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("complementary")).toBeFocused();
  });

  test(`${scenario.map}: selected focus works repeatedly beside the panel and after resize/fullscreen`, async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`/taxonomy/${scenario.map}`);
    const focus = page.getByRole("button", { name: "Focus selected", exact: true });
    await expect(focus).toBeDisabled();
    await page.getByRole("combobox", { name: scenario.select, exact: true }).selectOption(scenario.id);
    const viewport = page.locator(".taxonomy-viewport");
    const card = page.locator(`a[data-${scenario.param}-id="${scenario.id}"] .leaf`);
    await expectCardInMap(viewport, card);
    await expect(focus).toBeEnabled();
    for (let attempt = 0; attempt < 2; attempt++) {
      await viewport.evaluate((element) => element.scrollTo(0, 0));
      await focus.click();
      await expectCardInMap(viewport, card);
    }
    await page.setViewportSize({ width: 1024, height: 768 });
    await focus.click();
    await expectCardInMap(viewport, card);
    const mapBounds = (await viewport.boundingBox())!;
    const panelBounds = (await page.getByRole("complementary").boundingBox())!;
    expect(panelBounds.x).toBeGreaterThanOrEqual(mapBounds.x + mapBounds.width - 1);
    expect(Math.abs(panelBounds.height - mapBounds.height)).toBeLessThan(2);
    await page.getByRole("button", { name: "Full screen", exact: true }).click();
    await expect.poll(() => page.evaluate(() => Boolean(document.fullscreenElement))).toBe(true);
    await focus.click();
    await expectCardInMap(viewport, card);
    await page.getByRole("button", { name: "Exit full screen", exact: true }).click();
    await page.getByRole("button", { name: "Türkçe", exact: true }).click();
    await expect(page.getByRole("button", { name: "Seçilene odaklan", exact: true })).toBeEnabled();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });

  test(`${scenario.map}: mobile focus brings the whole selected card onto the screen`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`/taxonomy/${scenario.map}?lang=tr&${scenario.param}=${scenario.id}`);
    await expect(page.getByRole("complementary")).toBeVisible();
    await page.getByRole("button", { name: "Seçilene odaklan", exact: true }).click();
    await expect(page.locator(`a[data-${scenario.param}-id="${scenario.id}"] .leaf`)).toBeInViewport({ ratio: 1 });
    await expect(page.getByRole("complementary")).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}

test("wheel zoom is bounded and fit width resets zoom and pan", async ({ page }) => {
  await page.goto("/taxonomy/tasks");
  const viewport = page.locator(".taxonomy-viewport");
  await viewport.hover();
  for (let i = 0; i < 6; i++) await page.mouse.wheel(0, -500);
  await expect(page.getByRole("status", { name: "Zoom level" })).toHaveText("200%");
  await expect(page.getByRole("button", { name: "Zoom in", exact: true })).toBeDisabled();
  for (let i = 0; i < 12; i++) await page.mouse.wheel(0, 500);
  await expect(page.getByRole("status", { name: "Zoom level" })).toHaveText("5%");
  await expect(page.getByRole("button", { name: "Zoom out", exact: true })).toBeDisabled();
  await page.getByRole("button", { name: "Fit width", exact: true }).click();
  await expect.poll(() => viewport.evaluate((element) => element.scrollWidth - element.clientWidth)).toBeLessThan(2);
  const fitted = await camera(viewport);
  expect(fitted.x).toBe(0);
  expect(fitted.y).toBe(0);
});
