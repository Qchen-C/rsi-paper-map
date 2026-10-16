---
title: "Leveraging Suboptimal and Noisy Trajectories for Goal-Conditional Offline RL"
titleZh: "利用次优与噪声轨迹改进目标条件离线强化学习"
authors: ["Ningze Zhong", "Yi Wang", "Bo Wu"]
presentation: "poster"
year: 2026
sourceIndex: 67
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=jfi88XbVsn"},{"kind":"project","url":"https://research.ibm.com/publications/leveraging-suboptimal-and-noisy-trajectories-for-goal-conditional-offline-rl"}]
themes: ["self-play-synthetic-data-curriculum", "memory-continual-adaptation", "embodied-multimodal-intelligence"]
keywords: ["offline reinforcement learning", "goal conditioning", "noisy trajectories", "state coverage", "exploration experts"]
difficulty: "advanced"
prerequisites: ["offline reinforcement learning", "goal-conditioned policies", "state-space coverage", "behavior cloning"]
readingPaths: []
relatedPapers: ["shape-of-thought", "verified-synthetic-data", "self-directed-robot-learning"]
readNext: ["shape-of-thought", "self-directed-robot-learning"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=jfi88XbVsn", "https://research.ibm.com/publications/leveraging-suboptimal-and-noisy-trajectories-for-goal-conditional-offline-rl"]
summaryEn: "In goal-conditioned offline RL, imperfect trajectories can expand state coverage even when they are poor demonstrations. The method uses them as exploration experts while preserving policy learning from high-quality data."
summaryZh: "在目标条件离线 RL 中，不完美轨迹即使不是好示范，也能扩大状态覆盖。该方法把它们当作探索专家，同时保留从高质量数据学习策略。"
problemEn: "Offline RL cannot actively explore and often discards noisy trajectories, leaving expert-only datasets narrow and brittle in large state spaces."
problemZh: "离线 RL 无法主动探索，又常丢弃噪声轨迹，使仅含专家数据的数据集在大状态空间中覆盖狭窄且脆弱。"
methodEn: "The theory analyzes how suboptimal data connects additional states and goals. The learning pipeline separates their coverage role from the imitation role of expert demonstrations, preventing noisy actions from becoming the primary policy target."
methodZh: "理论分析次优数据如何连接额外状态与目标；学习流程把其覆盖作用与专家示范的模仿作用分开，避免让噪声动作成为主要策略目标。"
resultsEn: "Across tested environments, adding large-scale noisy trajectories consistently improves over baselines and expert-only training, with the largest gains in complex spaces where coverage is most limited."
resultsZh: "在所测环境中，加入大规模噪声轨迹持续优于基线与纯专家训练，尤其在覆盖最不足的复杂状态空间中收益最大。"
limitationsEn: "Not all noise expands useful coverage; adversarial, biased, or physically impossible trajectories can mislead learning. The framework assumes goals and state relationships can be recovered reliably from static data."
limitationsZh: "并非所有噪声都带来有用覆盖；对抗性、偏置或物理不可能轨迹可能误导学习。框架还假设能从静态数据可靠恢复目标与状态关系。"
whyReadEn: "It complements synthetic-data papers by showing that data quality is multidimensional: a bad demonstration may still be good exploration evidence."
whyReadZh: "它补充了合成数据研究：数据质量是多维的，一条坏示范仍可能是好的探索证据。"
feedbackSource: "Offline goal-reaching performance and measured state-space coverage"
updatedObject: "The goal-conditioned policy learned from a fixed trajectory dataset"
updateMechanism: "Use noisy trajectories for exploration coverage and expert trajectories for policy learning"
successSignal: "Higher goal-reaching success, especially in large or sparsely covered spaces"
loopSummaryEn: "Collect mixed-quality trajectories → identify coverage links → learn actions from experts → test new goals → retain useful exploration structure."
loopSummaryZh: "收集混合质量轨迹 → 识别覆盖连接 → 从专家学习动作 → 测试新目标 → 保留有用探索结构。"
---

Evidence note: the published workshop paper and IBM Research record were checked.

证据说明：已核对正式工作坊论文与 IBM Research 记录。
