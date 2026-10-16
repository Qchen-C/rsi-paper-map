---
title: "Beyond Solving: A Closer Look at LLMs as Solution Verifiers"
titleZh: "不止会解题：重新审视大模型作为答案验证器"
authors: ["Jack Lu", "Ryan Teehan", "Jinran Jin", "Mengye Ren"]
presentation: "poster"
year: 2026
sourceIndex: 61
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=Hv5hDfbhuB"}]
themes: ["verification-evaluation-safety", "test-time-learning-inference-scaling", "foundations-recursive-computation"]
keywords: ["solution verification", "rejection sampling", "self-verification", "cross-family verification", "verifier gain"]
difficulty: "intermediate"
prerequisites: ["rejection sampling", "LLM evaluation", "test-time scaling", "post-training"]
readingPaths: []
relatedPapers: ["world-action-verifier", "reasoning-decision-pivots", "compute-as-teacher"]
readNext: ["world-action-verifier", "reasoning-decision-pivots"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=Hv5hDfbhuB"]
summaryEn: "This study asks when an LLM verifier can improve a solver by selecting among candidate answers. Its central finding is that verifier diversity matters: cross-family verification often helps more than self-verification."
summaryZh: "该研究考察大模型验证器何时能通过筛选候选答案来提升求解器。核心发现是验证器多样性很重要：跨模型家族验证通常比自验证更有效。"
problemEn: "Solver–verifier systems are widely used for test-time scaling, but prior evidence concentrates on self-verification and offers little guidance on model family, size, or post-training choices."
problemZh: "求解器—验证器系统广泛用于测试时扩展，但既有证据多集中于自验证，对模型家族、规模与后训练选择缺少指导。"
methodEn: "The authors evaluate 37 base and post-trained models across nine logical, mathematical, symbolic, factual, and knowledge benchmarks. They introduce verifier gain to predict improvement from verifier-based rejection sampling."
methodZh: "作者在九个逻辑、数学、符号、事实与知识基准上评估 37 个基础及后训练模型，并提出 verifier gain 指标预测验证器拒绝采样带来的收益。"
resultsEn: "Cross-family verifiers generally outperform self- or same-family verification, and gains shrink as solver and verifier become more similar. Post-training weakens self-improvement but strengthens cross-family improvement; math and logic benefit most."
resultsZh: "跨家族验证总体优于自验证或同家族验证，求解器与验证器越相似收益越小。后训练会削弱自我验证，却增强跨家族提升；数学和逻辑任务最受益。"
limitationsEn: "Verifier gain is empirical and task-dependent, and candidate selection cannot recover an answer absent from the pool. Cross-family diversity may raise deployment cost and does not eliminate correlated errors."
limitationsZh: "verifier gain 是经验性且依赖任务的；若候选池没有正确答案，筛选无法凭空恢复。跨家族多样性可能增加部署成本，也不能消除相关错误。"
whyReadEn: "It replaces the vague advice to 'add a judge' with evidence about which judge–solver pairings actually pay off."
whyReadZh: "它把“加一个裁判”的模糊建议，转化为哪些裁判—求解器配对真正有效的实证依据。"
feedbackSource: "Verifier scores over pools of solver-generated candidate solutions"
updatedObject: "The selected solution at inference time"
updateMechanism: "Cross-model rejection sampling guided by verifier gain"
successSignal: "Selected answers outperform the solver's unverified baseline"
loopSummaryEn: "Generate candidate solutions → score them with a distinct verifier → select the best → measure verifier gain."
loopSummaryZh: "生成候选解 → 用不同验证器评分 → 选择最佳 → 衡量验证收益。"
---

Evidence note: the workshop paper was checked.

证据说明：已核对工作坊论文。
