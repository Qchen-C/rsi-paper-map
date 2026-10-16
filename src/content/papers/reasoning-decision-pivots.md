---
title: "Correct Reasoning Paths Visit Shared Decision Pivots"
titleZh: "正确推理路径会经过共享的决策枢纽"
authors: ["Dongkyu Cho", "Amy B. Z. Zhang", "Bilel Fehri", "Sheng Wang", "Rumi Chunara", "Rui Song", "Hengrui Cai"]
presentation: "poster"
year: 2026
sourceIndex: 31
sourcePage: "https://recursive-workshop.github.io/papers.html"
sources: [{"kind":"openreview","url":"https://openreview.net/forum?id=OlMSrldTNe"},{"kind":"arxiv","url":"https://arxiv.org/abs/2509.21549"}]
themes: ["verification-evaluation-safety", "self-play-synthetic-data-curriculum", "foundations-recursive-computation"]
keywords: ["decision pivots", "chain of thought", "self-training", "short-path reasoning", "preference learning"]
difficulty: "advanced"
prerequisites: ["chain-of-thought reasoning", "preference optimization", "self-consistency", "verifier models"]
readingPaths: []
relatedPapers: ["test-time-self-distillation", "self-evolving-rubrics", "contextual-drag"]
readNext: ["test-time-self-distillation", "self-evolving-rubrics"]
featured: false
evidenceStatus: "abstract-checked"
checkedSections: []
verifiedAt: "2026-10-16"
evidenceSources: ["https://arxiv.org/abs/2509.21549", "https://openreview.net/pdf?id=V1u6SYBd5a"]
summaryEn: "ROMA assumes that stylistically different correct reasoning traces converge on a small set of indispensable decision pivots. It mines those shared checkpoints, rewrites verbose traces into concise Short-Path Reasoning, and trains the model to prefer the compressed explanations."
summaryZh: "ROMA 假设风格各异的正确推理轨迹会汇聚到一小组不可缺少的决策枢纽。它挖掘这些共享检查点，把冗长轨迹改写成简洁的 Short-Path Reasoning，再训练模型偏好这些压缩解释。"
problemEn: "Whole-answer rewards are too coarse to supervise reasoning, while verifying every free-form intermediate step is expensive and often impossible. Long correct traces also contain repetition and accidental details."
problemZh: "整答案奖励过于粗糙，无法监督推理过程；逐步验证自由形式中间过程又昂贵且常不可行。长篇正确轨迹还包含重复与偶然细节。"
methodEn: "The model samples multiple successful reasoning paths for each labeled question. A lightweight verifier aggregates majority-shared facts and logic into a short path, then preference learning treats the synthesized short path as preferred over individual verbose traces."
methodZh: "模型为每个带标签问题采样多条成功推理路径；轻量验证器把多数路径共享的事实与逻辑聚合成短路径，再通过偏好学习让模型更偏好该短路径而非单条冗长轨迹。"
resultsEn: "Experiments on LogiQA, MedQA, and MATH500 report simultaneous improvements in downstream answer accuracy and reasoning quality, without human-written rationales or handcrafted reasoning metrics."
resultsZh: "在 LogiQA、MedQA 与 MATH500 上，实验报告答案准确率与推理质量同时提升，且不需要人工推理标注或手工推理指标。"
limitationsEn: "The shared-pivot assumption may discard rare but valid solution strategies, and pivot extraction can inherit majority errors. The pipeline still uses answer labels and an auxiliary verifier."
limitationsZh: "共享枢纽假设可能丢弃少见但有效的解法，枢纽提取也可能继承多数路径的共同错误；流程仍使用答案标签与辅助验证器。"
whyReadEn: "It proposes a middle ground between unverifiable full chains and expensive step-by-step supervision: verify only the common decisions that matter."
whyReadZh: "它在不可验证的完整思维链与昂贵逐步监督之间找到折中：只验证真正重要的共享决策。"
feedbackSource: "Agreement across successful reasoning paths plus correctness labels"
updatedObject: "A compact pivot-focused reasoning policy"
updateMechanism: "Multi-path aggregation, verifier synthesis, and preference optimization"
successSignal: "More accurate answers with shorter, higher-quality reasoning traces"
loopSummaryEn: "Sample correct paths → intersect their key decisions → synthesize a short path → prefer it during training → sample stronger paths → repeat."
loopSummaryZh: "采样正确路径 → 求共享关键决策 → 合成短路径 → 在训练中偏好它 → 采样更强路径 → 重复。"
---

Evidence note: the arXiv abstract and public full paper were checked. Quantitative details not stated in the abstract are omitted.

证据说明：已核对 arXiv 摘要与公开全文；摘要未明确给出的定量细节未写入卡片。
