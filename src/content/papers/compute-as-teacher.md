---
title: "Compute as Teacher: Turning Inference Compute Into Reference-Free Supervision"
titleZh: "以计算为师：把推理算力转化为无参考监督"
authors: ["Dulhan Jayalath", "Shashwat Goel", "Thomas Foster", "Parag Jain", "Suchin Gururangan", "Cheng Zhang", "Anirudh Goyal", "Alan Schelten"]
presentation: "poster"
year: 2026
sourceIndex: 50
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=WA6q2pNQhj"},{"kind":"arxiv","url":"https://arxiv.org/abs/2509.14234"},{"kind":"project","url":"https://proceedings.mlr.press/v306/jayalath26a.html"}]
themes: ["test-time-learning-inference-scaling", "self-play-synthetic-data-curriculum", "verification-evaluation-safety"]
keywords: ["inference compute", "reference-free supervision", "parallel rollouts", "self-proposed rubrics", "reinforcement learning"]
difficulty: "advanced"
prerequisites: ["reinforcement learning", "test-time scaling", "LLM judges", "reward modeling"]
readingPaths: []
relatedPapers: ["test-time-self-distillation", "self-evolving-rubrics", "gasp"]
readNext: ["test-time-self-distillation", "self-evolving-rubrics"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=WA6q2pNQhj", "https://arxiv.org/abs/2509.14234", "https://proceedings.mlr.press/v306/jayalath26a.html"]
summaryEn: "Compute as Teacher (CaT) turns a group of inference-time rollouts into a synthesized pseudo-reference, then derives rewards from that reference for post-training without human labels. It supports both verifiable answers and open-ended domains."
summaryZh: "Compute as Teacher（CaT）把一组推理时 rollout 合成为伪参考答案，再据此构造奖励，在没有人工标签的情况下进行后训练，并同时覆盖可验证与开放式任务。"
problemEn: "Post-training needs learning signals even when no gold answer or programmatic verifier exists. Best-of-N selection spends inference compute but does not automatically convert exploration into a reusable policy."
problemZh: "即使没有标准答案或程序化验证器，后训练仍需要学习信号；Best-of-N 选择会消耗推理算力，却不会自动把探索结果沉淀成可复用策略。"
methodEn: "The current policy generates parallel rollouts and a frozen anchor synthesizes them into a reference. Verifiable tasks use answer equivalence; non-verifiable tasks generate binary, auditable rubrics from the reference and have an independent LLM judge score them for RL."
methodZh: "当前策略生成并行轨迹，冻结的锚点模型将其综合为参考答案。可验证任务采用答案等价性；不可验证任务从参考答案生成二元、可审计量规，再由独立大模型裁判评分用于强化学习。"
resultsEn: "At test time, CaT improves small Gemma, Qwen, and Llama models by up to 27% on MATH-500 and 12% on HealthBench. CaT-RL reaches gains up to 33% and 30%, and HealthBench quality is retained with nine times less test-time compute."
resultsZh: "测试时，CaT 在 MATH-500 与 HealthBench 上分别最高提升小型 Gemma、Qwen 和 Llama 模型 27% 与 12%；CaT-RL 的提升最高达 33% 与 30%，并以少 9 倍的测试计算保持 HealthBench 质量。"
limitationsEn: "Pseudo-references can consolidate shared rollout errors, and rubric judging inherits anchor and judge bias. Training saves future inference cost only after paying substantial rollout and RL compute up front."
limitationsZh: "伪参考答案可能固化多条轨迹共有的错误，量规评分也会继承锚点模型与裁判偏差；节省未来推理成本之前，需要先支付大量 rollout 与强化学习计算。"
whyReadEn: "It cleanly connects inference-time scaling to policy improvement: temporary parallel computation is compressed into a cheaper reusable model."
whyReadZh: "它清晰连接了推理时扩展与策略改进：临时的并行计算被压缩进更便宜、可复用的模型。"
feedbackSource: "Synthesized pseudo-references, answer equivalence, and self-proposed rubric scores"
updatedObject: "The language-model policy"
updateMechanism: "Reinforcement learning on rewards derived from aggregated parallel rollouts"
successSignal: "The trained policy matches or exceeds aggregation quality using much less test-time compute"
loopSummaryEn: "Sample parallel answers → synthesize a reference → derive auditable rewards → train the policy → generate stronger future rollouts."
loopSummaryZh: "采样并行回答 → 合成参考答案 → 构造可审计奖励 → 训练策略 → 生成更强的新轨迹。"
---

Evidence note: the workshop paper, arXiv abstract, and PMLR publication record were checked.

证据说明：已核对工作坊论文、arXiv 摘要与 PMLR 发表记录。
