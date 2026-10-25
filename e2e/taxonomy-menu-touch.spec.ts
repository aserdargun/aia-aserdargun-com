import { expect, test } from "@playwright/test";

test.use({ isMobile: true, hasTouch: true });

for (const locale of ["en", "tr"] as const) {
  for (const width of [320, 390]) {
    test(`${locale} at ${width}px: both maps open on tap`, async ({ page, baseURL, browserName }) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
      await page.setViewportSize({ width, height: 844 });

      // WebKit upgrades loopback assets to HTTPS under the production CSP.
      // Only the local HTTP test response omits that transport directive.
      if (browserName === "webkit" && baseURL?.startsWith("http://127.0.0.1:")) {
        await page.route(`${baseURL}/**`, async (route) => {
          if (route.request().resourceType() !== "document") return route.continue();
          const response = await route.fetch();
          const headers = response.headers();
          if (headers["content-security-policy"]) {
            headers["content-security-policy"] = headers["content-security-policy"].replace(/upgrade-insecure-requests;?\s*/g, "");
          }
          await route.fulfill({ response, headers });
        });
      }

      const query = locale === "tr" ? "?lang=tr" : "";
      const menu = page.getByRole("banner").locator(".site-nav__maps");
      for (const map of ["models", "tasks"] as const) {
        await page.goto(`/${query}`);
        // Wait for hydration so this exercises the blur handler, not native links.
        await expect(page.locator(".site-nav__atlas")).toHaveAttribute("aria-current", "page");
        const summary = menu.locator("summary");
        await expect(summary).toHaveText(locale === "tr" ? "Haritalar" : "Maps");
        await summary.tap();
        await expect(menu).toHaveAttribute("open", "");
        const name = locale === "tr"
          ? `${map === "models" ? "Model" : "Görev"} taksonomisi`
          : `${map === "models" ? "Model" : "Task"} taxonomy`;
        await menu.getByRole("link", { name, exact: true }).tap();
        await expect(page).toHaveURL(`${baseURL}/taxonomy/${map}${query}`);
        await expect(page).toHaveTitle(`AI ${map === "models" ? "model" : "task"} taxonomy | AI Ecosystem Atlas`);
        await expect(page.locator(".taxonomy-canvas svg")).toBeVisible();
        await expect(menu).not.toHaveAttribute("open", "");
        await page.getByRole("button", { name: locale === "tr" ? "%100" : "100%", exact: true }).tap();
        await expect(page.locator(".taxonomy-zoom output")).toHaveText(locale === "tr" ? "%100" : "100%");
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        // Let route prefetches finish before the next full-document navigation.
        // WebKit otherwise reports the interrupted request as an access error.
        await page.waitForLoadState("networkidle");
      }
      expect(errors).toEqual([]);
    });
  }
}
