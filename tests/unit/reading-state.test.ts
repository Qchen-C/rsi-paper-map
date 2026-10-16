import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  clearReadingState,
  defaultReadingState,
  loadReadingState,
  saveReadingState,
} from '../../src/lib/reading-state.ts';
import { MemoryStorage, throwingStorage } from '../helpers/memory-storage.ts';

describe('reading state', () => {
  it('returns an independent default for a new paper', () => {
    const storage = new MemoryStorage();
    assert.deepEqual(loadReadingState(storage, 'agent0'), defaultReadingState);
    assert.notEqual(loadReadingState(storage, 'agent0'), defaultReadingState);
  });

  it('persists fields, clamps progress, and isolates paper ids', () => {
    const storage = new MemoryStorage();
    const saved = saveReadingState(storage, 'agent0', {
      favorite: true,
      read: true,
      progress: 140,
      note: 'Review the verifier assumptions.',
    });
    assert.equal(saved.progress, 100);
    assert.match(saved.updatedAt ?? '', /^\d{4}-\d{2}-\d{2}T/);
    assert.deepEqual(loadReadingState(storage, 'agent0'), saved);
    assert.deepEqual(loadReadingState(storage, 'contextual-drag'), defaultReadingState);
  });

  it('resets malformed JSON without breaking public behavior', () => {
    const storage = new MemoryStorage({ 'rsi-paper-map:v1:agent0': '{bad json' });
    assert.deepEqual(loadReadingState(storage, 'agent0'), defaultReadingState);
    assert.equal(storage.getItem('rsi-paper-map:v1:agent0'), null);
  });

  it('survives unavailable storage', () => {
    assert.doesNotThrow(() => loadReadingState(throwingStorage, 'agent0'));
    assert.deepEqual(loadReadingState(throwingStorage, 'agent0'), defaultReadingState);
    assert.doesNotThrow(() => saveReadingState(throwingStorage, 'agent0', { progress: 50 }));
  });

  it('clears one paper or every versioned paper key', () => {
    const storage = new MemoryStorage();
    saveReadingState(storage, 'agent0', { progress: 50 });
    saveReadingState(storage, 'paper-b', { progress: 60 });
    storage.setItem('unrelated', 'keep');
    clearReadingState(storage, 'agent0');
    assert.equal(loadReadingState(storage, 'agent0').progress, 0);
    assert.equal(loadReadingState(storage, 'paper-b').progress, 60);
    clearReadingState(storage);
    assert.equal(loadReadingState(storage, 'paper-b').progress, 0);
    assert.equal(storage.getItem('unrelated'), 'keep');
  });
});
