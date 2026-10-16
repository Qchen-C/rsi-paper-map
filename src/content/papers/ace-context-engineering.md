---
title: "Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models"
titleZh: "智能体上下文工程：为自我改进语言模型演化上下文"
authors: ["Qizheng Zhang", "Changran Hu", "Shubhangi Upasani", "Boyuan Ma", "Fenglu Hong", "Vamsidhar Kamanuru", "Jay Rainton", "Chen Wu", "Mengmeng Ji", "Hanchen Li", "Urmish Thakker", "James Zou", "Kunle Olukotun"]
presentation: "poster"
year: 2026
sourceIndex: 71
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=f1eKYFvMNu"},{"kind":"arxiv","url":"https://arxiv.org/abs/2510.04618"},{"kind":"project","url":"https://ace-agent.github.io/"}]
themes: ["memory-continual-adaptation", "agents-tools-code-evolution", "test-time-learning-inference-scaling"]
keywords: ["context engineering", "agent memory", "evolving playbooks", "reflection", "curation"]
difficulty: "intermediate"
prerequisites: ["LLM agents", "in-context learning", "reflection", "long-context models"]
readingPaths: []
relatedPapers: ["agentic-memory-designs", "simplemem", "test-time-curriculum-curation"]
readNext: ["agentic-memory-designs", "test-time-curriculum-curation"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=f1eKYFvMNu", "https://arxiv.org/abs/2510.04618", "https://ace-agent.github.io/"]
summaryEn: "ACE treats prompts and agent memory as evolving playbooks. Separate generation, reflection, and curation modules add useful strategies incrementally instead of repeatedly rewriting context into a shorter summary."
summaryZh: "ACE 把提示与智能体记忆视为不断演化的行动手册。生成、反思与筛选模块分工，以增量方式加入有用策略，而不是反复把上下文重写成更短摘要。"
problemEn: "Iterative context adaptation often has brevity bias and context collapse: concise rewrites discard domain insights, and repeated summarization gradually erases detail."
problemZh: "迭代上下文适应常出现简短偏置与上下文坍缩：精炼重写丢弃领域洞见，反复摘要逐渐抹掉细节。"
methodEn: "New trajectories generate candidate lessons, a reflector extracts reusable insights, and a curator merges them into a structured playbook while resolving redundancy and preserving existing knowledge. The same loop works offline for prompts and online for memory."
methodZh: "新轨迹生成候选经验，反思器提炼可复用洞见，筛选器在消除冗余的同时将其合并进结构化手册并保留旧知识；同一闭环既可离线优化提示，也可在线维护记忆。"
resultsEn: "ACE reports gains of 10.6% on agent benchmarks and 8.6% in finance while reducing latency and rollout cost. On AppWorld it matches the top production agent overall and exceeds it on the harder split with a smaller open model."
resultsZh: "ACE 报告在智能体基准提升 10.6%、金融任务提升 8.6%，同时降低延迟和 rollout 成本；在 AppWorld 上以较小开放模型匹配总体第一的生产智能体，并在困难划分上超过它。"
limitationsEn: "An ever-growing playbook still consumes context and may preserve obsolete or misleading lessons. Natural execution feedback is not always trustworthy, and curation errors can compound over time."
limitationsZh: "不断增长的手册仍占用上下文，也可能保留过时或误导经验；自然执行反馈并非总是可信，筛选错误还可能随时间累积。"
whyReadEn: "It is a practical architecture for learning without weight updates and a strong design reference for the personal-study features of this site."
whyReadZh: "它是不改权重也能持续学习的实用架构，也是本站个人学习功能很有价值的设计参考。"
feedbackSource: "Natural execution outcomes and reflective analysis of agent trajectories"
updatedObject: "A structured context playbook used as prompt or agent memory"
updateMechanism: "Generate, reflect, and incrementally curate reusable strategy entries"
successSignal: "Better task performance without context collapse or expensive weight updates"
loopSummaryEn: "Run the agent → extract lessons → reflect on reusable strategies → curate the playbook → run again."
loopSummaryZh: "运行智能体 → 提取经验 → 反思可复用策略 → 筛选写入手册 → 再运行。"
---

Evidence note: the conference paper, arXiv abstract, and official project page were checked.

证据说明：已核对会议论文、arXiv 摘要与官方项目页。
