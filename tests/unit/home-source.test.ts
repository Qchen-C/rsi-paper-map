import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';

const read = (path: string) => readFile(new URL(`../../${path}`, import.meta.url), 'utf8');

describe('homepage source contract', () => {
  it('derives preview statistics from the content collections and locked manifest', async () => {
    const source = await read('src/pages/index.astro');
    assert.match(source, /getCollection\('papers'\)/);
    assert.match(source, /workshopPapers\.length/);
    assert.match(source, /THEMES\.length/);
    assert.match(source, /readingPaths\.length/);
    assert.match(source, /preview/i);
  });

  it('renders all themes and the entry path through dedicated components', async () => {
    const source = await read('src/pages/index.astro');
    assert.match(source, /<ThemeMap/);
    assert.match(source, /<ReadingPath/);
    assert.match(source, /id="entry-path"/);
  });

  it('keeps English paper titles visible while language preference cycles and persists', async () => {
    const header = await read('src/components/SiteHeader.astro');
    const path = await read('src/components/ReadingPath.astro');
    assert.match(header, /loadLanguageMode/);
    assert.match(header, /saveLanguageMode/);
    assert.match(header, /bilingual.*zh.*en/s);
    assert.match(path, /data-paper-title/);
    assert.doesNotMatch(path, /class="[^"]*lang-en[^"]*"[^>]*data-paper-title/);
  });

  it('includes visible keyboard focus and reduced-motion handling', async () => {
    const css = await read('src/styles/global.css');
    assert.match(css, /:focus-visible/);
    assert.match(css, /prefers-reduced-motion/);
  });
});
