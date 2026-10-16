---
title: "Improved Iterative Refinement for Chart-to-Code Generation via Structured Instruction"
titleZh: "通过结构化指令改进图表到代码生成的迭代修正"
authors: ["Chengzhi Xu", "Yuyang Wang", "Lai Wei", "Lichao Sun", "Weiran Huang"]
presentation: "poster"
year: 2026
sourceIndex: 74
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=KgkMSbYoL1"},{"kind":"arxiv","url":"https://arxiv.org/abs/2506.14837"}]
themes: ["agents-tools-code-evolution", "embodied-multimodal-intelligence", "test-time-learning-inference-scaling"]
keywords: ["chart-to-code", "structured instruction", "visual difference", "iterative refinement", "code generation"]
difficulty: "intermediate"
prerequisites: ["multimodal LLMs", "code generation", "chart rendering", "visual similarity metrics"]
readingPaths: []
relatedPapers: ["frontend-vision-refinement", "attwarp", "autoharness"]
readNext: ["frontend-vision-refinement", "autoharness"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=KgkMSbYoL1", "https://arxiv.org/abs/2506.14837"]
summaryEn: "ChartIR separates chart understanding from code translation. Structured descriptions initialize generation, while multi-dimensional difference instructions compare each rendering with the target and guide successive code revisions."
summaryZh: "ChartIR 将图表理解与代码翻译分开：结构化描述负责初始化生成，多维差异指令比较每次渲染与目标，并指导后续代码修改。"
problemEn: "Direct multimodal prompting must simultaneously parse visual structure and write executable code; single scalar visual metrics provide poor directions and can improve one property while damaging another."
problemZh: "直接多模态提示要同时解析视觉结构并编写可执行代码；单一视觉分数缺少修改方向，还可能改善一个属性却损害另一个。"
methodEn: "A description instruction captures chart type, text, color, and layout. After rendering generated code, a difference instruction describes discrepancies across all key dimensions and feeds them into the next revision."
methodZh: "描述指令提取图表类型、文本、颜色与布局；代码渲染后，差异指令在所有关键维度描述偏差，并送入下一轮修改。"
resultsEn: "On Plot2Code and ChartMimic with Qwen2-VL and GPT-4o, ChartIR outperforms direct generation and prior iterative baselines across model-judge, low-level, and image-similarity metrics."
resultsZh: "在 Plot2Code 与 ChartMimic 上，使用 Qwen2-VL 和 GPT-4o 的 ChartIR 在模型裁判、低层属性与图像相似度指标上均优于直接生成和既有迭代基线。"
limitationsEn: "Visual similarity does not guarantee data correctness, accessibility, or maintainable code. Iterative rendering is costly and a model-generated difference description may overlook subtle errors."
limitationsZh: "视觉相似不保证数据正确、无障碍或代码可维护；反复渲染成本较高，模型生成的差异描述也可能漏掉细微错误。"
whyReadEn: "It is a clean case of turning a hard multimodal comparison into structured language that a code model can act on."
whyReadZh: "它是把困难多模态比较转成代码模型可执行结构化语言的清晰案例。"
feedbackSource: "Structured visual differences between target and rendered charts"
updatedObject: "Executable chart-generation code"
updateMechanism: "Description-guided initialization followed by difference-guided code revision"
successSignal: "Rendered charts match target structure, text, color, layout, and type"
loopSummaryEn: "Describe the target chart → write code → render → describe differences → revise code."
loopSummaryZh: "描述目标图表 → 编写代码 → 渲染 → 描述差异 → 修改代码。"
---

Evidence note: the workshop paper and current arXiv version were checked.

证据说明：已核对工作坊论文与当前 arXiv 版本。
