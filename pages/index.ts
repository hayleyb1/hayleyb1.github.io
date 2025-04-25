import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly testPageLink: Locator;
    readonly pageTitle: RegExp;

    constructor(page: Page) {
        this.page = page;
        this.testPageLink = page.getByRole('link', { name: 'Test Page' });
        this.pageTitle = /Hayley's Website/;
    }

    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.pageTitle);
    }

    async clickTestPageLink() {
        // await this.page.waitForNavigation(),
        await this.testPageLink.click();
    }

    
}

export default HomePage;

