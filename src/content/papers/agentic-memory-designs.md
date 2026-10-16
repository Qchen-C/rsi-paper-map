---
title: "Learning to Continually Learn via Meta-learning Agentic Memory Designs"
titleZh: "通过元学习智能体记忆设计实现持续学习"
authors: ["Yiming Xiong", "Shengran Hu", "Jeff Clune"]
presentation: "oral"
year: 2026
sourceIndex: 3
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=sOq52KnJmR"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.07755"},{"kind":"code","url":"https://github.com/zksha/alma"},{"kind":"project","url":"https://yimingxiong.me/alma"}]
themes: ["memory-continual-adaptation", "agents-tools-code-evolution"]
keywords: ["ALMA", "agentic memory", "meta-learning", "continual learning", "program synthesis"]
difficulty: "intermediate"
prerequisites: ["LLM agents", "episodic memory", "retrieval", "meta-learning"]
readingPaths: [{"id":"entry","order":3},{"id":"memory-continual-learning","order":1}]
relatedPapers: ["agent0", "posttrainbench"]
readNext: ["posttrainbench"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2602.07755", "https://github.com/zksha/alma", "https://yimingxiong.me/alma"]
summaryEn: "ALMA meta-learns executable memory-system designs instead of fixing a hand-written schema, retriever, and updater in advance. A meta-agent proposes, implements, verifies, evaluates, and archives memory programs so an embodied agent can continually improve from experience."
summaryZh: "ALMA 不预先固定人工设计的记忆模式、检索器和更新器，而是让元智能体自动搜索可执行的记忆系统代码。元智能体依次提出方案、实现、校验、评估并归档记忆程序，使具身智能体能持续从经验中改进。"
problemEn: "Foundation-model agents are typically stateless, while existing memory modules are hand-engineered, static, and often tied to a single domain."
problemZh: "基础模型智能体通常缺乏跨回合状态，而现有记忆模块多由人工设计、结构固定，并且常常只适用于单一领域。"
methodEn: "A Meta Agent reflects on a sampled memory program and its evaluation logs, writes a new design plan, implements that plan as executable code, checks correctness, evaluates it inside an agentic system, and stores successful variants in an open-ended archive. The search can alter schema, retrieval, and update logic together."
methodZh: "元智能体先阅读抽样记忆程序及其评估日志，再提出新设计计划并实现为可执行代码，随后检查正确性、放入智能体系统中评估，并将有效变体加入开放式档案库；搜索可同时改变记忆模式、检索与更新逻辑。"
resultsEn: "Across ALFWorld, TextWorld, BabaIsAI, and MiniHack, learned memories outperform human-designed baselines. The official results report overall success rising from 6.1 without memory to 12.3 with learned memory for GPT-5-nano/low, and from 41.1 to 53.9 for GPT-5-mini/medium; the learned designs also adapt to domains and distribution shifts while reducing compute relative to the compared baselines."
resultsZh: "在 ALFWorld、TextWorld、BabaIsAI 和 MiniHack 上，自动学得的记忆设计优于人工基线。官方结果显示：GPT-5-nano/low 的总体成功率由无记忆的 6.1 提升至 12.3，GPT-5-mini/medium 由 41.1 提升至 53.9；学得的设计还能适配不同领域与分布变化，并较对比基线降低计算开销。"
limitationsEn: "The current evidence comes from simulated interactive environments and depends on costly meta-level search. The repository also warns that model-generated memory code can behave unpredictably and should run in a sandbox or isolated environment."
limitationsZh: "目前证据主要来自模拟交互环境，且元层面的设计搜索本身可能成本较高。官方仓库还警告：模型生成的记忆代码可能出现不可预测行为，应在沙箱或隔离环境中运行。"
whyReadEn: "ALMA expands the notion of self-improvement from updating memories to improving the architecture of memory itself, making it a useful bridge between continual learning and automated agent design."
whyReadZh: "ALMA 把“自我改进”从更新记忆内容扩展到改进记忆架构本身，是理解持续学习与自动化智能体设计如何连接的关键论文。"
feedbackSource: "Task success, evaluation logs, correctness checks, runtime behavior, and compute cost"
updatedObject: "Executable memory-design code and the archive of candidate designs"
updateMechanism: "A meta-agent iteratively reflects, plans, edits code, verifies, evaluates, and archives improved memory programs"
successSignal: "Higher success rate, adaptation under distribution shift, scalable memory use, and lower compute cost"
loopSummaryEn: "Sample a memory design → inspect evaluation logs → propose and implement a variant → verify and evaluate it → archive successful code → sample again."
loopSummaryZh: "抽样记忆设计 → 检查评估日志 → 提出并实现新变体 → 校验和评估 → 归档成功代码 → 再次抽样迭代。"
---

Evidence note: the abstract, project page, and official repository were checked; full-text section verification remains pending.

证据说明：已核对摘要、项目页与官方仓库，论文全文分节核对仍待完成。
