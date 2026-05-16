import { type Locator, type Page } from '@playwright/test';

export class CalculatorPage {
  readonly page: Page;
  readonly stepper: Locator;
  readonly nextButton: Locator;
  readonly backButton: Locator;
  readonly generatePdfButton: Locator;
  readonly priceDisplay: Locator;
  readonly toastMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.stepper = page.locator('[data-testid="stepper"]');
    this.nextButton = page.locator('[data-testid="calculator-next-btn"]');
    this.backButton = page.locator('[data-testid="calculator-back-btn"]');
    this.generatePdfButton = page.locator('[data-testid="generate-pdf-btn"]');
    this.priceDisplay = page.locator('[data-testid="calculator-total-price"]');
    this.toastMessage = page.locator('[data-testid="toast-message"]');
  }

  async goto() {
    await this.page.goto('/calculator');
  }

  async next() {
    await this.nextButton.click();
  }

  async back() {
    await this.backButton.click();
  }
}
