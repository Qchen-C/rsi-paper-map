---
title: "Agent0: Unleashing Self-Evolving Agents from Zero Data via Tool-Integrated Reasoning"
titleZh: "Agent0：通过工具集成推理，从零数据释放自我进化智能体"
authors: ["Peng Xia", "Kaide Zeng", "Jiaqi Liu", "Can Qin", "Fang Wu", "Yiyang Zhou", "Caiming Xiong", "Huaxiu Yao"]
presentation: "oral"
year: 2026
sourceIndex: 1
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=hYYeOl58xi"},{"kind":"arxiv","url":"https://arxiv.org/abs/2511.16043"},{"kind":"code","url":"https://github.com/aiming-lab/Agent0"}]
themes: ["agents-tools-code-evolution", "self-play-synthetic-data-curriculum"]
keywords: ["self-evolving agents", "zero-data learning", "tool-integrated reasoning", "reinforcement learning", "curriculum generation"]
difficulty: "advanced"
prerequisites: ["reinforcement learning for language models", "self-consistency", "policy optimization", "tool-augmented reasoning"]
readingPaths: [{"id":"entry","order":1},{"id":"agent-evolution","order":1},{"id":"self-play-synthetic-data","order":1}]
relatedPapers: ["posttrainbench", "agentic-memory-designs"]
readNext: ["contextual-drag", "posttrainbench"]
featured: true
evidenceStatus: "full-text-checked"
checkedSections: ["introduction", "method", "experiments", "conclusion"]
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/html/2511.16043v2", "https://github.com/aiming-lab/Agent0"]
summaryEn: "Agent0 is a fully autonomous, zero-external-data training framework in which a curriculum agent and a reasoning executor co-evolve from the same base model. The curriculum proposes frontier tasks, while the executor learns to solve them through multi-turn interaction with a sandboxed code interpreter."
summaryZh: "Agent0 是一个不依赖外部训练数据的自主学习框架：课程生成智能体与推理执行智能体由同一个基础模型出发协同进化。前者持续提出位于能力边界的任务，后者借助沙箱代码解释器进行多轮推理并从结果中学习。"
problemEn: "Self-improving reasoning systems usually depend on curated prompts, stronger teacher models, or fixed task generators, so their improvement frontier remains externally constrained."
problemZh: "现有自我改进推理系统往往依赖人工整理的题目、更强教师模型或固定任务生成器，因此能力提升的边界仍受外部数据和设计约束。"
methodEn: "Agent0 alternates two learning processes. A curriculum policy is rewarded for proposing non-repetitive tasks on which the executor is uncertain and uses tools; the filtered frontier tasks then train an executor with multi-turn code execution, majority-vote pseudo-labels, and ambiguity-aware dynamic policy optimization (ADPO)."
methodZh: "Agent0 交替训练两个策略：课程策略依据执行器的不确定性、工具使用频率和重复惩罚来生成非重复的前沿任务；筛选后的任务再通过多轮代码执行、多数投票伪标签以及歧义感知动态策略优化（ADPO）训练执行器。"
resultsEn: "Across ten reasoning benchmarks, the Qwen3-8B executor raises the reported math average from 49.2 to 58.2 and the general-reasoning average from 34.5 to 42.1. Ablations show losses when curriculum training, tool rewards, repetition control, ADPO, or multi-turn interaction is removed, and three iterations continue improving the math average from 55.1 to 58.2."
resultsZh: "在十个推理基准上，Qwen3-8B 执行器的数学平均分由 49.2 提升到 58.2，通用推理平均分由 34.5 提升到 42.1。消融实验表明，去掉课程训练、工具奖励、重复控制、ADPO 或多轮交互都会退化；三轮迭代还将数学平均分从 55.1 持续推高到 58.2。"
limitationsEn: "The evidence is limited to Qwen3 4B/8B models and reasoning-oriented benchmarks. The loop also requires repeated RL rollouts and sandboxed tool execution, while majority-vote pseudo-labels can still be noisy even though ADPO is designed to reduce their harm."
limitationsZh: "现有证据主要来自 Qwen3 4B/8B 与推理类基准，尚不能直接外推到更广泛任务。该闭环需要大量强化学习采样和沙箱工具执行；多数投票得到的伪标签仍可能含噪，ADPO 只能缓解而不能消除这一问题。"
whyReadEn: "Read this first for a concrete end-to-end example of recursive self-improvement: the system generates its own learning frontier, obtains executable feedback, and updates both the task distribution and solver."
whyReadZh: "建议把它作为入门第一篇：它把递归自我改进落实为完整闭环——系统自己生成学习前沿、获取可执行反馈，并同时更新任务分布与求解器。"
feedbackSource: "Executor uncertainty, code-interpreter outcomes, tool-use frequency, repetition signals, and majority-vote pseudo-labels"
updatedObject: "The curriculum policy and the reasoning executor parameters"
updateMechanism: "Alternating reinforcement learning for curriculum generation and ADPO-based executor training"
successSignal: "Hard but solvable frontier tasks plus higher math and general-reasoning benchmark accuracy"
loopSummaryEn: "Generate frontier tasks → solve them with tools → score uncertainty and executable outcomes → update curriculum and executor → regenerate a harder frontier."
loopSummaryZh: "生成前沿任务 → 借助工具求解 → 用不确定性与可执行结果评分 → 更新课程与执行器 → 再生成更难的前沿任务。"
---

Evidence note: all four required paper sections were checked against the arXiv HTML version.

证据说明：已依据 arXiv HTML 版本核对引言、方法、实验与结论四个必需章节。
