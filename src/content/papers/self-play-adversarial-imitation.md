---
title: "Your Self-Play Algorithm is Secretly an Adversarial Imitator: Understanding LLM Self-Play through the Lens of Imitation Learning"
titleZh: "你的自博弈算法其实是对抗式模仿者：从模仿学习理解大模型自博弈"
authors: ["Shangzhe Li", "Xuchao Zhang", "Chetan Bansal", "Weitong Zhang"]
presentation: "poster"
year: 2026
sourceIndex: 53
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=rL0GEyoMvE"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.01357"}]
themes: ["foundations-recursive-computation", "self-play-synthetic-data-curriculum"]
keywords: ["self-play", "adversarial imitation learning", "min-max games", "preference alignment", "chi-square divergence"]
difficulty: "advanced"
prerequisites: ["imitation learning", "preference optimization", "game theory", "f-divergences"]
readingPaths: []
relatedPapers: ["language-self-play", "inspo", "gasp"]
readNext: ["language-self-play", "inspo"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=rL0GEyoMvE", "https://arxiv.org/abs/2602.01357"]
summaryEn: "The paper interprets LLM self-play fine-tuning as adversarial imitation learning: the model competes with a regularized implicit reward player that is also parameterized by the model. This unifies self-play imitation with preference alignment."
summaryZh: "论文把大模型自博弈微调解释为对抗式模仿学习：模型与一个同样由模型参数化、带正则的隐式奖励玩家博弈，从而统一自博弈模仿与偏好对齐。"
problemEn: "Self-play can turn weak models into stronger ones without external preference data, but its objectives and convergence behavior have lacked a common theoretical account."
problemZh: "自博弈能在没有外部偏好数据时把弱模型变强，但其目标与收敛行为一直缺少统一理论解释。"
methodEn: "The fine-tuning process is written as a min-max game between a policy and implicit reward player. The analysis establishes equilibrium convergence, then motivates a chi-square-divergence variational objective with bounded rewards for improved stability."
methodZh: "微调过程被写成策略与隐式奖励玩家之间的极小极大博弈。分析给出均衡收敛结论，并据此提出具有有界奖励的卡方散度变分目标以提高稳定性。"
resultsEn: "Experiments across several language-model fine-tuning tasks report consistent improvements over existing self-play methods and support the stability claims of the proposed objective."
resultsZh: "在多项语言模型微调任务上，实验报告该方法持续优于已有自博弈方案，并支持新目标的稳定性主张。"
limitationsEn: "Game-theoretic convergence relies on modeling assumptions and may not predict neural optimization dynamics at scale. The implicit reward can still encode bias or exploit weaknesses in self-generated comparisons."
limitationsZh: "博弈论收敛依赖建模假设，未必能预测大规模神经优化动态；隐式奖励仍可能编码偏差或利用自生成比较中的漏洞。"
whyReadEn: "It gives readers a theoretical map for comparing apparently different self-play and preference-learning algorithms."
whyReadZh: "它为比较看似不同的自博弈与偏好学习算法提供了一张理论地图。"
feedbackSource: "Adversarial comparisons induced by the current model and implicit reward player"
updatedObject: "The language-model policy and its implicit reward player"
updateMechanism: "Min-max self-play optimization with a bounded chi-square variational objective"
successSignal: "Stable convergence and better downstream fine-tuning performance"
loopSummaryEn: "Generate self-play comparisons → update the implicit reward player → imitate preferred behavior → repeat toward equilibrium."
loopSummaryZh: "生成自博弈比较 → 更新隐式奖励玩家 → 模仿更优行为 → 向均衡重复。"
---

Evidence note: the published workshop paper and arXiv abstract were checked.

证据说明：已核对正式工作坊论文与 arXiv 摘要。
