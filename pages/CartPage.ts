import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

    constructor(page: Page) {
        super(page, '/cart.html');
    }

    async itemNames() {
        return await this.page.locator('.inventory_item_name').allTextContents();
    }

    async removeItem(productName: string) {
        const product = this.page.locator('.cart_item').filter({
            hasText: productName
        });

        await product.getByRole('button', { name: 'Remove' }).click();
    }
}