import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async addToCart(productName: string) {
        const product = this.page.locator('.inventory_item').filter({
            hasText: productName
        });

        await product.getByRole('button', { name: 'Add to cart' }).click();
    }

    async openCart() {
        await this.page.getByTestId('shopping-cart-link').click();
    }
}