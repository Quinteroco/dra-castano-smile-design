(function(){
  "use strict";

  /* ================= i18n dictionary ================= */
  var dict = {
    logo_tag:      { es:"Arte en tu sonrisa", en:"Art in your smile" },
    logo_tag2:     { es:"Arte en tu sonrisa", en:"Art in your smile" },
    nav_services:  { es:"Servicios", en:"Services" },
    nav_results:   { es:"Antes y Después", en:"Before &amp; After" },
    nav_tourism:   { es:"Pacientes Internacionales", en:"International Patients" },
    nav_testimonials:{ es:"Testimonios", en:"Testimonials" },
    nav_contact:   { es:"Contacto", en:"Contact" },
    nav_cta:       { es:"Agenda tu cita", en:"Book a Visit" },

    hero_eyebrow:  { es:"Diseño de sonrisa · Odontología estética premium", en:"Smile Design · Premium Cosmetic Dentistry" },
    hero_h1:       { es:'El arte de una sonrisa <em>perfecta</em>, diseñada para ti', en:'The art of a <em>perfect</em> smile, designed for you' },
    hero_lede:     { es:"Diseño de sonrisa y lentes cerámicos de alta precisión en Montería, Colombia — con pacientes que viajan desde Estados Unidos, Venezuela y toda Latinoamérica para transformar su sonrisa.", en:"Precision smile design and porcelain veneers in Montería, Colombia — trusted by patients who travel from the United States, Venezuela and across Latin America to transform their smile." },
    hero_cta_primary:{ es:"Reserva tu valoración", en:"Book Your Consultation" },
    hero_cta_secondary:{ es:"Ver servicios", en:"View Services" },
    stat_community:{ es:"Comunidad en Instagram", en:"Instagram community" },
    stat_cities:   { es:"Ciudades · Montería, Medellín, Maracaibo", en:"Cities · Montería, Medellín, Maracaibo" },
    stat_lang:     { es:"Atención bilingüe", en:"Bilingual care" },
    hero_badge:    { es:"Cuenta de Instagram verificada · @dra.alejandracastanov", en:"Verified Instagram account · @dra.alejandracastanov" },
    ig_posts:      { es:"publicaciones", en:"posts" },
    ig_followers:  { es:"seguidores", en:"followers" },
    ig_following:  { es:"seguidos", en:"following" },
    ig_cta:        { es:"Ver perfil en Instagram", en:"View Instagram profile" },

    trust_1:{ es:"Seguidoras en Instagram", en:"Instagram followers" },
    trust_2:{ es:"Ciudades con atención", en:"Cities served" },
    trust_3:{ es:"Idiomas · ES / EN", en:"Languages · EN / ES" },
    trust_4:{ es:"Diseño personalizado", en:"Custom-designed" },

    services_eyebrow:{ es:"Servicios", en:"Services" },
    services_h2:{ es:"Cada sonrisa se <em>diseña</em>, no se improvisa", en:"Every smile is <em>designed</em>, never improvised" },
    services_p:{ es:"Procedimientos de odontología estética de alta precisión, planeados digitalmente antes de tocar un solo diente.", en:"High-precision cosmetic dentistry, planned digitally before a single tooth is touched." },

    svc1_h:{ es:"Diseño de sonrisa", en:"Smile Design" },
    svc1_p:{ es:"Planeación digital 3D de tu nueva sonrisa antes de iniciar cualquier procedimiento.", en:"Digital 3D planning of your new smile before any procedure begins." },
    svc2_h:{ es:"Lentes cerámicos", en:"Porcelain Veneers" },
    svc2_p:{ es:"Porcelain veneers de mínima invasión para un resultado natural y duradero.", en:"Minimally invasive porcelain veneers for a natural, long-lasting result." },
    svc3_h:{ es:"Blanqueamiento dental", en:"Teeth Whitening" },
    svc3_p:{ es:"Aclaramiento profesional supervisado, sin sensibilidad, con resultados visibles.", en:"Supervised professional whitening, low sensitivity, visible results." },
    svc4_h:{ es:"Carillas de resina", en:"Composite Veneers" },
    svc4_p:{ es:"Alternativa conservadora y económica para corregir forma, color y espacios.", en:"A conservative, cost-effective way to correct shape, color and spacing." },
    svc5_h:{ es:"Rehabilitación oral estética", en:"Full Smile Rehabilitation" },
    svc5_p:{ es:"Restauración integral de casos complejos combinando función y estética.", en:"Comprehensive restoration of complex cases, combining function and aesthetics." },
    svc6_h:{ es:"Ortodoncia invisible", en:"Clear Aligners" },
    svc6_p:{ es:"Alineadores transparentes para complementar tu diseño de sonrisa.", en:"Clear aligners that complement your smile design." },

    ba_before:{ es:"Antes", en:"Before" },
    ba_after:{ es:"Después", en:"After" },
    ba_caption:{ es:"Vista previa interactiva — se reemplazará con casos reales aprobados por la doctora", en:"Interactive preview — will be replaced with real cases approved by the doctor" },
    ba_eyebrow:{ es:"Resultados", en:"Results" },
    ba_h2:{ es:'Arrastra y descubre la <em style="font-style:italic;color:var(--orange-soft)">transformación</em>', en:'Drag to reveal the <em style="font-style:italic;color:var(--orange-soft)">transformation</em>' },
    ba_li1:{ es:"Planeación digital previa: sabes cómo lucirá tu sonrisa antes de empezar.", en:"Digital preview first: you see how your smile will look before starting." },
    ba_li2:{ es:"Materiales de porcelana de alta gama, resistentes y de aspecto natural.", en:"High-grade porcelain materials — durable and natural-looking." },
    ba_li3:{ es:"Seguimiento fotográfico documentado en cada etapa del proceso.", en:"Documented photographic follow-up at every stage of treatment." },

    tourism_eyebrow:{ es:"Pacientes internacionales", en:"International Patients" },
    tourism_h2:{ es:'Tu sonrisa, tu <em style="font-style:italic;color:var(--orange-soft)">próximo viaje</em>', en:'Your smile, your <em style="font-style:italic;color:var(--orange-soft)">next trip</em>' },
    tourism_p:{ es:"Cada vez más pacientes de Estados Unidos y Latinoamérica combinan un tratamiento de odontología estética premium con unos días en Colombia. Coordinamos tu plan de tratamiento antes de tu llegada para optimizar cada visita.", en:"More patients from the U.S. and across Latin America are pairing premium cosmetic dentistry with a few days in Colombia. We plan your treatment before you arrive so every visit counts." },
    tourism_cta:{ es:"Planear mi viaje y tratamiento", en:"Plan My Trip &amp; Treatment" },
    tourism_row1:{ es:"Costo promedio en EE.UU.", en:"Average cost in the U.S." },
    tourism_price1:{ es:"$$$$", en:"$$$$" },
    tourism_row2:{ es:"Con Dra. Castaño en Montería", en:"With Dr. Castaño in Montería" },
    tourism_price2:{ es:"$$", en:"$$" },
    tourism_row3:{ es:"Incluye coordinación de tu visita", en:"Includes visit coordination" },
    tourism_price3:{ es:"Sí", en:"Yes" },
    tourism_note:{ es:"*Referencial. Los procedimientos de odontología estética en Colombia suelen tener un costo significativamente menor que en Estados Unidos, manteniendo estándares internacionales de calidad. Valores exactos se confirman en la valoración.", en:"*For reference only. Cosmetic dentistry procedures in Colombia are typically significantly lower cost than in the U.S., while maintaining international quality standards. Exact pricing is confirmed at your consultation." },

    test_eyebrow:{ es:"Testimonios", en:"Testimonials" },
    test_h2:{ es:"Historias de <em>sonrisas</em> transformadas", en:"Stories of <em>transformed</em> smiles" },
    test_p:{ es:"Ejemplo del formato — se reemplazará con testimonios reales de pacientes.", en:"Format example — will be replaced with real patient testimonials." },
    test1_q:{ es:"Viajé desde Miami para mi diseño de sonrisa y el proceso fue impecable, desde la primera videollamada hasta el resultado final.", en:"I flew in from Miami for my smile design and the process was flawless, from the first video call to the final result." },
    test1_name:{ es:"Paciente — Miami, FL", en:"Patient — Miami, FL" },
    test2_q:{ es:"Mis lentes cerámicos se ven completamente naturales. Nadie nota que son carillas, solo que sonrío distinto.", en:"My porcelain veneers look completely natural. No one notices they're veneers — they just notice I smile differently." },
    test2_name:{ es:"Paciente — Medellín", en:"Patient — Medellín" },
    test3_q:{ es:"La atención bilingüe hizo todo más fácil para mi familia en Maracaibo. Muy profesional en cada etapa.", en:"Bilingual care made everything easier for my family in Maracaibo. Very professional at every step." },
    test3_name:{ es:"Paciente — Maracaibo", en:"Patient — Maracaibo" },
    test_example_tag:{ es:"Ejemplo", en:"Example" },
    test_example_tag2:{ es:"Ejemplo", en:"Example" },
    test_example_tag3:{ es:"Ejemplo", en:"Example" },

    loc_eyebrow:{ es:"Sedes", en:"Locations" },
    loc_h2:{ es:"Te atendemos en <em>tres ciudades</em>", en:"We see patients in <em>three cities</em>" },
    loc1_tag:{ es:"Sede principal", en:"Main location" },
    loc1_p:{ es:"Consultorio principal — agenda de valoraciones presenciales y para pacientes internacionales.", en:"Main office — in-person consultations and international patient scheduling." },
    loc2_tag:{ es:"Colombia", en:"Colombia" },
    loc2_p:{ es:"Atención periódica — consulta disponibilidad de agenda.", en:"Periodic visits — ask about upcoming availability." },
    loc3_tag:{ es:"Venezuela", en:"Venezuela" },
    loc3_p:{ es:"Atención periódica — consulta disponibilidad de agenda.", en:"Periodic visits — ask about upcoming availability." },

    cta_h2:{ es:"¿Lista para diseñar tu nueva sonrisa?", en:"Ready to design your new smile?" },
    cta_btn1:{ es:"Escríbenos por WhatsApp", en:"Message Us on WhatsApp" },
    cta_btn2:{ es:"Ver Instagram", en:"View Instagram" },

    contact_eyebrow:{ es:"Contacto", en:"Contact" },
    contact_h2:{ es:"Cuéntanos sobre tu sonrisa ideal", en:"Tell us about your ideal smile" },
    f_name:{ es:"Nombre completo", en:"Full name" },
    f_country:{ es:"País / Ciudad", en:"Country / City" },
    f_email:{ es:"Correo electrónico", en:"Email address" },
    f_phone:{ es:"WhatsApp / Teléfono", en:"WhatsApp / Phone" },
    f_service:{ es:"Procedimiento de interés", en:"Procedure of interest" },
    f_opt1:{ es:"Diseño de sonrisa", en:"Smile design" },
    f_opt2:{ es:"Lentes cerámicos", en:"Porcelain veneers" },
    f_opt3:{ es:"Blanqueamiento dental", en:"Teeth whitening" },
    f_opt4:{ es:"Otro / No estoy segura", en:"Other / Not sure yet" },
    f_msg:{ es:"Mensaje", en:"Message" },
    f_submit:{ es:"Enviar solicitud", en:"Send Request" },
    f_note:{ es:"Formulario de demostración — se conectará a WhatsApp Business / correo real antes del lanzamiento.", en:"Demo form — will be connected to WhatsApp Business / a live inbox before launch." },

    ci1_b:{ es:"WhatsApp directo", en:"Direct WhatsApp" },
    ci1_s:{ es:"Respuesta prioritaria para pacientes internacionales", en:"Priority response for international patients" },
    ci2_b:{ es:"Instagram", en:"Instagram" },
    ci3_b:{ es:"Sede principal", en:"Main location" },
    ci3_s:{ es:"Montería, Córdoba · Colombia", en:"Montería, Córdoba · Colombia" },
    ci4_b:{ es:"Pagos internacionales", en:"International Payments" },
    ci4_s:{ es:"Próximamente: pagos en USD para pacientes de Estados Unidos", en:"Coming soon: USD payments for U.S. patients" },

    fcol1_h:{ es:"Navegación", en:"Navigation" },
    fcol2_h:{ es:"Sedes", en:"Locations" },
    fcol3_h:{ es:"Contacto", en:"Contact" },
    footer_copy:{ es:"© 2026 Dra. Alejandra Castaño. Propuesta de sitio web — versión demo.", en:"© 2026 Dra. Alejandra Castaño. Website proposal — demo version." }
  };

  var htmlKeys = { hero_h1:1, services_h2:1, ba_h2:1, tourism_h2:1, test_h2:1, loc_h2:1, tourism_cta:1, nav_results:1 };

  function applyLang(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      var entry = dict[key];
      if(!entry) return;
      var val = entry[lang] || entry.es;
      if(htmlKeys[key]){ el.innerHTML = val; } else { el.textContent = val; }
    });
    document.querySelectorAll(".lang-btn").forEach(function(btn){
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    try{ localStorage.setItem("ac_lang", lang); }catch(e){}
  }

  document.querySelectorAll(".lang-btn").forEach(function(btn){
    btn.addEventListener("click", function(){ applyLang(btn.getAttribute("data-lang")); });
  });

  var savedLang = "es";
  try{ savedLang = localStorage.getItem("ac_lang") || "es"; }catch(e){}
  applyLang(savedLang);

  /* ================= Mobile menu ================= */
  var menuToggle = document.getElementById("menuToggle");
  var navLinks = document.querySelector(".nav-links");
  if(menuToggle){
    menuToggle.addEventListener("click", function(){
      var open = navLinks.style.display === "flex";
      if(open){
        navLinks.style.display = "";
      }else{
        navLinks.style.cssText = "display:flex; position:fixed; top:76px; left:0; right:0; background:#0b0b0c; flex-direction:column; padding:24px 28px; gap:22px; border-bottom:1px solid #2a2a2d;";
      }
    });
  }

  /* ================= Before / After slider ================= */
  var baInput = document.getElementById("baInput");
  var baAfter = document.getElementById("baAfter");
  var baHandle = document.getElementById("baHandle");
  function updateSlider(v){
    baAfter.style.clipPath = "inset(0 0 0 " + v + "%)";
    baHandle.style.left = v + "%";
  }
  if(baInput){
    baInput.addEventListener("input", function(){ updateSlider(baInput.value); });
    updateSlider(50);
  }

  /* ================= Scroll reveal ================= */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function(el){ io.observe(el); });
  }else{
    revealEls.forEach(function(el){ el.classList.add("in"); });
  }

  /* ================= Topbar shrink on scroll ================= */
  var topbar = document.querySelector(".topbar");
  window.addEventListener("scroll", function(){
    if(window.scrollY > 20){ topbar.style.background = "rgba(11,11,12,.92)"; }
    else{ topbar.style.background = "rgba(11,11,12,.72)"; }
  });

  /* ================= Instagram stats (live-ready) =================
     Reads assets/followers.json — a static file today, refreshed by
     hand. Once the account is connected via the Instagram Graph API,
     a scheduled GitHub Action can overwrite this file automatically
     and the numbers below update with zero code changes. */
  fetch("assets/followers.json", { cache: "no-store" })
    .then(function(r){ return r.ok ? r.json() : null; })
    .then(function(data){
      if(!data) return;
      var stats = document.querySelectorAll(".ig-stats b");
      if(stats.length === 3){
        stats[0].textContent = data.posts;
        stats[1].textContent = data.display;
        stats[2].textContent = data.following;
      }
    })
    .catch(function(){ /* keep the values already in the HTML */ });

  /* ================= Demo contact form ================= */
  var form = document.getElementById("demoForm");
  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var lang = document.documentElement.lang === "en" ? "en" : "es";
      var msg = lang === "en"
        ? "Thanks! This is a demo form — in the live site this will reach WhatsApp / email directly."
        : "¡Gracias! Este es un formulario de demostración — en el sitio real esto llegará directo por WhatsApp / correo.";
      alert(msg);
      form.reset();
    });
  }
})();
