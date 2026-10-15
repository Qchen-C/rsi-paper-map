# RSI Paper Map Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建并发布一个收录 110 篇 RSI workshop 论文、提供中英文研究卡片、主题分类、阅读路线和本地学习进度的公开网站。

**Architecture:** 在 `outputs/rsi-paper-map` 创建独立 Astro 静态站点，使用 Content Collections 从本地 Markdown 论文文件生成首页、论文库和详情页。公开研究内容进入 Git，个人进度仅使用版本化 `localStorage`；GitHub Actions 完成校验、构建并部署至 GitHub Pages。

**Tech Stack:** Astro、TypeScript strictest、Astro Content Collections、Zod、Vitest、Playwright、axe-core、npm、GitHub Actions、GitHub Pages。

**Spec:** `docs/superpowers/specs/2026-10-15-rsi-paper-map-design.md`，实施开始时复制到目标仓库同一路径。

## Global Constraints

- 初始语料严格为 110 篇：Oral 4、Spotlight 21、Poster 75、Short 10。
- 英文标题保持来源原文；中文译名与双语概括必须标明为解释性内容。
- 公开证据状态只有 `metadata`、`abstract-checked`、`full-text-checked`。
- `full-text-checked` 必须核对 introduction、method、experiments、conclusion；缺少正文时不得升级状态。
- 第一版不使用数据库、服务端 API、第三方登录、云同步或公开用户笔记。
- 仓库为 `Qchen-C/rsi-paper-map`，站点地址为 `https://qchen-c.github.io/rsi-paper-map/`。
- 所有站内链接和静态资源必须在 `/rsi-paper-map/` 子路径下正常工作。
- 只有通过内容、单元、端到端、可访问性和生产构建检查的提交才允许发布。

## Review Focus

- 外部论文链接暂时不可访问：页面继续渲染原始来源，并显示可复查状态；不得删除来源或伪造替代内容。由 Task 4 和 Task 14 测试。
- `localStorage` 内容损坏或不可用：只重置个人状态，公开浏览和筛选必须继续工作。由 Task 7 测试。
- GitHub Pages 子路径：从首页进入论文库、详情页和返回导航都不得跳到域名根路径。由 Task 1 和 Task 13 测试。
- 中英文或核验字段不完整：构建必须失败并指出论文 ID 与具体字段。由 Task 2 和 Task 4 测试。
- 中英文搜索、大小写、标点和组合筛选：结果必须稳定，清空条件后恢复全集。由 Task 6 和 Task 10 测试。

---

## File Map

目标仓库：`outputs/rsi-paper-map`

```text
rsi-paper-map/
├─ .github/workflows/deploy.yml          # 校验、构建、Pages 部署
├─ docs/superpowers/specs/               # 已确认设计规范
├─ docs/superpowers/plans/               # 本实施计划
├─ public/favicon.svg
├─ scripts/
│  ├─ import-workshop.mjs                # 将来源 HTML 转成规范元数据
│  ├─ validate-corpus.mjs                # 数量、分布、关联和证据校验
│  ├─ check-links.mjs                    # 外部来源可达性报告
│  └─ corpus-batch.mjs                   # 生成固定批次研究清单
├─ src/
│  ├─ components/
│  │  ├─ SiteHeader.astro
│  │  ├─ ThemeMap.astro
│  │  ├─ ReadingPath.astro
│  │  ├─ FilterPanel.astro
│  │  ├─ PaperCard.astro
│  │  ├─ PaperDetail.astro
│  │  └─ ProgressPanel.astro
│  ├─ content/papers/*.md                # 一篇论文一个文件
│  ├─ data/
│  │  ├─ themes.ts
│  │  ├─ reading-paths.json
│  │  └─ workshop-papers.json            # 110 篇来源清单
│  ├─ layouts/BaseLayout.astro
│  ├─ lib/
│  │  ├─ base-path.ts
│  │  ├─ papers.ts
│  │  ├─ filter-papers.ts
│  │  ├─ language-mode.ts
│  │  └─ reading-state.ts
│  ├─ pages/index.astro
│  ├─ pages/papers/index.astro
│  ├─ pages/papers/[id].astro
│  ├─ styles/global.css
│  └─ content.config.ts
├─ tests/
│  ├─ fixtures/workshop-papers.html
│  ├─ unit/
│  └─ e2e/
├─ astro.config.mjs
├─ package.json
├─ playwright.config.ts
├─ tsconfig.json
└─ vitest.config.ts
```

---

## Phase A — Platform and verified seed content

### Task 1: Bootstrap the isolated Astro repository

**Files:**
- Create: `outputs/rsi-paper-map/package.json`
- Create: `outputs/rsi-paper-map/astro.config.mjs`
- Create: `outputs/rsi-paper-map/tsconfig.json`
- Create: `outputs/rsi-paper-map/src/lib/base-path.ts`
- Create: `outputs/rsi-paper-map/tests/unit/base-path.test.ts`
- Copy into repository: confirmed spec and this plan under `docs/superpowers/`

**Interfaces:**
- Produces: `withBase(path: string, base?: string): string`
- Produces: npm scripts `dev`, `build`, `check`, `test`, `test:unit`, `test:e2e`, `validate:corpus`, `check:links`

- [ ] **Step 1: Create the project and install the test toolchain**

Run from `outputs`:

```powershell
npm create astro@latest rsi-paper-map -- --template minimal --install --no-git --typescript strictest
Set-Location rsi-paper-map
npm install -D @astrojs/check typescript vitest jsdom @playwright/test @axe-core/playwright
```

Expected: Astro creates a minimal TypeScript project and `package-lock.json`.

- [ ] **Step 2: Write the failing base-path test**

```ts
import { describe, expect, it } from 'vitest';
import { withBase } from '../../src/lib/base-path';

describe('withBase', () => {
  it('prefixes internal paths exactly once', () => {
    expect(withBase('/papers/agent0', '/rsi-paper-map/'))
      .toBe('/rsi-paper-map/papers/agent0');
    expect(withBase('/rsi-paper-map/papers', '/rsi-paper-map/'))
      .toBe('/rsi-paper-map/papers');
    expect(withBase('/papers', '/')).toBe('/papers');
  });
});
```

- [ ] **Step 3: Run the test and confirm the missing module failure**

Run: `npm run test:unit -- tests/unit/base-path.test.ts`

Expected: FAIL because `src/lib/base-path.ts` does not exist.

- [ ] **Step 4: Implement the helper and GitHub Pages configuration**

```ts
export function withBase(path: string, base = import.meta.env.BASE_URL): string {
  const normalizedBase = `/${base.replace(/^\/+|\/+$/g, '')}`;
  const prefix = normalizedBase === '/' ? '' : normalizedBase;
  const normalizedPath = `/${path.replace(/^\/+/, '')}`;
  if (prefix && (normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`))) {
    return normalizedPath;
  }
  return `${prefix}${normalizedPath}` || '/';
}
```

Set `astro.config.mjs` to:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://qchen-c.github.io',
  base: '/rsi-paper-map',
  output: 'static',
});
```

- [ ] **Step 5: Add exact package scripts and verify**

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "npm run validate:corpus && astro check && astro build",
    "preview": "astro preview",
    "check": "astro check",
    "test": "npm run test:unit && npm run test:e2e",
    "test:unit": "vitest run",
    "test:e2e": "playwright test",
    "validate:corpus": "node scripts/validate-corpus.mjs",
    "check:links": "node scripts/check-links.mjs"
  }
}
```

Run: `npm run test:unit -- tests/unit/base-path.test.ts && npm run build`

Expected: test and minimal production build PASS.

- [ ] **Step 6: Initialize local Git and commit**

```powershell
git init -b main
git add .
git commit -m "chore: bootstrap Astro research navigator"
```

### Task 2: Define the paper and reading-path schemas

**Files:**
- Create: `src/content.config.ts`
- Create: `tests/unit/content-schema.test.ts`
- Create: `tests/fixtures/valid-paper.ts`

**Interfaces:**
- Produces: `paperSchema`, `readingPathSchema`
- Produces collections: `papers`, `readingPaths`

- [ ] **Step 1: Write failing schema tests**

```ts
import { describe, expect, it } from 'vitest';
import { paperSchema } from '../../src/content.config';
import { validPaper } from '../fixtures/valid-paper';

describe('paperSchema', () => {
  it('accepts a complete bilingual paper', () => {
    expect(paperSchema.safeParse(validPaper).success).toBe(true);
  });

  it('rejects a full-text claim without four checked sections', () => {
    const result = paperSchema.safeParse({
      ...validPaper,
      evidenceStatus: 'full-text-checked',
      checkedSections: ['introduction'],
    });
    expect(result.success).toBe(false);
  });

  it('rejects a paper missing its Chinese summary', () => {
    const result = paperSchema.safeParse({ ...validPaper, summaryZh: '' });
    expect(result.success).toBe(false);
  });
});
```

- [ ] **Step 2: Run the tests and confirm they fail**

Run: `npm run test:unit -- tests/unit/content-schema.test.ts`

Expected: FAIL because the schemas do not exist.

- [ ] **Step 3: Implement the exported Zod schema and collections**

Use `z` from `astro/zod`, `glob()` from `astro/loaders`, and a `superRefine` rule requiring all four checked sections for `full-text-checked`. Define the exact enums from the spec and require non-empty bilingual fields for any status above `metadata`.

```ts
export const evidenceStatuses = ['metadata', 'abstract-checked', 'full-text-checked'] as const;
export const requiredFullTextSections = ['introduction', 'method', 'experiments', 'conclusion'] as const;

export const paperSchema = z.object({
  title: z.string().min(1),
  titleZh: z.string().min(1),
  authors: z.array(z.string().min(1)).min(1),
  presentation: z.enum(['oral', 'spotlight', 'poster', 'short']),
  year: z.literal(2026),
  sourceIndex: z.number().int().min(1).max(110),
  sourcePage: z.literal('https://recursive-workshop.github.io/papers.html'),
  sources: z.array(z.object({ kind: z.enum(['openreview', 'arxiv', 'code', 'project']), url: z.string().url() })).min(1),
  summaryEn: z.string(), summaryZh: z.string(),
  problemEn: z.string(), problemZh: z.string(),
  methodEn: z.string(), methodZh: z.string(),
  resultsEn: z.string(), resultsZh: z.string(),
  limitationsEn: z.string(), limitationsZh: z.string(),
  whyReadEn: z.string(), whyReadZh: z.string(),
  themes: z.array(z.string()).min(1),
  keywords: z.array(z.string()).min(1),
  difficulty: z.enum(['entry', 'intermediate', 'advanced']),
  prerequisites: z.array(z.string()),
  readingPaths: z.array(z.object({ id: z.string(), order: z.number().int().positive() })),
  relatedPapers: z.array(z.string()), readNext: z.array(z.string()),
  featured: z.boolean(),
  feedbackSource: z.string(), updatedObject: z.string(),
  updateMechanism: z.string(), successSignal: z.string(),
  loopSummaryEn: z.string(), loopSummaryZh: z.string(),
  evidenceStatus: z.enum(evidenceStatuses),
  checkedSections: z.array(z.enum(requiredFullTextSections)),
  verifiedAt: z.coerce.date(),
  evidenceSources: z.array(z.string().url()).min(1),
});
```

- [ ] **Step 4: Run schema tests and Astro check**

Run: `npm run test:unit -- tests/unit/content-schema.test.ts && npm run check`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/content.config.ts tests
git commit -m "feat: define bilingual paper content schema"
```

### Task 3: Import and lock the 110-paper source manifest

**Files:**
- Create: `scripts/import-workshop.mjs`
- Create: `src/data/workshop-papers.json`
- Create: `tests/fixtures/workshop-papers.html`
- Create: `tests/unit/import-workshop.test.ts`

**Interfaces:**
- Produces: `parseWorkshopPapers(html: string): WorkshopPaper[]`
- `WorkshopPaper`: `{ sourceIndex, title, presentation, openreviewUrl }`

- [ ] **Step 1: Save a deterministic HTML fixture from the accepted-papers page**

The fixture contains all four presentation headings and representative paper links. The live fetch is used only to generate the checked-in JSON; tests never depend on network availability.

- [ ] **Step 2: Write failing parser and distribution tests**

```ts
expect(parseWorkshopPapers(fixture)).toEqual([
  expect.objectContaining({ sourceIndex: 1, presentation: 'oral' }),
]);
expect(validateDistribution(manifest)).toEqual({ oral: 4, spotlight: 21, poster: 75, short: 10 });
expect(new Set(manifest.map((p) => p.title)).size).toBe(110);
```

- [ ] **Step 3: Run tests and confirm failure**

Run: `npm run test:unit -- tests/unit/import-workshop.test.ts`

Expected: FAIL because parser functions do not exist.

- [ ] **Step 4: Implement import, normalization, and deterministic ordering**

The importer preserves exact title text, extracts OpenReview links, assigns source order, lowercases presentation enums, and refuses to write output unless counts equal `4/21/75/10` and total equals 110.

- [ ] **Step 5: Generate and inspect the manifest**

Run: `node scripts/import-workshop.mjs --url https://recursive-workshop.github.io/papers.html --out src/data/workshop-papers.json`

Expected: `Imported 110 papers (4 oral, 21 spotlight, 75 poster, 10 short)`.

- [ ] **Step 6: Run tests and commit**

```bash
npm run test:unit -- tests/unit/import-workshop.test.ts
git add scripts/import-workshop.mjs src/data/workshop-papers.json tests
git commit -m "data: lock workshop paper manifest"
```

### Task 4: Enforce corpus evidence and relationship integrity

**Files:**
- Create: `scripts/validate-corpus.mjs`
- Create: `scripts/check-links.mjs`
- Create: `tests/unit/validate-corpus.test.ts`

**Interfaces:**
- Produces: `validateCorpus(entries, options): ValidationIssue[]`
- Produces: `checkSource(url): Promise<{ url, status, checkedAt }>`

- [ ] **Step 1: Write failing corpus integrity tests**

Cover duplicate IDs, duplicate titles, missing bilingual content, missing related-paper IDs, duplicate route positions, wrong presentation totals, unreachable source reporting, and the Review Focus rule that an unreachable URL remains attached to its paper.

```ts
const issues = validateCorpus([paperA, { ...paperA }], { expectedCount: 2 });
expect(issues).toContainEqual(expect.objectContaining({ code: 'duplicate-id' }));

const report = await checkSource('https://invalid.example', fakeFetch503);
expect(report.status).toBe('unreachable');
expect(report.url).toBe('https://invalid.example');
```

- [ ] **Step 2: Run tests and verify failure**

Run: `npm run test:unit -- tests/unit/validate-corpus.test.ts`

- [ ] **Step 3: Implement validation with actionable messages**

Every issue contains `{ code, paperId, field, message }`. `validate-corpus.mjs` exits non-zero for structural/content failures and writes `reports/link-check.json` for transient link results without deleting sources.

- [ ] **Step 4: Verify tests and command behavior**

Run: `npm run test:unit -- tests/unit/validate-corpus.test.ts && npm run validate:corpus`

Expected during seed phase: validation passes with `--allow-partial`, while production mode continues to require all 110 entries.

- [ ] **Step 5: Commit**

```bash
git add scripts tests package.json
git commit -m "test: enforce corpus evidence integrity"
```

### Task 5: Define the nine themes and five reading paths

**Files:**
- Create: `src/data/themes.ts`
- Create: `src/data/reading-paths.json`
- Create: `tests/unit/reading-paths.test.ts`

**Interfaces:**
- Produces: `THEMES: Theme[]`
- Produces: `ReadingPath { id, titleEn, titleZh, descriptionEn, descriptionZh, paperIds }`

- [ ] **Step 1: Write failing taxonomy tests**

Assert exactly nine unique themes, exactly five specialty paths, a ten-paper entry path, no unknown paper IDs, and no duplicate order within a route.

- [ ] **Step 2: Run tests and verify failure**

Run: `npm run test:unit -- tests/unit/reading-paths.test.ts`

- [ ] **Step 3: Implement taxonomy and route records**

Use the nine approved English/Chinese theme pairs. Create route records for entry, agent evolution, memory/continual learning, self-play/synthetic data, and safety/failure. Seed route IDs may reference only papers already added; production validation requires every final route ID to resolve.

- [ ] **Step 4: Run tests and commit**

```bash
npm run test:unit -- tests/unit/reading-paths.test.ts
git add src/data tests
git commit -m "feat: add RSI taxonomy and reading paths"
```

### Task 6: Build deterministic paper search and filtering

**Files:**
- Create: `src/lib/papers.ts`
- Create: `src/lib/filter-papers.ts`
- Create: `tests/unit/filter-papers.test.ts`

**Interfaces:**
- Produces: `toPaperIndexItem(entry): PaperIndexItem`
- Produces: `filterPapers(papers, filters): PaperIndexItem[]`
- Produces: `sortPapers(papers, order): PaperIndexItem[]`

- [ ] **Step 1: Write failing search tests**

```ts
expect(filterPapers(papers, { query: 'agent0' }).map((p) => p.id)).toEqual(['agent0']);
expect(filterPapers(papers, { query: '持续 学习' }).map((p) => p.id)).toEqual(['agentic-memory']);
expect(filterPapers(papers, { themes: ['memory'], evidence: ['full-text-checked'] })).toHaveLength(1);
expect(filterPapers(papers, emptyFilters)).toHaveLength(papers.length);
```

Also cover case folding, punctuation normalization, combined filters, and stable source-index tie breaking.

- [ ] **Step 2: Run tests and verify failure**

Run: `npm run test:unit -- tests/unit/filter-papers.test.ts`

- [ ] **Step 3: Implement normalization, AND-between-groups, OR-within-group filtering**

Search across English title, Chinese title, authors, keywords, and both summaries. Sorting options are recommended/source order, title, presentation rank, and verified date.

- [ ] **Step 4: Run tests and commit**

```bash
npm run test:unit -- tests/unit/filter-papers.test.ts
git add src/lib tests
git commit -m "feat: add bilingual paper search and filters"
```

### Task 7: Implement resilient browser-local reading and language state

**Files:**
- Create: `src/lib/reading-state.ts`
- Create: `src/lib/language-mode.ts`
- Create: `tests/unit/reading-state.test.ts`
- Create: `tests/unit/language-mode.test.ts`

**Interfaces:**
- Produces: `loadReadingState(storage, paperId): ReadingState`
- Produces: `saveReadingState(storage, paperId, patch): ReadingState`
- Produces: `clearReadingState(storage, paperId?): void`
- Produces: `loadLanguageMode(storage): 'bilingual' | 'zh' | 'en'`
- Produces: `saveLanguageMode(storage, mode): void`

- [ ] **Step 1: Write failing state and language-mode tests**

Cover default state, favorite/read/progress/note persistence, progress clamping to 0–100, malformed JSON reset, unavailable storage, and isolation between paper IDs.

```ts
const storage = new MemoryStorage({ 'rsi-paper-map:v1:agent0': '{bad json' });
expect(loadReadingState(storage, 'agent0')).toEqual(defaultReadingState);
expect(() => loadReadingState(throwingStorage, 'agent0')).not.toThrow();
```

Also assert that a missing or invalid `rsi-paper-map:ui-language` value returns `bilingual`, and that saving `zh` or `en` round-trips through the provided storage object.

- [ ] **Step 2: Run tests and verify failure**

Run: `npm run test:unit -- tests/unit/reading-state.test.ts tests/unit/language-mode.test.ts`

- [ ] **Step 3: Implement versioned, exception-safe storage**

Use key prefix `rsi-paper-map:v1:`. Never include personal state in page HTML, URLs, analytics, or committed content. Store the interface language under `rsi-paper-map:ui-language`; accept only `bilingual`, `zh`, or `en`, defaulting safely to `bilingual` for missing or malformed values.

- [ ] **Step 4: Run tests and commit**

```bash
npm run test:unit -- tests/unit/reading-state.test.ts tests/unit/language-mode.test.ts
git add src/lib tests
git commit -m "feat: add private reading and language preferences"
```

### Task 8: Add four fully verified seed papers

**Files:**
- Create: `src/content/papers/agent0.md`
- Create: `src/content/papers/contextual-drag.md`
- Create: `src/content/papers/agentic-memory-designs.md`
- Create: `src/content/papers/posttrainbench.md`
- Create: `scripts/corpus-batch.mjs`

**Interfaces:**
- Consumes: Task 2 schema and Task 4 validator
- Produces: four real records usable by every page and test

- [ ] **Step 1: Generate research packets from primary sources**

For each paper, collect OpenReview plus arXiv/project/code when available. Record exact sections read and do not upgrade evidence status until the required sections are checked.

- [ ] **Step 2: Complete the bilingual cards**

Each file must include all schema fields, a concise English summary, a Chinese explanatory summary, method/results/limitations, four-part improvement loop, prerequisites, theme labels, and evidence URLs.

- [ ] **Step 3: Validate sources against claims**

Run: `npm run validate:corpus -- --allow-partial --require-status full-text-checked agent0 contextual-drag agentic-memory-designs posttrainbench`

Expected: four records pass; every claim-bearing section has at least one primary source.

- [ ] **Step 4: Run all unit tests and commit**

```bash
npm run test:unit
git add src/content scripts
git commit -m "data: add verified seed paper cards"
```

### Task 9: Build the design system, shell, and homepage

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/SiteHeader.astro`
- Create: `src/components/ThemeMap.astro`
- Create: `src/components/ReadingPath.astro`
- Create: `src/pages/index.astro`
- Create: `src/styles/global.css`
- Create: `tests/e2e/home.spec.ts`

**Interfaces:**
- Consumes: collections, themes, reading paths, `withBase`
- Produces: consistent page shell and public navigation

- [ ] **Step 1: Write failing homepage E2E tests**

Test bilingual heading, visible corpus statistics, nine theme links, entry route, keyboard navigation, language-mode cycling, persisted language preference, and links prefixed with `/rsi-paper-map/` under production base.

- [ ] **Step 2: Run E2E test and confirm missing UI failure**

Run: `npm run test:e2e -- tests/e2e/home.spec.ts`

- [ ] **Step 3: Implement the approved editorial visual system**

Use the cream background, ink text, orange accent, compact research labels, responsive two-column hero, clear focus styles, and reduced-motion handling demonstrated in the approved prototype. Do not use remote font dependencies; select a robust serif/sans system stack. The header language control cycles `bilingual → zh → en`, updates `document.documentElement.lang`, hides only the unselected explanatory language, and never changes the original English paper title.

- [ ] **Step 4: Render actual statistics from content, not hard-coded counts**

During the seed phase label the site as a preview. Remove that label only after Task 12 validates all 110 papers.

- [ ] **Step 5: Run E2E, accessibility smoke, and build**

Run: `npm run test:e2e -- tests/e2e/home.spec.ts && npm run build`

- [ ] **Step 6: Commit**

```bash
git add src tests
git commit -m "feat: build bilingual research map homepage"
```

### Task 10: Build the searchable paper library

**Files:**
- Create: `src/components/FilterPanel.astro`
- Create: `src/components/PaperCard.astro`
- Create: `src/pages/papers/index.astro`
- Create: `tests/e2e/papers-library.spec.ts`

**Interfaces:**
- Consumes: `filterPapers`, `sortPapers`, `PaperIndexItem[]`
- Produces: accessible client-side search/filter UI for 110 records

- [ ] **Step 1: Write failing library E2E tests**

Test English title search, Chinese search, theme plus evidence filters, result count, clear-all behavior, URL-independent state, empty results, and keyboard-operable controls.

- [ ] **Step 2: Run test and confirm failure**

Run: `npm run test:e2e -- tests/e2e/papers-library.spec.ts`

- [ ] **Step 3: Implement progressively enhanced filters**

Server-render all cards for no-JavaScript access. Hydrate only filtering controls; update `hidden`, result count, and an `aria-live` status without fetching a backend.

- [ ] **Step 4: Run tests and commit**

```bash
npm run test:unit -- tests/unit/filter-papers.test.ts
npm run test:e2e -- tests/e2e/papers-library.spec.ts
git add src tests
git commit -m "feat: add searchable bilingual paper library"
```

### Task 11: Build paper detail pages and private progress controls

**Files:**
- Create: `src/components/PaperDetail.astro`
- Create: `src/components/ProgressPanel.astro`
- Create: `src/pages/papers/[id].astro`
- Create: `tests/e2e/paper-detail.spec.ts`

**Interfaces:**
- Consumes: Astro `getCollection('papers')`, `ReadingState` APIs, `withBase`
- Produces: one static page per paper ID

- [ ] **Step 1: Write failing detail E2E tests**

Test English original title, Chinese title, both summaries, improvement loop, evidence badge, primary source links, prerequisites, related papers, next-reading links, favorite/read/progress/note persistence, and absence of notes from initial HTML.

- [ ] **Step 2: Run test and confirm failure**

Run: `npm run test:e2e -- tests/e2e/paper-detail.spec.ts`

- [ ] **Step 3: Implement static routes and the local-only panel**

Use `getStaticPaths()` from the paper collection. Related-paper links resolve by stable ID and pass through `withBase`. Load personal state only after client hydration.

- [ ] **Step 4: Run tests and commit**

```bash
npm run test:unit -- tests/unit/reading-state.test.ts
npm run test:e2e -- tests/e2e/paper-detail.spec.ts
git add src tests
git commit -m "feat: add paper detail and private learning progress"
```

---

## Phase B — Complete and verify the 110-paper corpus

### Task 12: Complete all 110 bilingual research cards in fixed review batches

**Files:**
- Create/modify: `src/content/papers/*.md` until exactly 110 files exist
- Modify: `src/data/reading-paths.json`
- Create: `reports/corpus-review.json`

**Interfaces:**
- Consumes: manifest order, schema, themes, validator
- Produces: complete public corpus with per-paper evidence provenance

- [ ] **Step 1: Generate eleven immutable batches**

`corpus-batch.mjs` maps source indices exactly as follows: 1–10, 11–20, 21–30, 31–40, 41–50, 51–60, 61–70, 71–80, 81–90, 91–100, 101–110.

Run: `node scripts/corpus-batch.mjs --all --out reports/corpus-review.json`

Expected: every source index appears once, with no gaps or duplicates.

- [ ] **Step 2: Process each paper through the same evidence gate**

For each source index, in order:

1. Confirm English title, authors, presentation and OpenReview URL against the workshop page.
2. Locate primary abstract/full text using OpenReview, arXiv, official project page, or author-hosted paper.
3. Read abstract, introduction, method, experiments and conclusion when accessible.
4. Write bilingual problem, method, results, limitations, reading value and improvement-loop fields.
5. Assign one or more themes, difficulty, prerequisites, related papers and read-next candidates.
6. Record exact `checkedSections`, `verifiedAt` and `evidenceSources`.
7. If full text is unavailable, keep `abstract-checked`; describe no unseen experimental claim.

- [ ] **Step 3: Validate and commit each batch independently**

For batch numbers 1 through 11, run:

```powershell
node scripts/corpus-batch.mjs --batch 1 --check
npm run validate:corpus -- --batch 1
git add src/content/papers src/data/reading-paths.json reports/corpus-review.json
git commit -m "data: review papers 001-010"
```

Repeat with batch/range pairs `2/011-020`, `3/021-030`, `4/031-040`, `5/041-050`, `6/051-060`, `7/061-070`, `8/071-080`, `9/081-090`, `10/091-100`, `11/101-110`. A batch commit is allowed only when every entry has a primary-source URL and passes the schema.

- [ ] **Step 4: Run the full corpus gate**

Run: `npm run validate:corpus`

Expected:

```text
110 unique papers
4 oral / 21 spotlight / 75 poster / 10 short
110 bilingual cards
0 unresolved internal references
0 unsupported evidence-status upgrades
```

- [ ] **Step 5: Curate final route order after all cards are understood**

Select the 10-paper entry route and four specialty routes based on prerequisites, representativeness and evidence strength. Run `npm run test:unit -- tests/unit/reading-paths.test.ts` and commit route changes separately.

### Task 13: Add full responsive, accessibility, and production-path coverage

**Files:**
- Create: `tests/e2e/accessibility.spec.ts`
- Create: `tests/e2e/responsive.spec.ts`
- Create: `tests/e2e/production-base.spec.ts`
- Modify: components/styles identified by failures

**Interfaces:**
- Consumes: complete site
- Produces: release-level browser assurance

- [ ] **Step 1: Write failing tests for the review-risk conditions**

Use Playwright desktop and 390px mobile projects. Add axe scans for home, paper library and a detail page. Serve `dist` beneath `/rsi-paper-map/` and verify all internal links, scripts and styles return 200.

- [ ] **Step 2: Run the suite and record failures**

Run: `npm run build && npm run test:e2e`

- [ ] **Step 3: Fix only observed accessibility, overflow, focus, or base-path defects**

Required outcomes: no serious/critical axe violations; no horizontal scrolling at 390px; filters and progress controls work by keyboard; headings are ordered; focus is visible.

- [ ] **Step 4: Re-run the full suite and commit**

```bash
npm run check
npm run test:unit
npm run build
npm run test:e2e
git add src tests
git commit -m "test: cover accessibility responsive and Pages paths"
```

### Task 14: Configure CI and GitHub Pages deployment

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `tests/unit/workflow-config.test.ts`
- Modify: `README.md`

**Interfaces:**
- Produces: automatic deployment from `main`
- Produces: public URL `https://qchen-c.github.io/rsi-paper-map/`

- [ ] **Step 1: Write a failing workflow-configuration test**

Assert the workflow grants only `contents: read`, `pages: write`, `id-token: write`; runs validation/tests/build before deploy; uses `actions/checkout@v7`, `withastro/action@v6`, and `actions/deploy-pages@v5`; deploy depends on a successful build.

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test:unit -- tests/unit/workflow-config.test.ts`

- [ ] **Step 3: Add the official Astro Pages workflow**

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - run: npm ci
      - run: npm run test:unit
      - run: npm run validate:corpus
      - uses: withastro/action@v6
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v5
```

- [ ] **Step 4: Document contributor and content-review workflow**

README includes local setup, commands, schema overview, evidence meanings, bilingual content rules, how to add a paper, and the GitHub Pages URL.

- [ ] **Step 5: Run release verification and commit**

```bash
npm ci
npm run check
npm run test:unit
npm run validate:corpus
npm run build
npm run test:e2e
git add .github README.md tests
git commit -m "ci: deploy verified Astro site to GitHub Pages"
```

### Task 15: Create the public GitHub repository and verify the live release

**Files:**
- No new product files unless live verification exposes a defect

**Interfaces:**
- Consumes: locally verified `main`
- Produces: public repository and live Pages site

- [ ] **Step 1: Reconfirm exact Git state and remote target**

Run: `git status --short --branch && git log -5 --oneline`

Expected: clean `main`; all release checks from Task 14 pass.

- [ ] **Step 2: Create `Qchen-C/rsi-paper-map` as a public repository**

Use the already authenticated GitHub session. Do not initialize the remote with README, license, or `.gitignore`, because those files already exist locally.

- [ ] **Step 3: Add the remote and push main**

```bash
git remote add origin https://github.com/Qchen-C/rsi-paper-map.git
git push -u origin main
```

- [ ] **Step 4: Select GitHub Actions as Pages source**

In repository Settings → Pages, choose GitHub Actions. Wait for the deployment workflow to complete; inspect the run if it fails.

- [ ] **Step 5: Verify the public repository and live site**

Check:

- `https://github.com/Qchen-C/rsi-paper-map` is public.
- `https://qchen-c.github.io/rsi-paper-map/` returns 200.
- Home → Papers → detail navigation works.
- Search and theme filtering work on the deployed asset paths.
- A fresh browser has no private notes; adding a note does not change page source or the GitHub repository.
- All 110 papers appear and the displayed type counts equal `4/21/75/10`.

- [ ] **Step 6: Tag the first complete release**

```bash
git tag -a v1.0.0 -m "RSI Paper Map v1.0.0"
git push origin v1.0.0
```

---

## Final Acceptance Command Set

Run from `outputs/rsi-paper-map`:

```powershell
npm ci
npm run check
npm run test:unit
npm run validate:corpus
npm run check:links
npm run build
npm run test:e2e
git status --short
```

Expected: all commands exit 0; the corpus reports exactly 110 unique papers and the working tree is clean. A transient external-link failure may be reported for review, but it must not delete the source or misrepresent its evidence state.

## Official References

- Astro Content Collections: <https://docs.astro.build/en/guides/content-collections/>
- Astro deployment to GitHub Pages: <https://docs.astro.build/en/guides/deploy/github/>
- GitHub Pages custom workflows: <https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages>
