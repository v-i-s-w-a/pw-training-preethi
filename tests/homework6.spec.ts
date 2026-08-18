import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Verify products can be added and removed from cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addToCart('Sauce Labs Backpack');
    await productsPage.addToCart('Sauce Labs Bike Light');

    await productsPage.openCart();

    const itemNames = await cartPage.itemNames();

    expect(itemNames).toContain('Sauce Labs Backpack');
    expect(itemNames).toContain('Sauce Labs Bike Light');

    await cartPage.removeItem('Sauce Labs Backpack');

    const remainingItems = await cartPage.itemNames();

    expect(remainingItems).toContain('Sauce Labs Bike Light');
    expect(remainingItems).not.toContain('Sauce Labs Backpack');
});