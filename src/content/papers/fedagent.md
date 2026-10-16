---
title: "Federated Agent Reinforcement Learning"
titleZh: "联邦智能体强化学习"
authors: ["Canyu Chen", "Kangyu Zhu", "Zhaorun Chen", "Zhanhui Zhou", "Shizhe Diao", "Yiping Lu", "Tian Li", "Manling Li", "Dawn Song"]
presentation: "poster"
year: 2026
sourceIndex: 27
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=h4iPWHGapI"},{"kind":"project","url":"https://fed-agent.github.io/"}]
themes: ["agents-tools-code-evolution", "verification-evaluation-safety", "memory-continual-adaptation"]
keywords: ["federated learning", "agent reinforcement learning", "privacy", "heterogeneity", "FedAgentGym"]
difficulty: "advanced"
prerequisites: ["federated averaging", "policy-gradient reinforcement learning", "LLM agents", "Markov decision processes"]
readingPaths: []
relatedPapers: ["agent0", "parametric-skill-transfer", "contextual-drag"]
readNext: ["parametric-skill-transfer", "contextual-drag"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf/4af643da5c4ff961f1a03f306f56a025ab65e84b.pdf", "https://fed-agent.github.io/"]
summaryEn: "FedAgent applies federated averaging to reinforcement learning for LLM agents: clients collect local interaction trajectories, update a shared policy locally, and exchange model parameters rather than raw user data."
summaryZh: "FedAgent 把联邦平均用于 LLM 智能体强化学习：各客户端在本地收集交互轨迹并更新共享策略，只交换模型参数而不上传原始用户数据。"
problemEn: "Centralized agent training requires sensitive task queries and interaction trajectories to be collected in one place. Existing federated-learning assumptions do not directly cover language actions, long trajectories, or heterogeneous agent tasks."
problemZh: "集中式智能体训练要求把敏感任务查询与交互轨迹汇集到一处；已有联邦学习假设又不能直接覆盖语言动作、长轨迹与异构智能体任务。"
methodEn: "The server broadcasts a policy, selected clients perform local policy-gradient updates, and the server averages returned parameters. FedAgentGym evaluates four LLM-agent variants on WebShop and ALFWorld under controlled preference, coverage, and hardness heterogeneity."
methodZh: "服务器下发策略，选中的客户端执行本地策略梯度更新，再由服务器平均返回参数。FedAgentGym 使用四种 LLM 智能体，在 WebShop 与 ALFWorld 上控制偏好、覆盖范围和难度异质性。"
resultsEn: "The workshop paper reports that FedAgent consistently beats local-only training, approaches centralized training, and remains robust across the studied task-distribution heterogeneities without sharing raw local data."
resultsZh: "工作坊论文报告 FedAgent 持续优于纯本地训练、接近集中式训练，并在所研究的任务分布异质性下保持稳健，同时不共享原始本地数据。"
limitationsEn: "Parameter sharing is not a complete privacy guarantee without secure aggregation or differential privacy. Communication cost, malicious clients, and environment-level heterogeneity can still destabilize federated agent learning."
limitationsZh: "若没有安全聚合或差分隐私，参数共享并不等于完整隐私保证；通信成本、恶意客户端与环境层异质性仍可能破坏联邦智能体学习。"
whyReadEn: "It broadens RSI from one model improving on one dataset to a population of private clients collaboratively improving an agent."
whyReadZh: "它把 RSI 从单模型在单数据集上改进，扩展为多个私有客户端协同改进智能体。"
feedbackSource: "Rewards from private client environments and aggregated model updates"
updatedObject: "Local agent policies and the federated global policy"
updateMechanism: "Local policy-gradient training followed by server-side federated averaging"
successSignal: "Global task success approaching centralized training across heterogeneous clients"
loopSummaryEn: "Broadcast the global policy → collect private local trajectories → update locally → aggregate parameters → redistribute the improved policy → repeat."
loopSummaryZh: "下发全局策略 → 收集私有本地轨迹 → 本地更新 → 聚合参数 → 再下发改进策略 → 重复。"
---

Evidence note: the workshop paper and official project page were checked. The project page contains a later, more detailed heterogeneity analysis; the summary above stays aligned with the accepted workshop version.

证据说明：已核对工作坊论文与官方项目页。项目页包含后续更细的异质性分析；上述总结以录用的工作坊版本为准。
