---
title: "Shape of Thought: When Distribution Matters More than Correctness in Reasoning Tasks"
titleZh: "思维的形状：推理任务中分布何时比正确性更重要"
authors: ["Abhranil Chandra", "Ayush Agrawal", "Arian Hosseini", "Sebastian Fischmeister", "Rishabh Agarwal", "Navin Goyal", "Aaron Courville"]
presentation: "poster"
year: 2026
sourceIndex: 46
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=Oc5R3D2TfE"},{"kind":"arxiv","url":"https://arxiv.org/abs/2512.22255"}]
themes: ["self-play-synthetic-data-curriculum", "foundations-recursive-computation", "verification-evaluation-safety"]
keywords: ["chain of thought", "distribution matching", "synthetic data", "reasoning distillation", "incorrect traces"]
difficulty: "intermediate"
prerequisites: ["supervised fine-tuning", "chain-of-thought reasoning", "knowledge distillation", "distribution shift"]
readingPaths: []
relatedPapers: ["language-self-play", "verified-synthetic-data", "test-time-self-distillation"]
readNext: ["verified-synthetic-data", "test-time-self-distillation"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=Oc5R3D2TfE", "https://arxiv.org/abs/2512.22255"]
summaryEn: "This study finds that synthetic chains of thought from stronger models can improve a smaller model even when every final answer is wrong. Distributional compatibility and partially valid intermediate steps can matter more than final-answer labels alone."
summaryZh: "该研究发现，即使强模型生成的思维链最终答案全部错误，也可能提升较小模型。与学习者分布的匹配程度以及中间步骤中的局部有效性，可能比最终答案标签更重要。"
problemEn: "Reasoning datasets are commonly filtered by final-answer correctness, but that criterion may discard useful traces and favor human-written data whose style is harder for the target model to learn."
problemZh: "推理数据通常按最终答案正确性筛选，但这一标准可能丢弃有用轨迹，并偏向目标模型更难学习的人类写作风格。"
methodEn: "The authors fine-tune 1.5B–9B models on correct and incorrect synthetic traces, paraphrase human traces toward the model distribution, and progressively corrupt reasoning steps to separate distributional fit from correctness."
methodZh: "作者用正确与错误的合成轨迹微调 1.5B–9B 模型，把人类轨迹改写得更接近模型分布，并逐步破坏推理步骤，以区分分布匹配与正确性的作用。"
resultsEn: "Across MATH, GSM8K, Countdown, and MBPP, incorrect synthetic traces can outperform human-annotated supervision; paraphrasing human traces also helps, and models tolerate moderate flaws when useful local reasoning remains."
resultsZh: "在 MATH、GSM8K、Countdown 与 MBPP 上，错误合成轨迹可能优于人工标注监督；改写人类轨迹也有帮助，而且只要保留有用局部推理，模型能容忍一定程度的错误。"
limitationsEn: "The result does not imply that correctness is unimportant or that arbitrary wrong data is safe. The selected traces often contain valid partial reasoning, and tolerance may shrink in safety-critical or open-ended domains."
limitationsZh: "该结果并不意味着正确性不重要，也不表示任意错误数据都安全；所选轨迹往往包含有效的局部推理，在安全关键或开放任务中容错范围可能更小。"
whyReadEn: "It is a useful corrective to simplistic data filtering: inspect the learnable structure of a trace, not only its last token."
whyReadZh: "它纠正了过度简单的数据筛选观：应检查轨迹中可学习的结构，而不只看最后答案。"
feedbackSource: "Downstream reasoning accuracy under controlled trace distributions and corruption levels"
updatedObject: "The target model's reasoning policy"
updateMechanism: "Supervised fine-tuning on distribution-matched synthetic reasoning traces"
successSignal: "Better generalization across reasoning tasks, even when some training conclusions are wrong"
loopSummaryEn: "Generate model-like traces → vary correctness and style → fine-tune → measure transfer → refine data selection."
loopSummaryZh: "生成模型风格轨迹 → 改变正确性与表达分布 → 微调 → 测量迁移 → 调整数据筛选。"
---

Evidence note: the workshop manuscript and current arXiv abstract were checked.

证据说明：已核对工作坊稿件与当前 arXiv 摘要。
