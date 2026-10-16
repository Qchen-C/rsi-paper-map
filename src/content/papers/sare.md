---
title: "Self-Adapting Agents for Automating Research Coding Workflows"
titleZh: "用于自动化科研编码工作流的自适应智能体"
authors: ["Balaji Dinesh Gangireddi", "Aniketh Garikaparthi", "Manasi Patwardhan", "Arman Cohan"]
presentation: "poster"
year: 2026
sourceIndex: 98
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=ihcRmUkXHF"}]
themes: ["agents-tools-code-evolution", "memory-continual-adaptation", "scientific-discovery-applications"]
keywords: ["research coding", "prompt optimization", "cross-repository learning", "procedural memory", "reflection"]
difficulty: "intermediate"
prerequisites: ["coding agents", "research reproducibility", "prompt optimization", "agent memory"]
readingPaths: []
relatedPapers: ["ace-context-engineering", "execution-grounded-ai-research", "evaluating-agents-md"]
readNext: ["execution-grounded-ai-research", "ace-context-engineering"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=ihcRmUkXHF"]
summaryEn: "SARE learns recurring lessons from execution trajectories across research repositories and applies targeted edits to its system prompt, task template, and cumulative cheatsheet. It preserves validated instructions while adding reusable strategies."
summaryZh: "SARE 从多个科研仓库的执行轨迹中学习重复出现的经验，并定向修改系统提示、任务模板和累积备忘单；它保留已验证指令，同时加入可复用策略。"
problemEn: "Research-code reproduction combines undocumented conventions, brittle environments, delayed feedback, and heterogeneous outputs, while local prompt rewrites forget lessons that recur across repositories."
problemZh: "科研代码复现同时面对未记录约定、脆弱环境、延迟反馈和异构输出，而局部提示重写会忘掉跨仓库反复出现的经验。"
methodEn: "A Global Training Context aggregates trajectories from multiple repositories, detects common failure modes, distills heuristics, and incrementally edits configurable prompt fields instead of replacing the whole prompt."
methodZh: "全局训练上下文汇总多个仓库的轨迹，识别共同失败模式，提炼启发式经验，并增量修改可配置提示字段，而非整体重写。"
resultsEn: "SARE reports gains of 23.6% on SUPER, 3.5% on ResearchCodeBench, and 7.1% on ScienceAgent-Bench over the referenced prior best human or prompt-optimization baselines."
resultsZh: "相对文中引用的既有人类或提示优化最佳基线，SARE 报告在 SUPER、ResearchCodeBench 和 ScienceAgent-Bench 上分别提升 23.6%、3.5% 和 7.1%。"
limitationsEn: "Cross-repository heuristics can encode benchmark-specific shortcuts or stale environment assumptions. Prompt growth consumes context, and reported gains depend on the chosen agent and evaluation harnesses."
limitationsZh: "跨仓库启发式经验可能编码基准捷径或过时环境假设；提示持续增长会占用上下文，报告收益也依赖具体智能体与评测框架。"
whyReadEn: "It closely matches a real researcher's desired learning loop: keep a durable lab notebook of coding lessons, but update only the parts justified by repeated evidence."
whyReadZh: "它很贴近研究者真正需要的学习闭环：保留持久的科研编码经验本，同时只更新被重复证据支持的部分。"
feedbackSource: "Execution trajectories, failures, and metrics collected across research repositories"
updatedObject: "System prompt, task-prompt template, and cumulative procedural cheatsheet"
updateMechanism: "Reflect on global trajectories and apply targeted, knowledge-preserving edits"
successSignal: "Higher reproducibility success across unseen or heterogeneous research workflows"
loopSummaryEn: "Run research code → collect trajectories → find recurring failures → distill heuristics → edit prompts and cheatsheet → retry."
loopSummaryZh: "运行科研代码 → 收集轨迹 → 发现重复失败 → 提炼启发式经验 → 修改提示与备忘单 → 重试。"
---

Evidence note: the accepted workshop paper was checked.

证据说明：已核对接收的工作坊论文。
