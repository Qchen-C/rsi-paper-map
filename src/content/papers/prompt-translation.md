---
title: "A Framework for Prompt Optimization and Translation Across Foundation Models"
titleZh: "跨基础模型的提示优化与迁移框架"
authors: ["Abhinay Shankaranarayanan Venkataraman", "Athanasios N. Nikolakopoulos", "Vishwanath Kumaraswamy", "Tao Zhang", "Sarath Chander", "Rohit Saboo", "Suleiman A. Khan"]
presentation: "poster"
year: 2026
sourceIndex: 36
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=gOTCn5uZeE"},{"kind":"project","url":"https://www.amazon.science/publications/a-framework-for-prompt-optimization-and-translation-across-foundation-models"}]
themes: ["test-time-learning-inference-scaling", "agents-tools-code-evolution", "verification-evaluation-safety"]
keywords: ["prompt translation", "foundation-model migration", "structured output", "bounded regression risk", "budgeted search"]
difficulty: "intermediate"
prerequisites: ["prompt engineering", "structured outputs", "foundation-model APIs", "black-box optimization"]
readingPaths: []
relatedPapers: ["automedprompt-textual-gradients", "contextual-drag", "adaptive-meta-curriculum"]
readNext: ["automedprompt-textual-gradients", "contextual-drag"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=gOTCn5uZeE", "https://www.amazon.science/publications/a-framework-for-prompt-optimization-and-translation-across-foundation-models"]
summaryEn: "The framework treats a deployed prompt as a portable program with a transferable semantic contract and model-specific structural and interface layers. When migrating models, it searches only the non-transferable parts under hard validity constraints and a regression-risk penalty."
summaryZh: "该框架把部署提示视为可移植程序，区分可迁移的语义契约与模型专用的结构和接口层；迁移模型时，只在硬性有效性约束与回归风险惩罚下搜索不可迁移部分。"
problemEn: "Foundation-model upgrades can break chat formatting, schemas, multimodal grounding, and output reliability even when task intent is unchanged. Manual prompt re-engineering is slow and hard to audit."
problemZh: "即使任务意图不变，基础模型升级也可能破坏聊天格式、输出模式、多模态 grounding 与可靠性；人工重写提示缓慢且难审计。"
methodEn: "Prompts are decomposed into semantic, structural, and interface components. A governed hierarchical search optimizes system-level and template-level factors, maximizing task utility subject to schema, parseability, policy, and stochastic-stability constraints."
methodZh: "提示被拆成语义、结构与接口组件；受治理的分层搜索优化系统级与模板级因素，在模式有效、可解析、策略合规与随机稳定约束下最大化任务效用。"
resultsEn: "On 128,000 labeled text and multimodal instances across multiple model families, automated translation matches expert prompts while reducing manual iteration by 97%. Semantic directives transfer well; schema and provider formatting need targeted adaptation."
resultsZh: "在跨多个模型家族的 12.8 万个文本与多模态标注实例上，自动迁移达到专家提示水平，同时把人工迭代减少 97%。语义指令较易迁移，而模式约束与提供商格式需要定向适配。"
limitationsEn: "The method still requires labeled evaluation data and explicit contracts. Hidden provider changes, open-ended outputs, and unmeasured safety behaviors may evade the feasibility checks."
limitationsZh: "该方法仍需标注评测数据与显式契约；提供商隐藏变化、开放式输出与未测量安全行为可能绕过可行性检查。"
whyReadEn: "It frames prompt maintenance as governed program translation rather than ad hoc wording changes."
whyReadZh: "它把提示维护定义为受治理的程序迁移，而不是临时改写措辞。"
feedbackSource: "Task utility, schema validity, parseability, policy compliance, and output stability"
updatedObject: "The target model's system and template prompt layers"
updateMechanism: "Budgeted hierarchical search over non-transferable prompt components"
successSignal: "Preserved semantic and interface contracts with bounded regression risk"
loopSummaryEn: "Decompose the source prompt → port semantic intent → search target-specific structure → enforce contracts → test stability → deploy or revise."
loopSummaryZh: "拆解源提示 → 迁移语义意图 → 搜索目标专用结构 → 强制契约 → 测试稳定性 → 部署或修订。"
---

Evidence note: the public paper and Amazon Science publication page were checked.

证据说明：已核对公开论文与 Amazon Science 发布页。
