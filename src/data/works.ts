export type Work = {
  title: string;
  image: { src: string; alt: string; width: number; height: number };
  videoSrc?: string;
  links: { label: string; href: string }[];
  description: string;
  stack: string;
  features: string[];
};

export const works: Work[] = [
  {
    title: 'SKYWARD CANVAS',
    image: { src: '/images/skyward-canvas.webp', alt: 'SKYWARD CANVAS のデモ', width: 240, height: 135 },
    videoSrc: '/images/skyward-canvas.mp4',
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
  {
    title: 'Taskbar Runner',
    image: { src: '/images/taskbar-runner.webp', alt: 'Taskbar Runner のデモ', width: 240, height: 135 },
    videoSrc: '/images/taskbar-runner.mp4',
    links: [
      { label: 'Download', href: 'https://github.com/takashi145/taskbar_runner/releases' },
      { label: 'Source', href: 'https://github.com/takashi145/taskbar_runner' },
    ],
    description:
      'Windowsのタスクバーの上をロボットが走り続ける、常駐型の小さなゲーム',
    stack: 'C# · .NET 10 · WPF · Win32 API',
    features: [
      'ジャンプ・しゃがみ・左右移動で障害物を避けるランゲーム',
      'ベストスコアや累計距離、速度・サイズ・表示位置などの設定を保存',
    ],
  },
];
