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
