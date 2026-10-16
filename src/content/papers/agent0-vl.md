---
title: "Agent0-VL: Exploring Self-Evolving Agent for Tool-Integrated Vision-Language Reasoning"
titleZh: "Agent0-VL：探索面向工具集成视觉语言推理的自进化智能体"
authors: ["Jiaqi Liu", "Kaiwen Xiong", "Peng Xia", "Yiyang Zhou", "Haonian Ji", "Lu Feng", "Siwei Han", "Mingyu Ding", "Huaxiu Yao"]
presentation: "poster"
year: 2026
sourceIndex: 28
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=JKx0zkUBsQ"},{"kind":"arxiv","url":"https://arxiv.org/abs/2511.19900"},{"kind":"code","url":"https://github.com/aiming-lab/Agent0"},{"kind":"project","url":"https://aiming-lab.github.io/Agent0/"}]
themes: ["embodied-multimodal-intelligence", "agents-tools-code-evolution", "verification-evaluation-safety"]
keywords: ["vision-language reasoning", "tool use", "self-verification", "self-repair", "zero external reward"]
difficulty: "advanced"
prerequisites: ["large vision-language models", "tool-integrated reasoning", "reinforcement learning", "solver-verifier systems"]
readingPaths: []
relatedPapers: ["agent0", "world-action-verifier", "contextual-drag"]
readNext: ["agent0", "world-action-verifier"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2511.19900", "https://aiming-lab.github.io/Agent0/", "https://github.com/aiming-lab/Agent0"]
summaryEn: "Agent0-VL places tool use inside both multimodal problem solving and self-evaluation. A Solver performs multi-turn visual reasoning, while a Verifier uses tools to produce evidence-grounded critiques and fine-grained self-rewards for repair and reinforcement learning."
summaryZh: "Agent0-VL 把工具使用同时嵌入多模态求解与自我评估。Solver 执行多轮视觉推理，Verifier 则借助工具生成基于证据的批评和细粒度自奖励，用于修复与强化学习。"
problemEn: "Purely textual self-critique cannot reliably verify geometry, charts, and other complex visual steps, causing evaluation hallucinations and unstable self-rewarding training."
problemZh: "纯文本自我批评难以可靠验证几何、图表等复杂视觉步骤，容易产生评估幻觉并导致自奖励训练不稳定。"
methodEn: "One LVLM alternates between Solver and Verifier roles. Both can invoke external tools; the verifier grounds critique in computed or visual evidence, and the resulting process rewards plus self-repair trajectories align reasoning and evaluation distributions through reinforcement learning."
methodZh: "同一个 LVLM 在 Solver 与 Verifier 角色间交替，两者都可调用外部工具；验证器用计算或视觉证据支撑批评，再通过过程奖励、自修复轨迹和强化学习对齐推理与评估分布。"
resultsEn: "On geometric problem solving and visual scientific analysis, the abstract reports a 12.5% improvement over the base model. The official project page additionally reports a 7.3% improvement in test-time scaling performance."
resultsZh: "在几何求解与视觉科学分析上，摘要报告相对基础模型提升 12.5%；官方项目页还报告测试时扩展性能提升 7.3%。"
limitationsEn: "The loop depends on tools that can expose relevant visual evidence and on the verifier learning when those tools are trustworthy. Errors shared by solver and verifier can still reinforce each other."
limitationsZh: "闭环依赖能够揭示相关视觉证据的工具，也依赖验证器判断工具何时可信；求解器与验证器共享的错误仍可能彼此强化。"
whyReadEn: "It extends the Agent0 co-evolution pattern into multimodal reasoning and makes verification executable rather than purely verbal."
whyReadZh: "它把 Agent0 的协同进化模式扩展到多模态推理，并把验证从纯语言判断变成可执行证据。"
feedbackSource: "Tool-grounded verifier critiques and fine-grained self-rewards"
updatedObject: "The shared LVLM's solver, verifier, and self-repair behavior"
updateMechanism: "Reinforcement learning over tool-integrated reasoning and verification trajectories"
successSignal: "Higher accuracy on geometry and visual scientific reasoning with improved test-time scaling"
loopSummaryEn: "Solve with tools → verify each visual step with tools → produce structured feedback and rewards → repair the reasoning → update the shared model → repeat."
loopSummaryZh: "借助工具求解 → 用工具验证视觉步骤 → 生成结构化反馈与奖励 → 修复推理 → 更新共享模型 → 重复。"
---

Evidence note: the arXiv abstract, official project page, and official repository were checked.

证据说明：已核对 arXiv 摘要、官方项目页与官方代码仓库。
