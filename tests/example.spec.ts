import { test, type Page } from '@playwright/test';
import { HomePage } from '../pages/index.ts';
import { TestPage } from '../pages/testpage.ts';

const URL = 'http://127.0.0.1:3000/index.html';
let homePage: HomePage;
let testPage: TestPage;
const pageUrl = /.*testpractice.html/;

test.beforeEach(async ({page}) => {
    await page.goto(URL);
    homePage = new HomePage(page);
});


async function clickTestPageLink(page: Page) {
    await homePage.clickTestPageLink();
    testPage = new TestPage(page);
}

test.describe('Navigate from Index Page to Automation Page', () => {

    test('Has title', async () => {
        await homePage.assertPageTitle();
    });
    
    test('Click link and check URL', async ({ page }) => {
        // Act
        await clickTestPageLink(page);

        // Assert
        await testPage.assertPageTitle();
        await testPage.assertPageUrl(pageUrl)
    });

});