---
title: "Reasoning Within the Mind: Dynamic Multimodal Interleaving in Latent Space"
titleZh: "在心智中推理：潜在空间的动态多模态交织"
authors: ["Chengzhi Liu", "Yuzhe Yang", "Yue Fan", "Qingyue Wei", "Sheng Liu", "Xin Eric Wang"]
presentation: "poster"
year: 2026
sourceIndex: 66
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=fWrhAOQZ5A"},{"kind":"arxiv","url":"https://arxiv.org/abs/2512.12623"}]
themes: ["embodied-multimodal-intelligence", "test-time-learning-inference-scaling", "recursive-models-architectures"]
keywords: ["latent reasoning", "multimodal interleaving", "test-time optimization", "visual injection", "confidence"]
difficulty: "advanced"
prerequisites: ["multimodal LLMs", "latent representations", "policy gradients", "visual attention"]
readingPaths: []
relatedPapers: ["attwarp", "cot-seg", "tangramsr"]
readNext: ["attwarp", "cot-seg"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=fWrhAOQZ5A", "https://arxiv.org/abs/2512.12623"]
summaryEn: "DMLR performs training-free test-time optimization on latent think tokens and injects visual patches only when they increase confidence. Reasoning and perception therefore interleave inside the model rather than through explicit textual tool calls."
summaryZh: "DMLR 在测试时无需训练地优化潜在思考 token，并只在视觉图块能提高置信度时注入，使推理与感知在模型内部交织，而非依赖显式文本工具调用。"
problemEn: "Text-only chains can lose visual grounding, while explicit zoom, crop, or image-generation tools introduce unstable decisions, verbose traces, and computational overhead."
problemZh: "纯文本思维链会丢失视觉落地，而显式缩放、裁剪或图像生成工具又带来不稳定决策、冗长轨迹与额外计算。"
methodEn: "Confidence-guided latent policy gradients refine a small set of think tokens. At each iteration, a dynamic visual-injection strategy retrieves candidate patches, keeps those that improve reward, and interleaves them with the latent state."
methodZh: "置信度引导的潜在策略梯度优化少量思考 token；每轮动态视觉注入检索候选图块，保留能提高奖励者，并与潜在状态交织。"
resultsEn: "Across seven multimodal reasoning benchmarks and several architectures, the paper reports significant gains in reasoning and perception while retaining high inference efficiency."
resultsZh: "在七个多模态推理基准与多种架构上，论文报告推理和感知性能显著提升，同时保持较高推理效率。"
limitationsEn: "Confidence is an imperfect reward and may prefer fluent wrong answers. Latent optimization is harder to audit than explicit reasoning, and all reported benchmark answers are programmatically verifiable."
limitationsZh: "置信度是不完美奖励，可能偏爱流畅的错误答案；潜在优化比显式推理更难审计，而且报告中的基准答案都可程序验证。"
whyReadEn: "It is a strong example of recursive test-time improvement occurring in representation space rather than in visible prose."
whyReadZh: "它是递归测试时改进发生在表示空间而非可见文本中的代表案例。"
feedbackSource: "Answer confidence under candidate latent states and visual-patch injections"
updatedObject: "Latent think tokens and the retained set of visual patches"
updateMechanism: "Confidence-guided latent policy-gradient steps with dynamic visual injection"
successSignal: "Higher-confidence correct answers with efficient multimodal reasoning"
loopSummaryEn: "Initialize latent thoughts → retrieve visual evidence → score confidence → update thoughts and patches → decode the best state."
loopSummaryZh: "初始化潜在思考 → 检索视觉证据 → 评估置信度 → 更新思考与图块 → 解码最佳状态。"
---

Evidence note: the workshop manuscript and arXiv abstract were checked.

证据说明：已核对工作坊稿件与 arXiv 摘要。
