---
title: "Unrolled Policy Iteration for Tiny Recursive Models"
titleZh: "面向微型递归模型的展开策略迭代"
authors: ["Bahram Behzadian", "Brett Daley", "Gopeshh Subbaraj", "Houssam Nassif"]
presentation: "poster"
year: 2026
sourceIndex: 54
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=rIzREKws05"}]
themes: ["recursive-models-architectures", "foundations-recursive-computation", "verification-evaluation-safety"]
keywords: ["tiny recursive models", "policy iteration", "internal evaluator", "contraction", "checker feedback"]
difficulty: "advanced"
prerequisites: ["Markov decision processes", "policy iteration", "Bellman operators", "recurrent networks"]
readingPaths: []
relatedPapers: ["tiny-autoregressive-recursive-models", "growing-to-looping", "world-action-verifier"]
readNext: ["tiny-autoregressive-recursive-models", "growing-to-looping"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=rIzREKws05"]
summaryEn: "This work formalizes plan-editing Tiny Recursive Models as approximate policy iteration with a compute-truncated internal evaluator. It identifies contraction strength and unroll depth as practical controls for stable test-time scaling."
summaryZh: "该工作把计划编辑式微型递归模型形式化为带计算截断内部评估器的近似策略迭代，并指出收缩强度与展开深度是稳定扩展测试时计算的关键旋钮。"
problemEn: "A recursively unrolled evaluator is approximate and finite, so increasing test-time depth beyond training can amplify value errors and destabilize policy improvement."
problemZh: "递归展开的评估器既近似又有限，因此测试时深度超过训练设置后，价值误差可能被放大并破坏策略改进稳定性。"
methodEn: "Plan editing is modeled as an MDP. Under a contractive latent update, value error separates into a Bellman-residual term and a truncation bias that decays geometrically with depth; conservative mixture updates scale evaluation error by their mixing weight."
methodZh: "论文把计划编辑建模为 MDP。在潜在更新满足收缩条件时，价值误差可拆成 Bellman 残差与随深度几何衰减的截断偏差；保守混合更新还会按混合权重缩小评估误差影响。"
resultsEn: "Checker-only experiments on 4×4 and 9×9 Sudoku demonstrate feasibility and show that latent contraction and projection influence stability when evaluation depth differs from training depth."
resultsZh: "仅使用检查器反馈的 4×4 与 9×9 数独实验验证了可行性，并显示当评估深度偏离训练深度时，潜在收缩与投影会影响稳定性。"
limitationsEn: "The guarantees require a contraction assumption that may be hard to enforce in richer models. Sudoku has exact verifiers and a compact state space, unlike many open-ended reasoning tasks."
limitationsZh: "理论保证依赖在更复杂模型中可能难以满足的收缩假设；数独拥有精确验证器和紧凑状态空间，与开放式推理任务差异明显。"
whyReadEn: "It explains when adding more recursive compute should help rather than silently magnify an evaluator's mistakes."
whyReadZh: "它解释了增加递归计算何时会带来帮助，而不是悄悄放大内部评估器的错误。"
feedbackSource: "Sudoku constraint-checker rewards and truncated internal value estimates"
updatedObject: "The plan-editing policy and recurrent evaluator"
updateMechanism: "Conservative approximate policy iteration with finite unrolling"
successSignal: "Higher constraint satisfaction with stable behavior under depth mismatch"
loopSummaryEn: "Evaluate a plan for n recurrent steps → estimate advantage → conservatively edit the plan → check constraints → repeat."
loopSummaryZh: "递归评估计划 n 步 → 估计优势 → 保守编辑计划 → 检查约束 → 重复。"
---

Evidence note: the workshop paper and author poster were checked.

证据说明：已核对工作坊论文与作者海报。
