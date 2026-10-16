---
title: "Log-Augmented Generation: Scaling Test-Time Reasoning with Reusable Computation"
titleZh: "日志增强生成：用可复用计算扩展测试时推理"
authors: ["Peter Baile Chen", "Yi Zhang", "Dan Roth", "Samuel Madden", "Jacob Andreas", "Michael Cafarella"]
presentation: "poster"
year: 2026
sourceIndex: 84
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=32xd2HdB9m"},{"kind":"arxiv","url":"https://arxiv.org/abs/2505.14398"},{"kind":"project","url":"https://peterbaile.github.io/lag/"}]
themes: ["memory-continual-adaptation", "test-time-learning-inference-scaling"]
keywords: ["log reuse", "KV cache", "test-time learning", "agent memory", "retrieval"]
difficulty: "advanced"
prerequisites: ["transformer KV cache", "retrieval-augmented generation", "LLM agents", "test-time inference"]
readingPaths: []
relatedPapers: ["reasoning-cache", "simplemem", "ace-context-engineering"]
readNext: ["reasoning-cache", "ace-context-engineering"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=32xd2HdB9m", "https://arxiv.org/abs/2505.14398", "https://peterbaile.github.io/lag/"]
summaryEn: "Log-Augmented Generation stores selected token KV states from earlier task logs and retrieves them for new tasks. It reuses prior computation directly rather than converting experience into textual reflections."
summaryZh: "日志增强生成保存旧任务日志中部分 token 的 KV 状态，并在新任务中检索使用；它直接复用先前计算，而不是先把经验压缩成文字反思。"
problemEn: "Agents repeatedly recompute similar reasoning, while full textual logs are noisy and long and reflection-based memories may discard details during extraction."
problemZh: "智能体会反复计算相似推理；完整文本日志既嘈杂又很长，而基于反思的记忆在提炼时可能丢失细节。"
methodEn: "Past interactions are represented by KV values for a selected subset of tokens. A retriever finds relevant logs, and their cached internal states augment generation while keeping storage and context growth manageable."
methodZh: "旧交互由一小部分 token 的 KV 值表示；检索器找到相关日志后，用其缓存内部状态增强生成，同时控制存储量与上下文增长。"
resultsEn: "On knowledge- and reasoning-intensive datasets, LAG reports significant gains over agents without logs and over reflection- and KV-cache-based alternatives, while emphasizing reusable rather than merely faster computation."
resultsZh: "在知识密集与推理密集数据集上，LAG 报告显著优于不使用日志的智能体以及反思和 KV 缓存替代方案，重点是复用计算而非只加速推理。"
limitationsEn: "Cached states are tied to a model architecture and checkpoint, complicating portability and updates. Retrieval mistakes can inject opaque internal context, and storing KV values may still be expensive at scale."
limitationsZh: "缓存状态与具体模型架构和检查点绑定，难以迁移或升级；错误检索会注入不透明的内部上下文，大规模存储 KV 值仍可能昂贵。"
whyReadEn: "It reframes agent memory as reusable neural computation, offering a distinct alternative to summaries, playbooks, and textual episodic memory."
whyReadZh: "它把智能体记忆重新定义为可复用的神经计算，为摘要、行动手册和文本情景记忆提供了不同路线。"
feedbackSource: "Performance on new tasks after retrieving semantically related prior reasoning logs"
updatedObject: "An external store of selected KV-cache states and its retrieval index"
updateMechanism: "Save compact internal states from completed tasks and retrieve them at inference"
successSignal: "Higher accuracy with less repeated reasoning and bounded log representation"
loopSummaryEn: "Solve a task → store selected KV states → retrieve related logs → augment a new generation → store the new experience."
loopSummaryZh: "解决任务 → 保存选定 KV 状态 → 检索相关日志 → 增强新一轮生成 → 存入新经验。"
---

Evidence note: the workshop paper, current arXiv record, and official project page were checked.

证据说明：已核对工作坊论文、当前 arXiv 记录与官方项目页。
