---
title: "Soft Mellowmax Monte Carlo Planning"
titleZh: "软 Mellowmax 蒙特卡洛规划"
authors: ["Danilo Vucetic", "Gauthier Gidel"]
presentation: "poster"
year: 2026
sourceIndex: 83
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=SeZCSEGZTq"}]
themes: ["foundations-recursive-computation", "test-time-learning-inference-scaling"]
keywords: ["Monte Carlo tree search", "soft mellowmax", "regularized reinforcement learning", "robust planning", "convergence"]
difficulty: "advanced"
prerequisites: ["Monte Carlo tree search", "Q-learning", "regularized reinforcement learning", "convergence analysis"]
readingPaths: []
relatedPapers: ["unrolled-policy-iteration", "adaptive-decoding-policy", "scaling-law-discovery"]
readNext: ["unrolled-policy-iteration", "adaptive-decoding-policy"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=SeZCSEGZTq"]
summaryEn: "SMM-TS brings the soft mellowmax operator from Q-learning into Monte Carlo tree search. The resulting planner aims to combine fast convergence with diverse, robust decisions for recursive improvement loops."
summaryZh: "SMM-TS 把 Q 学习中的 soft mellowmax 算子引入蒙特卡洛树搜索，目标是在递归改进闭环中同时获得快速收敛、多样决策与鲁棒性。"
problemEn: "Standard tree search can converge slowly and its optimal policies may be brittle under reward or dynamics changes; existing convex-regularized variants impose restrictive assumptions."
problemZh: "标准树搜索可能收敛缓慢，其最优策略面对奖励或动力学变化时也较脆弱；已有凸正则化变体又依赖较强假设。"
methodEn: "The method integrates a non-convex soft mellowmax backup into the convex-regularized tree-search framework and supplies a convergence proof based on operator smoothness."
methodZh: "该方法把非凸 soft mellowmax 备份算子整合进正则化树搜索框架，并依据算子光滑性给出收敛证明。"
resultsEn: "SMM-TS converges significantly faster than comparison tree-search methods in synthetic environments while remaining competitive on games, according to the workshop paper."
resultsZh: "据工作坊论文，SMM-TS 在合成环境中比对比树搜索方法显著更快收敛，同时在游戏任务上保持竞争力。"
limitationsEn: "The strongest convergence evidence comes from controlled synthetic settings, while game results are competitive rather than uniformly superior. Non-convex operator choices and temperature settings add tuning complexity."
limitationsZh: "最强收敛证据来自受控合成环境，游戏结果则是具有竞争力而非全面领先；非凸算子选择与温度设定也增加了调参复杂度。"
whyReadEn: "It connects a precise planning operator to the compute efficiency and robustness of recursive self-improvement, complementing model-centric papers in the collection."
whyReadZh: "它把一个明确的规划算子与递归自我改进的计算效率、鲁棒性联系起来，可补充站内偏模型中心的论文。"
feedbackSource: "Simulated action returns propagated through soft mellowmax tree backups"
updatedObject: "Policy and value estimates stored in the search tree"
updateMechanism: "Repeated SMM-regularized Monte Carlo tree expansion and backup"
successSignal: "Faster convergence to high-return, robust planning decisions"
loopSummaryEn: "Expand the tree → sample outcomes → apply soft mellowmax backups → improve policy estimates → plan again."
loopSummaryZh: "扩展搜索树 → 采样结果 → 执行 soft mellowmax 回传 → 改进策略估计 → 再次规划。"
---

Evidence note: the accepted workshop paper was checked.

证据说明：已核对接收的工作坊论文。
