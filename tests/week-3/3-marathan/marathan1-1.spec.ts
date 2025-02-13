// marathan-1 
// create matathan and convert to opportunity

import { expect,test } from '@playwright/test';

test('Lead to Opportunity', async ({page}) => {
// navigate to loginpage
await page.goto('https://login.salesforce.com/');
//login to salesforce
await page.locator('#username').fill('sathishalthus@hotmail.com');
await page.locator('#password').fill('Jsa@2sales');
await page.locator('#Login').click();
// wait 
await page.waitForSelector('div.appLauncher');
await expect(page.getByRole('button', { name: 'App Launcher' })).toBeVisible();
// add new marketing lead
await page.getByRole('button', { name: 'App Launcher' }).click();
await page.getByRole('combobox', { name: 'Search apps and items...' }).fill('Marketing');
await page.getByRole('option', { name: 'Marketing CRM Classic' }).click();
await page.getByRole('link', { name: 'Leads' }).click();
await page.getByRole('button', { name: 'New' }).click();
await page.getByRole('combobox', { name: 'Salutation' }).click();
await page.getByRole('option', { name: 'Ms.' }).click();
await page.getByRole('textbox', { name: 'First Name' }).fill('Sathish');
await page.getByRole('textbox', { name: '*Last Name' }).fill('Johnson');
await page.getByRole('textbox', { name: '*Company' }).fill('LeafTech');
await page.getByRole('button', { name: 'Save', exact: true }).click();
await expect(page.getByText('Lead \"Ms. Sathish Johnson\" was created.')).toBeVisible();
// convert lead to opportunity

await page.getByRole('button', { name: 'Show more actions' }).click();
await page.getByRole('menuitem', { name: 'Convert' }).click();
await page.getByRole('button', { name: 'LeafTech-' }).click();
await page.getByRole('textbox', { name: 'Opportunity Name *' }).clear();
await page.getByRole('textbox', { name: 'Opportunity Name *' }).fill('TestLeaf');
await page.getByRole('button', { name: 'Convert' }).click();
await expect(page.getByRole('dialog')).toContainText('Your lead has been converted');
await page.getByRole('button', { name: 'Go to Leads' }).click();
await page.getByRole('link', { name: 'Opportunities' }).click();
await expect(page.getByRole('link', { name: 'TestLeaf' })).toBeVisible();

});

