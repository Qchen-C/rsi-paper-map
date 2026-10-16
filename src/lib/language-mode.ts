export type LanguageMode = 'bilingual' | 'zh' | 'en';

const LANGUAGE_KEY = 'rsi-paper-map:ui-language';

export function loadLanguageMode(storage: Storage): LanguageMode {
  try {
    const value = storage.getItem(LANGUAGE_KEY);
    return value === 'zh' || value === 'en' || value === 'bilingual' ? value : 'bilingual';
  } catch {
    return 'bilingual';
  }
}

export function saveLanguageMode(storage: Storage, mode: LanguageMode): void {
  try { storage.setItem(LANGUAGE_KEY, mode); } catch { /* best effort */ }
}
