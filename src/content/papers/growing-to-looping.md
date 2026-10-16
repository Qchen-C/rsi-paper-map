---
title: "From Growing to Looping: A Unified View of Iterative Computation in LLMs"
titleZh: "从增长到循环：LLM 迭代计算的统一视角"
authors: ["Ferdinand Kapl", "Emmanouil Angelis", "Kaitlin Maile", "Johannes von Oswald", "Stefan Bauer"]
presentation: "spotlight"
year: 2026
sourceIndex: 12
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=yIDgVx3OoN"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.16490"}]
themes: ["recursive-models-architectures", "foundations-recursive-computation", "test-time-learning-inference-scaling"]
keywords: ["looped Transformers", "depth growing", "iterative computation", "weight sharing", "inference-time scaling"]
difficulty: "advanced"
prerequisites: ["Transformer depth", "weight sharing", "pretraining curricula", "in-context learning"]
readingPaths: []
relatedPapers: ["tiny-autoregressive-recursive-models", "parametric-skill-transfer"]
readNext: ["tiny-autoregressive-recursive-models"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2602.16490"]
summaryEn: "The paper connects two apparently different ways to obtain iterative computation: looping a shared block across depth and growing a shallow model into a deeper one by duplicating middle layers. Both develop similar depth-wise signatures, suggesting a common mechanism."
summaryZh: "论文把两种看似不同的迭代计算方式联系起来：跨深度循环复用同一模块，以及复制中间层把浅模型增长为深模型。两者出现相似的深度方向特征，暗示它们共享某种计算机制。"
problemEn: "Looped models and depth-grown models are usually studied separately, leaving unclear whether their gains arise from unrelated recipes or from the same reusable computation across depth."
problemZh: "循环模型与深度增长模型通常被分开研究，因此不清楚它们的收益来自两套无关技巧，还是来自同一种跨深度复用计算。"
methodEn: "The authors compare internal depth-wise behavior, late-layer reliance, and recurring activation patterns across standard, looped, and depth-grown models. They then compose the methods by looping middle blocks of a depth-grown model at inference time."
methodZh: "作者比较标准模型、循环模型与深度增长模型在深度方向的内部行为、对后层的依赖和重复激活模式，并进一步在推理时循环执行深度增长模型的中间模块。"
resultsEn: "The two model families show convergent signatures and adapt better than a standard baseline as more in-context examples or supervised fine-tuning are provided. On some reasoning primitives, inference-time looping of a depth-grown model's middle blocks yields improvements of up to twofold without loop training."
resultsZh: "两类模型呈现趋同特征，并在增加上下文示例或监督微调数据时比标准基线适应得更好。在部分推理原语上，即使没有循环训练，推理时循环深度增长模型的中间模块也可带来最高约 2 倍提升。"
limitationsEn: "The benefits depend on the task and training mixture; the strongest depth-grown results use a high-quality math-heavy cooldown mixture. Similar internal signatures do not by themselves prove identical algorithms."
limitationsZh: "收益依赖任务与训练数据配比；最强深度增长结果使用了高质量、偏数学的冷却阶段混合数据。相似内部特征本身也不能证明两者执行完全相同的算法。"
whyReadEn: "It offers a conceptual bridge between training-time depth expansion and inference-time recurrence, making it useful for understanding where extra computation should be inserted."
whyReadZh: "它在训练时扩深与推理时循环之间建立了概念桥梁，有助于理解额外计算应当加在何处。"
feedbackSource: "The model's intermediate representation at the end of each reused or duplicated depth segment"
updatedObject: "The hidden representation passed through the middle computation blocks"
updateMechanism: "Layer duplication during growth and repeated middle-block application during looping"
successSignal: "Better reasoning, in-context adaptation, and supervised adaptation as effective depth increases"
loopSummaryEn: "Build a reusable middle computation → pass the representation through it at successive depths → optionally loop it again at inference → read out from the late layers."
loopSummaryZh: "形成可复用的中间计算 → 在连续深度中传递表征 → 推理时可继续循环 → 由后层读出答案。"
---

Evidence note: the arXiv abstract was checked; quantitative statements here are limited to those reported in the abstract.

证据说明：已核对 arXiv 摘要；本文卡片中的定量结论仅采用摘要明确报告的内容。
