---
title: "Towards Execution-Grounded Automated AI Research"
titleZh: "迈向执行落地的自动化 AI 研究"
authors: ["Chenglei Si", "Zitong Yang", "Yejin Choi", "Emmanuel Candès", "Diyi Yang", "Tatsunori Hashimoto"]
presentation: "spotlight"
year: 2026
sourceIndex: 7
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=gpLJamvbsK"},{"kind":"arxiv","url":"https://arxiv.org/abs/2601.14525"}]
themes: ["scientific-discovery-applications", "agents-tools-code-evolution", "verification-evaluation-safety"]
keywords: ["automated AI research", "execution feedback", "evolutionary search", "reinforcement learning", "GPU experiments"]
difficulty: "advanced"
prerequisites: ["LLM agents", "evolutionary search", "reinforcement learning", "LLM pre-training and post-training"]
readingPaths: [{"id":"entry","order":8},{"id":"agent-evolution","order":3},{"id":"safety-failure-modes","order":3}]
relatedPapers: ["posttrainbench", "scaling-law-discovery", "agent0"]
readNext: ["scaling-law-discovery", "posttrainbench"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2601.14525"]
summaryEn: "This work closes the gap between plausible research ideas and working methods by giving an automated executor access to realistic GPU environments, then using measured execution results to guide evolutionary search or reinforcement learning over new ideas."
summaryZh: "该工作用自动执行器把“听起来合理的研究想法”真正实现并放入 GPU 环境测试，再利用实测结果引导进化搜索或强化学习，从而把自动化科研建立在执行证据而非文字说服力上。"
problemEn: "Frontier LLMs can generate convincing AI research ideas, but many fail when implemented; it was also unclear whether models could learn from large-scale execution feedback."
problemZh: "前沿大模型能够生成听起来很有道理的 AI 研究想法，但许多实现后并无效果；模型能否从大规模执行反馈中学会提出更好想法也并不明确。"
methodEn: "An automated executor implements sampled ideas and launches parallel GPU experiments in two environments: LLM pre-training and post-training. The measured reward then drives either execution-guided evolutionary search or RL training of the idea generator."
methodZh: "自动执行器实现抽样出的研究想法，并在大模型预训练与后训练两个真实环境中并行启动 GPU 实验；测得的奖励再用于执行引导的进化搜索，或训练提出想法的模型。"
resultsEn: "Within ten search epochs, evolutionary search finds a post-training method scoring 69.4% versus the 48.0% GRPO baseline and a pre-training recipe taking 19.7 minutes versus nanoGPT's 35.9 minutes. RL raises average idea reward but not the upper bound because the ideator collapses toward simple ideas."
resultsZh: "仅十轮搜索内，进化方法找到的后训练方案得分 69.4%，高于 GRPO 基线的 48.0%；预训练方案耗时 19.7 分钟，优于 nanoGPT 的 35.9 分钟。强化学习虽提升平均想法奖励，却因模式坍塌到简单想法而未提高最好结果上限。"
limitationsEn: "The search often saturates early and shows scaling only occasionally. RL mode collapse means optimizing average execution reward can reduce idea diversity, and the executor itself must be reliable enough that implementation failures do not masquerade as bad research ideas."
limitationsZh: "搜索常常较早饱和，只有偶尔呈现随算力扩展的趋势。强化学习的模式坍塌说明优化平均执行奖励可能损害想法多样性；执行器还必须足够可靠，避免把实现失败误判为研究想法本身无效。"
whyReadEn: "It provides a concrete blueprint for automated science in which hypotheses earn credit only after code runs and measurements return."
whyReadZh: "它给出了自动化科学的具体蓝图：研究假设只有在代码真正运行并返回测量结果后才获得信用。"
feedbackSource: "Measured rewards and logs from executed pre-training and post-training experiments"
updatedObject: "The population of research ideas or the parameters of the idea-generating model"
updateMechanism: "Execution-guided evolutionary selection or reinforcement learning from execution reward"
successSignal: "A reproducibly better post-training score or faster pre-training recipe under the same environment"
loopSummaryEn: "Propose an idea → implement it automatically → run a GPU experiment → measure reward → select or train the ideator → propose the next generation."
loopSummaryZh: "提出想法 → 自动实现 → 运行 GPU 实验 → 测量奖励 → 选择想法或训练提案模型 → 生成下一代方案。"
---

Evidence note: the arXiv abstract was checked; full-text section verification remains pending.

证据说明：已核对 arXiv 摘要，论文全文分节核对仍待完成。
