import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('research map homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/rsi-paper-map/');
  });

  test('shows the complete bilingual corpus, real counts, themes, and entry path', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Understand the loop');
    await expect(page.getByText('110 research cards')).toBeVisible();
    await expect(page.getByText('110-paper index')).toBeVisible();
    await expect(page.locator('[data-theme-link]')).toHaveCount(9);
    await expect(page.locator('#entry-path [data-paper-title]')).toHaveCount(10);
  });

  test('cycles and persists language mode without hiding English paper titles', async ({ page }) => {
    const language = page.getByRole('button', { name: /language|语言/i });
    await language.click();
    await expect(page.locator('html')).toHaveAttribute('data-language', 'zh');
    await language.click();
    await expect(page.locator('html')).toHaveAttribute('data-language', 'en');
    await expect(page.locator('[data-paper-title]').first()).toBeVisible();
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-language', 'en');
  });

  test('uses project-base-prefixed internal links and remains keyboard accessible', async ({ page }) => {
    const libraryLink = page.getByRole('link', { name: /Explore papers|浏览论文/i });
    await expect(libraryLink).toHaveAttribute('href', '/rsi-paper-map/papers');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: /Skip to content|跳到正文/i })).toBeFocused();
  });

  test('has no automatically detectable accessibility violations', async ({ page }) => {
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});
