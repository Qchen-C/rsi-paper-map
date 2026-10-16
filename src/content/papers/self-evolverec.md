---
title: "Self-EvolveRec: Self-Evolving Recommender Systems with LLM-based Directional Feedback"
titleZh: "Self-EvolveRec：基于大模型方向性反馈的自演化推荐系统"
authors: ["Sein Kim", "Sangwu Park", "Hongseok Kang", "Wonjoong Kim", "Jimin Seo", "Yeonjun In", "Kanghoon Yoon", "Chanyoung Park"]
presentation: "poster"
year: 2026
sourceIndex: 72
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=KCcpSuocz0"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.12612"},{"kind":"code","url":"https://github.com/Sein-Kim/self_evolverec"}]
themes: ["agents-tools-code-evolution", "scientific-discovery-applications", "verification-evaluation-safety"]
keywords: ["recommender systems", "code evolution", "directional feedback", "user simulation", "co-evolution"]
difficulty: "advanced"
prerequisites: ["recommender systems", "neural architecture search", "code evolution", "ranking metrics"]
readingPaths: []
relatedPapers: ["llm-fe", "ace-code-evolution", "simple-code-evolution-baselines"]
readNext: ["llm-fe", "code-agent-reward-hacking"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=KCcpSuocz0", "https://arxiv.org/abs/2602.12612", "https://github.com/Sein-Kim/self_evolverec"]
summaryEn: "Self-EvolveRec evolves recommender-system code with directional feedback rather than a scalar score alone. A user simulator explains preference failures, a diagnosis tool checks internals, and the diagnosis criteria co-evolve with the model."
summaryZh: "Self-EvolveRec 不只依赖标量分数，而用方向性反馈演化推荐系统代码。用户模拟器解释偏好失败，诊断工具检查内部行为，诊断标准还会与模型共同演化。"
problemEn: "NAS searches a fixed human-defined space, while open code evolution guided only by NDCG or hit rate says little about why a design failed or what to change next."
problemZh: "NAS 受限于人工定义搜索空间，而仅由 NDCG 或命中率指导的开放代码演化，无法说明设计为何失败、下一步应改什么。"
methodEn: "Candidate recommender code is evaluated by ranking metrics, qualitative user-simulator critiques, and quantitative internal diagnostics. The LLM revises code from this combined feedback, while diagnostic rules are updated as architectures change."
methodZh: "候选推荐代码同时接受排序指标、用户模拟器定性批评与内部定量诊断；大模型据此修改代码，诊断规则也随架构变化而更新。"
resultsEn: "Experiments report significant gains over state-of-the-art NAS and LLM code-evolution baselines in both recommendation performance and simulated user satisfaction."
resultsZh: "实验报告该方法在推荐性能和模拟用户满意度上均显著优于先进 NAS 与大模型代码演化基线。"
limitationsEn: "A simulated user's preferences may not represent real people, and co-evolving evaluators can drift with the artifact they judge. Production recommenders also face fairness, feedback-loop, and online-system constraints absent from offline tests."
limitationsZh: "模拟用户偏好未必代表真人，共同演化的评估器也可能与被评对象一起漂移；生产推荐还面临离线测试未覆盖的公平、反馈回路与在线系统约束。"
whyReadEn: "It illustrates why qualitative direction and evaluator evolution matter once search moves from fixed components into open program space."
whyReadZh: "它说明当搜索从固定组件进入开放程序空间后，为何定性方向与评估器演化都很重要。"
feedbackSource: "Ranking metrics, qualitative user-simulator critiques, and internal model diagnostics"
updatedObject: "The recommender architecture, training code, and diagnosis criteria"
updateMechanism: "LLM-directed code evolution with diagnosis-tool co-evolution"
successSignal: "Higher ranking quality and user satisfaction under evolving diagnostics"
loopSummaryEn: "Build a recommender → simulate users and inspect internals → produce directional feedback → revise code and diagnostics → reevaluate."
loopSummaryZh: "构建推荐器 → 模拟用户并检查内部 → 生成方向反馈 → 修改代码与诊断 → 再评估。"
---

Evidence note: the conference paper, arXiv abstract, and official repository were checked.

证据说明：已核对会议论文、arXiv 摘要与官方仓库。
