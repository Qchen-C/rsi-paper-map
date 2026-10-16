---
title: "Generative Recursive Reasoning Models"
titleZh: "生成式递归推理模型"
authors: ["Junyeob Baek", "Mingyu Jo", "Minsu Kim", "Yoshua Bengio", "Sungjin Ahn"]
presentation: "poster"
year: 2026
sourceIndex: 90
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=Vxu6kcIjwV"}]
themes: ["recursive-models-architectures", "foundations-recursive-computation", "test-time-learning-inference-scaling"]
keywords: ["latent reasoning", "stochastic recursion", "variational inference", "width scaling", "ARC-AGI"]
difficulty: "advanced"
prerequisites: ["latent-variable models", "variational inference", "recursive neural networks", "System 2 reasoning"]
readingPaths: []
relatedPapers: ["tiny-autoregressive-recursive-models", "growing-to-looping", "depth-grown-models"]
readNext: ["tiny-autoregressive-recursive-models", "growing-to-looping"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=Vxu6kcIjwV"]
summaryEn: "GRAM turns latent recursive reasoning into a stochastic generative process rather than a single deterministic refinement path. It can sample multiple internal trajectories, scale inference by width, and model conditional solutions or unconditional inputs."
summaryZh: "GRAM 把潜在递归推理改造成随机生成过程，而非单一确定性修正路径；它可采样多条内部轨迹、通过宽度扩展推理，并建模条件解或无条件输入。"
problemEn: "Deterministic recursive reasoning collapses every run to one latent trajectory, limiting uncertainty representation, alternative-hypothesis exploration, and tasks with multiple valid answers."
problemZh: "确定性递归推理会让每次运行收敛到同一条潜在轨迹，限制不确定性表达、备选假设探索和多解任务能力。"
methodEn: "Probabilistic latent transitions define a distribution over recursive trajectories and are trained with amortized variational inference. Parallel samples create width scaling without longer token-level chains or larger models."
methodZh: "概率潜在转移定义递归轨迹分布，并通过摊销变分推断训练；并行采样形成宽度扩展，无需更长的 token 推理链或更大模型。"
resultsEn: "GRAM outperforms deterministic recursive baselines on Sudoku-Extreme and ARC-AGI, handles multi-solution constraint tasks, and extends to MNIST generation with quality improving over additional refinement steps."
resultsZh: "GRAM 在 Sudoku-Extreme 与 ARC-AGI 上超过确定性递归基线，可处理多解约束任务，并扩展到 MNIST 生成，质量随额外修正步数提高。"
limitationsEn: "The demonstrations use specialized reasoning benchmarks and small generative domains, so scaling to broad language tasks is unproven. Stochastic trajectories also add sampling cost and variational-training complexity."
limitationsZh: "实验集中在专门推理基准与小型生成领域，能否扩展到广泛语言任务尚未验证；随机轨迹也增加采样成本与变分训练复杂度。"
whyReadEn: "It gives the collection's most direct architectural answer to diversity in recursive thought: model a distribution over internal computations instead of one attractor."
whyReadZh: "它对递归思考多样性给出最直接的架构答案：建模内部计算的分布，而不是单一吸引子。"
feedbackSource: "Supervised task solutions and variational learning signals over latent trajectories"
updatedObject: "A stochastic latent reasoning state refined across recursive steps"
updateMechanism: "Probabilistic recursive transitions optimized by amortized variational inference"
successSignal: "Accurate and diverse solutions that improve with recursive depth or parallel width"
loopSummaryEn: "Encode a task → sample latent transitions → refine recursively → decode candidate solutions → aggregate parallel trajectories."
loopSummaryZh: "编码任务 → 采样潜在转移 → 递归修正 → 解码候选解 → 聚合并行轨迹。"
---

Evidence note: the accepted workshop paper was checked.

证据说明：已核对接收的工作坊论文。
