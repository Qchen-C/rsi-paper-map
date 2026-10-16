---
title: "Self-Evolving Rubrics: Interpretable Instance-Level Criteria for Scalable RL"
titleZh: "自进化评分细则：面向可扩展强化学习的可解释实例级标准"
authors: ["Shuyue Stella Li", "Rui Xin", "Teng Xiao", "Yike Wang", "Rulin Shao", "Zoey Hao", "Melanie Sclar", "Sewoong Oh", "Faeze Brahman", "Pang Wei Koh", "Yulia Tsvetkov"]
presentation: "spotlight"
year: 2026
sourceIndex: 21
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=aA2PXFH2Cp"},{"kind":"arxiv","url":"https://arxiv.org/abs/2605.03871"}]
themes: ["verification-evaluation-safety", "self-play-synthetic-data-curriculum", "agents-tools-code-evolution"]
keywords: ["rubric generation", "reward modeling", "co-evolution", "policy gradient", "instance-level evaluation"]
difficulty: "advanced"
prerequisites: ["reinforcement learning", "preference modeling", "LLM-as-a-judge", "instruction following"]
readingPaths: []
relatedPapers: ["evopresent", "test-time-self-distillation", "agent0"]
readNext: ["evopresent", "test-time-self-distillation"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=aA2PXFH2Cp", "https://arxiv.org/abs/2605.03871"]
summaryEn: "The work trains a language model to generate instance-specific rubrics that are useful because they discriminate preferred from dispreferred responses, not merely because they sound plausible. The rubric generator and answer policy can then improve through alternating updates."
summaryZh: "该工作训练语言模型生成实例级评分细则，其价值不在于“听起来合理”，而在于确实能区分更好与更差的回答；评分细则生成器与回答策略随后通过交替更新共同改进。"
problemEn: "Prompted rubrics often state generic virtues without producing reliable preference rankings. External judges, human labels, and fixed scalar reward models also impose cost, dependency, or capability ceilings on open-ended RL."
problemZh: "提示生成的评分细则常只罗列泛化美德，却不能可靠地区分偏好；外部裁判、人类标签与固定标量奖励模型也会给开放式 RL 带来成本、依赖或能力上限。"
methodEn: "A rubric generator receives a binary policy-gradient reward when its criteria help a frozen judge rank a preference pair correctly. Sequential training freezes the learned rubric model before policy RL; co-evolving training alternates rubric and policy updates, using temporal contrasts with earlier policy outputs to create preferences."
methodZh: "当生成的标准帮助冻结裁判正确排序偏好对时，评分细则生成器获得二元策略梯度奖励。顺序训练先学细则再冻结；协同进化则交替更新细则与策略，并用当前策略和历史策略输出的时间对比构造偏好。"
resultsEn: "The workshop abstract reports substantial gains over prompted rubrics across nine instruction-following benchmarks. In the expanded EvoLM version, the authors report rubrics that beat GPT-4.1 on RewardBench-2 by 25.7% and a co-trained policy reaching 69.3% average on OLMo3-Adapt."
resultsZh: "工作坊摘要报告该方法在九个指令遵循基准上显著优于提示式评分细则。扩展后的 EvoLM 版本报告：生成细则在 RewardBench-2 上超过 GPT-4.1 25.7%，协同训练策略在 OLMo3-Adapt 上平均达到 69.3%。"
limitationsEn: "The method still relies on a judge to turn rubrics into scores, so judge bias and rubric-level reward hacking remain possible. Temporal preferences assume newer policy outputs are informative contrasts rather than uniformly better answers."
limitationsZh: "该方法仍需裁判把评分细则转成分数，因此裁判偏差与细则层面的奖励投机依然可能存在；时间偏好也假设新策略输出是有信息的对比，而不一定总是更好。"
whyReadEn: "It makes the evaluator itself part of the recursive improvement loop and keeps the reward legible as natural-language criteria."
whyReadZh: "它把评估器本身纳入递归改进闭环，同时让奖励以自然语言标准保持可解释。"
feedbackSource: "Whether generated rubrics let a frozen judge rank response preference pairs correctly"
updatedObject: "The instance-level rubric generator and the response policy"
updateMechanism: "Alternating policy-gradient updates using discriminative rubric rewards and temporal contrast"
successSignal: "More accurate preference discrimination and stronger instruction-following policy performance"
loopSummaryEn: "Generate responses → contrast quality → propose a rubric → test its discriminative power → update the rubric generator → train the policy with rubric rewards → repeat."
loopSummaryZh: "生成回答 → 构造质量对比 → 提出评分细则 → 检验区分能力 → 更新细则生成器 → 用细则奖励训练策略 → 重复。"
---

Evidence note: the workshop paper and its expanded arXiv successor were checked. The workshop title is preserved; the later version is titled “EvoLM: Self-Evolving Language Models through Co-Evolved Discriminative Rubrics.”

证据说明：已核对工作坊论文与其扩展 arXiv 后续版本。本站保留工作坊标题；后续版本题为“EvoLM: Self-Evolving Language Models through Co-Evolved Discriminative Rubrics”。
