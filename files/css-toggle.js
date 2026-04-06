/* Header scroll-reveal — hide on scroll down, show on scroll up */
(function () {
  var header = document.querySelector('header');
  if (!header) return;

  var lastY = window.scrollY;
  var threshold = 5;

  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (y < 80) {
      // Always show header near the top
      header.classList.remove('header-hidden');
    } else if (y - lastY > threshold) {
      // Scrolling down — hide
      header.classList.add('header-hidden');
    } else if (lastY - y > threshold) {
      // Scrolling up — show
      header.classList.remove('header-hidden');
    }
    lastY = y;
  }, { passive: true });
})();

/* Side menu toggle — hamburger button opens/closes the side menu */
(function () {
  var btns = document.querySelector('.btns-right-side');
  if (!btns) return;
  var hamburger = btns.querySelector('button:last-of-type');
  var sideMenu = document.querySelector('.side-menu-wrapper');
  var closeBtn = sideMenu ? sideMenu.querySelector('button') : null;
  if (!hamburger || !sideMenu) return;

  function open() {
    sideMenu.classList.add('side-menu-open');
  }
  function close() {
    sideMenu.classList.remove('side-menu-open');
  }

  hamburger.addEventListener('click', function () {
    if (sideMenu.classList.contains('side-menu-open')) {
      close();
    } else {
      open();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', close);
  }

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();

/* CSS Override Toggle — OLD / NEW / GUIDE / GUIDE 2.0 comparison button (4-state) */
(function () {
  var overrides = document.querySelector('link[href*="typography-overrides"]');
  var guideV1 = document.querySelector('link[href*="typography-guidelines-v1"]');
  // Select v2 by finding guidelines.css that is NOT v1
  var allGuides = document.querySelectorAll('link[href*="typography-guidelines"]');
  var guideV2 = null;
  for (var i = 0; i < allGuides.length; i++) {
    if (allGuides[i].href.indexOf('-v1') === -1) { guideV2 = allGuides[i]; break; }
  }
  if (!overrides) return;

  // States: 0 = NEW, 1 = GUIDE, 2 = GUIDE 2.0, 3 = OLD
  var states = [
    { label: 'NEW',       bg: '#000',    color: '#fff', overrides: true,  v1: false, v2: false },
    { label: 'GUIDE',     bg: '#C8D96F', color: '#000', overrides: true,  v1: true,  v2: false },
    { label: 'GUIDE 2.0', bg: '#6FB5D9', color: '#000', overrides: true,  v1: false, v2: true  },
    { label: 'OLD',       bg: '#fff',    color: '#000', overrides: false, v1: false, v2: false }
  ];
  // Restore saved state from localStorage, default to 0 (NEW)
  var saved = parseInt(localStorage.getItem('dv-toggle-state'), 10);
  var current = (saved >= 0 && saved < states.length) ? saved : 0;

  var btn = document.createElement('button');
  btn.title = 'Cycle: NEW → GUIDE → GUIDE 2.0 → OLD';
  btn.style.cssText =
    'position:fixed;bottom:16px;left:80px;z-index:2147483647;' +
    'padding:6px 14px;border:2px solid #000;border-radius:4px;' +
    'font:bold 13px/1 system-ui,sans-serif;' +
    'cursor:pointer;opacity:.85;transition:opacity .15s,background .15s,color .15s';

  function apply() {
    var s = states[current];
    btn.textContent = s.label;
    btn.style.background = s.bg;
    btn.style.color = s.color;
    overrides.disabled = !s.overrides;
    if (guideV1) guideV1.disabled = !s.v1;
    if (guideV2) guideV2.disabled = !s.v2;
    localStorage.setItem('dv-toggle-state', current);
  }

  btn.addEventListener('click', function () {
    current = (current + 1) % states.length;
    apply();
  });

  btn.addEventListener('mouseenter', function () { btn.style.opacity = '1'; });
  btn.addEventListener('mouseleave', function () { btn.style.opacity = '.85'; });

  apply();
  document.body.appendChild(btn);
})();
