import{test,expect} from '@playwright/test';

test('slider&Range',async({page})=>{
   await page.goto('https://playwrightlab.github.io/');
   await page.getByTestId('nav-login').click();
   await page.getByLabel('Email Address').fill('test@playlab.com');
   await page.getByTestId('login-password').fill('Password123');
   await page.getByRole('button',{name:'Sign In'}).click();
  await expect(page.getByText('Welcome back!')).toHaveText('Welcome back!');

await page.getByRole('link',{name:'Go to Dashboard'}).click();
const volume=page.getByRole('slider',{name:/Volume/i});
await volume.fill('50');
await expect(volume).toHaveValue('50');
const price = page.getByRole('slider',{name:/Price Range/i});
await price.fill('500');
await expect(price).toHaveValue('500');

});