export type Work = {
  title: string;
  category: string;
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
    category: 'Web',
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
    category: 'ブラウザ拡張',
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
    category: 'デスクトップアプリ',
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
  {
    title: 'ChessReplay',
    category: 'CLIツール',
    image: { src: '/images/chess-replay.webp', alt: 'ChessReplay のリプレイ画面', width: 480, height: 270 },
    links: [
      { label: 'Download', href: 'https://github.com/takashi145/chess-replay/releases/latest' },
      { label: 'Source', href: 'https://github.com/takashi145/chess-replay' },
    ],
    description: 'Chess.com・Lichessの過去の対局を、ターミナル上で再生するCLIツール',
    stack: 'Go · CLI · TUI',
    features: [
      'Chess.com / Lichess のユーザー名を指定して、直近の対局や指定月の対局を一覧から選んで再生',
      '← → で1手ずつ進める・戻す、盤面の反転',
    ],
  },
  {
    title: 'ChessSandbox',
    category: 'CLIツール',
    image: { src: '/images/chess-sandbox.webp', alt: 'ChessSandbox のデモ', width: 480, height: 270 },
    videoSrc: '/images/chess-sandbox.mp4',
    links: [
      { label: 'Download', href: 'https://github.com/takashi145/chess-sandbox/releases/latest' },
      { label: 'Source', href: 'https://github.com/takashi145/chess-sandbox' },
    ],
    description: '局面を試すターミナル上のチェス盤',
    stack: 'Go · CLI · TUI',
    features: [
      '白黒両方を自分で指し、SAN表記（e4, Nf3, O-O など）で手を入力',
      '入力中の手を盤面にプレビュー。不正な手は赤で表示し、矢印キーで指せる手を選択',
      '手の巻き戻し・進め、FEN / PGN の読み込みと PGN の書き出し',
      'セッションを自動保存し、前回の続きから再開',
    ],
  },
];
