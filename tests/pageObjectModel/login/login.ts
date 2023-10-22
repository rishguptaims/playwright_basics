import {Page, BrowserContext} from '@playwright/test'
import { Abstract } from '../abstract'


export class Login extends Abstract {
   
    async selectingAccount(){
        const value = await this.getDataFromUI()
        console.log(value)
    }
    async hovingOver ()
    {
        this.hoverPage()
    }

}