export const PRESENTATIONS = ['oral', 'spotlight', 'poster', 'short'] as const;
export const EVIDENCE_STATUSES = [
  'metadata',
  'abstract-checked',
  'full-text-checked',
] as const;
export const REQUIRED_FULL_TEXT_SECTIONS = [
  'introduction',
  'method',
  'experiments',
  'conclusion',
] as const;

const SOURCE_KINDS = ['openreview', 'arxiv', 'code', 'project'] as const;
const DIFFICULTIES = ['entry', 'intermediate', 'advanced'] as const;
const SOURCE_PAGE = 'https://recursive-workshop.github.io/papers.html';
const CONTENT_FIELDS = [
  'summaryEn', 'summaryZh', 'problemEn', 'problemZh',
  'methodEn', 'methodZh', 'resultsEn', 'resultsZh',
  'limitationsEn', 'limitationsZh', 'whyReadEn', 'whyReadZh',
  'feedbackSource', 'updatedObject', 'updateMechanism', 'successSignal',
  'loopSummaryEn', 'loopSummaryZh',
] as const;

export interface ValidationIssue {
  path: string;
  message: string;
}

export type ParseResult<T> =
  | { success: true; data: T }
  | { success: false; error: { issues: ValidationIssue[] } };

export interface PaperData {
  [key: string]: unknown;
}

export interface ReadingPathData {
  id: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  paperIds: readonly string[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isUrl(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

function push(issues: ValidationIssue[], path: string, valid: boolean, message: string): void {
  if (!valid) issues.push({ path, message });
}

function parsePaper(input: unknown): ParseResult<PaperData> {
  if (!isRecord(input)) {
    return { success: false, error: { issues: [{ path: '', message: 'paper must be an object' }] } };
  }

  const issues: ValidationIssue[] = [];
  push(issues, 'title', isNonEmptyString(input.title), 'English title is required');
  push(issues, 'titleZh', isNonEmptyString(input.titleZh), 'Chinese title is required');
  push(issues, 'authors', Array.isArray(input.authors) && input.authors.length > 0 && input.authors.every(isNonEmptyString), 'authors must contain at least one name');
  push(issues, 'presentation', PRESENTATIONS.includes(input.presentation as never), 'presentation is invalid');
  push(issues, 'year', input.year === 2026, 'year must be 2026');
  push(issues, 'sourceIndex', Number.isInteger(input.sourceIndex) && Number(input.sourceIndex) >= 1 && Number(input.sourceIndex) <= 110, 'sourceIndex must be between 1 and 110');
  push(issues, 'sourcePage', input.sourcePage === SOURCE_PAGE, 'sourcePage must be the workshop page');

  const sourcesValid = Array.isArray(input.sources) && input.sources.length > 0 && input.sources.every((source) =>
    isRecord(source) && SOURCE_KINDS.includes(source.kind as never) && isUrl(source.url));
  push(issues, 'sources', sourcesValid, 'at least one valid primary source is required');

  push(issues, 'themes', Array.isArray(input.themes) && input.themes.length > 0 && input.themes.every(isNonEmptyString), 'at least one theme is required');
  push(issues, 'keywords', Array.isArray(input.keywords) && input.keywords.length > 0 && input.keywords.every(isNonEmptyString), 'at least one keyword is required');
  push(issues, 'difficulty', DIFFICULTIES.includes(input.difficulty as never), 'difficulty is invalid');
  push(issues, 'prerequisites', Array.isArray(input.prerequisites) && input.prerequisites.every(isNonEmptyString), 'prerequisites must be strings');

  const pathsValid = Array.isArray(input.readingPaths) && input.readingPaths.every((path) =>
    isRecord(path) && isNonEmptyString(path.id) && Number.isInteger(path.order) && Number(path.order) > 0);
  push(issues, 'readingPaths', pathsValid, 'reading path entries require an id and positive order');
  push(issues, 'relatedPapers', Array.isArray(input.relatedPapers) && input.relatedPapers.every(isNonEmptyString), 'relatedPapers must be strings');
  push(issues, 'readNext', Array.isArray(input.readNext) && input.readNext.every(isNonEmptyString), 'readNext must be strings');
  push(issues, 'featured', typeof input.featured === 'boolean', 'featured must be boolean');

  const evidenceValid = EVIDENCE_STATUSES.includes(input.evidenceStatus as never);
  push(issues, 'evidenceStatus', evidenceValid, 'evidenceStatus is invalid');
  const sectionsValid = Array.isArray(input.checkedSections) && input.checkedSections.every((section) =>
    REQUIRED_FULL_TEXT_SECTIONS.includes(section as never));
  push(issues, 'checkedSections', sectionsValid, 'checkedSections contains an unsupported section');
  push(issues, 'verifiedAt', typeof input.verifiedAt === 'string' || input.verifiedAt instanceof Date, 'verifiedAt is required');
  push(issues, 'evidenceSources', Array.isArray(input.evidenceSources) && input.evidenceSources.length > 0 && input.evidenceSources.every(isUrl), 'evidenceSources must contain a valid URL');

  if (input.evidenceStatus !== 'metadata') {
    for (const field of CONTENT_FIELDS) {
      push(issues, field, isNonEmptyString(input[field]), `${field} is required for checked content`);
    }
  }

  if (input.evidenceStatus === 'full-text-checked') {
    const checked = new Set(Array.isArray(input.checkedSections) ? input.checkedSections : []);
    for (const section of REQUIRED_FULL_TEXT_SECTIONS) {
      push(issues, 'checkedSections', checked.has(section), `full-text-checked requires ${section}`);
    }
  }

  return issues.length > 0
    ? { success: false, error: { issues } }
    : { success: true, data: input };
}

function parseReadingPath(input: unknown): ParseResult<ReadingPathData> {
  if (!isRecord(input)) {
    return { success: false, error: { issues: [{ path: '', message: 'reading path must be an object' }] } };
  }
  const issues: ValidationIssue[] = [];
  for (const field of ['id', 'titleEn', 'titleZh', 'descriptionEn', 'descriptionZh'] as const) {
    push(issues, field, isNonEmptyString(input[field]), `${field} is required`);
  }
  push(issues, 'paperIds', Array.isArray(input.paperIds) && input.paperIds.length > 0 && input.paperIds.every(isNonEmptyString), 'paperIds must contain at least one paper');
  return issues.length > 0
    ? { success: false, error: { issues } }
    : { success: true, data: input as unknown as ReadingPathData };
}

export const paperSchema = { safeParse: parsePaper } as const;
export const readingPathSchema = { safeParse: parseReadingPath } as const;
