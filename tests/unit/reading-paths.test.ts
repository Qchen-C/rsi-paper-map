import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { describe, it } from 'node:test';
import { THEMES } from '../../src/data/themes.ts';

const readingPaths = JSON.parse(
  readFileSync(new URL('../../src/data/reading-paths.json', import.meta.url), 'utf8'),
);
const reviewedPaperIds = new Set(
  readdirSync(new URL('../../src/content/papers/', import.meta.url))
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, '')),
);

const expectedRoutes = {
  entry: ['agent0', 'contextual-drag', 'agentic-memory-designs', 'language-self-play', 'verified-synthetic-data', 'ace-context-engineering', 'structured-error-localization', 'simple-code-evolution-baselines', 'verifying-the-verifiers', 'sahoo'],
  'agent-evolution': ['agent0', 'autoharness', 'simple-code-evolution-baselines', 'ace-code-evolution', 'sift', 'sare', 'mappa', 'build-judge-optimize'],
  'memory-continual-learning': ['agentic-memory-designs', 'simplemem', 'ace-context-engineering', 'reasoning-cache', 'log-augmented-generation', 'praxis', 'test-time-self-distillation', 'orthogonal-continual-unlearning'],
  'self-play-synthetic-data': ['language-self-play', 'self-play-adversarial-imitation', 'anchored-self-play-code-repair', 'sage', 'verified-synthetic-data', 'adaptive-meta-curriculum', 'iterative-self-generated-training', 'mass'],
  'safety-failure-modes': ['contextual-drag', 'code-agent-reward-hacking', 'self-evolving-rubrics', 'world-action-verifier', 'solution-verifier-gain', 'structured-error-localization', 'verifying-the-verifiers', 'sahoo', 'tamperbench'],
} as const;

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
    assert.equal(entry.paperIds.length, 10);
  });

  it('contains only unique, reviewed paper ids', () => {
    for (const path of readingPaths) {
      assert.equal(new Set(path.paperIds).size, path.paperIds.length, `${path.id} contains a duplicate`);
      assert.ok(path.paperIds.every((id: string) => reviewedPaperIds.has(id)), `${path.id} contains an unknown reviewed id`);
    }
  });

  it('locks the final prerequisite-aware route order', () => {
    for (const path of readingPaths) {
      assert.deepEqual(path.paperIds, expectedRoutes[path.id as keyof typeof expectedRoutes]);
    }
  });
});
