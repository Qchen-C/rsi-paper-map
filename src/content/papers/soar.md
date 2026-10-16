---
title: "Teaching Models to Teach Themselves: Reasoning at the Edge of Learnability"
titleZh: "教会模型自我教学：可学习性边缘的推理"
authors: ["Shobhita Sundaram", "John Quan", "Ariel Kwiatkowski", "Kartik Ahuja", "Yann Ollivier", "Julia Kempe"]
presentation: "poster"
year: 2026
sourceIndex: 48
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=HuLoDnvC29"},{"kind":"arxiv","url":"https://arxiv.org/abs/2601.18778"}]
themes: ["self-play-synthetic-data-curriculum", "test-time-learning-inference-scaling", "foundations-recursive-computation"]
keywords: ["automated curriculum", "meta reinforcement learning", "self-play", "sparse rewards", "reasoning plateau"]
difficulty: "advanced"
prerequisites: ["reinforcement learning", "meta-learning", "curriculum learning", "mathematical reasoning"]
readingPaths: []
relatedPapers: ["adaptive-meta-curriculum", "language-self-play", "gasp"]
readNext: ["adaptive-meta-curriculum", "language-self-play"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2601.18778"]
summaryEn: "SOAR uses a teacher copy of a model to invent stepping-stone problems for a student copy. The teacher is rewarded by measured student improvement on hard target problems, enabling a grounded automated curriculum at the edge of current capability."
summaryZh: "SOAR 让模型的教师副本为学生副本发明铺垫题，并按照学生在困难目标题上的实际进步奖励教师，从而在当前能力边缘形成有落地信号的自动课程。"
problemEn: "Reinforcement learning stalls when the model initially solves almost none of the target problems, leaving sparse binary rewards and no useful gradient for improvement."
problemZh: "当模型一开始几乎解不出目标题时，强化学习只有极稀疏的二元奖励，缺乏可用改进信号，容易停滞。"
methodEn: "A bi-level meta-RL loop has a teacher propose synthetic problems, a student learn from them, and the teacher receive reward based on the student's improvement on a small set of hard targets rather than on intrinsic novelty proxies."
methodZh: "双层元强化学习闭环中，教师生成合成题，学生据此学习；教师获得的奖励来自学生在一小组困难目标题上的实际进步，而非内在新颖度代理。"
resultsEn: "On the hardest mathematical subsets, where initial pass rate is 0 out of 128 attempts, SOAR unlocks learning. Grounded progress rewards avoid instability and diversity collapse better than intrinsic rewards, and useful problems need not have correct teacher solutions."
resultsZh: "在初始 128 次尝试全失败的最难数学子集上，SOAR 仍能启动学习。以真实进步为奖励比内在奖励更能避免不稳定与多样性坍缩，而且教师不必会正确解答自己提出的题。"
limitationsEn: "Bi-level training is computationally expensive, evidence centers on mathematical benchmarks, and optimizing a small hard set can overfit its notion of progress. A teacher can generate useful structure without guaranteeing safe or correct content."
limitationsZh: "双层训练计算昂贵，证据集中在数学基准，并可能过拟合小规模困难集对“进步”的定义；教师能生成有用结构，并不保证内容安全或正确。"
whyReadEn: "It directly addresses the cold-start problem of self-improvement: how to create learnable intermediate challenges when the final task provides no signal."
whyReadZh: "它直面自我改进的冷启动问题：当最终任务不给信号时，如何创造可学习的中间挑战。"
feedbackSource: "Measured student improvement on held-out hard target problems"
updatedObject: "The teacher's curriculum policy and the student's reasoning policy"
updateMechanism: "Bi-level meta-RL over generated stepping-stone problems"
successSignal: "The student begins solving targets that previously yielded zero successes"
loopSummaryEn: "Teacher proposes stepping stones → student trains → test student on hard targets → reward helpful curricula → generate better stepping stones."
loopSummaryZh: "教师提出铺垫题 → 学生训练 → 在困难目标上测试 → 奖励有效课程 → 生成更好的铺垫题。"
---

Evidence note: the workshop entry and current arXiv abstract were checked.

证据说明：已核对工作坊条目与当前 arXiv 摘要。
