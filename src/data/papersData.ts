// src/data/papersData.ts
import craft from '../assets/papers/craft.jpg';
import intermimicgen from '../assets/papers/intermimicgen.jpg';
import nerf2physics from '../assets/papers/nerf2physics.jpg';
import reasonnav from '../assets/papers/reasonnav.jpg';

export interface PaperLink {
  label: string;
  url: string;
}

export interface Paper {
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
  /** First page of the PDF, or a photo for non-paper writeups. */
  preview: string;
  /** Page previews are portrait; photos are landscape. */
  previewKind: 'page' | 'photo';
  /** Set when the paper was recognised at its venue; highlights the card. */
  award?: string;
  links: PaperLink[];
}

/** Authors who are SIGRobotics members; highlighted in each paper's author list. */
export const memberAuthors = new Set([
  'Bhargav Chandaka',
  'Anatulya Nandi',
  'Gloria X. Wang',
  'Henry Che',
  'Leo Lin',
  'Jay Moon',
]);

export const papers: Paper[] = [
  {
    title:
      'InterMimicGen: Scaling Humanoid Loco-Manipulation through Self-Evolving Motion Imitation',
    authors:
      'Yucheng Zhang, Sirui Xu, Jinhong Li, Liuyu Bian, Anatulya Nandi, Derek Zhang, Xiangchen Liu, Xueting Li, Umar Iqbal, Yu-Xiong Wang, Liang-Yan Gui',
    venue: 'arXiv',
    year: '2026',
    abstract:
      'Retargets motion-captured human-object interactions onto a humanoid with dexterous hands, trains one generalist tracking policy to execute them, then grows the dataset by keeping only the edited variants that still complete the task in simulation.',
    preview: intermimicgen,
    previewKind: 'page',
    links: [
      { label: 'Project page', url: 'https://sirui-xu.github.io/InterMimicGen' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2610.06850' },
    ],
  },
  {
    title: 'CRAFT: A Tendon-Driven Hand with Hybrid Hard-Soft Compliance',
    authors: 'Leo Lin, Shivansh Patel, Jay Moon, Svetlana Lazebnik, Unnat Jain',
    venue: 'RSS',
    year: '2026',
    abstract:
      'A tendon-driven anthropomorphic hand that places soft material at the joints and keeps the links rigid, on the observation that contact is not uniform across a hand. Covers 33/33 grasps in the Feix taxonomy for under $600.',
    preview: craft,
    previewKind: 'page',
    award: 'Best Paper, Dexterous Manipulation Workshop',
    links: [
      { label: 'Project page', url: 'https://craft-hand.github.io/' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2603.12120' },
      { label: 'Code', url: 'https://github.com/craft-hand' },
    ],
  },
  {
    title: 'Human-like Navigation in a World Built for Humans',
    authors:
      'Bhargav Chandaka, Gloria X. Wang, Haozhe Chen, Henry Che, Albert J. Zhai, Shenlong Wang',
    venue: 'CoRL',
    year: '2025',
    abstract:
      'Navigating an unfamiliar building the way people do — reading signs and asking for directions — rather than exhaustively searching the space.',
    preview: reasonnav,
    previewKind: 'page',
    links: [
      { label: 'Project page', url: 'https://reasonnav.github.io/' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2509.21189' },
      { label: 'Code', url: 'https://github.com/ReasonNav/ReasonNav' },
    ],
  },
  {
    title: 'Physical Property Understanding from Language-Embedded Feature Fields',
    authors:
      'Albert J. Zhai, Yuan Shen, Emily Y. Chen, Gloria X. Wang, Xinlei Wang, Sheng Wang, Kaiyu Guan, Shenlong Wang',
    venue: 'CVPR',
    year: '2024',
    abstract:
      'Estimating physical properties such as mass and hardness from images alone, by fusing language-embedded features across views of a scene.',
    preview: nerf2physics,
    previewKind: 'page',
    links: [
      { label: 'Project page', url: 'https://ajzhai.github.io/NeRF2Physics/' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2404.04242' },
      { label: 'Code', url: 'https://github.com/ajzhai/NeRF2Physics' },
    ],
  },
];
