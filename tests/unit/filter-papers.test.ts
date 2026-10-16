import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { filterPapers, sortPapers } from '../../src/lib/filter-papers.ts';
import type { PaperIndexItem } from '../../src/lib/papers.ts';

const papers: PaperIndexItem[] = [
  {
    id: 'agent0',
    title: 'Agent0: Unleashing Self-Evolving Agents',
    titleZh: 'Agent0：释放自演化代理',
    authors: ['Alice'],
    keywords: ['self-play', 'tools'],
    summaryEn: 'Agents improve through generated tasks.',
    summaryZh: '代理通过生成任务进行改进。',
    themes: ['agents', 'self-play'],
    evidenceStatus: 'full-text-checked',
    difficulty: 'intermediate',
    presentation: 'oral',
    sourceIndex: 1,
    verifiedAt: '2026-10-15',
    readingPathIds: ['entry'],
    featured: true,
  },
  {
    id: 'agentic-memory',
    title: 'Learning to Continually Learn via Meta-learning Agentic Memory Designs',
    titleZh: '通过元学习代理记忆设计实现持续学习',
    authors: ['Bob'],
    keywords: ['memory', 'continual learning'],
    summaryEn: 'Meta-learning searches for memory designs.',
    summaryZh: '元学习搜索能够持续学习的记忆设计。',
    themes: ['memory'],
    evidenceStatus: 'full-text-checked',
    difficulty: 'advanced',
    presentation: 'oral',
    sourceIndex: 3,
    verifiedAt: '2026-10-16',
    readingPathIds: ['entry', 'memory'],
    featured: true,
  },
  {
    id: 'simplemem',
    title: 'SimpleMem: Efficient Lifelong Memory for LLM Agents',
    titleZh: 'SimpleMem：面向 LLM 代理的高效终身记忆',
    authors: ['Carol'],
    keywords: ['memory'],
    summaryEn: 'A compact agent memory architecture.',
    summaryZh: '一种紧凑的代理记忆架构。',
    themes: ['memory'],
    evidenceStatus: 'abstract-checked',
    difficulty: 'entry',
    presentation: 'spotlight',
    sourceIndex: 6,
    verifiedAt: '2026-10-14',
    readingPathIds: ['memory'],
    featured: false,
  },
];

describe('filterPapers', () => {
  it('searches English and Chinese text with case and punctuation normalization', () => {
    assert.deepEqual(filterPapers(papers, { query: 'AGENT0' }).map((paper) => paper.id), ['agent0']);
    assert.deepEqual(filterPapers(papers, { query: '持续 学习' }).map((paper) => paper.id), ['agentic-memory']);
    assert.deepEqual(filterPapers(papers, { query: 'SELF—PLAY' }).map((paper) => paper.id), ['agent0']);
  });

  it('uses OR within groups and AND between groups', () => {
    assert.deepEqual(
      filterPapers(papers, {
        themes: ['memory', 'agents'],
        evidence: ['full-text-checked'],
        difficulty: ['advanced'],
      }).map((paper) => paper.id),
      ['agentic-memory'],
    );
  });

  it('restores the full collection when filters are empty', () => {
    assert.equal(filterPapers(papers, {}).length, papers.length);
  });
});

describe('sortPapers', () => {
  it('uses sourceIndex as a stable tie breaker', () => {
    assert.deepEqual(sortPapers([...papers].reverse(), 'presentation').map((paper) => paper.id), [
      'agent0',
      'agentic-memory',
      'simplemem',
    ]);
    assert.deepEqual(sortPapers(papers, 'verified').map((paper) => paper.id), [
      'agentic-memory',
      'agent0',
      'simplemem',
    ]);
  });
});
