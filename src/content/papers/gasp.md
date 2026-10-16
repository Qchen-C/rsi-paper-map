---
title: "GASP: Guided Asymmetric Self-Play For Coding LLMs"
titleZh: "GASP：面向编程大模型的引导式非对称自博弈"
authors: ["Swadesh Jana", "Cansu Sancaktar", "Tomáš Daniš", "Georg Martius", "Antonio Orvieto", "Pavel Kolev"]
presentation: "spotlight"
year: 2026
sourceIndex: 24
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=NYrOkAfDkP"},{"kind":"arxiv","url":"https://arxiv.org/abs/2603.15957"},{"kind":"project","url":"https://github.com/Swadesh13/GASP-project"}]
themes: ["self-play-synthetic-data-curriculum", "agents-tools-code-evolution", "test-time-learning-inference-scaling"]
keywords: ["asymmetric self-play", "coding LLMs", "goalpost questions", "curriculum learning", "LiveCodeBench"]
difficulty: "advanced"
prerequisites: ["asymmetric self-play", "code generation", "curriculum learning", "pass@k evaluation"]
readingPaths: []
relatedPapers: ["anchored-self-play-code-repair", "ace-code-evolution", "interestingness-compression-progress"]
readNext: ["anchored-self-play-code-repair", "ace-code-evolution"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2603.15957", "https://openreview.net/pdf?id=ChWC0E93lF"]
summaryEn: "GASP grounds asymmetric self-play in difficult real coding questions. A teacher first generates an easier variant of a hard goalpost, then progressively generates harder variants so the student's curriculum moves toward a meaningful target."
summaryZh: "GASP 用困难的真实编程题为非对称自博弈提供锚点。教师先为一个难目标题生成更容易的变体，再逐渐生成更难的变体，使学生的课程朝有意义的目标推进。"
problemEn: "A self-play teacher can generate questions at the edge of a student's ability, but hardness alone does not guarantee that the questions are informative or connected to real capabilities. Goal-agnostic curricula may wander."
problemZh: "自博弈教师可以在学生能力边界生成问题，但“困难”本身并不保证问题有信息量或对应真实能力；没有目标的课程可能随意漂移。"
methodEn: "GASP identifies real questions that remain hard exploration challenges and treats them as goalposts. The teacher creates an easier stepping-stone question and then a harder version of that question, repeatedly narrowing the gap between the student's current frontier and the goalpost."
methodZh: "GASP 先找出真实数据中仍具探索难度的题目作为目标点。教师生成更容易的垫脚题，再生成该题的更难版本，反复缩小学生当前边界与目标题之间的差距。"
resultsEn: "The abstract reports a 2.5% pass@20 improvement on LiveCodeBench over unguided asymmetric self-play. The constructed curriculum also solves hard goalpost questions that all evaluated baselines fail to reach."
resultsZh: "摘要报告其在 LiveCodeBench 上相对无引导非对称自博弈的 pass@20 提升 2.5%；构造的课程还解决了所有评测基线都无法触及的困难目标题。"
limitationsEn: "GASP still needs a pool of real goalpost questions and a way to identify which ones represent useful exploration challenges. Poor anchors can narrow the curriculum toward benchmark-specific skills."
limitationsZh: "GASP 仍需要真实目标题池，并需判断哪些题能代表有价值的探索挑战；不佳的锚点可能把课程收窄到特定基准技能。"
whyReadEn: "It operationalizes the difference between merely difficult synthetic data and difficult data that points toward a desired capability."
whyReadZh: "它把“只是困难的合成数据”与“指向目标能力的困难数据”之间的差异变成了可操作机制。"
feedbackSource: "Student success on generated stepping stones and distance to real hard goalpost questions"
updatedObject: "The teacher's generated coding curriculum and the student coding policy"
updateMechanism: "Alternating easier and harder variants conditioned on a real-data goalpost"
successSignal: "Higher LiveCodeBench pass@20 and eventual success on previously unreachable goalposts"
loopSummaryEn: "Choose a hard real goalpost → generate an easier bridge → train the student → increase difficulty toward the goalpost → reassess the frontier → repeat."
loopSummaryZh: "选择真实困难目标题 → 生成较易桥接题 → 训练学生 → 朝目标提高难度 → 重新评估能力边界 → 重复。"
---

Evidence note: the arXiv abstract, public workshop paper, and official project repository were checked.

证据说明：已核对 arXiv 摘要、公开工作坊论文与官方项目仓库。
