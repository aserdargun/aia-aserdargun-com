import { expect, test, type Page } from "@playwright/test";

const storageKey = "aia.taxonomy.minimap.v1";
const scenarios = [
  { map: "tasks", peer: "models", query: "task=time-series-forecasting", tab: "Görev taksonomisi", peerTab: "Model taksonomisi" },
  { map: "models", peer: "tasks", query: "family=transformers", tab: "Model taksonomisi", peerTab: "Görev taksonomisi" },
];

function handle(page: Page) { return page.getByRole("slider", { name: "Mini harita boyutu", exact: true }); }
function mini(page: Page) { return page.getByRole("group", { name: "Mini harita", exact: true }); }
function tab(page: Page, name: string) { return page.getByRole("navigation", { name: "Taksonomi haritaları" }).getByRole("link", { name, exact: true }); }
async function expectWidth(page: Page, width: number) {
  await expect(handle(page)).toHaveAttribute("aria-valuenow", String(width));
  await expect.poll(async () => (await mini(page).boundingBox())!.width).toBeCloseTo(width, 0);
}

for (const scenario of scenarios) {
  test(`${scenario.map}: resized width and visibility survive reloads and both map tabs`, async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1000 });
    await page.goto(`/taxonomy/${scenario.map}?lang=tr&${scenario.query}`);
    await expectWidth(page, 196);
    await expect(page.getByRole("complementary")).toBeFocused();
    const grip = (await handle(page).boundingBox())!;
    await page.mouse.move(grip.x + 14, grip.y + 14);
    await page.mouse.down();
    await page.mouse.move(grip.x - 106, grip.y + 14, { steps: 8 });
    await page.mouse.up();
    await expectWidth(page, 316);
    await page.reload();
    await expectWidth(page, 316);

    await page.getByRole("button", { name: "Mini haritayı gizle", exact: true }).click();
    await page.reload();
    await expect(page.getByRole("button", { name: "Mini haritayı göster", exact: true })).toHaveAttribute("aria-expanded", "false");
    await expect(handle(page)).toBeHidden();
    await tab(page, scenario.peerTab).click();
    await expect(page).toHaveURL(new RegExp(`/taxonomy/${scenario.peer}\\?lang=tr$`));
    await expect(page.getByRole("button", { name: "Mini haritayı göster", exact: true })).toBeVisible();
    await page.getByRole("button", { name: "Mini haritayı göster", exact: true }).click();
    await expectWidth(page, 316);

    await handle(page).press("ArrowRight");
    await expectWidth(page, 332);
    await tab(page, scenario.tab).click();
    await expectWidth(page, 332);
    await page.reload();
    await expectWidth(page, 332);
  });

  test(`${scenario.map}: a narrow viewport never replaces the preferred size in storage`, async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1000 });
    await page.goto(`/taxonomy/${scenario.map}?lang=tr&${scenario.query}`);
    await expect(page.getByRole("complementary")).toBeFocused();
    await handle(page).press("End");
    await expectWidth(page, 480);
    await page.setViewportSize({ width: 390, height: 844 });
    await expect.poll(async () => (await mini(page).boundingBox())!.width).toBeLessThan(480);
    await page.getByRole("button", { name: "Mini haritayı gizle", exact: true }).click();
    await page.reload();
    await expect(page.getByRole("button", { name: "Mini haritayı göster", exact: true })).toBeVisible();
    await tab(page, scenario.peerTab).click();
    await page.getByRole("button", { name: "Mini haritayı göster", exact: true }).click();
    await expect.poll(() => page.evaluate(() => {
      const map = document.querySelector(".taxonomy-viewport")!.getBoundingClientRect();
      const overview = document.querySelector(".taxonomy-minimap")!.getBoundingClientRect();
      return overview.left > map.left && overview.top > map.top && overview.right < map.right && overview.bottom < map.bottom;
    })).toBe(true);
    expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!).width, storageKey)).toBe(480);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.setViewportSize({ width: 1600, height: 1000 });
    await expectWidth(page, 480);
    await page.reload();
    await expectWidth(page, 480);
  });
}

test("invalid saved preferences recover safely without overwriting storage during hydration", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/taxonomy/tasks?lang=tr");
  for (const raw of ["{broken", "null", '{"width":999999,"expanded":"no"}', '{"width":-20,"expanded":true}']) {
    await page.evaluate(({ key, raw }) => localStorage.setItem(key, raw), { key: storageKey, raw });
    await page.reload();
    await expectWidth(page, 196);
    expect(await page.evaluate((key) => localStorage.getItem(key), storageKey)).toBe(raw);
  }
  await page.evaluate((key) => localStorage.setItem(key, '{"width":"invalid","expanded":false}'), storageKey);
  await page.reload();
  await page.getByRole("button", { name: "Mini haritayı göster", exact: true }).click();
  await expectWidth(page, 196);
  await handle(page).press("ArrowRight");
  await page.reload();
  await expectWidth(page, 212);
  expect(errors).toEqual([]);
});

for (const failure of ["unavailable", "quota"] as const) {
  test(`${failure} storage leaves mini map controls usable across map tabs`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.addInitScript(({ key, failure }) => {
      if (failure === "quota") {
        localStorage.setItem(key, '{"width":316,"expanded":true}');
        Storage.prototype.setItem = () => { throw new DOMException("Full", "QuotaExceededError"); };
      } else {
        Object.defineProperty(window, "localStorage", { get() { throw new DOMException("Disabled", "SecurityError"); } });
      }
    }, { key: storageKey, failure });
    await page.goto("/taxonomy/tasks?lang=tr");
    await expectWidth(page, failure === "quota" ? 316 : 196);
    await handle(page).press("ArrowRight");
    const width = failure === "quota" ? 332 : 212;
    await expectWidth(page, width);
    await page.getByRole("button", { name: "Mini haritayı gizle", exact: true }).click();
    await tab(page, "Model taksonomisi").click();
    await page.getByRole("button", { name: "Mini haritayı göster", exact: true }).click();
    await expectWidth(page, width);
    expect(errors).toEqual([]);
  });
}

test("two open map pages share updates and clearing preferences restores defaults", async ({ page, context }) => {
  await page.goto("/taxonomy/tasks?lang=tr");
  const peer = await context.newPage();
  await peer.goto("/taxonomy/models?lang=tr");
  await expectWidth(peer, 196);
  await handle(page).press("ArrowRight");
  await expectWidth(peer, 212);
  await peer.getByRole("button", { name: "Mini haritayı gizle", exact: true }).click();
  await expect(page.getByRole("button", { name: "Mini haritayı göster", exact: true })).toBeVisible();
  await page.evaluate((key) => localStorage.removeItem(key), storageKey);
  await expectWidth(peer, 196);
  await peer.close();
});

test("map pages align with the shared page gutters while keeping desktop details on the right", async ({ page }) => {
  for (const width of [1920, 1440, 390]) {
    await page.setViewportSize({ width, height: 1080 });
    await page.goto("/models");
    const reference = (await page.locator(".model-page").boundingBox())!;
    for (const scenario of scenarios) {
      await page.goto(`/taxonomy/${scenario.map}?lang=tr&${scenario.query}`);
      await expect(page.getByRole("complementary")).toBeVisible();
      const bounds = (await page.locator(".taxonomy-page").boundingBox())!;
      expect(bounds.x).toBeCloseTo(reference.x, 0);
      expect(bounds.width).toBeCloseTo(reference.width, 0);
      if (width > 900) {
        const viewport = (await page.locator(".taxonomy-viewport").boundingBox())!;
        const panel = (await page.getByRole("complementary").boundingBox())!;
        expect(panel.x).toBeGreaterThanOrEqual(viewport.x + viewport.width - 1);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
  }
});
