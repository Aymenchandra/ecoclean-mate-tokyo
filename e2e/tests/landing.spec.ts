import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Landing Page', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('All sections render correctly', async ({ page }) => {
    // We expect the hero section to be visible
    await expect(homePage.heroSection).toBeVisible();

    // Check navbar and footer semantic tags
    await expect(homePage.navbar).toBeVisible();
    await expect(homePage.footer).toBeVisible();
  });

  test('Language switcher switches between en / fil / ja and content updates', async ({ page }) => {
    // Test English
    await homePage.switchLanguage('en');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');

    // Test Filipino
    await homePage.switchLanguage('fil');
    await expect(page.locator('html')).toHaveAttribute('lang', 'fil');

    // Test Japanese
    await homePage.switchLanguage('ja');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ja');
  });

  test('Navbar links navigate correctly', async ({ page }) => {
    // Wait for the estimate button in the navbar using role
    const estimateLink = page.getByRole('link', { name: /Estimate|見積もり|Tantyahin/i });
    await expect(estimateLink).toBeVisible();
    await estimateLink.click();
    await expect(page).toHaveURL(/.*calculator/);
  });
});
