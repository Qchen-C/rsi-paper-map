---
title: "Unlocking Intrinsic Self-Reflection for LLM Preference Policy Optimization"
titleZh: "释放内在自我反思：面向大模型偏好策略优化"
authors: ["Yu Li", "Tian Lan", "Zhengling Qi"]
presentation: "poster"
year: 2026
sourceIndex: 43
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=0ZGL40jRKE"},{"kind":"arxiv","url":"https://arxiv.org/abs/2512.23126"}]
themes: ["foundations-recursive-computation", "self-play-synthetic-data-curriculum", "verification-evaluation-safety"]
keywords: ["preference optimization", "DPO", "self-reflection", "cross-conditioning", "alignment"]
difficulty: "advanced"
prerequisites: ["direct preference optimization", "RLHF", "pairwise preference models", "KL regularization"]
readingPaths: []
relatedPapers: ["self-evolving-rubrics", "gasp", "reasoning-decision-pivots"]
readNext: ["self-evolving-rubrics", "reasoning-decision-pivots"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=0ZGL40jRKE", "https://arxiv.org/abs/2512.23126"]
summaryEn: "Intrinsic Self-reflective Preference Optimization (InSPO) trains a policy to contrast preferred and rejected responses by cross-conditioning each on its alternative. The comparison is distilled into an ordinary deployment policy with no extra inference step."
summaryZh: "内在自反思偏好优化（InSPO）让策略把优选与拒绝回答互作上下文进行对照学习，再把这种比较能力蒸馏到普通部署策略中，不增加推理步骤。"
problemEn: "Standard DPO-like objectives can depend on arbitrary scalarization and reference-policy choices, and they evaluate each response independently instead of using the comparative information already present in preference pairs."
problemZh: "标准 DPO 类目标会受任意标量化函数和参考策略影响，而且孤立地评价每个回答，没有充分利用偏好对中现成的比较信息。"
methodEn: "During training, the preferred response is modeled while seeing the rejected response and vice versa. A maximum-likelihood stage then distills the cross-conditioned self-reflection into a context-only policy for normal inference."
methodZh: "训练时，模型在看到拒绝回答的条件下学习优选回答，并反向进行对称建模；随后用最大似然把交叉条件下的反思能力蒸馏到仅依赖原始上下文的策略。"
resultsEn: "The paper proves optimality and invariance properties under its preference framework and reports consistent gains in win rates and length-controlled metrics across several DPO-family objectives, with zero additional inference overhead."
resultsZh: "论文在其偏好框架下证明了最优性与不变性，并报告该方法在多种 DPO 系目标上持续提高胜率与长度控制指标，且不增加推理开销。"
limitationsEn: "The theory depends on the stated preference model and the empirical signal remains bounded by the quality and coverage of pairwise data. Cross-conditioning is a training device, not evidence of autonomous introspection."
limitationsZh: "理论结论依赖文中设定的偏好模型，实证效果仍受偏好对质量与覆盖范围限制；交叉条件化是一种训练机制，并不等同于自主内省。"
whyReadEn: "It clarifies how response comparison itself can be turned into a reusable learning signal instead of merely a binary label."
whyReadZh: "它说明了如何把回答之间的比较本身转化为可复用学习信号，而不只是一个二元标签。"
feedbackSource: "Pairwise preferred and rejected responses"
updatedObject: "The aligned language-model policy"
updateMechanism: "Symmetric cross-conditioned preference training followed by policy distillation"
successSignal: "Higher preference win rates without deployment-time comparison overhead"
loopSummaryEn: "Compare a winning and losing response → learn each against its alternative → distill the comparison → deploy the improved policy."
loopSummaryZh: "比较优选与拒绝回答 → 互作上下文学习 → 蒸馏比较能力 → 部署改进策略。"
---

Evidence note: the workshop manuscript and current arXiv abstract were checked.

证据说明：已核对工作坊稿件与当前 arXiv 摘要。
