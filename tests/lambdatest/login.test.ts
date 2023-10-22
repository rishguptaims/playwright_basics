import { chromium, test } from '@playwright/test'


test("Login Test Lambda Test",async () => {
    const browser = await chromium.launch()
    const context = await  browser.newContext()
    const page = await context.newPage()

    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await page.hover("//div[@data-id='217834']//span[contains(.,'My account')]")
    await page.getByText('Login').click()
    await page.waitForTimeout(5000)
    
})