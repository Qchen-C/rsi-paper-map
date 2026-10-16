import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import manifest from '../../src/data/workshop-papers.json' with { type: 'json' };
import { buildCorpusBatches, buildCorpusReview, selectCorpusBatch } from '../../scripts/corpus-batch.mjs';

describe('corpus research batches', () => {
  it('covers the locked manifest exactly once in stable source order', () => {
    const batches = buildCorpusBatches(manifest, 10);
    const flattened = batches.flatMap((batch) => batch.papers);

    assert.equal(batches.length, 11);
    assert.equal(flattened.length, 110);
    assert.deepEqual(flattened.map((paper) => paper.sourceIndex), Array.from({ length: 110 }, (_, index) => index + 1));
  });

  it('selects a one-based batch and exposes a primary-source research checklist', () => {
    const packet = selectCorpusBatch(manifest, 1, 4);

    assert.equal(packet.batch, 1);
    assert.deepEqual(packet.papers.map((paper) => paper.id), [
      'agent0',
      'contextual-drag',
      'agentic-memory-designs',
      'posttrainbench',
    ]);
    assert.deepEqual(packet.requiredChecks, ['introduction', 'method', 'experiments', 'conclusion']);
  });

  it('assigns stable editorial ids to the first review batch', () => {
    const packet = selectCorpusBatch(manifest, 1, 10);
    assert.deepEqual(packet.papers.map((paper) => paper.id), [
      'agent0',
      'contextual-drag',
      'agentic-memory-designs',
      'posttrainbench',
      'language-self-play',
      'simplemem',
      'execution-grounded-ai-research',
      'parametric-skill-transfer',
      'scaling-law-discovery',
      'world-action-verifier',
    ]);
  });

  it('assigns stable editorial ids to the second review batch', () => {
    const packet = selectCorpusBatch(manifest, 2, 10);
    assert.deepEqual(packet.papers.map((paper) => paper.id), [
      'tiny-autoregressive-recursive-models',
      'growing-to-looping',
      'lang-pinn',
      'evopresent',
      'ace-code-evolution',
      'discovery-to-application-loop',
      'causalevolve',
      'pld-residual-rl',
      'vlaw',
      'test-time-self-distillation',
    ]);
  });

  it('assigns stable editorial ids to the third review batch', () => {
    const packet = selectCorpusBatch(manifest, 3, 10);
    assert.deepEqual(packet.papers.map((paper) => paper.id), [
      'self-evolving-rubrics',
      'anchored-self-play-code-repair',
      'interestingness-compression-progress',
      'gasp',
      'adaptive-meta-curriculum',
      'automedprompt-textual-gradients',
      'fedagent',
      'agent0-vl',
      'omega',
      'self-directed-robot-learning',
    ]);
  });

  it('assigns stable editorial ids to the fourth review batch', () => {
    const packet = selectCorpusBatch(manifest, 4, 10);
    assert.deepEqual(packet.papers.map((paper) => paper.id), [
      'reasoning-decision-pivots',
      'rftf-temporal-feedback',
      'verltool',
      'tangramsr',
      'skillrl',
      'prompt-translation',
      'verified-synthetic-data',
      'llm-fe',
      'seek-sql',
      'simple-code-evolution-baselines',
    ]);
  });

  it('rejects invalid batch numbers and sizes', () => {
    assert.throws(() => buildCorpusBatches(manifest, 0), /positive integer/);
    assert.throws(() => selectCorpusBatch(manifest, 0, 10), /positive integer/);
    assert.throws(() => selectCorpusBatch(manifest, 12, 10), /does not exist/);
  });

  it('builds an eleven-batch review ledger with every source index once', () => {
    const review = buildCorpusReview(manifest, 10, '2026-10-16T00:00:00.000Z');
    assert.equal(review.batches.length, 11);
    assert.equal(review.totalPapers, 110);
    assert.deepEqual(
      review.batches.flatMap((batch) => batch.papers.map((paper) => paper.sourceIndex)),
      Array.from({ length: 110 }, (_, index) => index + 1),
    );
  });
});
