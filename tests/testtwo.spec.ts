import { test, type Page } from '@playwright/test';
import { TestPage } from '../pages/testpage.ts';

const URL = 'http://127.0.0.1:3000/testpractice.html';
let testPage: TestPage;

test.beforeEach(async ({page}) => {
    await page.goto(URL);
    testPage = new TestPage(page);
});


async function clickTestPageLink(page: Page) {
    await testPage.clickTestButton();
    testPage = new TestPage(page);
}

test.describe('Check Test Page title and click button', () => {
   
    test('Has title', async () => {
        await testPage.assertPageTitle();
    });
    
    test('Click test button', async ({ page }) => {
        await testPage.clickTestButton();
        await testPage.assertButtonClick();    });

    test('Text changes', async ({ page }) => {
        await testPage.clickTestButton();
        await testPage.assertButtonClickText();
    });

});
