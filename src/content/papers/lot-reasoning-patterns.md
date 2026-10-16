---
title: "Discover the distinguishing and effective reasoning patterns among LLMs via an LLM"
titleZh: "用大模型发现不同大模型之间有区分度且有效的推理模式"
authors: ["Yida Chen", "Yuning Mao", "Xianjun Yang", "Suyu Ge", "Shengjie Bi", "Lijuan Liu", "Saghar Hosseini", "Liang Tan", "Yixin Nie", "Shaoliang Nie"]
presentation: "poster"
year: 2026
sourceIndex: 70
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=z9MOHU8RjL"}]
themes: ["verification-evaluation-safety", "test-time-learning-inference-scaling", "foundations-recursive-computation"]
keywords: ["reasoning patterns", "open taxonomy", "chain of thought", "prompt engineering", "model comparison"]
difficulty: "intermediate"
prerequisites: ["chain-of-thought analysis", "LLM-as-judge", "prompt engineering", "reasoning benchmarks"]
readingPaths: []
relatedPapers: ["shape-of-thought", "reasoning-decision-pivots", "automedprompt-textual-gradients"]
readNext: ["shape-of-thought", "reasoning-decision-pivots"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=z9MOHU8RjL"]
summaryEn: "LLM-proposed Open Taxonomy (LOT) asks a model to compare reasoning traces and induce new natural-language patterns instead of starting from a fixed human taxonomy. Predicting the source model validates whether the patterns are genuinely distinguishing."
summaryZh: "LLM-proposed Open Taxonomy（LOT）让模型比较推理轨迹并归纳新的自然语言模式，而不是从固定人工分类出发；通过预测轨迹来源模型，验证这些模式是否真的有区分度。"
problemEn: "Manual reasoning annotation does not scale, while predefined taxonomies can miss strategies that emerge after reinforcement learning or differ across model families."
problemZh: "人工推理标注难以扩展，预定义分类又可能漏掉强化学习后涌现或模型家族特有的策略。"
methodEn: "An LLM proposes prompts that describe contrasts between trace collections, applies them to unseen traces, and retains patterns that classify model origin accurately. The resulting taxonomy can then steer another model's test-time reasoning style."
methodZh: "大模型提出描述轨迹集合差异的提示，将其应用到未见轨迹，并保留能准确分类模型来源的模式；得到的分类还能在测试时引导其他模型的推理风格。"
resultsEn: "Across 12 open reasoning models in math, science, and code, LOT distinguishes traces with 80–100% accuracy. Steering smaller Qwen3 models toward the largest model's style improves GPQA accuracy by 3.3–5.7%."
resultsZh: "在数学、科学和代码领域的 12 个开放推理模型上，LOT 以 80–100% 准确率区分轨迹；让较小 Qwen3 模仿最大模型风格，可将 GPQA 准确率提升 3.3–5.7%。"
limitationsEn: "Source-model classification may reward superficial stylistic fingerprints rather than causal strategies. LLM-generated labels inherit judge bias, and one GPQA steering case does not establish broad transfer."
limitationsZh: "来源模型分类可能捕捉表面风格指纹而非因果策略；大模型生成标签会继承裁判偏差，单个 GPQA 引导案例也不能证明广泛迁移。"
whyReadEn: "It closes a loop from interpretability to intervention: discover behavioral differences, validate them, then test whether copying them improves performance."
whyReadZh: "它打通了从解释到干预的闭环：发现行为差异、验证差异，再测试复制这些模式是否提升性能。"
feedbackSource: "Held-out source-model classification and downstream task accuracy"
updatedObject: "The open reasoning-pattern taxonomy and test-time steering prompt"
updateMechanism: "LLM-generated contrastive pattern discovery followed by validated prompt steering"
successSignal: "Patterns distinguish unseen traces and improve a target model when transferred"
loopSummaryEn: "Compare trace sets → propose a reasoning pattern → validate on unseen traces → steer a target model → measure transfer."
loopSummaryZh: "比较轨迹集合 → 提出推理模式 → 在未见轨迹验证 → 引导目标模型 → 测量迁移。"
---

Evidence note: the published workshop paper was checked.

证据说明：已核对正式工作坊论文。
