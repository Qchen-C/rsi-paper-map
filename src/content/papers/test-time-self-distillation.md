---
title: "Test-Time Self-Distillation"
titleZh: "测试时自蒸馏"
authors: ["Jonas Hübotter", "Frederike Lübeck", "Lejs Behric", "Anton Baumann", "Marco Bagatella", "Daniel Marta", "Ido Hakimi", "Idan Shenfeld", "Thomas Kleine Buening", "Carlos Guestrin", "Andreas Krause"]
presentation: "spotlight"
year: 2026
sourceIndex: 20
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=iEmRSwdzyw"}]
themes: ["test-time-learning-inference-scaling", "self-play-synthetic-data-curriculum", "agents-tools-code-evolution"]
keywords: ["test-time training", "self-distillation", "SDPO", "binary rewards", "credit assignment"]
difficulty: "advanced"
prerequisites: ["policy optimization", "knowledge distillation", "test-time training", "language-model log probabilities"]
readingPaths: []
relatedPapers: ["ace-code-evolution", "agent0", "contextual-drag"]
readNext: ["ace-code-evolution", "agent0"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=iEmRSwdzyw"]
summaryEn: "Test-Time Self-Distillation enables a model to keep learning from rich feedback during a difficult binary-reward search. Self-Distillation Policy Optimization (SDPO) treats the same model, conditioned on feedback, as a teacher for the model that produced the original attempt."
summaryZh: "测试时自蒸馏让模型在困难的二元奖励搜索中持续从丰富反馈学习。Self-Distillation Policy Optimization（SDPO）把看到反馈后的同一个模型当作教师，指导生成原始尝试时的模型。"
problemEn: "On hard tasks, a binary reward arrives only after a correct solution is found, so hill climbing has no signal and repeatedly placing all past failures in context eventually exceeds the context window."
problemZh: "在困难任务上，二元奖励只有找到正确解时才出现，因此爬山式优化缺少信号；不断把过去失败全部塞入上下文也终会超出上下文窗口。"
methodEn: "After an attempt receives environment feedback, the policy is run again as a feedback-conditioned self-teacher. Differences between teacher and student next-token distributions provide dense token-level credit, and a stop-gradient distillation objective writes those insights back into the policy without sampling a separate teacher response."
methodZh: "一次尝试获得环境反馈后，同一策略以“看到反馈”的条件再次前向计算，作为自教师。教师与学生的下一 token 分布差异提供稠密 token 级归因，并通过停止梯度的蒸馏目标把这些信息写回策略，无需另采样教师答案。"
resultsEn: "On very hard LiveCodeBench problems where the base model's pass@64 is below 0.03, the public paper reports that test-time SDPO needs three times fewer attempts to discover a solution than best-of-k and multi-turn sampling."
resultsZh: "在基础模型 pass@64 低于 0.03 的极难 LiveCodeBench 题目上，公开论文报告测试时 SDPO 相比 best-of-k 与多轮采样只需三分之一的尝试次数即可发现解。"
limitationsEn: "The method assumes feedback makes the model a meaningfully better teacher and requires parameter updates at test time. Misleading feedback or a weak feedback-conditioned policy can create incorrect dense supervision and drift."
limitationsZh: "该方法假设反馈能让模型成为明显更好的教师，并要求测试时更新参数；误导性反馈或能力不足的反馈条件策略可能产生错误的稠密监督并导致漂移。"
whyReadEn: "It converts transient in-context feedback into persistent weights, directly addressing how a recursive agent can learn across more attempts than its context can hold."
whyReadZh: "它把短暂的上下文反馈转成持久参数，直接回答递归智能体如何跨越上下文容量、从更多次尝试中学习。"
feedbackSource: "Rich environment feedback from failed attempts, such as compiler or runtime messages"
updatedObject: "The language-model policy used for subsequent test-time attempts"
updateMechanism: "Feedback-conditioned next-token self-distillation with SDPO"
successSignal: "Fewer attempts required to discover a correct solution on binary-reward tasks"
loopSummaryEn: "Attempt a solution → receive feedback → re-score the attempt with a feedback-conditioned self-teacher → distill token-level corrections → attempt again."
loopSummaryZh: "尝试求解 → 获得反馈 → 用反馈条件自教师重新评估原尝试 → 蒸馏 token 级修正 → 再次尝试。"
---

Evidence note: the public workshop paper was checked. The card is marked abstract-checked because the complete introduction, method, experiments, and conclusion were not all audited for this corpus pass.

证据说明：已核对公开研讨会论文。本轮尚未逐段审计完整引言、方法、实验与结论，因此仍标记为“摘要已核对”。
