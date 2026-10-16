---
title: "Theory-Driven Modeling and LLM-Guided Evolution for Power System Scheduling"
titleZh: "面向电力系统调度的理论驱动建模与大模型引导演化"
authors: ["Wushuaijun Zhang", "Yikun Zong", "Yishuang Yue", "Kun Yuan"]
presentation: "poster"
year: 2026
sourceIndex: 51
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=djdSNvWpJ7"}]
themes: ["scientific-discovery-applications", "agents-tools-code-evolution", "verification-evaluation-safety"]
keywords: ["power systems", "unit commitment", "economic dispatch", "mixed-integer programming", "LLM-guided evolution"]
difficulty: "advanced"
prerequisites: ["mixed-integer programming", "unit commitment", "evolutionary optimization", "warm starts"]
readingPaths: []
relatedPapers: ["llm-fe", "scaling-law-discovery", "simple-code-evolution-baselines"]
readNext: ["llm-fe", "simple-code-evolution-baselines"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=djdSNvWpJ7"]
summaryEn: "This work applies recursive LLM-guided evolution to warm-start design for unit-commitment and economic-dispatch optimization. The system critiques failures, evolves interpretable scoring functions, and tunes solver hyperparameters from fitness feedback."
summaryZh: "该工作把大模型引导的递归演化用于机组组合与经济调度的热启动设计。系统根据适应度反馈诊断失败、演化可解释评分函数，并自动调整求解器超参数。"
problemEn: "Large power-system mixed-integer programs depend heavily on variable selection and warm-start configuration, but expert heuristics transfer poorly and learned alternatives can be expensive to retrain."
problemZh: "大规模电力系统混合整数规划高度依赖变量选择与热启动配置，但专家启发式迁移性有限，学习式方案重新训练又很昂贵。"
methodEn: "Power-system theory constrains the candidate representation, while an LLM diagnoses poor schedules and proposes revisions to scoring formulas and parameters. An evolutionary loop evaluates candidates with solver fitness and retains better strategies."
methodZh: "电力系统理论约束候选表示，大模型诊断较差调度并提出评分公式与参数修改；演化闭环通过求解器适应度评价候选并保留更优策略。"
resultsEn: "On realistic UC/ED benchmarks, the paper reports substantial speedups over Gurobi and baseline warm starts while maintaining solution quality. The loop discovers interpretable choices such as log-transformed reduced-cost scores."
resultsZh: "在真实感 UC/ED 基准上，论文报告其相对 Gurobi 与基线热启动获得显著加速，同时维持解质量；闭环还发现了对约化成本做对数变换等可解释评分方式。"
limitationsEn: "Performance depends on benchmark fidelity, solver settings, and operational constraints. A faster warm start does not replace feasibility, contingency, or reliability checks required in real grids."
limitationsZh: "性能依赖基准真实性、求解器设置与运行约束；更快的热启动不能替代真实电网所需的可行性、事故与可靠性检查。"
whyReadEn: "It shows how domain theory can bound an LLM evolution loop so that self-improvement yields inspectable artifacts rather than opaque prompts."
whyReadZh: "它展示了领域理论如何约束大模型演化闭环，使自我改进产出可检查的公式，而非不透明提示。"
feedbackSource: "Mixed-integer solver runtime, objective quality, and feasibility feedback"
updatedObject: "Warm-start scoring functions and solver hyperparameters"
updateMechanism: "LLM diagnosis followed by fitness-guided evolutionary revision"
successSignal: "Faster solution time without degrading schedule feasibility or objective quality"
loopSummaryEn: "Propose a warm start → solve UC/ED → diagnose failures → evolve formulas and parameters → retest."
loopSummaryZh: "提出热启动 → 求解 UC/ED → 诊断失败 → 演化公式与参数 → 重新测试。"
---

Evidence note: the workshop paper was checked.

证据说明：已核对工作坊论文。
