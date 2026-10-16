---
title: "Duel-Evolve: Pairwise Preference Black-Box Optimization of LLM Responses"
titleZh: "Duel-Evolve：基于成对偏好的大语言模型响应黑盒优化"
authors: ["Sweta Karlekar", "Carolina Zheng", "Magnus Saebo", "Nicolas Beltran-Velez", "Shuyang Yu", "John Bowlan", "Michal Kucer", "David Blei"]
presentation: "poster"
year: 2026
sourceIndex: 86
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=38t39AFZPE"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.21585"}]
themes: ["test-time-learning-inference-scaling", "agents-tools-code-evolution", "verification-evaluation-safety"]
keywords: ["pairwise preference", "black-box optimization", "evolutionary search", "Bradley-Terry model", "test-time scaling"]
difficulty: "advanced"
prerequisites: ["preference learning", "Bayesian optimization", "evolutionary algorithms", "test-time search"]
readingPaths: []
relatedPapers: ["feedback-descent", "textbo", "evopresent"]
readNext: ["feedback-descent", "textbo"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=38t39AFZPE", "https://arxiv.org/abs/2602.21585"]
summaryEn: "Duel-Evolve searches over LLM outputs using only the model's noisy pairwise preferences. A Bayesian Bradley–Terry model turns comparisons into uncertainty-aware quality estimates that steer both evaluation and candidate evolution."
summaryZh: "Duel-Evolve 只利用模型自身带噪声的成对偏好搜索 LLM 输出；贝叶斯 Bradley–Terry 模型把比较结果转成带不确定性的质量估计，用于指导评估与候选演化。"
problemEn: "Many open-ended outputs lack calibrated scalar rewards or executable verifiers, yet evolutionary optimization needs a reliable way to rank candidates under a limited evaluation budget."
problemZh: "许多开放式输出没有校准好的标量奖励或可执行验证器，但进化优化仍需在有限评估预算下可靠排序候选。"
methodEn: "The algorithm repeatedly compares selected candidate pairs, fits posterior utilities with a Bayesian Bradley–Terry model, uses Double Thompson Sampling to focus comparisons, and asks an LLM to mutate high-quality parents."
methodZh: "算法反复比较选定候选对，用贝叶斯 Bradley–Terry 模型拟合后验效用，以双重汤普森采样集中比较预算，并让 LLM 基于高质量父代生成变体。"
resultsEn: "The workshop paper reports a 20-point accuracy advantage on MathBench and more than 11 points on LiveCodeBench over comparable methods, without reward models, search-time labels, or hand-crafted scores."
resultsZh: "工作坊论文报告其在 MathBench 上比对比方法高 20 个百分点，在 LiveCodeBench 上高出 11 个百分点以上，且无需奖励模型、搜索时标签或手工评分函数。"
limitationsEn: "Self-preferences can be systematically biased or non-transitive, and repeated pairwise judging is expensive. A coherent posterior ranking does not guarantee alignment with external correctness."
limitationsZh: "模型自偏好可能存在系统偏差或非传递性，反复成对评判也成本较高；一致的后验排序并不保证符合外部正确性。"
whyReadEn: "It is a strong reference for optimization when only comparative feedback is available, and it exposes uncertainty as a resource-allocation signal in self-improvement."
whyReadZh: "它是只有比较反馈时开展优化的重要参考，并展示了如何把不确定性用于自我改进中的资源分配。"
feedbackSource: "Pairwise preferences produced by the same LLM that generates candidates"
updatedObject: "A population of candidate responses and posterior utility estimates"
updateMechanism: "Bayesian preference aggregation, active comparisons, and LLM-guided mutation"
successSignal: "A candidate with higher externally measured math or coding correctness"
loopSummaryEn: "Compare candidates → infer uncertain utilities → select promising parents → generate variants → compare again."
loopSummaryZh: "比较候选 → 推断带不确定性的效用 → 选择潜力父代 → 生成变体 → 再次比较。"
---

Evidence note: the workshop title is preserved. The current public version is titled “Duel-Evolve: Reward-Free Test-Time Scaling via LLM Self-Preferences”; its abstract and author list were also checked.

证据说明：本站保留工作坊标题；当前公开版本标题为《Duel-Evolve: Reward-Free Test-Time Scaling via LLM Self-Preferences》，其摘要与作者名单也已核对。
