/* ── Mobile nav ──────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Active nav on scroll ────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a[href^="/#"], .nav-links a[href^="#"]');

function setActive() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navAs.forEach(a => {
    a.style.color = a.getAttribute('href').endsWith(current) ? 'var(--accent)' : '';
  });
}

window.addEventListener('scroll', setActive, { passive: true });

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

/* ── Typed hero text ─────────────────────────────────────────────── */
const typed    = document.getElementById('typed');
const phrases  = [
  'Computational Mechanics',
  'Evolutionary Deep Neural Networks',
  'Phase Field Fracture',
  'Topology Optimization',
  'Multi-physics Simulation',
];
let pi = 0, ci = 0, deleting = false;

function type() {
  if (!typed) return;
  const phrase = phrases[pi];
  typed.textContent = deleting ? phrase.slice(0, --ci) : phrase.slice(0, ++ci);

  let delay = deleting ? 45 : 80;
  if (!deleting && ci === phrase.length) { delay = 2200; deleting = true; }
  else if (deleting && ci === 0)         { deleting = false; pi = (pi + 1) % phrases.length; delay = 400; }

  setTimeout(type, delay);
}

type();
