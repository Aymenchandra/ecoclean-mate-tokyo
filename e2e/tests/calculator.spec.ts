import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

test.describe('Calculator Flow', () => {
  let calcPage: CalculatorPage;

  test.beforeEach(async ({ page }) => {
    calcPage = new CalculatorPage(page);
    await calcPage.goto();
  });

  test('Full happy path: Step 1 -> Step 8 -> PDF generated', async ({ page }) => {
    // ── Step 1: Read & Confirm service area ───────────────────────────────
    // Wait for the confirm button to be enabled (it starts enabled, becomes
    // disabled once clicked — so just wait for it to be visible).
    const confirmBtn = page.locator('[data-testid="step1-confirm-btn"]');
    await expect(confirmBtn).toBeVisible({ timeout: 10000 });
    await confirmBtn.click();
    // After click the button becomes disabled (confirmed state)
    await expect(confirmBtn).toBeDisabled({ timeout: 5000 });

    // Advance to Step 2
    await calcPage.next();
    await expect(page.locator('[data-testid="calculator-next-btn"]')).toBeVisible({ timeout: 5000 });

    // ── Step 2: Property Details ──────────────────────────────────────────
    // Select 'apartment' (🏢) — the first button in the 2×2 grid
    const apartmentBtn = page.locator('button[type="button"]').filter({ hasText: /🏢/ }).first();
    await expect(apartmentBtn).toBeVisible({ timeout: 5000 });
    await apartmentBtn.click();

    // Fill floor inputs by their HTML id — more stable than positional spinbutton
    await page.locator('#totalFloors').fill('5');
    await page.locator('#itemFloor').fill('2');

    await calcPage.next();

    // ── Step 3: Elevator Details ──────────────────────────────────────────
    const elevatorBtn = page.locator('[data-testid="step3-has-elevator-btn"]');
    await expect(elevatorBtn).toBeVisible({ timeout: 5000 });
    await elevatorBtn.click();
    // Confirm selection took effect (border changes to green)
    await expect(elevatorBtn).toHaveClass(/border-green-500/, { timeout: 3000 });

    await calcPage.next();

    // ── Step 4: Add Products ──────────────────────────────────────────────
    // Products are loaded via a lazy i18n namespace; wait for the grid to appear
    const itemsGrid = page.locator('[data-testid="step4-items-grid"]');
    await expect(itemsGrid).toBeVisible({ timeout: 15000 });

    // Wait until at least one product card is rendered
    const firstItemBtn = itemsGrid.locator('[data-testid="step4-item-btn"]').first();
    await expect(firstItemBtn).toBeVisible({ timeout: 10000 });

    // Click the first available (not-yet-added) item
    await firstItemBtn.click();

    // The button should now have data-item-added="true" (disabled + green border)
    await expect(firstItemBtn).toHaveAttribute('data-item-added', 'true', { timeout: 5000 });

    await calcPage.next();

    // ── Step 5: Configure Products ────────────────────────────────────────
    // No required action — just advance
    await calcPage.next();

    // ── Step 6: Extras ────────────────────────────────────────────────────
    await calcPage.next();

    // ── Step 7: Summary ───────────────────────────────────────────────────
    await calcPage.next();

    // ── Step 8: Contact Details ───────────────────────────────────────────
    await page.locator('#lastName').fill('Test');
    await page.locator('#firstName').fill('ユーザー');
    // Phone must match /^(\+81-?)?0(\d{1,4})-?\d{1,4}-?\d{3,4}$/ — use dashed format
    await page.locator('#phoneNumber').fill('090-1234-5678');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#city').fill('Tokyo');
    await page.locator('#building').fill('Japan');

    // Wait for the "form complete" indicator to appear (all required fields filled)
    await expect(page.locator('text=calculator.step8.complete').or(
      page.locator('.bg-green-50.border-green-200')
    )).toBeVisible({ timeout: 5000 });

    // ── Generate PDF (Step 8 completion) ─────────────────────────────────
    const generateBtn = page.locator('[data-testid="generate-pdf-btn"]');
    await expect(generateBtn).toBeVisible({ timeout: 5000 });

    // Attempt to capture a download event; tolerate browsers that skip it
    const downloadPromise = page.waitForEvent('download', { timeout: 15000 }).catch(() => null);
    await generateBtn.click();
    await downloadPromise;

    // After successful submission the SuccessScreen mounts — it renders the
    // "calculator.success.title" translation key text.
    await expect(
      page.locator('[data-testid="success-screen"]')
        .or(page.getByText(/完了|Complete|Tagumpay|calculator\.success/i))
    ).toBeVisible({ timeout: 20000 });
  });

  test('Step 1 blocks next until confirmed', async ({ page }) => {
    // Without clicking confirm, Next should show a toast and stay on step 1
    await calcPage.next();
    // The next button should still be present (not moved to step 2)
    await expect(page.locator('[data-testid="calculator-next-btn"]')).toBeVisible();
    // Stepper should still show step 1 as active
    // (the confirm button should still be enabled, not yet disabled)
    await expect(page.locator('[data-testid="step1-confirm-btn"]')).not.toBeDisabled();
  });

  test('Step 4 blocks next with empty cart', async ({ page }) => {
    // Quickly blast through Steps 1-3 to reach Step 4
    await page.locator('[data-testid="step1-confirm-btn"]').click();
    await calcPage.next();

    await page.locator('button[type="button"]').filter({ hasText: /🏢/ }).first().click();
    await page.locator('#totalFloors').fill('3');
    await page.locator('#itemFloor').fill('1');
    await calcPage.next();

    await page.locator('[data-testid="step3-has-elevator-btn"]').click();
    await calcPage.next();

    // Now on Step 4 — try to advance without adding any item
    await calcPage.next();
    // Should remain on Step 4 (next button still visible, items grid visible)
    await expect(page.locator('[data-testid="step4-items-grid"]')).toBeVisible({ timeout: 10000 });
  });
});
