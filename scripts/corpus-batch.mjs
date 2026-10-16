import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const REQUIRED_CHECKS = ['introduction', 'method', 'experiments', 'conclusion'];
const SEED_IDS = new Map([
  [1, 'agent0'],
  [2, 'contextual-drag'],
  [3, 'agentic-memory-designs'],
  [4, 'posttrainbench'],
]);

function positiveInteger(value, label) {
  if (!Number.isInteger(value) || value < 1) throw new Error(`${label} must be a positive integer`);
  return value;
}

export function slugPaper(paper) {
  return SEED_IDS.get(paper.sourceIndex) ?? paper.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function buildCorpusBatches(manifest, batchSize = 10) {
  positiveInteger(batchSize, 'batch size');
  const ordered = [...manifest].sort((left, right) => left.sourceIndex - right.sourceIndex);
  const batches = [];
  for (let offset = 0; offset < ordered.length; offset += batchSize) {
    batches.push({
      batch: batches.length + 1,
      requiredChecks: [...REQUIRED_CHECKS],
      papers: ordered.slice(offset, offset + batchSize).map((paper) => ({
        ...paper,
        id: slugPaper(paper),
      })),
    });
  }
  return batches;
}

export function selectCorpusBatch(manifest, batchNumber, batchSize = 10) {
  positiveInteger(batchNumber, 'batch number');
  const batches = buildCorpusBatches(manifest, batchSize);
  const selected = batches[batchNumber - 1];
  if (!selected) throw new Error(`batch ${batchNumber} does not exist`);
  return selected;
}

function parseNumberArg(args, name, fallback) {
  const index = args.indexOf(name);
  if (index < 0) return fallback;
  const value = Number(args[index + 1]);
  return positiveInteger(value, name);
}

async function runCli() {
  const args = process.argv.slice(2);
  const manifest = JSON.parse(await readFile(resolve('src/data/workshop-papers.json'), 'utf8'));
  const batchNumber = parseNumberArg(args, '--batch', 1);
  const batchSize = parseNumberArg(args, '--size', 10);
  console.log(JSON.stringify(selectCorpusBatch(manifest, batchNumber, batchSize), null, 2));
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === pathToFileURL(currentFile).href) {
  runCli().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
