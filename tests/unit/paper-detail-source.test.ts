import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';

const read = (path: string) => readFile(new URL(`../../${path}`, import.meta.url), 'utf8');

describe('paper detail source contract', () => {
  it('generates one static page per paper and resolves relationships by stable id', async () => {
    const route = await read('src/pages/papers/[id].astro');
    assert.match(route, /getStaticPaths/);
    assert.match(route, /getCollection\('papers'\)/);
    assert.match(route, /<PaperDetail/);
    assert.match(route, /allPapers/);
  });

  it('renders bilingual research sections, improvement loop, evidence, and primary sources', async () => {
    const detail = await read('src/components/PaperDetail.astro');
    for (const field of ['summaryEn', 'summaryZh', 'problemEn', 'methodEn', 'resultsEn', 'limitationsEn', 'whyReadEn']) {
      assert.match(detail, new RegExp(field));
    }
    assert.match(detail, /feedbackSource/);
    assert.match(detail, /updatedObject/);
    assert.match(detail, /updateMechanism/);
    assert.match(detail, /successSignal/);
    assert.match(detail, /evidenceStatus/);
    assert.match(detail, /data-source-link/);
  });

  it('hydrates private state from local storage without embedding a note value in HTML', async () => {
    const panel = await read('src/components/ProgressPanel.astro');
    assert.match(panel, /loadReadingState/);
    assert.match(panel, /saveReadingState/);
    assert.match(panel, /clearReadingState/);
    assert.match(panel, /<textarea[^>]*><\/textarea>/s);
    assert.doesNotMatch(panel, /value=\{.*note/i);
  });
});
