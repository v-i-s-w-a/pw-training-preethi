import { test, expect } from '@playwright/test';

test('Verify SauceDemo title and URL', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');


 //await expect(page).toHaveTitle('Swag Labs');
 await expect(page).toHaveTitle('Wrong Title');


  await expect(page).toHaveURL('https://www.saucedemo.com/');

});