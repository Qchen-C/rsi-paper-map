---
title: "Presenting a Paper is an Art: Self-Improvement Aesthetic Agents for Academic Presentations"
titleZh: "论文展示是一门艺术：面向学术演示的自我改进美学智能体"
authors: ["Chengzhi Liu", "Yuzhe Yang", "Kaiwen Zhou", "Zhen Zhang", "Yue Fan", "Yannan Xie", "Peng Qi", "Xin Eric Wang"]
presentation: "spotlight"
year: 2026
sourceIndex: 14
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=d40v7Qcpi4"},{"kind":"arxiv","url":"https://arxiv.org/abs/2510.05571"}]
themes: ["agents-tools-code-evolution", "verification-evaluation-safety", "embodied-multimodal-intelligence"]
keywords: ["presentation generation", "aesthetic agents", "multimodal evaluation", "reinforcement learning", "self-improvement"]
difficulty: "intermediate"
prerequisites: ["multimodal models", "reinforcement learning", "presentation design", "agentic workflows"]
readingPaths: []
relatedPapers: ["agent0", "execution-grounded-ai-research", "lang-pinn"]
readNext: ["agent0"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2510.05571"]
summaryEn: "EvoPresent is a self-improving agent framework for turning academic papers into coherent, visually appealing presentations delivered by virtual characters. Its central evaluator, PresAesth, scores aesthetics, identifies defects, and provides comparative feedback for revision."
summaryZh: "EvoPresent 是一个把学术论文转成连贯、视觉美观并可由虚拟角色讲解的自我改进智能体框架。核心评估器 PresAesth 负责美学评分、缺陷定位与比较反馈，以驱动修订。"
problemEn: "Automated presentation systems often optimize content extraction without reliable signals for storytelling, layout quality, or delivery, so repeated self-correction can preserve or amplify unattractive designs."
problemZh: "自动演示系统常只优化内容抽取，却缺少对叙事、版式美感和讲解效果的可靠信号，因此反复自我修订可能保留甚至放大糟糕设计。"
methodEn: "The framework combines narrative construction, aesthetic-aware slide design, and virtual-character delivery. PresAesth is trained with multi-task reinforcement learning to support scalar scoring, defect adjustment, and pairwise comparison, then feeds these judgments back to the generation agents."
methodZh: "框架结合叙事构建、审美感知的幻灯片设计与虚拟角色讲解。PresAesth 通过多任务强化学习同时学习评分、缺陷调整和成对比较，并把判断反馈给生成智能体。"
resultsEn: "The authors introduce EvoPresent Benchmark with resources from 650 top-tier AI papers and 2,000 slide pairs. Their findings emphasize that high-quality feedback is necessary for self-improvement, expose a visual-design versus content-construction trade-off, and report stronger generalization from multi-task RL."
resultsZh: "作者构建了 EvoPresent Benchmark，包含 650 篇顶会 AI 论文的多模态资源与 2,000 对不同美学水平的幻灯片。结果强调高质量反馈是自我改进的必要条件，揭示视觉设计与内容构建的权衡，并报告多任务 RL 带来更强泛化。"
limitationsEn: "Aesthetic quality is subjective and culturally dependent, while benchmark resources are concentrated in top-tier AI presentations. A strong visual evaluator may still reward polish over scientific accuracy or accessibility."
limitationsZh: "审美具有主观性与文化依赖性，基准资源也集中在顶会 AI 演示；强视觉评估器仍可能偏爱表面精致，而忽略科学准确性或可访问性。"
whyReadEn: "It shows that a self-improvement loop is only as useful as its evaluator, especially for open-ended qualities that cannot be checked by exact execution."
whyReadZh: "它说明自我改进闭环的上限取决于评估器，尤其适用于无法通过精确执行验证的开放式质量目标。"
feedbackSource: "PresAesth aesthetic scores, defect diagnoses, and pairwise preferences"
updatedObject: "The presentation narrative, slide design, and delivery plan"
updateMechanism: "Agent revisions guided by multi-task aesthetic evaluation"
successSignal: "Higher presentation-generation quality and stronger aesthetic-awareness scores"
loopSummaryEn: "Generate a presentation → score aesthetics and detect defects → compare alternatives → revise content and design → render and evaluate again."
loopSummaryZh: "生成演示 → 评估美感并定位缺陷 → 比较候选方案 → 修订内容与设计 → 再次渲染评估。"
---

Evidence note: the arXiv abstract was checked. Benchmark sizes and findings are reported as stated by the authors.

证据说明：已核对 arXiv 摘要。基准规模与研究发现均按作者报告表述。
