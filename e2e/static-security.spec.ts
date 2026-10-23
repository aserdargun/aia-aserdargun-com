import { expect, test } from "@playwright/test";

test("static CSP permits hydration and blocks an unlisted inline script", async ({ page }) => {
  test.skip(!process.env.PLAYWRIGHT_STATIC && !process.env.PLAYWRIGHT_BASE_URL, "Production export headers only");
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  const response = await page.goto("/models");
  const policy = response?.headers()["content-security-policy"] ?? "";
  const scriptPolicy = policy.split(";").find((directive) => directive.trim().startsWith("script-src "));
  expect(scriptPolicy).toContain("'sha256-");
  expect(scriptPolicy).not.toContain("'unsafe-inline'");
  expect(scriptPolicy).not.toContain("'unsafe-eval'");
  await page.getByRole("button", { name: "Türkçe", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1, name: "Göreve göre frontier modeller" })).toBeVisible();
  expect(errors).toEqual([]);
  const probe = await page.evaluate(async () => {
    const violation = new Promise<string>((resolve) => {
      document.addEventListener("securitypolicyviolation", (event) => resolve(event.violatedDirective), { once: true });
    });
    const script = document.createElement("script");
    script.textContent = "document.documentElement.dataset.unlistedScript = 'executed'";
    document.body.append(script);
    const directive = await violation;
    script.remove();
    return { directive, executed: document.documentElement.dataset.unlistedScript };
  });
  expect(probe.directive).toBe("script-src-elem");
  expect(probe.executed).toBeUndefined();
});
