import {chromium, test} from '@playwright/test'
import { getTransformedExcelHeaders } from '../data/transform/extractData'
import { Abstract } from '../pageObjectModel/abstract'


test("Login Test Using Excel",async  () => {
    const browser = await chromium.launch()
    const context = await  browser.newContext()
    const page = await context.newPage()

    const inputData = getTransformedExcelHeaders();
    // console.log(inputData)
    inputData.forEach((inputData) => {
        console.log(`${inputData.slNo} Login ID ${inputData.loginId}`)

    })
    // await page.goto('https://ecommerce-playground.lambdatest.io/')
    // await page.hover("//div[@data-id='217834']//span[contains(.,'My account')]")
    // await page.getByText('Login').click()
    // await page.waitForTimeout(5000)
    
})