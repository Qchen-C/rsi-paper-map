export class MemoryStorage implements Storage {
  private values = new Map<string, string>();

  constructor(initial: Record<string, string> = {}) {
    for (const [key, value] of Object.entries(initial)) this.values.set(key, value);
  }

  get length(): number { return this.values.size; }
  clear(): void { this.values.clear(); }
  getItem(key: string): string | null { return this.values.get(key) ?? null; }
  key(index: number): string | null { return [...this.values.keys()][index] ?? null; }
  removeItem(key: string): void { this.values.delete(key); }
  setItem(key: string, value: string): void { this.values.set(key, value); }
}

export const throwingStorage: Storage = {
  get length() { throw new Error('storage disabled'); },
  clear() { throw new Error('storage disabled'); },
  getItem() { throw new Error('storage disabled'); },
  key() { throw new Error('storage disabled'); },
  removeItem() { throw new Error('storage disabled'); },
  setItem() { throw new Error('storage disabled'); },
};
