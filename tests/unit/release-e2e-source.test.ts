import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';

const read = (path: string) => readFile(new URL(`../../${path}`, import.meta.url), 'utf8');

describe('release browser assurance source contract', () => {
  it('runs Playwright against the production preview at desktop and 390px', async () => {
    const config = await read('playwright.config.ts');
    assert.match(config, /npm run build && npm run preview/);
    assert.match(config, /Desktop Chrome/);
    assert.match(config, /width:\s*390/);
  });

  it('covers accessibility on home, library, and detail pages', async () => {
    const source = await read('tests/e2e/accessibility.spec.ts');
    assert.match(source, /AxeBuilder/);
    assert.match(source, /\/rsi-paper-map\//);
    assert.match(source, /\/rsi-paper-map\/papers/);
    assert.match(source, /\/rsi-paper-map\/papers\/agent0/);
    assert.match(source, /serious.*critical|critical.*serious/s);
  });

  it('covers mobile overflow and keyboard operation', async () => {
    const source = await read('tests/e2e/responsive.spec.ts');
    assert.match(source, /scrollWidth/);
    assert.match(source, /390/);
    assert.match(source, /keyboard/);
    assert.match(source, /Reading progress|阅读进度/);
  });

  it('checks production-base navigation and every emitted internal asset', async () => {
    const source = await read('tests/e2e/production-base.spec.ts');
    assert.match(source, /rsi-paper-map/);
    assert.match(source, /papers/);
    assert.match(source, /data-paper-card/);
    assert.match(source, /request\.get/);
    assert.match(source, /href.*src|src.*href/s);
  });
});
