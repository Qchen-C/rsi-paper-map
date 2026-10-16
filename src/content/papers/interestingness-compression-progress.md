---
title: "Interestingness as an Inductive Heuristic for Future Compression Progress"
titleZh: "把有趣性作为预测未来压缩进展的归纳启发式"
authors: ["Vincent Herrmann", "Jürgen Schmidhuber"]
presentation: "spotlight"
year: 2026
sourceIndex: 23
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=6GTlSlWW9C"},{"kind":"arxiv","url":"https://arxiv.org/abs/2605.14831"}]
themes: ["foundations-recursive-computation", "self-play-synthetic-data-curriculum", "scientific-discovery-applications"]
keywords: ["interestingness", "compression progress", "Kolmogorov complexity", "algorithmic statistics", "task selection"]
difficulty: "advanced"
prerequisites: ["Kolmogorov complexity", "algorithmic probability", "universal computation", "curriculum learning"]
readingPaths: []
relatedPapers: ["causalevolve", "scaling-law-discovery", "gasp"]
readNext: ["gasp", "scaling-law-discovery"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2605.14831", "https://openreview.net/pdf?id=6GTlSlWW9C"]
summaryEn: "The paper formalizes interestingness as expected future compression progress: a task is valuable when more computation is likely to reveal a shorter or faster description. It studies whether past breakthroughs can predict that future value."
summaryZh: "论文把“有趣性”形式化为预期的未来压缩进展：如果投入更多计算可能发现更短或更快的描述，那么这个任务就更值得继续探索；研究进一步检验过去的突破能否预测这种未来价值。"
problemEn: "A recursively improving system cannot search every task or datum equally. It needs a prospective signal for where future learning progress is likely, rather than only measuring novelty or past error."
problemZh: "递归改进系统不可能同等搜索所有任务或数据，因此需要一个面向未来的信号，判断哪里更可能继续产生学习进展，而不能只看新颖度或历史误差。"
methodEn: "Using Kolmogorov Complexity and Algorithmic Statistics, the authors analyze complexity-runtime profiles under Length, Algorithmic, and Speed priors. They derive expected future progress from the timing of observed compression breakthroughs and test the predictions in three universal computational paradigms."
methodZh: "作者使用 Kolmogorov 复杂度与算法统计学，在长度先验、算法先验和速度先验下分析复杂度—运行时间曲线，从已观察到的压缩突破时间推导未来进展期望，并在三种通用计算范式中实验验证。"
resultsEn: "Expected future progress decays exponentially with the time since the last breakthrough. The Algorithmic Prior is more optimistic than the Length Prior, producing a quadratic increase in expected discovery for the same observed profile."
resultsZh: "预期未来进展会随上次突破距今时间呈指数衰减；在相同观测曲线下，算法先验比长度先验更乐观，使预期发现量呈二次增长。"
limitationsEn: "The formal results rely on idealized universal search and prior choices that are not directly computable at realistic scale. Translating compression progress into practical task selection for neural agents remains an open engineering problem."
limitationsZh: "形式化结果依赖理想化的通用搜索与先验选择，在现实规模下无法直接计算；如何把压缩进展转成神经智能体的实用选题策略仍是开放工程问题。"
whyReadEn: "It gives a mathematical answer to a neglected RSI question: what should a system choose to improve next?"
whyReadZh: "它从数学上回答了 RSI 中常被忽略的问题：系统下一步应该选择改进什么？"
feedbackSource: "The timing and magnitude of observed compression breakthroughs"
updatedObject: "A prospective priority assigned to tasks or data for further search"
updateMechanism: "Bayesian updating of expected future compression progress under computable-object priors"
successSignal: "Accurate prediction of where additional search yields shorter or faster descriptions"
loopSummaryEn: "Search for compression → record breakthroughs → estimate future progress from recency and prior → allocate more search to promising objects → update the profile."
loopSummaryZh: "搜索压缩方案 → 记录突破 → 根据近期性与先验估计未来进展 → 向更有希望的对象分配搜索 → 更新曲线。"
---

Evidence note: the arXiv abstract and public workshop paper were checked. This is primarily a theoretical contribution rather than a trained self-improving agent.

证据说明：已核对 arXiv 摘要与公开工作坊论文。这主要是一项理论贡献，而不是已经训练完成的自改进智能体。
