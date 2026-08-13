/* ===========================================================
   veneer.js — procedural 3D dental veneer, rendered with Three.js
   Two live instances: hero (drag-to-rotate) + tech section (scroll-driven)
   No external 3D model or HDR needed — geometry + lighting only.
   =========================================================== */
(function(){
  if (typeof THREE === "undefined") return;

  function buildVeneerGeometry(){
    const shape = new THREE.Shape();
    shape.moveTo(-0.62, 0);
    shape.quadraticCurveTo(-0.74, 0.55, -0.58, 1.05);
    shape.quadraticCurveTo(-0.50, 1.38, -0.22, 1.52);
    shape.quadraticCurveTo(-0.08, 1.58, 0.0, 1.55);
    shape.quadraticCurveTo(0.08, 1.58, 0.22, 1.52);
    shape.quadraticCurveTo(0.50, 1.38, 0.58, 1.05);
    shape.quadraticCurveTo(0.74, 0.55, 0.62, 0);
    shape.quadraticCurveTo(0.0, -0.12, -0.62, 0);

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.30, bevelEnabled: true, bevelThickness: 0.06,
      bevelSize: 0.055, bevelSegments: 8, curveSegments: 32
    });
    geo.center();

    const pos = geo.attributes.position;
    for(let i=0;i<pos.count;i++){
      const x = pos.getX(i), z = pos.getZ(i);
      const bulge = Math.cos(x*1.05) * 0.34;
      pos.setZ(i, z + bulge - 0.17);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    return geo;
  }

  function makeMaterial(){
    return new THREE.MeshPhysicalMaterial({
      color: 0xfbf6ec,
      roughness: 0.22,
      metalness: 0.02,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      reflectivity: 0.55,
      sheen: 1,
      sheenColor: new THREE.Color(0xE9CFA0),
      sheenRoughness: 0.6
    });
  }

  function makeLights(scene, warm){
    const key = new THREE.DirectionalLight(0xfff3e0, 2.2);
    key.position.set(2.4, 3.2, 3.4);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xe6e1f7, 0.55);
    fill.position.set(-3, -1, 2);
    scene.add(fill);

    const rim = new THREE.PointLight(warm ? 0xC9A05C : 0xB0864F, warm ? 6 : 9, 12);
    rim.position.set(-1.6, 1.6, -2.4);
    scene.add(rim);

    const hemi = new THREE.HemisphereLight(0xffffff, 0x3a2c1e, 0.55);
    scene.add(hemi);
  }

  function makeRenderer(canvas){
    const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    return renderer;
  }

  function fitCanvas(renderer, camera, canvas){
    const parent = canvas.parentElement;
    const w = parent.clientWidth, h = parent.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  /* ---------------- HERO INSTANCE (drag to rotate) ---------------- */
  function initHero(){
    const canvas = document.getElementById("veneerCanvas");
    if(!canvas) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    camera.position.set(0, 0.15, 5.4);

    const renderer = makeRenderer(canvas);
    makeLights(scene, true);

    const mesh = new THREE.Mesh(buildVeneerGeometry(), makeMaterial());
    mesh.rotation.set(-0.12, 0.5, 0);
    scene.add(mesh);

    fitCanvas(renderer, camera, canvas);
    window.addEventListener("resize", () => fitCanvas(renderer, camera, canvas));

    let dragging = false, lastX = 0, lastY = 0;
    let velX = 0.0026, velY = 0;
    let targetTiltX = -0.12, targetTiltY = 0.5;

    canvas.addEventListener("pointerdown", e => { dragging = true; lastX = e.clientX; lastY = e.clientY; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener("pointerup", () => dragging = false);
    canvas.addEventListener("pointerleave", () => dragging = false);
    canvas.addEventListener("pointermove", e => {
      if(dragging){
        const dx = e.clientX - lastX, dy = e.clientY - lastY;
        lastX = e.clientX; lastY = e.clientY;
        velY = dx * 0.006;
        velX = dy * 0.004;
        targetTiltY += velY;
        targetTiltX = Math.max(-0.5, Math.min(0.35, targetTiltX + velX));
      } else {
        const rect = canvas.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        targetTiltY = 0.5 + nx * 0.5;
        targetTiltX = -0.12 - ny * 0.22;
      }
    });

    let autoSpin = 0.0022;
    (function tick(){
      requestAnimationFrame(tick);
      if(!dragging){ targetTiltY += autoSpin; }
      mesh.rotation.y += (targetTiltY - mesh.rotation.y) * 0.08;
      mesh.rotation.x += (targetTiltX - mesh.rotation.x) * 0.08;
      renderer.render(scene, camera);
    })();
  }

  /* ---------------- TECH SECTION INSTANCE (scroll-driven) ---------------- */
  function initTech(){
    const canvas = document.getElementById("techCanvas");
    const section = document.getElementById("tecnologia") || document.querySelector(".tech-pin");
    if(!canvas || !section) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
    camera.position.set(0, 0, 6.2);

    const renderer = makeRenderer(canvas);
    makeLights(scene, false);

    const mesh = new THREE.Mesh(buildVeneerGeometry(), makeMaterial());
    mesh.rotation.set(-0.1, 0, 0);
    scene.add(mesh);

    fitCanvas(renderer, camera, canvas);
    window.addEventListener("resize", () => fitCanvas(renderer, camera, canvas));

    function getProgress(){
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      const scrolled = -rect.top;
      return Math.max(0, Math.min(1, scrolled / total));
    }

    let currentY = 0, targetY = 0, currentZ = 6.2, targetZ = 6.2;
    function onScroll(){
      const p = getProgress();
      targetY = p * Math.PI * 2.15;
      targetZ = 6.2 - p * 1.4;
      updateSpecCounters(p);
    }
    window.addEventListener("scroll", onScroll, { passive:true });

    function updateSpecCounters(p){
      const rows = document.querySelectorAll(".tech-spec-row");
      rows.forEach((row, i) => {
        const threshold = 0.18 + i * 0.22;
        if(p > threshold) row.classList.add("in");
      });
    }

    (function tick(){
      requestAnimationFrame(tick);
      currentY += (targetY - currentY) * 0.08;
      currentZ += (targetZ - currentZ) * 0.08;
      mesh.rotation.y = currentY;
      mesh.rotation.x = -0.1 + Math.sin(currentY*0.5) * 0.05;
      camera.position.z = currentZ;
      renderer.render(scene, camera);
    })();

    onScroll();
  }

  function boot(){
    initHero();
    initTech();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
