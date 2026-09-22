import{test,expect} from '@playwright/test';

test('tohave title',async ({page})=>{

    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);

});

test('Strarted link',async({page})=>{

    await page.goto('https://playwright.dev/');
    await page.getByRole('link',{name:'Get started'}).click();
    await expect(page.getByRole('heading',{name:'Installation'})).toBeVisible();

});