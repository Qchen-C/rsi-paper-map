---
title: "RFTF: Reinforcement Fine-tuning for Vision-language-action Models with Temporal Feedback"
titleZh: "RFTF：利用时间反馈对视觉-语言-动作模型进行强化微调"
authors: ["Junyang Shu", "Zhiwei Lin", "Yongtao Wang"]
presentation: "poster"
year: 2026
sourceIndex: 32
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=mBgcG43j7a"},{"kind":"arxiv","url":"https://arxiv.org/abs/2505.19767"}]
themes: ["embodied-multimodal-intelligence", "verification-evaluation-safety", "test-time-learning-inference-scaling"]
keywords: ["VLA", "reinforcement fine-tuning", "temporal feedback", "dense rewards", "CALVIN"]
difficulty: "advanced"
prerequisites: ["vision-language-action models", "reinforcement learning", "generalized advantage estimation", "robot manipulation"]
readingPaths: []
relatedPapers: ["pld-residual-rl", "vlaw", "world-action-verifier"]
readNext: ["pld-residual-rl", "vlaw"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2505.19767"]
summaryEn: "RFTF trains a temporal value model to convert an embodied episode into dense per-step feedback, then uses that signal for reinforcement fine-tuning of a Vision-Language-Action policy without requiring action-level human labels."
summaryZh: "RFTF 训练时间价值模型，把具身任务回合转成稠密的逐步反馈，再用该信号强化微调视觉-语言-动作策略，无需动作级人工标签。"
problemEn: "Behavior cloning depends on expensive demonstrations, while sparse outcome rewards provide too little information about which actions helped or hurt during a long manipulation episode."
problemZh: "行为克隆依赖昂贵演示，而稀疏结果奖励无法说明长时操作回合中哪些动作有益或有害。"
methodEn: "A value model learns from temporal ordering to score progress without robot action labels. RFTF uses these dense rewards with generalized advantage estimation and sample balancing to fine-tune the embodied policy."
methodZh: "价值模型利用时间顺序学习进度评分，不依赖机器人动作标签；RFTF 再结合广义优势估计与样本平衡，用稠密奖励微调具身策略。"
resultsEn: "The abstract reports an average success length of 4.296 on CALVIN ABC-D and rapid adaptation to the unseen D environment, reaching 4.301 after a few fine-tuning episodes."
resultsZh: "摘要报告在 CALVIN ABC-D 上平均成功长度达到 4.296；仅用少量回合微调到新 D 环境后达到 4.301，显示快速适应能力。"
limitationsEn: "Temporal progress is a proxy for task value and can be misleading when useful actions temporarily move away from the goal. Results center on CALVIN, so transfer to real robots and different embodiments remains uncertain."
limitationsZh: "时间进度只是任务价值的代理；当有用动作需要暂时远离目标时可能产生误导。结果集中于 CALVIN，对真实机器人和不同形态的迁移仍不确定。"
whyReadEn: "It shows how to densify feedback from the structure of experience itself instead of requesting costly action annotations."
whyReadZh: "它展示了如何从经验自身的时间结构中稠密化反馈，而无需昂贵动作标注。"
feedbackSource: "Temporal progress scores from a learned value model"
updatedObject: "The embodied VLA policy"
updateMechanism: "Reinforcement fine-tuning with dense temporal rewards, GAE, and balanced samples"
successSignal: "Longer successful task chains and faster adaptation to new environments"
loopSummaryEn: "Roll out the policy → estimate temporal progress → assign dense rewards → fine-tune actions → collect stronger rollouts → repeat."
loopSummaryZh: "执行策略 → 估计时间进度 → 分配稠密奖励 → 强化微调动作 → 收集更强轨迹 → 重复。"
---

Evidence note: the arXiv abstract was checked. The current arXiv title says “Embodied Agents”; the workshop's original English title is preserved here.

证据说明：已核对 arXiv 摘要。当前 arXiv 标题使用“Embodied Agents”，本站保留工作坊原始英文标题。
