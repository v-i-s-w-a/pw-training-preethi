import { test, expect } from '@playwright/test';

test('Verify locked out user cannot login', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByTestId('username').fill('locked_out_user');

  await page.getByTestId('password').fill('secret_sauce');

  await page.getByTestId('login-button').click();

  await expect(page.getByTestId('error')).toBeVisible();

});