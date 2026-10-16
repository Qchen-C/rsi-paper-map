---
title: "Self-CriTeach: LLM Self-Teaching and Self-Critiquing for Improving Robotic Planning via Automated Domain Generation"
titleZh: "Self-CriTeach：通过自动生成领域实现大模型自教与自评，改进机器人规划"
authors: ["Jinbang Huang", "Zhiyuan Li", "Yuanzhao Hu", "Zhanguang Zhang", "Mark Coates", "Xingyue Quan", "Yingxue Zhang"]
presentation: "poster"
year: 2026
sourceIndex: 42
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=8I0n20ufAy"},{"kind":"arxiv","url":"https://arxiv.org/abs/2509.21543"},{"kind":"project","url":"https://markli1hoshipu.github.io/Plan_LLM/"}]
themes: ["self-play-synthetic-data-curriculum", "embodied-multimodal-intelligence", "verification-evaluation-safety"]
keywords: ["robot planning", "PDDL", "self-teaching", "self-critique", "structured rewards"]
difficulty: "advanced"
prerequisites: ["symbolic planning", "PDDL", "supervised fine-tuning", "reinforcement learning"]
readingPaths: []
relatedPapers: ["self-directed-robot-learning", "rftf-temporal-feedback", "world-action-verifier"]
readNext: ["self-directed-robot-learning", "rftf-temporal-feedback"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=8I0n20ufAy", "https://arxiv.org/abs/2509.21543", "https://markli1hoshipu.github.io/Plan_LLM/"]
summaryEn: "Self-CriTeach makes an LLM's self-written symbolic planning domains do two jobs: generate scalable planning supervision and provide structured rewards for later reinforcement learning."
summaryZh: "Self-CriTeach 让大模型自行编写的符号规划领域承担两项工作：规模化生成规划监督数据，并为后续强化学习提供结构化奖励。"
problemEn: "Robotic reasoning traces are expensive to annotate, hand-designed rewards are brittle, and generated planning domains are usually treated only as utilities rather than reusable supervision."
problemZh: "机器人推理轨迹标注昂贵，人工奖励脆弱，而自动生成的规划领域通常只被当作工具，没有被复用为监督信号。"
methodEn: "The LLM writes symbolic domains and uses them to create problem-plan pairs. Those plans are expanded into chain-of-thought trajectories for supervised fine-tuning; the same domains then define dense, structured checks for reinforcement learning."
methodZh: "模型先编写符号领域并生成问题—计划对，再把计划扩展为思维链轨迹进行监督微调；同一批领域随后又被用来定义强化学习中的稠密结构化检查。"
resultsEn: "The paper reports higher planning success, stronger transfer across tasks, lower inference cost, and better resistance to imperfect logical-state observations than the compared planning approaches."
resultsZh: "论文报告其规划成功率、跨任务迁移能力与不完美逻辑状态下的稳健性更高，同时推理成本更低。"
limitationsEn: "The loop inherits errors from self-generated domain definitions and still depends on symbolic state representations. Real perception and actuation failures may violate assumptions that hold in a PDDL simulator."
limitationsZh: "闭环会继承模型自生成领域定义中的错误，并且仍依赖符号状态表示；真实感知和执行故障可能破坏 PDDL 仿真器中成立的假设。"
whyReadEn: "It is a concrete example of one generated artifact becoming both curriculum and critic, reducing two supervision bottlenecks at once."
whyReadZh: "它展示了同一份生成产物如何同时充当课程与评审器，一次缓解两个监督瓶颈。"
feedbackSource: "Plan validity and state-transition checks defined by self-written symbolic domains"
updatedObject: "The robotic planning language model"
updateMechanism: "Supervised learning on generated reasoning traces followed by RL with domain-derived rewards"
successSignal: "Valid plans that generalize while using fewer inference tokens"
loopSummaryEn: "Write a domain → generate and explain plans → fine-tune → score new plans with the domain → reinforce the planner."
loopSummaryZh: "编写领域 → 生成并解释计划 → 微调 → 用领域给新计划打分 → 强化规划器。"
---

Evidence note: the workshop paper, arXiv abstract, and author project page were checked.

证据说明：已核对工作坊论文、arXiv 摘要与作者项目页。
