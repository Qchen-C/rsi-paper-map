---
title: "Inference-Time Scaling in Diffusion Models through Iterative Partial Refinement"
titleZh: "通过迭代局部修正扩展扩散模型的推理时计算"
authors: ["Taegu Kang", "Jaesik Yoon", "Sungjin Ahn"]
presentation: "poster"
year: 2026
sourceIndex: 93
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=QopjICzGwr"},{"kind":"code","url":"https://github.com/ahn-ml/IPR"}]
themes: ["test-time-learning-inference-scaling", "recursive-models-architectures"]
keywords: ["diffusion models", "partial refinement", "inference-time scaling", "mixed-noise conditioning", "constraint satisfaction"]
difficulty: "advanced"
prerequisites: ["diffusion models", "denoising", "conditional generation", "constraint satisfaction"]
readingPaths: []
relatedPapers: ["generative-recursive-reasoning", "one-step-video-depth", "adaptive-decoding-policy"]
readNext: ["generative-recursive-reasoning", "adaptive-decoding-policy"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=QopjICzGwr", "https://github.com/ahn-ml/IPR"]
summaryEn: "Iterative Partial Refinement re-noises selected regions of an existing diffusion sample and regenerates them while holding other regions as context. Extra inference compute improves global consistency without a verifier or reward model."
summaryZh: "迭代局部修正对已有扩散样本的部分区域重新加噪，并在其余区域作为上下文时重新生成；额外推理计算无需验证器或奖励模型即可改善全局一致性。"
problemEn: "Diffusion inference scaling often depends on external candidate ranking, and early region-wise generation decisions may become inconsistent once later context is available."
problemZh: "扩散模型的推理扩展常依赖外部候选排序，而且早期分区域生成决策在看到后续上下文后可能显得不一致。"
methodEn: "For sequential mixed-noise diffusion, IPR repeatedly chooses regions, adds noise back to them, and denoises them conditioned on the less-noisy remainder, allowing earlier decisions to be revised."
methodZh: "针对顺序混合噪声扩散，IPR 反复选择局部区域、重新加噪，再以其余低噪区域为条件去噪，从而修正早期决策。"
resultsEn: "On global-constraint reasoning tasks, refinement consistently improves performance; MNIST Sudoku valid-solution rate rises from 55.8% to 75.0%."
resultsZh: "在需要满足全局约束的推理任务上，局部修正持续提升表现；MNIST Sudoku 的有效解比例从 55.8% 提高到 75.0%。"
limitationsEn: "The method assumes a sequential diffusion model trained for mixed-noise conditioning and requires decisions about which regions to revisit. Evidence is concentrated on structured synthetic tasks."
limitationsZh: "该方法要求顺序扩散模型已针对混合噪声条件训练，并需决定重访哪些区域；证据主要集中在结构化合成任务。"
whyReadEn: "It demonstrates recursive refinement without an explicit critic: the unchanged parts of a sample become the context that makes revising other parts useful."
whyReadZh: "它展示了无需显式批评器的递归修正：样本中保持不变的部分本身就成为修正其他部分的上下文。"
feedbackSource: "The model's mixed-noise conditional distribution over a partially fixed sample"
updatedObject: "Selected regions of a generated diffusion sample"
updateMechanism: "Re-noise and conditionally regenerate subsets over repeated inference passes"
successSignal: "Greater global consistency and a higher rate of valid constraint-satisfying samples"
loopSummaryEn: "Generate a full sample → re-noise selected regions → regenerate from richer context → repeat until more consistent."
loopSummaryZh: "生成完整样本 → 对选定区域重新加噪 → 借助更丰富上下文再生成 → 重复直至更一致。"
---

Evidence note: the accepted workshop paper and official code repository were checked.

证据说明：已核对接收的工作坊论文与官方代码仓库。
