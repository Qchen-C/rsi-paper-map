---
title: "Can Language Models Discover Scaling Laws?"
titleZh: "语言模型能否发现缩放定律？"
authors: ["Haowei Lin", "Haotian Ye", "Wenzheng Feng", "Quzhe Huang", "Yujun Li", "Hubert Lim", "Zhengrui Li", "Xiangyu Wang", "Jianzhu Ma", "Yitao Liang", "James Zou"]
presentation: "spotlight"
year: 2026
sourceIndex: 9
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=Nj6VGY4dej"},{"kind":"arxiv","url":"https://arxiv.org/abs/2507.21184"},{"kind":"code","url":"https://github.com/linhaowei1/SLD"},{"kind":"project","url":"https://linhaowei1.github.io/SLD/"}]
themes: ["scientific-discovery-applications", "foundations-recursive-computation"]
keywords: ["scaling laws", "SLDAgent", "scientific discovery", "evolutionary search", "extrapolation"]
difficulty: "advanced"
prerequisites: ["scaling laws", "regression and extrapolation", "evolutionary algorithms", "LLM agents"]
readingPaths: [{"id":"entry","order":9},{"id":"agent-evolution","order":4}]
relatedPapers: ["execution-grounded-ai-research", "posttrainbench"]
readNext: ["execution-grounded-ai-research"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2507.21184", "https://github.com/linhaowei1/SLD", "https://linhaowei1.github.io/SLD/"]
summaryEn: "SLDAgent uses evolutionary search to jointly discover the functional form and parameters of scaling laws from a collection of more than 5,000 prior experiments, turning law discovery into an agentic scientific search problem."
summaryZh: "SLDAgent 用进化搜索同时发现缩放定律的函数形式和参数，并利用文献中五千多个实验构成的数据，把定律发现转化为智能体自动科学搜索问题。"
problemEn: "Scaling-law discovery is slow, case-specific, and human-driven; existing agents struggle to propose formulas whose predictions remain accurate beyond the observed scale."
problemZh: "缩放定律的发现通常缓慢、依赖具体场景且由人主导；现有智能体难以提出在观测规模之外仍能准确预测的公式。"
methodEn: "The authors curate eight diverse discovery tasks from over 5,000 experiments. SLDAgent evolves both symbolic model structure and numerical parameters, evaluates extrapolation, and iteratively retains better candidate laws."
methodZh: "作者从五千多个实验整理出八个多样化任务。SLDAgent 同时进化符号模型结构与数值参数，评估外推能力，并迭代保留更好的候选定律。"
resultsEn: "Across all eight tasks, the discovered laws extrapolate more accurately than established human-derived counterparts. The authors also verify practical utility for both pre-training and fine-tuning decisions."
resultsZh: "在全部八个任务上，自动发现的定律都比既有人工定律具有更准确的外推表现；作者还验证了它们在预训练与微调决策中的实际用途。"
limitationsEn: "The agent learns from a curated literature corpus, so discovery quality depends on task construction, variable coverage, and trustworthy historical measurements. Better extrapolation on eight tasks does not yet imply open-ended theorem discovery or causal understanding."
limitationsZh: "智能体依赖整理后的文献实验库，因此发现质量受任务构造、变量覆盖与历史测量可靠性影响；在八个任务上外推更准，也不等于具备开放式定理发现或因果理解。"
whyReadEn: "This is a strong example of AI-for-AI research where the output is not another trained model but a compact scientific law that can guide future compute allocation."
whyReadZh: "这是“AI 研究 AI”的代表案例：系统产出的不是另一个训练模型，而是可指导未来算力分配的紧凑科学定律。"
feedbackSource: "Extrapolation error of candidate formulas on held-out scaling experiments"
updatedObject: "The symbolic scaling-law form and its fitted parameters"
updateMechanism: "Evolutionary proposal, joint parameter optimization, evaluation, and selection"
successSignal: "Lower out-of-scale prediction error and useful pre-training or fine-tuning decisions"
loopSummaryEn: "Propose a law and parameters → fit on observed experiments → test extrapolation → retain better candidates → mutate the next generation."
loopSummaryZh: "提出定律与参数 → 在已观测实验上拟合 → 检验外推 → 保留更好候选 → 变异产生下一代。"
---

Evidence note: the arXiv abstract, official repository, and project page were checked; full-text section verification remains pending.

证据说明：已核对 arXiv 摘要、官方仓库与项目页，论文全文分节核对仍待完成。
