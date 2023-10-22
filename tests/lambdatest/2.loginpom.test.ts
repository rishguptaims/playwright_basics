import {test} from '@playwright/test'
import { getTransformedExcelHeaders } from '../data/transform/extractData'
import { module } from '../pageObjectModel/modules';


test("Login Test Using Excel",async ({page, context}) => {

    const modules = module(page,context)
    const inputData = getTransformedExcelHeaders();
    // console.log(inputData)
    inputData.forEach((inputData) => {
        console.log(`${inputData.slNo} Login ID ${inputData.loginId}`)

    })
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await modules.login.hovingOver()
    const accountNo = await modules.login.selectingAccount()
    
    
})