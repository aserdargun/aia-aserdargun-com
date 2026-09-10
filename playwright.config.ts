import { defineConfig, devices } from "@playwright/test";

const externalBaseURL = process.env.PLAYWRIGHT_BASE_URL;
const localPort = Number(process.env.PLAYWRIGHT_PORT ?? (process.env.PLAYWRIGHT_STATIC ? 3107 : 3000));
if (!Number.isInteger(localPort) || localPort < 1024 || localPort > 65535) {
  throw new Error("PLAYWRIGHT_PORT must be an integer between 1024 and 65535.");
}
const localBaseURL = `http://127.0.0.1:${localPort}`;

export default defineConfig({
  testDir: "./e2e",
  outputDir: process.env.PLAYWRIGHT_OUTPUT_DIR ?? "/tmp/aia-playwright-results",
  workers: 2,
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: externalBaseURL ?? localBaseURL,
      },
    },
  ],
  webServer: externalBaseURL
    ? undefined
    : {
        command: process.env.PLAYWRIGHT_STATIC ? "npm start" : `npm run dev -- --hostname 127.0.0.1 --port ${localPort}`,
        env: { PORT: String(localPort) },
        url: localBaseURL,
        reuseExistingServer: !process.env.CI && !process.env.PLAYWRIGHT_STATIC,
      },
});
