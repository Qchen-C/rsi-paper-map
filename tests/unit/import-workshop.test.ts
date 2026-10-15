import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  parseWorkshopPapers,
  validateDistribution,
} from '../../scripts/import-workshop.mjs';

const fixture = readFileSync(
  new URL('../fixtures/workshop-papers.html', import.meta.url),
  'utf8',
);

describe('parseWorkshopPapers', () => {
  it('preserves titles and assigns presentation from section headings', () => {
    assert.deepEqual(parseWorkshopPapers(fixture), [
      {
        sourceIndex: 1,
        title: 'Agent0: Unleashing Self-Evolving Agents from Zero Data via Tool-Integrated Reasoning',
        presentation: 'oral',
        openreviewUrl: 'https://openreview.net/forum?id=hYYeOl58xi',
      },
      {
        sourceIndex: 2,
        title: 'Language Self-Play For Data-Free Training',
        presentation: 'spotlight',
        openreviewUrl: 'https://openreview.net/forum?id=uB8YQHNsh6',
      },
      {
        sourceIndex: 3,
        title: 'Self-Improving Clinical Reasoning via Textual Gradients',
        presentation: 'poster',
        openreviewUrl: 'https://openreview.net/forum?id=VOa0lDJ5Ui',
      },
      {
        sourceIndex: 4,
        title: 'Real-Time Procedural Learning From Experience for AI Agents',
        presentation: 'short',
        openreviewUrl: 'https://openreview.net/forum?id=MKG4BaSieN',
      },
    ]);
  });

  it('counts the release distribution without depending on the network', () => {
    const papers = [
      ...Array.from({ length: 4 }, () => ({ presentation: 'oral' })),
      ...Array.from({ length: 21 }, () => ({ presentation: 'spotlight' })),
      ...Array.from({ length: 75 }, () => ({ presentation: 'poster' })),
      ...Array.from({ length: 10 }, () => ({ presentation: 'short' })),
    ];
    assert.deepEqual(validateDistribution(papers), {
      oral: 4,
      spotlight: 21,
      poster: 75,
      short: 10,
    });
  });
});
