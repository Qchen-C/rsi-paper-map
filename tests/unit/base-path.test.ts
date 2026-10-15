import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { withBase } from '../../src/lib/base-path.ts';

describe('withBase', () => {
  it('prefixes internal paths exactly once', () => {
    assert.equal(
      withBase('/papers/agent0', '/rsi-paper-map/'),
      '/rsi-paper-map/papers/agent0',
    );
    assert.equal(
      withBase('/rsi-paper-map/papers', '/rsi-paper-map/'),
      '/rsi-paper-map/papers',
    );
    assert.equal(withBase('/papers', '/'), '/papers');
  });
});
