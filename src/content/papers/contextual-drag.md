---
title: "Contextual Drag: How Errors in the Context Affect LLM Reasoning"
titleZh: "上下文拖拽：上下文中的错误如何影响大语言模型推理"
authors: ["Yun Cheng", "Xingyu Zhu", "Haoyu Zhao", "Sanjeev Arora"]
presentation: "oral"
year: 2026
sourceIndex: 2
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=zpiYsPVDlV"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.04288"},{"kind":"code","url":"https://github.com/princeton-pli/Contextual-Drag"}]
themes: ["verification-evaluation-safety", "test-time-learning-inference-scaling"]
keywords: ["contextual drag", "error propagation", "self-refinement", "in-context reasoning", "structural similarity"]
difficulty: "entry"
prerequisites: ["chain-of-thought reasoning", "in-context learning", "self-refinement"]
readingPaths: [{"id":"entry","order":2},{"id":"safety-failure-modes","order":1}]
relatedPapers: ["agent0", "posttrainbench"]
readNext: ["agentic-memory-designs"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2602.04288", "https://github.com/princeton-pli/Contextual-Drag"]
summaryEn: "Contextual Drag shows that failed attempts left in an LLM's context can pull later reasoning toward structurally similar mistakes. This makes iterative self-refinement capable of becoming self-deterioration even when the model receives feedback or believes it has verified its answer."
summaryZh: "“上下文拖拽”指失败尝试一旦留在大模型上下文中，后续推理就会被拉向结构相似的错误。因此，迭代式自我反思并不天然带来改进，反而可能演变为持续自我退化。"
problemEn: "Agentic reasoning pipelines often preserve earlier attempts and assume that more reflection or verification will correct them, but the failed traces themselves may bias every later generation."
problemZh: "智能体推理流程通常保留先前尝试，并假设增加反思或验证就能纠错；但失败轨迹本身可能成为偏置源，持续污染后续生成。"
methodEn: "The study inserts one or two failed versus correct attempts into context, evaluates eleven proprietary and open-weight models on eight reasoning tasks, and compares both answer accuracy and tree-edit-distance patterns across successive traces. It also tests external feedback, self-verification, context denoising, and fallback-behavior fine-tuning."
methodZh: "研究在上下文中放入一到两个失败或正确尝试，在八类推理任务上评估十一种闭源与开源权重模型，并同时比较答案准确率与连续推理轨迹的树编辑距离；还测试了外部反馈、自我验证、上下文去噪和回退行为微调。"
resultsEn: "Failed context produces roughly 10–20% performance drops, and later traces inherit structural patterns from the earlier error. External feedback and successful self-verification do not reliably remove the effect; context denoising and fallback-behavior SFT help only partially and do not restore the clean-context baseline."
resultsZh: "失败上下文会造成约 10%–20% 的性能下降，后续轨迹还会继承早期错误的结构模式。外部反馈与看似成功的自我验证都不能稳定消除该效应；上下文去噪和回退行为监督微调只能部分缓解，无法恢复到干净上下文基线。"
limitationsEn: "The reported mitigations are partial, so the work diagnoses a failure mode rather than providing a complete correction. The measured effect also depends on the selected models, reasoning tasks, and injected-context protocol."
limitationsZh: "论文给出的缓解方法都不彻底，因此它更像是对失败模式的诊断，而不是完整修复方案。效应大小也会受到所选模型、推理任务及错误上下文构造方式的影响。"
whyReadEn: "This is the clearest warning against equating recursion with progress: feeding an agent its own history can amplify error structure instead of producing learning."
whyReadZh: "这篇论文最直接地提醒我们：递归不等于进步。把智能体自己的历史重新喂给它，可能放大错误结构，而不是产生学习。"
feedbackSource: "Prior failed attempts, external feedback, and the model's own verification signals"
updatedObject: "The next context-conditioned reasoning trajectory; fallback SFT additionally changes model weights"
updateMechanism: "In-context conditioning propagates structural error patterns, while denoising or fallback training attempts to interrupt them"
successSignal: "Recovered task accuracy and reduced structural similarity to earlier erroneous traces"
loopSummaryEn: "Attempt → retain the failed trace → reason again under that context → reproduce related structure → accumulate degradation unless the context is cleaned or behavior is retrained."
loopSummaryZh: "尝试 → 保留失败轨迹 → 在该上下文中再次推理 → 复现相似错误结构 → 若不清理上下文或重训行为，退化会持续累积。"
---

Evidence note: the abstract and official repository were checked; full-text section verification remains pending.

证据说明：已核对摘要与官方代码仓库，论文全文分节核对仍待完成。
