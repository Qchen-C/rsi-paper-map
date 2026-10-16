---
title: "Refining Large Language Models with Self-Generated Data Through Iterative Training"
titleZh: "通过自生成数据与迭代训练改进大语言模型"
authors: ["Xiao Hu", "Muxi Diao", "Jizhi Zhang", "Xin Chen", "Xianyuan Zhan"]
presentation: "poster"
year: 2026
sourceIndex: 92
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=81P20Qg44P"}]
themes: ["self-play-synthetic-data-curriculum", "verification-evaluation-safety", "memory-continual-adaptation"]
keywords: ["self-generated data", "self-critique", "iterative training", "co-evolution", "data filtering"]
difficulty: "intermediate"
prerequisites: ["supervised fine-tuning", "synthetic data", "self-critique", "preference evaluation"]
readingPaths: []
relatedPapers: ["self-criteach", "self-improving-vlm-judge", "verified-synthetic-data"]
readNext: ["self-criteach", "self-improving-vlm-judge"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=81P20Qg44P"]
summaryEn: "A co-evolving self-critique loop trains an LLM to generate new instruction data and discriminate its quality. Iterative filtering aims to keep synthetic training from degenerating into garbage-in, garbage-out."
summaryZh: "一个生成与评判共同演化的自我批评闭环，让 LLM 既生成新指令数据，又判断其质量；迭代筛选旨在避免合成训练陷入“垃圾进、垃圾出”。"
problemEn: "External high-quality data is becoming scarce, but training directly on a model's unfiltered outputs can amplify mistakes and degrade both instruction following and evaluation."
problemZh: "外部高质量数据日益稀缺，但直接用模型未经筛选的输出训练，会放大错误并损害指令遵循与评判能力。"
methodEn: "The model generates candidate data, critiques and filters those candidates, then trains on the accepted subset. Repeating the cycle jointly improves the generator and its ability to recognize useful examples."
methodZh: "模型先生成候选数据，再批评和筛选候选，随后用通过筛选的子集训练；重复这一周期，同时提升生成与识别优质样本的能力。"
resultsEn: "Fine-tuning Llama-3 and Qwen2.5 with the framework yields reported improvements in both instruction-following and discriminative evaluation abilities."
resultsZh: "论文报告，用该框架微调 Llama-3 与 Qwen2.5 后，模型的指令遵循能力和判别评估能力均得到提升。"
limitationsEn: "Self-critique can share the generator's blind spots, so filtering does not establish correctness. Iterative training also risks distribution narrowing and error reinforcement without independent audits."
limitationsZh: "自我批评可能与生成器共享盲点，因此筛选并不能证明正确；缺少独立审计时，迭代训练还可能导致分布收窄和错误强化。"
whyReadEn: "It studies evaluator and generator improvement as one coupled system, a central tension for any self-training pipeline that outgrows external supervision."
whyReadZh: "它把评估器与生成器的进步视为一个耦合系统，是任何逐渐摆脱外部监督的自训练管线都必须面对的核心问题。"
feedbackSource: "The model's self-critique and quality discrimination over its generated examples"
updatedObject: "The LLM's generative and evaluative capabilities"
updateMechanism: "Filter self-generated instruction data and iteratively fine-tune on accepted examples"
successSignal: "Simultaneous gains in instruction following and data-quality discrimination"
loopSummaryEn: "Generate training examples → critique their quality → keep useful data → fine-tune the model → generate again."
loopSummaryZh: "生成训练样本 → 批评其质量 → 保留有用数据 → 微调模型 → 再次生成。"
---

Evidence note: the accepted workshop paper was checked.

证据说明：已核对接收的工作坊论文。
