---
title: "Escaping Model Collapse via Synthetic Data Verification: Near-term Improvements and Long-term Convergence"
titleZh: "通过合成数据验证逃离模型坍塌：短期改进与长期收敛"
authors: ["Bingji Yi", "Qiyuan Liu", "Yuwei Cheng", "Haifeng Xu"]
presentation: "poster"
year: 2026
sourceIndex: 37
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=YzDC5hjGUM"},{"kind":"arxiv","url":"https://arxiv.org/abs/2510.16657"}]
themes: ["self-play-synthetic-data-curriculum", "verification-evaluation-safety", "foundations-recursive-computation"]
keywords: ["model collapse", "synthetic data", "external verification", "iterative retraining", "long-term convergence"]
difficulty: "advanced"
prerequisites: ["synthetic-data training", "linear regression", "generative modeling", "iterative learning dynamics"]
readingPaths: []
relatedPapers: ["language-self-play", "self-evolving-rubrics", "contextual-drag"]
readNext: ["language-self-play", "self-evolving-rubrics"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2510.16657", "https://proceedings.iclr.cc/paper_files/paper/2026/hash/29806b2e4dcb35e42abed21d43e2b7d8-Abstract-Conference.html"]
summaryEn: "This paper analyzes iterative retraining on self-generated data when an external verifier filters examples. Verification can prevent immediate collapse and yield early gains, but the model ultimately converges toward the verifier's own knowledge center."
summaryZh: "论文分析在外部验证器筛选样本时，模型反复用自生成数据重训的动态。验证可以避免立即坍塌并带来早期收益，但模型最终会收敛到验证器自身的知识中心。"
problemEn: "Synthetic-data loops may progressively lose diversity and accuracy. Short-term improvement curves do not reveal whether repeated generations converge to truth, stagnate, or reverse."
problemZh: "合成数据闭环可能逐轮丢失多样性与准确性；短期上升曲线无法说明反复生成最终会趋近真实、停滞还是反转。"
methodEn: "The authors study verifier-guided synthetic retraining theoretically in linear regression and test the predictions in linear models, MNIST VAEs, and SmolLM2-135M fine-tuning on XSUM. A human or stronger model supplies external information by accepting or rejecting synthetic samples."
methodZh: "作者在线性回归中理论分析验证器引导的合成重训，并在线性模型、MNIST VAE 与 SmolLM2-135M 的 XSUM 微调中验证预测；人类或更强模型通过接受或拒绝合成样本注入外部信息。"
resultsEn: "Verification avoids classic collapse and can improve the model in the near term. Unless the verifier is perfectly reliable, gains plateau and may reverse as repeated retraining approaches the verifier's bias."
resultsZh: "验证能避免典型模型坍塌，并在短期改进模型；但若验证器并非完全可靠，随着反复重训逼近验证器偏差，收益会饱和甚至反转。"
limitationsEn: "The cleanest guarantees come from linear regression, while neural experiments remain relatively small. Real data pipelines may use correlated generators, adaptive verifiers, and selection effects outside the theory."
limitationsZh: "最清晰保证来自线性回归，神经网络实验规模相对较小；现实数据流程中的生成器相关性、自适应验证器与选择效应可能超出理论。"
whyReadEn: "It separates “verification prevents collapse now” from the stronger and often false claim that verification guarantees indefinite self-improvement."
whyReadZh: "它区分了“验证现在能防坍塌”与更强但常错误的“验证保证无限自我改进”。"
feedbackSource: "Accept/reject decisions from an external human or stronger-model verifier"
updatedObject: "The model retrained on filtered synthetic data"
updateMechanism: "Repeated generation, verification, filtering, and retraining"
successSignal: "Near-term error reduction without long-run drift beyond the verifier's knowledge center"
loopSummaryEn: "Generate synthetic data → verify samples externally → retrain on accepted data → regenerate → track whether gains plateau or reverse."
loopSummaryZh: "生成合成数据 → 外部验证样本 → 用通过样本重训 → 再生成 → 监控收益是否饱和或反转。"
---

Evidence note: the arXiv abstract and official ICLR 2026 abstract were checked.

证据说明：已核对 arXiv 摘要与 ICLR 2026 官方摘要。
