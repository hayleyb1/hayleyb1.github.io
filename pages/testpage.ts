import { type Locator, type Page, expect } from '@playwright/test';

export class TestPage {
    readonly page: Page;
    readonly pageTitle: RegExp;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = /Test Page/;
    }

    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.pageTitle);
    }

    async assertPageUrl(pageUrl: RegExp) {
        await expect(this.page).toHaveURL(pageUrl);
    }
}

export default TestPage;