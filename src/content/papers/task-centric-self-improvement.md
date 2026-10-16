---
title: "A Task-Centric Theory for Iterative Self-Improvement with Easy-to-Hard Curricula"
titleZh: "面向任务的迭代自我改进理论：从易到难课程"
authors: ["Chenruo Liu", "Yijun Dong", "Yiqiu Shen", "Qi Lei"]
presentation: "poster"
year: 2026
sourceIndex: 76
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=EEc4Pn2GSa"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.10014"}]
themes: ["foundations-recursive-computation", "self-play-synthetic-data-curriculum"]
keywords: ["self-improvement theory", "easy-to-hard curriculum", "finite samples", "reward filtering", "saturation"]
difficulty: "advanced"
prerequisites: ["maximum likelihood", "finite-sample learning theory", "curriculum learning", "reward verification"]
readingPaths: []
relatedPapers: ["adaptive-meta-curriculum", "soar", "verified-synthetic-data"]
readNext: ["adaptive-meta-curriculum", "soar"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=EEc4Pn2GSa", "https://arxiv.org/abs/2602.10014"]
summaryEn: "This theory models each self-improvement round as maximum-likelihood training on the model's own reward-filtered outputs. It derives finite-sample conditions under which improvement continues, saturates, and benefits from an easy-to-hard curriculum."
summaryZh: "该理论把每轮自我改进建模为：在模型自身生成且通过奖励筛选的输出上做最大似然训练，并给出持续改进、最终饱和以及从易到难课程更优的有限样本条件。"
problemEn: "Empirical self-training succeeds despite learning from endogenous data, but practical theory has not explained how initialization, task difficulty, accepted-sample count, and scheduling interact."
problemZh: "自训练虽然使用内生数据却能成功，但实用理论尚未解释初始化、任务难度、接受样本量与调度如何共同作用。"
methodEn: "Reward filtering defines the training distribution at each iteration, enabling expected-reward bounds. A multi-difficulty task model compares staged curricula with fixed mixtures as a function of sample budget and initial competence."
methodZh: "奖励筛选定义每轮训练分布，从而推导期望奖励界；多难度任务模型根据样本预算与初始能力比较阶段式课程和固定混合训练。"
resultsEn: "The analysis predicts a positive feedback loop—better models generate more accepted data—and eventual saturation. It proves parameter regimes where easy-to-hard scheduling has tighter guarantees, supported by simulations and graph-reasoning experiments."
resultsZh: "分析预测正反馈：更强模型会生成更多可接受数据，同时改进最终饱和；理论给出从易到难调度保证更紧的参数区间，并用模拟和图推理实验验证。"
limitationsEn: "Guarantees depend on stylized assumptions and controlled tasks; they are sufficient-condition insights, not a universal recipe. Real verifiers, distributions, and neural optimizers can violate the model."
limitationsZh: "保证依赖理想化假设与受控任务，是充分条件洞见而非通用配方；真实验证器、数据分布与神经优化器都可能违背模型。"
whyReadEn: "It gives a compact mathematical explanation for two recurring observations in this collection: curricula help, and self-improvement eventually plateaus."
whyReadZh: "它用紧凑数学解释了论文集中反复出现的两个现象：课程有效，而自我改进最终会平台化。"
feedbackSource: "External reward verification of self-generated candidate outputs"
updatedObject: "The model policy trained on accepted examples"
updateMechanism: "Iterated maximum-likelihood fitting on reward-filtered data with scheduled task difficulty"
successSignal: "Expected reward rises while enough new outputs pass verification"
loopSummaryEn: "Generate answers → filter by reward → fine-tune on accepted data → raise task difficulty → repeat until saturation."
loopSummaryZh: "生成答案 → 按奖励筛选 → 在通过数据上微调 → 提高任务难度 → 重复直至饱和。"
---

Evidence note: the published workshop paper and current arXiv abstract were checked.

证据说明：已核对正式工作坊论文与当前 arXiv 摘要。
