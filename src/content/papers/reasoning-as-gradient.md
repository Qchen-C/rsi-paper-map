---
title: "Reasoning as Gradient: Scaling MLE Agents Beyond Tree Search"
titleZh: "把推理视为梯度：让机器学习工程智能体超越树搜索"
authors: ["Yifei Zhang", "Xu Yang", "Xiao Yang", "Bowen Xian", "Qizheng Li", "Shikai Fang", "Jingyuan Li", "Jian Wang", "Mingrui Xu", "Yuge Zhang", "Weiqing Liu", "Jiang Bian"]
presentation: "poster"
year: 2026
sourceIndex: 47
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=TnjlvLY30w"},{"kind":"arxiv","url":"https://arxiv.org/abs/2603.01692"},{"kind":"code","url":"https://github.com/microsoft/RD-Agent"}]
themes: ["agents-tools-code-evolution", "scientific-discovery-applications", "test-time-learning-inference-scaling"]
keywords: ["machine learning engineering", "reasoning agents", "gradient analogy", "tree search", "MLE-Bench"]
difficulty: "advanced"
prerequisites: ["LLM agents", "machine learning engineering", "tree search", "optimization momentum"]
readingPaths: []
relatedPapers: ["execution-grounded-ai-research", "llm-fe", "simple-code-evolution-baselines"]
readNext: ["execution-grounded-ai-research", "simple-code-evolution-baselines"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=TnjlvLY30w", "https://arxiv.org/abs/2603.01692", "https://github.com/microsoft/RD-Agent"]
summaryEn: "GOME reframes machine-learning-engineering agents as directed optimizers: structured diagnosis acts like a gradient, successful changes provide momentum, and parallel traces resemble distributed optimization."
summaryZh: "GOME 把机器学习工程智能体重构为定向优化器：结构化诊断类似梯度，成功改动形成动量，并行轨迹则类似分布式优化。"
problemEn: "Tree-search agents spend compute enumerating branches from scalar validation scores. As models become better reasoners, directed diagnosis and revision may use the same budget more efficiently."
problemZh: "树搜索智能体依据标量验证分数枚举分支，消耗大量算力；随着模型推理能力增强，定向诊断与修改可能更高效地使用同等预算。"
methodEn: "GOME turns experiment outcomes into structured diagnostic directions, remembers successful directions across iterations, and executes multiple update traces in parallel. A closed-world protocol is used to isolate the agent design from external knowledge."
methodZh: "GOME 把实验结果转成结构化诊断方向，跨迭代记住成功方向，并并行执行多条更新轨迹；研究采用封闭世界协议，尽量隔离智能体设计与外部知识的影响。"
resultsEn: "The paper reports a 35.1% any-medal rate on MLE-Bench under a 12-hour single-V100 budget. Across ten models, tree search is stronger for weak reasoners, while GOME overtakes it as reasoning capability increases."
resultsZh: "论文报告在单张 V100、12 小时预算下，MLE-Bench 的任意奖牌率达到 35.1%。在十个模型上，树搜索更适合较弱推理器，而 GOME 随推理能力增强逐渐反超。"
limitationsEn: "The gradient language is an operational analogy rather than a differentiable guarantee. Results come from a closed-world MLE benchmark, and the crossover may move with budgets, models, external tools, or evaluation noise."
limitationsZh: "“梯度”是一种操作类比，并非可微分保证；结果来自封闭世界 MLE 基准，模型、预算、外部工具或评估噪声变化都可能改变交叉点。"
whyReadEn: "It provides a concrete hypothesis for how stronger reasoners should change agent search design instead of simply expanding the same tree."
whyReadZh: "它提出了一个具体假设：推理器变强后，智能体应改变搜索设计，而不只是把同一棵树扩得更大。"
feedbackSource: "Validation scores, experiment artifacts, and structured failure diagnostics"
updatedObject: "The candidate machine-learning solution and the agent's direction memory"
updateMechanism: "Diagnosis-directed edits with momentum from successful prior changes"
successSignal: "Improved validation performance and MLE-Bench medal rate under fixed compute"
loopSummaryEn: "Run an experiment → diagnose the error direction → revise the solution → retain successful momentum → parallelize the next updates."
loopSummaryZh: "运行实验 → 诊断误差方向 → 修改方案 → 保留成功动量 → 并行下一轮更新。"
---

Evidence note: the workshop paper, current arXiv abstract, and official RD-Agent repository were checked. The workshop author list is retained.

证据说明：已核对工作坊论文、当前 arXiv 摘要与官方 RD-Agent 仓库；本站保留工作坊作者名单。
