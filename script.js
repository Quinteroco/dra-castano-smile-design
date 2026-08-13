/* ===========================================================
   script.js — hero scroll-pin (GSAP ScrollTrigger), Montería pan,
   reveal-on-scroll, tech counters, before/after slider, nav, form.
   =========================================================== */

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

/* ---------------- reveal on scroll ---------------- */
const revealItems = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealItems.forEach(el => io.observe(el));
} else {
  revealItems.forEach(el => el.classList.add("in"));
}

/* ---------------- HERO: pinned scroll scene ---------------- */
(function heroScene() {
  const hero = document.getElementById("hero");
  const mediaWrap = document.getElementById("heroMediaWrap");
  const inner = document.getElementById("heroInner");
  if (!hero || !mediaWrap || !inner || !window.gsap || !window.ScrollTrigger) return;

  gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "+=100%",
      scrub: 0.6,
      pin: true,
      anticipatePin: 1
    }
  })
  .to(mediaWrap, { scale: 1.18, opacity: 0.35, ease: "none" }, 0)
  .to(inner, { y: -60, opacity: 0, ease: "none" }, 0);
})();

/* ---------------- MONTERÍA: pinned horizontal pan ---------------- */
(function monteriaScene() {
  const section = document.getElementById("monteria");
  const track = document.getElementById("monteriaPanTrack");
  if (!section || !track || !window.gsap || !window.ScrollTrigger) return;

  gsap.to(track, {
    xPercent: -75,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6
    }
  });
})();

/* ---------------- tech spec counters ---------------- */
const specRows = document.querySelectorAll(".tech-spec-row");
if (specRows.length && "IntersectionObserver" in window) {
  const specIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numEl = entry.target.querySelector(".tech-spec-num");
        const target = parseFloat(numEl.getAttribute("data-count"));
        const isDecimal = target < 1 || target % 1 !== 0;
        const dur = 1400;
        const t0 = performance.now();
        function step(now) {
          const p = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          numEl.textContent = isDecimal ? val.toFixed(2) : Math.round(val);
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        specIo.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  specRows.forEach(row => specIo.observe(row));
}

/* ---------------- before / after slider ---------------- */
const baInput = document.getElementById("baInput");
const baAfter = document.getElementById("baAfter");
const baHandle = document.getElementById("baHandle");
function setBA(value) {
  baAfter.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
  baHandle.style.left = value + "%";
}
if (baInput) {
  setBA(50);
  baInput.addEventListener("input", e => setBA(e.target.value));
}

/* ---------------- mobile menu ---------------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("mobile-open");
    menuToggle.setAttribute("aria-expanded", open);
  });
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("mobile-open")));
}

/* ---------------- demo form ---------------- */
const demoForm = document.getElementById("demoForm");
if (demoForm) {
  demoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = demoForm.querySelector("button[type=submit]");
    const original = btn.textContent;
    btn.textContent = "Thank you — we'll be in touch";
    btn.disabled = true;
    setTimeout(() => { btn.textContent = original; btn.disabled = false; demoForm.reset(); }, 3200);
  });
}
