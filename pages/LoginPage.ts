import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async login(username: string, password: string) {
        await this.page.goto('https://www.saucedemo.com/');
        await this.page.getByTestId('username').fill(username);
        await this.page.getByTestId('password').fill(password);
        await this.page.getByTestId('login-button').click();
    }
}