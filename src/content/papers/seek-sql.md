---
title: "Contrastive Self-Refinement for Low-Cost Adaptation in Real-World Text-to-SQL"
titleZh: "面向真实 Text-to-SQL 低成本适配的对比式自我修正"
authors: ["Yuyang Wu", "Xin Shi", "Wei Long", "Cam-Tu Nguyen", "Xiaoliang Wang"]
presentation: "poster"
year: 2026
sourceIndex: 39
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=tgnbgt3Ctr"}]
themes: ["agents-tools-code-evolution", "memory-continual-adaptation", "verification-evaluation-safety"]
keywords: ["SEEK-SQL", "text-to-SQL", "contrastive self-refinement", "schema adaptation", "guideline memory"]
difficulty: "intermediate"
prerequisites: ["SQL", "text-to-SQL", "multi-agent systems", "execution feedback"]
readingPaths: []
relatedPapers: ["verltool", "simplemem", "contextual-drag"]
readNext: ["verltool", "simplemem"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=tgnbgt3Ctr"]
summaryEn: "SEEK-SQL is a training-free multi-agent Text-to-SQL system that contrasts failed and successful execution trajectories, distills their difference into reusable natural-language schema guidelines, and retrieves those guidelines for later queries."
summaryZh: "SEEK-SQL 是无需训练的多智能体 Text-to-SQL 系统，通过对比失败与成功执行轨迹，把差异蒸馏成可复用的自然语言模式规则，并在后续查询中检索使用。"
problemEn: "Industrial schemas and business logic change frequently, making repeated fine-tuning expensive. Raw databases also omit domain semantics, while ordinary in-context examples do not reliably resolve ambiguous names and rules."
problemZh: "工业数据库模式与业务逻辑频繁变化，反复微调成本很高；原始数据库还缺少领域语义，普通上下文示例也无法可靠解决歧义名称与规则。"
methodEn: "Contrastive Self-Refinement performs backward diagnosis from syntax and execution failures, compares negative and repaired trajectories, and writes the learned distinction into a persistent guideline store. A Sniffer agent retrieves external knowledge for ambiguous queries."
methodZh: "对比式自我修正从语法与执行失败做反向诊断，对比错误轨迹与修复轨迹，并把学到的差异写入持久规则库；Sniffer 智能体为歧义查询检索外部知识。"
resultsEn: "On Spider and BIRD, the paper reports state-of-the-art performance among in-context-learning methods and lower token consumption than other multi-agent frameworks."
resultsZh: "在 Spider 与 BIRD 上，论文报告其在上下文学习方法中达到领先性能，同时比其他多智能体框架消耗更少 token。"
limitationsEn: "Execution success can hide semantically wrong queries, and automatically written guidelines may accumulate stale schema assumptions. External knowledge retrieval adds trust and maintenance dependencies."
limitationsZh: "执行成功可能掩盖语义错误查询，自动生成规则也可能积累过时模式假设；外部知识检索还引入信任与维护依赖。"
whyReadEn: "It turns one-off database failures into durable, inspectable adaptation without changing model weights."
whyReadZh: "它把一次性数据库失败转成持久、可检查的适配知识，而无需修改模型权重。"
feedbackSource: "SQL syntax checks, execution outcomes, repaired trajectories, and retrieved domain knowledge"
updatedObject: "A persistent store of schema and business-logic guidelines"
updateMechanism: "Backward diagnosis followed by contrastive distillation and dynamic retrieval"
successSignal: "Higher execution accuracy with fewer tokens under changing schemas"
loopSummaryEn: "Generate SQL → execute and diagnose → repair the query → contrast failure with success → store a reusable rule → retrieve it next time."
loopSummaryZh: "生成 SQL → 执行并诊断 → 修复查询 → 对比失败与成功 → 存储可复用规则 → 下次检索使用。"
---

Evidence note: the public paper was checked; no separate arXiv source was used for this card.

证据说明：已核对公开论文；本卡片未使用独立 arXiv 来源。
