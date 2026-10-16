import { expect, test } from '@playwright/test';

test('keeps navigation and emitted assets beneath the GitHub Pages base', async ({ page, request }) => {
  await page.goto('/rsi-paper-map/');
  await page.getByRole('link', { name: /Explore papers|浏览论文/i }).click();
  await expect(page).toHaveURL(/\/rsi-paper-map\/papers\/?$/);

  const firstPaper = page.locator('[data-paper-card]').first().getByRole('link');
  await firstPaper.click();
  await expect(page).toHaveURL(/\/rsi-paper-map\/papers\/[a-z0-9-]+\/?$/);

  await page.goto('/rsi-paper-map/');
  const internalResources = await page.locator('link[href], script[src], img[src]').evaluateAll((nodes) =>
    [...new Set(nodes.flatMap((node) => {
      const href = node.getAttribute('href');
      const src = node.getAttribute('src');
      return [href, src].filter((value): value is string => Boolean(value?.startsWith('/rsi-paper-map/')));
    }))],
  );

  expect(internalResources.length).toBeGreaterThan(0);
  for (const resource of internalResources) {
    const response = await request.get(resource);
    expect(response.status(), `${resource} should be reachable`).toBe(200);
  }
});
