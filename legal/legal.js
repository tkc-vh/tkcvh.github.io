// TKC-VH Legal Library — shared client logic (no inline scripts)
(function () {
  "use strict";

  function toast(msg) {
    try {
      const d = document.createElement("div");
      d.textContent = msg;
      d.style.position = "fixed";
      d.style.left = "50%";
      d.style.bottom = "22px";
      d.style.transform = "translateX(-50%)";
      d.style.padding = "10px 14px";
      d.style.borderRadius = "12px";
      d.style.background = "rgba(0,0,0,.72)";
      d.style.border = "1px solid rgba(255,211,119,.22)";
      d.style.color = "rgba(255,240,210,.95)";
      d.style.boxShadow = "0 12px 26px rgba(0,0,0,.35)";
      d.style.zIndex = "9999";
      document.body.appendChild(d);
      setTimeout(() => d.remove(), 1200);
    } catch (_) {}
  }

  async function copyText(text) {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      toast("Copied.");
    } catch (_) {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
        toast("Copied.");
      } catch (e2) {
        toast("Copy failed.");
      }
    }
  }

  function wireCopyButtons() {
    const btns = document.querySelectorAll("button[data-copy]");
    if (!btns.length) return;
    btns.forEach((b) => {
      b.addEventListener("click", () => {
        const sel = b.getAttribute("data-copy");
        if (!sel) return;
        const el = document.querySelector(sel);
        const t = el ? (el.innerText || el.textContent || "").trim() : "";
        copyText(t);
      });
    });
  }

  function wireLangSwitch() {
    const wrap = document.querySelector(".lang-switch");
    if (!wrap) return;

    const btns = wrap.querySelectorAll("button[data-lang]");
    if (!btns.length) return;

    const blocks = {
      vi: document.getElementById("vi"),
      en: document.getElementById("en"),
    };

    function setLang(lang) {
      Object.keys(blocks).forEach((k) => {
        const el = blocks[k];
        if (!el) return;
        el.classList.toggle("active", k === lang);
      });
      btns.forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    }

    btns.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    setLang("vi");
  }

  document.addEventListener("DOMContentLoaded", () => {
    wireLangSwitch();
    wireCopyButtons();
  });
})();