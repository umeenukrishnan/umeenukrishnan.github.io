/* ── Pill nav: mobile toggle ─────────────────────────────────────── */
const navToggle = document.getElementById('nav-toggle');
const siteTabs  = document.getElementById('site-tabs');

if (navToggle && siteTabs) {
  const icon = navToggle.querySelector('i');

  const setOpen = open => {
    siteTabs.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    if (icon) icon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  };

  navToggle.addEventListener('click', e => {
    e.stopPropagation();
    setOpen(!siteTabs.classList.contains('open'));
  });

  siteTabs.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));

  document.addEventListener('click', e => {
    if (!siteTabs.contains(e.target)) setOpen(false);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setOpen(false);
  });
}

/* ── Typewriter hero (heading, then lede) ────────────────────────── */
(() => {
  const steps = [...document.querySelectorAll('[data-type-seq]')]
    .sort((a, b) => a.dataset.typeSeq - b.dataset.typeSeq);
  if (!steps.length) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const caret  = document.querySelector('.hello-caret');
  const reveal = [...document.querySelectorAll('[data-type-after]')];

  // snapshot the markup, then reserve the space it occupied so nothing jumps
  const plans = steps.map(el => {
    const nodes = [...el.childNodes].map(n => n.cloneNode(true));
    el.style.minHeight = el.getBoundingClientRect().height + 'px';
    el.textContent = '';
    return { el, nodes, speed: Number(el.dataset.typeSpeed) || 60 };
  });

  reveal.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
  });

  // replay the snapshot one character at a time, tags and all
  const write = (nodes, dest, speed, tail) => new Promise(resolve => {
    let i = 0;
    const nextNode = () => {
      if (i >= nodes.length) return resolve();
      const node = nodes[i++];

      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue;
        if (!text.length) return nextNode();
        const sink = document.createTextNode('');
        dest.appendChild(sink);
        let j = 0;
        const step = () => {
          sink.nodeValue += text[j++];
          tail();
          if (j < text.length) setTimeout(step, speed);
          else nextNode();
        };
        step();
      } else {
        const shell = node.cloneNode(false);
        dest.appendChild(shell);
        tail();
        write([...node.childNodes], shell, speed, tail).then(nextNode);
      }
    };
    nextNode();
  });

  (async () => {
    await new Promise(r => setTimeout(r, 420));

    for (const plan of plans) {
      const tail = caret ? () => plan.el.appendChild(caret) : () => {};
      tail();
      if (caret) caret.classList.add('on');
      await write(plan.nodes, plan.el, plan.speed, tail);
    }

    if (caret) setTimeout(() => caret.classList.remove('on'), 1800);

    reveal.forEach((el, i) => setTimeout(() => {
      el.style.transition = 'opacity .5s var(--ease), transform .5s var(--ease)';
      el.style.opacity = '';
      el.style.transform = '';
    }, 120 * i));

    setTimeout(() => plans.forEach(plan => { plan.el.style.minHeight = ''; }), 800);
  })();
})();

/* ── Horizontal rails (achievements carousel) ────────────────────── */
document.querySelectorAll('[data-rail]').forEach(rail => {
  const scope = rail.closest('section') || document;
  const prev  = scope.querySelector('[data-rail-prev]');
  const next  = scope.querySelector('[data-rail-next]');

  const step = () => {
    const card = rail.querySelector(':scope > *');
    if (!card) return rail.clientWidth * 0.8;
    const gap = parseFloat(getComputedStyle(rail).columnGap || '22') || 22;
    return card.getBoundingClientRect().width + gap;
  };

  const sync = () => {
    const max = rail.scrollWidth - rail.clientWidth - 2;
    if (prev) prev.disabled = rail.scrollLeft <= 2;
    if (next) next.disabled = rail.scrollLeft >= max;
    [prev, next].forEach(b => { if (b) b.style.opacity = b.disabled ? '.35' : '1'; });
  };

  if (prev) prev.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => rail.scrollBy({ left:  step(), behavior: 'smooth' }));

  rail.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync);
  sync();
});

/* ── Interactive cartoon miniature (contact section) ─────────────── */
(() => {
  const buddy = document.querySelector('[data-buddy]');
  if (!buddy) return;

  const stage  = buddy.querySelector('[data-buddy-stage]');
  const tilt   = buddy.querySelector('[data-fig-tilt]');
  const spin   = buddy.querySelector('[data-fig-spin]');
  const bubble = buddy.querySelector('[data-buddy-bubble] p');
  const calm   = matchMedia('(prefers-reduced-motion: reduce)');

  const say = text => {
    if (!bubble || bubble.textContent === text) return;
    bubble.textContent = text;
    const box = bubble.parentElement;
    box.classList.remove('pop');
    void box.offsetWidth;          // restart the animation
    box.classList.add('pop');
  };

  /* the figure turns toward the cursor */
  if (tilt && stage && !calm.matches) {
    const rest = () => {
      tilt.style.setProperty('--fy', '0deg');
      tilt.style.setProperty('--fx', '0deg');
    };
    let frame = null;
    const follow = e => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const r  = stage.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width  / 2)) / (window.innerWidth  / 2);
        const dy = (e.clientY - (r.top  + r.height / 2)) / (window.innerHeight / 2);
        const cl = (v, m) => Math.max(-m, Math.min(m, v));
        tilt.style.setProperty('--fy', cl(dx * 22, 20).toFixed(1) + 'deg');
        tilt.style.setProperty('--fx', cl(-dy * 12, 10).toFixed(1) + 'deg');
      });
    };
    window.addEventListener('mousemove', follow, { passive: true });
    window.addEventListener('mouseleave', rest);
    window.addEventListener('blur', rest);
  }

  /* a click spins her on the plinth */
  const doSpin = () => {
    if (!spin || calm.matches || spin.classList.contains('spin')) return;
    spin.classList.add('spin');
    spin.addEventListener('animationend', () => spin.classList.remove('spin'), { once: true });
  };

  /* she reacts to the form */
  const lines = {
    'cf-name':    'Nice to meet you \u2014 what should I call you?',
    'cf-email':   'Where should I write back?',
    'cf-message': 'Tell me what you\u2019re working on. I read every one.',
  };
  Object.entries(lines).forEach(([id, line]) => {
    const field = document.getElementById(id);
    if (field) field.addEventListener('focus', () => say(line));
  });

  const form = document.querySelector('.contact-form');
  if (form) form.addEventListener('submit', () => say('Thank you! I\u2019ll get back to you soon.'));

  /* and to a poke */
  const pokes = [
    'Fun fact: my solvers crack before I do.',
    'Currently thinking about neural operators.',
    'Phase-field fracture, topology optimization \u2014 ask me anything.',
    'Coffee first, convergence second.',
  ];
  let poke = 0;
  if (stage) {
    stage.addEventListener('click', () => { doSpin(); say(pokes[poke++ % pokes.length]); });
    stage.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        doSpin();
        say(pokes[poke++ % pokes.length]);
      }
    });
    stage.addEventListener('mouseenter', () => say('Hi there \u2014 thanks for scrolling this far!'));
  }
})();

/* ── Scroll reveal ───────────────────────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── 3D figurine ─────────────────────────────────────────────────────
   A real WebGL turntable. Three.js is fetched only once the contact
   section is near the viewport; if it never loads, the inline SVG
   figurine stays on screen as the fallback.
   ──────────────────────────────────────────────────────────────────── */
(() => {
  const host = document.querySelector('[data-fig-3d]');
  if (!host) return;
  if (!window.WebGLRenderingContext) return;

  const stage = host.closest('[data-buddy-stage]');
  const calm  = matchMedia('(prefers-reduced-motion: reduce)');
  const SRC   = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';

  let started = false;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting || started) return;
      started = true;
      io.disconnect();
      if (window.THREE) build();
      else {
        const tag = document.createElement('script');
        tag.src = SRC;
        tag.onload = build;
        document.head.appendChild(tag);
      }
    });
  }, { rootMargin: '300px' });
  io.observe(stage || host);

  function build() {
    const T = window.THREE;
    if (!T) return;

    // reveal the canvas host first: it is display:none until now, so it
    // has no size to measure and no box for an observer to see
    if (stage) stage.classList.add('has-3d');

    const width  = () => host.clientWidth  || 260;
    const height = () => host.clientHeight || 310;

    const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width(), height());
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = T.PCFSoftShadowMap;
    if (T.sRGBEncoding) renderer.outputEncoding = T.sRGBEncoding;
    if (T.ACESFilmicToneMapping) {
      renderer.toneMapping = T.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
    }
    host.appendChild(renderer.domElement);

    const scene  = new T.Scene();
    const camera = new T.PerspectiveCamera(30, width() / height(), 0.1, 60);
    camera.position.set(0, 2.5, 9.6);
    camera.lookAt(0, 1.78, 0);

    /* studio lighting: soft fill, a warm key, a cool rim */
    scene.add(new T.HemisphereLight(0xffffff, 0x9fb2c6, 0.42));
    const key = new T.DirectionalLight(0xfff2e2, 1.3);
    key.position.set(-3.6, 6.4, 5.2);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 22;
    key.shadow.camera.left = -4;
    key.shadow.camera.right = 4;
    key.shadow.camera.top = 6;
    key.shadow.camera.bottom = -1;
    key.shadow.radius = 3;
    scene.add(key);
    const rim = new T.DirectionalLight(0x9dc2e6, 0.38);
    rim.position.set(4.2, 3.4, -4.4);
    scene.add(rim);

    /* materials — matte resin, the way a painted figurine reads */
    const C = hex => {
      const c = new T.Color(hex);
      if (c.convertSRGBToLinear) c.convertSRGBToLinear();
      return c;
    };
    const M = (hex, extra) => {
      const o = Object.assign({ roughness: 0.62, metalness: 0.04 }, extra || {});
      o.color = C(hex);
      if (o.emissive !== undefined) o.emissive = C(o.emissive);
      return new T.MeshStandardMaterial(o);
    };

    const skin   = M(0xb57a4e);
    const hair   = M(0x241b22, { roughness: 0.5 });
    const navy   = M(0x1c2a44);
    const coat   = M(0xc2aa88);
    const sole   = M(0x11192b, { roughness: 0.55 });
    const stoneA = M(0x173c6c, { roughness: 0.5 });
    const stoneB = M(0x225a94, { roughness: 0.42 });
    const silver = M(0xcbd3dc, { roughness: 0.3, metalness: 0.8 });
    const ink    = M(0x14101a, { roughness: 0.38 });
    const white  = M(0xf4f7fb, { roughness: 0.32 });

    const root = new T.Group();
    scene.add(root);

    const put = (mesh, x, y, z) => {
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      root.add(mesh);
      return mesh;
    };

    /* a capsule drawn between two points */
    const bone = (material, r, from, to) => {
      const a = new T.Vector3().fromArray(from);
      const b = new T.Vector3().fromArray(to);
      const dir = new T.Vector3().subVectors(b, a);
      const len = dir.length();
      const g = new T.Group();
      g.add(new T.Mesh(new T.CylinderGeometry(r, r, len, 20), material));
      const cap = new T.SphereGeometry(r, 20, 14);
      const top = new T.Mesh(cap, material); top.position.y =  len / 2; g.add(top);
      const bot = new T.Mesh(cap, material); bot.position.y = -len / 2; g.add(bot);
      g.position.copy(a).add(b).multiplyScalar(0.5);
      g.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), dir.normalize());
      g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      root.add(g);
      return g;
    };

    /* ── plinth ── */
    put(new T.Mesh(new T.CylinderGeometry(1.52, 1.64, 0.3, 56), stoneA), 0, 0.15, 0);
    const lip = put(new T.Mesh(new T.CylinderGeometry(1.44, 1.52, 0.09, 56), stoneB), 0, 0.34, 0);
    lip.castShadow = false;

    /* ── legs and shoes ── */
    bone(navy, 0.19, [-0.3, 1.14, 0], [-0.3, 0.58, 0]);
    bone(navy, 0.19, [ 0.3, 1.14, 0], [ 0.3, 0.58, 0]);
    [-0.3, 0.3].forEach(x => {
      const shoe = put(new T.Mesh(new T.SphereGeometry(0.26, 24, 16), sole), x, 0.46, 0.06);
      shoe.scale.set(1, 0.6, 1.3);
    });

    /* ── torso, with an open blazer over a navy top ── */
    const torso = put(new T.Mesh(new T.SphereGeometry(0.6, 36, 26), navy), 0, 1.68, 0);
    torso.scale.set(1, 1.28, 0.84);
    [-0.35, 0.35].forEach(x => {
      const lapel = put(new T.Mesh(new T.SphereGeometry(0.3, 24, 18), coat), x, 1.72, 0.26);
      lapel.scale.set(0.62, 1.55, 0.62);
    });
    const back = put(new T.Mesh(new T.SphereGeometry(0.6, 32, 24), coat), 0, 1.68, -0.1);
    back.scale.set(1.01, 1.26, 0.72);

    /* ── arms ── */
    bone(coat, 0.165, [-0.52, 2.02, 0.04], [-1.16, 2.44, 0.3]);   // raised, holding the orb
    bone(coat, 0.165, [ 0.54, 2.0,  0.04], [ 0.76, 1.26, 0.12]);  // resting
    put(new T.Mesh(new T.SphereGeometry(0.175, 20, 14), skin), -1.2,  2.47, 0.33);
    put(new T.Mesh(new T.SphereGeometry(0.175, 20, 14), skin),  0.78, 1.2,  0.13);

    /* ── head ── */
    const head = put(new T.Mesh(new T.SphereGeometry(0.78, 48, 34), skin), 0, 2.74, 0);
    head.scale.set(1, 1.03, 0.96);

    /* curls: rings of small spheres. They taper in and sweep backwards as
       they fall, so the length reads as hair rather than as a curtain. */
    const curls = [];
    const ring = (y, spread, ballR, fromDeg, toDeg, n, zBias) => {
      for (let k = 0; k < n; k++) {
        const f = n === 1 ? 0.5 : k / (n - 1);
        const a = (fromDeg + (toDeg - fromDeg) * f) * Math.PI / 180;
        curls.push([Math.sin(a) * spread, y, Math.cos(a) * spread + (zBias || 0), ballR]);
      }
    };

    ring(3.46, 0.32, 0.29,   0, 330, 5,  0);      // crown
    ring(3.30, 0.56, 0.27,   0, 338, 8, -0.03);
    ring(3.08, 0.76, 0.27,  34, 326, 9, -0.05);   // hairline, forehead clear
    ring(2.78, 0.86, 0.26,  52, 308, 9, -0.09);
    ring(2.48, 0.82, 0.24,  64, 296, 8, -0.18);   // past the jaw, moving back
    ring(2.18, 0.74, 0.22,  74, 286, 8, -0.28);
    ring(1.90, 0.66, 0.20,  82, 278, 7, -0.36);   // over the shoulders
    ring(1.64, 0.56, 0.18,  90, 270, 7, -0.42);
    ring(1.42, 0.46, 0.16,  98, 262, 6, -0.46);
    ring(1.24, 0.36, 0.14, 106, 254, 5, -0.48);   // the ends
    curls.push([0, 2.70, -0.56, 0.52]);           // mass filling in the back
    curls.push([0, 2.20, -0.58, 0.42]);
    curls.push([0, 1.78, -0.56, 0.32]);

    // strands down each side, so the length still reads from the front
    [[2.32, 0.78, -0.02, 0.22], [2.04, 0.82, -0.08, 0.21], [1.78, 0.84, -0.12, 0.19],
     [1.54, 0.82, -0.14, 0.17], [1.34, 0.76, -0.16, 0.15], [1.18, 0.68, -0.18, 0.13]]
      .forEach(([y, x, z, r]) => { curls.push([-x, y, z, r]); curls.push([x, y, z, r]); });

    curls.forEach(([x, y, z, r]) => put(new T.Mesh(new T.SphereGeometry(r, 18, 14), hair), x, y, z));

    /* ── face: large illustrated eyes, brows, an open smile ── */
    const eyeW  = M(0xf8f5f3, { roughness: 0.32 });
    const iris  = M(0x4a2c18, { roughness: 0.28 });
    const brow  = M(0x1b1017, { roughness: 0.5 });
    const lip   = M(0x8e4040, { roughness: 0.45 });
    const tooth = M(0xf9f5f1, { roughness: 0.3 });
    const blush = M(0xcf7059, { roughness: 0.85, transparent: true, opacity: 0.38 });

    const flat = m => { m.castShadow = false; m.receiveShadow = false; return m; };

    [-1, 1].forEach(side => {
      const x = 0.3 * side;

      const sclera = flat(put(new T.Mesh(new T.SphereGeometry(0.155, 24, 18), eyeW), x, 2.71, 0.60));
      sclera.scale.set(1, 1.25, 0.5);
      sclera.rotation.z = -0.1 * side;

      const ring2 = flat(put(new T.Mesh(new T.SphereGeometry(0.1, 20, 16), iris), x, 2.70, 0.655));
      ring2.scale.set(1, 1, 0.45);

      const pupil = flat(put(new T.Mesh(new T.SphereGeometry(0.05, 16, 12), ink), x, 2.70, 0.70));
      pupil.scale.set(1, 1, 0.35);

      flat(put(new T.Mesh(new T.SphereGeometry(0.034, 12, 10), white), x + 0.042 * side, 2.755, 0.72));
      flat(put(new T.Mesh(new T.SphereGeometry(0.017, 10, 8),  white), x - 0.045 * side, 2.655, 0.715));

      const lash = flat(put(new T.Mesh(new T.TorusGeometry(0.148, 0.021, 8, 22, Math.PI * 0.78), brow), x, 2.715, 0.635));
      lash.rotation.z = Math.PI * 0.11;
      lash.scale.set(1.03, 1.3, 0.45);

      const eyebrow = flat(put(new T.Mesh(new T.TorusGeometry(0.105, 0.023, 8, 20, Math.PI * 0.6), brow), x, 2.95, 0.58));
      eyebrow.rotation.z = Math.PI * 0.2 - 0.12 * side;
      eyebrow.scale.set(1.15, 0.78, 0.45);

      const cheek = flat(put(new T.Mesh(new T.SphereGeometry(0.15, 16, 12), blush), 0.48 * side, 2.55, 0.58));
      cheek.scale.set(1.05, 0.6, 0.2);
    });

    flat(put(new T.Mesh(new T.SphereGeometry(0.046, 14, 12), skin), 0, 2.58, 0.735));   // nose

    const mouth = flat(put(new T.Mesh(new T.SphereGeometry(0.155, 22, 16), lip), 0, 2.45, 0.63));
    mouth.scale.set(1.3, 0.6, 0.3);
    const teeth = flat(put(new T.Mesh(new T.SphereGeometry(0.138, 20, 14), tooth), 0, 2.485, 0.665));
    teeth.scale.set(1.26, 0.3, 0.26);

    // sits between the brows, well clear of the hairline curls
    const bindi = put(new T.Mesh(new T.SphereGeometry(0.05, 16, 12), ink), 0, 2.9, 0.72);
    bindi.scale.set(1, 1, 0.5);
    bindi.castShadow = false;

    /* jhumka earrings */
    [-0.79, 0.79].forEach(x => {
      put(new T.Mesh(new T.SphereGeometry(0.06, 14, 12), silver), x, 2.62, 0.02);
      const drop = put(new T.Mesh(new T.ConeGeometry(0.11, 0.17, 16), silver), x, 2.44, 0.02);
      drop.rotation.x = Math.PI;
    });

    /* ── the glowing fracture orb ── */
    const orbPos = new T.Vector3(-1.34, 2.56, 0.44);
    const orb = put(new T.Mesh(
      new T.SphereGeometry(0.3, 32, 24),
      M(0x59a6e0, { emissive: 0x2f86cc, emissiveIntensity: 1.35, roughness: 0.22, metalness: 0 })
    ), orbPos.x, orbPos.y, orbPos.z);
    orb.castShadow = false;
    const halo = put(new T.Mesh(
      new T.SphereGeometry(0.52, 24, 18),
      new T.MeshBasicMaterial({ color: C(0x8cc6f2), transparent: true, opacity: 0.16, depthWrite: false })
    ), orbPos.x, orbPos.y, orbPos.z);
    halo.castShadow = false;
    halo.receiveShadow = false;
    const orbLight = new T.PointLight(0x6ab4ef, 0.85, 4.2);
    orbLight.position.copy(orbPos);
    root.add(orbLight);

    /* ── motion ── */
    let turn = 0, wanted = 0, spinStart = -1, raf = null, t = 0;
    const clock = new T.Clock();

    const point = e => {
      const r = host.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
      wanted = Math.max(-0.7, Math.min(0.7, nx * 0.85));
    };
    if (!calm.matches) window.addEventListener('mousemove', point, { passive: true });

    const spin = () => { if (calm.matches) return; if (spinStart < 0) spinStart = t; };
    if (stage) {
      stage.addEventListener('click', spin);
      stage.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') spin();
      });
    }

    const frame = () => {
      const dt = Math.min(clock.getDelta(), 0.05);
      t += dt;

      if (!calm.matches) {
        root.position.y = Math.sin(t * 1.2) * 0.055;
        turn += (wanted - turn) * Math.min(1, dt * 4);

        let extra = 0;
        if (spinStart >= 0) {
          const k = (t - spinStart) / 0.95;
          if (k >= 1) spinStart = -1;
          else {
            const e = 1 - Math.pow(1 - k, 3);          // ease-out
            extra = e * Math.PI * 2;
          }
        }
        root.rotation.y = turn + extra;

        const pulse = 1 + Math.sin(t * 2.4) * 0.08;
        orb.scale.setScalar(pulse);
        halo.scale.setScalar(pulse);
        orbLight.intensity = 0.8 + Math.sin(t * 2.4) * 0.25;
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };

    const run  = () => { if (!raf) { clock.getDelta(); raf = requestAnimationFrame(frame); } };
    const halt = () => { if (raf) { cancelAnimationFrame(raf); raf = null; } };

    /* only burn frames while it is on screen */
    new IntersectionObserver(es => es.forEach(e => (e.isIntersecting ? run() : halt())), { threshold: 0.05 })
      .observe(stage || host);
    document.addEventListener('visibilitychange', () => (document.hidden ? halt() : run()));

    const resize = () => {
      renderer.setSize(width(), height());
      camera.aspect = width() / height();
      camera.updateProjectionMatrix();
    };
    if (window.ResizeObserver) new ResizeObserver(resize).observe(host);
    else window.addEventListener('resize', resize);

    run();
  }
})();
