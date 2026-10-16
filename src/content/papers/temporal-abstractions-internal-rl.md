---
title: "Emergent temporal abstractions in autoregressive models enable hierarchical reinforcement learning"
titleZh: "自回归模型中涌现的时间抽象实现分层强化学习"
authors: ["Seijin Kobayashi", "Yanick Schimpf", "Maximilian Schlegel", "Angelika Steger", "Maciej Wolczyk", "Johannes von Oswald", "Nino Scherrer", "Kaitlin Maile", "Guillaume Lajoie", "Blake A. Richards", "Rif A. Saurous", "James Manyika", "Blaise Agüera y Arcas", "Alexander Meulemans", "João Sacramento"]
presentation: "poster"
year: 2026
sourceIndex: 91
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=5UbKomO77O"},{"kind":"arxiv","url":"https://arxiv.org/abs/2512.20605"}]
themes: ["recursive-models-architectures", "embodied-multimodal-intelligence", "foundations-recursive-computation"]
keywords: ["temporal abstraction", "hierarchical reinforcement learning", "internal RL", "latent actions", "autoregressive models"]
difficulty: "advanced"
prerequisites: ["autoregressive models", "hierarchical reinforcement learning", "residual streams", "sparse-reward exploration"]
readingPaths: []
relatedPapers: ["generative-recursive-reasoning", "unrolled-policy-iteration", "self-directed-robot-learning"]
readNext: ["unrolled-policy-iteration", "generative-recursive-reasoning"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=5UbKomO77O", "https://arxiv.org/abs/2512.20605"]
summaryEn: "A higher-order sequence model learns latent controllers that steer a base autoregressive model's residual activations over many steps. Reinforcing these internal actions yields temporal abstractions with learned stopping rules."
summaryZh: "一个高阶序列模型学习潜在控制器，在多步范围内操纵基础自回归模型的残差激活；强化这些内部动作会形成带学习终止条件的时间抽象。"
problemEn: "Token-by-token or primitive-action exploration is inefficient under sparse rewards because useful behavior may require coordinated decisions over long horizons."
problemZh: "在稀疏奖励下，逐 token 或逐原始动作探索效率很低，因为有用行为往往需要跨长时程协调多个决策。"
methodEn: "A non-causal higher-order model compresses chunks of activation sequences into internal controllers. Internal RL selects and reinforces controllers whose execution produces meaningful multi-step behavior before a learned termination event."
methodZh: "非因果高阶模型把成段激活序列压缩为内部控制器；内部强化学习选择并强化这些控制器，使其在学习到的终止事件前执行有意义的多步行为。"
resultsEn: "On hierarchical grid-world and MuJoCo tasks, learned controllers compose into long-timescale behaviors and enable sparse-reward learning where standard RL fine-tuning fails."
resultsZh: "在分层网格世界与 MuJoCo 任务上，学习到的控制器可组合成长时间尺度行为，并能在标准强化微调失败的稀疏奖励场景中完成学习。"
limitationsEn: "Evidence comes from controlled embodied tasks rather than language-scale agents. The approach introduces an extra model and assumes access to internal activations, which limits black-box applicability."
limitationsZh: "证据来自受控具身任务而非语言规模智能体；方法增加一个额外模型并要求访问内部激活，因此不适用于纯黑盒模型。"
whyReadEn: "It offers a mechanistic path from autoregressive pretraining to options-like behavior, moving self-improvement from output tokens into the model's internal action space."
whyReadZh: "它给出了从自回归预训练通向类似 options 行为的机制路径，把自我改进从输出 token 推进到模型内部动作空间。"
feedbackSource: "Sparse environmental rewards assigned to sequences produced by latent controllers"
updatedObject: "A higher-order policy over residual-stream controllers and termination conditions"
updateMechanism: "Reinforcement learning directly over temporally extended internal actions"
successSignal: "Efficient exploration and task completion through reusable long-timescale behaviors"
loopSummaryEn: "Select an internal controller → execute a behavior chunk → stop at a learned boundary → observe reward → reinforce useful abstractions."
loopSummaryZh: "选择内部控制器 → 执行行为片段 → 在学习边界终止 → 观察奖励 → 强化有用抽象。"
---

Evidence note: the accepted workshop paper and current arXiv record were checked.

证据说明：已核对接收的工作坊论文与当前 arXiv 记录。
