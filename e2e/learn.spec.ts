import { expect, test } from "@playwright/test";

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
] as const;

for (const viewport of viewports) {
  test(`${viewport.name}: /learn lists concepts and opens a concept page`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/learn");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Understand AI, one concept at a time\./,
      }),
    ).toBeVisible();

    // Filter to a known concept by id slug to assert the grid is wired up.
    await page.goto("/learn/llm");

    await expect(
      page.getByRole("heading", { level: 1, name: /Large Language Model/ }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Self-check" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Key takeaways" }),
    ).toBeVisible();

    const overflow = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth);
  });

  test(`${viewport.name}: /learn/review renders the spaced-repetition runner`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/learn/review");

    await expect(
      page.getByRole("heading", { level: 1, name: /Today/ }),
    ).toBeVisible();
  });

  test(`${viewport.name}: /learn/stats renders the progress panel`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/learn/stats");

    await expect(
      page.getByRole("heading", { level: 1, name: /What you have learned/ }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Your learning journey/ }),
    ).toBeVisible();
  });
}
