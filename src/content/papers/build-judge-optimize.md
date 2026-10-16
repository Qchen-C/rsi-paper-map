---
title: "Build, Judge, Optimize: A Blueprint for Continuous Improvement of Multi-Agent Consumer Assistants"
titleZh: "构建、评判、优化：多智能体消费助手持续改进蓝图"
authors: ["Alejandro Breen Herrera", "Aayush Sheth", "Steven G. Xu", "Zhucheng Zhan", "Charles Wright", "Marcus Yearwood", "Hongtai Wei", "Sudeep Das", "Danny Nightingale", "Meg Watson", "Charles Pollnow V"]
presentation: "short"
year: 2026
sourceIndex: 109
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=FySoHBWmt9"},{"kind":"arxiv","url":"https://arxiv.org/abs/2603.03565"}]
themes: ["agents-tools-code-evolution", "verification-evaluation-safety"]
keywords: ["multi-agent assistants", "LLM judge", "prompt optimization", "multi-turn evaluation", "consumer AI"]
difficulty: "intermediate"
prerequisites: ["multi-agent systems", "LLM-as-a-judge", "prompt optimization", "multi-turn dialogue"]
readingPaths: []
relatedPapers: ["mappa", "self-evolving-rubrics", "feedback-descent"]
readNext: ["mappa", "self-evolving-rubrics"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=FySoHBWmt9", "https://arxiv.org/abs/2603.03565"]
summaryEn: "This production-oriented blueprint decomposes multi-turn shopping quality into a structured rubric, calibrates an LLM judge to human labels, and uses that signal to optimize either individual sub-agents or the whole multi-agent trajectory."
summaryZh: "这套面向生产的蓝图把多轮购物质量分解为结构化量表，将 LLM 裁判校准到人工标注，再用该信号优化单个子智能体或整条多智能体轨迹。"
problemEn: "In coupled consumer assistants, a local node can look correct while the full conversation fails on preferences, inventory, budget, coordination, or safety."
problemZh: "在耦合的消费助手中，局部节点可能看似正确，但完整对话仍会在偏好、库存、预算、协作或安全上失败。"
methodEn: "A multi-faceted rubric scores observable trace outcomes. Sub-agent GEPA optimizes node prompts against local checks, while MAMuT GEPA jointly optimizes prompt bundles through multi-turn simulation and trajectory-level scores."
methodZh: "多维量表对可观察轨迹结果评分；子智能体 GEPA 按局部检查优化节点提示，MAMuT GEPA 则通过多轮模拟与轨迹级评分联合优化提示组合。"
resultsEn: "The paper presents a production-scale grocery assistant case study and releases rubric templates and evaluation-design guidance. Its public abstract emphasizes the blueprint and complementary strategies rather than numerical optimization gains."
resultsZh: "论文以生产规模的杂货购物助手为案例，并发布量表模板与评测设计指南；公开摘要重点是蓝图与互补策略，而非具体的优化增益数字。"
limitationsEn: "The approach depends on judge calibration transferring beyond labeled traces and simulated users predicting live behavior. Public evidence is mainly a domain-specific blueprint rather than broad controlled validation."
limitationsZh: "方法依赖裁判校准能迁移到标注轨迹之外，也依赖模拟用户能预测真实行为；公开证据主要是领域特定蓝图，而非广泛受控验证。"
whyReadEn: "It shows how evaluation design becomes the foundation of improvement in a tightly coupled production agent system, where local and global objectives differ."
whyReadZh: "它展示了在局部目标与全局目标不同的强耦合生产智能体系统中，评测设计如何成为持续改进的基础。"
feedbackSource: "Human-calibrated, rubric-based LLM judgments of multi-turn interaction traces"
updatedObject: "Individual agent prompts or a jointly optimized multi-agent prompt bundle"
updateMechanism: "GEPA prompt optimization using local micro-rubrics or trajectory-level simulation"
successSignal: "Better end-to-end shopping quality across execution, personalization, conversation, and safety"
loopSummaryEn: "Build the agent system → judge complete traces → localize or aggregate failures → optimize prompts → simulate and judge again."
loopSummaryZh: "构建智能体系统 → 评判完整轨迹 → 定位或汇总失败 → 优化提示 → 再模拟与评判。"
---

Evidence note: the workshop paper and current arXiv abstract were checked. The card avoids claiming numerical system gains not stated in the public abstract.

证据说明：已核对工作坊论文与当前 arXiv 摘要；卡片不声称公开摘要未给出的具体系统增益数字。
