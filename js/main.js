/* ============================================
   TOPPINO'S PIZZERIA  MAIN JS
   Requires js/site-data.js to be loaded first.
   ============================================ */

function resolvePath(obj, path) {
    return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

/* ---- fill in contact/business info wherever it's referenced ---- */
function applySiteData() {
    document.querySelectorAll('[data-site-text]').forEach(el => {
        const val = resolvePath(SITE, el.getAttribute('data-site-text'));
        if (val != null) el.textContent = val;
    });

    const hrefMap = {
        tel: 'tel:' + SITE.phoneTel,
        whatsapp: waLink("Hi Toppino's! I'd like to know more."),
        whatsappMenu: waLink("Hi Toppino's! I have a question about the menu."),
        email: 'mailto:' + SITE.email,
        instagram: SITE.instagramUrl,
        directions: SITE.directionsUrl,
        googleReview: SITE.googleReviewUrl
    };
    document.querySelectorAll('[data-site-href]').forEach(el => {
        const key = el.getAttribute('data-site-href');
        if (hrefMap[key]) el.href = hrefMap[key];
    });

    document.querySelectorAll('[data-site-year]').forEach(el => {
        el.textContent = new Date().getFullYear();
    });
}

function renderHours(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = SITE.hours.map(h => `
        <div class="info-row">
            <p style="flex:1"><strong>${h.days}</strong></p>
            <p>${h.time}</p>
        </div>
    `).join('') + `<p style="font-size:0.72rem;color:var(--ink-soft);margin-top:0.75rem;font-style:italic;">${SITE.hoursNote}</p>`;
}

/* ---- analytics stub: fires gtag() if it's ever wired in, otherwise no-ops ---- */
function trackEvent(action, label) {
    if (typeof gtag === 'function') {
        gtag('event', action, { event_label: label || '' });
    }
}
function initEventTracking() {
    document.querySelectorAll('[data-track]').forEach(el => {
        el.addEventListener('click', () => trackEvent(el.getAttribute('data-track'), el.href || el.textContent));
    });
}

/* ---- money formatting ---- */
function rupee(n) {
    return '₹' + n;
}

/* ---- home page: menu preview (signature dishes across categories) ---- */
function renderMenuPreview(containerId, limit = 4) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const picks = [];
    MENU.forEach(cat => cat.items.forEach(item => { if (item.signature) picks.push(item); }));
    MENU.forEach(cat => {
        if (picks.length >= limit) return;
        const fallback = cat.items.find(item => !picks.includes(item));
        if (fallback) picks.push(fallback);
    });
    const finalPicks = picks.slice(0, limit);

    el.innerHTML = finalPicks.map(item => `
        <div class="dish-card fade-in">
            <div class="arch-media ratio-square">
                ${item.signature ? '<span class="dish-signature-tag">Signature</span>' : ''}
                <img src="${item.img}" alt="${item.name}  Toppino's Pizzeria" loading="lazy">
            </div>
            <div class="dish-card-body">
                <div class="dish-card-top">
                    <span class="dish-name">${item.name}</span>
                    <span class="dish-price">${rupee(item.price)}</span>
                </div>
                <p class="dish-desc">${item.desc}</p>
            </div>
        </div>
    `).join('');
    observeFadeIns(el);
}

/* ---- menu page: full category-by-category menu + tabs ---- */
const ICONS = { flame: 'fa-fire', bread: 'fa-bread-slice', leaf: 'fa-leaf', cup: 'fa-mug-hot' };

function renderMenuTabs(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = MENU.map((cat, i) => `
        <a href="#${cat.id}" class="menu-tab${i === 0 ? ' active' : ''}" data-tab="${cat.id}">${cat.title}</a>
    `).join('');
}

function renderMenuCategories(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = MENU.map(cat => `
        <section id="${cat.id}" class="menu-category">
            <div class="wrap">
                <div class="menu-category-head fade-in">
                    <div class="menu-category-icon"><i class="fa-solid ${ICONS[cat.icon] || 'fa-utensils'}"></i></div>
                    <div>
                        <h2>${cat.title}</h2>
                        <p>${cat.subtitle}</p>
                    </div>
                </div>
                <div class="menu-grid">
                    ${cat.items.map(item => `
                        <div class="menu-item-card fade-in">
                            <img src="${item.img}" alt="${item.name}  Toppino's Pizzeria" loading="lazy">
                            <div class="menu-item-info">
                                <div class="menu-item-line">
                                    <span class="name">${item.name}</span>
                                    <span class="leader"></span>
                                    <span class="price">${rupee(item.price)}</span>
                                </div>
                                <p class="menu-item-desc">${item.desc}</p>
                                ${item.signature ? '<span class="menu-item-sig">Signature Dish</span>' : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `).join('');
    observeFadeIns(el);
}

function initMenuTabScrollSpy() {
    const tabs = document.querySelectorAll('.menu-tab');
    const sections = MENU.map(c => document.getElementById(c.id)).filter(Boolean);
    if (!tabs.length || !sections.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    const spy = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === entry.target.id));
            }
        });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(s => spy.observe(s));
}

/* ---- fade-in-on-scroll ---- */
let fadeObserver;
function observeFadeIns(scope) {
    if (!fadeObserver) {
        fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    }
    const root = scope || document;
    root.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
}

/* ---- contact form: mailto fallback (no backend in scope) ---- */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const honeypot = form.querySelector('[name="company"]');
        if (honeypot && honeypot.value) return; // bot caught by honeypot

        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const message = form.querySelector('[name="message"]').value.trim();

        const subject = encodeURIComponent(`Website enquiry from ${name}`);
        const body = encodeURIComponent(`${message}\n\n ${name} (${email})`);
        window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
        trackEvent('contact_form_submit', name);
    });
}

/* ---- init everything ---- */
document.addEventListener('DOMContentLoaded', function () {
    applySiteData();
    initEventTracking();
    initContactForm();
    observeFadeIns(document);

    if (document.getElementById('menuPreviewGrid')) {
        renderMenuPreview('menuPreviewGrid', 4);
    }
    if (document.getElementById('menuTabs')) {
        renderMenuTabs('menuTabs');
    }
    if (document.getElementById('menuCategories')) {
        renderMenuCategories('menuCategories');
        initMenuTabScrollSpy();
    }
    if (document.getElementById('hoursList')) {
        renderHours('hoursList');
    }

    // scroll-to-top
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const updateNav = () => navbar.classList.toggle('is-scrolled', window.pageYOffset > 60);
        window.addEventListener('scroll', updateNav);
        updateNav();
    }

    // close offcanvas after clicking a link inside it
    document.querySelectorAll('.offcanvas .nav-link, .offcanvas a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
            const offcanvasEl = document.getElementById('offcanvasMenu');
            const instance = offcanvasEl && bootstrap.Offcanvas.getInstance(offcanvasEl);
            if (instance) instance.hide();
        });
    });

    // mark active nav link based on current page
    const current = (location.pathname.split('/').pop() || 'index.html');
    document.querySelectorAll('.nav-links a, .offcanvas-body .nav-link').forEach(a => {
        const href = a.getAttribute('href');
        if (href === current || (current === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });
});
