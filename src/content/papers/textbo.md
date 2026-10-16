---
title: "TextBO: Bayesian Optimization in Language Space for Eval-Efficient Self-Improving AI"
titleZh: "TextBO：在语言空间中进行贝叶斯优化，实现评估高效的自我改进 AI"
authors: ["Enoch Hyunwook Kang", "Hema Yoganarasimhan"]
presentation: "poster"
year: 2026
sourceIndex: 44
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=h0XYERyeL6"},{"kind":"arxiv","url":"https://arxiv.org/abs/2511.12063"},{"kind":"code","url":"https://github.com/Enoch-H-Kang/TextBO"}]
themes: ["test-time-learning-inference-scaling", "self-play-synthetic-data-curriculum", "scientific-discovery-applications"]
keywords: ["Bayesian optimization", "prompt optimization", "textual gradients", "evaluation efficiency", "Best-of-N"]
difficulty: "advanced"
prerequisites: ["Bayesian optimization", "upper confidence bounds", "prompt optimization", "LLM evaluation"]
readingPaths: []
relatedPapers: ["automedprompt-textual-gradients", "gasp", "llm-fe"]
readNext: ["automedprompt-textual-gradients", "llm-fe"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=h0XYERyeL6", "https://arxiv.org/abs/2511.12063", "https://github.com/Enoch-H-Kang/TextBO"]
summaryEn: "TextBO optimizes prompts when evaluations, not generations, are the scarce resource. It combines LLM-proposed textual gradients with Best-of-N selection and connects that procedure to upper-confidence-bound Bayesian optimization."
summaryZh: "TextBO 针对“评估比生成更稀缺”的提示优化场景，把大模型提出的文本梯度与 Best-of-N 选择结合，并将该过程连接到上置信界贝叶斯优化。"
problemEn: "Prompt optimizers can generate many candidates cheaply but often spend expensive evaluations inefficiently; standard Bayesian optimization is difficult because language has no ordinary gradient or explicit calibrated surrogate."
problemZh: "提示优化器可以廉价地产生大量候选，却常低效消耗昂贵评估；而语言空间既没有普通梯度，也缺少显式校准代理模型，使标准贝叶斯优化难以直接应用。"
methodEn: "An LLM proposes local textual edits, several candidates are sampled around each direction, and evaluation selects promising updates. The analysis shows that this textual-gradient plus Best-of-N procedure statistically emulates ascent on a canonical UCB acquisition function."
methodZh: "大模型先提出局部文本修改方向，再围绕每个方向采样多个候选并通过评估选优。论文分析表明，“文本梯度 + Best-of-N”在统计上模拟了经典 UCB 采集函数的上升过程。"
resultsEn: "On automated advertising-alignment tasks, TextBO achieves better performance per evaluation than Best-of-N and GEPA. Adding its multi-step mechanism to GEPA also improves agentic benchmark results over standard GEPA."
resultsZh: "在自动广告对齐任务上，TextBO 的单位评估性能优于 Best-of-N 与 GEPA；把其多步机制加入 GEPA，也在智能体基准上超过标准 GEPA。"
limitationsEn: "The implicit surrogate lives inside the chosen LLM, so behavior may shift across model families. The advantage matters most when evaluation is expensive and reasonably reliable; noisy evaluators can still steer the loop poorly."
limitationsZh: "隐式代理模型存在于所选大模型内部，因此不同模型族可能表现不同。其优势主要适用于评估昂贵且较可靠的场景；噪声评估器仍可能把闭环带偏。"
whyReadEn: "It gives prompt evolution a principled evaluation-budget lens and a bridge to classical optimization theory."
whyReadZh: "它从评估预算角度为提示演化提供了更有原则的解释，并连接到经典优化理论。"
feedbackSource: "Costly task evaluations of generated prompt candidates"
updatedObject: "The natural-language prompt or agent instruction"
updateMechanism: "Textual-gradient proposals with Best-of-N UCB-style exploration"
successSignal: "Higher objective value per evaluation call"
loopSummaryEn: "Evaluate a prompt → describe a textual gradient → sample local edits → select under exploration pressure → repeat."
loopSummaryZh: "评估提示 → 描述文本梯度 → 采样局部修改 → 在探索压力下选优 → 重复。"
---

Evidence note: the workshop paper, arXiv abstract, and official code repository were checked.

证据说明：已核对工作坊论文、arXiv 摘要与官方代码仓库。
