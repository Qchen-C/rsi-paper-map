import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { THEMES } from '../../src/data/themes.ts';

const readingPaths = JSON.parse(
  readFileSync(new URL('../../src/data/reading-paths.json', import.meta.url), 'utf8'),
);
const seedPaperIds = new Set([
  'agent0',
  'contextual-drag',
  'agentic-memory-designs',
  'posttrainbench',
]);

describe('RSI taxonomy', () => {
  it('defines exactly nine unique bilingual themes', () => {
    assert.equal(THEMES.length, 9);
    assert.equal(new Set(THEMES.map((theme) => theme.id)).size, 9);
    assert.ok(THEMES.every((theme) => theme.titleEn && theme.titleZh));
  });
});

describe('reading paths', () => {
  it('defines the five approved routes and a ten-paper entry target', () => {
    assert.equal(readingPaths.length, 5);
    assert.equal(new Set(readingPaths.map((path: { id: string }) => path.id)).size, 5);
    const entry = readingPaths.find((path: { id: string }) => path.id === 'entry');
    assert.equal(entry.targetLength, 10);
  });

  it('contains only unique, resolved seed paper ids', () => {
    for (const path of readingPaths) {
      assert.equal(new Set(path.paperIds).size, path.paperIds.length, `${path.id} contains a duplicate`);
      assert.ok(path.paperIds.every((id: string) => seedPaperIds.has(id)), `${path.id} contains an unknown seed id`);
    }
  });
});
