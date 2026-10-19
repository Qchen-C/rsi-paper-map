import { expect, test } from '@playwright/test';

test.describe('paper library', () => {
  test.beforeEach(async ({ page }) => {
    page.on('pageerror', (error) => {
      console.error(`Browser page error: ${error.stack ?? error.message}`);
    });
    page.on('console', (message) => {
      if (message.type() === 'error') console.error(`Browser console error: ${message.text()}`);
    });
    await page.goto('/rsi-paper-map/papers');
    const diagnostic = await page.evaluate(() => ({
      readyState: document.readyState,
      form: Boolean(document.querySelector('[data-filter-form]')),
      list: Boolean(document.querySelector('[data-paper-list]')),
      status: Boolean(document.querySelector('[data-result-status]')),
      empty: Boolean(document.querySelector('[data-empty-results]')),
      dataLength: document.querySelector('#paper-index-data')?.textContent?.length ?? -1,
      scripts: [...document.scripts].map((script) => ({
        type: script.type,
        src: script.src,
        text: script.textContent?.slice(0, 80) ?? '',
      })),
    }));
    console.error(`Paper library hydration diagnostic: ${JSON.stringify(diagnostic)}`);
  });

  test('searches original English titles and Chinese content', async ({ page }) => {
    const search = page.getByRole('searchbox', { name: /Search papers|搜索论文/i });
    await search.fill('Unleashing Self-Evolving Agents from Zero Data');
    await expect(page.locator('[data-paper-card]:visible')).toHaveCount(1);
    await expect(page.locator('[data-paper-title]:visible')).toContainText('Agent0');
    await search.fill('通过元学习智能体记忆设计实现持续学习');
    await expect(page.locator('[data-paper-card]:visible')).toHaveCount(1);
    await expect(page.locator('[data-paper-title]:visible')).toContainText('Learning to Continually Learn');
  });

  test('combines theme and evidence filters and clears all state', async ({ page }) => {
    await page.getByLabel('Agents, Tools & Code Evolution').check();
    await page.getByLabel('Full text checked').check();
    expect(await page.locator('[data-paper-card]:visible').count()).toBeGreaterThan(0);
    await page.getByRole('button', { name: /Clear all|全部清除/i }).click();
    await expect(page.locator('[data-paper-card]:visible')).toHaveCount(110);
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
