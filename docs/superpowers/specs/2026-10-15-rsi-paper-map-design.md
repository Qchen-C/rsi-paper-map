# RSI Paper Map 设计规范

日期：2026-10-15  
状态：用户已确认  
目标仓库：`Qchen-C/rsi-paper-map`

## 1. 项目目标

构建一个面向研究者公开使用、同时适合个人系统学习的递归自我改进（Recursive Self-Improvement, RSI）论文导航站。网站以 ICLR 2026 Workshop on Recursive Self-Improvement 的 110 篇录用论文为初始语料，保留英文论文标题，提供中英文双语研究卡片、主题分类和有前置关系的阅读路线。

成功标准：

- 110 篇论文全部收录，且标题、链接和展示类型与来源页一致。
- 每篇论文都有可追溯的中英文内容与明确的核验状态。
- 研究者能按主题、难度、展示类型和核验深度查找论文。
- 初学者能沿推荐路线循序阅读，而不是面对无序列表。
- 个人收藏、阅读进度和私人笔记默认不公开。
- 网站通过公开 GitHub 仓库维护，并由 GitHub Pages 自动发布。

## 2. 已知语料范围

来源页：<https://recursive-workshop.github.io/papers.html>

初始语料共 110 篇：

- Oral：4 篇
- Spotlight：21 篇
- Poster：75 篇
- Short：10 篇

收录数量和分组在导入时再次自动核验。后续可以扩展 workshop 之外的论文，但不属于第一版范围。

## 3. 产品结构

### 3.1 首页

首页用于建立领域地图，而不是展示完整论文列表。包括：

- 论文总数、主题数、阅读路线数和核验状态统计。
- 一条默认入门路线及各阶段说明。
- 九个研究主题入口。
- 进入论文库和继续个人阅读的快捷入口。

### 3.2 论文库

论文库提供全文搜索和组合筛选：

- 搜索英文标题、中文译名、作者、关键词和双语摘要。
- 按主题、阅读路线、难度、展示类型和核验状态筛选。
- 一篇论文可以属于多个主题和多条路线。
- 列表卡片显示英文原标题、中文说明、标签、难度和核验状态。
- 排序支持推荐顺序、标题、展示类型和最近更新。

### 3.3 论文详情页

详情页保留英文标题，并提供中文译名。主体包括：

- English summary 与中文摘要。
- 研究问题、核心方法、主要结论和局限。
- 改进闭环：反馈来源、被更新对象、更新机制和成功指标。
- 研究坐标：what、when、how、where、safety/evaluation。
- 前置知识、阅读理由、相关论文和下一篇建议。
- OpenReview、arXiv、代码和项目主页来源链接。
- 公开核验状态和本地个人学习区域。

### 3.4 个人学习区

第一版无需账户或后端。以下内容保存在浏览器 `localStorage`：

- 收藏状态
- 阅读进度和“已读”状态
- 私人笔记

数据以稳定论文 ID 为键，并带数据版本号。用户可以清空本地数据。跨设备同步、账户登录和公开笔记不在第一版范围内。

## 4. 论文数据模型

每篇论文由一个结构化内容文件表示，建议使用 Astro Content Collections 管理 Markdown/MDX frontmatter，并通过 schema 校验。

### 4.1 身份与来源

- `id`：稳定、唯一、URL 友好的论文标识
- `title`：英文原标题，不做改写
- `titleZh`：中文译名
- `authors`：作者列表
- `presentation`：oral、spotlight、poster 或 short
- `year`：年份
- `sources`：OpenReview、arXiv、代码、项目主页
- `sourcePage`：初始收录来源页

### 4.2 双语研究内容

- `summaryEn` / `summaryZh`：中英文摘要级解释
- `problemEn` / `problemZh`：研究问题
- `methodEn` / `methodZh`：核心方法
- `resultsEn` / `resultsZh`：主要实验和结论
- `limitationsEn` / `limitationsZh`：局限与适用边界
- `whyReadEn` / `whyReadZh`：为什么值得阅读

中文内容是解释性翻译，不冒充论文原文。英文内容也以概括为主；需要引用时引导用户回到原论文。

### 4.3 改进闭环

- `feedbackSource`：反馈从哪里产生
- `updatedObject`：模型、记忆、数据、课程、工具策略或系统组件中什么被改变
- `updateMechanism`：强化学习、微调、搜索、反思、验证、架构修改等
- `successSignal`：系统如何判断改进有效
- `loopSummaryEn` / `loopSummaryZh`：闭环说明

### 4.4 学习与分类字段

- `themes`：一个或多个主题
- `keywords`：规范化关键词
- `difficulty`：entry、intermediate 或 advanced
- `prerequisites`：前置知识
- `readingPaths`：所属阅读路线及路线内顺序
- `relatedPapers`：站内论文 ID
- `readNext`：建议后续阅读论文 ID
- `featured`：是否进入首页精选

### 4.5 核验字段

- `evidenceStatus`：metadata、abstract-checked 或 full-text-checked
- `checkedSections`：已检查的正文部分，例如 introduction、method、experiments、conclusion
- `verifiedAt`：最近核验日期
- `evidenceSources`：支持该卡片内容的来源链接

只有读过并核对正文相关部分，才能标记为 `full-text-checked`。仅根据标题或二手材料不能标记为 `abstract-checked`。

## 5. 分类体系

采用多标签分类，避免把跨领域论文硬塞进单一类别：

1. Foundations & Recursive Computation — 基础定义、递归计算与自我改进框架
2. Self-play, Synthetic Data & Curriculum — 自博弈、合成数据与自动课程
3. Memory & Continual Adaptation — 长期记忆、持续学习与经验积累
4. Test-time Learning & Inference Scaling — 测试时训练、反思、搜索与推理扩展
5. Agents, Tools & Code Evolution — 工具代理、代码演化与系统自动化
6. Verification, Evaluation & Safety — 验证器、评估、奖励攻击、退化与安全
7. Recursive Models & Architectures — 递归模型、循环结构与可增长架构
8. Embodied & Multimodal Intelligence — 具身、视觉、多模态与环境交互
9. Scientific Discovery & Applications — 数学、科学发现与领域应用

主题标签描述论文“研究什么”；阅读路线描述“以什么顺序学习”，两者分开维护。

## 6. 阅读路线

### 6.1 主路线

主路线按知识依赖组织：

1. 概念基础：RSI 的定义、对象、条件与评估方式
2. 反馈机制：自博弈、验证器、合成数据和课程学习
3. 持续能力：记忆、经验积累和持续学习
4. 自主系统：代理、工具使用、代码与训练流程自动化
5. 模型级改进：测试时学习、推理扩展和架构演化
6. 失败与安全：上下文污染、奖励攻击、能力退化和评估
7. 领域应用：机器人、多模态和科学发现

### 6.2 专题路线

第一版提供：

- 10 篇入门路线
- Agent 自我进化路线
- 记忆与持续学习路线
- 自博弈与合成数据路线
- 安全与失败模式路线

路线选择以论文的前置知识、代表性和证据完整度为依据。阅读顺序不会简单复制会议展示等级。

## 7. 技术架构

### 7.1 前端与内容

- Astro 生成静态网站。
- Astro Content Collections 管理论文和阅读路线，并在构建时执行 schema 校验。
- 交互筛选和个人学习状态使用少量客户端 JavaScript。
- 第一版不使用数据库、服务端 API 或第三方登录。

### 7.2 建议目录

```text
rsi-paper-map/
├─ src/
│  ├─ content/papers/
│  ├─ data/reading-paths/
│  ├─ pages/
│  ├─ components/
│  └─ styles/
├─ public/
├─ scripts/
│  ├─ validate-papers.mjs
│  └─ check-links.mjs
├─ tests/
├─ .github/workflows/deploy.yml
└─ astro.config.mjs
```

论文数据、页面渲染、筛选逻辑和本地学习状态分别维护，避免把全部逻辑塞进单个页面组件。

### 7.3 发布

- 使用公开仓库 `Qchen-C/rsi-paper-map`。
- GitHub Actions 安装依赖、运行校验和测试、执行 Astro 构建。
- 构建成功后部署到 GitHub Pages。
- 目标地址为 `https://qchen-c.github.io/rsi-paper-map/`。
- Astro 配置 `site` 与仓库子路径 `base`，确保资源链接正确。

## 8. 内容生产与数据流

1. 从 workshop 来源页导入并锁定 110 篇论文的基础元数据。
2. 为每篇论文解析 OpenReview、arXiv、项目页或代码来源。
3. 先完成摘要级阅读，写入双语摘要、初步主题和关键词。
4. 再检查正文的引言、方法、实验和结论，补充方法、结果、局限和改进闭环。
5. 通过 schema、重复项、链接和核验状态检查。
6. 人工抽查分类与双语内容后提交。
7. GitHub Actions 构建并发布。

对于无法取得正文的论文，保留元数据并明确显示可达到的核验深度，不推测未读内容。

## 9. 错误处理

- 缺少必填字段：构建失败并指出论文 ID 和字段名。
- 重复论文或重复 ID：构建失败。
- 来源链接暂时不可访问：记录检查结果；不删除原始来源，页面显示来源可能暂不可用。
- 关联论文 ID 不存在：构建失败。
- 双语字段缺失：论文不能进入正式发布数据集。
- `localStorage` 不可用或损坏：网站继续提供公开浏览功能，并安全重置个人状态。
- GitHub Pages 部署失败：保留上一次成功版本，Actions 显示失败原因。

## 10. 测试与验收

### 10.1 自动测试

- 内容 schema 与枚举值校验
- 110 篇数量、展示类型分布和唯一性校验
- 中英文字段完整性校验
- 站内关联和阅读路线顺序校验
- 构建与静态页面生成测试
- 搜索、组合筛选和语言切换测试
- 收藏、进度、笔记存取和损坏恢复测试
- 内部链接和主要外部来源链接检查

### 10.2 人工验收

- 桌面和手机端布局可用
- 键盘可以操作导航、筛选和按钮
- 颜色对比和标题层级满足基本可访问性要求
- 首页统计与实际数据一致
- 抽查论文卡片能回溯到来源
- 不登录也能使用完整公共导航功能
- 私人笔记不会进入公开仓库或页面源代码

## 11. 第一版范围与非目标

第一版包含完整论文库、双语研究卡片、九类主题、五条专题路线、搜索筛选、核验状态、本地阅读进度和 GitHub Pages 发布。

第一版不包含账户系统、云同步、评论社区、自动抓取后直接发布、在线协作编辑、付费功能或复杂后端。任何自动生成的内容都必须经过来源核验才能公开展示。

## 12. 实施边界

在本规范审核通过并形成实施计划前，不创建远程 GitHub 仓库、不安装产品依赖、不编写正式网站代码。实施时优先完成内容 schema、少量真实论文样例和基础页面，再批量整理 110 篇论文，降低返工风险。
