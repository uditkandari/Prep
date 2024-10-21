import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("https://www.google.com");
});
