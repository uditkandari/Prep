import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests", // Specify the directory where tests are located
  timeout: 30000, // Maximum time for each test
  retries: 2, // Retry failed tests 2 times
  expect: {
    timeout: 5000, // Timeout for assertions
  },
  use: {
    headless: true, // Run in headless mode by default
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0, // No timeout for actions
    ignoreHTTPSErrors: true, // Ignore HTTPS errors
    screenshot: "only-on-failure", // Take screenshots only on failure
    video: "retain-on-failure", // Record video on test failure
  },
  projects: [
    {
      name: "chromium", // Test project for Chromium
      use: { browserName: "chromium" },
    },
    {
      name: "firefox", // Test project for Firefox
      use: { browserName: "firefox" },
    },
    {
      name: "webkit", // Test project for WebKit
      use: { browserName: "webkit" },
    },
  ],
};

export default config;
