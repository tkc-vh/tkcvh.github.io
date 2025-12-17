// TKC-VH Shared Logic (Temple / Series / Works)
(function(){
  "use strict";

  // Language switch
  const wrap = document.querySelector(".lang-switch");
  if(wrap){
    const btns = wrap.querySelectorAll("button[data-lang]");
    const blocks = { vi: document.getElementById("vi"), en: document.getElementById("en") };
    function setLang(lang){
      Object.keys(blocks).forEach(k=>{ if(blocks[k]) blocks[k].classList.toggle("active", k===lang); });
      btns.forEach(b=>b.classList.toggle("active", b.dataset.lang===lang));
    }
    btns.forEach(b=>b.addEventListener("click", ()=>setLang(b.dataset.lang)));
    setLang("vi");
  }

  // Reveal animation
  const targets = document.querySelectorAll(".reveal");
  if(targets.length){
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add("show");
          io.unobserve(e.target);
        }
      });
    },{threshold:0.12, rootMargin:"0px 0px -8% 0px"});
    targets.forEach(el=>io.observe(el));
  }
})();