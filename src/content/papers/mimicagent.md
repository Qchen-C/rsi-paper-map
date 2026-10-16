---
title: "MimicAgent: Learning Quadruped Skills via Text-to-Trajectory Generation"
titleZh: "MimicAgent：通过文本到轨迹生成学习四足机器人技能"
authors: ["Narayanan Palghat Parameswaran", "Lucky Kant Nayak", "Neehar Peri", "Deva Ramanan"]
presentation: "poster"
year: 2026
sourceIndex: 87
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=1iAEFtFQ9M"},{"kind":"arxiv","url":"https://arxiv.org/abs/2609.24145"},{"kind":"project","url":"https://luckykantnayak.github.io/mimic-agent/"}]
themes: ["embodied-multimodal-intelligence", "agents-tools-code-evolution"]
keywords: ["quadruped locomotion", "text-to-trajectory", "coding agents", "example-guided RL", "robot skills"]
difficulty: "intermediate"
prerequisites: ["robot locomotion", "reinforcement learning", "trajectory optimization", "code-generating agents"]
readingPaths: []
relatedPapers: ["residual-off-policy-rl", "self-directed-robot-learning", "world-action-verifier"]
readNext: ["residual-off-policy-rl", "self-directed-robot-learning"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=1iAEFtFQ9M", "https://arxiv.org/abs/2609.24145", "https://luckykantnayak.github.io/mimic-agent/"]
summaryEn: "MimicAgent turns a text skill request into a coarse quadruped reference trajectory using coding agents, then trains an example-guided RL policy to imitate it. The reference may be dynamically infeasible yet still useful as a learning target."
summaryZh: "MimicAgent 使用编程智能体把文本技能请求转成粗略的四足机器人参考轨迹，再用示例引导强化学习训练模仿策略；参考轨迹即使动力学上不可行，也可能成为有效学习目标。"
problemEn: "Quadruped reward shaping requires extensive expert iteration, while the large motion-capture libraries available for humanoid imitation do not exist for diverse animal-like skills."
problemZh: "四足机器人奖励塑形需要专家反复调试，而用于人形模仿学习的大规模动作捕捉库并没有覆盖多样的动物式技能。"
methodEn: "An agentic coding harness expands a short prompt into a skill description and executable base-and-foot motion functions. These produce reference trajectories for example-guided reinforcement learning and deployment."
methodZh: "智能体编程框架把短提示扩展成技能描述与可执行的机身、足端运动函数，由此生成参考轨迹，供示例引导强化学习和部署使用。"
resultsEn: "Across evaluated skills, human raters prefer MimicAgent policies to Eureka-generated alternatives. The later public project reports semantically aligned references for 87% of prompts with its stated agent setup."
resultsZh: "在所评估技能上，人类评分者一致偏好 MimicAgent 策略而非 Eureka 方案；后续公开项目还报告，在其指定智能体配置下 87% 的提示能生成语义匹配的参考轨迹。"
limitationsEn: "Trajectory generation depends on coding-agent reliability and simulator conventions. Coarse or infeasible references still require RL compute, and successful simulation transfer does not remove real-robot safety constraints."
limitationsZh: "轨迹生成依赖编程智能体可靠性与仿真器约定；粗糙或不可行参考仍需强化学习计算，仿真迁移成功也不能消除真实机器人安全约束。"
whyReadEn: "It replaces hard-to-specify rewards with an artifact humans and language models can express more naturally: a motion trajectory."
whyReadZh: "它把难以编写的奖励函数替换为人类和语言模型都更容易表达的产物：运动轨迹。"
feedbackSource: "Trajectory-tracking rewards and human preference over learned quadruped behaviors"
updatedObject: "Generated reference motion code and the downstream locomotion policy"
updateMechanism: "Agentic trajectory synthesis followed by example-guided reinforcement learning"
successSignal: "A deployable policy whose motion matches the requested skill"
loopSummaryEn: "Describe a skill → generate motion code → simulate a reference → train a tracking policy → inspect behavior and revise."
loopSummaryZh: "描述技能 → 生成运动代码 → 仿真参考轨迹 → 训练跟踪策略 → 检查行为并修正。"
---

Evidence note: the workshop paper, later arXiv version, and official project page were checked; the English workshop title is preserved here.

证据说明：已核对工作坊论文、后续 arXiv 版本与官方项目页；本站保留工作坊英文标题。
