---
title: "In-Context Adaptation"
titleZh: "上下文内适应"
authors: ["Yongqiang Chen", "Chenxi Liu", "Qingyi Guo", "Bo Han", "Kun Zhang"]
presentation: "poster"
year: 2026
sourceIndex: 94
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=f58uDOwLaq"}]
themes: ["test-time-learning-inference-scaling", "memory-continual-adaptation", "foundations-recursive-computation"]
keywords: ["in-context adaptation", "out-of-distribution generalization", "context reconstruction", "spurious correlations", "invariant learning"]
difficulty: "advanced"
prerequisites: ["in-context learning", "out-of-distribution generalization", "invariant learning", "transformers"]
readingPaths: []
relatedPapers: ["contextual-drag", "ace-context-engineering", "test-time-self-distillation"]
readNext: ["contextual-drag", "ace-context-engineering"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=f58uDOwLaq"]
summaryEn: "In-Context Adaptation formalizes reasoning as reusing learned knowledge under a new environment inferred from a few demonstrations. Adaptive Context Engineering reconstructs the context to reduce reliance on spurious training correlations."
summaryZh: "上下文内适应把推理形式化为：通过少量示例识别新环境，再适应性复用已有知识；自适应上下文工程通过重构上下文，减少模型对训练期伪相关的依赖。"
problemEn: "Transformers can appear capable in familiar contexts yet fail under distribution shifts because next-token training rewards shortcuts that demonstrations alone may not dislodge."
problemZh: "Transformer 在熟悉上下文中看似能力很强，但分布变化时会失败，因为下一 token 训练鼓励捷径，而示例本身未必足以打破它们。"
methodEn: "The paper builds an invariant-learning-inspired benchmark for OOD in-context reasoning and introduces ACE, a simple strategy that reconstructs demonstrations and query context to expose environment-relevant structure."
methodZh: "论文构建受不变学习启发的分布外上下文推理基准，并提出 ACE，通过重构示例与查询上下文突出和新环境相关的结构。"
resultsEn: "Standard next-token transformers show strong spurious-correlation failures on the benchmark, while context reconstruction produces significant improvements in OOD in-context reasoning."
resultsZh: "标准下一 token Transformer 在该基准上表现出明显伪相关失败，而上下文重构显著改善了分布外上下文推理。"
limitationsEn: "The formal benchmark abstracts away much of natural language and real deployment shift. Context reconstruction may rely on knowing which structure is invariant and adds inference overhead."
limitationsZh: "形式化基准抽象掉了自然语言和真实部署变化的许多复杂性；上下文重构可能需要知道哪些结构保持不变，并增加推理开销。"
whyReadEn: "It distinguishes in-context pattern matching from adaptation under a genuinely new environment, sharpening what test-time reasoning should mean."
whyReadZh: "它区分了上下文模式匹配与真正面向新环境的适应，从而更严格地界定测试时推理。"
feedbackSource: "A few demonstrations from the shifted environment and consistency under reconstructed contexts"
updatedObject: "The effective inference context presented to a fixed transformer"
updateMechanism: "Adaptive reconstruction and organization of demonstrations without weight updates"
successSignal: "Accurate reasoning under distribution shift rather than reliance on spurious correlations"
loopSummaryEn: "Observe new demonstrations → infer the changed context → reconstruct evidence → answer with invariant knowledge → test under shift."
loopSummaryZh: "观察新示例 → 推断环境变化 → 重构证据 → 用不变知识回答 → 在分布变化下检验。"
---

Evidence note: the public conference paper corresponding to the workshop listing was checked.

证据说明：已核对与工作坊条目对应的公开会议论文。
