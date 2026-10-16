---
title: "Test-Time Meta-Adaptation with Self-Synthesis"
titleZh: "通过自我合成进行测试时元适应"
authors: ["Zeyneb N. Kaya", "Nick Rui"]
presentation: "short"
year: 2026
sourceIndex: 106
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=G0GE1xbR0w"},{"kind":"arxiv","url":"https://arxiv.org/abs/2603.03524"}]
themes: ["test-time-learning-inference-scaling", "self-play-synthetic-data-curriculum"]
keywords: ["meta-learning", "self-synthesis", "test-time training", "bilevel optimization", "synthetic curriculum"]
difficulty: "advanced"
prerequisites: ["meta-learning", "bilevel optimization", "test-time training", "synthetic data"]
readingPaths: []
relatedPapers: ["test-time-self-distillation", "adaptive-meta-curriculum", "iterative-self-generated-training"]
readNext: ["adaptive-meta-curriculum", "test-time-self-distillation"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=G0GE1xbR0w", "https://arxiv.org/abs/2603.03524"]
summaryEn: "MASS learns to generate and score a small synthetic curriculum tailored to each test problem, temporarily updates the model on it, and optimizes the entire behavior for post-update task performance."
summaryZh: "MASS 学会为每个测试问题生成并评分一个小型合成课程，先据此临时更新模型，再以更新后的任务表现优化整套行为。"
problemEn: "Static models face novel domains at inference, while naive self-generated practice examples may be irrelevant or harmful and per-instance supervision is scarce."
problemZh: "静态模型在推理时会遇到新领域，而朴素自生成练习可能无关或有害，每个实例可用的监督又很稀缺。"
methodEn: "An inner loop performs parameter updates on weighted synthetic problem–solution pairs. An outer loop differentiates downstream loss through those updates so the generator and scorer learn which curricula cause useful adaptation."
methodZh: "内循环用加权的合成“问题—解答”对更新参数；外循环把下游损失穿过这些更新反向传播，使生成器与评分器学会哪些课程能带来有效适应。"
resultsEn: "Mathematical-reasoning experiments show that MASS learns problem-specific curricula that provide effective, data-efficient test-time adaptation."
resultsZh: "数学推理实验表明，MASS 能学习问题特定课程，实现有效且数据高效的测试时适应。"
limitationsEn: "Bilevel meta-gradients and per-instance weight updates are computationally demanding and require white-box model access. Evidence is currently limited to mathematical reasoning."
limitationsZh: "双层元梯度和逐实例权重更新计算开销较大，且需要白盒模型访问；当前证据仅来自数学推理。"
whyReadEn: "It goes beyond prompting: the model meta-learns what it should teach itself immediately before solving one particular problem."
whyReadZh: "它超越了提示方法：模型元学习在解决某个具体问题前，应该立刻教给自己什么。"
feedbackSource: "Downstream target-problem loss after adapting on generated examples"
updatedObject: "Temporary model parameters plus the generator and scorer of synthetic curricula"
updateMechanism: "Inner-loop self-training optimized by outer-loop bilevel meta-gradients"
successSignal: "Higher target-task accuracy from a small problem-specific synthetic dataset"
loopSummaryEn: "Inspect a target problem → synthesize practice data → score and train on it → solve the target → meta-update the curriculum generator."
loopSummaryZh: "检查目标问题 → 合成练习数据 → 评分并训练 → 解答目标 → 元更新课程生成器。"
---

Evidence note: the workshop paper and current arXiv abstract were checked.

证据说明：已核对工作坊论文与当前 arXiv 摘要。
