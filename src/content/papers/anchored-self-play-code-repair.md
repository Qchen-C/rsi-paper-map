---
title: "Anchored Self-Play for Code Repair"
titleZh: "用于代码修复的锚定自博弈"
authors: ["Caroline Choi", "Zeyneb N. Kaya", "Shirley Wu", "Tengyu Ma", "Tatsunori Hashimoto", "Ludwig Schmidt"]
presentation: "spotlight"
year: 2026
sourceIndex: 22
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=lTbBFAoPSA"},{"kind":"arxiv","url":"https://arxiv.org/abs/2607.03523"}]
themes: ["self-play-synthetic-data-curriculum", "agents-tools-code-evolution", "verification-evaluation-safety"]
keywords: ["code repair", "self-play", "distribution drift", "unit tests", "BugSourceBench"]
difficulty: "advanced"
prerequisites: ["program repair", "reinforcement learning", "unit-test verification", "representation similarity"]
readingPaths: []
relatedPapers: ["ace-code-evolution", "gasp", "agent0"]
readNext: ["ace-code-evolution", "gasp"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=lTbBFAoPSA", "https://proceedings.mlr.press/v306/choi26f.html"]
summaryEn: "Anchored Self-Play trains one model to alternate between creating bugs and repairing them, but uses a small set of real bugs to prevent the synthetic curriculum from drifting toward unrealistic failure modes."
summaryZh: "Anchored Self-Play 让同一模型交替制造 bug 与修复 bug，同时用一小组真实 bug 作为锚点，防止合成课程漂移到不现实的失败模式。"
problemEn: "Unit tests can certify that code fails and that a repair passes, but they cannot tell whether a generated bug resembles errors encountered in practice. Standard self-play can therefore improve on its own synthetic distribution while getting worse on human bugs."
problemZh: "单元测试能验证代码是否失败、修复是否通过，却无法判断生成 bug 是否像现实错误；标准自博弈因此可能只在自身合成分布上变强，却在人类 bug 上退化。"
methodEn: "A generator edits correct code into test-failing bugs and a fixer repairs them, creating an automatic curriculum. ASP adds an embedding-similarity reward that steers generated bugs toward a small reference set and mixes reference bugs into fixer training."
methodZh: "生成器把正确代码改成测试失败的 bug，修复器再修复它们，形成自动课程。ASP 通过嵌入相似度奖励把生成 bug 拉向小型参考集，并在修复器训练中混入参考 bug。"
resultsEn: "On BugSourceBench, ASP improves average fix rate over standard self-play by 25% relative, or 7.2 percentage points absolute. Reported gains include 11 points on LM-originated bugs and 3.4 points on human-authored bugs."
resultsZh: "在 BugSourceBench 上，ASP 相对标准自博弈的平均修复率提升 25%，即绝对提升 7.2 个百分点；其中模型来源 bug 提升 11 点，人类编写 bug 提升 3.4 点。"
limitationsEn: "The anchor set must represent the target bug distribution, and embedding similarity is only a proxy for realism. Unit tests may still under-specify intended behavior, so passing repairs are not always semantically correct."
limitationsZh: "锚点集合必须代表目标 bug 分布，而嵌入相似度只是现实性的代理；单元测试仍可能无法完整表达预期行为，因此通过测试的修复不一定语义正确。"
whyReadEn: "It demonstrates a central RSI failure mode—self-generated data drifting away from reality—and a simple way to retain scale without losing grounding."
whyReadZh: "它揭示了 RSI 的核心失败模式之一：自生成数据逐渐脱离现实，并给出兼顾规模与现实锚定的简单办法。"
feedbackSource: "Unit-test outcomes plus similarity to a small reference set of realistic bugs"
updatedObject: "The shared bug generator and code fixer policy"
updateMechanism: "Reinforcement learning with similarity-shaped generation and reference-mixed repair training"
successSignal: "Higher repair rates across human, human-edited, and LM-originated bug sources"
loopSummaryEn: "Generate a bug → verify that tests fail → repair it → verify that tests pass → anchor both generation and training to real bugs → repeat."
loopSummaryZh: "生成 bug → 验证测试失败 → 修复 → 验证测试通过 → 用真实 bug 锚定生成与训练 → 重复。"
---

Evidence note: the public ICLR paper and the ICML 2026 proceedings abstract were checked.

证据说明：已核对公开 ICLR 论文与 ICML 2026 论文集摘要。
