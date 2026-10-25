import { expect, test, type Page } from "@playwright/test";

const scenarios = [
  { map: "tasks", query: "task=time-series-forecasting" },
  { map: "models", query: "family=transformers" },
];

async function camera(page: Page) {
  return page.locator(".taxonomy-viewport").evaluate((element) => ({
    x: element.scrollLeft, y: element.scrollTop, pageY: window.scrollY,
    width: element.querySelector("svg")!.getBoundingClientRect().width,
  }));
}

async function expectOverviewFits(page: Page) {
  await expect.poll(() => page.evaluate(() => {
    const map = document.querySelector(".taxonomy-viewport")!.getBoundingClientRect();
    const mini = document.querySelector(".taxonomy-minimap")!.getBoundingClientRect();
    const surface = document.querySelector(".taxonomy-minimap__surface")!.getBoundingClientRect();
    const svg = document.querySelector<SVGSVGElement>(".taxonomy-minimap__surface svg")!.viewBox.baseVal;
    return mini.left > map.left && mini.top > map.top && mini.right < map.right && mini.bottom < map.bottom &&
      Math.abs(surface.width / surface.height - svg.width / svg.height) < 0.01;
  })).toBe(true);
}

async function expectFrameTracksViewport(page: Page) {
  await expect.poll(() => page.evaluate(() => {
    const viewport = document.querySelector<HTMLElement>(".taxonomy-viewport")!;
    const svg = viewport.querySelector("svg")!;
    const area = document.querySelector<SVGRectElement>(".taxonomy-minimap__area")!;
    const scale = svg.getBoundingClientRect().width / svg.viewBox.baseVal.width;
    return Math.max(Math.abs(area.x.baseVal.value - viewport.scrollLeft / scale),
      Math.abs(area.y.baseVal.value - viewport.scrollTop / scale),
      Math.abs(area.width.baseVal.value - Math.min(svg.viewBox.baseVal.width, viewport.clientWidth / scale)),
      Math.abs(area.height.baseVal.value - Math.min(svg.viewBox.baseVal.height, viewport.clientHeight / scale)));
  })).toBeLessThan(2);
}

for (const { map, query } of scenarios) {
  test(`${map}: corner resizing preserves the camera, supports navigation, keyboard limits and responsive layouts`, async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1000 });
    await page.goto(`/taxonomy/${map}?${query}`);
    const mini = page.getByRole("group", { name: "Mini map", exact: true });
    const surface = page.getByRole("button", { name: "Navigate using mini map", exact: true });
    const handle = page.getByRole("slider", { name: "Mini map size", exact: true });
    await expect(page.getByRole("status", { name: "Zoom level" })).toHaveText("100%");
    await expect(handle).toHaveAttribute("aria-valuenow", "196");
    const url = page.url();
    const beforeCamera = await camera(page);
    const aspectRatio = await page.locator(".taxonomy-minimap__surface svg").evaluate((element) => {
      const box = (element as SVGSVGElement).viewBox.baseVal; return box.width / box.height;
    });
    const before = (await mini.boundingBox())!;
    const grip = (await handle.boundingBox())!;
    await page.mouse.move(grip.x + grip.width / 2, grip.y + grip.height / 2);
    await page.mouse.down();
    await page.mouse.move(grip.x + grip.width / 2 - 100, grip.y + grip.height / 2 - 60, { steps: 8 });
    await expect(handle).toHaveAttribute("data-resizing", "true");
    await expect.poll(async () => (await mini.boundingBox())!.width).toBeCloseTo(before.width + Math.max(100, 60 * aspectRatio), 0);
    await page.mouse.up();
    await expect(handle).not.toHaveAttribute("data-resizing");
    const enlarged = (await mini.boundingBox())!;
    expect(enlarged.x + enlarged.width).toBeCloseTo(before.x + before.width, 0);
    expect(enlarged.y + enlarged.height).toBeCloseTo(before.y + before.height, 0);
    expect(await camera(page)).toEqual(beforeCamera);
    await expectOverviewFits(page);
    await expectFrameTracksViewport(page);
    await expect(page).toHaveURL(url);
    await expect(page.getByRole("complementary")).toBeVisible();

    // Shrink with a horizontal drag and release outside the moved handle.
    const nextGrip = (await handle.boundingBox())!;
    await page.mouse.move(nextGrip.x + 14, nextGrip.y + 14);
    await page.mouse.down();
    await page.mouse.move(nextGrip.x + 84, nextGrip.y + 14, { steps: 6 });
    await page.mouse.up();
    await expect.poll(async () => (await mini.boundingBox())!.width).toBeCloseTo(enlarged.width - 70, 0);
    await page.mouse.move(nextGrip.x, nextGrip.y);
    expect(await camera(page)).toEqual(beforeCamera);
    await expectOverviewFits(page);

    // Click-to-jump and frame dragging use the resized overview's coordinates.
    const surfaceBounds = (await surface.boundingBox())!;
    await surface.click({ position: { x: surfaceBounds.width / 2, y: surfaceBounds.height / 2 } });
    await expectFrameTracksViewport(page);
    const position = await camera(page);
    const area = (await page.locator(".taxonomy-minimap__area").boundingBox())!;
    await page.mouse.move(area.x + area.width / 4, area.y + area.height / 4);
    await page.mouse.down();
    await page.mouse.move(area.x + area.width / 4 + 10, area.y + area.height / 4, { steps: 4 });
    await expect.poll(async () => (await camera(page)).x - position.x).toBeCloseTo(10 * position.width / surfaceBounds.width, 0);
    const dragged = await camera(page);
    await page.mouse.up();
    expect(await camera(page)).toEqual(dragged);
    await expectFrameTracksViewport(page);

    await handle.focus();
    const initialWidth = (await mini.boundingBox())!.width;
    await handle.press("ArrowRight");
    await expect.poll(async () => (await mini.boundingBox())!.width).toBeCloseTo(initialWidth + 16, 0);
    await handle.press("ArrowDown");
    await expect.poll(async () => (await mini.boundingBox())!.width).toBeCloseTo(initialWidth, 0);
    await handle.press("Home");
    await expect(handle).toHaveAttribute("aria-valuenow", "144");
    await handle.press("End");
    await expect(handle).toHaveAttribute("aria-valuenow", "480");
    await page.getByRole("button", { name: "Hide mini map", exact: true }).click();
    await expect(handle).toBeHidden();
    await page.getByRole("button", { name: "Show mini map", exact: true }).click();
    await expect.poll(async () => (await mini.boundingBox())!.width).toBe(480);

    await page.setViewportSize({ width: 390, height: 844 });
    await expectOverviewFits(page);
    await expectFrameTracksViewport(page);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.getByRole("button", { name: "Full screen", exact: true }).click();
    await expect.poll(() => page.evaluate(() => Boolean(document.fullscreenElement))).toBe(true);
    await expectOverviewFits(page);
    await page.getByRole("button", { name: "Exit full screen", exact: true }).click();
    await page.setViewportSize({ width: 1600, height: 1000 });
    await expect.poll(async () => (await mini.boundingBox())!.width).toBe(480);
    await page.getByRole("button", { name: "Türkçe", exact: true }).click();
    await expect(page.getByRole("slider", { name: "Mini harita boyutu", exact: true })).toHaveAttribute("aria-valuenow", "480");
    await expectOverviewFits(page);
  });
}

test.describe("touch corner resizing", () => {
  test.use({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } });
  for (const { map, query } of scenarios) {
    test(`${map}: touch resizing and cancellation leave the page and selected model panel stable`, async ({ page, context }) => {
      await page.goto(`/taxonomy/${map}?lang=tr&${query}`);
      await page.getByRole("button", { name: "Seçilene odaklan", exact: true }).tap();
      const mini = page.getByRole("group", { name: "Mini harita", exact: true });
      const handle = page.getByRole("slider", { name: "Mini harita boyutu", exact: true });
      await handle.scrollIntoViewIfNeeded();
      const before = await camera(page);
      const url = page.url();
      const session = await context.newCDPSession(page);
      try {
        for (const end of ["touchCancel", "touchEnd"] as const) {
          const box = (await handle.boundingBox())!;
          const initialWidth = (await mini.boundingBox())!.width;
          const start = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
          const dx = end === "touchCancel" ? -55 : 30;
          await session.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ ...start, id: 1 }] });
          await session.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x: start.x + dx, y: start.y, id: 1 }] });
          await expect(handle).toHaveAttribute("data-resizing", "true");
          await expect.poll(async () => (await mini.boundingBox())!.width).toBeCloseTo(initialWidth - dx, 0);
          await session.send("Input.dispatchTouchEvent", { type: end, touchPoints: [] });
          await expect(handle).not.toHaveAttribute("data-resizing");
          expect(await camera(page)).toEqual(before);
          await expectOverviewFits(page);
          await expectFrameTracksViewport(page);
          await expect(page).toHaveURL(url);
          await expect(page.getByRole("complementary")).toBeVisible();
        }
        await handle.press("End");
        await expectOverviewFits(page);
        await handle.press("Home");
        await expect(handle).toHaveAttribute("aria-valuenow", "144");
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      } finally { await session.detach(); }
    });
  }
});
