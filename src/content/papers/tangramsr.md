---
title: "TangramSR: A Benchmark for Recursive Self-Improvement In Continuous Geometric Reasoning"
titleZh: "TangramSR：连续几何推理中的递归自我改进基准"
authors: ["Cheston Tan", "Yikun Zong"]
presentation: "poster"
year: 2026
sourceIndex: 34
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=5XGfbXlFmA"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.05570"}]
themes: ["embodied-multimodal-intelligence", "test-time-learning-inference-scaling", "verification-evaluation-safety"]
keywords: ["continuous geometry", "Tangram", "test-time refinement", "vision-language models", "IoU feedback"]
difficulty: "intermediate"
prerequisites: ["vision-language models", "geometric transformations", "intersection over union", "in-context learning"]
readingPaths: []
relatedPapers: ["agent0-vl", "world-action-verifier", "test-time-self-distillation"]
readNext: ["agent0-vl", "world-action-verifier"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=5XGfbXlFmA", "https://arxiv.org/abs/2602.05570"]
summaryEn: "TangramSR tests whether Vision-Language Models can iteratively correct precise continuous placement, rotation, and scale predictions. A training-free verifier–refiner loop feeds geometric consistency scores back into the model's context."
summaryZh: "TangramSR 测试视觉语言模型能否迭代修正连续空间中的精确位置、旋转与缩放预测。无需训练的 verifier–refiner 闭环把几何一致性分数反馈到模型上下文。"
problemEn: "Models that succeed on discrete visual questions can still fail when a few pixels or degrees determine correctness. Standard benchmarks hide this continuous precision gap."
problemZh: "能做好离散视觉问答的模型，仍可能在几像素或几度误差就决定成败时失败；标准基准掩盖了这种连续精度缺口。"
methodEn: "The benchmark uses Tangram assembly as a controlled continuous task. A VLM proposes piece parameters, a geometry engine computes overlap feedback, and the model receives prior attempts plus numeric hints for repeated in-context refinement without weight updates."
methodZh: "基准使用七巧板拼装作为可控连续任务。VLM 提出图块参数，几何引擎计算重叠反馈，模型把历史尝试与数值提示放入上下文，在不更新权重的情况下反复修正。"
resultsEn: "Across five VLMs, average IoU is 0.41 for single-piece tasks and 0.23 for two-piece composition. On medium-triangle cases, recursive refinement raises IoU from 0.63 to 0.932."
resultsZh: "在五种 VLM 上，单图块任务平均 IoU 为 0.41，两图块组合降至 0.23；在中等三角形案例中，递归修正把 IoU 从 0.63 提升到 0.932。"
limitationsEn: "The verifier uses geometric feedback tied closely to a known target, which may not exist in open-world spatial tasks. Tangram success does not establish physical feasibility or robustness in robotics."
limitationsZh: "验证器依赖与已知目标紧密相关的几何反馈，开放世界空间任务未必具备；七巧板成功也不能证明机器人场景中的物理可行性与稳健性。"
whyReadEn: "It makes recursive improvement visible and measurable in a continuous domain where small corrections matter."
whyReadZh: "它让递归改进在一个微小修正至关重要的连续领域中变得直观且可测量。"
feedbackSource: "Geometric consistency and IoU from a deterministic verifier"
updatedObject: "The VLM's predicted piece position, rotation, and scale"
updateMechanism: "Training-free in-context refinement using previous attempts and numeric feedback"
successSignal: "Higher geometric overlap after successive refinement rounds"
loopSummaryEn: "Place a piece → compute overlap → describe the geometric error → revise coordinates → verify again."
loopSummaryZh: "放置图块 → 计算重叠 → 描述几何误差 → 修订坐标 → 再次验证。"
---

Evidence note: the workshop paper and current arXiv abstract were checked. The arXiv version uses a revised title; the workshop title is retained.

证据说明：已核对工作坊论文与当前 arXiv 摘要。arXiv 版本使用修订标题；本站保留工作坊标题。
