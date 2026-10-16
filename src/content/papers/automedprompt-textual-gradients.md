---
title: "Self-Improving Clinical Reasoning via Textual Gradients"
titleZh: "通过文本梯度实现自我改进的临床推理"
authors: ["Sean Wu", "Fabien Scalzo", "Ira Kurtz"]
presentation: "poster"
year: 2026
sourceIndex: 26
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=VOa0lDJ5Ui"},{"kind":"arxiv","url":"https://arxiv.org/abs/2502.15944"},{"kind":"code","url":"https://github.com/SeanWu25/AutoMedPrompt"}]
themes: ["scientific-discovery-applications", "test-time-learning-inference-scaling", "verification-evaluation-safety"]
keywords: ["AutoMedPrompt", "textual gradients", "clinical reasoning", "prompt optimization", "medical QA"]
difficulty: "intermediate"
prerequisites: ["medical question answering", "prompt optimization", "textual gradients", "LLM evaluation"]
readingPaths: []
relatedPapers: ["lang-pinn", "adaptive-meta-curriculum", "contextual-drag"]
readNext: ["contextual-drag", "adaptive-meta-curriculum"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=VOa0lDJ5Ui", "https://arxiv.org/abs/2502.15944", "https://github.com/SeanWu25/AutoMedPrompt"]
summaryEn: "AutoMedPrompt uses natural-language critiques as textual gradients to iteratively optimize a system prompt for medical reasoning, improving a general Llama 3 model without changing its weights."
summaryZh: "AutoMedPrompt 把自然语言批评当作文本梯度，迭代优化面向医学推理的系统提示，在不修改模型权重的情况下提升通用 Llama 3。"
problemEn: "Fine-tuning specialist medical models is expensive, while fixed chain-of-thought and few-shot prompts may be mismatched to a subspecialty or waste context on irrelevant examples."
problemZh: "微调专科医疗模型成本高，而固定思维链和少样本提示可能不适合某个亚专科，或被无关示例浪费上下文。"
methodEn: "TextGrad evaluates model answers, expresses shortcomings as textual gradients, and proposes revised system prompts in a gradient-descent-like loop. The optimized prompt is then used with an open-weight Llama 3 model on medical QA."
methodZh: "TextGrad 评估模型回答，把不足表达成文本梯度，并在类似梯度下降的循环中提出修订系统提示；优化后的提示再用于开源权重 Llama 3 的医学问答。"
resultsEn: "The paper reports 82.6% accuracy on PubMedQA, 77.7% on MedQA, and 63.8% on the nephrology-specific NephSAP. On PubMedQA, the optimized prompt improves over Llama 3 zero-shot by 11 points and over the fixed DeepSeek R1 chain-of-thought prompt by 11.2 points."
resultsZh: "论文报告在 PubMedQA、MedQA 与肾脏专科 NephSAP 上分别达到 82.6%、77.7% 和 63.8%。在 PubMedQA 上，优化提示比 Llama 3 零样本提高 11 点，比固定 DeepSeek R1 思维链提示提高 11.2 点。"
limitationsEn: "These are multiple-choice or structured QA benchmarks, not clinical deployment. Prompt optimization can overfit validation examples, and higher benchmark accuracy does not establish diagnostic safety, calibration, or patient benefit."
limitationsZh: "这些是选择题或结构化问答基准，并非临床部署；提示优化可能过拟合验证样本，更高基准准确率也不能证明诊断安全、校准性或患者获益。"
whyReadEn: "It is an accessible example of self-improvement that updates an interpretable artifact—the system prompt—instead of model parameters."
whyReadZh: "它是易理解的自我改进案例：更新的是可解释的系统提示，而不是模型参数。"
feedbackSource: "Natural-language critiques of errors on medical QA examples"
updatedObject: "The medical system prompt"
updateMechanism: "Iterative TextGrad-style prompt revision guided by textual gradients"
successSignal: "Higher accuracy on PubMedQA, MedQA, and NephSAP"
loopSummaryEn: "Answer medical questions → critique errors in text → convert critique into a prompt edit → evaluate the revised prompt → repeat."
loopSummaryZh: "回答医学问题 → 用文本批评错误 → 把批评转成提示修改 → 评估新提示 → 重复。"
---

Evidence note: the workshop paper, official repository, and related arXiv version were checked. The arXiv version is titled “AutoMedPrompt” and includes Michael Koo in its author list; the workshop metadata is preserved here.

证据说明：已核对工作坊论文、官方仓库与相关 arXiv 版本。arXiv 版本题为“AutoMedPrompt”，作者列表还包括 Michael Koo；本站保留工作坊元数据。
