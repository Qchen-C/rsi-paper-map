export interface Theme {
  id: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
}

export const THEMES: readonly Theme[] = [
  {
    id: 'foundations-recursive-computation',
    titleEn: 'Foundations & Recursive Computation',
    titleZh: '基础与递归计算',
    descriptionEn: 'Definitions, iterative computation, and formal views of self-improvement.',
    descriptionZh: '自我改进的定义、迭代计算及其形式化理解。',
  },
  {
    id: 'self-play-synthetic-data-curriculum',
    titleEn: 'Self-play, Synthetic Data & Curriculum',
    titleZh: '自博弈、合成数据与课程学习',
    descriptionEn: 'Systems that create their own tasks, data, opponents, or learning curricula.',
    descriptionZh: '系统自行生成任务、数据、对手或学习课程。',
  },
  {
    id: 'memory-continual-adaptation',
    titleEn: 'Memory & Continual Adaptation',
    titleZh: '记忆与持续适应',
    descriptionEn: 'Long-term memory, experience accumulation, and continual learning.',
    descriptionZh: '长期记忆、经验积累与持续学习。',
  },
  {
    id: 'test-time-learning-inference-scaling',
    titleEn: 'Test-time Learning & Inference Scaling',
    titleZh: '测试时学习与推理扩展',
    descriptionEn: 'Adaptation, search, reflection, and extra computation during inference.',
    descriptionZh: '推理阶段的适应、搜索、反思与额外计算。',
  },
  {
    id: 'agents-tools-code-evolution',
    titleEn: 'Agents, Tools & Code Evolution',
    titleZh: '代理、工具与代码演化',
    descriptionEn: 'Tool-using agents and systems that improve code or their own workflows.',
    descriptionZh: '使用工具并改进代码或自身工作流的代理系统。',
  },
  {
    id: 'verification-evaluation-safety',
    titleEn: 'Verification, Evaluation & Safety',
    titleZh: '验证、评估与安全',
    descriptionEn: 'Verifiers, benchmarks, failure diagnosis, reward hacking, and safeguards.',
    descriptionZh: '验证器、基准、失败诊断、奖励攻击与安全防护。',
  },
  {
    id: 'recursive-models-architectures',
    titleEn: 'Recursive Models & Architectures',
    titleZh: '递归模型与架构',
    descriptionEn: 'Looped, recurrent, depth-growing, and self-modifying model structures.',
    descriptionZh: '循环、递归、深度增长与可自我修改的模型结构。',
  },
  {
    id: 'embodied-multimodal-intelligence',
    titleEn: 'Embodied & Multimodal Intelligence',
    titleZh: '具身与多模态智能',
    descriptionEn: 'Robotics, vision, action, and multimodal environment interaction.',
    descriptionZh: '机器人、视觉、行动与多模态环境交互。',
  },
  {
    id: 'scientific-discovery-applications',
    titleEn: 'Scientific Discovery & Applications',
    titleZh: '科学发现与领域应用',
    descriptionEn: 'Mathematics, science, engineering, and domain-specific improvement loops.',
    descriptionZh: '数学、科学、工程及其他领域中的自我改进闭环。',
  },
] as const;
