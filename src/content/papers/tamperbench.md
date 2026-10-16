---
title: "TamperBench: A Systematic Framework to Stress-Test LLM Safety Under Fine-Tuning and Tampering"
titleZh: "TamperBench：系统压力测试微调与篡改下的大语言模型安全性"
authors: ["Saad Hossain", "Tom Tseng", "Punya Syon Pandey", "Samanvay Vajpayee", "Matthew Kowal", "Nayeema Nonta", "Samuel Simko", "Stephen Casper", "Zhijing Jin", "Kellin Pelrine", "Sirisha Rambhatla"]
presentation: "short"
year: 2026
sourceIndex: 108
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=smLtz7WID0"},{"kind":"arxiv","url":"https://arxiv.org/abs/2602.06911"},{"kind":"code","url":"https://github.com/criticalml-uw/TamperBench"}]
themes: ["verification-evaluation-safety"]
keywords: ["tamper resistance", "harmful fine-tuning", "safety evaluation", "representation attacks", "hyperparameter sweeps"]
difficulty: "intermediate"
prerequisites: ["LLM safety alignment", "fine-tuning", "jailbreaks", "adversarial evaluation"]
readingPaths: []
relatedPapers: ["sahoo", "code-agent-reward-hacking", "self-evolving-rubrics"]
readNext: ["sahoo", "code-agent-reward-hacking"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=smLtz7WID0", "https://arxiv.org/abs/2602.06911", "https://github.com/criticalml-uw/TamperBench"]
summaryEn: "TamperBench standardizes attacks, defenses, hyperparameter search, and safety–utility metrics for testing whether aligned open-weight LLMs remain safe after weight or representation modification."
summaryZh: "TamperBench 标准化攻击、防御、超参数搜索与安全—效用指标，用于测试对齐后的开放权重 LLM 在权重或表示被修改后是否仍保持安全。"
problemEn: "Tamper-resistance claims are difficult to compare because studies use different attack budgets, datasets, model families, metrics, and hyperparameters."
problemZh: "篡改抵抗结论难以比较，因为不同研究采用不同攻击预算、数据集、模型家族、指标和超参数。"
methodEn: "The toolkit combines weight-space fine-tuning and latent representation attacks, runs systematic per-model attack sweeps, and evaluates both harmfulness and retained capability under reproducible configurations."
methodZh: "工具包汇集权重空间微调与潜在表示攻击，对每个模型—攻击组合进行系统扫描，并在可复现配置下同时评估危害性与能力保留。"
resultsEn: "The study evaluates 21 open-weight models, including defended variants, against nine threats. It finds jailbreak-tuning is typically the strongest attack and identifies Triplet as a leading alignment-stage defense."
resultsZh: "研究评估了 21 个开放权重模型及其防御变体，覆盖九类威胁；结果显示越狱微调通常是最强攻击，Triplet 是领先的对齐阶段防御之一。"
limitationsEn: "A benchmark covers only enumerated attacks and metrics; adaptive adversaries can optimize around it. Automated safety judges can miss nuanced harm, and exhaustive sweeps remain compute-intensive."
limitationsZh: "基准只能覆盖列出的攻击与指标，自适应攻击者可能针对它规避；自动安全裁判会漏掉细腻危害，全面扫描也仍需大量计算。"
whyReadEn: "It provides the adversarial evaluation layer that any self-modifying or fine-tunable system needs before claiming safety survives improvement."
whyReadZh: "它为任何可自我修改或可微调系统提供必要的对抗评测层，防止在没有证据时声称改进后仍安全。"
feedbackSource: "Standardized safety and utility metrics after controlled tampering attacks"
updatedObject: "Benchmark records of model and defense behavior under attack"
updateMechanism: "Sweep attack configurations, evaluate outcomes, and compare safety–utility frontiers"
successSignal: "High retained safety across worst-case attacks without unacceptable capability loss"
loopSummaryEn: "Choose a model and defense → apply a tampering attack → sweep attacker settings → score safety and utility → revise the defense."
loopSummaryZh: "选择模型与防御 → 实施篡改攻击 → 扫描攻击设置 → 评估安全与效用 → 修正防御。"
---

Evidence note: the workshop paper, current arXiv version, and official toolkit repository were checked; the later public title uses “Systematically Stress-Testing.”

证据说明：已核对工作坊论文、当前 arXiv 版本与官方工具仓库；后续公开标题使用《Systematically Stress-Testing》。
