---
title: "SkillRL: Evolving Agents via Recursive Skill-Augmented Reinforcement Learning"
titleZh: "SkillRL：通过递归技能增强强化学习进化智能体"
authors: ["Peng Xia", "Jianwen Chen", "Hanyang Wang", "Jiaqi Liu", "Kaide Zeng", "Yu Wang", "Siwei Han", "Yiyang Zhou", "Xujiang Zhao", "Haifeng Chen", "Zeyu Zheng", "Cihang Xie", "Huaxiu Yao"]
presentation: "poster"
year: 2026
sourceIndex: 35
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=56D2hjARkn"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.08234"},{"kind":"code","url":"https://github.com/aiming-lab/SkillRL"}]
themes: ["memory-continual-adaptation", "agents-tools-code-evolution", "self-play-synthetic-data-curriculum"]
keywords: ["SkillBank", "skill discovery", "experience distillation", "recursive evolution", "agent reinforcement learning"]
difficulty: "advanced"
prerequisites: ["LLM agents", "reinforcement learning", "retrieval-augmented generation", "continual learning"]
readingPaths: []
relatedPapers: ["agentic-memory-designs", "simplemem", "agent0"]
readNext: ["simplemem", "agentic-memory-designs"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2602.08234", "https://github.com/aiming-lab/SkillRL"]
summaryEn: "SkillRL distills successful and failed agent experience into a hierarchical SkillBank of reusable heuristics, retrieves the right general and task-specific skills for new trajectories, and lets the skill library co-evolve with the policy during RL."
summaryZh: "SkillRL 把智能体成败经验蒸馏成分层 SkillBank 可复用启发式，为新轨迹检索通用与任务专用技能，并让技能库在 RL 中与策略共同进化。"
problemEn: "Raw trajectory memories are verbose, noisy, and hard to generalize from. Retrieval alone cannot guarantee that the policy learns to use accumulated experience or refine it after new failures."
problemZh: "原始轨迹记忆冗长、含噪且难以泛化；仅做检索不能保证策略学会使用积累经验，也不能保证在新失败后修正经验。"
methodEn: "Experience distillation extracts compact skills into a hierarchy, adaptive retrieval selects both broad and task-specific heuristics, and recursive failure analysis updates SkillBank while skill-conditioned RL updates the agent policy."
methodZh: "经验蒸馏把轨迹提取为分层紧凑技能，自适应检索选择通用与任务专用启发式，递归失败分析更新 SkillBank，同时技能条件 RL 更新智能体策略。"
resultsEn: "On ALFWorld, WebShop, and seven search-augmented tasks, the abstract reports state-of-the-art performance, more than 15.3% improvement over strong baselines, a smaller token footprint, and robustness as task complexity grows."
resultsZh: "在 ALFWorld、WebShop 与七个搜索增强任务上，摘要报告达到领先性能，超过强基线 15.3% 以上，同时减少 token 占用，并在任务复杂度增加时保持稳健。"
limitationsEn: "Extracted natural-language skills can be wrong, redundant, or overly specific, and retrieval quality becomes a new bottleneck. Continually rewriting the skill bank risks forgetting useful minority strategies."
limitationsZh: "提取出的自然语言技能可能错误、重复或过于专用，检索质量也会成为新瓶颈；持续改写技能库可能遗忘有用的少数策略。"
whyReadEn: "It treats readable memory and learned policy weights as two co-evolving substrates rather than choosing one or the other."
whyReadZh: "它把可读记忆与策略权重视为两个共同进化的载体，而不是二选一。"
feedbackSource: "Success and failure patterns in agent trajectories"
updatedObject: "The hierarchical SkillBank and the skill-conditioned policy"
updateMechanism: "Experience distillation, adaptive retrieval, recursive failure analysis, and RL"
successSignal: "Higher task success with lower context cost across increasingly complex tasks"
loopSummaryEn: "Act with retrieved skills → observe success or failure → distill reusable lessons → revise SkillBank → update the policy → act again."
loopSummaryZh: "使用检索技能行动 → 观察成败 → 蒸馏可复用经验 → 修订 SkillBank → 更新策略 → 再次行动。"
---

Evidence note: the arXiv abstract, public paper, and official repository were checked.

证据说明：已核对 arXiv 摘要、公开论文与官方仓库。
