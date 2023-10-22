import {Page, BrowserContext} from '@playwright/test'
import { Login } from './login/login';


class Modules{

    constructor (
        readonly page : Page,
        readonly browserContext : BrowserContext, 
        readonly login: Login

    ){
        this.page = page;
    }
}    

export function module(page: Page,browserContext: BrowserContext): Modules{
    const login = new Login(page,browserContext);

    return new Modules(
        page,
        browserContext,
        login
    );
   
}