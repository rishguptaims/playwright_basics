import {Page, BrowserContext} from '@playwright/test'
import { loginSelector } from './login/login.selector';

export class Abstract{

    constructor(public page: Page, public browserContext: BrowserContext){
        this.page = page,
        this.browserContext = browserContext
    }

    async getDataFromUI(): Promise<string>{
        const value = (await this.page.locator(loginSelector.searchProduct).getAttribute(loginSelector.attributeLabel))||'NA';
        return value;
    }

    async hoverPage(): Promise<void>{
        await this.page.hover(loginSelector.myAccountTab)
    }
}