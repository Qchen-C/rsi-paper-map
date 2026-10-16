---
title: "OMEGA: Optimizing Machine learning by Evaluating Generated Algorithms"
titleZh: "OMEGA：通过评估生成算法来优化机器学习"
authors: ["Jeremy Nixon", "Annika Singh"]
presentation: "poster"
year: 2026
sourceIndex: 29
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=4TUzVEzVdu"},{"kind":"arxiv","url":"https://arxiv.org/abs/2604.26211"}]
themes: ["scientific-discovery-applications", "agents-tools-code-evolution", "verification-evaluation-safety"]
keywords: ["automated AI research", "algorithm generation", "executable evaluation", "scikit-learn", "infinity-bench"]
difficulty: "intermediate"
prerequisites: ["machine-learning classifiers", "scikit-learn", "code generation", "benchmark evaluation"]
readingPaths: []
relatedPapers: ["execution-grounded-ai-research", "causalevolve", "scaling-law-discovery"]
readNext: ["execution-grounded-ai-research", "causalevolve"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2604.26211", "https://openreview.net/pdf?id=4TUzVEzVdu"]
summaryEn: "OMEGA is an end-to-end pipeline that starts from an ML algorithm idea, turns it into scikit-learn-compatible executable code, repairs execution failures, and evaluates the resulting classifier on a standardized dataset suite."
summaryZh: "OMEGA 是一条端到端流程：从机器学习算法想法出发，生成兼容 scikit-learn 的可执行代码，修复执行失败，再在标准化数据集套件上评估分类器。"
problemEn: "LLMs can propose algorithms and write code, but automated AI research also needs a reliable bridge from vague ideas to runnable implementations and comparable experimental evidence."
problemZh: "LLM 可以提出算法和编写代码，但自动化 AI 研究还需要一条可靠链路，把模糊想法转成可运行实现和可比较的实验结果。"
methodEn: "Structured meta-prompts generate or refine algorithm hypotheses, code generation implements them in a scikit-learn-like interface, a self-healing stage repairs execution problems, and infinity-bench evaluates candidates across 20 classification datasets."
methodZh: "结构化元提示生成或改进算法假设，代码生成把它实现为类似 scikit-learn 的接口，自修复阶段处理执行问题，最后由 infinity-bench 在 20 个分类数据集上评估候选。"
resultsEn: "The abstract reports several generated classifiers that outperform scikit-learn baselines across the 20-dataset benchmark suite. The paper also compares the coding ability of four popular language models."
resultsZh: "摘要报告多个生成分类器在 20 数据集基准套件上超过 scikit-learn 基线；论文还比较了四种常用语言模型的编程能力。"
limitationsEn: "The abstract does not establish broad algorithmic novelty, statistical significance, or transfer beyond tabular classification. Benchmark-driven search can overfit the selected datasets and baselines."
limitationsZh: "摘要尚不能证明广泛的算法新颖性、统计显著性或对表格分类以外任务的迁移；基准驱动搜索也可能过拟合所选数据集与基线。"
whyReadEn: "OMEGA is a concrete example of closing the idea–code–evaluation loop, the minimum viable structure for automated ML research."
whyReadZh: "OMEGA 是闭合“想法—代码—评估”循环的具体案例，也是自动化机器学习研究的最小可行结构。"
feedbackSource: "Execution errors and classifier performance on infinity-bench datasets"
updatedObject: "Generated algorithm ideas, prompts, and executable classifier implementations"
updateMechanism: "Meta-prompt refinement, code self-healing, and benchmark-based candidate selection"
successSignal: "Executable classifiers that outperform chosen scikit-learn baselines across datasets"
loopSummaryEn: "Generate an algorithm idea → implement it → repair execution failures → benchmark it → use results to refine the next candidate."
loopSummaryZh: "生成算法想法 → 编写实现 → 修复执行失败 → 跑基准 → 用结果改进下一候选。"
---

Evidence note: the arXiv abstract and public workshop paper were checked. Claims of novelty are reported cautiously because the abstract mainly establishes benchmark performance.

证据说明：已核对 arXiv 摘要与公开工作坊论文。由于摘要主要证明基准表现，本站对“新颖性”声明保持谨慎。
