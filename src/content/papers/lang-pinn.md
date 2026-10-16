---
title: "Lang-PINN: From Language to Physics-Informed Neural Networks via a Multi-Agent Framework"
titleZh: "Lang-PINN：通过多智能体框架从自然语言生成物理信息神经网络"
authors: ["Xin He", "Liangliang You", "Hongduan Tian", "Bo Han", "Ivor Tsang", "Yew-Soon Ong"]
presentation: "spotlight"
year: 2026
sourceIndex: 13
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=q5qN3oQ4D1"},{"kind":"arxiv","url":"https://arxiv.org/abs/2510.05158"}]
themes: ["scientific-discovery-applications", "agents-tools-code-evolution", "verification-evaluation-safety"]
keywords: ["physics-informed neural networks", "multi-agent systems", "PDEs", "code generation", "execution feedback"]
difficulty: "intermediate"
prerequisites: ["partial differential equations", "physics-informed neural networks", "LLM agents", "Python training pipelines"]
readingPaths: []
relatedPapers: ["execution-grounded-ai-research", "agent0", "causalevolve"]
readNext: ["execution-grounded-ai-research", "causalevolve"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2510.05158"]
summaryEn: "Lang-PINN is an LLM-driven multi-agent system that turns a natural-language physics problem into a trainable Physics-Informed Neural Network, covering formulation, architecture, code generation, execution, and repair."
summaryZh: "Lang-PINN 是一个由 LLM 驱动的多智能体系统，可把自然语言描述的物理问题转换成可训练的物理信息神经网络，覆盖方程形式化、架构设计、代码生成、执行与修复。"
problemEn: "Building a usable PINN requires experts to translate an informal problem into PDEs, choose architectures and losses, and debug a fragile numerical training pipeline. Prior LLM tools usually automate only one step and assume that the PDE is already formalized."
problemZh: "构建可用的 PINN 需要专家把非形式化问题转成 PDE、选择架构与损失并调试脆弱的数值训练流程；已有 LLM 工具往往只自动化单个环节，并假设 PDE 已经给出。"
methodEn: "Four specialized agents cooperate: a PDE Agent produces symbolic equations, a PINN Agent designs the network and losses, a Code Agent writes modular implementations, and a Feedback Agent executes the result, diagnoses failures, and requests revisions."
methodZh: "四个专门智能体协作：PDE Agent 生成符号方程，PINN Agent 设计网络与损失，Code Agent 编写模块化实现，Feedback Agent 执行结果、诊断失败并触发修订。"
resultsEn: "The abstract reports up to three to five orders of magnitude lower mean squared error, more than 50% higher end-to-end execution success, and up to 74% less time overhead than competitive baselines."
resultsZh: "摘要报告：相较有竞争力的基线，均方误差最多降低 3–5 个数量级，端到端执行成功率提高超过 50%，时间开销最多降低 74%。"
limitationsEn: "The pipeline still depends on LLM-generated scientific formulations and executable diagnostics being trustworthy. Aggregate success does not guarantee that every generated PDE, boundary condition, or numerical solution is physically valid."
limitationsZh: "该流程仍依赖 LLM 生成的科学形式化与执行诊断是否可靠；总体成功率不能保证每个生成的 PDE、边界条件或数值解都符合物理规律。"
whyReadEn: "It is a clear example of recursive improvement through role decomposition and executable feedback in a scientific workflow."
whyReadZh: "它清楚展示了如何在科学工作流中通过角色分解与可执行反馈实现递归改进。"
feedbackSource: "Execution results, numerical errors, and diagnostics from the Feedback Agent"
updatedObject: "The PDE specification, PINN design, and generated training code"
updateMechanism: "Cross-agent revision of symbolic formulations, architectures, losses, and implementation"
successSignal: "Runnable code with low numerical error and successful end-to-end execution"
loopSummaryEn: "Describe the physics task → formalize the PDE → design the PINN → generate and run code → diagnose errors → revise the pipeline."
loopSummaryZh: "描述物理任务 → 形式化 PDE → 设计 PINN → 生成并运行代码 → 诊断错误 → 修订整条流程。"
---

Evidence note: the arXiv abstract was checked. Reported percentages are author-reported abstract results rather than an independent reproduction.

证据说明：已核对 arXiv 摘要。所列百分比为作者在摘要中报告的结果，并非本站独立复现。
