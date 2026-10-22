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

async function readMapPosition(page: Page) {
  return page.locator(".taxonomy-viewport").evaluate((element) => ({
    x: element.scrollLeft, y: element.scrollTop, pageY: window.scrollY,
  }));
}

for (const scenario of [
  { map: "tasks", query: "task=time-series-forecasting" },
  { map: "models", query: "family=transformers" },
]) {
  test(`${scenario.map}: dragging the mini map frame preserves the grab point at different zoom levels and clamps outside releases`, async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1000 });
    await page.goto(`/taxonomy/${scenario.map}?${scenario.query}`);
    const mini = page.getByRole("button", { name: "Navigate using mini map", exact: true });
    const frame = page.locator(".taxonomy-minimap__area");
    const viewport = page.locator(".taxonomy-viewport");
    await expect(page.getByRole("status", { name: "Zoom level" })).toHaveText("100%");
    const url = page.url();

    for (let attempt = 0; attempt < 2; attempt++) {
      if (attempt) await page.getByRole("button", { name: "Zoom in", exact: true }).click();
      const bounds = (await mini.boundingBox())!;
      await mini.click({ position: { x: bounds.width / 2, y: bounds.height / 2 } });
      await expectOverviewMatchesMap(page);
      const area = (await frame.boundingBox())!;
      const canvas = (await page.locator(".taxonomy-canvas").boundingBox())!;
      const before = await readMapPosition(page);
      // Grab away from the centre: neither pointer-down nor pointer-up should recenter it.
      const start = { x: area.x + area.width / 4, y: area.y + area.height / 4 };
      await page.mouse.move(start.x, start.y);
      await expect(frame).toHaveCSS("cursor", "grab");
      await page.mouse.down();
      expect(await readMapPosition(page)).toEqual(before);
      await page.mouse.move(start.x + 12, start.y + 8, { steps: 4 });
      await expect.poll(async () => {
        const position = await readMapPosition(page);
        return Math.abs(position.x - before.x - 12 * canvas.width / bounds.width) < 2 &&
          Math.abs(position.y - before.y - 8 * canvas.height / bounds.height) < 2;
      }).toBe(true);
      await expect(frame).toHaveCSS("cursor", "grabbing");
      await expectOverviewMatchesMap(page);
      const during = await readMapPosition(page);
      await page.mouse.up();
      await expect(mini).not.toHaveAttribute("data-dragging");
      expect(await readMapPosition(page)).toEqual(during);
      expect(during.pageY).toBe(before.pageY);
      await expect(page).toHaveURL(url);
      await expect(page.getByRole("complementary")).toBeVisible();
    }

    // Capturing the pointer keeps the frame usable beyond the mini map's boundaries.
    const bounds = (await mini.boundingBox())!;
    for (const corner of ["start", "end"] as const) {
      const area = (await frame.boundingBox())!;
      await page.mouse.move(area.x + area.width / 2, area.y + area.height / 2);
      await page.mouse.down();
      await page.mouse.move(corner === "start" ? bounds.x - 30 : bounds.x + bounds.width + 30,
        corner === "start" ? bounds.y - 30 : bounds.y + bounds.height + 5, { steps: 8 });
      await expect.poll(() => viewport.evaluate((element, end) => end
        ? Math.abs(element.scrollWidth - element.clientWidth - element.scrollLeft) < 2 &&
          Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 2
        : element.scrollLeft === 0 && element.scrollTop === 0, corner === "end")).toBe(true);
      const during = await readMapPosition(page);
      await page.mouse.up();
      await page.mouse.move(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
      expect(await readMapPosition(page)).toEqual(during);
      await expect(mini).not.toHaveAttribute("data-dragging");
      await expectOverviewMatchesMap(page);
    }

    // Keyboard activation and ordinary clicks still work after dragging.
    await mini.press("Enter");
    await expect(viewport).toBeFocused();
    await mini.click({ position: { x: bounds.width / 2, y: bounds.height / 2 } });
    // Mouse click coordinates are rounded to CSS pixels: allow one mini map pixel.
    await expect.poll(() => viewport.evaluate((element, miniSize) =>
      Math.abs((element.scrollLeft + element.clientWidth / 2) / element.scrollWidth - 0.5) < 1 / miniSize.width &&
      Math.abs((element.scrollTop + element.clientHeight / 2) / element.scrollHeight - 0.5) < 1 / miniSize.height,
    { width: bounds.width, height: bounds.height })).toBe(true);
    await expect(page).toHaveURL(url);
  });

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
    test(`${map}: touch dragging and cancellation keep the page and selected panel stable`, async ({ page, context }) => {
      const query = map === "tasks" ? "task=time-series-forecasting" : "family=transformers";
      await page.goto(`/taxonomy/${map}?lang=tr&${query}`);
      await page.getByRole("button", { name: "Seçilene odaklan", exact: true }).tap();
      const mini = page.getByRole("button", { name: "Mini haritayla gezin", exact: true });
      await mini.scrollIntoViewIfNeeded();
      const url = page.url();
      const session = await context.newCDPSession(page);
      try {
        for (const end of ["touchEnd", "touchCancel"] as const) {
          const bounds = (await mini.boundingBox())!;
          await page.touchscreen.tap(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
          await expectOverviewMatchesMap(page);
          const area = (await page.locator(".taxonomy-minimap__area").boundingBox())!;
          const canvas = (await page.locator(".taxonomy-canvas").boundingBox())!;
          const before = await readMapPosition(page);
          const start = { x: area.x + area.width / 4, y: area.y + area.height / 4 };
          await session.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ ...start, id: 1 }] });
          expect(await readMapPosition(page)).toEqual(before);
          await session.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x: start.x + 12, y: start.y + 8, id: 1 }] });
          await expect.poll(async () => {
            const position = await readMapPosition(page);
            return Math.abs(position.x - before.x - 12 * canvas.width / bounds.width) < 2 &&
              Math.abs(position.y - before.y - 8 * canvas.height / bounds.height) < 2;
          }).toBe(true);
          await expectOverviewMatchesMap(page);
          const during = await readMapPosition(page);
          await session.send("Input.dispatchTouchEvent", { type: end, touchPoints: [] });
          await expect(mini).not.toHaveAttribute("data-dragging");
          expect(await readMapPosition(page)).toEqual(during);
          expect(during.pageY).toBe(before.pageY);
          await expect(page).toHaveURL(url);
          await expect(page.getByRole("complementary")).toBeVisible();
        }
        await mini.press("Enter");
        await expect(page.locator(".taxonomy-viewport")).toBeFocused();
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      } finally {
        await session.detach();
      }
    });

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
