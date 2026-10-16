---
title: "CausalEvolve: Towards Open-Ended Discovery with Causal Scratchpad"
titleZh: "CausalEvolve：借助因果草稿本迈向开放式发现"
authors: ["Yongqiang Chen", "Chenxi Liu", "Zhenhao Chen", "Tongliang Liu", "Bo Han", "Kun Zhang"]
presentation: "spotlight"
year: 2026
sourceIndex: 17
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=14jSctSh0D"},{"kind":"arxiv","url":"https://arxiv.org/abs/2603.14575"}]
themes: ["scientific-discovery-applications", "memory-continual-adaptation", "agents-tools-code-evolution"]
keywords: ["causal scratchpad", "open-ended discovery", "evolutionary agents", "abductive reasoning", "AI scientist"]
difficulty: "advanced"
prerequisites: ["causal reasoning", "evolutionary search", "LLM agents", "scientific optimization"]
readingPaths: []
relatedPapers: ["discovery-to-application-loop", "execution-grounded-ai-research", "agent0"]
readNext: ["discovery-to-application-loop", "execution-grounded-ai-research"]
featured: true
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2603.14575", "https://openreview.net/pdf?id=Uy3mDrPmhJ"]
summaryEn: "CausalEvolve augments an evolutionary coding agent with a causal scratchpad that records and reasons about factors affecting outcomes. It uses both initial outcome-level factors and newly hypothesized factors triggered by surprising evolutionary behavior."
summaryZh: "CausalEvolve 为进化式编程智能体加入因果草稿本，用来记录并推理影响结果的因素。它既使用初始的结果层因素，也会根据进化过程中的意外模式提出新因素。"
problemEn: "Evolve-style agents can lose efficiency and oscillate near performance boundaries because they lack targeted guidance and a structured way to accumulate useful knowledge from earlier iterations."
problemZh: "进化式智能体在接近性能边界时容易效率下降并来回振荡，因为它们缺少定向指导，也缺少把以往迭代经验组织成可复用知识的机制。"
methodEn: "The scratchpad identifies complementary outcome-level factors, tracks observations during evolution, and performs abductive reasoning over surprising patterns to propose new causal hypotheses. These factors guide which program modifications should be explored next."
methodZh: "因果草稿本先识别互补的结果层因素，再跟踪进化中的观察，并对意外模式进行溯因推理以提出新因果假设；这些因素随后指导下一轮程序修改方向。"
resultsEn: "Across four challenging open-ended scientific tasks, the abstract reports that CausalEvolve improves evolutionary efficiency and discovers better solutions than prior evolve-style agents."
resultsZh: "在四个具有挑战性的开放式科学任务上，摘要报告 CausalEvolve 提高了进化效率，并发现了优于既有进化式智能体的解。"
limitationsEn: "The causal factors are inferred and verbalized by language models rather than established by controlled causal identification. Performance on four tasks does not yet show that the scratchpad scales to broad scientific domains or very long searches."
limitationsZh: "因果因素由语言模型推断和表述，并非通过严格受控的因果识别得到；四个任务上的表现也不足以证明该机制能扩展到广泛科学领域或超长搜索。"
whyReadEn: "It treats memory as an active causal model for steering evolution, rather than as a passive archive of previous attempts."
whyReadZh: "它把记忆设计成主动引导进化的因果模型，而不是被动保存历史尝试的档案。"
feedbackSource: "Objective changes and surprising patterns observed across evolutionary trials"
updatedObject: "The causal scratchpad and the population of candidate programs"
updateMechanism: "Outcome-factor analysis plus abductive hypothesis generation guides mutations and selection"
successSignal: "Faster progress and better objective values on open-ended discovery tasks"
loopSummaryEn: "Evolve a candidate → observe outcome changes → update causal factors → explain surprises → propose a new direction → evolve again."
loopSummaryZh: "进化候选解 → 观察结果变化 → 更新因果因素 → 解释意外模式 → 提出新方向 → 再次进化。"
---

Evidence note: the arXiv abstract and the public ICLR paper were checked. Claims here stay at abstract-level evidence.

证据说明：已核对 arXiv 摘要与公开 ICLR 论文；本站结论控制在摘要级证据范围内。
