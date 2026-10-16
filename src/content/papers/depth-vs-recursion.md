---
title: "Depth vs Recursion: Outperforming Transformers in Jigsaw Reconstruction"
titleZh: "深度对递归：在拼图重建中超越 Transformer"
authors: ["Timofey Brayko", "Artemii Miasoedov", "Rustam Lukmanov"]
presentation: "short"
year: 2026
sourceIndex: 105
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=1zDG1o16xB"},{"kind":"code","url":"https://github.com/Tima-Toma/depth-vs-recursion"}]
themes: ["recursive-models-architectures", "foundations-recursive-computation", "embodied-multimodal-intelligence"]
keywords: ["Tiny Recursive Models", "jigsaw reconstruction", "latent reasoning", "model depth", "spatial reasoning"]
difficulty: "intermediate"
prerequisites: ["transformer encoders", "recursive neural networks", "visual spatial reasoning"]
readingPaths: []
relatedPapers: ["tiny-autoregressive-recursive-models", "depth-grown-models", "generative-recursive-reasoning"]
readNext: ["tiny-autoregressive-recursive-models", "depth-grown-models"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=1zDG1o16xB", "https://github.com/Tima-Toma/depth-vs-recursion"]
summaryEn: "This controlled comparison asks whether reusing a small network recursively is more effective than stacking more transformer layers. On larger jigsaw puzzles, Tiny Recursive Models keep refining a latent thought while encoder-only transformers collapse."
summaryZh: "这项受控比较考察：递归复用小网络是否比堆叠更多 Transformer 层更有效；在更大拼图上，微型递归模型持续修正潜在思考，而纯编码器 Transformer 表现崩塌。"
problemEn: "More parameters and layers do not necessarily create enough iterative computation for global spatial constraints, while token-level chain-of-thought is an unnatural fit for image reconstruction."
problemZh: "增加参数和层数未必能提供满足全局空间约束所需的迭代计算，而 token 级思维链也不自然适合图像重建。"
methodEn: "TRM repeatedly updates a candidate arrangement and latent thought with shared weights. It is compared against encoder-only transformers of varying depths under a tight roughly 0.7M-parameter budget."
methodZh: "TRM 以共享权重反复更新候选排列和潜在思考，并在约 70 万参数的严格预算下，与不同深度的纯编码器 Transformer 比较。"
resultsEn: "Both approaches handle grids up to 3×3, but TRM scales far better: the released implementation reports 94.15% patch accuracy for TRM-12 on 5×5 versus 11.94% for a 12-layer encoder transformer."
resultsZh: "两种方法都能处理至 3×3 网格，但 TRM 扩展性明显更好：公开实现报告，5×5 上 TRM-12 的块准确率为 94.15%，12 层编码器 Transformer 仅为 11.94%。"
limitationsEn: "Jigsaw reconstruction is one synthetic spatial task, and parameter matching does not automatically equal compute matching because recursion adds repeated passes. Abrupt learning also raises training stability questions."
limitationsZh: "拼图重建只是一个合成空间任务；参数匹配不等于计算匹配，因为递归会增加重复前向；突变式学习也带来训练稳定性问题。"
whyReadEn: "It provides a simple, visual test of the architectural claim that thinking longer with shared weights can beat making a feed-forward model deeper."
whyReadZh: "它用直观视觉任务检验一个架构主张：以共享权重“想得更久”，可能胜过把前馈模型堆得更深。"
feedbackSource: "Supervised correctness of the reconstructed tile arrangement at successive refinement steps"
updatedObject: "A latent thought vector and candidate jigsaw arrangement"
updateMechanism: "Weight-tied recursive refinement with deep supervision"
successSignal: "Accurate reconstruction as puzzle size grows under a fixed parameter budget"
loopSummaryEn: "Encode puzzle tiles → refine latent thought → update the arrangement → repeat → decode the final reconstruction."
loopSummaryZh: "编码拼图块 → 修正潜在思考 → 更新排列 → 重复 → 解码最终重建。"
---

Evidence note: the accepted workshop paper and official implementation were checked.

证据说明：已核对接收的工作坊论文与官方实现。
