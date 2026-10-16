---
title: "Aligned but Stereotypical? Understanding and Mitigating Social Bias in LLM-Driven Text-to-Image Models"
titleZh: "对齐但刻板？理解并缓解大模型驱动文生图系统中的社会偏见"
authors: ["NaHyeon Park", "Na Min An", "Kunhee Kim", "Soyeon Yoon", "Jiahao Huo", "Hyunjung Shim"]
presentation: "poster"
year: 2026
sourceIndex: 62
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=RvgoRhan6d"},{"kind":"code","url":"https://github.com/nahyeonkaty/fairpro"}]
themes: ["verification-evaluation-safety", "embodied-multimodal-intelligence", "test-time-learning-inference-scaling"]
keywords: ["text-to-image", "social bias", "demographic stereotypes", "system prompts", "test-time mitigation"]
difficulty: "intermediate"
prerequisites: ["text-to-image models", "demographic bias metrics", "prompt conditioning", "multimodal embeddings"]
readingPaths: []
relatedPapers: ["attwarp", "agent0-vl", "self-evolving-rubrics"]
readNext: ["attwarp", "self-evolving-rubrics"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=RvgoRhan6d", "https://github.com/nahyeonkaty/fairpro"]
summaryEn: "SocBiasBench finds that LLM-driven text-to-image systems can understand prompts better yet generate more demographic stereotypes. FairPro uses the embedded LLM to create an input-dependent system prompt that reduces bias without retraining."
summaryZh: "SocBiasBench 发现，大模型驱动的文生图系统虽然更懂提示，却可能生成更多人口刻板印象。FairPro 让内置大模型按输入构造系统提示，在无需训练的情况下缓解偏见。"
problemEn: "Improved semantic alignment does not imply social fairness, and the LLM inserted before the image generator can silently inject demographic priors through its system-conditioned text."
problemZh: "语义对齐更好并不意味着社会公平，图像生成器之前的大模型可能通过系统条件文本悄悄注入人口先验。"
methodEn: "The 1,024-prompt SocBiasBench spans four complexity levels. Decoded text, token probabilities, and embedding analyses trace how bias enters; FairPro then generates a prompt-specific system instruction to counter stereotypical completions."
methodZh: "包含 1,024 条提示的 SocBiasBench 覆盖四种复杂度。论文通过解码文本、token 概率与嵌入分析追踪偏见路径，再由 FairPro 生成输入特定系统指令抑制刻板补全。"
resultsEn: "Recent LLM-based text-to-image models are more demographically biased than non-LLM baselines in the study. Across tested models, FairPro reduces measured bias while preserving text–image alignment."
resultsZh: "研究中的近期大模型文生图系统比非大模型基线具有更强人口偏见；在所测模型上，FairPro 降低了测量偏见，同时保持图文对齐。"
limitationsEn: "Bias metrics and demographic categories are incomplete proxies for social harm. A test-time system prompt can trade one stereotype for another and should not replace participatory or deployment-specific evaluation."
limitationsZh: "偏见指标与人口分类只是社会伤害的不完整代理；测试时系统提示可能用一种刻板印象替换另一种，不能取代参与式或部署特定评估。"
whyReadEn: "It shows that stronger language mediation can worsen downstream fairness and identifies a practical intervention point inside the generation loop."
whyReadZh: "它表明更强的语言中介反而可能恶化下游公平性，并指出生成闭环中的一个实际干预点。"
feedbackSource: "Demographic-bias scores and text–image alignment on SocBiasBench"
updatedObject: "The input-dependent system prompt sent through the embedded LLM"
updateMechanism: "Training-free prompt revision that counters stereotypical demographic completions"
successSignal: "Lower demographic bias without degrading prompt alignment"
loopSummaryEn: "Analyze prompt-conditioned bias → generate a corrective system prompt → render the image → audit bias and alignment."
loopSummaryZh: "分析提示条件偏见 → 生成纠偏系统提示 → 渲染图像 → 审计偏见与对齐。"
---

Evidence note: the workshop paper and official repository were checked.

证据说明：已核对工作坊论文与官方仓库。
