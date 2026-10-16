---
title: "Simple Baselines are Competitive with Code Evolution"
titleZh: "简单基线足以与代码进化竞争"
authors: ["Yonatan Gideoni", "Sebastian Risi", "Yarin Gal"]
presentation: "poster"
year: 2026
sourceIndex: 40
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=QSWFqDcveB"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.16805"}]
themes: ["agents-tools-code-evolution", "verification-evaluation-safety", "scientific-discovery-applications"]
keywords: ["code evolution", "random search", "baseline evaluation", "agentic scaffolds", "machine learning competitions"]
difficulty: "intermediate"
prerequisites: ["program synthesis", "evolutionary search", "experimental design", "statistical evaluation"]
readingPaths: []
relatedPapers: ["omega", "causalevolve", "llm-fe"]
readNext: ["causalevolve", "omega"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2602.16805", "https://openreview.net/pdf?id=QSWFqDcveB"]
summaryEn: "This study compares sophisticated LLM code-evolution pipelines with two simple search baselines across mathematical bounds, agentic scaffolds, and machine-learning competitions. The baselines match or exceed the complex methods in every studied domain."
summaryZh: "该研究在数学界、智能体脚手架与机器学习竞赛中，把复杂 LLM 代码进化流程与两个简单搜索基线比较；简单基线在所有研究领域都达到或超过复杂方法。"
problemEn: "Code-evolution systems often bundle many design choices but are evaluated against weak baselines, making it unclear whether evolutionary machinery, prompt knowledge, search-space design, or evaluation noise drives the result."
problemZh: "代码进化系统常捆绑许多设计选择，却只与弱基线比较，因此不清楚真正驱动结果的是进化机制、提示中的领域知识、搜索空间设计还是评估噪声。"
methodEn: "The authors implement IID random sampling and a lightweight sequentially conditioned search, then compare them under matched budgets in mathematical discovery, scaffold design, and Kaggle-style ML tasks. They separately analyze search spaces, domain prompts, and stochastic evaluation."
methodZh: "作者实现 IID 随机采样与轻量顺序条件搜索，并在匹配预算下用于数学发现、脚手架设计和 Kaggle 风格机器学习任务，同时分别分析搜索空间、领域提示与随机评估。"
resultsEn: "Simple baselines match or outperform specialized systems across all three domains. In math, problem formulation and domain knowledge set the ceiling; in scaffold search, noisy small evaluations select weak designs; in ML competitions, the simple sequential baseline matches or beats AIDE on six of ten tasks."
resultsZh: "简单基线在三个领域均匹配或超过专用系统。数学任务中，问题表述与领域知识决定上限；脚手架搜索中，小数据高噪评估会选出较差设计；机器学习竞赛中，简单顺序基线在 10 个任务中的 6 个匹配或超过 AIDE。"
limitationsEn: "The study evaluates selected implementations and budgets rather than every code-evolution design. Stronger methods may help in search spaces or feedback regimes not covered here."
limitationsZh: "研究只评估选定实现与预算，并不覆盖所有代码进化设计；在不同搜索空间或反馈条件下，更强方法仍可能有价值。"
whyReadEn: "It is a methodological guardrail for the whole RSI literature: always ask whether the loop beats a budget-matched simple search."
whyReadZh: "它为整个 RSI 文献提供方法论护栏：必须检查闭环是否真正超过预算匹配的简单搜索。"
feedbackSource: "Objective evaluations of generated programs under matched search budgets"
updatedObject: "The candidate program population or sequential search context"
updateMechanism: "Simple IID sampling or lightweight conditional search used as controlled baselines"
successSignal: "Best-found objective value and robust held-out performance under equal cost"
loopSummaryEn: "Define the search space → sample or condition simple candidates → evaluate under a fixed budget → compare fairly with evolution → attribute gains."
loopSummaryZh: "定义搜索空间 → 用简单采样或条件生成候选 → 在固定预算评估 → 与进化公平比较 → 归因收益。"
---

Evidence note: the arXiv abstract and public ICLR paper were checked. The card foregrounds the negative comparative result because it is the paper's central contribution.

证据说明：已核对 arXiv 摘要与公开 ICLR 论文。卡片突出负向比较结果，因为这是论文的核心贡献。
