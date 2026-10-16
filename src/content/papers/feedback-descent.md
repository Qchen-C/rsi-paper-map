---
title: "Feedback Descent: Open-Ended Text Optimization via Pairwise Comparison"
titleZh: "反馈下降：通过成对比较进行开放式文本优化"
authors: ["Yoonho Lee", "Joseph Boen", "Chelsea Finn"]
presentation: "poster"
year: 2026
sourceIndex: 88
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=A0dlCcZ4hT"},{"kind":"arxiv","url":"https://arxiv.org/abs/2511.07919"}]
themes: ["agents-tools-code-evolution", "test-time-learning-inference-scaling"]
keywords: ["textual feedback", "pairwise comparison", "artifact optimization", "in-context learning", "molecule discovery"]
difficulty: "intermediate"
prerequisites: ["in-context learning", "preference optimization", "iterative refinement", "LLM-as-a-judge"]
readingPaths: []
relatedPapers: ["duel-evolve", "reasoning-as-gradient", "textbo"]
readNext: ["reasoning-as-gradient", "duel-evolve"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=A0dlCcZ4hT", "https://arxiv.org/abs/2511.07919"]
summaryEn: "Feedback Descent pairs each preference comparison with a textual critique explaining how to improve. The generator uses this high-bandwidth signal as a gradient-like direction to edit prompts, code, or molecular strings entirely at inference time."
summaryZh: "反馈下降在每次偏好比较中同时生成文字批评，说明应如何改进；生成器把这种高带宽信号当作类似梯度的方向，在纯推理阶段修改提示、代码或分子字符串。"
problemEn: "Scalar or binary feedback says which candidate is better but discards why, creating an information bottleneck for optimization in large open-ended text spaces."
problemZh: "标量或二元反馈只说明哪个候选更好，却丢失原因，因而在巨大的开放式文本空间中形成优化信息瓶颈。"
methodEn: "At each iteration an evaluator compares a new proposal with the incumbent and returns both a preference and structured rationale. The generator conditions on accumulated feedback to make targeted edits without changing weights."
methodZh: "每轮由评估器比较新提案与当前最佳项，同时返回偏好和结构化理由；生成器依据累积反馈作定向修改，不更新模型权重。"
resultsEn: "Across visual design, prompt optimization, and molecule discovery, the method matches or exceeds specialized baselines. On DOCKSTRING it finds novel drug-like molecules above the 99.9th percentile of more than 260,000 compounds for six targets."
resultsZh: "在视觉设计、提示优化与分子发现任务中，该方法匹配或超过专用基线；在 DOCKSTRING 上，它为六个靶点找到超过 26 万余化合物数据库 99.9 百分位的新型类药分子。"
limitationsEn: "Textual critiques can be persuasive but wrong, evaluation quality remains task-dependent, and long feedback histories increase cost and context pressure. Molecular benchmark scores are not experimental validation."
limitationsZh: "文字批评可能看似有理却是错误的，评估质量仍依赖任务，长反馈历史也增加成本与上下文压力；分子基准分数不等于实验验证。"
whyReadEn: "It shows why preserving explanatory feedback can outperform compressing supervision into a scalar and provides a general edit loop spanning very different artifacts."
whyReadZh: "它说明保留解释性反馈为何可能优于把监督压成一个标量，并提供了跨越多种产物的通用修改闭环。"
feedbackSource: "Pairwise preference accompanied by a structured natural-language critique"
updatedObject: "The current best text-encoded artifact"
updateMechanism: "In-context generation of targeted edits from accumulated critiques"
successSignal: "A new artifact preferred by the evaluator and stronger on task-specific metrics"
loopSummaryEn: "Propose a candidate → compare with the incumbent → explain the difference → edit in the suggested direction → compare again."
loopSummaryZh: "提出候选 → 与当前最佳项比较 → 解释差异 → 沿建议方向修改 → 再次比较。"
---

Evidence note: the workshop paper and current arXiv abstract were checked.

证据说明：已核对工作坊论文与当前 arXiv 摘要。
