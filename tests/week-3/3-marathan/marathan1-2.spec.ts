import { test, expect } from '@playwright/test';

test('Salesforce Cases', async ({ page },) => {
await page.goto('https://login.salesforce.com/');
await page.getByRole('textbox', { name: 'Username' }).fill('sathishalthus@hotmail.com');
await page.getByRole('textbox', { name: 'Password' }).fill('Jsa@2sales');
await page.getByRole('button', { name: 'Log In' }).click();
//
await page.getByRole('button', { name: 'App Launcher' }).click();
await page.getByRole('combobox', { name: 'Search apps and items...' }).fill('service');
await page.getByRole('option', { name: 'Service', exact: true }).click();
await page.getByRole('button', { name: 'Cases List' }).click();
// new case
await page.getByRole('link', { name: 'Cases' }).click();
await page.getByRole('button', { name:'New'}).click();
await page.getByRole('combobox', { name: 'Contact Name' }).fill('JJ');
await page.locator('span').filter({ hasText: 'New Contact' }).nth(1).click();
await page.getByRole('combobox', { name: 'Salutation' }).click();
await page.getByRole('option', { name: 'Ms.' }).click();
await page.getByRole('textbox', { name: '*Last Name' }).fill('JJ');
await page.getByRole('button', { name: 'Save' }).click();
await page.getByText('Contact "JJ" was created.').isVisible();
// edit case
await page.getByRole('combobox', { name: 'Status' }).click();
await page.getByRole('combobox', { name: 'Case Origin' }).click();
await page.getByRole('option', { name: 'Email' }).locator('span').nth(1).click();
await page.getByRole('button', { name: 'Save', exact: true }).click();
await page.getByText('Case "00001033" was created.').click();
await page.getByRole('button', { name: 'Edit Status' }).click();
await page.getByRole('combobox', { name: 'Status' }).click();
await page.getByText('Escalated', { exact: true }).click();
await page.getByRole('button', { name: 'Save' }).click();
// share update
await page.getByTitle('Share an update...').click();
await page.getByLabel('', { exact: true }).fill('jj desc');
await page.getByTitle('Click, or press Ctrl+Enter').click();
await page.locator('a').filter({ hasText: 'Actions for this Feed Item' }).first().click();
await page.locator('button').filter({ hasText: 'Actions for this Feed Item' }).click();
await page.getByTitle('Like on Chatter').locator('a').click();
await page.getByRole('link', { name: 'Chatter' }).click();
await expect(page.getByRole('link', { name: '00001033' })).toBeVisible();
await page.getByRole('button', { name: 'Close' }).click();

});

