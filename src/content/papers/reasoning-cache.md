---
title: "Reasoning Cache: Learning to Extrapolate to Long Lengths via Short-Length RL"
titleZh: "推理缓存：通过短长度强化学习外推到长推理"
authors: ["Ian Wu", "Yuxiao Qu", "Amrith Setlur", "Aviral Kumar"]
presentation: "poster"
year: 2026
sourceIndex: 55
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=DROMQyqM52"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.03773"},{"kind":"code","url":"https://github.com/IanYHWu/rc"}]
themes: ["test-time-learning-inference-scaling", "memory-continual-adaptation", "recursive-models-architectures"]
keywords: ["reasoning cache", "iterative decoding", "test-time scaling", "summarization", "length extrapolation"]
difficulty: "advanced"
prerequisites: ["reinforcement learning", "autoregressive decoding", "test-time compute", "context compression"]
readingPaths: []
relatedPapers: ["test-time-self-distillation", "compute-as-teacher", "growing-to-looping"]
readNext: ["test-time-self-distillation", "compute-as-teacher"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2602.03773", "https://proceedings.mlr.press/v306/wu26as.html", "https://github.com/IanYHWu/rc"]
summaryEn: "Reasoning Cache alternates bounded reasoning generation with summarization, discarding raw history while carrying forward a compact state. Short-horizon RL teaches the model to use this loop at inference horizons far longer than those seen in training."
summaryZh: "Reasoning Cache 在有界推理生成与摘要之间交替，丢弃原始历史并携带紧凑状态。短时域强化学习让模型学会在远超训练长度的推理时域中使用这一闭环。"
problemEn: "Standard on-policy RL trains at fixed response lengths, so simply granting much more inference compute causes distribution shift, context bloat, and weak length extrapolation."
problemZh: "标准在线 RL 在固定回答长度上训练，因此仅在推理时增加大量算力会造成分布偏移、上下文膨胀与较差的长度外推。"
methodEn: "RC repeatedly generates a bounded reasoning segment, summarizes the useful state into a cache, and conditions the next segment on that cache. Outcome-reward RL trains summary-conditioned generation without requiring prohibitively long rollouts."
methodZh: "RC 反复生成有界长度推理片段，把有用状态总结进缓存，再以缓存为条件生成下一段；结果奖励 RL 训练这种摘要条件推理，而无需昂贵的超长 rollout。"
resultsEn: "A 4B model trained with a 16k-token budget improves on HMMT 2025 from 40% to nearly 70% when given about 512k test-time tokens, extrapolating more than an order of magnitude beyond training."
resultsZh: "一个使用 16k token 预算训练的 4B 模型，在约 512k 测试时 token 下将 HMMT 2025 成绩从 40% 提升到接近 70%，外推超过一个数量级。"
limitationsEn: "Half-million-token inference remains expensive, summaries can irreversibly omit useful details, and the strongest evidence is on mathematical and scientific reasoning with outcome checks."
limitationsZh: "五十万 token 级推理仍然昂贵，摘要可能不可逆地遗漏关键信息，且最强证据集中于有结果检查的数学与科学推理。"
whyReadEn: "It offers a concrete memory mechanism for converting more test-time tokens into continued progress rather than a longer, increasingly redundant transcript."
whyReadZh: "它提供了具体记忆机制，把更多测试时 token 转化为持续进展，而非越来越冗长的原始记录。"
feedbackSource: "Outcome rewards after iterative summary-conditioned reasoning"
updatedObject: "The compact reasoning cache and the policy that consumes it"
updateMechanism: "Alternating generation and summarization, trained with short-horizon RL"
successSignal: "Accuracy keeps rising at inference budgets far beyond the training horizon"
loopSummaryEn: "Reason for a bounded span → summarize progress → discard raw history → continue from the cache → verify the outcome."
loopSummaryZh: "有界推理一段 → 总结进展 → 丢弃原始历史 → 从缓存继续 → 验证结果。"
---

Evidence note: the later arXiv/PMLR version, renamed “Continual Improvement Over Long Horizons via Short-Horizon RL,” and the official code were checked; the workshop title is retained.

证据说明：已核对后续改名为“Continual Improvement Over Long Horizons via Short-Horizon RL”的 arXiv/PMLR 版本与官方代码；本站保留工作坊标题。
