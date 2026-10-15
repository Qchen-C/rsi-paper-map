import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { checkSource } from '../../scripts/check-links.mjs';
import { validateCorpus } from '../../scripts/validate-corpus.mjs';
import { validPaper } from '../fixtures/valid-paper.ts';

function entry(id: string, overrides: Record<string, unknown> = {}) {
  return {
    id,
    data: structuredClone({ ...validPaper, ...overrides }),
  };
}

describe('validateCorpus', () => {
  it('reports duplicate ids and titles with actionable fields', () => {
    const issues = validateCorpus([entry('agent0'), entry('agent0')], {
      expectedCount: 2,
      allowPartial: true,
    });
    assert.ok(issues.some((issue) => issue.code === 'duplicate-id' && issue.field === 'id'));
    assert.ok(issues.some((issue) => issue.code === 'duplicate-title' && issue.field === 'title'));
  });

  it('reports missing bilingual checked content', () => {
    const issues = validateCorpus([entry('agent0', { summaryZh: '' })], {
      allowPartial: true,
    });
    assert.ok(issues.some((issue) => issue.code === 'schema' && issue.field === 'summaryZh'));
  });

  it('reports unknown relationships and duplicate route positions', () => {
    const issues = validateCorpus([
      entry('agent0', { relatedPapers: ['missing-paper'] }),
      entry('paper-b', { title: 'Paper B' }),
    ], { allowPartial: true });
    assert.ok(issues.some((issue) => issue.code === 'unknown-paper' && issue.paperId === 'agent0'));
    assert.ok(issues.some((issue) => issue.code === 'duplicate-route-order' && issue.paperId === 'paper-b'));
  });

  it('reports a wrong presentation distribution in release mode', () => {
    const issues = validateCorpus([
      entry('agent0'),
      entry('paper-b', { title: 'Paper B', sourceIndex: 2 }),
    ], {
      expectedCount: 2,
      expectedDistribution: { oral: 1, spotlight: 1, poster: 0, short: 0 },
    });
    assert.ok(issues.some((issue) => issue.code === 'presentation-distribution'));
  });
});

describe('checkSource', () => {
  it('keeps an unreachable source URL in the report', async () => {
    const fakeFetch = async () => new Response('', { status: 503 });
    const report = await checkSource('https://invalid.example/paper', fakeFetch);
    assert.equal(report.status, 'unreachable');
    assert.equal(report.url, 'https://invalid.example/paper');
    assert.equal(report.httpStatus, 503);
    assert.match(report.checkedAt, /^\d{4}-\d{2}-\d{2}T/);
  });
});
