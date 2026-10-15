import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { loadPaperEntries } from './validate-corpus.mjs';

export async function checkSource(url, fetchImpl = fetch) {
  const checkedAt = new Date().toISOString();
  try {
    const response = await fetchImpl(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(15_000),
    });
    return {
      url,
      status: response.ok ? 'reachable' : 'unreachable',
      httpStatus: response.status,
      checkedAt,
    };
  } catch (error) {
    return {
      url,
      status: 'unreachable',
      httpStatus: null,
      checkedAt,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

async function runCli() {
  const entries = await loadPaperEntries();
  const urls = new Set();
  for (const entry of entries) {
    for (const source of entry.data.sources ?? []) urls.add(source.url);
    for (const source of entry.data.evidenceSources ?? []) urls.add(source);
  }
  const results = [];
  for (const url of urls) results.push(await checkSource(url));
  const output = resolve('reports/link-check.json');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, `${JSON.stringify({ checkedAt: new Date().toISOString(), results }, null, 2)}\n`, 'utf8');
  const unreachable = results.filter((result) => result.status === 'unreachable').length;
  console.log(`Checked ${results.length} source URL(s); ${unreachable} unreachable URL(s) retained for review`);
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === pathToFileURL(currentFile).href) {
  runCli().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
