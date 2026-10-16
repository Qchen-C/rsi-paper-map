---
title: "Self-Improving World Models via Asymmetric Forward-Inverse Consistency"
titleZh: "通过非对称前向-逆向一致性实现自我改进的世界模型"
authors: ["Yuejiang Liu", "Fan Feng", "Lingjing Kong", "Weifeng Lu", "Jinzhou Tang", "Kun Zhang", "Kevin Murphy", "Chelsea Finn", "Yilun Du"]
presentation: "spotlight"
year: 2026
sourceIndex: 10
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=ajcjip0yFR"},{"kind":"arxiv","url":"https://arxiv.org/abs/2604.01985"},{"kind":"project","url":"https://world-action-verifier.github.io/"}]
themes: ["embodied-multimodal-intelligence", "verification-evaluation-safety", "recursive-models-architectures"]
keywords: ["world models", "World Action Verifier", "forward-inverse consistency", "cycle consistency", "robotics"]
difficulty: "advanced"
prerequisites: ["world models", "inverse dynamics", "model-based reinforcement learning", "robot learning"]
readingPaths: [{"id":"entry","order":10},{"id":"safety-failure-modes","order":4}]
relatedPapers: ["contextual-drag", "agent0"]
readNext: ["contextual-drag"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2604.01985", "https://world-action-verifier.github.io/"]
summaryEn: "The current paper version calls the method World Action Verifier (WAV): a world model proposes diverse subgoals, checks whether they are plausible and reachable with a sparse inverse model, and uses forward-inverse cycle consistency to identify errors in under-explored action regions."
summaryZh: "论文当前版本将方法称为 World Action Verifier（WAV）：世界模型先提出多样子目标，再分别检查状态是否合理、动作是否可达，并用稀疏逆模型与前向 rollout 的循环一致性识别低覆盖动作区域中的预测错误。"
problemEn: "World models must remain reliable over many suboptimal actions that policy datasets rarely cover, making direct action-conditioned prediction brittle exactly where planning needs exploration."
problemZh: "世界模型必须在大量次优动作上保持可靠，但策略数据通常很少覆盖这些区域，导致动作条件预测恰恰在规划需要探索时最脆弱。"
methodEn: "WAV decomposes verification into state plausibility and action reachability. It combines a video-trained diverse subgoal generator with a sparse inverse model, then enforces consistency among proposed subgoals, inferred actions, and forward rollouts."
methodZh: "WAV 把验证拆为状态合理性与动作可达性两部分：使用视频数据训练的多样子目标生成器和稀疏逆模型，并在候选子目标、推断动作和前向 rollout 之间施加一致性约束。"
resultsEn: "Across nine MiniGrid, RoboMimic, and ManiSkill tasks, the abstract reports twice the sample efficiency and more than 22% improvement in downstream policy performance."
resultsZh: "在 MiniGrid、RoboMimic 与 ManiSkill 的九个任务上，摘要报告其样本效率提升 2 倍，下游策略性能提升超过 22%。"
limitationsEn: "The method assumes plausibility and reachability are easier to verify than full forward prediction and relies on suitable action-free video plus sparse inverse features. Evidence is currently limited to nine simulated or benchmark robotics tasks."
limitationsZh: "该方法假设状态合理性与动作可达性比完整前向预测更容易验证，并依赖合适的无动作视频和稀疏逆特征；当前证据仍局限于九个模拟或基准机器人任务。"
whyReadEn: "WAV shows how a generative model can become its own critic by exploiting an easier inverse check, a recurring pattern in verifiable self-improvement."
whyReadZh: "WAV 展示了生成模型如何利用更容易的逆向检查充当自己的批评者，这是可验证自我改进中的典型模式。"
feedbackSource: "Cycle-consistency violations among proposed subgoals, inferred actions, and forward predictions"
updatedObject: "The action-conditioned world model and the data used in under-explored regimes"
updateMechanism: "Self-training guided by decomposed plausibility and reachability verification"
successSignal: "More consistent rollouts, higher sample efficiency, and stronger downstream policy performance"
loopSummaryEn: "Propose a subgoal → infer a sparse action → roll the world model forward → test cycle consistency → use verified errors to improve the model."
loopSummaryZh: "提出子目标 → 推断稀疏动作 → 用世界模型前向展开 → 检查循环一致性 → 利用经验证的错误改进模型。"
---

Evidence note: the workshop title is preserved; the arXiv version now uses the title “World Action Verifier.” The abstract and official project page were checked.

证据说明：保留研讨会原始标题；arXiv 当前版本已更名为“World Action Verifier”。已核对摘要与官方项目页。
