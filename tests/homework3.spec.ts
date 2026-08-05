import { test, expect } from '@playwright/test';

test('Verify SauceDemo title and URL', async ({ page }) => {

  await page.goto('https://saucelabs.com/');


  await expect(page).toHaveTitle('Sauce Labs: AI-Unified Release Assurance Platform');


  await expect(page).toHaveURL('https://saucelabs.com/');


  await page.waitForTimeout(2000);
});