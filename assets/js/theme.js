(function () {
  var root  = document.documentElement;
  var btn   = document.getElementById('theme-toggle');
  var icon  = document.getElementById('theme-icon');
  var LIGHT = 'light';
  var DARK  = 'dark';
  var KEY   = 'theme';

  function setTheme(t) {
    root.setAttribute('data-theme', t);
    localStorage.setItem(KEY, t);
    if (icon) icon.className = t === DARK ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }

  /* default = light, matching the academic reference style */
  setTheme(localStorage.getItem(KEY) || LIGHT);

  if (btn) btn.addEventListener('click', function () {
    setTheme(root.getAttribute('data-theme') === DARK ? LIGHT : DARK);
  });
})();
