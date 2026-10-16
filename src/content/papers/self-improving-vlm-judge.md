---
title: "Self-Improving VLM Judges Without Human Annotations"
titleZh: "无需人工标注的自我改进视觉语言模型裁判"
authors: ["Inna Wanyin Lin", "Yushi Hu", "Shuyue Stella Li", "Scott Geng", "Pang Wei Koh", "Luke Zettlemoyer", "Tim Althoff", "Marjan Ghazvininejad"]
presentation: "poster"
year: 2026
sourceIndex: 85
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=8hYSvUpJBA"},{"kind":"arxiv","url":"https://arxiv.org/abs/2512.05145"}]
themes: ["verification-evaluation-safety", "self-play-synthetic-data-curriculum", "embodied-multimodal-intelligence"]
keywords: ["VLM judge", "synthetic preferences", "self-training", "reward models", "multimodal evaluation"]
difficulty: "intermediate"
prerequisites: ["vision-language models", "preference learning", "reward modeling", "supervised fine-tuning"]
readingPaths: []
relatedPapers: ["self-evolving-rubrics", "world-action-verifier", "compute-as-teacher"]
readNext: ["self-evolving-rubrics", "world-action-verifier"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=8hYSvUpJBA", "https://arxiv.org/abs/2512.05145"]
summaryEn: "A VLM judge creates its own multimodal preference pairs, generates judgments with reasoning, filters them against known synthetic quality differences, and trains on the surviving examples. The loop requires no human preference labels."
summaryZh: "视觉语言模型裁判自行构造多模态偏好对、生成带推理的判断，再依据已知的合成质量差异筛选并训练；整个闭环不需要人工偏好标注。"
problemEn: "Human preference data for VLM evaluation is costly and becomes stale as generators improve, while distillation from proprietary judges preserves dependence on external models."
problemZh: "VLM 评测所需的人工偏好数据昂贵，并会随生成模型进步而过时；从闭源裁判蒸馏又仍然依赖外部模型。"
methodEn: "The system synthesizes easy-to-control quality pairs, obtains judge rationales and choices, keeps only judgments matching the construction rule, then fine-tunes the judge and repeats the process."
methodZh: "系统合成质量差异可控的样本对，让裁判生成理由与选择，只保留符合构造规则的判断，再微调裁判并重复这一过程。"
resultsEn: "The Llama-3.2-11B judge improves overall VL-RewardBench accuracy from 0.38 to 0.51 and often exceeds much larger models, with gains across hallucination, reasoning, and general evaluation."
resultsZh: "Llama-3.2-11B 裁判在 VL-RewardBench 上的总体准确率从 0.38 提升到 0.51，并经常超过更大模型，在幻觉、推理与一般评测维度均有提升。"
limitationsEn: "Synthetic preferences encode heuristic assumptions such as majority correctness or injected-error realism. Self-filtering may reinforce blind spots, and benchmark gains do not guarantee agreement with nuanced human values."
limitationsZh: "合成偏好依赖多数答案正确、注入错误真实等启发式假设；自筛选可能强化盲点，基准提升也不保证符合细腻的人类价值判断。"
whyReadEn: "It directly tackles who evaluates an improving model and shows a concrete bootstrap loop for evolving evaluators without a permanent human-label pipeline."
whyReadZh: "它直面“谁来评估不断进步的模型”这一问题，并展示了无需长期人工标注管线即可演化评估器的具体自举闭环。"
feedbackSource: "Known quality ordering of heuristically synthesized multimodal response pairs"
updatedObject: "The weights of a multimodal judge model"
updateMechanism: "Filter self-generated rationales and judgments, then supervised fine-tune iteratively"
successSignal: "More accurate preference judgments across multimodal reward benchmarks"
loopSummaryEn: "Synthesize preference pairs → judge with reasoning → filter by known quality → fine-tune the judge → synthesize again."
loopSummaryZh: "合成偏好对 → 带推理地判断 → 按已知质量筛选 → 微调裁判 → 再次合成。"
---

Evidence note: the workshop paper and current arXiv abstract were checked; the public arXiv version supplies the author list hidden by the workshop submission's anonymous PDF.

证据说明：已核对工作坊论文与当前 arXiv 摘要；工作坊匿名 PDF 未显示作者，作者名单取自公开 arXiv 版本。
