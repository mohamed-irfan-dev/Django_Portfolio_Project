(() => {
  "use strict"; 
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  // Loader
  const loader = $(".loader");
  const hideLoader = () => loader && loader.classList.add("hide");
  window.addEventListener("load", () => setTimeout(hideLoader, Math.max(0, 2500 - performance.now())));
  setTimeout(hideLoader, 7000);

  // Navbar
  const nav = $(".irfan-navbar");
  let lastY = 0;
  let ticking = false;
  const setNavHeight = () => document.documentElement.style.setProperty("--nav-h", `${nav.offsetHeight}px`);
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      nav.classList.toggle("irfan-nav-hidden", y > 50 && y > lastY);
      lastY = y;
      ticking = false;
    });
  }, { passive: true });

  // Projects
  const projectToggles = $$(".project").map((project, i) => {
    const btn = $(".btn", project);
    const details = project.nextElementSibling;
    if (!btn || !details || !details.classList.contains("project-details")) return null;
    details.id = `project-details-${i + 1}`;
    btn.type = "button";
    btn.setAttribute("aria-controls", details.id);
    btn.setAttribute("aria-label", `Toggle details: ${$("h3", project).textContent.trim()}`);
    btn.setAttribute("aria-expanded", "false");
    const setHeight = () => { details.style.maxHeight = details.classList.contains("show") ? `${details.scrollHeight}px` : ""; };
    btn.addEventListener("click", () => {
      const open = !details.classList.contains("show");
      project.classList.toggle("is-open", open);
      details.classList.toggle("show", open);
      btn.classList.toggle("active", open);
      btn.setAttribute("aria-expanded", String(open));
      setHeight();
    });
    return setHeight;
  }).filter(Boolean);

  const onResize = () => { setNavHeight(); projectToggles.forEach((fn) => fn()); };
  let resizeTimer;
  window.addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(onResize, 100); });
  setNavHeight();
  window.addEventListener("load", setNavHeight);

  // Contact
  const form = document.querySelector("#inquiryForm");
  form.addEventListener("submit", function(e) {
      e.preventDefault();
      fetch(form.action, {
          method: "POST",
          body: new FormData(form)
      })
      .then(response => response.json())
      .then(data => {
          if (data.status === "success") {
              alert("Message sent successfully!");
              form.reset();
          }
      });
  });
  
  //  Reveal
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
    }), { threshold: 0.15 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }
})();
