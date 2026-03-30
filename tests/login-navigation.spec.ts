import { test, expect } from '@playwright/test';

test.describe('Login Navigation Tests', () => {
    test('Navigate to login page', async ({ page }) => {
        // Navigate to the login page
        await page.goto('https://preprodapp.tekioncloud.com/login');
        

        // Wait for the page to load
        await page.waitForLoadState('domcontentloaded');

        // Verify we're on the login page by checking the URL
        expect(page.url()).toContain('/login');

        // Optional: Take a screenshot
        await page.screenshot({ path: 'screenshots/login-page.png', fullPage: true });

        console.log('✅ Successfully navigated to:', page.url());
        console.log('✅ Hey raghu your pipeline  triggered successfully');
        console.log('✅ Hey raghu your pipeline  triggered successfully');

    });
});

