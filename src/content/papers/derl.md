---
title: "Differentiable Evolutionary Reinforcement Learning"
titleZh: "可微分进化强化学习"
authors: ["Sitao Cheng", "Tianle Li", "Xuhan Huang", "Xunjian Yin", "Difan Zou"]
presentation: "poster"
year: 2026
sourceIndex: 52
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=uXTXcZ615k"},{"kind":"arxiv","url":"https://arxiv.org/abs/2512.13399"}]
themes: ["self-play-synthetic-data-curriculum", "foundations-recursive-computation", "embodied-multimodal-intelligence"]
keywords: ["reward design", "bilevel optimization", "meta-reward", "evolutionary reinforcement learning", "meta-gradient"]
difficulty: "advanced"
prerequisites: ["reinforcement learning", "bilevel optimization", "reward shaping", "evolutionary search"]
readingPaths: []
relatedPapers: ["self-evolving-rubrics", "adaptive-meta-curriculum", "self-criteach"]
readNext: ["self-evolving-rubrics", "adaptive-meta-curriculum"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=uXTXcZ615k", "https://arxiv.org/abs/2512.13399"]
summaryEn: "DERL is a bilevel system that evolves executable reward functions while learning which reward structures produce better inner policies. Validation performance updates the meta-optimizer instead of treating reward search as a purely black-box mutation process."
summaryZh: "DERL 是一个双层系统，一边演化可执行奖励函数，一边学习哪些奖励结构能产生更好的内层策略。验证性能直接更新元优化器，而不是把奖励搜索当作纯黑箱突变。"
problemEn: "Hand-designed rewards are laborious and derivative-free reward evolution ignores the causal link between a reward's structure and the policy performance it induces."
problemZh: "人工奖励设计费力，而无导数的奖励演化忽略了奖励结构与其诱导策略性能之间的因果联系。"
methodEn: "A meta-optimizer composes atomic reward primitives into a Meta-Reward, an inner RL loop trains a policy with it, and downstream validation performance supplies an RL signal that approximates a meta-gradient for future reward proposals."
methodZh: "元优化器把原子奖励基元组合成 Meta-Reward，内层 RL 用它训练策略，再用下游验证性能构造强化学习信号，近似指导未来奖励提案的元梯度。"
resultsEn: "The abstract reports state-of-the-art results on ALFWorld and ScienceWorld, strong gains over heuristic rewards especially out of distribution, and validation across GSM8K and MATH reasoning tasks."
resultsZh: "摘要报告其在 ALFWorld 与 ScienceWorld 上达到先进水平，尤其在分布外场景显著优于启发式奖励，并在 GSM8K 与 MATH 推理任务上得到验证。"
limitationsEn: "The meta-signal is still only as faithful as the validation objective, and bilevel training multiplies compute. Calling the process differentiable does not remove reward hacking or guarantee transfer beyond the tested domains."
limitationsZh: "元信号仍受验证目标真实性限制，双层训练也会放大计算成本；“可微分”并不能消除奖励黑客，也不能保证迁移到未测领域。"
whyReadEn: "It turns reward engineering itself into the object of recursive learning and makes the outer loop sensitive to downstream policy consequences."
whyReadZh: "它把奖励工程本身变成递归学习对象，并让外层闭环对奖励造成的下游策略后果保持敏感。"
feedbackSource: "Validation performance of policies trained by candidate reward programs"
updatedObject: "The meta-optimizer that generates structured reward functions"
updateMechanism: "Bilevel reinforcement learning that approximates a meta-gradient of task success"
successSignal: "Candidate rewards train policies with higher held-out task performance"
loopSummaryEn: "Compose a reward → train an inner policy → validate the policy → update the reward generator → compose again."
loopSummaryZh: "组合奖励 → 训练内层策略 → 验证策略 → 更新奖励生成器 → 再次组合。"
---

Evidence note: the workshop manuscript and arXiv abstract were checked.

证据说明：已核对工作坊稿件与 arXiv 摘要。
