---
title: "Tiny Autoregressive Recursive Models"
titleZh: "小型自回归递归模型"
authors: ["Paulius Rauba", "Claudio Fanconi", "Mihaela van der Schaar"]
presentation: "spotlight"
year: 2026
sourceIndex: 11
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=aY5kmaNrwB"},{"kind":"arxiv","url":"https://arxiv.org/abs/2603.08082"},{"kind":"code","url":"https://github.com/pauliusrauba/autoregressive-TRM"}]
themes: ["recursive-models-architectures", "foundations-recursive-computation"]
keywords: ["recursive models", "iterative refinement", "autoregressive modeling", "algorithmic reasoning", "negative results"]
difficulty: "advanced"
prerequisites: ["Transformers", "autoregressive language modeling", "iterative refinement", "algorithmic reasoning benchmarks"]
readingPaths: []
relatedPapers: ["growing-to-looping", "agent0"]
readNext: ["growing-to-looping"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2603.08082", "https://github.com/pauliusrauba/autoregressive-TRM"]
summaryEn: "This controlled study asks whether a tiny recurrent model benefits from making its two-step refinement process autoregressive. It morphs a standard Transformer into an autoregressive Tiny Recursive Model while keeping the blocks, token stream, and next-token objective comparable."
summaryZh: "这项受控研究检验：把两步迭代细化过程改成自回归形式，是否能让小型递归模型受益。作者在尽量保持模块、token 流和下一 token 目标一致的前提下，把标准 Transformer 逐步改造成自回归 Tiny Recursive Model。"
problemEn: "Claims about recursive architectures are difficult to interpret when model size, training objective, tokenization, and compute all change at once. The paper isolates the architectural question under compute-matched character-level algorithmic tasks."
problemZh: "当模型规模、训练目标、token 化与算力同时变化时，很难判断递归架构本身是否有效。论文在算力匹配的字符级算法任务上隔离架构变量。"
methodEn: "The authors build a controlled family ranging from a standard Transformer to two-level refinement baselines and the full Autoregressive TRM. A latent reasoning state and predicted output are repeatedly updated, enabling direct comparisons of where recurrence helps."
methodZh: "作者构造了从标准 Transformer、两层细化基线到完整 Autoregressive TRM 的受控模型族，通过重复更新潜在推理状态与预测输出，直接比较递归机制在何处有效。"
resultsEn: "Several simpler two-level refinement baselines are competitive, but the abstract reports no reliable gain from the full Autoregressive TRM. The result supports studying two-step refinement while cautioning against assuming that more elaborate autoregressive recursion automatically helps."
resultsZh: "若干更简单的两层细化基线表现有竞争力，但摘要未发现完整 Autoregressive TRM 带来可靠增益。结果支持继续研究两步细化，同时警示不要把更复杂的自回归递归等同于必然提升。"
limitationsEn: "The evidence comes from character-level algorithmic tasks under a particular controlled setup, so the negative result does not rule out other recursive designs, scales, data regimes, or natural-language tasks."
limitationsZh: "证据来自特定受控设置下的字符级算法任务，因此这一负结果不能排除其他递归设计、规模、数据条件或自然语言任务中的收益。"
whyReadEn: "It is a valuable negative-result paper: it separates the broad promise of iterative refinement from one specific autoregressive implementation."
whyReadZh: "这是一篇很有价值的负结果论文：它把“迭代细化可能有效”与“某一种自回归实现必然有效”区分开来。"
feedbackSource: "Errors in the current predicted output under the shared next-token objective"
updatedObject: "A latent reasoning state and the predicted output"
updateMechanism: "Repeated two-step refinement with shared tiny-model parameters"
successSignal: "Higher accuracy on compute-matched character-level algorithmic tasks"
loopSummaryEn: "Predict an output → update the latent reasoning state → refine the output → repeat under shared parameters → compare against controlled baselines."
loopSummaryZh: "预测输出 → 更新潜在推理状态 → 细化输出 → 在共享参数下重复 → 与受控基线比较。"
---

Evidence note: the abstract and official code repository were checked. The lack of a reliable gain for the full autoregressive variant is a central finding, not a missing result.

证据说明：已核对摘要与官方代码仓库。完整自回归变体未获得可靠增益是论文的核心发现，而不是数据缺失。
