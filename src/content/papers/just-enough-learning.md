---
title: "Just Enough Learning: GRPO-Guided Controllers for Hyperparameter Sweeps"
titleZh: "恰到好处的学习：用于替代超参数扫描的 GRPO 引导控制器"
authors: ["Justin H. Lee", "Henry Ndubuaku"]
presentation: "poster"
year: 2026
sourceIndex: 100
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=kKWSQsYgpa"}]
themes: ["scientific-discovery-applications", "memory-continual-adaptation"]
keywords: ["hyperparameter optimization", "GRPO", "learned optimizer", "learning-rate control", "amortized sweeps"]
difficulty: "advanced"
prerequisites: ["deep-learning optimization", "learning-rate schedules", "policy gradients", "GRPO"]
readingPaths: []
relatedPapers: ["scaling-law-discovery", "power-system-evolution", "unrolled-policy-iteration"]
readNext: ["scaling-law-discovery", "unrolled-policy-iteration"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=kKWSQsYgpa"]
summaryEn: "JEL learns a small controller that observes a training run and multiplicatively adjusts learning rate and weight decay on top of a strong optimizer. Its one-time reinforcement-learning cost is amortized across later deployments."
summaryZh: "JEL 学习一个小型控制器，观察训练进度并在强基础优化器之上乘法调整学习率与权重衰减；其一次性强化学习成本可由后续多次部署摊销。"
problemEn: "Every new model or dataset can require a costly hyperparameter sweep, even though useful scheduling patterns recur across training trajectories."
problemZh: "每个新模型或数据集都可能需要昂贵的超参数扫描，尽管训练轨迹中有效的调度规律会反复出现。"
methodEn: "At fixed intervals a compact policy reads training statistics and outputs corrections to optimizer settings. A modified GRPO objective removes length and per-group variance normalizations that would bias this control signal."
methodZh: "在固定间隔，小型策略读取训练统计并输出优化器设置的修正；修改后的 GRPO 去掉长度与组内方差归一化，以避免控制信号产生偏差。"
resultsEn: "On transformer pretraining, JEL improves validation performance 2.5% over schedule-free optimizers at equal compute. Controller training costs about 5.6 runs and reaches within 8% of an extensive manual-search upper bound."
resultsZh: "在 Transformer 预训练中，JEL 在相同计算量下比无调度优化器的验证表现高 2.5%；控制器训练约需 5.6 次训练成本，达到大规模人工搜索上界的 8% 以内。"
limitationsEn: "Savings depend on reusing the controller enough times to amortize training. Transfer across architectures, scales, and data regimes may fail, and poor interventions can irreversibly damage a run."
limitationsZh: "节省取决于控制器被重复使用到足以摊销训练成本；跨架构、规模和数据条件的迁移可能失败，错误干预还可能不可逆地损害一次训练。"
whyReadEn: "It treats optimization experience as a reusable policy, turning repeated sweeps into a continual-learning problem rather than isolated black-box searches."
whyReadZh: "它把优化经验视为可复用策略，把反复扫描从孤立黑盒搜索转化为持续学习问题。"
feedbackSource: "Validation performance from completed model-training episodes"
updatedObject: "A controller policy that adjusts learning rate and weight decay during training"
updateMechanism: "Modified GRPO over episodic training trajectories"
successSignal: "Better validation performance per total compute than repeated hyperparameter sweeps"
loopSummaryEn: "Observe training progress → adjust optimizer settings → finish the run → score validation quality → update the reusable controller."
loopSummaryZh: "观察训练进度 → 调整优化器设置 → 完成训练 → 评估验证质量 → 更新可复用控制器。"
---

Evidence note: the accepted workshop paper was checked.

证据说明：已核对接收的工作坊论文。
