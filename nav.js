/* ─────────────────────────────────────────────
   nav.js — Roger.IA Shared Navigation Module
   ───────────────────────────────────────────── */

/* ── Hamburger Menu ──────────────────────────── */
(function initHamburger() {
  const btn   = document.getElementById('nav-hamburger');
  const menu  = document.getElementById('nav-mobile-menu');
  const body  = document.body;
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('nav-mobile-menu--open', !open);
    body.style.overflow = open ? '' : 'hidden';
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.remove('nav-mobile-menu--open');
      body.style.overflow = '';
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.remove('nav-mobile-menu--open');
      body.style.overflow = '';
    }
  });
})();


/* ── Page-transition + scroll-to-top ────────────
   Intercepts same-origin <a> links, fades page out,
   scrolls to top, then navigates.                */
(function initPageTransitions() {
  const DURATION = 280; // ms

  // Inject fade-out keyframe once
  if (!document.getElementById('rog-fade-style')) {
    const s = document.createElement('style');
    s.id = 'rog-fade-style';
    s.textContent = `
      @keyframes rogFadeOut {
        to { opacity: 0; transform: translateY(-10px); }
      }
      .rog-leaving {
        animation: rogFadeOut ${DURATION}ms ease forwards;
        pointer-events: none;
      }
    `;
    document.head.appendChild(s);
  }

  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') ||
        href.startsWith('http') || anchor.target === '_blank') return;

    e.preventDefault();
    document.body.classList.add('rog-leaving');

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      window.location.href = href;
    }, DURATION);
  });

  // Scroll to top on page load (back/forward cache)
  window.addEventListener('pageshow', () => {
    document.body.classList.remove('rog-leaving');
  });
})();


/* ── Active nav link highlight ───────────────── */
(function highlightActiveNav() {
  const path    = window.location.pathname;
  const links   = document.querySelectorAll('[data-nav-link]');
  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    // Match exact or prefix
    if (href && (path.endsWith(href) || path.includes(href.replace(/\.html$/, '')))) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('nav-link--active');
    }
  });
})();
