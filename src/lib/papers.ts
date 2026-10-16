export type EvidenceStatus = 'metadata' | 'abstract-checked' | 'full-text-checked';
export type Difficulty = 'entry' | 'intermediate' | 'advanced';
export type Presentation = 'oral' | 'spotlight' | 'poster' | 'short';

export interface PaperIndexItem {
  id: string;
  title: string;
  titleZh: string;
  authors: string[];
  keywords: string[];
  summaryEn: string;
  summaryZh: string;
  themes: string[];
  evidenceStatus: EvidenceStatus;
  difficulty: Difficulty;
  presentation: Presentation;
  sourceIndex: number;
  verifiedAt: string;
  readingPathIds: string[];
  featured: boolean;
}

interface ContentEntryLike {
  id: string;
  data: Record<string, unknown>;
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

export function toPaperIndexItem(entry: ContentEntryLike): PaperIndexItem {
  const data = entry.data;
  const verifiedAt = data.verifiedAt instanceof Date
    ? data.verifiedAt.toISOString().slice(0, 10)
    : String(data.verifiedAt ?? '');
  const readingPathIds = Array.isArray(data.readingPaths)
    ? data.readingPaths.flatMap((path) => (
        path && typeof path === 'object' && 'id' in path && typeof path.id === 'string'
          ? [path.id]
          : []
      ))
    : [];

  return {
    id: entry.id,
    title: String(data.title ?? ''),
    titleZh: String(data.titleZh ?? ''),
    authors: stringArray(data.authors),
    keywords: stringArray(data.keywords),
    summaryEn: String(data.summaryEn ?? ''),
    summaryZh: String(data.summaryZh ?? ''),
    themes: stringArray(data.themes),
    evidenceStatus: data.evidenceStatus as EvidenceStatus,
    difficulty: data.difficulty as Difficulty,
    presentation: data.presentation as Presentation,
    sourceIndex: Number(data.sourceIndex),
    verifiedAt,
    readingPathIds,
    featured: Boolean(data.featured),
  };
}
