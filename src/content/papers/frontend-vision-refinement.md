---
title: "Vision-Guided Iterative Refinement for Frontend Code Generation"
titleZh: "面向前端代码生成的视觉引导迭代修正"
authors: ["Hannah Sansford", "Derek H. C. Law", "Wei Liu", "Abhishek Tripathi", "Niresh Agarwal", "Gerrit J. J. van den Burg"]
presentation: "poster"
year: 2026
sourceIndex: 79
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=gF6jmAsbpZ"},{"kind":"arxiv","url":"https://arxiv.org/abs/2604.05839"}]
themes: ["agents-tools-code-evolution", "embodied-multimodal-intelligence", "test-time-learning-inference-scaling"]
keywords: ["frontend code", "visual critic", "iterative refinement", "rendering", "LoRA distillation"]
difficulty: "intermediate"
prerequisites: ["frontend development", "vision-language models", "code generation", "parameter-efficient fine-tuning"]
readingPaths: []
relatedPapers: ["chartir", "autoharness", "ace-code-evolution"]
readNext: ["chartir", "autoharness"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=gF6jmAsbpZ", "https://arxiv.org/abs/2604.05839"]
summaryEn: "A vision-language critic inspects rendered webpages, turns visual defects into structured feedback, and guides a code model through repeated revisions. Successful loop outputs are then used to test whether the behavior can be distilled with LoRA."
summaryZh: "视觉语言批评器检查渲染网页，把视觉缺陷转成结构化反馈，并指导代码模型反复修改；随后用闭环中的最佳结果测试能否通过 LoRA 蒸馏这种行为。"
problemEn: "Frontend quality depends on rendered layout and aesthetics that source-code analysis misses, while human visual review is expensive and difficult to scale."
problemZh: "前端质量取决于源代码分析难以捕捉的渲染布局与美观，而人工视觉审查昂贵且难扩展。"
methodEn: "The pipeline generates code, renders it, asks a VLM for visual critique, translates that critique into code-level actions, and retains the best result across three cycles. LoRA learns from successful refined solutions."
methodZh: "流程生成代码并渲染，由 VLM 给出视觉批评，再把批评转成代码修改动作，三轮中保留最佳结果；LoRA 从成功修正结果中学习。"
resultsEn: "On real WebDev Arena requests, three refinement cycles improve performance by up to 17.8%. LoRA internalizes about 25% of the best loop gains without significantly increasing output tokens."
resultsZh: "在真实 WebDev Arena 请求上，三轮修正最高提升 17.8%；LoRA 在不显著增加输出 token 的情况下内化了最佳闭环收益的大约 25%。"
limitationsEn: "VLM taste and scoring can be subjective, iteration is costly, and visual quality does not guarantee accessibility, responsiveness, security, or maintainability. Distillation retains only a fraction of loop gains."
limitationsZh: "VLM 审美与评分具有主观性，迭代成本较高，视觉质量也不保证无障碍、响应式、安全或可维护；蒸馏只保留部分闭环收益。"
whyReadEn: "It demonstrates the full artifact loop—code, render, critique, edit—and measures how much of iterative improvement can become a one-pass capability."
whyReadZh: "它完整展示“代码—渲染—批评—修改”产物闭环，并测量多少迭代收益能转化为单次生成能力。"
feedbackSource: "Structured VLM critique of rendered webpages and evaluator preference scores"
updatedObject: "Frontend source code and, after distillation, the code-generation policy"
updateMechanism: "Critic-in-the-loop code revision followed by LoRA on best solutions"
successSignal: "Higher-quality rendered interfaces and partial single-pass internalization"
loopSummaryEn: "Generate code → render the page → critique visually → translate defects into edits → keep the best revision."
loopSummaryZh: "生成代码 → 渲染页面 → 视觉批评 → 把缺陷转成修改 → 保留最佳版本。"
---

Evidence note: the accepted workshop paper and current arXiv abstract were checked.

证据说明：已核对接收的工作坊论文与当前 arXiv 摘要。
