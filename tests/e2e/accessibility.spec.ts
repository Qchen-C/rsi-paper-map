import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = [
  '/rsi-paper-map/',
  '/rsi-paper-map/papers',
  '/rsi-paper-map/papers/agent0',
] as const;

for (const route of routes) {
  test(`has no serious or critical accessibility violations at ${route}`, async ({ page }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const blocking = results.violations.filter(({ impact }) => impact === 'serious' || impact === 'critical');
    expect(blocking).toEqual([]);
  });
}
