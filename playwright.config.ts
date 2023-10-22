import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

    timeout: 100000,
    // testDir: './tests',
    testMatch: ["tests/lambdatest/2.loginpom.test.ts"],
    use:{
        headless: false
    }
}
export default config;