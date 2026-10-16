---
title: "CoT-Seg: Rethinking Segmentation with Chain-of-Thought Reasoning and Self-Correction"
titleZh: "CoT-Seg：以思维链推理与自我纠正重构图像分割"
authors: ["Shiu-hong Kao", "Chak Ho Huang", "Huaiqian Liu", "Yu-Wing Tai", "Chi-Keung Tang"]
presentation: "poster"
year: 2026
sourceIndex: 64
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=BtHRvwzJj8"},{"kind":"arxiv","url":"https://arxiv.org/abs/2601.17420"}]
themes: ["embodied-multimodal-intelligence", "test-time-learning-inference-scaling", "verification-evaluation-safety"]
keywords: ["reasoning segmentation", "chain of thought", "self-correction", "retrieval augmentation", "visual grounding"]
difficulty: "intermediate"
prerequisites: ["image segmentation", "multimodal LLMs", "visual grounding", "retrieval-augmented generation"]
readingPaths: []
relatedPapers: ["attwarp", "tangramsr", "agent0-vl"]
readNext: ["attwarp", "tangramsr"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=BtHRvwzJj8", "https://arxiv.org/abs/2601.17420"]
summaryEn: "CoT-Seg is a training-free pipeline that decomposes an implicit visual query, generates a target mask, evaluates that mask against the query and reasoning trace, and iteratively corrects mismatches."
summaryZh: "CoT-Seg 是无需训练的流程：先分解隐含视觉查询，生成目标掩码，再依据原查询与推理轨迹评估掩码，并迭代纠正不匹配。"
problemEn: "Reasoning segmentation fails on ambiguous language, visually similar objects, and out-of-domain knowledge; direct mask generation offers little opportunity to diagnose semantic mistakes."
problemZh: "推理分割在歧义语言、相似物体和分布外知识上容易失败；直接生成掩码也缺少诊断语义错误的机会。"
methodEn: "A pretrained MLLM turns the request into fine-grained meta-instructions, optionally retrieves missing knowledge, identifies the object, and calls a segmenter. A self-evaluation stage compares the result with the reasoning and requests refinements."
methodZh: "预训练 MLLM 把请求转成细粒度元指令，必要时检索缺失知识，识别对象并调用分割器；自评阶段把结果与推理对照并请求修正。"
resultsEn: "The paper introduces ReasonSeg-Hard and reports stronger reliability and robustness than prior reasoning-segmentation approaches, especially on complex, ambiguous, and error-prone examples."
resultsZh: "论文提出 ReasonSeg-Hard，并报告其相较已有推理分割方法具有更强可靠性与稳健性，尤其适用于复杂、歧义和易错样例。"
limitationsEn: "The pipeline depends on proprietary-model reasoning and its self-evaluation can share the same blind spots as generation. Repeated calls and retrieval increase latency, and verbal confidence is not pixel-level proof."
limitationsZh: "流程依赖专有模型推理，自评可能与生成共享盲点；反复调用与检索增加延迟，语言层信心也不是像素级证明。"
whyReadEn: "It provides a visible multimodal correction loop where semantic reasoning and geometric output are checked against each other."
whyReadZh: "它提供了一个可见的多模态纠错闭环，让语义推理与几何输出彼此核对。"
feedbackSource: "Query–reasoning–mask consistency judged by the multimodal model"
updatedObject: "The target description and resulting segmentation mask"
updateMechanism: "Iterative self-evaluation, meta-query revision, and re-segmentation"
successSignal: "A mask that better matches the implicit visual request"
loopSummaryEn: "Decompose the query → segment a target → inspect mismatches → revise the target description → segment again."
loopSummaryZh: "分解查询 → 分割目标 → 检查不匹配 → 修订目标描述 → 再次分割。"
---

Evidence note: the workshop paper and arXiv abstract were checked.

证据说明：已核对工作坊论文与 arXiv 摘要。
