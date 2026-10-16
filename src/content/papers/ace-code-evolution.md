---
title: "ACE: Self-Evolving LLM Coding Framework Adversarial Unit Test Generation and Preference Optimization"
titleZh: "ACE：通过对抗单元测试生成与偏好优化实现自进化 LLM 编程"
authors: ["Yixu Huang", "Xinglei Yu", "Zhongyu Wei"]
presentation: "spotlight"
year: 2026
sourceIndex: 15
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=ecKAmz5vlO"},{"kind":"arxiv","url":"https://arxiv.org/abs/2605.16299"}]
themes: ["agents-tools-code-evolution", "verification-evaluation-safety", "self-play-synthetic-data-curriculum"]
keywords: ["code generation", "adversarial testing", "solver-adversary", "preference optimization", "execution supervision"]
difficulty: "advanced"
prerequisites: ["code generation benchmarks", "unit testing", "supervised fine-tuning", "preference optimization"]
readingPaths: []
relatedPapers: ["agent0", "test-time-self-distillation", "contextual-drag"]
readNext: ["test-time-self-distillation", "agent0"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2605.16299", "https://openreview.net/pdf?id=ecKAmz5vlO"]
summaryEn: "ACE makes a single language model alternate between program solver and adversarial test generator. Instead of merely confirming solutions, the adversary actively searches for inputs that trigger runtime errors, exceptions, or non-termination, turning execution into a scalable training signal."
summaryZh: "ACE 让同一个语言模型在程序求解器与对抗测试生成器之间交替。对抗方不只确认答案，而是主动寻找会触发运行时错误、异常或不终止的输入，把程序执行转成可扩展训练信号。"
problemEn: "As code solvers improve, ordinary verifier-generated tests increasingly confirm already-correct behavior and fail to expose the remaining rare failure modes. Annotated reference solutions and external reward models also limit scalable self-improvement."
problemZh: "随着代码求解器变强，普通验证器生成的测试越来越多地只是确认已有正确行为，难以发现剩余的稀有失败模式；人工标注参考解与外部奖励模型也限制了自我改进的规模。"
methodEn: "The model generates candidate programs, produces adversarial unit-test inputs, executes them, and uses the outcomes to select robust programs for supervised fine-tuning. Execution-derived preferences optimize the adversary with Kahneman–Tversky Optimization, without ground-truth code or an external reward model."
methodZh: "模型先生成候选程序，再生成对抗单元测试输入并实际执行；通过结果筛选稳健程序做监督微调，同时用执行产生的偏好通过 Kahneman–Tversky Optimization 优化对抗方，全程不需要真值代码或外部奖励模型。"
resultsEn: "On CodeContests, MBPP, and LiveCodeBench, the abstract reports consistent improvements over strong solver–verifier baselines, including three to seven percentage-point absolute gains in pass@1 and larger gains out of distribution."
resultsZh: "在 CodeContests、MBPP 与 LiveCodeBench 上，摘要报告 ACE 持续优于强 solver–verifier 基线，pass@1 绝对提升 3–7 个百分点，并在分布外基准上获得更大增益。"
limitationsEn: "Execution catches observable program failures but may miss semantic errors that weak tests do not trigger. Adversarial test generation can also overfit benchmark interfaces or prioritize crashes over deeper specification violations."
limitationsZh: "执行能发现可观察的程序失败，却可能漏掉弱测试未触发的语义错误；对抗测试生成也可能过拟合基准接口，或偏向寻找崩溃而非更深层的规格违背。"
whyReadEn: "ACE is a strong example of turning verification from passive judging into an active opponent that keeps the self-improvement curriculum difficult."
whyReadZh: "ACE 展示了如何把验证从被动裁判变成主动对手，使自我改进课程持续保持难度。"
feedbackSource: "Execution outcomes on adversarially generated unit-test inputs"
updatedObject: "The code-generation policy and the adversarial test-generation policy"
updateMechanism: "Supervised fine-tuning of robust programs plus execution-preference optimization of tests"
successSignal: "Higher pass@1 and adversarial tests that expose new execution-level failures"
loopSummaryEn: "Generate programs → invent failure-seeking tests → execute candidates → retain robust solutions → update both solver and adversary → repeat."
loopSummaryZh: "生成程序 → 构造寻找失败的测试 → 执行候选程序 → 保留稳健解 → 同时更新求解器与对抗方 → 重复。"
---

Evidence note: the OpenReview workshop paper and current arXiv abstract were checked. The workshop title is preserved exactly even though the current arXiv title inserts “via.”

证据说明：已核对 OpenReview 研讨会论文与当前 arXiv 摘要。本站严格保留研讨会英文标题；当前 arXiv 标题额外加入了“via”。
