---
title: "One-Step Video Depth Estimation via Self-Distillation"
titleZh: "通过自蒸馏实现单步视频深度估计"
authors: ["Wenqing Cui", "Zhenyu Li", "Jian Shi", "Shariq Farooq Bhat", "Peter Wonka"]
presentation: "poster"
year: 2026
sourceIndex: 69
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=ucRjPd9HVU"},{"kind":"arxiv","url":"https://arxiv.org/abs/2601.22231"}]
themes: ["embodied-multimodal-intelligence", "recursive-models-architectures"]
keywords: ["video depth", "self-distillation", "diffusion models", "one-step inference", "decoder compression"]
difficulty: "advanced"
prerequisites: ["diffusion models", "depth estimation", "knowledge distillation", "latent autoencoders"]
readingPaths: []
relatedPapers: ["test-time-self-distillation", "attwarp", "agent0-vl"]
readNext: ["test-time-self-distillation", "attwarp"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=ucRjPd9HVU", "https://arxiv.org/abs/2601.22231"]
summaryEn: "A multi-step diffusion depth model teaches a one-step student using its own latent representations, then its heavy decoder is distilled into a lightweight head. The result preserves accuracy while sharply reducing inference."
summaryZh: "多步扩散深度模型利用自身潜在表示教授单步学生，再把厚重解码器蒸馏成轻量头，从而在保持精度的同时显著减少推理开销。"
problemEn: "Diffusion video-depth models are accurate and temporally stable but iterative denoising and VAE decoding are too slow for real-time autonomous or dynamic settings."
problemZh: "扩散视频深度模型准确且时间一致，但迭代去噪与 VAE 解码过慢，难以用于实时自主或动态场景。"
methodEn: "Stage one distills the multi-step U-Net into one denoising step with score matching and latent-gradient matching. Stage two aligns features and pixels to replace the VAE decoder with a lightweight prediction head."
methodZh: "第一阶段用分数匹配与潜在梯度匹配，把多步 U-Net 蒸馏为一步去噪；第二阶段通过特征与像素对齐，用轻量预测头替代 VAE 解码器。"
resultsEn: "The distilled models match the original DepthCrafter's accuracy while reducing U-Net inference time by up to 3× and decoder time by up to 20×, without external ground-truth depth labels."
resultsZh: "蒸馏模型在无需外部深度真值的情况下匹配原始 DepthCrafter 精度，同时将 U-Net 推理时间最多缩短 3 倍、解码时间最多缩短 20 倍。"
limitationsEn: "Matching benchmark accuracy does not guarantee identical temporal failure behavior, and compression is tied to a specific teacher family. The student cannot surpass blind spots absent from teacher supervision."
limitationsZh: "匹配基准精度不保证时间维度失败模式完全相同，压缩也绑定特定教师架构；学生无法突破教师监督中没有暴露的盲点。"
whyReadEn: "It demonstrates self-improvement as capability compression: an expensive iterative model converts its own knowledge into a deployable fast successor."
whyReadZh: "它展示了作为能力压缩的自我改进：昂贵迭代模型把自身知识转化为可部署的快速后继模型。"
feedbackSource: "Teacher latent scores, latent gradients, decoder features, and pixel predictions"
updatedObject: "The one-step U-Net student and lightweight depth decoder"
updateMechanism: "Two-stage self-distillation in latent and output spaces"
successSignal: "Teacher-level depth accuracy with much lower denoising and decoding latency"
loopSummaryEn: "Run the multi-step teacher → match its latent dynamics → distill decoder features → evaluate the one-step student."
loopSummaryZh: "运行多步教师 → 匹配潜在动态 → 蒸馏解码特征 → 评估单步学生。"
---

Evidence note: the workshop paper, arXiv record, and first-author publication page were checked.

证据说明：已核对工作坊论文、arXiv 记录与第一作者发表页。
