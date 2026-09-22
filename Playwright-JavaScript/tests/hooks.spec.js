import{test,expect} from '@playwright/test';


test.beforeEach(async({page})=>{
    console.log('Before Each');
    await page.goto('https://playwright.dev/');

});
 test.afterEach(async({page})=>{

     console.log('Test Completed');

 });
 test('verify Title',async({page})=>{

     await expect(page).toHaveTitle(/Playwright/);
 });


test('link',async({page})=>{
    await page.getByRole('link',{name:/Get started/i}).click();
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});