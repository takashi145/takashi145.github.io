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
      { name: 'HTML5 / CSS3', tags: ['実務 約2年', '個人開発'] },
      { name: 'JavaScript / TypeScript', tags: ['実務 約2年', '個人開発'] },
      { name: 'PHP', tags: ['実務 約3年', '個人開発'] },
      { name: 'C#', tags: ['実務 約1年', '個人開発'] },
      { name: 'SQL', tags: ['実務 約3年', '個人開発'] },
    ],
  },
  {
    group: 'フレームワーク / ライブラリ',
    items: [
      { name: 'Laravel', tags: ['実務 約2年', '個人開発'] },
      { name: 'React', tags: ['実務 約2年', '個人開発'] },
    ],
  },
  {
    group: 'ツール / インフラ',
    items: [
      { name: 'Git / GitHub / GitLab', tags: ['実務 約3年', '個人開発'] },
      { name: 'MySQL', tags: ['実務 約3年', '個人開発'] },
      { name: 'Docker', tags: ['実務 約3年', '個人開発'] },
    ],
  },
];
