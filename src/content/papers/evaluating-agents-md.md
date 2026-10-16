---
title: "Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?"
titleZh: "评估 AGENTS.md：仓库级上下文文件真的能帮助编程智能体吗？"
authors: ["Thibaud Gloaguen", "Niels Mündler", "Mark Müller", "Veselin Raychev", "Martin Vechev"]
presentation: "poster"
year: 2026
sourceIndex: 49
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=0DyJeJ3iia"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.11988"}]
themes: ["verification-evaluation-safety", "agents-tools-code-evolution"]
keywords: ["coding agents", "AGENTS.md", "repository context", "SWE-bench", "agent evaluation"]
difficulty: "entry"
prerequisites: ["coding agents", "software repositories", "SWE-bench", "controlled experiments"]
readingPaths: []
relatedPapers: ["ace-code-evolution", "anchored-self-play-code-repair", "simple-code-evolution-baselines"]
readNext: ["anchored-self-play-code-repair", "simple-code-evolution-baselines"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2602.11988"]
summaryEn: "This paper tests a common coding-agent practice instead of assuming it helps: adding repository-level context files such as AGENTS.md. Across controlled tasks, more instructions often make agents explore and spend more without improving completion."
summaryZh: "这篇论文没有默认常见实践有效，而是实测给编程智能体添加 AGENTS.md 等仓库级上下文文件的效果。受控任务显示，更多说明常让智能体探索更多、花费更高，却未提升完成率。"
problemEn: "Agent vendors recommend repository guidance files, but their real task-level benefit had not been rigorously separated from instruction-following behavior and added inference cost."
problemZh: "智能体厂商普遍推荐仓库说明文件，但此前缺少严格研究，将真实任务收益与“只是更听话”以及额外推理成本区分开。"
methodEn: "The study compares no context, LLM-generated files, and developer-committed files using SWE-bench tasks and a new collection of real repository issues, then analyzes success, cost, file traversal, testing, and instruction compliance."
methodZh: "研究在 SWE-bench 任务与一组真实仓库问题上，对比无上下文、模型生成文件和开发者提交文件，并分析成功率、成本、文件遍历、测试行为与指令遵循。"
resultsEn: "Across several agents and models, context files tend to reduce success while increasing inference cost by more than 20%. They induce broader exploration and more testing, showing that agents obey the instructions even when those instructions do not help."
resultsZh: "在多种智能体和模型上，上下文文件总体倾向于降低成功率，并使推理成本增加超过 20%；它们促使智能体扩大探索并运行更多测试，说明指令被遵守却未必有帮助。"
limitationsEn: "The conclusion is about the evaluated files, repositories, and agents, not every concise hand-written instruction. Tooling and model behavior evolve quickly, and benefits may differ for unusual build systems or safety-critical rules."
limitationsZh: "结论只适用于被测文件、仓库与智能体，不能否定所有精炼的人工指令；工具与模型演化很快，特殊构建系统或安全关键规则也可能有不同收益。"
whyReadEn: "It is a valuable negative result for agent design: context should earn its token and behavioral cost, and minimal requirements may beat comprehensive prose."
whyReadZh: "这是智能体设计中很有价值的负面结果：上下文必须证明其 token 与行为成本合理，最小必要要求可能胜过面面俱到的长文。"
feedbackSource: "Task resolution rate, inference cost, and behavioral traces from coding agents"
updatedObject: "Repository-level guidance and context-file design practice"
updateMechanism: "Controlled evaluation of guidance variants followed by removal of unnecessary requirements"
successSignal: "Higher task success without avoidable exploration or inference cost"
loopSummaryEn: "Write repository guidance → run agents on matched tasks → inspect success and traces → remove unhelpful requirements → reevaluate."
loopSummaryZh: "编写仓库说明 → 在匹配任务上运行智能体 → 检查成功率与轨迹 → 删除无益要求 → 再评估。"
---

Evidence note: the workshop entry and current arXiv abstract were checked. This is an evaluation paper, so its loop describes how evidence should improve context-file design rather than a self-modifying model.

证据说明：已核对工作坊条目与当前 arXiv 摘要。本文属于评估研究，因此闭环描述的是证据如何改进上下文文件设计，而非模型自修改。
