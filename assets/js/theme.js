/* Theme toggle — dark/light, persisted to localStorage */
(function () {
  const root    = document.documentElement;
  const btn     = document.getElementById('theme-toggle');
  const icon    = document.getElementById('theme-icon');
  const DARK    = 'dark';
  const LIGHT   = 'light';
  const KEY     = 'theme';

  function setTheme(t) {
    root.setAttribute('data-theme', t);
    localStorage.setItem(KEY, t);
    if (icon) {
      icon.className = t === DARK ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }

  /* Apply saved (or default dark) on load */
  const saved = localStorage.getItem(KEY) || DARK;
  setTheme(saved);

  if (btn) {
    btn.addEventListener('click', function () {
      const current = root.getAttribute('data-theme');
      setTheme(current === DARK ? LIGHT : DARK);
    });
  }
})();
