import { expect, test } from '@playwright/test';

test.describe('paper detail', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/rsi-paper-map/papers/agent0');
  });

  test('shows bilingual research content, loop, evidence, sources, and reading links', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Agent0: Unleashing');
    await expect(page.getByText('Agent0：通过工具集成推理')).toBeVisible();
    await expect(page.locator('[data-research-section="summary"] .lang-en')).toBeVisible();
    await expect(page.locator('[data-research-section="summary"] .lang-zh')).toBeVisible();
    await expect(page.locator('[data-improvement-loop]')).toBeVisible();
    await expect(page.getByText('Full text checked')).toBeVisible();
    await expect(page.locator('[data-source-link]')).toHaveCount(3);
    await expect(page.locator('[data-prerequisite]')).not.toHaveCount(0);
    await expect(page.locator('[data-related-paper]')).not.toHaveCount(0);
    await expect(page.locator('[data-read-next]')).not.toHaveCount(0);
  });

  test('persists favorite, read, progress, and private note in this browser', async ({ page }) => {
    const favorite = page.getByRole('button', { name: /Favorite|收藏/i });
    await favorite.click();
    await page.getByLabel(/Mark as read|标记已读/i).check();
    await page.getByLabel(/Reading progress|阅读进度/i).fill('63');
    await page.getByLabel(/Private notes|私人笔记/i).fill('Compare ADPO with ordinary clipping.');
    await page.reload();
    await expect(favorite).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByLabel(/Mark as read|标记已读/i)).toBeChecked();
    await expect(page.getByLabel(/Reading progress|阅读进度/i)).toHaveValue('63');
    await expect(page.getByLabel(/Private notes|私人笔记/i)).toHaveValue('Compare ADPO with ordinary clipping.');
  });

  test('does not include personal notes in the static document response', async ({ page, request }) => {
    await page.getByLabel(/Private notes|私人笔记/i).fill('This must stay local.');
    const response = await request.get('/rsi-paper-map/papers/agent0');
    expect(await response.text()).not.toContain('This must stay local.');
  });
});
