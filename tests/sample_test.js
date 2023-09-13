// @ts-check
const { test } = require("../fixture");
const { expect } = require("@playwright/test");

test("Grandel playwright Android test", async ({ page }, testInfo) => {
  try {
    await page.evaluate((_) => {},
    `browserstack_executor: ${JSON.stringify({ action: "setSessionName", arguments: { name: testInfo.project.name } })}`);
    await page.waitForTimeout(5000);

    await page.goto("https://scholar.google.com/citations?user=3ykP4XkAAAAJ&hl=en", {
      waitUntil: "networkidle",
    }); 
    await page.getByText("Smart gym trainer using Human pose estimation").click();
    await page.evaluate((_) => {},
    `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "passed", reason: "Test passed" } })}`);
  } catch (e) {
    console.log(e);
    await page.evaluate((_) => {},
    `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "failed", reason: "Test failed" } })}`);
  }
});
