import { expect, test } from '@playwright/test';

test.describe('paper library', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/rsi-paper-map/papers');
  });

  test('searches original English titles and Chinese content', async ({ page }) => {
    const search = page.getByRole('searchbox', { name: /Search papers|搜索论文/i });
    await search.fill('Agent0');
    await expect(page.locator('[data-paper-card]:visible')).toHaveCount(1);
    await expect(page.locator('[data-paper-title]:visible')).toContainText('Agent0');
    await search.fill('持续学习');
    await expect(page.locator('[data-paper-card]:visible')).toHaveCount(1);
    await expect(page.locator('[data-paper-title]:visible')).toContainText('Learning to Continually Learn');
  });

  test('combines theme and evidence filters and clears all state', async ({ page }) => {
    await page.getByLabel('Agents, Tools & Code Evolution').check();
    await page.getByLabel('Full text checked').check();
    await expect(page.locator('[data-paper-card]:visible')).toHaveCount(1);
    await expect(page.locator('[data-result-status]')).toContainText('1');
    await page.getByRole('button', { name: /Clear all|全部清除/i }).click();
    await expect(page.locator('[data-paper-card]:visible')).toHaveCount(4);
  });

  test('keeps filters URL-independent and explains an empty result', async ({ page }) => {
    const initialUrl = page.url();
    await page.getByRole('searchbox', { name: /Search papers|搜索论文/i }).fill('no paper can match this');
    await expect(page.locator('[data-empty-results]')).toBeVisible();
    await expect(page.locator('[data-result-status]')).toContainText('0');
    expect(page.url()).toBe(initialUrl);
  });

  test('exposes keyboard-operable native controls', async ({ page }) => {
    const search = page.getByRole('searchbox', { name: /Search papers|搜索论文/i });
    await search.focus();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('combobox', { name: /Sort|排序/i })).toBeFocused();
  });
});
