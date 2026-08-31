import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';


test('Verify products can be added and removed from cart', async ({ cartPage }) => {

    const itemNames = await cartPage.itemNames();

    expect(itemNames).toContain('Sauce Labs Backpack');
    expect(itemNames).toContain('Sauce Labs Bike Light');

    await cartPage.removeItem('Sauce Labs Backpack');

    const remainingItems = await cartPage.itemNames();

    expect(remainingItems).toContain('Sauce Labs Bike Light');
    expect(remainingItems).not.toContain('Sauce Labs Backpack');
});