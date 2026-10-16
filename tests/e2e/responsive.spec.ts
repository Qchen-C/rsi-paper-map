import { expect, test } from '@playwright/test';

const mobileRoutes = [
  '/rsi-paper-map/',
  '/rsi-paper-map/papers',
  '/rsi-paper-map/papers/agent0',
] as const;

test.describe('390px responsive behavior', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile-390', 'Mobile-only coverage');
    await page.setViewportSize({ width: 390, height: 844 });
  });

  for (const route of mobileRoutes) {
    test(`does not scroll horizontally at ${route}`, async ({ page }) => {
      await page.goto(route);
      const dimensions = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(dimensions.clientWidth).toBe(390);
      expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
    });
  }

  test('operates filters and private progress by keyboard', async ({ page }) => {
    await page.goto('/rsi-paper-map/papers');
    const search = page.getByRole('searchbox', { name: /Search papers|搜索论文/i });
    await search.focus();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('combobox', { name: /Sort|排序/i })).toBeFocused();

    await page.goto('/rsi-paper-map/papers/agent0');
    const progress = page.getByLabel(/Reading progress|阅读进度/i);
    await progress.focus();
    await page.keyboard.press('ArrowRight');
    await expect(progress).toHaveValue('1');
  });
});
