import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const standardAuthFile = '.auth/standard.json';
const problemAuthFile = '.auth/problem.json';

setup('Authenticate', async ({ page }) => {
    const username = 'standard_user';
    const password = 'secret_sauce';

    const loginPage = new LoginPage(page);

    await loginPage.login(username, password);
    await expect(page).toHaveURL(/.*inventory.html/);

    await page.context().storageState({ path: standardAuthFile });
});

setup('Authenticate problem user', async ({ page }) => {
    const username = 'problem_user';
    const password = 'secret_sauce';

    const loginPage = new LoginPage(page);

    await loginPage.login(username, password);
    await expect(page).toHaveURL(/.*inventory.html/);

    await page.context().storageState({ path: problemAuthFile });
});

