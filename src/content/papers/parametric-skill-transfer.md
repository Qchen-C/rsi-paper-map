---
title: "Knowledge is Not Enough: Injecting RL Skills for Continual Adaptation"
titleZh: "知识还不够：为持续适应注入强化学习技能"
authors: ["Pingzhi Tang", "Yiding Wang", "Muhan Zhang"]
presentation: "spotlight"
year: 2026
sourceIndex: 8
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=D93migx9av"},{"kind":"arxiv","url":"https://arxiv.org/abs/2601.11258"}]
themes: ["memory-continual-adaptation"]
keywords: ["Parametric Skill Transfer", "skill vector", "continual adaptation", "knowledge incorporation", "reinforcement learning"]
difficulty: "advanced"
prerequisites: ["supervised fine-tuning", "reinforcement learning", "parameter-space model editing", "tool use"]
readingPaths: [{"id":"entry","order":6},{"id":"memory-continual-learning","order":3}]
relatedPapers: ["agentic-memory-designs", "simplemem"]
readNext: ["agentic-memory-designs", "simplemem"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2601.11258"]
summaryEn: "Parametric Skill Transfer (PaST) separates learning new facts from learning how to use facts. After lightweight SFT adds target-domain knowledge, a reusable domain-agnostic Skill Vector extracted from RL training is linearly injected to restore reasoning and tool-use ability."
summaryZh: "参数化技能迁移（PaST）把“学到新事实”和“会使用事实”分开处理：轻量 SFT 先加入目标领域知识，再线性注入从强化学习中提取的、领域无关的技能向量，使模型具备推理和工具使用能力。"
problemEn: "SFT can update factual content without teaching a model to manipulate the new knowledge for QA or decisions, while repeating RL for every update is too expensive for continual adaptation."
problemZh: "SFT 可以写入新事实，却不一定教会模型如何用这些知识回答问题或做决策；如果每次更新都重新做强化学习，持续适应的成本又过高。"
methodEn: "The authors observe that SFT- and RL-induced parameter updates are nearly orthogonal. PaST extracts an RL Skill Vector in a source domain and adds it linearly to a target model after inexpensive SFT on new data."
methodZh: "作者发现 SFT 与 RL 引起的参数更新近乎正交。PaST 在源领域提取强化学习技能向量，再把它线性加入已通过低成本 SFT 学习新数据的目标模型。"
resultsEn: "PaST improves SQuAD by up to 9.9 points over a self-editing SFT baseline, gains 8.0 absolute accuracy points on long-context LooGLE, and raises zero-shot ToolBench success by 10.3 points on average across tool categories."
resultsZh: "PaST 在 SQuAD 上比自编辑 SFT 基线最高提升 9.9 分，在长上下文 LooGLE 上绝对准确率提升 8.0 分，并使 ToolBench 零样本工具调用成功率跨类别平均提升 10.3 分。"
limitationsEn: "The approach relies on approximate linear composability and near-orthogonality in parameter space. Abstract-level evidence does not establish whether repeated vector injections interfere, remain stable across architectures, or preserve safety behavior over many adaptation cycles."
limitationsZh: "该方法依赖参数空间中近似的线性可组合性与正交性。摘要证据尚未说明多次向量注入是否相互干扰、能否跨架构稳定迁移，或多轮适应后是否保持安全行为。"
whyReadEn: "PaST is a useful counterpoint to retrieval memory: it treats continual improvement as composing reusable parameter directions for knowledge and skill."
whyReadZh: "PaST 与检索式记忆形成鲜明对照：它把持续改进理解为可复用的知识与技能参数方向的组合。"
feedbackSource: "RL task rewards in a source domain plus new factual data in the target domain"
updatedObject: "Target model parameters after knowledge SFT"
updateMechanism: "Linear injection of a reusable RL-derived Skill Vector"
successSignal: "Improved knowledge QA and tool-use success without running target-domain RL"
loopSummaryEn: "Acquire a reusable skill with RL → extract its parameter direction → add new knowledge with lightweight SFT → inject the skill vector → evaluate adaptation."
loopSummaryZh: "通过 RL 学得可复用技能 → 提取参数方向 → 用轻量 SFT 写入新知识 → 注入技能向量 → 评估适应效果。"
---

Evidence note: the arXiv abstract was checked; full-text section verification remains pending.

证据说明：已核对 arXiv 摘要，论文全文分节核对仍待完成。
