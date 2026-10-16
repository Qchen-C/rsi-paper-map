---
title: "Do Depth-Grown Models Overcome the Curse of Depth? An In-Depth Analysis"
titleZh: "深度增长模型能克服深度诅咒吗？一项逐层分析"
authors: ["Ferdinand Kapl", "Emmanouil Angelis", "Tobias Höppe", "Kaitlin Maile", "Johannes von Oswald", "Nino Scherrer", "Stefan Bauer"]
presentation: "poster"
year: 2026
sourceIndex: 63
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=Enqas0eZF6"},{"kind":"arxiv","url":"https://arxiv.org/abs/2512.08819"}]
themes: ["recursive-models-architectures", "foundations-recursive-computation"]
keywords: ["depth growth", "transformers", "curse of depth", "MIDAS", "computational circuits"]
difficulty: "advanced"
prerequisites: ["transformers", "residual streams", "layer normalization", "mechanistic analysis"]
readingPaths: []
relatedPapers: ["growing-to-looping", "tiny-autoregressive-recursive-models", "unrolled-policy-iteration"]
readNext: ["growing-to-looping", "tiny-autoregressive-recursive-models"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=Enqas0eZF6", "https://arxiv.org/abs/2512.08819"]
summaryEn: "The paper explains why gradually adding Transformer layers can improve reasoning and efficiency. Middle-stacking growth makes later depth contribute more and encourages distinct, partly permutable computational blocks."
summaryZh: "论文解释了为何训练中逐步增加 Transformer 层数能提升推理与效率。中部堆叠式增长让后半层发挥更大作用，并形成相对独立、部分可置换的计算模块。"
problemEn: "In conventionally trained pre-layernorm Transformers, later layers can contribute little to the final output—the curse of depth—yet prior depth-growth gains lacked a mechanistic explanation."
problemZh: "常规训练的 pre-layernorm Transformer 中，后半层对最终输出贡献可能很小，即“深度诅咒”；但此前深度增长为何有效缺少机制解释。"
methodEn: "Depth-wise interventions and residual-stream analyses compare standard training with MIDAS-style gradual middle stacking. The authors also propose a lightweight growth modification and study layer permutation and block structure."
methodZh: "论文通过逐层干预与残差流分析，对比常规训练和 MIDAS 式渐进中部堆叠，并提出轻量改进，研究层置换与模块结构。"
resultsEn: "Depth-grown models use their full depth more effectively, alter residual representations, and form structured computational blocks. The proposed modification further improves downstream reasoning while retaining training-efficiency benefits."
resultsZh: "深度增长模型更充分利用全部层数，改变残差表示，并形成结构化计算模块；提出的改进还进一步提升下游推理，同时保留训练效率优势。"
limitationsEn: "Mechanistic observations come from selected model sizes, architectures, and datasets. Growth schedule adds its own hyperparameters, and permutability does not prove a block implements a clean human-interpretable algorithm."
limitationsZh: "机制观察来自特定模型规模、架构与数据集；增长日程又引入新超参数，而且层可置换并不能证明模块实现了清晰可解释算法。"
whyReadEn: "It connects architectural growth to recurring computation and shows that how depth is learned matters, not just how many layers are present."
whyReadZh: "它把架构增长与重复计算联系起来，说明关键不只是层数多少，还包括深度如何被学出来。"
feedbackSource: "Training loss, downstream reasoning results, and depth-wise causal interventions"
updatedObject: "The Transformer's layer stack during training"
updateMechanism: "Gradual middle-layer duplication and continued optimization"
successSignal: "Later layers contribute useful computation and reasoning performance improves"
loopSummaryEn: "Train a shallower model → insert middle layers → continue training → inspect depth utilization → grow again."
loopSummaryZh: "训练较浅模型 → 插入中间层 → 继续训练 → 检查深度利用 → 再增长。"
---

Evidence note: the conference paper and arXiv abstract were checked.

证据说明：已核对会议论文与 arXiv 摘要。
