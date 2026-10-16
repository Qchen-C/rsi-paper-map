---
title: "VerlTool: Towards Holistic Agentic Reinforcement Learning with Tool Use"
titleZh: "VerlTool：迈向统一的工具使用智能体强化学习"
authors: ["Dongfu Jiang", "Yi Lu", "Zhuofeng Li", "Zhiheng Lyu", "Ping Nie", "Haozhe Wang", "Alex Su", "Hui Chen", "Kai Zou", "Chao Du", "Tianyu Pang", "Wenhu Chen"]
presentation: "poster"
year: 2026
sourceIndex: 33
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=l5QPYxMEaH"},{"kind":"arxiv","url":"https://arxiv.org/abs/2509.01055"},{"kind":"code","url":"https://github.com/TIGER-AI-Lab/verl-tool"}]
themes: ["agents-tools-code-evolution", "test-time-learning-inference-scaling", "verification-evaluation-safety"]
keywords: ["agentic reinforcement learning", "tool use", "asynchronous rollout", "VeRL", "multimodal agents"]
difficulty: "advanced"
prerequisites: ["reinforcement learning with verifiable rewards", "multi-turn agents", "tool APIs", "distributed rollouts"]
readingPaths: []
relatedPapers: ["agent0", "agent0-vl", "posttrainbench"]
readNext: ["agent0", "agent0-vl"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2509.01055", "https://github.com/TIGER-AI-Lab/verl-tool"]
summaryEn: "VerlTool is a unified training framework for reinforcement-learning agents that interact with tools over multiple turns. It standardizes tool APIs, multimodal observations, stateful trajectories, and asynchronous rollout execution on top of VeRL."
summaryZh: "VerlTool 是面向多轮工具交互强化学习智能体的统一训练框架，在 VeRL 之上标准化工具 API、多模态观察、状态轨迹与异步 rollout 执行。"
problemEn: "Agentic RL projects often build separate task-specific stacks, leading to duplicated engineering, synchronous tool bottlenecks, and algorithms that are difficult to compare across domains."
problemZh: "智能体 RL 项目常为每个任务单独搭建系统，造成重复工程、同步工具执行瓶颈，以及难以跨领域比较算法。"
methodEn: "The framework aligns with upstream VeRL, exposes standardized plugins for code, search, SQL, and vision tools, represents learning as multi-turn multimodal trajectories, and disaggregates tool execution from policy rollout for asynchronous scheduling."
methodZh: "框架与上游 VeRL 对齐，为代码、搜索、SQL 与视觉工具提供标准插件，把学习表示成多轮多模态轨迹，并将工具执行与策略 rollout 解耦以异步调度。"
resultsEn: "The abstract reports nearly twofold rollout speedup and competitive results across six domains: mathematics, knowledge QA, SQL, visual reasoning, web search, and software engineering."
resultsZh: "摘要报告 rollout 速度接近提升 2 倍，并在数学、知识问答、SQL、视觉推理、网页搜索与软件工程六个领域取得有竞争力结果。"
limitationsEn: "A framework's benchmark parity does not prove that one RL algorithm transfers equally well across tools. Distributed asynchronous execution adds reproducibility, resource-isolation, and stale-policy concerns."
limitationsZh: "框架达到基准相当水平，并不证明同一 RL 算法能同样迁移到所有工具；分布式异步执行还带来复现、资源隔离与策略陈旧问题。"
whyReadEn: "It is infrastructure for studying recursive tool agents at scale, not merely another task-specific agent recipe."
whyReadZh: "它是规模化研究递归工具智能体的基础设施，而不只是又一个任务专用配方。"
feedbackSource: "Verifiable environment rewards and observations returned by external tools"
updatedObject: "The multi-turn tool-using agent policy"
updateMechanism: "Agentic RL over asynchronously executed, standardized tool trajectories"
successSignal: "Competitive task performance with higher rollout throughput and easier tool integration"
loopSummaryEn: "Sample a task → call tools across multiple turns → collect verifiable outcomes → update the policy → asynchronously launch new trajectories."
loopSummaryZh: "采样任务 → 多轮调用工具 → 收集可验证结果 → 更新策略 → 异步启动新轨迹。"
---

Evidence note: the arXiv abstract, public paper, and official repository were checked.

证据说明：已核对 arXiv 摘要、公开论文与官方仓库。
