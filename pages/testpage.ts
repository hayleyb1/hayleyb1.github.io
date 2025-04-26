import { Page, expect, Locator } from '@playwright/test';


export class TestPage {
    readonly page: Page;
    readonly pageTitle: RegExp;
    readonly testPageButton: Locator;
    readonly testButtonText: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = /Test Automation Page/;
        this.testPageButton = page.getByRole('button', { name: 'Run Test' });
        this.testButtonText = page.getByTestId("text")
    }

    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.pageTitle);
    }

    async assertPageUrl(pageUrl: RegExp) {
        await expect(this.page).toHaveURL(pageUrl);
    }

    async clickTestButton() {
        await this.testPageButton.click();
    }

    async assertButtonClick() {
        await this.testPageButton.click();
    }

    async assertButtonClickText() {
        await expect(this.testButtonText).toHaveText('the button has been clicked');

    }
}

export default TestPage;
