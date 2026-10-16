---
title: "POLARIS: A GODEL AGENT FRAMEWORK FOR SMALL LANGUAGE MODELS THROUGH EXPERIENCE ABSTRACTED POLICY REPAIR"
titleZh: "POLARIS：通过经验抽象与策略修补构建小语言模型的 Gödel 智能体框架"
authors: ["Aditya Kakade", "Vivek Srivastava", "Shirish Karande"]
presentation: "poster"
year: 2026
sourceIndex: 45
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=wlwkLVvB0W"},{"kind":"arxiv","url":"https://arxiv.org/abs/2603.23129"}]
themes: ["agents-tools-code-evolution", "memory-continual-adaptation", "foundations-recursive-computation"]
keywords: ["Gödel agent", "policy repair", "experience abstraction", "small language models", "self-modification"]
difficulty: "advanced"
prerequisites: ["language-model agents", "policy optimization", "program repair", "experience memory"]
readingPaths: []
relatedPapers: ["ace-code-evolution", "anchored-self-play-code-repair", "simple-code-evolution-baselines"]
readNext: ["ace-code-evolution", "simple-code-evolution-baselines"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2603.23129"]
summaryEn: "Polaris is a Gödel-style agent for compact models that converts failures into persistent policy repairs. It abstracts experience into reusable strategies and applies small, auditable code patches rather than only rewriting the current answer."
summaryZh: "Polaris 是面向小模型的 Gödel 式智能体，把失败转化为可持续复用的策略修补。它将经验抽象成通用策略，并应用小型、可审计的代码补丁，而不只是重写当前回答。"
problemEn: "Small models struggle to improve through response-level reflection alone, while unconstrained self-modification risks large, opaque regressions and poor transfer from one failure to the next."
problemZh: "小模型仅靠回答级反思很难持续改进，而不受约束的自修改又容易产生大范围、不透明的回退，单次失败经验也难以迁移。"
methodEn: "After a failure, the agent analyzes the trace, forms a corrective strategy, abstracts it beyond the instance, and proposes a minimal policy-code patch. Conservative checks gate the patch before it becomes persistent and reusable on unseen cases."
methodZh: "发生失败后，智能体分析轨迹、形成纠正策略、将其抽象到实例之外，再提出最小化策略代码补丁；保守检查通过后，补丁才被持久化并用于未见样例。"
resultsEn: "A 7B model equipped with Polaris shows consistent gains over its base policy and competitive baselines on MGSM, DROP, GPQA, and LitBench, spanning arithmetic, compositional reasoning, graduate questions, and creative writing."
resultsZh: "配备 Polaris 的 7B 模型在 MGSM、DROP、GPQA 与 LitBench 上持续优于基础策略并达到有竞争力水平，覆盖算术、组合推理、研究生问题与创意写作。"
limitationsEn: "Benchmark-local policy edits are not equivalent to globally safe self-modification. Conservative tests can miss regressions, and accumulating code patches may create conflicts or overfit the benchmark's feedback."
limitationsZh: "基准内部的策略编辑不等同于全局安全的自修改；保守测试仍可能漏掉回退，累积代码补丁也可能冲突或过拟合基准反馈。"
whyReadEn: "It is one of the clearest literal self-modification loops in the collection: failure becomes an inspected, tested, persistent policy change."
whyReadZh: "它是论文集中最直观的字面自修改闭环之一：失败会变成经过检查、测试并持久保存的策略变更。"
feedbackSource: "Failed task traces and conservative regression checks"
updatedObject: "The agent's executable policy code"
updateMechanism: "Experience abstraction followed by minimal tested code repair"
successSignal: "The patch fixes the failure and transfers without violating conservative checks"
loopSummaryEn: "Fail → diagnose the trace → abstract a strategy → patch policy code → test → retain the repair."
loopSummaryZh: "失败 → 诊断轨迹 → 抽象策略 → 修补策略代码 → 测试 → 保留修复。"
---

Evidence note: the workshop entry and current arXiv abstract were checked; the original workshop-title capitalization is retained.

证据说明：已核对工作坊条目与当前 arXiv 摘要；本站保留工作坊标题的原始大小写。
