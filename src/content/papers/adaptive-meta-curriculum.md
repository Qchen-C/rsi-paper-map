---
title: "Adaptive Meta-Curriculum for Test-Time Self-Improvement"
titleZh: "面向测试时自我改进的自适应元课程"
authors: ["Kaustubh Bukkapatnam", "Laksh Patel", "Aarav Lala"]
presentation: "spotlight"
year: 2026
sourceIndex: 25
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=GjoUJTfXiW"}]
themes: ["test-time-learning-inference-scaling", "self-play-synthetic-data-curriculum", "foundations-recursive-computation"]
keywords: ["test-time compute", "meta-curriculum", "adaptive routing", "reflection", "mathematical reasoning"]
difficulty: "advanced"
prerequisites: ["test-time scaling", "meta-learning", "process reward models", "search and reflection"]
readingPaths: []
relatedPapers: ["test-time-self-distillation", "gasp", "interestingness-compression-progress"]
readNext: ["test-time-self-distillation", "gasp"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=GjoUJTfXiW"]
summaryEn: "AMC-TSI learns how much test-time compute each problem deserves and which improvement operator—revision, search, or reflection—should be used. It treats allocation policy itself as a meta-learning problem."
summaryZh: "AMC-TSI 学习每个问题应获得多少测试时算力，以及应采用修订、搜索还是反思策略；它把资源分配策略本身视为元学习问题。"
problemEn: "Uniform test-time scaling wastes computation on easy or saturated problems and underserves difficult ones. The best self-improvement operator also varies by problem and by the current solution state."
problemZh: "统一分配测试时算力会在简单或已饱和的问题上浪费资源，又无法充分支持困难问题；最佳自我改进操作也会随问题与当前解状态变化。"
methodEn: "A meta-learned curriculum scheduler predicts each problem's compute-benefit curve, while an adaptive operator selects among sequential revision, process-reward-guided search, and reflective refinement. The components are jointly optimized from problem features and observed learning dynamics."
methodZh: "元学习课程调度器预测每个问题的算力—收益曲线，自适应操作器则在顺序修订、过程奖励引导搜索与反思式细化之间选择；二者根据问题特征和已观察学习动态联合优化。"
resultsEn: "The workshop paper reports 2.3 times better compute efficiency and 18.7% higher accuracy on mathematical reasoning benchmarks than uniform allocation, alongside improved sample-complexity bounds under its assumptions."
resultsZh: "工作坊论文报告：相较统一分配，在数学推理基准上计算效率提升 2.3 倍、准确率提高 18.7%，并在其假设下获得更优的样本复杂度界。"
limitationsEn: "The gains depend on meta-training distributions, difficulty prediction, and available improvement operators. A scheduler trained on mathematical reasoning may misallocate compute on new domains or under changing inference costs."
limitationsZh: "收益依赖元训练分布、难度预测和可用改进算子；在数学推理上训练的调度器可能在新领域或推理成本变化时错误分配算力。"
whyReadEn: "It shifts test-time scaling from “spend more” to “learn where and how spending more will help.”"
whyReadZh: "它把测试时扩展从“投入更多”推进为“学习应该在哪里、以何种方式投入更多”。"
feedbackSource: "Observed improvement per unit of compute for each problem and operator"
updatedObject: "The curriculum scheduler, operator-selection policy, and current solution"
updateMechanism: "Meta-learning of compute-benefit prediction followed by adaptive revision, search, or reflection"
successSignal: "More accuracy per unit of test-time compute"
loopSummaryEn: "Estimate problem difficulty and payoff → allocate compute → select an improvement operator → observe gain → update the meta-policy → continue or stop."
loopSummaryZh: "估计问题难度与收益 → 分配算力 → 选择改进操作 → 观察增益 → 更新元策略 → 继续或停止。"
---

Evidence note: the public workshop paper was checked; no separate arXiv record was used for this card.

证据说明：已核对公开工作坊论文；本卡片未使用独立 arXiv 记录。
