---
title: "SimpleMem: Efficient Lifelong Memory for LLM Agents"
titleZh: "SimpleMem：面向 LLM 智能体的高效终身记忆"
authors: ["Jiaqi Liu", "Yaofeng Su", "Peng Xia", "Siwei Han", "Zeyu Zheng", "Cihang Xie", "Mingyu Ding", "Huaxiu Yao"]
presentation: "spotlight"
year: 2026
sourceIndex: 6
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=oYHelQ3Edd"},{"kind":"arxiv","url":"https://arxiv.org/abs/2601.02553"},{"kind":"code","url":"https://github.com/aiming-lab/SimpleMem"}]
themes: ["memory-continual-adaptation"]
keywords: ["lifelong memory", "semantic compression", "memory consolidation", "intent-aware retrieval", "LLM agents"]
difficulty: "entry"
prerequisites: ["LLM agents", "retrieval-augmented generation", "long-context reasoning"]
readingPaths: [{"id":"entry","order":3},{"id":"memory-continual-learning","order":1}]
relatedPapers: ["agentic-memory-designs", "parametric-skill-transfer"]
readNext: ["agentic-memory-designs"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2601.02553", "https://github.com/aiming-lab/SimpleMem"]
summaryEn: "SimpleMem is a three-stage lifelong-memory pipeline that compresses interactions into structured units, synthesizes related memories online, and plans retrieval from user intent to preserve useful experience with far fewer tokens."
summaryZh: "SimpleMem 是三阶段终身记忆流水线：先把交互压缩成结构化记忆单元，再在线合并相关内容，最后依据当前意图规划检索范围，以更少 token 保留和调用长期经验。"
problemEn: "Keeping full interaction histories creates heavy redundancy, while repeatedly asking an LLM to filter or summarize memory raises inference cost."
problemZh: "完整保留交互历史会产生大量冗余，而反复调用模型筛选或总结记忆又会显著增加推理成本。"
methodEn: "Semantic Structured Compression creates compact multi-view indexed units; Online Semantic Synthesis merges related context into unified abstractions within a session; Intent-Aware Retrieval Planning infers the current search goal and selects a precise retrieval scope."
methodZh: "语义结构化压缩生成紧凑的多视角索引单元；在线语义合成在会话内把相关上下文合并为统一抽象；意图感知检索规划推断当前搜索目标并动态选择精确范围。"
resultsEn: "The abstract reports consistent gains in accuracy, retrieval efficiency, and cost, including a 26.4% average F1 improvement on LoCoMo and up to a 30-fold reduction in inference-time token use versus baselines."
resultsZh: "摘要报告其在准确率、检索效率和成本上持续优于基线：LoCoMo 平均 F1 提升 26.4%，推理时 token 消耗最多降低 30 倍。"
limitationsEn: "Compression can hide details that later become important, and intent planning depends on correctly inferring the current need. Abstract-level evidence does not yet show how the memory behaves over very long deployments or under adversarially misleading histories."
limitationsZh: "压缩可能丢失后来才显得重要的细节，意图规划也依赖对当前需求的正确判断。摘要证据尚未说明它在超长期部署或带有误导历史的环境中如何表现。"
whyReadEn: "SimpleMem is an accessible systems paper for understanding that continual improvement may come from reorganizing experience rather than changing model weights."
whyReadZh: "SimpleMem 很适合用来理解另一种持续改进：系统不必修改模型权重，也可以通过重组、压缩和精确调用经验变得更有效。"
feedbackSource: "New interactions, semantic overlap among memories, and the current query intent"
updatedObject: "The structured long-term memory store and its synthesized abstractions"
updateMechanism: "Semantic compression, online consolidation, and intent-aware retrieval planning"
successSignal: "Higher long-context QA F1 with lower retrieval latency and token consumption"
loopSummaryEn: "Observe interaction → compress it into indexed memory → merge overlapping experience → infer the next intent → retrieve a smaller, more useful context."
loopSummaryZh: "观察交互 → 压缩为可索引记忆 → 合并重叠经验 → 推断下一次意图 → 检索更小但更有用的上下文。"
---

Evidence note: the arXiv abstract and official repository were checked; full-text section verification remains pending.

证据说明：已核对 arXiv 摘要与官方仓库，论文全文分节核对仍待完成。
