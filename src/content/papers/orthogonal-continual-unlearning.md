---
title: "Orthogonal Gradient Projection for Continual LLM Unlearning"
titleZh: "面向大语言模型持续遗忘的正交梯度投影"
authors: ["Juan Belieni", "Ana Carolina Erthal", "Eliezer da Silva de Souza", "Diego Mesquita"]
presentation: "short"
year: 2026
sourceIndex: 110
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=lb6Ce20kl5"}]
themes: ["memory-continual-adaptation", "verification-evaluation-safety"]
keywords: ["continual unlearning", "gradient interference", "orthogonal projection", "negative preference optimization", "TOFU"]
difficulty: "advanced"
prerequisites: ["machine unlearning", "preference optimization", "continual learning", "linear algebra"]
readingPaths: []
relatedPapers: ["reference-guided-unlearning", "munkey", "sahoo"]
readNext: ["reference-guided-unlearning", "munkey"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=lb6Ce20kl5"]
summaryEn: "Orthogonal Negative Preference Optimization caches a low-rank subspace of gradients from earlier deletion requests and projects each new unlearning update away from it. The goal is to forget new targets without undoing prior forgetting or eroding utility."
summaryZh: "正交负偏好优化缓存此前删除请求的低秩梯度子空间，并把每个新遗忘更新投影到其正交补；目标是在忘记新目标时不破坏既有遗忘，也不持续侵蚀效用。"
problemEn: "Sequential deletion requests create gradient interference: a new forgetting update can restore previously removed behavior or cause cascading damage to unrelated capabilities."
problemZh: "连续删除请求会产生梯度干扰：新的遗忘更新可能恢复此前已删除行为，或对无关能力造成级联损害。"
methodEn: "ONPO stores representative gradients from past unlearning objectives, builds a compact subspace, and removes from the current preference gradient any component aligned with that history before updating."
methodZh: "ONPO 保存过去遗忘目标的代表性梯度，构建紧凑子空间，并在更新前从当前偏好梯度中移除与历史子空间同向的分量。"
resultsEn: "On continual TOFU unlearning, ONPO improves the trade-off between Forget Quality and Model Utility over gradient-ascent and standard NPO baselines."
resultsZh: "在持续 TOFU 遗忘设置上，ONPO 相比梯度上升和标准 NPO 基线改善了遗忘质量与模型效用之间的权衡。"
limitationsEn: "First-order orthogonality does not guarantee old behavior remains forgotten after nonlinear parameter updates. The cached subspace grows or must be compressed, and evidence is limited to one benchmark setting."
limitationsZh: "一阶正交性不能保证非线性参数更新后旧行为仍被遗忘；缓存子空间会增长或必须压缩，证据也局限于一个基准设置。"
whyReadEn: "It connects machine unlearning with continual-learning stability and gives a lightweight geometric rule for handling deletion requests over time."
whyReadZh: "它把机器遗忘与持续学习稳定性联系起来，为长期处理删除请求给出轻量的几何约束。"
feedbackSource: "Forget-quality and retain-utility objectives for successive deletion requests"
updatedObject: "LLM parameters under preference-based unlearning"
updateMechanism: "Project each new negative-preference gradient orthogonally to cached prior gradients"
successSignal: "New information is forgotten while earlier forgetting and general utility remain stable"
loopSummaryEn: "Receive a deletion request → compute its unlearning gradient → remove interference with cached requests → update → cache the new direction."
loopSummaryZh: "接收删除请求 → 计算遗忘梯度 → 移除与历史请求的干扰 → 更新 → 缓存新方向。"
---

Evidence note: the accepted workshop paper was checked; its public version supplies the author list hidden in the earlier anonymous submission.

证据说明：已核对接收的工作坊论文；公开版本提供了早期匿名稿未显示的作者名单。
