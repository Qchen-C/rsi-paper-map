---
title: "Actor-Curator: Scalable Policy-driven Curriculum Learning for RL Post-Training"
titleZh: "Actor-Curator：面向强化学习后训练的可扩展策略驱动课程学习"
authors: ["Zhengyao Gu", "Jonathan Light", "Raul Astudillo", "Ziyu Ye", "Langzhou He", "Henry Peng Zou", "Wei Cheng", "Santiago Paternain", "Philip S. Yu", "Yisong Yue"]
presentation: "poster"
year: 2026
sourceIndex: 57
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=JYJXWnujvR"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.20532"},{"kind":"code","url":"https://github.com/actor-curator/actor-curator"}]
themes: ["self-play-synthetic-data-curriculum", "test-time-learning-inference-scaling", "foundations-recursive-computation"]
keywords: ["curriculum learning", "RL post-training", "non-stationary bandit", "problem selection", "policy improvement"]
difficulty: "advanced"
prerequisites: ["reinforcement learning", "multi-armed bandits", "online mirror descent", "curriculum learning"]
readingPaths: []
relatedPapers: ["adaptive-meta-curriculum", "soar", "language-self-play"]
readNext: ["adaptive-meta-curriculum", "soar"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=JYJXWnujvR", "https://arxiv.org/abs/2602.20532", "https://github.com/actor-curator/actor-curator"]
summaryEn: "Actor-Curator learns a neural curriculum policy that selects which problems an RL actor should train on next. Selection is optimized for expected policy improvement rather than static difficulty or uniform sampling."
summaryZh: "Actor-Curator 学习一个神经课程策略，决定强化学习 actor 下一步应训练哪些问题；选择目标是预期策略提升，而非静态难度或均匀采样。"
problemEn: "Large heterogeneous problem banks contain redundant, stale, and mismatched examples, while the most useful training distribution changes as the actor improves."
problemZh: "大型异构题库包含冗余、过时和难度不匹配的样例，而且随着 actor 变强，最有用的训练分布也会不断变化。"
methodEn: "Problem selection is formulated as a non-stationary stochastic bandit. The curator observes partial feedback on actor improvement and is trained with an online mirror-descent-derived objective to adapt its sampling policy."
methodZh: "论文把问题选择建模为非平稳随机 bandit；curator 根据 actor 改进的部分反馈，通过由在线镜像下降推导的目标更新采样策略。"
resultsEn: "Across reasoning benchmarks, the method is more stable and efficient than uniform and learned baselines, with relative gains of 28.6% on AIME2024 and 30.5% on ARC-1D plus speedups up to 80%."
resultsZh: "在多项推理基准上，该方法比均匀采样与学习式基线更稳定高效；相对最强基线，AIME2024 提升 28.6%，ARC-1D 提升 30.5%，最高加速 80%。"
limitationsEn: "Estimated short-term policy improvement may not align with long-term generalization, and bandit feedback is noisy and expensive. The curator can over-focus on benchmark-specific learnability."
limitationsZh: "估计的短期策略提升未必等同于长期泛化，bandit 反馈也有噪声且昂贵；curator 可能过度聚焦基准特定的可学习性。"
whyReadEn: "It makes curriculum selection an adaptive co-evolving policy instead of a preprocessing decision made once before training."
whyReadZh: "它把课程选择变成与 actor 共同演化的自适应策略，而不是训练前一次性做出的预处理决定。"
feedbackSource: "Observed actor performance differences after training on selected problems"
updatedObject: "The curator's sampling policy and the actor's task policy"
updateMechanism: "Policy-improvement bandit learning under partial feedback"
successSignal: "More actor improvement per sampled problem and training step"
loopSummaryEn: "Curator selects problems → actor trains → estimate policy improvement → reward the curator → adapt the next curriculum."
loopSummaryZh: "curator 选题 → actor 训练 → 估计策略提升 → 奖励 curator → 调整下一轮课程。"
---

Evidence note: the workshop paper, later arXiv version, and official repository were checked; the workshop title is retained.

证据说明：已核对工作坊论文、后续 arXiv 版本与官方仓库；本站保留工作坊标题。
