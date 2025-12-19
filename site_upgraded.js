// TKC-VH Shared Logic (Temple / Series / Works)
(function(){
  "use strict";

  // Language switch (if present on page)
  const wrap = document.querySelector(".lang-switch");
  if(wrap){
    const btns = wrap.querySelectorAll("button[data-lang]");
    const blocks = { vi: document.getElementById("vi"), en: document.getElementById("en") };
    function setLang(lang){
      Object.keys(blocks).forEach(k=>{
        if(blocks[k]) blocks[k].classList.toggle("active", k===lang);
      });
      btns.forEach(b=>b.classList.toggle("active", b.dataset.lang===lang));
    }
    btns.forEach(b=>b.addEventListener("click", ()=>setLang(b.dataset.lang)));
    setLang("vi");
  }

  // Utility: run after DOM is ready
  function onReady(fn){
    if(document.readyState==="loading"){
      document.addEventListener("DOMContentLoaded", fn, {once:true});
    } else {
      fn();
    }
  }

  // Reveal animation (if .reveal elements exist)
  const revealTargets = document.querySelectorAll(".reveal");
  if(revealTargets.length){
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add("show");
          io.unobserve(e.target);
        }
      });
    },{threshold:0.12, rootMargin:"0px 0px -8% 0px"});
    revealTargets.forEach(el=>io.observe(el));
  }

  // Soft protection for emblem/logo images (static-site friendly)
  function hardenImages(){
    const imgs = document.querySelectorAll('img[data-protect], .moon img, .seal img');
    if(!imgs.length) return;

    imgs.forEach(img=>{
      try{
        img.setAttribute("draggable","false");
        img.addEventListener("dragstart", e=>e.preventDefault(), {capture:true});
        img.addEventListener("contextmenu", e=>e.preventDefault(), {capture:true});
      }catch(_){}
    });
  }

  // Ripple effect on cards/buttons (no CSS class changes required)
  function wireRipples(){
    // Respect reduced motion
    try{
      if(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    }catch(_){}

    const targets = document.querySelectorAll(".card, .work-card, .btn, .navbtn, .tab");
    if(!targets.length) return;

    targets.forEach(el=>{
      // avoid double-binding
      if(el.dataset && el.dataset.rippleBound) return;
      if(el.dataset) el.dataset.rippleBound = "1";

      el.addEventListener("pointerdown", (ev)=>{
        // only primary interaction
        if(ev.button !== undefined && ev.button !== 0) return;

        const rect = el.getBoundingClientRect();
        const maxDim = Math.max(rect.width, rect.height);
        const size = Math.min(Math.max(maxDim * 1.15, 120), 420);

        const ripple = document.createElement("span");
        ripple.className = "tkc-ripple";
        ripple.style.width = size + "px";
        ripple.style.height = size + "px";
        ripple.style.left = (ev.clientX - rect.left) + "px";
        ripple.style.top  = (ev.clientY - rect.top) + "px";

        // ensure element can host absolute children
        const prevPos = getComputedStyle(el).position;
        if(prevPos === "static") el.style.position = "relative";
        el.appendChild(ripple);

        ripple.addEventListener("animationend", ()=> ripple.remove(), {once:true});
      }, {passive:true});
    });
  }

  /* ===== LOGO PROTECTION (Index/Temple) =====
     This is "soft protection": prevents right-click save menu, dragging, and selection
     for elements marked with data-protect (and the seal wrapper). */
  function initLogoProtect(){
    const protect = (el) => {
      if(!el) return;

      el.addEventListener("contextmenu", e => e.preventDefault(), {capture:true});
      el.addEventListener("dragstart", e => e.preventDefault(), {capture:true});

      // block selection / long-press callout
      try{
        el.style.userSelect = "none";
        el.style.webkitUserSelect = "none";
        el.style.webkitTouchCallout = "none";
      }catch(_){}
    };

    // Protect all elements marked with data-protect
    document.querySelectorAll('[data-protect], [data-protect="logo"]').forEach(protect);

    // Extra safety for seal structure on index (covers clicks on wrappers, not just img)
    protect(document.querySelector(".seal-wrap"));
    protect(document.querySelector(".seal"));
    protect(document.querySelector(".seal img"));

    // Global capture guard: block right-click if click is inside protected logo area
    document.addEventListener("contextmenu", (e) => {
      const hit = e.target.closest('.seal-wrap, .seal, [data-protect], [data-protect="logo"]');
      if(hit) e.preventDefault();
    }, {capture:true});
  }

  // ✅ IMPORTANT: actually run the enhancements
  onReady(() => {
    hardenImages();
    wireRipples();
    initLogoProtect();
  });

})();
