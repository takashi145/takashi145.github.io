export type Skill = {
  name: string;
  use: string;
  years: string;
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
      { name: 'HTML5 / CSS3', use: '実務・趣味', years: '約4年' },
      { name: 'JavaScript / Typescript', use: '実務・趣味', years: '約3年' },
      { name: 'PHP', use: '趣味', years: '約4年' },
      { name: 'SQL', use: '実務', years: '約3年' },
    ],
  },
  {
    group: 'フレームワーク / ライブラリ',
    items: [
      { name: 'Laravel', use: '実務・趣味', years: '約2年' },
      { name: 'React', use: '実務・趣味', years: '約4年' },
      { name: 'Vue.js', use: '趣味', years: '約2年' },
    ],
  },
  {
    group: 'ツール / インフラ',
    items: [
      { name: 'Git / GitHub / GitLab', use: '実務・趣味', years: '約4年' },
      { name: 'MySQL', use: '実務・趣味', years: '約2年' },
      { name: 'Docker', use: '実務', years: '約1年' },
    ],
  },
];
