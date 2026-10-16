---
title: "Adaptive Decoding via Test-Time Policy Learning for Self-Improving Generation"
titleZh: "通过测试时策略学习实现自改进生成的自适应解码"
authors: ["Asmita Bhardwaj", "Yuya Jeremy Ong", "Eelaaf Zahid", "Basel Shbita"]
presentation: "poster"
year: 2026
sourceIndex: 77
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=7fIqKZ92Fy"},{"kind":"arxiv","url":"https://arxiv.org/abs/2603.18428"}]
themes: ["test-time-learning-inference-scaling", "foundations-recursive-computation"]
keywords: ["adaptive decoding", "test-time learning", "sampling policy", "summarization", "reinforcement learning"]
difficulty: "intermediate"
prerequisites: ["language-model decoding", "temperature sampling", "reinforcement learning", "text evaluation"]
readingPaths: []
relatedPapers: ["test-time-self-distillation", "textbo", "compute-as-teacher"]
readNext: ["test-time-self-distillation", "textbo"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=7fIqKZ92Fy", "https://arxiv.org/abs/2603.18428"]
summaryEn: "A lightweight RL policy adjusts decoding controls such as temperature and top-p during generation while the base LLM remains frozen. Decoding becomes sequential control rather than a fixed heuristic chosen once."
summaryZh: "轻量强化学习策略在生成过程中动态调整温度、top-p 等解码参数，而基础大模型保持冻结；解码因此从一次性固定启发式变成序贯控制。"
problemEn: "Greedy and fixed sampling policies are task-agnostic, although summarization domains differ in desired length, coverage, repetition, completeness, and style."
problemZh: "贪心与固定采样策略不区分任务，但不同摘要领域对长度、覆盖、重复、完整性与风格的需求并不相同。"
methodEn: "The decoder sampler observes generation state and chooses sampling parameters step by step. Composite rewards covering overlap, length, coverage, repetition, and completeness train the policy without changing LLM weights."
methodZh: "解码采样器观察生成状态并逐步选择采样参数；覆盖重合度、长度、覆盖率、重复与完整性的复合奖励训练策略，无需修改大模型权重。"
resultsEn: "On BookSum, arXiv, and WikiHow with Granite-3.3-2B and Qwen-2.5-0.5B, the policy beats greedy and static baselines, with relative gains up to 88% and 79%; composite shaping is more stable than overlap alone."
resultsZh: "在 BookSum、arXiv 与 WikiHow 上，使用 Granite-3.3-2B 和 Qwen-2.5-0.5B 的策略优于贪心与静态基线，相对提升最高 88% 与 79%；复合塑形也比仅用重合度更稳定。"
limitationsEn: "The percentages are relative and tied to chosen metrics and small models. Reward shaping can encode style preferences poorly, and learning a decoder policy still requires task feedback at inference."
limitationsZh: "百分比是相对提升，受所选指标与小模型影响；奖励塑形可能错误编码风格偏好，而且学习解码策略仍需测试时任务反馈。"
whyReadEn: "It identifies decoding itself as a trainable test-time component, offering a low-parameter alternative to repeatedly fine-tuning the generator."
whyReadZh: "它把解码本身识别为可学习的测试时组件，为反复微调生成器提供了低参数替代方案。"
feedbackSource: "Composite quality rewards over partial and completed generations"
updatedObject: "A lightweight policy controlling decoding parameters"
updateMechanism: "Test-time reinforcement learning over sequential sampling decisions"
successSignal: "Higher domain-specific generation quality with frozen base-model weights"
loopSummaryEn: "Observe generation state → choose sampling controls → generate → score structure and content → update the decoder policy."
loopSummaryZh: "观察生成状态 → 选择采样控制 → 生成 → 评价结构与内容 → 更新解码策略。"
---

Evidence note: the workshop paper and current arXiv abstract were checked.

证据说明：已核对工作坊论文与当前 arXiv 摘要。
