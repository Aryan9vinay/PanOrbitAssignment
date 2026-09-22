import{test,expect} from '@playwright/test';

test('Login',async({page})=>{
await page.goto('https://playwrightlab.github.io/',{timeout:90000});
await page.setViewportSize({ width: 1320, height: 1080 });
await page.getByTestId('nav-login').click();
await expect(page.getByRole('heading',{name:'Welcome back'})).toBeVisible();
await page.getByTestId('login-email').fill('test@playlab.com');
await page.getByTestId('login-password').fill('Password123');
await page.getByTestId('login-submit').click();
await expect(page.getByTestId('welcome-name')).toBeVisible();
await page.getByRole('link',{name:'Go to Dashboard'}).click();
await expect(page.locator('#registrationTitle')).toBeVisible();
await page.mouse.wheel(0,600);
await page.getByRole('textbox',{name:'Full Name *'}).fill('vinay kr singh');
await page.getByRole('textbox',{name:'Password *'}).fill('singhisk');
await page.getByRole('textbox',{name:'Phone Number'}).fill('1234567890');
await page.waitForTimeout(3000);
await page.mouse.wheel(0,800);
await page.getByLabel('Date of Birth').fill('1991-05-28');
await page.waitForTimeout(3000);
await page.getByLabel('Country').selectOption({label:'India'});
await page.getByRole('radio',{name:' Male'}).click();
await page.getByLabel(' Java').click();
await page.getByLabel('Bio').fill('ahi more raja ghhodi leke ke ajaa');
await page.getByRole('link',{name:'Terms & Conditions'}).check();
await page.getByRole('button',{name:'Register'}).click();
await expect(page.getByText(' Registration successful! Welcome aboard.')).toBeVisible();

});

