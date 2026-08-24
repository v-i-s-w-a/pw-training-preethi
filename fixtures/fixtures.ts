import { test as base } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';

type Fixtures = {
    inventoryPage: ProductsPage;
    cartPage: CartPage;
};

export const test = base.extend<Fixtures>({
    inventoryPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.login('standard_user', 'secret_sauce');

        const inventoryPage = new ProductsPage(page);
        await use(inventoryPage);
    },

    cartPage: async ({ inventoryPage, page }, use) => {
        await inventoryPage.addToCart('Sauce Labs Backpack');
        await inventoryPage.addToCart('Sauce Labs Bike Light');
        await inventoryPage.openCart();

        const cartPage = new CartPage(page);
        await use(cartPage);
    },
});