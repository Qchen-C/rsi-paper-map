---
title: "MAPPA: Scaling Multiagent Systems with Process Rewards"
titleZh: "MAPPA：用过程奖励扩展多智能体系统"
authors: ["Ed Li", "Junyu Ren", "Cat Yan"]
presentation: "poster"
year: 2026
sourceIndex: 80
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=s06wgoO65a"},{"kind":"arxiv","url":"https://arxiv.org/abs/2601.23228"},{"kind":"project","url":"https://ltjed.github.io/MAPPA/"}]
themes: ["agents-tools-code-evolution", "self-play-synthetic-data-curriculum", "verification-evaluation-safety"]
keywords: ["multiagent systems", "process rewards", "credit assignment", "AI feedback", "agent specialization"]
difficulty: "advanced"
prerequisites: ["multiagent systems", "reinforcement learning", "process supervision", "credit assignment"]
readingPaths: []
relatedPapers: ["fedagent", "alphaapollo", "verltool"]
readNext: ["fedagent", "alphaapollo"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=s06wgoO65a", "https://arxiv.org/abs/2601.23228", "https://ltjed.github.io/MAPPA/"]
summaryEn: "MAPPA fine-tunes multiagent systems with AI-generated rewards for individual actions rather than only a final team score. Fine-grained credit extracts more training signal from each expensive collaborative rollout."
summaryZh: "MAPPA 使用 AI 生成的逐动作奖励微调多智能体系统，而不是只给最终团队分数；细粒度信用分配从每条昂贵协作轨迹中提取更多训练信号。"
problemEn: "When several specialized agents collaborate, a final outcome cannot reveal which action helped or hurt, and generating enough full multiagent trajectories is expensive."
problemZh: "多个专门智能体协作时，最终结果无法说明哪个动作有益或有害，而生成足够多完整多智能体轨迹又很昂贵。"
methodEn: "An AI evaluator assigns per-action process rewards and traces credit backward through the interaction. Separate agent policies are updated from localized feedback, preserving specialization while sharing end-task pressure."
methodZh: "AI 评估器为每个动作分配过程奖励，并沿交互向后追踪信用；各智能体策略依据局部反馈更新，在共享最终任务压力的同时保持专业化。"
resultsEn: "On unseen math, MAPPA gains 5.0–17.5 percentage points on AIME and 7.8–17.2 on AMC. On tool-augmented data analysis, success rises by double-digit points and quality metrics improve substantially."
resultsZh: "在未见数学题上，MAPPA 在 AIME 提升 5.0–17.5 个百分点，在 AMC 提升 7.8–17.2 个百分点；工具增强数据分析的成功率与质量指标也显著提高。"
limitationsEn: "AI process rewards can be biased or inconsistent, and assigning local credit to emergent team behavior is inherently ambiguous. Extra evaluator calls add compute and can reward persuasive intermediate text over useful action."
limitationsZh: "AI 过程奖励可能偏置或不一致，把涌现团队行为归因到局部动作本就含糊；额外评估器调用增加计算，也可能偏爱有说服力的中间文本而非真正有用动作。"
whyReadEn: "It addresses the main learning bottleneck created by multiagent decomposition: specialization helps inference only if training can assign credit across the system."
whyReadZh: "它解决多智能体分解带来的核心学习瓶颈：只有训练能跨系统分配信用，专业化才真正帮助推理。"
feedbackSource: "AI-generated process rewards for each agent action plus final task outcomes"
updatedObject: "The separate policies of collaborating agents"
updateMechanism: "Per-action credit assignment and multiagent policy optimization"
successSignal: "Higher team success with more sample-efficient use of collaborative rollouts"
loopSummaryEn: "Run the agent team → score each action → propagate credit through the trace → update specialized policies → collaborate again."
loopSummaryZh: "运行智能体团队 → 为每个动作评分 → 沿轨迹传播信用 → 更新专门策略 → 再次协作。"
---

Evidence note: the workshop paper, current arXiv abstract, and official project page were checked.

证据说明：已核对工作坊论文、当前 arXiv 摘要与官方项目页。
