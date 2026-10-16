---
title: "AlphaApollo: A System for Deep Agentic Reasoning"
titleZh: "AlphaApollo：深度智能体推理系统"
authors: ["Zhanke Zhou", "Chentao Cao", "Xiao Feng", "Xuan Li", "Zongze Li", "Xiangyu Lu", "Jiangchao Yao", "Weikai Huang", "Tian Cheng", "Jianghangfan Zhang", "Tangyu Jiang", "Linrui Xu", "Yiming Zheng", "Brando Miranda", "Tongliang Liu", "Sanmi Koyejo", "Masashi Sugiyama", "Bo Han"]
presentation: "poster"
year: 2026
sourceIndex: 65
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=UcIFJPXqrB"},{"kind":"arxiv","url":"https://arxiv.org/abs/2510.06261"},{"kind":"project","url":"https://alphaapollo.org/"}]
themes: ["agents-tools-code-evolution", "test-time-learning-inference-scaling", "verification-evaluation-safety"]
keywords: ["agentic reasoning", "tool use", "multi-turn RL", "agentic evolution", "long-horizon memory"]
difficulty: "advanced"
prerequisites: ["tool-using agents", "reinforcement learning", "multi-agent systems", "verifier-guided search"]
readingPaths: []
relatedPapers: ["verltool", "agent0", "reasoning-as-gradient"]
readNext: ["verltool", "agent0"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://openreview.net/pdf?id=UcIFJPXqrB", "https://arxiv.org/abs/2510.06261", "https://alphaapollo.org/"]
summaryEn: "AlphaApollo combines structured model–tool interaction, turn-level reinforcement learning, and a multi-round propose–judge–update loop with verification and long-horizon memory. It turns one foundation model into a configurable agentic ecosystem."
summaryZh: "AlphaApollo 将结构化模型—工具交互、轮次级强化学习，以及带验证与长程记忆的多轮“提出—评审—更新”闭环结合，把单一基础模型扩展成可配置智能体生态。"
problemEn: "Single-pass models have limited capacity for long-horizon problems, while naive test-time refinement can drift without trustworthy tools, memory, and credit assignment across turns."
problemZh: "单次生成模型处理长程问题的能力有限，而朴素测试时修正如果缺少可信工具、记忆与跨轮信用分配，容易漂移。"
methodEn: "The system formalizes multi-turn tool calls, separates model actions from environment responses for stable turn-level RL, and performs repeated proposal, tool-assisted judgment, and solution updates backed by persistent memory."
methodZh: "系统形式化多轮工具调用，把模型动作与环境响应分开以稳定轮次级 RL，并借助持久记忆反复执行提案、工具辅助评审与答案更新。"
resultsEn: "Across seven math benchmarks, tool-call success exceeds 85%. Multi-turn RL raises Avg@32 from 1.07% to 9.64% for Qwen2.5-1.5B and from 8.77% to 20.35% for 7B; evolution further improves multiple scales."
resultsZh: "在七个数学基准上，工具调用成功率超过 85%。多轮 RL 将 Qwen2.5-1.5B 的 Avg@32 从 1.07% 提到 9.64%，7B 从 8.77% 提到 20.35%；演化阶段又提升多个规模。"
limitationsEn: "The system is complex and expensive, and the strongest results center on verifiable mathematics. Tool success and benchmark gains do not by themselves establish reliability in open-ended or high-stakes deployments."
limitationsZh: "系统复杂且昂贵，最强结果集中在可验证数学；工具调用成功与基准提升本身不能证明开放式或高风险部署中的可靠性。"
whyReadEn: "It is a broad reference architecture showing how reasoning, learning, evolution, verification, tools, and memory can fit into one RSI stack."
whyReadZh: "它是一套覆盖面广的参考架构，展示推理、学习、演化、验证、工具与记忆如何组成统一 RSI 技术栈。"
feedbackSource: "Tool responses, verifier judgments, and benchmark outcomes across turns and rounds"
updatedObject: "The tool-use policy, candidate solution, and long-horizon memory"
updateMechanism: "Turn-level RL plus multi-round propose–judge–update evolution"
successSignal: "Reliable tool use and improving verified solution accuracy"
loopSummaryEn: "Reason and call tools → learn from turn feedback → propose a solution → verify and judge → update with memory."
loopSummaryZh: "推理并调用工具 → 从轮次反馈学习 → 提出解答 → 验证评审 → 结合记忆更新。"
---

Evidence note: the published workshop paper, arXiv record, and official project page were checked.

证据说明：已核对正式工作坊论文、arXiv 记录与官方项目页。
