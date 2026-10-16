---
title: "Rethinking Machine Unlearning: Models Designed to Forget via Key Deletion"
titleZh: "重新思考机器遗忘：通过删除密钥让模型天生会忘记"
authors: ["Sonia Laguna", "Jorge da Silva Goncalves", "Moritz Vandenhirtz", "Alain Ryser", "Irene Cannistraci", "Julia E. Vogt"]
presentation: "poster"
year: 2026
sourceIndex: 41
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=gGH3Xp1lHR"},{"kind":"arxiv","url":"https://arxiv.org/abs/2603.15033"}]
themes: ["memory-continual-adaptation", "verification-evaluation-safety", "foundations-recursive-computation"]
keywords: ["machine unlearning", "key deletion", "external memory", "privacy", "memory-augmented transformer"]
difficulty: "intermediate"
prerequisites: ["transformers", "machine unlearning", "key-value memory", "retention and forgetting metrics"]
readingPaths: []
relatedPapers: ["simplemem", "agentic-memory-designs", "verified-synthetic-data"]
readNext: ["simplemem", "agentic-memory-designs"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2603.15033"]
summaryEn: "MUNKEY treats forgetting as a capability to design into the model rather than a post-hoc repair. Its memory-augmented transformer separates instance-specific memorization from shared weights so a sample can be forgotten by deleting its identifying key."
summaryZh: "MUNKEY 不把遗忘视为训练后的补救，而把它设计成模型的原生能力。其记忆增强 Transformer 将样本级记忆与共享权重分离，因此删除样本对应的识别密钥即可完成遗忘。"
problemEn: "Most unlearning methods modify weights after a deletion request and may require the original retain set, which is expensive and poorly matched to deployments where deletion requests are foreseeable."
problemZh: "多数遗忘方法在收到删除请求后再修改权重，还可能需要原始保留数据集；这既昂贵，也不适合本可预见删除请求的真实部署。"
methodEn: "The model stores instance-specific information in an addressable memory while learning reusable representations in its weights. Unlearning becomes a set deletion operation on the relevant key, requiring no gradient update and no access to the removed sample or label."
methodZh: "模型把样本特定信息存入可寻址记忆，把可复用表示保留在权重中。遗忘被转化为删除相应密钥的集合操作，无需梯度更新，也无需再次访问被删样本或标签。"
resultsEn: "The abstract reports stronger unlearning than post-hoc baselines across natural-image, fine-grained recognition, and medical datasets, while retaining predictive performance and providing immediate zero-shot deletion."
resultsZh: "摘要报告该方法在自然图像、细粒度识别和医疗数据集上优于事后遗忘基线，同时保持预测性能，并能即时完成零样本删除。"
limitationsEn: "The architecture must be trained for deletability from the start and carries an external-memory cost. Removing a key is operationally clear, but the abstract does not establish a formal privacy guarantee that every influence of the sample is gone."
limitationsZh: "该架构必须从训练之初就为可删除性设计，并承担外部记忆开销。删除密钥在操作上很清楚，但摘要并未给出形式化隐私保证，证明样本的所有影响都已消失。"
whyReadEn: "It offers a clean architectural answer to a governance problem: make future rollback cheap by deciding where mutable knowledge lives before training."
whyReadZh: "它用架构设计回答了治理问题：在训练前就决定可变知识存放在哪里，从而让未来回滚变得廉价。"
feedbackSource: "A deletion request plus retention and forgetting evaluations"
updatedObject: "The model's addressable instance-memory keys"
updateMechanism: "Delete the key that exposes the requested instance-specific memory"
successSignal: "The target sample is forgotten while retained-task accuracy remains high"
loopSummaryEn: "Store sample-specific memory behind a key → receive a deletion request → remove that key → audit forgetting and retention."
loopSummaryZh: "用密钥存放样本记忆 → 收到删除请求 → 删除对应密钥 → 审计遗忘效果与保留性能。"
---

Evidence note: the workshop entry and current arXiv abstract were checked.

证据说明：已核对工作坊条目与当前 arXiv 摘要。
