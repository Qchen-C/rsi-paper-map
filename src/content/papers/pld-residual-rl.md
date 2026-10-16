---
title: "Self-Improving Vision-Language-Action Models with Data Generation via Residual RL"
titleZh: "通过残差强化学习生成数据的自我改进视觉-语言-动作模型"
authors: ["Wenli Xiao", "Haotian Lin", "Andy Peng", "Haoru Xue", "Tairan He", "Yuqi Xie", "Fengyuan Hu", "Jimmy Wu", "Zhengyi Luo", "Linxi Jim Fan", "Guanya Shi", "Yuke Zhu"]
presentation: "spotlight"
year: 2026
sourceIndex: 18
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=shqo2VPfc7"},{"kind":"arxiv","url":"https://arxiv.org/abs/2511.00091"}]
themes: ["embodied-multimodal-intelligence", "self-play-synthetic-data-curriculum", "agents-tools-code-evolution"]
keywords: ["vision-language-action", "residual reinforcement learning", "data generation", "policy distillation", "robot learning"]
difficulty: "advanced"
prerequisites: ["vision-language-action models", "off-policy reinforcement learning", "behavior cloning", "robot manipulation"]
readingPaths: []
relatedPapers: ["vlaw", "world-action-verifier"]
readNext: ["vlaw", "world-action-verifier"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2511.00091", "https://openreview.net/pdf?id=eUGoqrZ6Ea"]
summaryEn: "Probe, Learn, Distill (PLD) improves a generalist Vision-Language-Action model by training small residual RL specialists to find and recover from its failure states, collecting deployment-aligned trajectories, and distilling those trajectories back into the base model with supervised fine-tuning."
summaryZh: "Probe, Learn, Distill（PLD）通过训练轻量残差 RL 专家去发现并恢复 VLA 通用模型的失败状态，收集贴近部署分布的轨迹，再用监督微调把这些轨迹蒸馏回基础模型。"
problemEn: "Supervised VLA post-training depends on expensive human demonstrations and often misses the failure states encountered by the deployed policy. Generic RL can be costly and unstable for a large generalist model."
problemZh: "VLA 的监督后训练依赖昂贵的人类演示，而且常漏掉部署策略真正遇到的失败状态；直接对大型通用模型做 RL 又昂贵且不稳定。"
methodEn: "PLD freezes the VLA backbone and trains lightweight residual actors to probe failure regions, combines generalist and residual rollouts to capture both deployment behavior and recoveries, then distills the curated trajectories into the generalist using standard supervised fine-tuning."
methodZh: "PLD 冻结 VLA 主干，训练轻量残差 actor 探测失败区域；再混合通用策略与残差策略 rollout，既覆盖部署行为也收集恢复过程；最后用标准监督微调把筛选后的轨迹蒸馏回通用模型。"
resultsEn: "The abstract reports 99% task success on LIBERO, gains above 50% in SimplerEnv, and 100% success on real Franka and YAM manipulation tasks. Ablations identify residual probing and distribution-aware replay as key components."
resultsZh: "摘要报告在 LIBERO 上达到 99% 任务成功率，在 SimplerEnv 上提升超过 50%，并在真实 Franka 与 YAM 操作任务上达到 100% 成功；消融表明残差探测和分布感知回放是关键。"
limitationsEn: "The approach requires environment interaction, trainable residual policies, and task-level success signals. Near-saturated benchmark results may not transfer to long-horizon tasks, novel embodiments, or safety-critical deployment."
limitationsZh: "该方法需要环境交互、可训练的残差策略与任务级成功信号；接近饱和的基准结果未必能迁移到长时程任务、新形态机器人或安全关键部署。"
whyReadEn: "PLD provides a practical pattern for self-improvement: use a small adaptable module to explore failures, then consolidate its experience into a large frozen generalist."
whyReadZh: "PLD 给出了一种务实的自我改进范式：用小型可适应模块探索失败，再把经验巩固进大型通用模型。"
feedbackSource: "Task success and recovery behavior observed during residual-policy rollouts"
updatedObject: "Lightweight residual actors first, then the generalist VLA policy"
updateMechanism: "Off-policy residual RL, distribution-aware trajectory curation, and supervised distillation"
successSignal: "Higher manipulation success on seen, unseen, simulated, and real tasks"
loopSummaryEn: "Probe base-policy failures → learn residual recoveries → collect deployment-aligned trajectories → distill them into the generalist → probe again."
loopSummaryZh: "探测基础策略失败 → 学习残差恢复 → 收集贴近部署的轨迹 → 蒸馏进通用模型 → 再次探测。"
---

Evidence note: the arXiv abstract and public conference paper were checked. Results are author-reported and not independently reproduced here.

证据说明：已核对 arXiv 摘要与公开会议论文。结果为作者报告，本站未做独立复现。
