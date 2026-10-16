---
title: "Learning What to Learn: Curriculum Curation for Test-Time Agent Learning"
titleZh: "学会该学什么：面向测试时智能体学习的课程筛选"
authors: ["Qizheng Zhang", "Sherry Ruan", "Shubhangi Upasani", "Fenglu Hong", "Changxiu Ji", "Changran Hu", "Bo Li", "Hanchen Li", "Kunle Olukotun"]
presentation: "poster"
year: 2026
sourceIndex: 60
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=TRQLuxgxBN"}]
themes: ["test-time-learning-inference-scaling", "self-play-synthetic-data-curriculum", "agents-tools-code-evolution"]
keywords: ["test-time learning", "curriculum curation", "context adaptation", "task ordering", "AppWorld"]
difficulty: "intermediate"
prerequisites: ["LLM agents", "in-context learning", "curriculum learning", "tool-use benchmarks"]
readingPaths: []
relatedPapers: ["adaptive-meta-curriculum", "actor-curator", "automedprompt-textual-gradients"]
readNext: ["actor-curator", "adaptive-meta-curriculum"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=TRQLuxgxBN"]
summaryEn: "This paper studies which experiences a tool-using agent should place into its test-time learning context and in what order. It shows that curated, non-redundant examples can match a much larger experience set."
summaryZh: "该论文研究工具使用智能体在测试时学习上下文中应放入哪些经验、按什么顺序放置，并表明精选的非冗余样例可以匹配大得多的经验集合。"
problemEn: "Test-time agent-learning methods often treat every past task as equally useful, wasting context on easy or repetitive examples and ignoring order effects."
problemZh: "测试时智能体学习通常把所有历史任务视为同等有用，既浪费上下文在简单或重复样例上，也忽略了顺序效应。"
methodEn: "Using Agentic Context Engineering on AppWorld, the study varies task selection and ordering for context-based adaptation, testing whether diversity and difficulty-aware curricula improve sample efficiency."
methodZh: "研究在 AppWorld 上使用 Agentic Context Engineering，改变上下文适应中的任务选择与排序，检验考虑多样性和难度的课程能否提升样本效率。"
resultsEn: "Careful selection matches full-dataset performance with roughly 30% of the training tasks, and changing task order measurably changes learning outcomes for tool-use and coding agents."
resultsZh: "精心选择约 30% 的训练任务即可匹配完整数据集性能，而且任务顺序会显著影响工具使用与编程智能体的学习结果。"
limitationsEn: "Evidence comes from one benchmark and one context-engineering family. Static curation rules may age as the agent changes, and matching average performance can hide loss of rare capabilities."
limitationsZh: "证据来自一个基准与一类上下文工程方法；随着智能体变化，静态筛选规则可能失效，而平均性能持平也可能掩盖稀有能力损失。"
whyReadEn: "It makes a practical point for personal and agent learning alike: more examples are not automatically a better curriculum."
whyReadZh: "它对个人学习与智能体学习都有实际启示：更多样例并不自动等于更好的课程。"
feedbackSource: "Downstream AppWorld performance under different experience subsets and orders"
updatedObject: "The agent's test-time learning context"
updateMechanism: "Select and sequence high-value, non-redundant prior tasks"
successSignal: "Full-data-level performance with substantially fewer context examples"
loopSummaryEn: "Score prior tasks → select a compact curriculum → order examples → adapt the agent in context → measure and recurate."
loopSummaryZh: "评估历史任务 → 选择紧凑课程 → 排序样例 → 在上下文中适应智能体 → 测量并重新筛选。"
---

Evidence note: the workshop paper and public author publication record were checked.

证据说明：已核对工作坊论文与公开作者发表记录。
