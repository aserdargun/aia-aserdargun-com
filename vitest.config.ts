import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const rootDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(rootDirectory, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    maxWorkers: 2,
    // Full-console DOM tests exercise hundreds of records on shared workstations.
    // Allow them to finish before cleanup so pending interactions cannot leak.
    testTimeout: 30_000,
    globals: true,
    setupFiles: "./vitest.setup.ts",
    include: ["tests/**/*.test.{ts,tsx}"],
  },
});
