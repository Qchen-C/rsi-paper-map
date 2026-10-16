---
title: "ESDAE: Evaluating Synthetic Data for Agent Evaluation"
titleZh: "ESDAE：评估用于智能体评测的合成数据"
authors: ["Shuaiqi Wang", "Aadyaa Maddi", "Zinan Lin", "Giulia Fanti"]
presentation: "poster"
year: 2026
sourceIndex: 56
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=DlhLLVhrZB"},{"kind":"arxiv","url":"https://arxiv.org/abs/2605.22564"}]
themes: ["verification-evaluation-safety", "self-play-synthetic-data-curriculum", "agents-tools-code-evolution"]
keywords: ["synthetic data", "agent evaluation", "tool calling", "benchmark validity", "trajectory fidelity"]
difficulty: "intermediate"
prerequisites: ["agent benchmarks", "tool-use trajectories", "distribution metrics", "evaluation validity"]
readingPaths: []
relatedPapers: ["posttrainbench", "verified-synthetic-data", "evaluating-agents-md"]
readNext: ["posttrainbench", "verified-synthetic-data"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=DlhLLVhrZB", "https://arxiv.org/abs/2605.22564"]
summaryEn: "ESDAE evaluates whether synthetic benchmarks reproduce real multi-turn, tool-calling agent trajectories. It compares instructions, intermediate responses, tool calls, final outputs, and downstream evaluation rather than trusting one aggregate similarity score."
summaryZh: "ESDAE 评估合成基准是否真实复现多轮工具调用智能体轨迹，并分别比较任务指令、中间回答、工具调用、最终输出与下游评测，而不是依赖单一相似度分数。"
problemEn: "Real agent traces may be private, proprietary, or scarce, but replacing them with synthetic data can create a benchmark that looks plausible while measuring the wrong distribution."
problemZh: "真实智能体轨迹可能敏感、专有或稀缺，但用合成数据替代时，可能得到外观合理却衡量错误分布的基准。"
methodEn: "The framework measures validity, fidelity, and diversity across four trajectory layers and includes downstream agent-evaluation agreement. Controlled generation schemes inject known failure modes to test whether the metrics detect them."
methodZh: "框架在四个轨迹层面衡量有效性、保真度与多样性，并检查下游智能体评测一致性；研究通过受控生成方案注入已知失败模式，验证指标能否识别。"
resultsEn: "Experiments on recent agent benchmarks show that ESDAE detects fine-grained fidelity and diversity changes and that no single metric adequately characterizes synthetic evaluation data."
resultsZh: "在近期智能体基准上的实验表明，ESDAE 能识别细粒度保真度与多样性变化，而且没有任何单一指标足以刻画合成评测数据。"
limitationsEn: "The framework still needs a real reference dataset, so it cannot solve evaluation where no trustworthy baseline exists. Metric coverage does not guarantee privacy or semantic validity for every deployment."
limitationsZh: "框架仍需要真实参考数据，因此无法解决完全没有可信基线的评测；指标覆盖也不保证每种部署中的隐私与语义有效性。"
whyReadEn: "It treats the benchmark itself as an object that needs evaluation, a crucial guardrail for self-improving agents trained or selected on synthetic tasks."
whyReadZh: "它把基准本身也视为需要被评估的对象，这是在合成任务上训练或筛选自改进智能体的重要护栏。"
feedbackSource: "Multi-axis differences between synthetic and real trajectory datasets"
updatedObject: "The synthetic agent-evaluation dataset and its generation process"
updateMechanism: "Detect layer-specific fidelity and diversity gaps, then revise generation"
successSignal: "Synthetic evaluations preserve real-data characteristics and downstream rankings"
loopSummaryEn: "Generate synthetic traces → compare them with real traces on four layers → locate gaps → revise generation → reevaluate."
loopSummaryZh: "生成合成轨迹 → 在四个层面与真实轨迹比较 → 定位差距 → 修改生成过程 → 再评估。"
---

Evidence note: the workshop paper and later arXiv version, renamed “SynAE,” were checked; the original workshop title is retained.

证据说明：已核对工作坊论文与后续改名为“SynAE”的 arXiv 版本；本站保留工作坊原题。
