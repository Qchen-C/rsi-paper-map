---
title: "SAHOO: Safeguarded Alignment for High-Order Optimization Objectives in Recursive Self-Improvement"
titleZh: "SAHOO：递归自我改进中高阶优化目标的安全对齐"
authors: ["Subramanyam Sahoo", "Aman Chadha", "Vinija Jain", "Divya Chaudhary"]
presentation: "poster"
year: 2026
sourceIndex: 95
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=OAFPpQO0H9"},{"kind":"code","url":"https://github.com/SubramanyamSahoo/SAHOO-in-Recursive-Self-Improvement"}]
themes: ["verification-evaluation-safety", "foundations-recursive-computation"]
keywords: ["alignment drift", "recursive self-improvement", "constraint preservation", "regression risk", "multi-objective optimization"]
difficulty: "intermediate"
prerequisites: ["AI alignment", "multi-objective optimization", "distribution shift", "iterative refinement"]
readingPaths: []
relatedPapers: ["self-evolving-rubrics", "verifying-the-verifiers", "world-action-verifier"]
readNext: ["verifying-the-verifiers", "self-evolving-rubrics"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=OAFPpQO0H9", "https://github.com/SubramanyamSahoo/SAHOO-in-Recursive-Self-Improvement"]
summaryEn: "SAHOO monitors iterative improvement with a learned Goal Drift Index, hard constraint checks, and regression-risk estimates. It treats capability gain and alignment preservation as a measured frontier rather than one undifferentiated score."
summaryZh: "SAHOO 用学习到的目标漂移指数、硬约束检查和回归风险估计监控迭代改进，把能力提升与对齐保持视为需要测量的前沿，而不是一个混合分数。"
problemEn: "Repeated self-revision can improve target performance while quietly changing meaning, violating safety invariants, or undoing abilities gained in earlier cycles."
problemZh: "反复自我修改可能提升目标性能，却悄然改变语义、违反安全不变量，或破坏先前周期已经获得的能力。"
methodEn: "GDI combines semantic, lexical, structural, and distributional drift signals. Constraint checks reject critical violations, while regression analysis identifies when a candidate sacrifices prior gains."
methodZh: "目标漂移指数综合语义、词汇、结构与分布信号；约束检查拒绝关键违规，回归分析识别候选是否牺牲已有收益。"
resultsEn: "Across 189 code, math, and truthfulness tasks, SAHOO reports quality gains including 18.3% for code and 16.8% for reasoning while preserving constraints in two domains and keeping truthfulness violations low."
resultsZh: "在 189 个代码、数学和真实性任务上，SAHOO 报告代码质量提升 18.3%、推理提升 16.8%，同时在两个领域保持约束，并维持较低真实性违规率。"
limitationsEn: "Thresholds are calibrated on only 18 validation tasks and three cycles, so long-horizon drift remains uncertain. Chosen metrics and constraints may miss harms that are difficult to formalize."
limitationsZh: "阈值只在 18 个验证任务和三个周期上校准，长期漂移仍不确定；预设指标与约束也可能漏掉难以形式化的风险。"
whyReadEn: "It turns 'stay aligned while improving' into an operational monitoring problem and shows why later improvement cycles may carry rising alignment cost."
whyReadZh: "它把“改进时保持对齐”转成可操作的监控问题，并展示为何越后期的改进周期可能付出更高对齐成本。"
feedbackSource: "Capability metrics, multi-signal drift estimates, invariant checks, and regression tests"
updatedObject: "Candidate outputs or policies produced across recursive refinement cycles"
updateMechanism: "Accept, flag, or constrain revisions using drift and regression safeguards"
successSignal: "Capability gains that remain inside calibrated alignment and constraint bounds"
loopSummaryEn: "Propose an improvement → measure capability and drift → check constraints and regressions → accept or reject → repeat."
loopSummaryZh: "提出改进 → 测量能力与漂移 → 检查约束和回归 → 接受或拒绝 → 重复。"
---

Evidence note: the accepted workshop paper and official code repository were checked.

证据说明：已核对接收的工作坊论文与官方代码仓库。
