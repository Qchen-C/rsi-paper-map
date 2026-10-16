import { readdir, readFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { paperSchema } from '../src/lib/content-schema.ts';
import { assertReleaseManifest, validateDistribution } from './import-workshop.mjs';

const RELEASE_DISTRIBUTION = { oral: 4, spotlight: 21, poster: 75, short: 10 };

function issue(code, paperId, field, message) {
  return { code, paperId, field, message };
}

export function validateCorpus(entries, options = {}) {
  const issues = [];
  const expectedCount = options.expectedCount ?? (options.allowPartial ? undefined : 110);
  const expectedDistribution = options.expectedDistribution ?? (options.allowPartial ? undefined : RELEASE_DISTRIBUTION);

  if (expectedCount !== undefined && entries.length !== expectedCount) {
    issues.push(issue('paper-count', 'corpus', 'count', `Expected ${expectedCount} papers, received ${entries.length}`));
  }

  const seenIds = new Set();
  const seenTitles = new Set();
  const seenSourceIndices = new Set();
  const routePositions = new Map();
  const allIds = new Set(entries.map((entry) => entry.id));

  for (const entry of entries) {
    const paperId = entry.id ?? 'unknown';
    if (seenIds.has(paperId)) issues.push(issue('duplicate-id', paperId, 'id', `Duplicate paper id: ${paperId}`));
    seenIds.add(paperId);

    const title = entry.data?.title;
    if (typeof title === 'string' && seenTitles.has(title)) issues.push(issue('duplicate-title', paperId, 'title', `Duplicate English title: ${title}`));
    if (typeof title === 'string') seenTitles.add(title);

    const sourceIndex = entry.data?.sourceIndex;
    if (seenSourceIndices.has(sourceIndex)) issues.push(issue('duplicate-source-index', paperId, 'sourceIndex', `Duplicate source index: ${sourceIndex}`));
    seenSourceIndices.add(sourceIndex);

    const parsed = paperSchema.safeParse(entry.data);
    if (!parsed.success) {
      for (const schemaIssue of parsed.error.issues) {
        issues.push(issue('schema', paperId, schemaIssue.path, schemaIssue.message));
      }
    }

    for (const relationField of ['relatedPapers', 'readNext']) {
      const related = Array.isArray(entry.data?.[relationField]) ? entry.data[relationField] : [];
      for (const relatedId of related) {
        if (!allIds.has(relatedId)) {
          issues.push(issue('unknown-paper', paperId, relationField, `Unknown paper id: ${relatedId}`));
        }
      }
    }

    const paths = Array.isArray(entry.data?.readingPaths) ? entry.data.readingPaths : [];
    for (const path of paths) {
      if (!path || typeof path !== 'object') continue;
      const key = `${path.id}:${path.order}`;
      const previous = routePositions.get(key);
      if (previous) {
        issues.push(issue('duplicate-route-order', paperId, 'readingPaths', `Route ${path.id} order ${path.order} is already used by ${previous}`));
      } else {
        routePositions.set(key, paperId);
      }
    }
  }

  if (expectedDistribution) {
    const actual = validateDistribution(entries.map((entry) => entry.data ?? {}));
    const mismatch = Object.keys(expectedDistribution).some((key) => actual[key] !== expectedDistribution[key]);
    if (mismatch) {
      issues.push(issue(
        'presentation-distribution',
        'corpus',
        'presentation',
        `Expected ${JSON.stringify(expectedDistribution)}, received ${JSON.stringify(actual)}`,
      ));
    }
  }

  if (options.requiredStatus && Array.isArray(options.requiredPaperIds)) {
    const entriesById = new Map(entries.map((entry) => [entry.id, entry]));
    for (const requiredId of options.requiredPaperIds) {
      const requiredEntry = entriesById.get(requiredId);
      if (!requiredEntry) {
        issues.push(issue('required-paper-missing', requiredId, 'id', `Required paper is missing: ${requiredId}`));
      } else if (requiredEntry.data?.evidenceStatus !== options.requiredStatus) {
        issues.push(issue(
          'evidence-status',
          requiredId,
          'evidenceStatus',
          `Expected ${options.requiredStatus}, received ${requiredEntry.data?.evidenceStatus ?? 'missing'}`,
        ));
      }
    }
  }

  return issues;
}

export function parseJsonFrontmatter(markdown, fileName = 'paper.md') {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) throw new Error(`${fileName}: missing frontmatter`);
  const data = {};
  for (const [lineIndex, line] of match[1].split(/\r?\n/).entries()) {
    if (!line.trim()) continue;
    const separator = line.indexOf(':');
    if (separator < 1) throw new Error(`${fileName}:${lineIndex + 2}: expected key: JSON-value`);
    const key = line.slice(0, separator).trim();
    const rawValue = line.slice(separator + 1).trim();
    try {
      data[key] = JSON.parse(rawValue);
    } catch (error) {
      throw new Error(`${fileName}:${lineIndex + 2}: ${error.message}`);
    }
  }
  return data;
}

export async function loadPaperEntries(directory = 'src/content/papers') {
  const absoluteDirectory = resolve(directory);
  let files;
  try {
    files = (await readdir(absoluteDirectory)).filter((file) => file.endsWith('.md')).sort();
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
  return Promise.all(files.map(async (file) => ({
    id: basename(file, '.md'),
    data: parseJsonFrontmatter(await readFile(join(absoluteDirectory, file), 'utf8'), file),
  })));
}

function hasFlag(args, flag) {
  return args.includes(flag);
}

export function parseCliOptions(args) {
  const options = { allowPartial: hasFlag(args, '--allow-partial') };
  const statusIndex = args.indexOf('--require-status');
  if (statusIndex >= 0) {
    const requiredStatus = args[statusIndex + 1];
    if (!requiredStatus || requiredStatus.startsWith('--')) {
      throw new Error('--require-status needs a status followed by one or more paper ids');
    }
    const requiredPaperIds = [];
    for (const value of args.slice(statusIndex + 2)) {
      if (value.startsWith('--')) break;
      requiredPaperIds.push(value);
    }
    if (requiredPaperIds.length === 0) {
      throw new Error('--require-status needs at least one paper id');
    }
    options.requiredStatus = requiredStatus;
    options.requiredPaperIds = requiredPaperIds;
  }
  return options;
}

async function runCli() {
  const args = process.argv.slice(2);
  const options = parseCliOptions(args);
  const manifest = JSON.parse(await readFile(resolve('src/data/workshop-papers.json'), 'utf8'));
  assertReleaseManifest(manifest);
  const entries = await loadPaperEntries();
  const issues = validateCorpus(entries, options);
  if (issues.length > 0) {
    for (const current of issues) console.error(`${current.code} [${current.paperId}.${current.field}]: ${current.message}`);
    process.exitCode = 1;
    return;
  }
  console.log(`${entries.length} paper(s) validated${options.allowPartial ? ' (partial corpus allowed)' : ''}`);
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === pathToFileURL(currentFile).href) {
  runCli().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
