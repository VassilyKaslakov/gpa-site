/* ==========================================================================
   Global Proletarian Alliance — 轻量交互脚本
   - 浅/深主题切换（localStorage 持久化；无偏好时跟随系统）
   - 页脚年份自动填充
   无外部依赖。
   ========================================================================== */
(function () {
  "use strict";

  var KEY = "gpa-theme";
  var root = document.documentElement;

  /* ---------- 主题 ---------- */
  function applyTheme(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    function syncIcon() {
      var dark = currentTheme() === "dark";
      toggle.textContent = dark ? "☀" : "☾";
    }
    syncIcon();
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      syncIcon();
    });
  }

  /* ---------- 页脚年份 ---------- */
  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  /* ---------- 标语滚动条 ----------
     每行轨道复制成 6 组：CSS 里 translateX(-16.6667%) 正好左移一组，
     跳回起点时内容完全一致，持续左滚无缝。 */
  var tickerTracks = document.querySelectorAll(".hero__ticker-track");
  if (tickerTracks.length) {
    tickerTracks.forEach(function (track) {
      track.innerHTML = track.innerHTML.repeat(6);
    });
  }
})();
