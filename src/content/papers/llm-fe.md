---
title: "LLM-FE: Automated Feature Engineering for Tabular Data with LLMs as Evolutionary Optimizers"
titleZh: "LLM-FE：把大模型作为进化优化器的表格数据自动特征工程"
authors: ["Nikhil Abhyankar", "Parshin Shojaee", "Chandan K. Reddy"]
presentation: "poster"
year: 2026
sourceIndex: 38
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=KbGkWv7VEk"},{"kind":"arxiv","url":"https://arxiv.org/abs/2503.14434"}]
themes: ["scientific-discovery-applications", "agents-tools-code-evolution", "self-play-synthetic-data-curriculum"]
keywords: ["feature engineering", "tabular data", "evolutionary optimization", "program search", "domain knowledge"]
difficulty: "intermediate"
prerequisites: ["tabular machine learning", "feature transformations", "evolutionary search", "validation metrics"]
readingPaths: []
relatedPapers: ["omega", "causalevolve", "simple-code-evolution-baselines"]
readNext: ["simple-code-evolution-baselines", "omega"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2503.14434"]
summaryEn: "LLM-FE casts tabular feature engineering as evolutionary program search. Language models propose executable feature transformations using domain semantics, while validation results and prior experiments guide subsequent generations."
summaryZh: "LLM-FE 把表格特征工程表示为进化式程序搜索。语言模型利用领域语义提出可执行特征变换，验证结果与历史实验再指导后续代候选。"
problemEn: "Traditional automated feature engineering searches fixed transformation libraries and ignores domain meaning. Direct LLM prompting does not systematically learn from which previous feature ideas helped or failed."
problemZh: "传统自动特征工程只搜索固定变换库并忽略领域含义；直接提示 LLM 又不会系统吸收此前哪些特征想法有效或失败。"
methodEn: "An LLM generates feature-transformation programs, predictive models evaluate the transformed data, and an evolutionary loop preserves, recombines, and revises candidates using both performance feedback and reasoning about prior discoveries."
methodZh: "LLM 生成特征变换程序，预测模型评估变换后的数据，进化闭环再结合性能反馈和历史发现推理，对候选进行保留、重组与修订。"
resultsEn: "Across diverse classification and regression benchmarks, the abstract reports consistent improvements over state-of-the-art automated feature-engineering baselines and stronger downstream tabular prediction."
resultsZh: "在多种分类与回归基准上，摘要报告该方法持续优于领先自动特征工程基线，并提升下游表格预测性能。"
limitationsEn: "Validation-guided search can overfit datasets, and generated transformations may leak targets or create brittle, hard-to-maintain pipelines. The abstract does not quantify search cost or statistical significance."
limitationsZh: "验证集引导搜索可能过拟合数据，生成变换也可能泄漏目标或形成脆弱难维护的流程；摘要未量化搜索成本与统计显著性。"
whyReadEn: "It is a compact example of combining semantic hypothesis generation with an executable evolutionary fitness signal."
whyReadZh: "它是把语义假设生成与可执行进化适应度信号结合起来的紧凑案例。"
feedbackSource: "Validation performance of downstream models using generated features"
updatedObject: "The population of feature-transformation programs"
updateMechanism: "LLM-guided mutation and recombination informed by prior experiment results"
successSignal: "Improved classification or regression performance on held-out tabular data"
loopSummaryEn: "Propose features → execute transformations → train and score a model → preserve useful programs → mutate with domain knowledge → repeat."
loopSummaryZh: "提出特征 → 执行变换 → 训练并评估模型 → 保留有效程序 → 结合领域知识变异 → 重复。"
---

Evidence note: the arXiv abstract was checked; quantitative claims absent from the abstract are not inferred.

证据说明：已核对 arXiv 摘要；未推断摘要中没有给出的定量结论。
