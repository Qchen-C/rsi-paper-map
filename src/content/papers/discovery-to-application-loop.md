---
title: "Can Current Language Models Close the Discovery to Application Loop?"
titleZh: "当前语言模型能否闭合从发现到应用的循环？"
authors: ["Ziheng Zhou", "Huacong Tang", "Jinyuan Zhang", "Haowei Lin", "Bangcheng Yang", "Qian Long", "Fang Sun", "Yizhou Sun", "Yitao Liang", "Ying Nian Wu", "Demetri Terzopoulos", "Xiaofeng Gao"]
presentation: "spotlight"
year: 2026
sourceIndex: 16
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=BAdK20xfqj"},{"kind":"arxiv","url":"https://arxiv.org/abs/2604.24697"}]
themes: ["scientific-discovery-applications", "verification-evaluation-safety", "agents-tools-code-evolution"]
keywords: ["SciCrafter", "Minecraft", "scientific discovery", "causal regularities", "agent evaluation"]
difficulty: "intermediate"
prerequisites: ["LLM agents", "causal discovery", "interactive benchmarks", "Minecraft redstone"]
readingPaths: []
relatedPapers: ["causalevolve", "execution-grounded-ai-research", "agent0"]
readNext: ["causalevolve", "execution-grounded-ai-research"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=BAdK20xfqj", "https://arxiv.org/abs/2604.24697"]
summaryEn: "SciCrafter evaluates whether an agent can discover causal regularities through experiments and then apply the learned knowledge to build parameterized redstone circuits in Minecraft. Increasing target parameters makes construction complexity grow sharply and discourages memorized solutions."
summaryZh: "SciCrafter 评估智能体能否通过实验发现因果规律，再把学到的知识用于在 Minecraft 中构建参数化红石电路。随着目标参数增大，构造复杂度急剧上升，从而减少依赖记忆答案的可能。"
problemEn: "Scientific discovery and real engineering are too broad to evaluate as one closed loop. Existing benchmarks often test either reasoning about observations or executing a known procedure, but not the transition from unknown mechanism to working system."
problemZh: "科学发现与现实工程跨度过大，难以作为一个闭环评估。已有基准往往只测试从观察中推理，或执行已知流程，而没有测试从未知机制到可工作系统的完整转换。"
methodEn: "Agents must ignite lamps in specified simultaneous or timed patterns by experimenting with redstone components. The benchmark decomposes performance into knowledge-gap identification, experimental discovery, knowledge consolidation, and knowledge application, then applies targeted interventions to isolate bottlenecks."
methodZh: "智能体需要通过实验红石组件，让灯按指定的同步或时序模式点亮。基准把能力拆为知识缺口识别、实验发现、知识巩固和知识应用，并用定向干预隔离瓶颈。"
resultsEn: "The authors report that frontier models plateau around a 25% success rate. Knowledge application is the main bottleneck for mid-to-lower-tier models, while identifying the right knowledge gap becomes the primary limitation for frontier systems."
resultsZh: "作者报告前沿模型成功率停滞在约 25%。中低档模型的主要瓶颈是知识应用，而对前沿系统来说，正确识别知识缺口成为首要限制。"
limitationsEn: "Minecraft redstone provides a controllable proxy rather than the full uncertainty, cost, and social context of real science and engineering. Intervention-based diagnoses also depend on how faithfully each sub-capability is operationalized."
limitationsZh: "Minecraft 红石是可控代理，无法覆盖真实科学与工程中的全部不确定性、成本与社会语境；基于干预的诊断也依赖各子能力被如何操作化。"
whyReadEn: "It supplies a useful decomposition for asking where a recursive discovery agent actually fails, instead of summarizing the whole loop with one success score."
whyReadZh: "它提供了一套实用分解，能定位递归发现智能体究竟在哪一环失败，而不是只用一个总成功率概括整条链路。"
feedbackSource: "Observed outcomes of redstone experiments and whether constructed circuits meet target behavior"
updatedObject: "The agent's causal hypotheses, consolidated knowledge, and construction plan"
updateMechanism: "Iterative experimentation, diagnosis, memory consolidation, and engineering application"
successSignal: "A functioning redstone circuit that satisfies the requested parameterized pattern"
loopSummaryEn: "Identify a knowledge gap → design an experiment → observe causal behavior → consolidate the rule → build and test a circuit → revise."
loopSummaryZh: "识别知识缺口 → 设计实验 → 观察因果行为 → 巩固规律 → 构建并测试电路 → 修订。"
---

Evidence note: the workshop paper and its current arXiv version were checked. The arXiv title now says “agents” and “gap”; the workshop's original English title is retained here.

证据说明：已核对研讨会论文及其当前 arXiv 版本。arXiv 标题现改为“agents”和“gap”，本站保留研讨会原始英文标题。
