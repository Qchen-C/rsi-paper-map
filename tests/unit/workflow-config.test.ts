import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';

const workflowUrl = new URL('../../.github/workflows/deploy.yml', import.meta.url);

describe('GitHub Pages workflow', () => {
  it('deploys main with the least required permissions and pinned major actions', async () => {
    const source = await readFile(workflowUrl, 'utf8');

    assert.match(source, /branches:\s*\[main\]/);
    assert.match(source, /permissions:\s*\n\s*contents:\s*read\s*\n\s*pages:\s*write\s*\n\s*id-token:\s*write/);
    assert.doesNotMatch(source, /write-all|contents:\s*write/);
    assert.match(source, /actions\/checkout@v7/);
    assert.match(source, /withastro\/action@v6/);
    assert.match(source, /actions\/deploy-pages@v5/);
  });

  it('gates deployment on tests, strict corpus validation, and the Astro build', async () => {
    const source = await readFile(workflowUrl, 'utf8');
    const testIndex = source.indexOf('npm run test:unit');
    const validationIndex = source.indexOf('npm run validate:corpus');
    const buildIndex = source.indexOf('withastro/action@v6');
    const deployIndex = source.indexOf('deploy:');

    assert.ok(testIndex > 0);
    assert.ok(validationIndex > testIndex);
    assert.ok(buildIndex > validationIndex);
    assert.ok(deployIndex > buildIndex);
    assert.match(source, /deploy:\s*\n\s*needs:\s*build/);
  });
});
