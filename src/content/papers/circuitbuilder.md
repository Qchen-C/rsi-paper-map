---
title: "CircuitBuilder: From Polynomials to Circuits via Reinforcement Learning"
titleZh: "CircuitBuilder：通过强化学习从多项式构造算术电路"
authors: ["Weikun K. Zhang", "Rohan Pandey", "Bhaumik Mehta", "Kaijie Jin", "Naomi Morato", "Archit Ganapule", "Michael Ruofan Zeng", "Jarod Alper"]
presentation: "poster"
year: 2026
sourceIndex: 89
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=JNsTWIukjQ"},{"kind":"arxiv","url":"https://arxiv.org/abs/2603.17075"}]
themes: ["scientific-discovery-applications", "verification-evaluation-safety", "self-play-synthetic-data-curriculum"]
keywords: ["arithmetic circuits", "reinforcement learning", "Monte Carlo tree search", "algebraic complexity", "verifiable search"]
difficulty: "advanced"
prerequisites: ["arithmetic circuits", "Markov decision processes", "Monte Carlo tree search", "actor-critic methods"]
readingPaths: []
relatedPapers: ["alphaapollo", "soft-mellowmax-planning", "discovery-to-application-loop"]
readNext: ["alphaapollo", "soft-mellowmax-planning"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=JNsTWIukjQ", "https://arxiv.org/abs/2603.17075"]
summaryEn: "CircuitBuilder frames efficient arithmetic-circuit synthesis as a single-player game. Reinforcement-learning agents choose additions and multiplications until they construct a target polynomial within a fixed operation budget."
summaryZh: "CircuitBuilder 把高效算术电路合成建模为单人游戏；强化学习智能体依次选择加法和乘法，在固定操作预算内构造目标多项式。"
problemEn: "Finding minimal circuits for polynomials is combinatorial and quickly defeats exhaustive search, yet exact symbolic equality provides unusually clean verification for learned discovery."
problemZh: "为多项式寻找最小电路是组合问题，穷举很快失效；但精确的符号等价性又为学习式发现提供了难得清晰的验证信号。"
methodEn: "The study compares an AlphaZero-style PPO policy with MCTS against Soft Actor-Critic in an MDP whose states are partial circuit DAGs, actions add algebraic gates, and curriculum raises target complexity."
methodZh: "研究在一个以部分电路 DAG 为状态、添加代数门为动作并逐步提高目标复杂度的 MDP 中，对比 AlphaZero 风格的 PPO+MCTS 与软演员评论家算法。"
resultsEn: "SAC achieves the strongest success rates on two-variable targets, while PPO+MCTS scales better to three variables and improves steadily on harder instances, recovering optimal or near-optimal circuits on held-out polynomials."
resultsZh: "SAC 在双变量目标上成功率最高，PPO+MCTS 则更好地扩展到三变量并在更难实例上持续提升，还能在未见多项式上恢复最优或近最优电路。"
limitationsEn: "Experiments use small finite-field polynomials and modest circuit complexities, far from general algebraic-circuit discovery. Sparse rewards and rapidly growing action spaces remain major scaling barriers."
limitationsZh: "实验局限于小有限域多项式与较低电路复杂度，距离通用代数电路发现仍远；稀疏奖励和快速增长的动作空间依然是主要扩展障碍。"
whyReadEn: "It is a compact scientific-discovery testbed where proposals are creative but correctness and efficiency are exactly measurable."
whyReadZh: "它提供了一个紧凑的科学发现试验场：提案需要创造性，但正确性与效率又能被精确测量。"
feedbackSource: "Exact symbolic equality to the target polynomial and circuit gate count"
updatedObject: "A policy for constructing arithmetic-circuit DAGs"
updateMechanism: "PPO with MCTS or off-policy Soft Actor-Critic under a complexity curriculum"
successSignal: "Construction of a correct target polynomial with few gates"
loopSummaryEn: "Sample a polynomial → build gates → verify symbolic equality and size → update the search policy → attempt harder targets."
loopSummaryZh: "采样多项式 → 构造运算门 → 验证符号等价与规模 → 更新搜索策略 → 尝试更难目标。"
---

Evidence note: the accepted workshop paper and current arXiv abstract were checked.

证据说明：已核对接收的工作坊论文与当前 arXiv 摘要。
