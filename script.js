/* ===========================================================
   script.js — nav, i18n (ES/EN), reveal-on-scroll, before/after,
   tech-spec counters. Vanilla JS, no dependencies.
   =========================================================== */

/* ---------------- i18n ---------------- */
const translations = {
  es: {
    nav_tech: "Tecnología", nav_services: "Tratamientos", nav_results: "Resultados",
    nav_tourism: "Pacientes Internacionales", nav_contact: "Contacto", nav_cta: "Agenda tu valoración",
    logo_tag: "Arte en tu sonrisa", logo_tag2: "Arte en tu sonrisa",

    hero_bg_word: "PRECISIÓN",
    hero_eyebrow: "Ortodoncia de precisión · Montería, Colombia",
    hero_h1: "Sonrisas diseñadas con la tecnología más avanzada de la región",
    hero_lede: "Escaneo digital 3D, planeación milimétrica y un consultorio pensado para la calma — para que pacientes de Estados Unidos y toda Latinoamérica puedan evaluar y confiar en su tratamiento antes incluso de viajar.",
    hero_cta_primary: "Reserva tu valoración virtual",
    hero_cta_secondary: "Ver nuestra tecnología",
    stat_community: "Comunidad en Instagram",
    stat_precision: "Precisión de escaneo digital",
    stat_lang: "Atención bilingüe",

    spec_scan_label: "ESCANEO 3D", spec_material_label: "CERÁMICA", spec_material_value: "Alta translucidez",
    veneer_caption: "Modelo 3D interactivo — arrastra para girar",

    trust_1: "Escáner intraoral, sin moldes", trust_2: "Curado de última generación",
    trust_3: "Pacientes que nos siguen", trust_4: "Atención bilingüe",

    problem_eyebrow: "El reto de evaluar a distancia",
    problem_h2: "Elegir un consultorio en otro país no debería sentirse como un salto de fe",
    problem_p: "La mayoría de pacientes internacionales solo tienen fotos y reseñas para decidir dónde confiar su sonrisa. Nosotros creemos que deberías poder ver la tecnología, el espacio y el proceso exacto — antes de reservar un vuelo.",

    pillars_eyebrow: "Nuestro enfoque",
    pillars_h2: 'Tres razones por las que <em>viajan</em> hasta Montería',
    pillar1_h: "Tecnología que otros consultorios no tienen",
    pillar1_p: "Escáner intraoral 3Shape TRIOS 3 y lámpara de curado VALO X: mismos equipos que las clínicas líderes de Miami y Nueva York.",
    pillar2_h: "Ves tu resultado antes de empezar",
    pillar2_p: "Diseño digital 3D de tu sonrisa y tu plan de ortodoncia, para que apruebes cada detalle antes de tocar un solo diente.",
    pillar3_h: "Un espacio diseñado para la calma",
    pillar3_p: "Madera cálida, luz natural y líneas limpias — pensado para que la visita al odontólogo se sienta como todo menos una visita al odontólogo.",

    tech_eyebrow: "Tecnología · Precisión digital", tech_word_1: "CONFIANZA",
    tech_lede: "Cada carilla y cada movimiento ortodóntico se planea primero en digital, con datos exactos — no a ojo.",
    tspec1_unit: "mm de margen de error", tspec1_label: "Escaneo intraoral 3Shape TRIOS 3 — sin moldes ni impresiones incómodas.",
    tspec2_unit: "% del plan, digital y aprobado antes de iniciar", tspec2_label: "Visualizas tu sonrisa terminada desde la primera cita.",
    tspec3_unit: "minutos de curado VALO X por sesión", tspec3_label: "Restauraciones más fuertes y duraderas, con menos tiempo en la silla.",

    ba_before: "Antes", ba_after: "Después",
    ba_caption: "Vista previa interactiva — se reemplazará con casos reales aprobados por la doctora",
    ba_eyebrow: "Resultados", ba_h2: 'Arrastra y descubre la <em>transformación</em>',
    ba_li1: "Simulación digital previa: sabes cómo lucirá tu sonrisa antes de empezar el tratamiento.",
    ba_li2: "Alineadores y brackets estéticos de alta gama, cómodos y discretos.",
    ba_li3: "Seguimiento fotográfico y digital documentado en cada control.",

    space_eyebrow: "El consultorio",
    space_h2: "Un espacio que se siente tan cuidado como el tratamiento",
    space_p: "Madera cálida, mármol, luz natural y líneas curvas — cada detalle del consultorio se pensó para bajar el pulso antes de sentarte en la silla.",

    tourism_eyebrow: "Pacientes internacionales", tourism_h2: 'Tu sonrisa, tu <em>próximo viaje</em>',
    tourism_p: "Cada vez más pacientes de Estados Unidos combinan su tratamiento de ortodoncia con unos días en Colombia. Coordinamos tu plan de tratamiento por videollamada antes de tu llegada para aprovechar cada visita al máximo.",
    tourism_cta: "Planear mi viaje y tratamiento",
    tourism_row1: "Costo promedio en EE.UU.", tourism_price1: "$$$$",
    tourism_row2: "Con Dra. Castaño en Montería", tourism_price2: "$$",
    tourism_row3: "Incluye coordinación de tu visita", tourism_price3: "Sí",
    tourism_note: "*Referencial. Los tratamientos de ortodoncia en Colombia suelen tener un costo significativamente menor que en Estados Unidos, con la misma tecnología y estándares internacionales. Valores exactos se confirman en la valoración virtual.",

    test_eyebrow: "Testimonios", test_h2: 'Historias de <em>sonrisas</em> transformadas',
    test_p: "Ejemplo del formato — se reemplazará con testimonios reales de pacientes.",
    test1_q: "Viajé desde Miami para mi ortodoncia y pude ver el consultorio y la tecnología por videollamada antes de reservar el vuelo. El proceso fue impecable de principio a fin.",
    test1_name: "Paciente — Miami, FL", test_example_tag: "Ejemplo",
    test2_q: "El escaneo digital reemplazó los moldes incómodos que recordaba de mi ortodoncia anterior. Vi mi sonrisa final en pantalla antes de empezar.",
    test2_name: "Paciente — Bogotá", test_example_tag2: "Ejemplo",
    test3_q: "La atención bilingüe hizo todo más fácil para mi familia. Muy profesional en cada etapa, y el consultorio se siente más spa que clínica.",
    test3_name: "Paciente — Houston, TX", test_example_tag3: "Ejemplo",

    cta_h2: "¿Lista para diseñar tu nueva sonrisa?",
    cta_btn1: "Escríbenos por WhatsApp", cta_btn2: "Ver Instagram",

    contact_eyebrow: "Contacto", contact_h2: "Cuéntanos sobre tu sonrisa ideal",
    f_name: "Nombre completo", f_country: "País / Ciudad", f_email: "Correo electrónico", f_phone: "WhatsApp / Teléfono",
    f_service: "Tratamiento de interés",
    f_opt1: "Ortodoncia (brackets o alineadores)", f_opt2: "Diseño de sonrisa / carillas",
    f_opt3: "Blanqueamiento dental", f_opt4: "Otro / No estoy segura",
    f_msg: "Mensaje", f_submit: "Enviar solicitud",
    f_note: "Formulario de demostración — se conectará a WhatsApp Business / correo real antes del lanzamiento.",

    ci1_b: "WhatsApp directo", ci1_s: "Respuesta prioritaria para pacientes internacionales",
    ci2_b: "Instagram",
    ci3_b: "Consultorio", ci3_s: "Montería, Córdoba · Colombia",
    ci4_b: "Pagos internacionales", ci4_s: "Próximamente: pagos en USD para pacientes de Estados Unidos",

    fcol1_h: "Navegación", fcol2_h: "Consultorio", fcol3_h: "Contacto",
    footer_loc: "Montería, Colombia", footer_hours: "Citas con agenda previa",
    footer_copy: "© 2026 Dra. Alejandra Castaño. Propuesta de sitio web — versión demo."
  },
  en: {
    nav_tech: "Technology", nav_services: "Treatments", nav_results: "Results",
    nav_tourism: "International Patients", nav_contact: "Contact", nav_cta: "Book your consult",
    logo_tag: "Art in your smile", logo_tag2: "Art in your smile",

    hero_bg_word: "PRECISION",
    hero_eyebrow: "Precision orthodontics · Montería, Colombia",
    hero_h1: "Smiles designed with the most advanced technology in the region",
    hero_lede: "3D digital scanning, millimeter-precise planning and a clinic built for calm — so patients from the US and across Latin America can evaluate and trust their treatment before they even book a flight.",
    hero_cta_primary: "Book your virtual consult",
    hero_cta_secondary: "See our technology",
    stat_community: "Instagram community",
    stat_precision: "Digital scan precision",
    stat_lang: "Bilingual care",

    spec_scan_label: "3D SCAN", spec_material_label: "CERAMIC", spec_material_value: "High translucency",
    veneer_caption: "Interactive 3D model — drag to rotate",

    trust_1: "Intraoral scanner, no molds", trust_2: "Next-gen curing light",
    trust_3: "Patients who follow us", trust_4: "Bilingual care",

    problem_eyebrow: "The challenge of evaluating from afar",
    problem_h2: "Choosing a clinic in another country shouldn't feel like a leap of faith",
    problem_p: "Most international patients only have photos and reviews to decide where to trust their smile. We believe you should be able to see the technology, the space and the exact process — before you even book a flight.",

    pillars_eyebrow: "Our approach",
    pillars_h2: 'Three reasons patients <em>travel</em> to Montería',
    pillar1_h: "Technology most clinics don't have",
    pillar1_p: "3Shape TRIOS 3 intraoral scanner and VALO X curing light — the same equipment used by leading clinics in Miami and New York.",
    pillar2_h: "You see your result before you start",
    pillar2_p: "A digital 3D design of your smile and orthodontic plan, so you approve every detail before we touch a single tooth.",
    pillar3_h: "A space designed for calm",
    pillar3_p: "Warm wood, natural light, clean lines — built so a dental visit feels like anything but a dental visit.",

    tech_eyebrow: "Technology · Digital precision", tech_word_1: "TRUST",
    tech_lede: "Every veneer and every orthodontic movement is planned digitally first, with exact data — not guesswork.",
    tspec1_unit: "mm margin of error", tspec1_label: "3Shape TRIOS 3 intraoral scan — no molds, no uncomfortable impressions.",
    tspec2_unit: "% of your plan, digital and approved before starting", tspec2_label: "You see your finished smile from the first appointment.",
    tspec3_unit: "minutes of VALO X curing per session", tspec3_label: "Stronger, longer-lasting restorations, with less time in the chair.",

    ba_before: "Before", ba_after: "After",
    ba_caption: "Interactive preview — will be replaced with real cases approved by the doctor",
    ba_eyebrow: "Results", ba_h2: 'Drag to reveal the <em>transformation</em>',
    ba_li1: "See your smile in advance with digital simulation before treatment begins.",
    ba_li2: "High-end, comfortable and discreet aligners and aesthetic brackets.",
    ba_li3: "Photographic and digital progress tracking at every check-up.",

    space_eyebrow: "The clinic",
    space_h2: "A space that feels as considered as the treatment itself",
    space_p: "Warm wood, marble, natural light and soft curves — every detail of the clinic was designed to slow your pulse before you sit in the chair.",

    tourism_eyebrow: "International patients", tourism_h2: 'Your smile, your <em>next trip</em>',
    tourism_p: "More and more US patients are combining orthodontic treatment with a few days in Colombia. We coordinate your treatment plan over video call before you arrive, to make the most of every visit.",
    tourism_cta: "Plan my trip and treatment",
    tourism_row1: "Average cost in the U.S.", tourism_price1: "$$$$",
    tourism_row2: "With Dr. Castaño in Montería", tourism_price2: "$$",
    tourism_row3: "Includes trip coordination", tourism_price3: "Yes",
    tourism_note: "*For reference only. Orthodontic treatment in Colombia is typically significantly less expensive than in the US, with the same technology and international standards. Exact costs are confirmed at your virtual consult.",

    test_eyebrow: "Testimonials", test_h2: 'Stories of transformed <em>smiles</em>',
    test_p: "Sample format — will be replaced with real patient testimonials.",
    test1_q: "I flew in from Miami for my orthodontics and got to see the clinic and the technology on a video call before booking my flight. The process was flawless from start to finish.",
    test1_name: "Patient — Miami, FL", test_example_tag: "Sample",
    test2_q: "The digital scan replaced the uncomfortable molds I remembered from my previous orthodontic treatment. I saw my final smile on screen before we even started.",
    test2_name: "Patient — Bogotá", test_example_tag2: "Sample",
    test3_q: "Bilingual care made everything easier for my family. Very professional at every step, and the clinic feels more like a spa than a clinic.",
    test3_name: "Patient — Houston, TX", test_example_tag3: "Sample",

    cta_h2: "Ready to design your new smile?",
    cta_btn1: "Message us on WhatsApp", cta_btn2: "See Instagram",

    contact_eyebrow: "Contact", contact_h2: "Tell us about your ideal smile",
    f_name: "Full name", f_country: "Country / City", f_email: "Email", f_phone: "WhatsApp / Phone",
    f_service: "Treatment of interest",
    f_opt1: "Orthodontics (braces or aligners)", f_opt2: "Smile design / veneers",
    f_opt3: "Teeth whitening", f_opt4: "Other / Not sure yet",
    f_msg: "Message", f_submit: "Send request",
    f_note: "Demo form — will connect to WhatsApp Business / a real inbox before launch.",

    ci1_b: "Direct WhatsApp", ci1_s: "Priority response for international patients",
    ci2_b: "Instagram",
    ci3_b: "Clinic", ci3_s: "Montería, Córdoba · Colombia",
    ci4_b: "International payments", ci4_s: "Coming soon: USD payments for US patients",

    fcol1_h: "Navigation", fcol2_h: "Clinic", fcol3_h: "Contact",
    footer_loc: "Montería, Colombia", footer_hours: "Appointments by scheduled booking",
    footer_copy: "© 2026 Dr. Alejandra Castaño. Website proposal — demo version."
  }
};

function applyLang(lang){
  const dict = translations[lang] || translations.es;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  try{ localStorage.setItem("ac_lang", lang); }catch(e){}
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
});

/* ---------------- reveal on scroll ---------------- */
const revealItems = document.querySelectorAll("[data-reveal]");
if("IntersectionObserver" in window){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealItems.forEach(el => io.observe(el));
} else {
  revealItems.forEach(el => el.classList.add("in"));
}

/* ---------------- tech spec counters ---------------- */
const specRows = document.querySelectorAll(".tech-spec-row");
if(specRows.length && "IntersectionObserver" in window){
  const specIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in");
        const numEl = entry.target.querySelector(".tech-spec-num");
        const target = parseFloat(numEl.getAttribute("data-count"));
        const isDecimal = target < 1 || target % 1 !== 0;
        let start = 0;
        const dur = 1400;
        const t0 = performance.now();
        function step(now){
          const p = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          numEl.textContent = isDecimal ? val.toFixed(2) : Math.round(val);
          if(p < 1) requestAnimationFrame(step);
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
function setBA(value){
  baAfter.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
  baHandle.style.left = value + "%";
}
if(baInput){
  setBA(50);
  baInput.addEventListener("input", e => setBA(e.target.value));
}

/* ---------------- mobile menu ---------------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
if(menuToggle && navLinks){
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("mobile-open");
    menuToggle.setAttribute("aria-expanded", open);
  });
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("mobile-open")));
}

/* ---------------- demo form ---------------- */
const demoForm = document.getElementById("demoForm");
if(demoForm){
  demoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = demoForm.querySelector("button[type=submit]");
    const original = btn.textContent;
    btn.textContent = document.documentElement.lang === "en" ? "Thank you — we'll be in touch" : "Gracias — te contactaremos pronto";
    btn.disabled = true;
    setTimeout(() => { btn.textContent = original; btn.disabled = false; demoForm.reset(); }, 3200);
  });
}

/* ---------------- init ---------------- */
(function initLang(){
  let saved = "es";
  try{ saved = localStorage.getItem("ac_lang") || "es"; }catch(e){}
  applyLang(saved);
})();
