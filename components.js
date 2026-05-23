/* ═══════════════════════════════════════════════════════════
   components.js — Bleed Into Purpose
   Single source of truth for shared site components.

   TO EDIT:
   ┌─────────────────────────────────────────────────────┐
   │  Nav links      → SITE_NAV section below            │
   │  Footer content → FOOTER section below              │
   │  Crisis numbers → CRISIS_RESOURCES section below    │
   │  CTA buttons    → injectCTA() function below        │
   └─────────────────────────────────────────────────────┘
════════════════════════════════════════════════════════════ */

// ── SITE NAV ─────────────────────────────────────────────
// Edit links here — updates desktop nav + mobile overlay on all pages
const NAV_LINKS = [
  { href: 'index.html',    label: 'Home'      },
  { href: 'about.html',    label: 'About'     },
  { href: 'speaking.html', label: 'Speaking'  },
  { href: 'resources.html',label: 'Resources' },
  { href: 'booking.html',  label: 'Booking'   },
];
const NAV_CTA = { href: 'booking.html', label: 'Book a Talk' };

// ── FOOTER CONTENT ────────────────────────────────────────
// Edit name, quote, email, nav columns here
// ── CONTACT EMAIL ─────────────────────────────────────────
// Update this ONE line to change the email address across the entire site
const CONTACT_EMAIL = 'renee@reneebulwin.com';

const FOOTER = {
  name:    'Renée Bulwin',
  tagline: 'Bleed Into Purpose',
  quote:   '"Healing begins the moment the silence is broken."',
  email:   CONTACT_EMAIL,
  cols: [
    {
      heading: 'Explore',
      links: [
        { href: 'index.html',    label: 'Home'      },
        { href: 'about.html',    label: 'About'     },
        { href: 'speaking.html', label: 'Speaking'  },
      ]
    },
    {
      heading: 'Connect',
      links: [
        { href: 'resources.html', label: 'Resources' },
        { href: 'booking.html',   label: 'Booking'   },
      ]
    }
  ],
  legal: `© ${new Date().getFullYear()} Renée Bulwin · Bleed Into Purpose. All rights reserved.`,
  disclaimer: `This content is for educational and wellness support purposes only.
    It is not a replacement for therapy, medical care, or crisis support.
    <strong>If you are in crisis, please contact the
    <a href="https://988lifeline.org" rel="noopener noreferrer">988 Suicide &amp; Crisis Lifeline</a>
    by calling or texting <a href="tel:988">988</a>.</strong>`,
};

// ── CRISIS RESOURCES ──────────────────────────────────────
// Edit hotline numbers, descriptions here — updates resources page + all footers
const CRISIS_RESOURCES = [
  {
    label:       '988 Suicide & Crisis Lifeline',
    number:      'Call or Text 988',
    href:        'tel:988',
    description: `If you are in crisis, please contact the
      <a href="https://988lifeline.org" rel="noopener noreferrer">988 Suicide &amp; Crisis Lifeline</a>
      by calling or texting <strong>988</strong>. Free, confidential support available 24/7.`,
  },
  {
    label:       'Crisis Text Line',
    number:      'Text HOME to 741741',
    href:        'sms:741741?body=HOME',
    description: `Free, confidential crisis support by text — 24/7. If you are not ready to call,
      text <strong>HOME</strong> to <strong>741741</strong> to connect with a trained crisis counselor.
      <a href="https://www.crisistextline.org" rel="noopener noreferrer">crisistextline.org</a>`,
  },
  {
    label:       "RAINN's National Sexual Assault Hotline",
    number:      '1-800-656-HOPE (4673)',
    href:        'tel:18006564673',
    description: `Free, confidential support 24/7. Connects you to a trained staff member
      from a sexual assault service provider in your area.
      <a href="https://www.rainn.org" rel="noopener noreferrer">rainn.org</a>`,
  },
  {
    label:       'Childhelp National Child Abuse Hotline',
    number:      '1-800-422-4453',
    href:        'tel:18004224453',
    description: `Available 24/7 for crisis intervention, information, and referrals to
      emergency, social service, and support resources. Serves children, adults, and
      professionals with concerns about child abuse.
      <a href="https://www.childhelp.org" rel="noopener noreferrer">childhelp.org</a>`,
  },
  {
    label:       'SAMHSA National Helpline',
    number:      '1-800-662-4357',
    href:        'tel:18006624357',
    description: `Free, confidential treatment referrals and information for mental health
      and substance use disorders — 24/7, 365 days a year. Available in English and Spanish.
      <a href="https://www.samhsa.gov/find-help/national-helpline" rel="noopener noreferrer">samhsa.gov</a>`,
  },
  {
    label:       'National Domestic Violence Hotline',
    number:      '1-800-799-7233',
    href:        'tel:18007997233',
    description: `Confidential support for anyone experiencing or at risk of domestic violence.
      Available 24/7 by call or text. Also available by text: text <strong>START</strong> to <strong>88788</strong>.
      <a href="https://www.thehotline.org" rel="noopener noreferrer">thehotline.org</a>`,
  },
];

/* ═══════════════════════════════════════════════════════════
   BUILD FUNCTIONS — no need to edit below this line
════════════════════════════════════════════════════════════ */

// Detect current page for active nav state
const currentPage = location.pathname.split('/').pop() || 'index.html';

function buildHeader() {
  const desktopLinks = NAV_LINKS.map(l =>
    `<li><a href="${l.href}"${l.href === currentPage ? ' aria-current="page"' : ''}>${l.label}</a></li>`
  ).join('\n        ');

  const mobileLinks = NAV_LINKS.map(l =>
    `<a href="${l.href}"${l.href === currentPage ? ' aria-current="page"' : ''}>${l.label}</a>`
  ).join('\n    ');

  return `
  <header role="banner">
    <nav aria-label="Main navigation">
      <a href="index.html" class="nav-brand" aria-label="Renée Bulwin – Bleed Into Purpose, home">
        <span class="name">${FOOTER.name}</span>
        <span class="tagline">${FOOTER.tagline}</span>
      </a>
      <ul class="nav-links" role="list">
        ${desktopLinks}
        <li><a href="${NAV_CTA.href}" class="btn-book">${NAV_CTA.label}</a></li>
      </ul>
      <button class="nav-toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Open navigation menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </header>

  <nav id="nav-menu" class="nav-menu" aria-label="Site pages">
    ${mobileLinks}
    <a href="${NAV_CTA.href}" class="btn-menu">${NAV_CTA.label}</a>
  </nav>`;
}

function buildFooter() {
  // All nav links from all cols merged into one flat list
  const allLinks = FOOTER.cols.flatMap(col => col.links);
  const navLinks = allLinks.map(l =>
    `<a href="${l.href}" class="footer-nav-link">${l.label}</a>`
  ).join('\n          ');

  // Crisis hotlines — two-column grid, compact
  const crisisLines = CRISIS_RESOURCES.map(r =>
    `<div class="footer-crisis-item">
            <span class="footer-crisis-label">${r.label}</span>
            <a href="${r.href}" class="footer-crisis-number">${r.number}</a>
          </div>`
  ).join('\n          ');

  return `
    <footer class="site-footer" role="contentinfo">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="name">${FOOTER.name}</span>
          <span class="tagline">${FOOTER.tagline}</span>
          <p class="quote">${FOOTER.quote}</p>
          <a href="mailto:${FOOTER.email}" class="footer-email">✉ ${FOOTER.email}</a>
        </div>
        <nav class="footer-nav-row" aria-label="Footer navigation">
          ${navLinks}
        </nav>
      </div>
      <div class="footer-bottom">
        <div class="footer-legal-row">
          <p>${FOOTER.legal}</p>
          <p>${FOOTER.disclaimer}</p>
        </div>
        <div class="footer-crisis-block" role="note" aria-label="Crisis support resources">
          <p class="footer-crisis-heading">Crisis Support Resources — Free &amp; Confidential, 24/7</p>
          <div class="footer-crisis-grid">
            ${crisisLines}
          </div>
        </div>
      </div>
    </footer>`;
}

function buildCrisisResources() {
  const cards = CRISIS_RESOURCES.map(r => `
            <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--r-lg);padding:24px 28px;">
              <p style="font-size:.65rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--primary);margin-bottom:8px;">${r.label}</p>
              <p style="font-size:1.4rem;font-family:var(--serif);color:var(--fg);font-weight:500;margin-bottom:6px;">
                <a href="${r.href}" style="color:var(--primary);font-family:var(--serif);font-size:1.4rem;font-weight:500;">${r.number}</a>
              </p>
              <p style="font-size:.9rem;margin:0;">${r.description}</p>
            </div>`).join('');

  return `
      <div class="crisis-band" style="background:hsla(93,14%,38%,.06);border-top:1px solid hsla(93,14%,38%,.14);border-bottom:1px solid hsla(93,14%,38%,.14);padding:48px var(--px);" role="note" aria-label="Crisis support resources">
        <div class="container">
          <span class="section-label">Crisis Support</span>
          <div style="display:flex;flex-direction:column;gap:28px;max-width:640px;">
            ${cards}
          </div>
        </div>
      </div>`;
}

// CTA band — pass custom heading, body text, and array of button objects
// Buttons: { href, label, style } where style is 'primary' or 'outline'
function buildCTA({ heading, body, buttons, bg = 'white-bg' } = {}) {
  const btns = buttons.map(b =>
    `<a href="${b.href}" class="btn-${b.style || 'primary'}">${b.label}</a>`
  ).join('\n            ');

  return `
      <section class="section-pad ${bg} fade-in" aria-label="Call to action">
        <div class="container" style="text-align:center;max-width:640px;margin:0 auto;">
          <h2>${heading}</h2>
          <p>${body}</p>
          <div class="cta-btns" style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:24px;">
            ${btns}
          </div>
        </div>
      </section>`;
}

/* ═══════════════════════════════════════════════════════════
   INJECT INTO PAGE
════════════════════════════════════════════════════════════ */

const pageContent = document.querySelector('.page-content');

// Header + mobile overlay — before .page-content
pageContent.insertAdjacentHTML('beforebegin', buildHeader());

// Footer — inside .page-content at the end
pageContent.insertAdjacentHTML('beforeend', buildFooter());

// Crisis resources — inject into placeholder if present
const crisisPlaceholder = document.getElementById('crisis-resources');
if (crisisPlaceholder) {
  crisisPlaceholder.outerHTML = buildCrisisResources();
}

// CTA band — inject into placeholder if present
const ctaPlaceholder = document.getElementById('shared-cta');
if (ctaPlaceholder) {
  const heading = ctaPlaceholder.dataset.heading || 'Ready to explore a path to healing together?';
  const body    = ctaPlaceholder.dataset.body    || 'Whether you are looking to book a speaking engagement or simply want to connect, I would love to hear from you.';
  const bg      = ctaPlaceholder.dataset.bg      || 'cream-bg';
  const buttons = JSON.parse(ctaPlaceholder.dataset.buttons || '[{"href":"booking.html","label":"Get in Touch","style":"primary"},{"href":"mailto:renee@reneebulwin.com","label":"Email Directly","style":"outline"}]');
  ctaPlaceholder.outerHTML = buildCTA({ heading, body, buttons, bg });
}

/* ═══════════════════════════════════════════════════════════
   BEHAVIOURS
════════════════════════════════════════════════════════════ */

// Scroll: transparent → blurred header
const hdr = document.querySelector('header');
window.addEventListener('scroll', () => {
  hdr.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Hamburger
const toggle = document.querySelector('.nav-toggle');
const menu   = document.getElementById('nav-menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});
menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Fade in on scroll
const faders = document.querySelectorAll('.fade-in');
if (faders.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  faders.forEach(f => obs.observe(f));
}
