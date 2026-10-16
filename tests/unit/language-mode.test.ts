import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { loadLanguageMode, saveLanguageMode } from '../../src/lib/language-mode.ts';
import { MemoryStorage, throwingStorage } from '../helpers/memory-storage.ts';

describe('language mode', () => {
  it('defaults to bilingual for missing or invalid values', () => {
    const storage = new MemoryStorage({ 'rsi-paper-map:ui-language': 'de' });
    assert.equal(loadLanguageMode(storage), 'bilingual');
    storage.removeItem('rsi-paper-map:ui-language');
    assert.equal(loadLanguageMode(storage), 'bilingual');
  });

  it('round-trips Chinese and English preferences', () => {
    const storage = new MemoryStorage();
    saveLanguageMode(storage, 'zh');
    assert.equal(loadLanguageMode(storage), 'zh');
    saveLanguageMode(storage, 'en');
    assert.equal(loadLanguageMode(storage), 'en');
  });

  it('survives unavailable storage', () => {
    assert.equal(loadLanguageMode(throwingStorage), 'bilingual');
    assert.doesNotThrow(() => saveLanguageMode(throwingStorage, 'zh'));
  });
});
