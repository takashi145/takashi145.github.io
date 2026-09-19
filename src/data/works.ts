export type Work = {
  title: string;
  image: { src: string; alt: string; width: number; height: number };
  links: { label: string; href: string }[];
  description: string;
  stack: string;
  features: string[];
};

export const works: Work[] = [
  {
    title: 'SKYWARD CANVAS',
    image: { src: '/images/skyward-canvas.gif', alt: 'SKYWARD CANVAS のデモ', width: 240, height: 135 },
    links: [
      { label: 'Site', href: 'https://takashi145.github.io/skyward-canvas/' },
      { label: 'Source', href: 'https://github.com/takashi145/skyward-canvas' },
    ],
    description:
      '寝そべってただ空を見上げるためのWeb作品。ぼーっとしたいとき、考え事をしたいとき、少しだけ頭を休ませたいとき用。',
    stack: 'JavaScript · Canvas API · Web Audio API',
    features: [
      '快晴・雨・雪の天候切り替えと、降水量のスライダー調整',
      '環境音再生（ON / OFF・音量調整）',
    ],
  },
  {
    title: 'ClipPiP',
    image: { src: '/images/clip-pip.png', alt: 'ClipPiP のアイコン', width: 128, height: 128 },
    links: [
      {
        label: 'Store',
        href: 'https://chromewebstore.google.com/detail/clippip/faembjkijkdjogdmafahklkdheibfccj',
      },
      { label: 'Source', href: 'https://github.com/takashi145/clip_pip' },
    ],
    description:
      '選択した範囲やテキストを、常に最前面に表示される Picture-in-Picture ウィンドウに一時表示する Chrome 拡張機能。',
    stack: 'TypeScript · Chrome拡張（Manifest V3）· esbuild',
    features: [
      'Area Pin：ページ上の範囲をドラッグで選択し、その静止画をPiP表示',
      'Live Pin：選択範囲をページに追従するライブ映像としてPiP表示',
      'Text Pin：選択したテキストを右クリックからPiP表示',
      'ツールバー・右クリックメニュー・キーボードショートカットから起動',
    ],
  },
];
