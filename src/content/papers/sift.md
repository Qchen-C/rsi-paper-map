---
title: "Self-Improvement via Fast Tree-search"
titleZh: "通过快速树搜索实现自我改进"
authors: ["Xinghong Fu", "Aravinth Kulanthaivelu", "Yutaro Yamada"]
presentation: "poster"
year: 2026
sourceIndex: 97
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=wZMNXHPYcO"},{"kind":"arxiv","url":"https://arxiv.org/abs/2609.19526"}]
themes: ["agents-tools-code-evolution", "test-time-learning-inference-scaling", "verification-evaluation-safety"]
keywords: ["agent self-modification", "tree search", "LLM judge", "patch ranking", "evaluation efficiency"]
difficulty: "advanced"
prerequisites: ["coding agents", "tree search", "LLM-as-a-judge", "software benchmarks"]
readingPaths: []
relatedPapers: ["simple-code-evolution-baselines", "autoharness", "duel-evolve"]
readNext: ["simple-code-evolution-baselines", "autoharness"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=wZMNXHPYcO", "https://arxiv.org/abs/2609.19526"]
summaryEn: "SIFT reduces the main cost of coding-agent self-improvement by using a cheap LLM judge to prioritize candidate implementation patches. Only promising tree nodes receive expensive downstream benchmark evaluation."
summaryZh: "SIFT 用低成本 LLM 裁判优先排序候选实现补丁，降低编程智能体自我改进的主要成本；只有有希望的树节点才接受昂贵下游基准评测。"
problemEn: "Evaluating every self-modification on a benchmark suite can cost thousands of dollars and hundreds of CPU hours, making open-ended agent evolution inaccessible."
problemZh: "让每个自我修改都跑完整基准可能花费数千美元和数百 CPU 小时，使开放式智能体演化难以普及。"
methodEn: "The workshop system diagnoses prior failures, generates patches, ranks them with an LLM judge, and fully evaluates only the top candidates in a lightweight tree search. The later arXiv version uses pairwise judgments and regularized Bradley–Terry strengths."
methodZh: "工作坊版本先诊断既往失败、生成补丁、用 LLM 裁判排序，再在轻量树搜索中只完整评估头部候选；后续 arXiv 版本改用成对判断与正则化 Bradley–Terry 强度。"
resultsEn: "The workshop paper reports more than 11% improvement for gpt-5-mini on a SWE-bench subset in fewer than three self-improvement steps, under $25 and within 15 CPU hours."
resultsZh: "工作坊论文报告：gpt-5-mini 在 SWE-bench 子集上不到三轮自我改进便提升超过 11%，总成本低于 25 美元、耗时不超过 15 CPU 小时。"
limitationsEn: "Judge rankings can reject unconventional but effective patches or favor plausible-looking code. The strongest judge may exceed the coding backbone, so the loop is not purely self-evaluated."
limitationsZh: "裁判排序可能淘汰非常规但有效的补丁，或偏爱看似合理的代码；最强裁判可能强于编程骨干，因此闭环并非完全自我评估。"
whyReadEn: "It treats evaluation budget as the scarce resource in recursive improvement and offers a practical rank-first, verify-later architecture."
whyReadZh: "它把评测预算视为递归改进中的稀缺资源，并给出“先排序、后验证”的实用架构。"
feedbackSource: "LLM judgments for cheap ranking plus downstream benchmark outcomes for selected patches"
updatedObject: "The coding agent's prompts, tools, error handling, and implementation"
updateMechanism: "Diagnosis-driven patch generation inside judge-guided tree search"
successSignal: "Higher benchmark performance per dollar and CPU hour of candidate evaluation"
loopSummaryEn: "Inspect failures → propose patches → cheaply rank candidates → fully test the best → expand the winning agent."
loopSummaryZh: "检查失败 → 提出补丁 → 低成本排序候选 → 完整测试最佳项 → 扩展胜出智能体。"
---

Evidence note: the workshop paper was checked. A later arXiv version expands the judge signal into pairwise comparisons and a disaggregated Bradley–Terry-guided search; the English title remains unchanged.

证据说明：已核对工作坊论文；后续 arXiv 版本把裁判信号扩展为成对比较和基于 Bradley–Terry 的解耦搜索，英文标题未变。
