// 表示テーマの切り替え（押すたびに Light → Dark → System）
(function () {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const MODES = ["light", "dark", "system"];
  const LABELS = { light: "Light", dark: "Dark", system: "System" };

  // 保存値がなければシステム追従とみなす
  const currentMode = () => {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "system";
  };

  const applyTheme = () => {
    const mode = currentMode();
    const dark = mode === "dark" || (mode === "system" && media.matches);
    if (dark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    btn.textContent = LABELS[mode];
    btn.title = "表示テーマ: " + LABELS[mode] + "（クリックで切り替え）";
  };

  btn.addEventListener("click", () => {
    const next = MODES[(MODES.indexOf(currentMode()) + 1) % MODES.length];
    if (next === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", next);
    }
    applyTheme();
  });

  // システム追従中はOSの設定変更に即座に反応させる
  media.addEventListener("change", () => {
    if (currentMode() === "system") applyTheme();
  });

  applyTheme();
})();

// 現在表示中のセクションをナビに反映する
(function () {
  const header = document.querySelector(".site-header");
  const items = [...document.querySelectorAll(".site-nav a[href^='#']")]
    .map((a) => ({ a, el: document.getElementById(a.getAttribute("href").slice(1)) }))
    .filter((item) => item.el);
  if (items.length === 0) return;

  // ヘッダーの実測の高さで補正する（画面幅によって高さが変わるため）
  const offset = () => (header ? header.getBoundingClientRect().height + 8 : 70);
  let current = null;
  let ticking = false;

  const sync = () => {
    ticking = false;
    let active = items[0];
    const limit = offset();
    for (const item of items) {
      if (item.el.getBoundingClientRect().top <= limit) active = item;
    }
    // 最下部では最後のセクションを選択（短いセクションが選ばれないのを防ぐ）
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      active = items[items.length - 1];
    }
    if (active === current) return;
    current = active;
    items.forEach((item) => item.a.classList.toggle("is-current", item === active));
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(sync);
  };

  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  sync();
})();
