---
title: "VLAW: Iterative Co-Improvement of Vision-Language-Action Policy and World Model"
titleZh: "VLAW：视觉-语言-动作策略与世界模型的迭代协同改进"
authors: ["Yanjiang Guo", "Tony Lee", "Lucy Xiaoyang Shi", "Jianyu Chen", "Percy Liang", "Chelsea Finn"]
presentation: "spotlight"
year: 2026
sourceIndex: 19
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=Ro0eQ0ly3q"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.12063"}]
themes: ["embodied-multimodal-intelligence", "recursive-models-architectures", "self-play-synthetic-data-curriculum"]
keywords: ["vision-language-action", "world models", "synthetic rollouts", "co-improvement", "robot manipulation"]
difficulty: "advanced"
prerequisites: ["vision-language-action models", "action-conditioned video models", "policy post-training", "robot rollouts"]
readingPaths: []
relatedPapers: ["pld-residual-rl", "world-action-verifier"]
readNext: ["world-action-verifier", "pld-residual-rl"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2602.12063", "https://openreview.net/pdf?id=Ro0eQ0ly3q"]
summaryEn: "VLAW alternates between grounding an action-conditioned video world model with limited real policy rollouts and using the improved simulator to generate large-scale synthetic rollouts for post-training the VLA policy. Policy and simulator therefore improve each other."
summaryZh: "VLAW 交替进行两步：先用少量真实策略 rollout 校准动作条件视频世界模型，再用更可靠的模拟器生成大规模合成 rollout 来后训练 VLA 策略，使策略与模拟器相互改进。"
problemEn: "Real robot rollouts are expensive, but world models trained mostly on successful demonstrations are over-optimistic and inaccurate on failures, contact-rich interactions, and small physical details—exactly the data needed for policy improvement."
problemZh: "真实机器人 rollout 很昂贵，而主要由成功演示训练的世界模型对失败过于乐观，在接触丰富交互和细微物理细节上不准确，而这些恰是改进策略所需的数据。"
methodEn: "The current VLA collects a limited set of real successes and failures. These rollouts fine-tune the world and reward models; the calibrated world model then supports many closed-loop imagined trajectories, whose successful samples are selected to update the policy. The cycle can repeat."
methodZh: "当前 VLA 收集少量真实成功与失败轨迹，用它们微调世界模型和奖励模型；校准后的世界模型再生成大量闭环想象轨迹，筛选其中的成功样本更新策略，并可重复这一循环。"
resultsEn: "On real-robot contact-rich and deformable-object tasks, the abstract reports a 39.2 percentage-point absolute success-rate improvement over the base policy and an 11.6-point improvement attributable to training with generated synthetic rollouts."
resultsZh: "在真实机器人接触丰富与可变形物体任务上，摘要报告相对基础策略成功率绝对提升 39.2 个百分点，其中使用生成式合成 rollout 带来 11.6 个百分点提升。"
limitationsEn: "The loop still needs real rollouts to correct simulator bias and a reward model to filter imagined trajectories. Errors in either model can feed back into policy training, especially outside the physical interactions covered by calibration data."
limitationsZh: "该闭环仍需要真实 rollout 修正模拟器偏差，并依赖奖励模型筛选想象轨迹；任一模型的错误都可能反馈进策略训练，尤其是在校准数据未覆盖的物理交互上。"
whyReadEn: "VLAW is an unusually literal recursive-improvement system: better real behavior trains a better world model, and that world model creates experience for a better policy."
whyReadZh: "VLAW 是非常直观的递归改进系统：更好的真实行为训练更好的世界模型，而更好的世界模型又为更好的策略创造经验。"
feedbackSource: "Real-world success and failure rollouts plus reward-model filtering of imagined trajectories"
updatedObject: "The action-conditioned world model, reward model, and VLA policy"
updateMechanism: "Alternating world-model calibration and policy post-training on selected synthetic rollouts"
successSignal: "Higher real-robot task success and more physically faithful imagined rollouts"
loopSummaryEn: "Roll out the VLA in reality → calibrate world and reward models → imagine many policy rollouts → select successes → update the VLA → repeat."
loopSummaryZh: "在真实环境 rollout VLA → 校准世界与奖励模型 → 想象大量策略轨迹 → 筛选成功样本 → 更新 VLA → 重复。"
---

Evidence note: the arXiv abstract and public paper were checked. Quantitative claims are limited to the abstract.

证据说明：已核对 arXiv 摘要与公开论文；定量结论仅采用摘要明确给出的数字。
