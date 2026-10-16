---
title: "AUTOHARNESS: IMPROVING LLM AGENTS BY AUTOMATICALLY SYNTHESIZING A CODE HARNESS"
titleZh: "AUTOHARNESS：通过自动合成代码执行框架改进大模型智能体"
authors: ["Xinghua Lou", "Miguel Lázaro-Gredilla", "Antoine Dedieu", "Carter Wendelken", "Wolfgang Lehrach", "Kevin P. Murphy"]
presentation: "poster"
year: 2026
sourceIndex: 68
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=g9rEYVNn5T"},{"kind":"arxiv","url":"https://arxiv.org/abs/2603.03329"}]
themes: ["agents-tools-code-evolution", "verification-evaluation-safety", "test-time-learning-inference-scaling"]
keywords: ["code harness", "illegal actions", "agent scaffolding", "environment feedback", "policy synthesis"]
difficulty: "intermediate"
prerequisites: ["LLM agents", "code generation", "environment interfaces", "program testing"]
readingPaths: []
relatedPapers: ["ace-code-evolution", "simple-code-evolution-baselines", "code-agent-reward-hacking"]
readNext: ["code-agent-reward-hacking", "simple-code-evolution-baselines"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=g9rEYVNn5T", "https://arxiv.org/abs/2603.03329"]
summaryEn: "AutoHarness has an LLM write and iteratively refine deterministic code around itself to translate state into legal actions. In the extreme, the synthesized code becomes the whole policy and removes the LLM from decision-time execution."
summaryZh: "AutoHarness 让大模型为自己编写并迭代修正确定性代码框架，把环境状态转换为合法动作。极端情况下，合成代码会成为完整策略，决策时不再调用大模型。"
problemEn: "Agents frequently propose actions prohibited by their environment; manually written wrappers are effective but require domain engineering and may not scale across many games."
problemZh: "智能体经常提出环境明确禁止的动作；人工编写封装虽有效，却需要领域工程，难以扩展到大量游戏。"
methodEn: "A model synthesizes a game-specific harness, executes it against the environment, and revises code from failures over a few rounds. The same mechanism can expand from legality filtering to a complete code policy."
methodZh: "模型合成游戏特定 harness，在环境中执行，并根据失败用少量轮次修改代码；同一机制还能从合法性过滤扩展为完整代码策略。"
resultsEn: "The harness eliminates illegal moves across 145 one- and two-player TextArena games. Gemini-2.5-Flash with a harness beats larger models, while full code policies exceed Gemini-2.5-Pro and GPT-5.2-High average reward on 16 single-player games."
resultsZh: "该 harness 在 145 个单人和双人 TextArena 游戏中消除非法动作。配备 harness 的 Gemini-2.5-Flash 超过更大模型，完整代码策略还在 16 个单人游戏中超过 Gemini-2.5-Pro 与 GPT-5.2-High 的平均奖励。"
limitationsEn: "Game rules provide clear feedback unlike open-world tools. Generated wrappers can contain security bugs or overconstrain valid behavior, and eliminating illegal actions does not guarantee strategic quality."
limitationsZh: "游戏规则提供清晰反馈，而开放世界工具未必如此；生成封装可能含安全漏洞或过度约束合法行为，消除非法动作也不保证策略质量。"
whyReadEn: "It shows a practical route from probabilistic reasoning to durable deterministic capability: make the model compile recurring lessons into code."
whyReadZh: "它展示了从概率推理到持久确定性能力的实际路径：让模型把反复出现的经验编译成代码。"
feedbackSource: "Environment legality errors and game rewards from executing candidate harnesses"
updatedObject: "The deterministic code harness or complete code policy"
updateMechanism: "Iterative code synthesis, execution, and refinement from environment feedback"
successSignal: "Zero illegal actions and higher game reward at lower decision-time cost"
loopSummaryEn: "Generate harness code → execute in the game → observe invalid actions and reward → patch the harness → repeat."
loopSummaryZh: "生成 harness 代码 → 在游戏中执行 → 观察非法动作与奖励 → 修补 harness → 重复。"
---

Evidence note: the workshop paper and current arXiv abstract were checked; the original workshop-title capitalization is retained.

证据说明：已核对工作坊论文与当前 arXiv 摘要；本站保留工作坊标题原始大小写。
