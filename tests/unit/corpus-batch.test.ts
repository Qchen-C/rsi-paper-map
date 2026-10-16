import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import manifest from '../../src/data/workshop-papers.json' with { type: 'json' };
import { buildCorpusBatches, selectCorpusBatch } from '../../scripts/corpus-batch.mjs';

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

  it('rejects invalid batch numbers and sizes', () => {
    assert.throws(() => buildCorpusBatches(manifest, 0), /positive integer/);
    assert.throws(() => selectCorpusBatch(manifest, 0, 10), /positive integer/);
    assert.throws(() => selectCorpusBatch(manifest, 12, 10), /does not exist/);
  });
});
