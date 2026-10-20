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
  const art    = buddy.querySelector('.buddy-art');
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

  /* she leans toward the cursor */
  if (art && stage && !calm.matches) {
    let frame = null;
    const follow = e => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const r  = stage.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2))  / (window.innerWidth  / 2);
        const dy = (e.clientY - (r.top  + r.height / 2)) / (window.innerHeight / 2);
        const cl = (v, m) => Math.max(-m, Math.min(m, v));
        art.style.setProperty('--bx', cl(dx * 14, 14).toFixed(1) + 'px');
        art.style.setProperty('--by', cl(dy * 10, 10).toFixed(1) + 'px');
        art.style.setProperty('--br', cl(dx * 6, 6).toFixed(1) + 'deg');
      });
    };
    window.addEventListener('mousemove', follow, { passive: true });
    window.addEventListener('mouseleave', () => {
      art.style.setProperty('--bx', '0px');
      art.style.setProperty('--by', '0px');
      art.style.setProperty('--br', '0deg');
    });
  }

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
    stage.addEventListener('click', () => say(pokes[poke++ % pokes.length]));
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
