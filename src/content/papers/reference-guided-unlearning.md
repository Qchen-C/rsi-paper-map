---
title: "Reference-Guided Machine Unlearning"
titleZh: "参考分布引导的机器遗忘"
authors: ["Jonas Mirlach", "Sonia Laguna", "Julia E. Vogt"]
presentation: "short"
year: 2026
sourceIndex: 102
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=0IbjWHRGMC"},{"kind":"arxiv","url":"https://arxiv.org/abs/2603.11210"},{"kind":"code","url":"https://github.com/jmirlach/ReGUn"}]
themes: ["memory-continual-adaptation", "verification-evaluation-safety"]
keywords: ["machine unlearning", "reference distillation", "forgetting", "held-out data", "distribution matching"]
difficulty: "advanced"
prerequisites: ["machine unlearning", "knowledge distillation", "KL divergence", "image classification"]
readingPaths: []
relatedPapers: ["munkey", "orthogonal-continual-unlearning", "sahoo"]
readNext: ["munkey", "orthogonal-continual-unlearning"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=0IbjWHRGMC", "https://arxiv.org/abs/2603.11210", "https://github.com/jmirlach/ReGUn"]
summaryEn: "ReGUn makes a model treat forget-set inputs like unseen data by distilling class-conditioned output distributions derived from a disjoint held-out set. Retain-set training protects ordinary utility during the update."
summaryZh: "ReGUn 从独立留出集构造类别条件输出分布，并把遗忘集输入蒸馏成类似未见数据的行为；同时用保留集训练保护正常效用。"
problemEn: "Approximate unlearning often maximizes loss or assigns random labels, unstable signals that can destroy generalization without making behavior resemble retraining from scratch."
problemZh: "近似遗忘常采用最大化损失或随机标签，这些不稳定信号会破坏泛化，却未必让模型行为接近从头重训。"
methodEn: "For each forget batch, the method builds a soft target from held-out inputs with the same class histogram and distills the model toward it, while a retain loss preserves performance on allowed data."
methodZh: "对每个遗忘批次，该方法从类别直方图相同的留出输入构造软目标并执行蒸馏，同时用保留损失维持允许数据上的表现。"
resultsEn: "Across several image architectures, datasets, and forget fractions, ReGUn reports a consistently stronger forgetting–utility trade-off than standard approximate-unlearning baselines."
resultsZh: "在多种图像架构、数据集与遗忘比例上，ReGUn 报告的遗忘—效用权衡持续优于标准近似遗忘基线。"
limitationsEn: "This is empirical approximate unlearning, not a certificate of equivalence to retraining. The default reference model was originally trained on the forget data, and experiments are limited to supervised image classification."
limitationsZh: "这是经验性的近似遗忘，并不证明等价于从头重训；默认参考模型原本见过遗忘数据，实验也局限于监督图像分类。"
whyReadEn: "It reframes forgetting from 'make the model wrong' to 'make forgotten examples look statistically unseen,' a clearer target for controlled self-modification."
whyReadZh: "它把遗忘从“让模型答错”重构为“让被忘样本在统计上像未见数据”，为受控自我修改提供了更清晰目标。"
feedbackSource: "Class-conditioned prediction distributions from a disjoint held-out dataset"
updatedObject: "Model parameters affecting forget-set and retain-set behavior"
updateMechanism: "Reference-distribution distillation balanced with retain-set cross-entropy"
successSignal: "Forget behavior close to a retrained model while preserving retained-data utility"
loopSummaryEn: "Sample forget and retain data → build an unseen-data reference → distill forget outputs → preserve retain utility → evaluate both."
loopSummaryZh: "采样遗忘与保留数据 → 构造未见数据参考 → 蒸馏遗忘输出 → 保持保留效用 → 同时评估两者。"
---

Evidence note: the workshop paper, current arXiv version, and official code repository were checked. Claims are explicitly limited to approximate unlearning.

证据说明：已核对工作坊论文、当前 arXiv 版本与官方代码仓库；相关结论明确限定为近似遗忘。
