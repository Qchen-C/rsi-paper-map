import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { paperSchema, readingPathSchema } from '../../src/lib/content-schema.ts';
import { validPaper, validReadingPath } from '../fixtures/valid-paper.ts';

describe('paperSchema', () => {
  it('accepts a complete bilingual paper', () => {
    assert.equal(paperSchema.safeParse(validPaper).success, true);
  });

  it('rejects a full-text claim without all required checked sections', () => {
    const result = paperSchema.safeParse({
      ...validPaper,
      checkedSections: ['introduction'],
    });
    assert.equal(result.success, false);
  });

  it('rejects a checked paper with a missing Chinese summary', () => {
    const result = paperSchema.safeParse({ ...validPaper, summaryZh: '' });
    assert.equal(result.success, false);
  });
});

describe('readingPathSchema', () => {
  it('requires bilingual labels and at least one paper', () => {
    assert.equal(readingPathSchema.safeParse(validReadingPath).success, true);
    assert.equal(
      readingPathSchema.safeParse({ ...validReadingPath, paperIds: [] }).success,
      false,
    );
  });
});
