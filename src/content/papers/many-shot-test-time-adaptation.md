---
title: "Test-Time Adaptation via Many-Shot Prompting: Benefits, Limits, and Pitfalls"
titleZh: "通过多示例提示进行测试时适应：收益、边界与陷阱"
authors: ["Shubhangi Upasani", "Chen Wu", "Jay Rainton", "Bo Li", "Urmish Thakker", "Changran Hu", "Qizheng Zhang"]
presentation: "short"
year: 2026
sourceIndex: 103
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=Ne0s3UOzdB"}]
themes: ["test-time-learning-inference-scaling", "memory-continual-adaptation"]
keywords: ["many-shot prompting", "in-context learning", "test-time adaptation", "example selection", "prompt ordering"]
difficulty: "entry"
prerequisites: ["few-shot prompting", "in-context learning", "long-context models"]
readingPaths: []
relatedPapers: ["in-context-adaptation", "contextual-drag", "test-time-self-distillation"]
readNext: ["in-context-adaptation", "contextual-drag"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=Ne0s3UOzdB"]
summaryEn: "This empirical study treats many-shot prompting as an input-space model update and measures how demonstration count, ordering, and selection alter behavior. More context helps selectively, not monotonically or universally."
summaryZh: "这项实证研究把多示例提示视为输入空间中的模型更新，并测量示例数量、顺序与选择如何改变行为；更多上下文只在特定条件下有益，并非单调或普遍有效。"
problemEn: "Long contexts make it easy to inject hundreds of examples, but practitioners lack reliable guidance on when this improves a model versus adding noise, bias, or fragile ordering effects."
problemZh: "长上下文使注入数百个示例变得容易，但实践者缺乏可靠依据来判断它何时改进模型、何时只增加噪声、偏差或脆弱的顺序效应。"
methodEn: "The authors vary update magnitude, example order, and selection policy across tasks and LLaMA backbones, and compare plain many-shot prompting with Dynamic and Reinforced ICL."
methodZh: "作者在多类任务和 LLaMA 骨干上改变更新规模、示例顺序与选择策略，并比较普通多示例提示、动态 ICL 与强化 ICL。"
resultsEn: "Structured classification and extraction tasks often improve until a moderate-size saturation point. Open-ended generation such as translation gains little, and results are highly sensitive to prompt organization."
resultsZh: "结构化分类与抽取任务通常会提升到中等规模后饱和；翻译等开放式生成收益很小，结果还对提示组织方式高度敏感。"
limitationsEn: "Findings center on selected LLaMA models and tasks, so optimal context size is not universal. Longer prompts increase latency and may crowd out instructions or evidence."
limitationsZh: "结论集中于选定 LLaMA 模型和任务，因此不存在通用最优上下文规模；更长提示会增加延迟，也可能挤压指令或证据。"
whyReadEn: "It is a useful corrective to 'more demonstrations are better' and gives practical criteria for deciding whether context is functioning as an effective update."
whyReadZh: "它纠正了“示例越多越好”的直觉，并给出判断上下文是否真正成为有效更新的实用依据。"
feedbackSource: "Task accuracy and generation quality under controlled demonstration sets"
updatedObject: "The model's inference context rather than its parameters"
updateMechanism: "Select, order, and inject many task demonstrations at test time"
successSignal: "Improved target-task performance without harmful saturation or prompt sensitivity"
loopSummaryEn: "Select demonstrations → arrange the context → run inference → measure task gains → revise the selection policy."
loopSummaryZh: "选择示例 → 组织上下文 → 执行推理 → 测量任务收益 → 调整选择策略。"
---

Evidence note: the public conference paper corresponding to the workshop listing was checked.

证据说明：已核对与工作坊条目对应的公开会议论文。
