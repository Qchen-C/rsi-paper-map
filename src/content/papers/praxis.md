---
title: "Real-Time Procedural Learning From Experience for AI Agents"
titleZh: "面向 AI 智能体的实时经验式程序学习"
authors: ["Dasheng Bi", "Yubin Hu", "Mohammed N. Nasir"]
presentation: "short"
year: 2026
sourceIndex: 101
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=MKG4BaSieN"},{"kind":"arxiv","url":"https://arxiv.org/abs/2511.22074"}]
themes: ["memory-continual-adaptation", "agents-tools-code-evolution"]
keywords: ["procedural memory", "experience retrieval", "stateful agents", "web browsing", "online adaptation"]
difficulty: "entry"
prerequisites: ["LLM agents", "retrieval-augmented generation", "episodic memory", "web agents"]
readingPaths: []
relatedPapers: ["agentic-memory-designs", "simplemem", "ace-context-engineering"]
readNext: ["agentic-memory-designs", "ace-context-engineering"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=MKG4BaSieN", "https://arxiv.org/abs/2511.22074"]
summaryEn: "PRAXIS records state–action–result experiences during deployment and retrieves them by matching both the environment and the agent's internal state. Retrieved exemplars guide the next action without weight updates."
summaryZh: "PRAXIS 在部署过程中记录“状态—动作—结果”经验，并同时匹配环境状态与智能体内部状态进行检索；取回的示例无需更新权重即可指导下一步动作。"
problemEn: "Most deployed LLM agents repeatedly rediscover procedures after websites or workflows change because they lack a mechanism to retain action consequences in real time."
problemZh: "大多数已部署 LLM 智能体缺少实时保留动作后果的机制，因此网站或工作流变化后只能反复重新探索操作步骤。"
methodEn: "Every interaction produces a state-indexed procedural example. At decision time, a joint state matcher retrieves relevant prior actions and outcomes and appends them to the agent's action-selection context."
methodZh: "每次交互都会形成按状态索引的程序示例；决策时，联合状态匹配器检索相关历史动作与结果，并加入智能体的动作选择上下文。"
resultsEn: "On the REAL web-browsing benchmark, PRAXIS reports better completion accuracy, reliability, and cost efficiency across multiple foundation models, with preliminary transfer to unseen tasks in similar environments."
resultsZh: "在 REAL 网页浏览基准上，PRAXIS 在多个基础模型上提升任务完成准确率、可靠性和成本效率，并初步迁移到相似环境中的未见任务。"
limitationsEn: "Retrieval can replay stale or unsafe procedures after an environment changes. The evidence is focused on web browsing, and persistent experience stores raise privacy, deletion, and contamination concerns."
limitationsZh: "环境变化后，检索可能重放过时或不安全流程；证据集中于网页浏览，持久经验库还带来隐私、删除与污染问题。"
whyReadEn: "It is an accessible example of deployment-time learning as memory: fail once, store what happened, and make the next attempt procedurally different."
whyReadZh: "它是“把部署期学习做成记忆”的易懂案例：失败一次、记住后果，让下一次尝试在流程上真正不同。"
feedbackSource: "Observed consequences of agent actions in a stateful environment"
updatedObject: "An external procedural memory of state–action–result exemplars"
updateMechanism: "Write experiences online and retrieve them with joint environment/internal-state matching"
successSignal: "More reliable task completion with fewer repeated mistakes and lower interaction cost"
loopSummaryEn: "Observe state → act → record the result → retrieve matching experience later → choose a better action."
loopSummaryZh: "观察状态 → 执行动作 → 记录结果 → 日后检索匹配经验 → 选择更好动作。"
---

Evidence note: the workshop paper and current arXiv abstract were checked.

证据说明：已核对工作坊论文与当前 arXiv 摘要。
