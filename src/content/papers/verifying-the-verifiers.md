---
title: "Verifying the Verifiers: Failure Attribution for Agentic Benchmark Diagnostics and Training Data Curation"
titleZh: "验证验证器：用于智能体基准诊断与训练数据筛选的失败归因"
authors: ["Jesse Hu", "Pratyush Shukla", "Ke Huang"]
presentation: "poster"
year: 2026
sourceIndex: 99
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=iRhaK8PsuB"}]
themes: ["verification-evaluation-safety", "agents-tools-code-evolution"]
keywords: ["failure attribution", "agent benchmarks", "training data curation", "sandboxed judge", "evaluation diagnostics"]
difficulty: "intermediate"
prerequisites: ["coding-agent benchmarks", "software testing", "LLM judges", "inter-annotator agreement"]
readingPaths: []
relatedPapers: ["code-agent-reward-hacking", "evaluating-agents-md", "sahoo"]
readNext: ["code-agent-reward-hacking", "sahoo"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=iRhaK8PsuB"]
summaryEn: "AutoTriage investigates failed coding-agent runs and attributes them to agent error, task defect, or infrastructure failure. Its judge can inspect trajectories and execute code inside a sandbox instead of reasoning from text alone."
summaryZh: "AutoTriage 调查编程智能体失败，并归因为智能体错误、任务缺陷或基础设施故障；其裁判可在沙箱中检查轨迹和执行代码，而不只是阅读文本。"
problemEn: "A benchmark failure is not automatically an agent mistake. Treating broken tasks or infrastructure faults as negative training signal corrupts both system diagnosis and recursive improvement data."
problemZh: "基准失败并不自动等于智能体犯错；把损坏任务或基础设施故障当成负训练信号，会污染系统诊断与递归改进数据。"
methodEn: "The authors define a three-way attribution taxonomy, validate it with human annotation, then compare text-only, read-only, and full-sandbox agentic judges across multiple models."
methodZh: "作者定义三类失败归因体系，以人工标注验证，再在多个模型上比较纯文本、只读访问和完整沙箱三种智能体裁判。"
resultsEn: "Human labels reach κ=0.929 agreement. The best AutoTriage configuration, GPT-5.2 Codex with sandbox execution, reaches near-human κ=0.833; weaker judges systematically over-blame task defects."
resultsZh: "人工标注的一致性达到 κ=0.929；最佳 AutoTriage 配置——带沙箱执行的 GPT-5.2 Codex——达到接近人类的 κ=0.833，而较弱裁判会系统性地把责任推给任务缺陷。"
limitationsEn: "Execution access helps in a model-dependent way and expands security and infrastructure requirements. Attribution still relies on the taxonomy and may miss mixed or interacting causes."
limitationsZh: "执行访问的收益取决于模型，也扩大了安全与基础设施要求；归因仍受分类体系限制，可能漏掉混合或相互作用的原因。"
whyReadEn: "It demonstrates that the reward pipeline itself needs diagnosis: before learning from a failure, a self-improving agent must know whether the failure belongs to the agent."
whyReadZh: "它说明奖励管线本身也需要诊断：自我改进智能体在从失败学习前，必须先确认失败是否真的应归因于智能体。"
feedbackSource: "Task specifications, agent trajectories, test results, logs, and sandbox reproduction"
updatedObject: "Failure labels used for benchmark diagnosis and training-data inclusion"
updateMechanism: "Agentic investigation followed by three-way root-cause classification"
successSignal: "Agreement with expert attribution and cleaner failure-derived training data"
loopSummaryEn: "Observe a failed run → inspect task, trace, and environment → reproduce in sandbox → attribute cause → curate evaluation or training data."
loopSummaryZh: "观察失败运行 → 检查任务、轨迹与环境 → 在沙箱复现 → 归因 → 筛选评测或训练数据。"
---

Evidence note: the accepted workshop paper was checked.

证据说明：已核对接收的工作坊论文。
