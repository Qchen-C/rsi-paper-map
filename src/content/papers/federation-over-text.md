---
title: "Federation over Text"
titleZh: "文本联邦"
authors: ["Dixi Yao", "Tahseen Rabbani", "Tian Li"]
presentation: "short"
year: 2026
sourceIndex: 107
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=gh7aCT73cq"}]
themes: ["memory-continual-adaptation", "agents-tools-code-evolution", "scientific-discovery-applications"]
keywords: ["federated agents", "insight library", "reasoning traces", "metacognition", "cross-domain transfer"]
difficulty: "intermediate"
prerequisites: ["multi-agent systems", "federated learning", "reflection", "agent memory"]
readingPaths: []
relatedPapers: ["fedagent", "mappa", "ace-context-engineering"]
readNext: ["fedagent", "mappa"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=gh7aCT73cq"]
summaryEn: "Federation over Text lets agents share concise metacognitive reasoning traces rather than gradients, weights, prompts, or raw tasks. A server distills recurring strategies into a human-readable insight library and broadcasts it back."
summaryZh: "文本联邦让智能体共享简洁的元认知推理轨迹，而不是梯度、权重、提示或原始任务；服务器把重复策略提炼为人类可读的洞见库，再广播给各智能体。"
problemEn: "Agents repeatedly solve related problems in isolation, but weight federation is expensive or impossible for closed models and raw trace sharing exposes data while remaining hard to reuse."
problemZh: "智能体常彼此孤立地重复解决相关问题，但权重联邦对闭源模型昂贵甚至不可行，直接共享原始轨迹又暴露数据且难复用。"
methodEn: "Each agent solves and reflects locally, uploads an abstract reasoning summary, and consumes a server-curated library. The server clusters related skills, merges complementary strategies, and updates the library each round."
methodZh: "每个智能体在本地求解和反思，上传抽象推理摘要，并使用服务器整理的洞见库；服务器聚类相关技能、合并互补策略并逐轮更新。"
resultsEn: "Across math, science QA, coding, and research-insight discovery, FoT improves reasoning and efficiency; the workshop paper reports up to 36% math-accuracy gain and 28% fewer generated tokens."
resultsZh: "在数学、科学问答、编程和科研洞见发现中，FoT 改善推理与效率；工作坊论文报告数学准确率最高提升 36%，生成 token 最多减少 28%。"
limitationsEn: "Text summaries can leak sensitive facts, distort local reasoning, or collapse minority strategies during aggregation. A central LLM curator introduces bias and a trust bottleneck."
limitationsZh: "文本摘要可能泄露敏感事实、扭曲本地推理，或在聚合中压制少数策略；中央 LLM 筛选器还引入偏差与信任瓶颈。"
whyReadEn: "It offers a readable, model-agnostic alternative to federated weights: agents exchange the procedures they learned, not their parameters."
whyReadZh: "它提供了可读、模型无关的权重联邦替代方案：智能体交换学到的步骤与策略，而不是参数。"
feedbackSource: "Local task outcomes and reflected reasoning traces contributed by participating agents"
updatedObject: "A shared cross-task library of reusable metacognitive insights"
updateMechanism: "Cluster, connect, distill, and rebroadcast natural-language reasoning summaries"
successSignal: "Higher cross-agent reasoning accuracy with fewer generated tokens"
loopSummaryEn: "Solve locally → reflect on reusable skills → share summaries → aggregate the insight library → solve again with shared knowledge."
loopSummaryZh: "本地求解 → 反思可复用技能 → 共享摘要 → 聚合洞见库 → 用共享知识再次求解。"
---

Evidence note: the workshop paper was checked; the site preserves the shorter workshop title while later versions add the subtitle “Insight Sharing for Multi-Agent Reasoning.”

证据说明：已核对工作坊论文；本站保留较短的工作坊标题，后续版本增加副标题《Insight Sharing for Multi-Agent Reasoning》。
