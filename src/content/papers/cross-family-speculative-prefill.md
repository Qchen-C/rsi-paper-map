---
title: "Cross-Family Speculative Prefill: Training-Free Long-Context Compression with Small Draft Models"
titleZh: "跨模型家族推测式预填充：用小型草稿模型无训练压缩长上下文"
authors: ["Shubhangi Upasani", "Ravi Shanker Raju", "Bo Li", "Mengmeng Ji", "John Long", "Chen Wu", "Urmish Thakker", "Guangtao Wang"]
presentation: "short"
year: 2026
sourceIndex: 104
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=7dNjMllnWe"}]
themes: ["test-time-learning-inference-scaling", "agents-tools-code-evolution"]
keywords: ["prompt compression", "speculative prefill", "long context", "draft models", "attention importance"]
difficulty: "advanced"
prerequisites: ["transformer attention", "LLM inference", "prompt compression", "tokenization"]
readingPaths: []
relatedPapers: ["contextual-drag", "log-augmented-generation", "simplemem"]
readNext: ["contextual-drag", "log-augmented-generation"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=7dNjMllnWe"]
summaryEn: "A small draft model estimates attention-based token importance and compresses a prompt before a larger target model reads it—even when the two models use different architectures and tokenizers. No extra training is required."
summaryZh: "小型草稿模型依据注意力估计 token 重要性，并在大型目标模型读取前压缩提示，即使两者架构和分词器不同；整个过程无需额外训练。"
problemEn: "Repeated long-context calls make prompt prefill a major agent latency cost, yet many frontier targets have no smaller same-family model that shares their tokenizer."
problemZh: "重复长上下文调用使提示预填充成为智能体延迟的主要来源，但许多前沿目标模型没有共享分词器的小型同家族模型。"
methodEn: "The draft model scores semantic token importance, those scores are mapped across tokenizer boundaries, and only a compressed subset is passed to Qwen, LLaMA, or DeepSeek-family targets."
methodZh: "草稿模型评估语义 token 重要性，重要性跨分词器边界映射，再只把压缩后的子集传给 Qwen、LLaMA 或 DeepSeek 家族目标模型。"
resultsEn: "Across diverse tasks, cross-family compression retains roughly 90–100% of full-prompt performance, occasionally improves accuracy through denoising, and substantially reduces time to first token."
resultsZh: "在多种任务上，跨家族压缩保留完整提示约 90–100% 的表现，偶尔因去噪而提升准确率，并显著降低首 token 延迟。"
limitationsEn: "Importance transfer can fail when the draft model lacks the target's task knowledge or token alignment is poor. Compression risks dropping rare decisive evidence, and latency gains depend on implementation overhead."
limitationsZh: "当草稿模型缺少目标任务知识或 token 对齐较差时，重要性迁移可能失败；压缩会丢掉稀有但关键的证据，延迟收益也依赖实现开销。"
whyReadEn: "It makes long-context agent loops cheaper with a model-agnostic component and suggests token importance reflects transferable task structure."
whyReadZh: "它用模型无关组件降低长上下文智能体闭环成本，并提示 token 重要性可能反映可迁移的任务结构。"
feedbackSource: "Draft-model attention patterns and downstream target-model task performance"
updatedObject: "The subset of context tokens sent to the target model"
updateMechanism: "Training-free importance scoring and cross-tokenizer prompt compression"
successSignal: "Lower prefill latency while preserving full-context answer quality"
loopSummaryEn: "Score a long prompt with a small model → retain important content → prefill the target → measure quality and latency."
loopSummaryZh: "用小模型给长提示评分 → 保留重要内容 → 预填充目标模型 → 测量质量与延迟。"
---

Evidence note: the public conference paper corresponding to the workshop listing was checked.

证据说明：已核对与工作坊条目对应的公开会议论文。
