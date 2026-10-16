import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';

const read = (path: string) => readFile(new URL(`../../${path}`, import.meta.url), 'utf8');

describe('paper library source contract', () => {
  it('server-renders paper cards and hydrates only the filter behavior', async () => {
    const page = await read('src/pages/papers/index.astro');
    assert.match(page, /getCollection\('papers'\)/);
    assert.match(page, /papers\.map/);
    assert.match(page, /<PaperCard/);
    assert.match(page, /filterPapers/);
    assert.match(page, /sortPapers/);
  });

  it('provides accessible search, grouped filters, live count, clear action, and empty state', async () => {
    const filters = await read('src/components/FilterPanel.astro');
    const page = await read('src/pages/papers/index.astro');
    assert.match(filters, /type="search"/);
    assert.match(filters, /<fieldset/);
    assert.match(filters, /data-clear-filters/);
    assert.match(page, /aria-live="polite"/);
    assert.match(page, /data-empty-results/);
  });

  it('keeps each original English title outside language-selective wrappers', async () => {
    const card = await read('src/components/PaperCard.astro');
    assert.match(card, /data-paper-title/);
    assert.doesNotMatch(card, /class="[^"]*lang-en[^"]*"[^>]*data-paper-title/);
  });
});
