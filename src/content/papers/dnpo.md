---
title: "Dynamic Noise Preference Optimization: Self-Improvement of Large Language Models with Self-Synthetic Data"
titleZh: "动态噪声偏好优化：利用自合成数据实现大模型自我改进"
authors: ["Haoyan Yang", "Le Huy Khiem", "Ting Hua", "Shangqian Gao", "Binfeng Xu", "Zheng Tang", "Jie Xu", "Nitesh V. Chawla", "Hongxia Jin", "Vijay Srinivasan"]
presentation: "poster"
year: 2026
sourceIndex: 78
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=nT1gTSAf07"},{"kind":"arxiv","url":"https://arxiv.org/abs/2502.05400"}]
themes: ["self-play-synthetic-data-curriculum", "memory-continual-adaptation", "foundations-recursive-computation"]
keywords: ["preference optimization", "synthetic data", "dynamic labeling", "trainable noise", "self-training"]
difficulty: "advanced"
prerequisites: ["preference optimization", "synthetic-data self-training", "min-max optimization", "data selection"]
readingPaths: []
relatedPapers: ["inspo", "verified-synthetic-data", "shape-of-thought"]
readNext: ["inspo", "verified-synthetic-data"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=nT1gTSAf07", "https://arxiv.org/abs/2502.05400"]
summaryEn: "DNPO keeps iterative self-training from stagnating by relabeling synthetic samples as model quality changes and injecting controlled trainable noise into preference optimization to maintain useful pressure between positive and negative pairs."
summaryZh: "DNPO 随模型质量变化动态重标自合成样本，并在偏好优化中加入可控可训练噪声，维持正负样本之间的有效压力，从而避免迭代自训练停滞。"
problemEn: "Self-generated preference data quickly becomes stale as the model catches up to its own examples, causing pair quality and learning margins to collapse after a few iterations."
problemZh: "当模型迅速追上自己生成的样例时，自生成偏好数据会变得过时，样本对质量与学习间隔在几轮后坍缩。"
methodEn: "Dynamic sample labeling selects and relabels high-quality model and human data into preference pairs. Noise preference optimization learns an adversarial noise variable in a min-max objective to preserve separation and robustness."
methodZh: "动态样本标注从模型与人工数据中选择高质量内容并重新构造偏好对；噪声偏好优化在极小极大目标中学习对抗噪声变量，以维持间隔与稳健性。"
resultsEn: "With Zephyr-7B, DNPO reports an average 2.6% gain across benchmarks and a 29.4% win–loss gap over the baseline in GPT-4 evaluations, with improvements persisting across iterations."
resultsZh: "在 Zephyr-7B 上，DNPO 报告多基准平均提升 2.6%，GPT-4 评估中相对基线的胜负差为 29.4%，且提升能跨迭代维持。"
limitationsEn: "Human data remains part of labeling, GPT-4 judgments are not ground truth, and adversarial noise adds optimization complexity. Better synthetic preference margins do not ensure factual or safety gains."
limitationsZh: "标注仍使用人工数据，GPT-4 判断不是真值，对抗噪声也增加优化复杂度；更好的合成偏好间隔不保证事实性或安全性提升。"
whyReadEn: "It focuses on the temporal failure mode of self-training: data and objectives must evolve because yesterday's hard examples become today's easy ones."
whyReadZh: "它聚焦自训练的时间性失败：数据与目标必须演化，因为昨天的难例会变成今天的易例。"
feedbackSource: "Dynamic quality labels and preference margins on self-generated responses"
updatedObject: "The language model and the trainable noise used by its preference objective"
updateMechanism: "Repeated dynamic relabeling plus min-max noise preference optimization"
successSignal: "Benchmark and preference quality continue improving across self-training rounds"
loopSummaryEn: "Generate data → relabel preference pairs → optimize with trainable noise → regenerate with the stronger model → repeat."
loopSummaryZh: "生成数据 → 重标偏好对 → 用可训练噪声优化 → 用更强模型再生成 → 重复。"
---

Evidence note: the workshop paper and arXiv version were checked; the workshop author list is retained.

证据说明：已核对工作坊论文与 arXiv 版本；本站保留工作坊作者名单。
