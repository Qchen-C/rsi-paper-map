import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const PRESENTATION_BY_HEADING = new Map([
  ['oral', 'oral'],
  ['spotlight', 'spotlight'],
  ['poster', 'poster'],
  ['short paper', 'short'],
  ['short', 'short'],
]);

function decodeHtml(value) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/\s+/g, ' ')
    .trim();
}

function presentationFromHeading(rawHeading) {
  const heading = decodeHtml(rawHeading).toLowerCase();
  for (const [label, presentation] of PRESENTATION_BY_HEADING) {
    if (heading === label || heading.startsWith(`${label} `)) return presentation;
  }
  return null;
}

export function parseWorkshopPapers(html) {
  const papers = [];
  let presentation = null;
  const tokenPattern = /<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>|<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;

  for (const match of html.matchAll(tokenPattern)) {
    if (match[1] !== undefined) {
      const nextPresentation = presentationFromHeading(match[1]);
      if (nextPresentation) presentation = nextPresentation;
      continue;
    }

    const href = decodeHtml(match[2] ?? '');
    if (!presentation || !/^https:\/\/openreview\.net\/(forum|pdf)\?id=/i.test(href)) continue;
    const title = decodeHtml(match[3] ?? '').replace(/^#\d+\s*/, '');
    if (!title) continue;
    papers.push({
      sourceIndex: papers.length + 1,
      title,
      presentation,
      openreviewUrl: href.replace('/pdf?', '/forum?'),
    });
  }

  return papers;
}

export function validateDistribution(papers) {
  const counts = { oral: 0, spotlight: 0, poster: 0, short: 0 };
  for (const paper of papers) {
    if (Object.hasOwn(counts, paper.presentation)) counts[paper.presentation] += 1;
  }
  return counts;
}

export function assertReleaseManifest(papers) {
  const expected = { oral: 4, spotlight: 21, poster: 75, short: 10 };
  const actual = validateDistribution(papers);
  if (papers.length !== 110 || JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`Expected 110 papers (4/21/75/10), received ${papers.length} (${actual.oral}/${actual.spotlight}/${actual.poster}/${actual.short})`);
  }
  if (new Set(papers.map((paper) => paper.title)).size !== papers.length) {
    throw new Error('Paper titles must be unique');
  }
  if (new Set(papers.map((paper) => paper.openreviewUrl)).size !== papers.length) {
    throw new Error('OpenReview URLs must be unique');
  }
}

function parseArgs(args) {
  const options = {};
  for (let index = 0; index < args.length; index += 2) {
    const key = args[index];
    const value = args[index + 1];
    if (!key?.startsWith('--') || !value) throw new Error(`Invalid argument near ${key ?? 'end of command'}`);
    options[key.slice(2)] = value;
  }
  return options;
}

async function runCli() {
  const options = parseArgs(process.argv.slice(2));
  if (!options.out || (!options.url && !options.html) || (options.url && options.html)) {
    throw new Error('Usage: node scripts/import-workshop.mjs (--url URL | --html FILE) --out FILE');
  }
  const html = options.url
    ? await fetch(options.url).then((response) => {
        if (!response.ok) throw new Error(`Workshop page returned ${response.status}`);
        return response.text();
      })
    : await readFile(resolve(options.html), 'utf8');
  const papers = parseWorkshopPapers(html);
  assertReleaseManifest(papers);
  const out = resolve(options.out);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, `${JSON.stringify(papers, null, 2)}\n`, 'utf8');
  const counts = validateDistribution(papers);
  console.log(`Imported ${papers.length} papers (${counts.oral} oral, ${counts.spotlight} spotlight, ${counts.poster} poster, ${counts.short} short)`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  runCli().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
