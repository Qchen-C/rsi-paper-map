---
title: "Learning to Evolve: Scaling Open-Ended Discovery with Relative-Progress RL"
titleZh: "学会演化：用相对进步强化学习扩展开放式发现"
authors: ["Xuan Li", "Zhanke Zhou", "Zongze Li", "Jiangchao Yao", "Bo Han"]
presentation: "poster"
year: 2026
sourceIndex: 73
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=WnZHbe1Gu0"}]
themes: ["scientific-discovery-applications", "self-play-synthetic-data-curriculum", "test-time-learning-inference-scaling"]
keywords: ["open-ended discovery", "relative progress", "molecular optimization", "credit assignment", "iterative refinement"]
difficulty: "advanced"
prerequisites: ["reinforcement learning", "policy gradients", "molecular optimization", "credit assignment"]
readingPaths: []
relatedPapers: ["gasp", "discovery-to-application-loop", "adaptive-meta-curriculum"]
readNext: ["discovery-to-application-loop", "protein-expertise-evolution"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=WnZHbe1Gu0"]
summaryEn: "Learning to Evolve trains the refinement process itself. It rewards each turn for improving over the initial candidate and rewards whole trajectories for accumulating progress, rather than judging only the final molecule."
summaryZh: "Learning to Evolve 训练的是“如何改进”的过程本身。它按每轮相对初始候选的提升给奖励，也按整条轨迹累计进步给奖励，而不是只评价最终分子。"
problemEn: "Prompt-only evolution is unreliable, while outcome-only RL assigns weak credit across a multi-turn search and may learn lucky endpoints rather than a stable improvement policy."
problemZh: "仅靠提示的演化不稳定，而只看最终结果的 RL 难以在多轮搜索中分配信用，可能学到幸运终点而非稳定改进策略。"
methodEn: "Per-turn evaluator scores produce a turn advantage relative to the initial solution and a trajectory advantage from accumulated improvements. Their combination trains an iterative policy aligned with progress across both time and candidate paths."
methodZh: "每轮评估分数产生相对初始解的轮次优势，累计提升产生轨迹优势；二者结合，训练在时间与候选路径上都对齐进步的迭代策略。"
resultsEn: "On molecular-optimization tasks, LtE produces higher-quality candidates than training-free evolution and standard RLVR under the same budgets, and continues benefiting from more test-time evolution."
resultsZh: "在分子优化任务上，LtE 在相同预算下生成比无训练演化与标准 RLVR 更高质量的候选，并能继续从更多测试时演化中获益。"
limitationsEn: "Relative progress can reward local gains that lead away from global optima, and reliable per-turn molecular evaluators remain expensive proxies. Evidence is limited to selected optimization tasks."
limitationsZh: "相对进步可能奖励把搜索带离全局最优的局部收益，可靠的逐轮分子评估器仍是昂贵代理；证据也局限于特定优化任务。"
whyReadEn: "It offers a useful reward-design principle for any long improvement loop: supervise the direction and persistence of progress, not only the endpoint."
whyReadZh: "它为所有长程改进闭环提供了有用奖励原则：监督进步的方向与持续性，而不只看终点。"
feedbackSource: "Per-turn evaluator scores over evolving molecular candidates"
updatedObject: "The policy that proposes iterative candidate refinements"
updateMechanism: "Relative-progress RL with turn-wise and trajectory-wise advantages"
successSignal: "Consistent score improvement across turns and stronger final candidates"
loopSummaryEn: "Propose a candidate → score relative progress → refine → accumulate trajectory credit → update the evolution policy."
loopSummaryZh: "提出候选 → 评估相对进步 → 修正 → 累积轨迹信用 → 更新演化策略。"
---

Evidence note: the published workshop paper was checked.

证据说明：已核对正式工作坊论文。
