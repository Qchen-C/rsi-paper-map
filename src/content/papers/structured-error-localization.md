---
title: "Structure Enables Effective Self-Localization of Errors in LLMs"
titleZh: "结构使大语言模型能够有效自定位错误"
authors: ["Ankur Samanta", "Akshayaa Magesh", "Ayush Jain", "Kavosh Asadi", "Youliang Yu", "Daniel R. Jiang", "Boris Vidolov", "Kaveh Hassani", "Paul Sajda", "Jalaj Bhandari", "Yonathan Efroni"]
presentation: "poster"
year: 2026
sourceIndex: 96
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=QbL99Fyqsl"}]
themes: ["verification-evaluation-safety", "test-time-learning-inference-scaling"]
keywords: ["error localization", "self-correction", "structured reasoning", "backtracking", "Thought-ICS"]
difficulty: "intermediate"
prerequisites: ["chain-of-thought reasoning", "self-correction", "verification", "search and backtracking"]
readingPaths: []
relatedPapers: ["reasoning-decision-pivots", "world-action-verifier", "solution-verifier-gain"]
readNext: ["reasoning-decision-pivots", "solution-verifier-gain"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=QbL99Fyqsl"]
summaryEn: "Thought-ICS makes reasoning a sequence of complete, semantically coherent thoughts so a model can identify its first erroneous decision. It then backtracks to the last correct thought and samples an alternative continuation."
summaryZh: "Thought-ICS 把推理组织为一系列完整且语义连贯的思考单元，使模型能定位第一个错误决策；随后回退到最后一个正确思考，并重新采样后续路径。"
problemEn: "Repeatedly asking an LLM to revise does not reliably improve reasoning because unstructured chain-of-thought lacks stable boundaries for detecting and localizing mistakes."
problemZh: "反复要求 LLM 修改并不能可靠改善推理，因为非结构化思维链缺乏稳定边界，难以检测和定位错误。"
methodEn: "Generation proceeds one deliberate thought at a time. After verification, the model names the earliest bad step; the system preserves the correct prefix, resamples from that boundary, and iterates."
methodZh: "生成按一个个明确思考单元推进；验证后，模型指出最早错误步骤，系统保留正确前缀，从该边界重新采样并迭代。"
resultsEn: "With oracle verification of incorrect reasoning, Thought-ICS delivers a reported 20–40% self-correction lift. In autonomous operation it outperforms contemporary self-correction baselines."
resultsZh: "在由 oracle 确认推理错误时，Thought-ICS 报告带来 20–40% 的自纠提升；在完全自主设置下也超过当时的自纠基线。"
limitationsEn: "Oracle-assisted results isolate localization from real verification, while autonomous quality still depends on the model's fallible judge. Discrete thought boundaries add tokens and can impose an artificial decomposition."
limitationsZh: "oracle 辅助结果把定位与真实验证分离，而自主效果仍依赖会犯错的模型裁判；离散思考边界还会增加 token，并可能强加人为分解。"
whyReadEn: "It shows that representation format can determine whether self-correction is possible: structure creates the addressable units needed for precise rollback."
whyReadZh: "它表明表示格式会决定自纠是否可行：结构创造了可寻址单元，才能进行精确回滚。"
feedbackSource: "Verification of complete reasoning and model localization of the earliest erroneous thought"
updatedObject: "The suffix of a structured reasoning trajectory"
updateMechanism: "Backtrack to the last correct thought and resample an alternative continuation"
successSignal: "A corrected final answer reached through localized rather than full resampling"
loopSummaryEn: "Generate one thought at a time → verify → locate the first error → keep the correct prefix → resample the suffix."
loopSummaryZh: "逐思考生成 → 验证 → 定位首个错误 → 保留正确前缀 → 重新采样后缀。"
---

Evidence note: the public conference paper corresponding to the workshop listing was checked.

证据说明：已核对与工作坊条目对应的公开会议论文。
