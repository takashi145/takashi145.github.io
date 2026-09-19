export type Skill = {
  name: string;
  tags?: string[];
  desc?: string;
};

export type SkillGroup = {
  group: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    group: '言語',
    items: [
      { name: 'HTML5 / CSS3' },
      { name: 'JavaScript / TypeScript' },
      { name: 'PHP' },
      { name: 'SQL' },
    ],
  },
  {
    group: 'フレームワーク / ライブラリ',
    items: [
      { name: 'Laravel' },
      { name: 'React' },
      { name: 'Vue.js' },
    ],
  },
  {
    group: 'ツール / インフラ',
    items: [
      { name: 'Git / GitHub / GitLab' },
      { name: 'MySQL' },
      { name: 'Docker' },
    ],
  },
];
