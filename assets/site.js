(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
      const label = toggle.querySelector('.sr-only');
      if (label) label.textContent = open ? 'Menü schließen' : 'Menü öffnen';
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        toggle.focus();
      }
    });
  }
  const selected = document.querySelector('.selected-class');
  const className = new URLSearchParams(window.location.search).get('klasse');
  if (selected && className && /^[A-Z0-9/]{1,6}$/.test(className)) {
    selected.textContent = 'Du interessierst dich für Klasse ' + className + '.';
    selected.hidden = false;
  }
})();
