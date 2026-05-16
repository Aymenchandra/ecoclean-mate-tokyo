import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heroSection: Locator;
  readonly logoGridSection: Locator;
  readonly howItWorksSection: Locator;
  readonly whyUsSection: Locator;
  readonly statsSection: Locator;
  readonly carouselSection: Locator;
  readonly teamSection: Locator;
  readonly ctaSection: Locator;
  readonly navbar: Locator;
  readonly footer: Locator;
  readonly scrollToTopButton: Locator;
  readonly langSwitcher: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroSection = page.locator('[data-testid="hero-section"]');
    this.logoGridSection = page.locator('[data-testid="logogrid-section"]');
    this.howItWorksSection = page.locator('[data-testid="howitworks-section"]');
    this.whyUsSection = page.locator('[data-testid="whyus-section"]');
    this.statsSection = page.locator('[data-testid="stats-section"]');
    this.carouselSection = page.locator('[data-testid="carousel-section"]');
    this.teamSection = page.locator('[data-testid="team-section"]');
    this.ctaSection = page.locator('[data-testid="cta-section"]');
    this.navbar = page.locator('nav'); // using semantic tag
    this.footer = page.locator('footer'); // using semantic tag
    this.scrollToTopButton = page.locator('[data-testid="scroll-to-top"]');
    this.langSwitcher = page.locator('[data-testid="lang-switcher"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async switchLanguage(lang: 'en' | 'fil' | 'ja') {
    await this.langSwitcher.first().click();
    await this.page.locator(`[data-testid="lang-option-${lang}"]`).first().click();
  }
}
