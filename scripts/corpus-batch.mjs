import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const REQUIRED_CHECKS = ['introduction', 'method', 'experiments', 'conclusion'];
const SEED_IDS = new Map([
  [1, 'agent0'],
  [2, 'contextual-drag'],
  [3, 'agentic-memory-designs'],
  [4, 'posttrainbench'],
  [5, 'language-self-play'],
  [6, 'simplemem'],
  [7, 'execution-grounded-ai-research'],
  [8, 'parametric-skill-transfer'],
  [9, 'scaling-law-discovery'],
  [10, 'world-action-verifier'],
  [11, 'tiny-autoregressive-recursive-models'],
  [12, 'growing-to-looping'],
  [13, 'lang-pinn'],
  [14, 'evopresent'],
  [15, 'ace-code-evolution'],
  [16, 'discovery-to-application-loop'],
  [17, 'causalevolve'],
  [18, 'pld-residual-rl'],
  [19, 'vlaw'],
  [20, 'test-time-self-distillation'],
  [21, 'self-evolving-rubrics'],
  [22, 'anchored-self-play-code-repair'],
  [23, 'interestingness-compression-progress'],
  [24, 'gasp'],
  [25, 'adaptive-meta-curriculum'],
  [26, 'automedprompt-textual-gradients'],
  [27, 'fedagent'],
  [28, 'agent0-vl'],
  [29, 'omega'],
  [30, 'self-directed-robot-learning'],
  [31, 'reasoning-decision-pivots'],
  [32, 'rftf-temporal-feedback'],
  [33, 'verltool'],
  [34, 'tangramsr'],
  [35, 'skillrl'],
  [36, 'prompt-translation'],
  [37, 'verified-synthetic-data'],
  [38, 'llm-fe'],
  [39, 'seek-sql'],
  [40, 'simple-code-evolution-baselines'],
  [41, 'munkey'],
  [42, 'self-criteach'],
  [43, 'inspo'],
  [44, 'textbo'],
  [45, 'polaris'],
  [46, 'shape-of-thought'],
  [47, 'reasoning-as-gradient'],
  [48, 'soar'],
  [49, 'evaluating-agents-md'],
  [50, 'compute-as-teacher'],
  [51, 'power-system-evolution'],
  [52, 'derl'],
  [53, 'self-play-adversarial-imitation'],
  [54, 'unrolled-policy-iteration'],
  [55, 'reasoning-cache'],
  [56, 'esdae'],
  [57, 'actor-curator'],
  [58, 'code-agent-reward-hacking'],
  [59, 'attwarp'],
  [60, 'test-time-curriculum-curation'],
  [61, 'solution-verifier-gain'],
  [62, 'fairpro'],
  [63, 'depth-grown-models'],
  [64, 'cot-seg'],
  [65, 'alphaapollo'],
  [66, 'dmlr'],
  [67, 'noisy-offline-rl'],
  [68, 'autoharness'],
  [69, 'one-step-video-depth'],
  [70, 'lot-reasoning-patterns'],
  [71, 'ace-context-engineering'],
  [72, 'self-evolverec'],
  [73, 'learning-to-evolve'],
  [74, 'chartir'],
  [75, 'protein-expertise-evolution'],
  [76, 'task-centric-self-improvement'],
  [77, 'adaptive-decoding-policy'],
  [78, 'dnpo'],
  [79, 'frontend-vision-refinement'],
  [80, 'mappa'],
  [81, 'residual-off-policy-rl'],
  [82, 'sage'],
  [83, 'soft-mellowmax-planning'],
  [84, 'log-augmented-generation'],
  [85, 'self-improving-vlm-judge'],
  [86, 'duel-evolve'],
  [87, 'mimicagent'],
  [88, 'feedback-descent'],
  [89, 'circuitbuilder'],
  [90, 'generative-recursive-reasoning'],
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

export function buildCorpusReview(manifest, batchSize = 10, generatedAt = new Date().toISOString()) {
  const batches = buildCorpusBatches(manifest, batchSize);
  return {
    generatedAt,
    totalPapers: manifest.length,
    batchSize,
    batches,
  };
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
  const batchSize = parseNumberArg(args, '--size', 10);
  if (args.includes('--all')) {
    const review = buildCorpusReview(manifest, batchSize);
    const outputIndex = args.indexOf('--out');
    if (outputIndex >= 0) {
      const outputValue = args[outputIndex + 1];
      if (!outputValue || outputValue.startsWith('--')) throw new Error('--out needs a file path');
      const outputPath = resolve(outputValue);
      await mkdir(dirname(outputPath), { recursive: true });
      await writeFile(outputPath, `${JSON.stringify(review, null, 2)}\n`, 'utf8');
      console.log(`Wrote ${review.batches.length} batches for ${review.totalPapers} papers to ${outputValue}`);
      return;
    }
    console.log(JSON.stringify(review, null, 2));
    return;
  }

  const batchNumber = parseNumberArg(args, '--batch', 1);
  const packet = selectCorpusBatch(manifest, batchNumber, batchSize);
  if (args.includes('--check')) {
    const { loadPaperEntries, validateCorpus } = await import('./validate-corpus.mjs');
    const entries = await loadPaperEntries();
    const issues = validateCorpus(entries, { allowPartial: true, batch: batchNumber });
    if (issues.length > 0) {
      for (const current of issues) console.error(`${current.code} [${current.paperId}.${current.field}]: ${current.message}`);
      process.exitCode = 1;
      return;
    }
    const reviewedIds = new Set(entries.map((entry) => entry.id));
    const missingIds = packet.papers.map((paper) => paper.id).filter((id) => !reviewedIds.has(id));
    if (missingIds.length > 0) {
      console.error(`batch-files [${batchNumber}.id]: Missing paper files: ${missingIds.join(', ')}`);
      process.exitCode = 1;
      return;
    }
    console.log(`Batch ${batchNumber} checked: ${packet.papers.length} reviewed papers`);
    return;
  }

  console.log(JSON.stringify(packet, null, 2));
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === pathToFileURL(currentFile).href) {
  runCli().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
