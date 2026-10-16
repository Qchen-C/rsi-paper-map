---
title: "Language-Guided Expertise Evolution for Protein Optimization"
titleZh: "面向蛋白质优化的语言引导专家知识演化"
authors: ["Xingyue Liu", "Zijie Xing", "Runze Wang", "Luoming Hu", "Yanming Shen"]
presentation: "poster"
year: 2026
sourceIndex: 75
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=NeNWeyfUJj"},{"kind":"project","url":"https://recynie.github.io/publication/language-guided-protein-optimization"}]
themes: ["scientific-discovery-applications", "memory-continual-adaptation", "agents-tools-code-evolution"]
keywords: ["protein optimization", "expertise pool", "language feedback", "mutation tree", "multi-agent evolution"]
difficulty: "advanced"
prerequisites: ["protein fitness", "directed evolution", "LLM agents", "scientific optimization"]
readingPaths: []
relatedPapers: ["discovery-to-application-loop", "learning-to-evolve", "causalevolve"]
readNext: ["learning-to-evolve", "discovery-to-application-loop"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=NeNWeyfUJj", "https://recynie.github.io/publication/language-guided-protein-optimization"]
summaryEn: "Instead of updating model weights, this framework evolves an external pool of modular protein-design expertise. Language critiques provide dense directions, and a mutation tree records how reusable expertise blocks branch and improve."
summaryZh: "该框架不更新模型权重，而是演化外部模块化蛋白设计知识池。语言批评提供稠密方向，突变树记录可复用知识块如何分支与改进。"
problemEn: "Protein fitness feedback is sparse and expensive, while RL parameter updates consume substantial compute and hide scientific lessons inside weights."
problemZh: "蛋白适应度反馈稀疏且昂贵，RL 参数更新计算开销大，还把科学经验隐藏在权重中。"
methodEn: "A generator proposes mutations conditioned on sampled expertise, critics translate outcomes into language feedback, and a curator refines or branches expertise blocks in a discrete mutation tree for reuse."
methodZh: "生成器依据抽取的知识块提出突变，批评器把结果转成语言反馈，筛选器在离散突变树中修订或分支知识块以供复用。"
resultsEn: "On protein-stability optimization, expertise evolution converges faster and finds higher-quality solutions than RL baselines with lower compute. The author poster reports 52.3% Pass@1 and stronger sample efficiency."
resultsZh: "在蛋白稳定性优化上，知识演化比 RL 基线收敛更快、解质量更高且计算更少；作者海报报告 Pass@1 为 52.3%，样本效率也更强。"
limitationsEn: "Fitness predictors and language critics can be wrong, and computational stability is not equivalent to laboratory function or safety. Reported evidence needs wet-lab validation before biological use."
limitationsZh: "适应度预测器与语言批评都可能出错，计算稳定性也不等于实验室功能或安全；用于生物实践前仍需湿实验验证。"
whyReadEn: "It makes scientific adaptation explicit and interpretable: the object that improves is a reusable body of expertise rather than a hidden parameter vector."
whyReadZh: "它让科学适应显式且可解释：被改进的是可复用知识体系，而非隐藏参数向量。"
feedbackSource: "Protein fitness evaluations translated into fine-grained language critiques"
updatedObject: "The external block-based expertise pool and its mutation tree"
updateMechanism: "Multi-agent generation, critique, curation, and branching of expertise blocks"
successSignal: "Higher-fitness protein candidates with fewer evaluation rollouts"
loopSummaryEn: "Sample expertise → propose mutations → evaluate fitness → critique in language → refine or branch the expertise pool."
loopSummaryZh: "抽取知识 → 提出突变 → 评估适应度 → 用语言批评 → 修订或分支知识池。"
---

Evidence note: the workshop paper and first-author project page were checked; poster-only figures are identified as such.

证据说明：已核对工作坊论文与第一作者项目页；仅来自海报的数字已明确标注。
