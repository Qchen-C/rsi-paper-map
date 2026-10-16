---
title: "SAGE: Self-play Adversarial Games Enhance Large Language Model Reasoning Capabilities"
titleZh: "SAGE：用自博弈对抗游戏增强大语言模型推理能力"
authors: ["Saraswathy Amjith", "Michael Wang", "Jayson Lynch", "Hans Gundlach", "Neil Thompson"]
presentation: "poster"
year: 2026
sourceIndex: 82
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=b3dPMokQki"}]
themes: ["self-play-synthetic-data-curriculum", "verification-evaluation-safety"]
keywords: ["adversarial self-play", "reasoning", "synthetic problems", "verifiable rewards", "cross-domain transfer"]
difficulty: "intermediate"
prerequisites: ["self-play", "reinforcement learning", "verifiable rewards", "LLM reasoning"]
readingPaths: []
relatedPapers: ["language-self-play", "self-play-adversarial-imitation", "verified-synthetic-data"]
readNext: ["language-self-play", "verified-synthetic-data"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=b3dPMokQki"]
summaryEn: "SAGE trains two instances of a model in an asymmetric game: a Setter invents and solves problems while an Opponent tries to solve them. Reward concentrates generation near the model's current capability frontier without human-curated examples."
summaryZh: "SAGE 让同一模型的两个实例进行非对称博弈：出题者生成并解答问题，对手尝试独立求解；奖励把生成过程推向模型当前能力边界，无需人工整理样本。"
problemEn: "Reasoning improvement is constrained by a shrinking supply of novel, appropriately difficult training problems, while indiscriminate self-generation produces trivial or unsound data."
problemZh: "推理能力提升受制于新颖且难度合适的训练题越来越稀缺，而无筛选的自生成数据往往过于简单或不可靠。"
methodEn: "The Setter is rewarded when its answer verifies but the frozen Opponent fails. Code-Game uses program execution as verifier; Math-Game uses an external LLM judge, creating an automatically adapting curriculum."
methodZh: "当出题者答案通过验证而冻结的对手失败时，出题者获得奖励；Code-Game 用程序执行验证，Math-Game 用外部 LLM 裁判，由此形成自动适应的课程。"
resultsEn: "Across Qwen3 and Llama models from 1B to 4B parameters, SAGE reports gains up to 10% on MATH, 8% on MBPP, and 6% on ARC-Challenge, plus transfer between code and mathematics."
resultsZh: "在 1B 到 4B 的 Qwen3 与 Llama 模型上，SAGE 报告在 MATH、MBPP、ARC-Challenge 上最高分别提升 10%、8% 和 6%，并观察到代码与数学之间的迁移。"
limitationsEn: "Math-Game inherits errors and biases from an LLM judge, and the reward can encourage narrow adversarial puzzles rather than broad competence. Results are limited to relatively small models and selected domains."
limitationsZh: "Math-Game 会继承 LLM 裁判的错误与偏差，奖励也可能促使模型生成狭窄的对抗题而非获得广泛能力；实验仅覆盖较小模型与有限领域。"
whyReadEn: "It cleanly separates the value of adversarial pressure from verification alone and turns self-play into a data curriculum for open-ended reasoning."
whyReadZh: "它清楚区分了对抗压力与单纯验证的作用，并把自博弈转化为开放式推理的数据课程。"
feedbackSource: "Execution or judge verification combined with whether a frozen opponent fails"
updatedObject: "The Setter model's problem-generation and reasoning policy"
updateMechanism: "Reinforcement learning in an asymmetric Setter–Opponent game"
successSignal: "Setter solves a generated problem that the Opponent cannot solve"
loopSummaryEn: "Generate and answer a problem → challenge the Opponent → verify both answers → reward frontier problems → update the Setter."
loopSummaryZh: "生成并回答问题 → 挑战对手 → 验证双方答案 → 奖励边界难题 → 更新出题者。"
---

Evidence note: the accepted workshop paper was checked.

证据说明：已核对接收的工作坊论文。
