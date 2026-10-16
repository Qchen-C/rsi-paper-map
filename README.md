# RSI Paper Map · 递归自我改进论文导航

[RSI Paper Map](https://qchen-c.github.io/rsi-paper-map/) is a public, bilingual guide to all 110 accepted papers from the [2026 Recursive Self-Improvement Workshop](https://recursive-workshop.github.io/papers.html). It is designed both as a research index and as a structured personal learning path.

[RSI Paper Map](https://qchen-c.github.io/rsi-paper-map/) 是一个公开的中英双语研究导航站，覆盖 [2026 Recursive Self-Improvement Workshop](https://recursive-workshop.github.io/papers.html) 的全部 110 篇入选论文，同时服务于研究检索与个人系统学习。

## What the site provides · 网站内容

- Original English paper titles with bilingual explanations of the problem, method, results, limitations, and reasons to read.
- 英文原始标题，以及对问题、方法、结果、局限和阅读价值的中英双语解释。
- Nine research themes and five prerequisite-aware reading paths, including a ten-paper entry route.
- 九个研究主题和五条考虑先修关系的阅读路线，其中入门路线包含十篇论文。
- Search and filters for themes, evidence level, difficulty, and presentation type.
- 可按主题、证据等级、难度和展示类型搜索与筛选。
- Private reading status, progress, rating, and notes stored only in the reader's browser through `localStorage`.
- 阅读状态、进度、评分和笔记只保存在读者自己的浏览器 `localStorage` 中，不会上传到仓库或服务器。

## Evidence policy · 证据等级

Every research card states how deeply its claims were checked:

- `full-text-checked`: the introduction, method, experiments, and conclusion were checked against the paper.
- `abstract-checked`: the bilingual card is grounded in the official abstract and linked primary sources, but is not a full-text review.
- `metadata`: only bibliographic and presentation metadata has been verified; interpretive claims must remain limited.

每张研究卡都显示核对深度：`full-text-checked` 表示已核对正文关键章节；`abstract-checked` 表示依据官方摘要与一手来源整理；`metadata` 表示仅核对书目信息和展示类型。页面不会把低等级证据包装成全文结论。

## Local development · 本地开发

Requires Node.js 24 and npm.

```bash
npm ci
npm run dev
```

The deployed site uses the `/rsi-paper-map/` base path. Release checks run against the production build:

```bash
npm run test:unit
npm run validate:corpus
npm run check
npm run build
npx playwright install chromium
npm run test:e2e
```

## Content model · 内容模型

Paper records live in `src/content/papers/*.md`. The schema is defined in `src/content.config.ts` and mirrored by the dependency-free validation contract in `src/lib/content-schema.ts`.

Each paper record includes:

- source identity: English title, Chinese title, authors, presentation type, source order, and primary links;
- bilingual analysis: summary, problem, method, results, limitations, and reading value;
- learning structure: themes, keywords, difficulty, prerequisites, related papers, and reading-path positions;
- recursive-improvement loop: feedback source, updated object, update mechanism, and success signal;
- provenance: evidence status, checked sections, verification date, and evidence URLs.

论文记录位于 `src/content/papers/*.md`。每条记录必须同时包含来源身份、中英双语分析、学习结构、自我改进闭环字段与证据溯源信息。英文论文标题必须保持原文，不做翻译替换；中文标题作为辅助字段提供。

## Add or revise a paper · 新增或修订论文

1. Start from an existing record in `src/content/papers/` and assign a unique stable ID and `sourceIndex`.
2. Preserve the workshop's English title exactly; add a concise Chinese title and complete both language versions of every analytical field.
3. Link primary sources such as OpenReview, arXiv, the authors' project page, or the official code repository.
4. Choose the evidence level truthfully and list the sections and sources actually checked.
5. Add theme, difficulty, prerequisite, relationship, and reading-path metadata only when supported by the paper's content.
6. Run `npm run test:unit` and `npm run validate:corpus`; for release changes, also run the production build and browser suite.

贡献内容时，请保持研讨会英文标题原样，补全所有中英文字段，只引用论文、OpenReview、arXiv、作者项目页和官方代码仓库等一手来源，并如实标注核对深度。不要根据标题或二手介绍推断实验结论。

## Deployment · 部署

Pushing to `main` runs unit tests, strict corpus validation, production browser checks, and the Astro build before GitHub Pages deployment. The workflow uses only `contents: read`, `pages: write`, and `id-token: write` permissions.

推送到 `main` 后，GitHub Actions 会依次执行测试、110 篇严格语料校验、生产环境浏览器检查和 Astro 构建，全部通过后才发布到 GitHub Pages。

## Attribution · 说明

This is an independent navigation and study project, not the official workshop website. Paper titles, author names, and linked research remain the property of their respective authors and publishers. The bilingual summaries and taxonomy are editorial guidance and should not replace reading the primary papers.

这是一个独立的论文导航与学习项目，并非研讨会官方网站。双语摘要和分类属于导读内容，不能替代阅读原论文。
