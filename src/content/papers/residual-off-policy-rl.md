---
title: "Residual Off-Policy RL for Finetuning Behavior Cloning Policies"
titleZh: "用于微调行为克隆策略的残差离策略强化学习"
authors: ["Lars Ankile", "Zhenyu Jiang", "Rocky Duan", "Guanya Shi", "Pieter Abbeel", "Anusha Nagabandi"]
presentation: "poster"
year: 2026
sourceIndex: 81
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=9m4kM3bK2b"},{"kind":"arxiv","url":"https://arxiv.org/abs/2509.19301"},{"kind":"project","url":"https://residual-offpolicy-rl.github.io/"}]
themes: ["embodied-multimodal-intelligence", "memory-continual-adaptation"]
keywords: ["residual reinforcement learning", "behavior cloning", "off-policy RL", "robot manipulation", "humanoid robots"]
difficulty: "advanced"
prerequisites: ["behavior cloning", "off-policy reinforcement learning", "robot manipulation", "sparse rewards"]
readingPaths: []
relatedPapers: ["pld-residual-rl", "self-directed-robot-learning", "mimicagent"]
readNext: ["self-directed-robot-learning", "mimicagent"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=9m4kM3bK2b", "https://arxiv.org/abs/2509.19301", "https://residual-offpolicy-rl.github.io/"]
summaryEn: "ResFiT keeps a behavior-cloned controller as a black-box base and learns small action corrections with sample-efficient off-policy reinforcement learning. It targets practical real-world improvement using only sparse binary rewards."
summaryZh: "ResFiT 把行为克隆控制器保留为黑盒基础策略，再用样本高效的离策略强化学习学习小幅动作修正；它旨在只依赖稀疏二元奖励实现真实机器人上的实用改进。"
problemEn: "Behavior cloning inherits demonstrator errors and saturates with more offline data, but replacing it with online RL is unsafe and sample-inefficient for long-horizon, high-DoF robots."
problemZh: "行为克隆会继承示范者误差，增加离线数据后也会饱和；但对长时程、高自由度机器人直接改用在线强化学习既不安全又低效。"
methodEn: "A lightweight residual policy adds per-step corrections to actions from a frozen BC policy. Off-policy learning reuses robot experience efficiently, while the base controller supplies competent behavior and makes sparse success rewards usable."
methodZh: "轻量残差策略对冻结的行为克隆策略动作逐步修正；离策略学习高效复用机器人经验，基础控制器则提供可用行为，使稀疏成功奖励也能发挥作用。"
resultsEn: "The paper reports improvements across vision-based manipulation tasks in simulation and the real world, including successful on-robot RL for a 29-DoF wheeled humanoid with dexterous hands."
resultsZh: "论文报告该方法在仿真和真实环境的多项视觉操控任务上取得提升，并在配有灵巧手的 29 自由度轮式人形机器人上成功开展真实强化学习。"
limitationsEn: "Residual corrections depend on a reasonably capable base policy and safe exploration boundaries. Sparse success signals can still be inefficient, and the reported hardware setup is specialized and costly to reproduce."
limitationsZh: "残差修正依赖已有基础策略具备一定能力和安全探索边界；稀疏成功信号仍可能低效，论文中的硬件配置也较专用且复现成本高。"
whyReadEn: "It offers a concrete bridge from imitation to continual deployment-time improvement without discarding a functioning robot policy."
whyReadZh: "它给出了从模仿学习走向部署期持续改进的具体桥梁，同时无需抛弃已经可用的机器人策略。"
feedbackSource: "Sparse binary task rewards collected through autonomous robot interaction"
updatedObject: "A residual action policy layered over a fixed behavior-cloning controller"
updateMechanism: "Sample-efficient off-policy reinforcement learning on residual corrections"
successSignal: "Higher manipulation success while retaining the base policy's competent behavior"
loopSummaryEn: "Run the BC policy → add a residual action → observe sparse success → update the residual policy → deploy again."
loopSummaryZh: "运行行为克隆策略 → 加入残差动作 → 观察稀疏成功信号 → 更新残差策略 → 再次部署。"
---

Evidence note: the workshop paper, current arXiv record, and official project page were checked.

证据说明：已核对工作坊论文、当前 arXiv 记录与官方项目页。
