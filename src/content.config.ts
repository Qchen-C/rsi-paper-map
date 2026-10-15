import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import {
  EVIDENCE_STATUSES,
  PRESENTATIONS,
  REQUIRED_FULL_TEXT_SECTIONS,
  paperSchema,
  readingPathSchema,
} from './lib/content-schema';

export { paperSchema, readingPathSchema };

const sourceSchema = z.object({
  kind: z.enum(['openreview', 'arxiv', 'code', 'project']),
  url: z.string().url(),
});

export const astroPaperSchema = z.object({
  title: z.string().min(1),
  titleZh: z.string().min(1),
  authors: z.array(z.string().min(1)).min(1),
  presentation: z.enum(PRESENTATIONS),
  year: z.literal(2026),
  sourceIndex: z.number().int().min(1).max(110),
  sourcePage: z.literal('https://recursive-workshop.github.io/papers.html'),
  sources: z.array(sourceSchema).min(1),
  summaryEn: z.string(),
  summaryZh: z.string(),
  problemEn: z.string(),
  problemZh: z.string(),
  methodEn: z.string(),
  methodZh: z.string(),
  resultsEn: z.string(),
  resultsZh: z.string(),
  limitationsEn: z.string(),
  limitationsZh: z.string(),
  whyReadEn: z.string(),
  whyReadZh: z.string(),
  themes: z.array(z.string().min(1)).min(1),
  keywords: z.array(z.string().min(1)).min(1),
  difficulty: z.enum(['entry', 'intermediate', 'advanced']),
  prerequisites: z.array(z.string().min(1)),
  readingPaths: z.array(z.object({ id: z.string().min(1), order: z.number().int().positive() })),
  relatedPapers: z.array(z.string().min(1)),
  readNext: z.array(z.string().min(1)),
  featured: z.boolean(),
  feedbackSource: z.string(),
  updatedObject: z.string(),
  updateMechanism: z.string(),
  successSignal: z.string(),
  loopSummaryEn: z.string(),
  loopSummaryZh: z.string(),
  evidenceStatus: z.enum(EVIDENCE_STATUSES),
  checkedSections: z.array(z.enum(REQUIRED_FULL_TEXT_SECTIONS)),
  verifiedAt: z.coerce.date(),
  evidenceSources: z.array(z.string().url()).min(1),
}).superRefine((data, context) => {
  if (data.evidenceStatus === 'metadata') return;
  const bilingualFields = [
    'summaryEn', 'summaryZh', 'problemEn', 'problemZh', 'methodEn', 'methodZh',
    'resultsEn', 'resultsZh', 'limitationsEn', 'limitationsZh', 'whyReadEn',
    'whyReadZh', 'feedbackSource', 'updatedObject', 'updateMechanism',
    'successSignal', 'loopSummaryEn', 'loopSummaryZh',
  ] as const;
  for (const field of bilingualFields) {
    if (!data[field].trim()) {
      context.addIssue({ code: 'custom', path: [field], message: `${field} is required for checked content` });
    }
  }
  if (data.evidenceStatus === 'full-text-checked') {
    for (const section of REQUIRED_FULL_TEXT_SECTIONS) {
      if (!data.checkedSections.includes(section)) {
        context.addIssue({ code: 'custom', path: ['checkedSections'], message: `full-text-checked requires ${section}` });
      }
    }
  }
});

export const astroReadingPathSchema = z.object({
  id: z.string().min(1),
  titleEn: z.string().min(1),
  titleZh: z.string().min(1),
  descriptionEn: z.string().min(1),
  descriptionZh: z.string().min(1),
  paperIds: z.array(z.string().min(1)).min(1),
});

const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: astroPaperSchema,
});

const readingPaths = defineCollection({
  loader: file('./src/data/reading-paths.json'),
  schema: astroReadingPathSchema,
});

export const collections = { papers, readingPaths };
