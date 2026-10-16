export interface ReadingState {
  favorite: boolean;
  read: boolean;
  progress: number;
  note: string;
  updatedAt: string | null;
}

export type ReadingStatePatch = Partial<Omit<ReadingState, 'updatedAt'>>;

const STORAGE_PREFIX = 'rsi-paper-map:v1:';

export const defaultReadingState: Readonly<ReadingState> = Object.freeze({
  favorite: false,
  read: false,
  progress: 0,
  note: '',
  updatedAt: null,
});

function freshDefault(): ReadingState {
  return { ...defaultReadingState };
}

function storageKey(paperId: string): string {
  return `${STORAGE_PREFIX}${paperId}`;
}

function clampProgress(value: unknown): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) return 0;
  return Math.min(100, Math.max(0, value));
}

function normalizeState(value: unknown): ReadingState | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const candidate = value as Record<string, unknown>;
  if (
    typeof candidate.favorite !== 'boolean'
    || typeof candidate.read !== 'boolean'
    || typeof candidate.note !== 'string'
    || typeof candidate.progress !== 'number'
    || (candidate.updatedAt !== null && typeof candidate.updatedAt !== 'string')
  ) return null;

  return {
    favorite: candidate.favorite,
    read: candidate.read,
    progress: clampProgress(candidate.progress),
    note: candidate.note,
    updatedAt: candidate.updatedAt,
  };
}

export function loadReadingState(storage: Storage, paperId: string): ReadingState {
  const key = storageKey(paperId);
  try {
    const raw = storage.getItem(key);
    if (raw === null) return freshDefault();
    const state = normalizeState(JSON.parse(raw));
    if (state) return state;
    storage.removeItem(key);
  } catch {
    try { storage.removeItem(key); } catch { /* storage may be unavailable */ }
  }
  return freshDefault();
}

export function saveReadingState(
  storage: Storage,
  paperId: string,
  patch: ReadingStatePatch,
): ReadingState {
  const current = loadReadingState(storage, paperId);
  const next: ReadingState = {
    favorite: typeof patch.favorite === 'boolean' ? patch.favorite : current.favorite,
    read: typeof patch.read === 'boolean' ? patch.read : current.read,
    progress: patch.progress === undefined ? current.progress : clampProgress(patch.progress),
    note: typeof patch.note === 'string' ? patch.note : current.note,
    updatedAt: new Date().toISOString(),
  };
  try { storage.setItem(storageKey(paperId), JSON.stringify(next)); } catch { /* best effort */ }
  return next;
}

export function clearReadingState(storage: Storage, paperId?: string): void {
  try {
    if (paperId !== undefined) {
      storage.removeItem(storageKey(paperId));
      return;
    }

    const keys: string[] = [];
    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);
      if (key?.startsWith(STORAGE_PREFIX)) keys.push(key);
    }
    for (const key of keys) storage.removeItem(key);
  } catch {
    // Browsers may disable storage entirely; public reading must still work.
  }
}
