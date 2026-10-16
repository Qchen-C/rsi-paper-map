import type { Difficulty, EvidenceStatus, PaperIndexItem, Presentation } from './papers.ts';

export interface PaperFilters {
  query?: string;
  themes?: string[];
  evidence?: EvidenceStatus[];
  difficulty?: Difficulty[];
  presentations?: Presentation[];
  readingPaths?: string[];
}

export type PaperSortOrder = 'recommended' | 'title' | 'presentation' | 'verified';

export function normalizeSearchText(value: string): string {
  return value
    .normalize('NFKC')
    .toLocaleLowerCase('en')
    .replace(/[\p{P}\p{S}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchesAny(selected: readonly string[] | undefined, actual: readonly string[]): boolean {
  return !selected?.length || selected.some((value) => actual.includes(value));
}

export function filterPapers(papers: readonly PaperIndexItem[], filters: PaperFilters): PaperIndexItem[] {
  const queryTokens = normalizeSearchText(filters.query ?? '').split(' ').filter(Boolean);

  return papers.filter((paper) => {
    const haystack = normalizeSearchText([
      paper.title,
      paper.titleZh,
      ...paper.authors,
      ...paper.keywords,
      paper.summaryEn,
      paper.summaryZh,
    ].join(' '));

    return queryTokens.every((token) => haystack.includes(token))
      && matchesAny(filters.themes, paper.themes)
      && matchesAny(filters.evidence, [paper.evidenceStatus])
      && matchesAny(filters.difficulty, [paper.difficulty])
      && matchesAny(filters.presentations, [paper.presentation])
      && matchesAny(filters.readingPaths, paper.readingPathIds);
  });
}

const PRESENTATION_RANK: Record<Presentation, number> = {
  oral: 0,
  spotlight: 1,
  poster: 2,
  short: 3,
};

export function sortPapers(papers: readonly PaperIndexItem[], order: PaperSortOrder): PaperIndexItem[] {
  const collator = new Intl.Collator('en', { sensitivity: 'base' });
  return [...papers].sort((left, right) => {
    let comparison = 0;
    if (order === 'recommended') comparison = Number(right.featured) - Number(left.featured);
    if (order === 'title') comparison = collator.compare(left.title, right.title);
    if (order === 'presentation') comparison = PRESENTATION_RANK[left.presentation] - PRESENTATION_RANK[right.presentation];
    if (order === 'verified') comparison = Date.parse(right.verifiedAt) - Date.parse(left.verifiedAt);
    return comparison || left.sourceIndex - right.sourceIndex;
  });
}
