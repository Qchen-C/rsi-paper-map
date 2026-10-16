---
title: "Constructive Distortion: Improving MLLMs with Attention-Guided Image Warping"
titleZh: "建设性扭曲：用注意力引导图像变形改进多模态大模型"
authors: ["Dwip Dalal", "Gautam Vashishtha", "Utkarsh Mishra", "Jeonghwan Kim", "Madhav Kanda", "Hyeonjeong Ha", "Svetlana Lazebnik", "Heng Ji", "Unnat Jain"]
presentation: "poster"
year: 2026
sourceIndex: 59
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=sSwXGq1RRI"},{"kind":"arxiv","url":"https://arxiv.org/abs/2510.09741"},{"kind":"project","url":"https://vision.ics.uci.edu/papers/constructive-distortion-improving-mllms-with-attention-guided-image-2025/"}]
themes: ["embodied-multimodal-intelligence", "test-time-learning-inference-scaling", "recursive-models-architectures"]
keywords: ["multimodal LLM", "attention warping", "visual grounding", "test-time adaptation", "hallucination"]
difficulty: "intermediate"
prerequisites: ["vision-language models", "cross-modal attention", "image resampling", "visual question answering"]
readingPaths: []
relatedPapers: ["agent0-vl", "tangramsr", "rftf-temporal-feedback"]
readNext: ["tangramsr", "agent0-vl"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=sSwXGq1RRI", "https://arxiv.org/abs/2510.09741", "https://vision.ics.uci.edu/papers/constructive-distortion-improving-mllms-with-attention-guided-image-2025/"]
summaryEn: "AttWarp uses an MLLM's own query-conditioned attention to non-uniformly warp the input image, allocating more pixels to relevant regions while preserving the complete scene. The frozen model then answers again from the improved view."
summaryZh: "AttWarp 使用多模态大模型自身面向查询的注意力，对输入图像做非均匀变形，在保留完整场景的同时为相关区域分配更多像素，再让冻结模型重新回答。"
problemEn: "MLLMs often miss small objects and spatial relations in clutter, while cropping can remove global context and adding more uniformly sampled visual tokens is expensive."
problemZh: "多模态大模型常漏掉拥挤场景中的小物体与空间关系；裁剪会丢失全局上下文，而均匀增加视觉 token 又很昂贵。"
methodEn: "Cross-modal attention is reduced into spatial importance distributions that define a rectilinear resampling map. AttWarp-Chain can repeat the process because a better warped view produces a new attention map for the next refinement."
methodZh: "跨模态注意力被归约为空间重要性分布，用于定义矩形重采样映射；AttWarp-Chain 可重复该过程，因为改进后的视图会产生下一轮所需的新注意力图。"
resultsEn: "Across TextVQA, GQA, DocVQA, POPE, and MMMU with four MLLM families, the paper reports consistent accuracy gains, stronger compositional reasoning, and fewer hallucinations than four test-time image-manipulation baselines."
resultsZh: "在 TextVQA、GQA、DocVQA、POPE 与 MMMU 及四类 MLLM 上，论文报告准确率持续提升、组合推理增强、幻觉减少，并优于四种测试时图像处理基线。"
limitationsEn: "The loop trusts the model's initial attention, so badly misplaced attention can reinforce the wrong region. Warping may distort geometry, and repeated model passes add latency."
limitationsZh: "闭环信任模型初始注意力，若注意位置严重错误，可能进一步强化错误区域；图像变形也可能扭曲几何关系，多次模型前向会增加延迟。"
whyReadEn: "It is an intuitive, weight-free self-correction loop in which the model changes what it sees based on evidence from its own first look."
whyReadZh: "这是一个直观、无需改权重的自校正闭环：模型根据第一次观察产生的证据，改变自己下一次看到的输入。"
feedbackSource: "The frozen MLLM's query-conditioned cross-modal attention maps"
updatedObject: "The spatial sampling distribution of the input image"
updateMechanism: "Rectilinear attention-guided warping, optionally repeated as a chain"
successSignal: "More accurate grounded answers with fewer hallucinations"
loopSummaryEn: "Inspect the image → extract attention → warp resolution toward salient regions → inspect again → optionally repeat."
loopSummaryZh: "查看图像 → 提取注意力 → 把分辨率变形到关键区域 → 再查看 → 可选继续迭代。"
---

Evidence note: the ICLR paper, arXiv abstract, and author project page were checked.

证据说明：已核对 ICLR 论文、arXiv 摘要与作者项目页。
