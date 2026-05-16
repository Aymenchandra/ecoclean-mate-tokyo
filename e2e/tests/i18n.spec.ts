import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('i18n Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('Translations load correctly per locale and persist on reload', async ({ page }) => {
    // Switch to English
    await homePage.switchLanguage('en');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');

    // Reload and check if it persists
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');

    // Switch to Japanese
    await homePage.switchLanguage('ja');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ja');

    // Reload and check
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('lang', 'ja');
  });

  test('No missing translation keys on the landing page', async ({ page }) => {
    // A simple check: text should not contain literal i18n keys like 'hero.title.part1'
    const pageText = await page.content();
    expect(pageText).not.toContain('hero.title.part1');
    expect(pageText).not.toContain('brand.name');
    expect(pageText).not.toContain('nav.estimate');
  });
});
