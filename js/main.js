/* ============================================
   TOPPINO'S NEAPOLITANA PIZZERIA  MAIN JS
   Requires js/site-data.js to be loaded first.
   ============================================ */

function resolvePath(obj, path) {
    return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

/* ---- fill in contact/business info wherever it's referenced ----
   Anything that depends on a detail that hasn't been provided yet
   (phone, WhatsApp, email, Google review link) ships with the `hidden`
   attribute and is only revealed here once SITE has a value for it. */
function applySiteData() {
    document.querySelectorAll('[data-site-text]').forEach(el => {
        const val = resolvePath(SITE, el.getAttribute('data-site-text'));
        if (val != null) el.textContent = val;
    });

    const hasPhone = !!SITE.phoneTel;
    const hasWhatsapp = !!SITE.whatsappNumber;
    const hasEmail = !!SITE.email;

    let franchiseHref = null;
    if (hasEmail) franchiseHref = 'mailto:' + SITE.email + '?subject=' + encodeURIComponent("Franchise interest: Toppino's");
    else if (hasWhatsapp) franchiseHref = waLink("Hi Toppino's! I'd like to register my interest in a franchise.");

    const hrefMap = {
        tel: hasPhone ? 'tel:' + SITE.phoneTel : null,
        whatsapp: hasWhatsapp ? waLink("Hi Toppino's! I'd like to know more.") : null,
        whatsappMenu: hasWhatsapp ? waLink("Hi Toppino's! I have a question about the menu.") : null,
        email: hasEmail ? 'mailto:' + SITE.email : null,
        franchise: franchiseHref,
        instagram: SITE.instagramUrl,
        facebook: SITE.facebookUrl,
        directions: SITE.directionsUrl,
        googleReview: SITE.googleReviewUrl
    };
    document.querySelectorAll('[data-site-href]').forEach(el => {
        const href = hrefMap[el.getAttribute('data-site-href')];
        if (href) el.href = href;
        el.hidden = !href;
    });

    const showMap = {
        phone: hasPhone,
        whatsapp: hasWhatsapp,
        email: hasEmail,
        enquiry: hasEmail || hasWhatsapp,
        anyContact: hasPhone || hasWhatsapp || hasEmail,
        googleReview: !!SITE.googleReviewUrl
    };
    document.querySelectorAll('[data-site-show]').forEach(el => {
        el.hidden = !showMap[el.getAttribute('data-site-show')];
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
    `).join('');
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

/* ---- menu helpers ---- */
function itemPrices(item) {
    return item.variants ? item.variants.map(v => v.price) : [item.price];
}
function categoryFromPrice(cat) {
    return Math.min(...cat.items.flatMap(itemPrices));
}
function categoryItemCount(cat) {
    return cat.items.reduce((n, item) => n + (item.variants ? item.variants.length : 1), 0);
}
// "Classic French Fries (170g)" -> "Classic French Fries" for alt text
function plainName(name) {
    return name.replace(/\s*\(.*?\)\s*/g, ' ').trim();
}
function dishAlt(cat, name) {
    return cat.id === 'pizzas'
        ? `${plainName(name)}, Neapolitan pizza at Toppino's Thaltej`
        : `${plainName(name)} at Toppino's, Thaltej Ahmedabad`;
}

/* ---- home page: "Our Most Loved Neapolitan Pizzas" ---- */
function renderPopularPizzas(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const pizzas = MENU.find(c => c.id === 'pizzas');
    const picks = POPULAR_PIZZAS.map(name => pizzas.items.find(item => item.name === name)).filter(Boolean);

    el.innerHTML = picks.map(item => `
        <div class="dish-card fade-in">
            ${item.img ? `
                <div class="menu-item-photo">
                    <img src="${item.img}" alt="${dishAlt(pizzas, item.name)}" loading="lazy">
                </div>
            ` : ''}
            <div class="dish-card-body">
                <div class="dish-card-top">
                    <h3 class="dish-name">${item.name}</h3>
                    <span class="dish-price">${rupee(item.price)}</span>
                </div>
                ${item.desc ? `<p class="dish-desc">${item.desc}</p>` : ''}
            </div>
        </div>
    `).join('');
    observeFadeIns(el);
}

/* ---- home page: "Menu at a Glance" category cards ---- */
function renderMenuGlance(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = MENU.filter(cat => cat.showOnHome).map(cat => `
        <a href="menu#${cat.id}" class="category-card fade-in" data-track="glance_${cat.id}">
            <div class="category-card-media">
                ${cat.cover
                    ? `<img src="${cat.cover}" alt="${cat.title} at Toppino's, Thaltej Ahmedabad" loading="lazy">`
                    : `<i class="fa-solid ${ICONS[cat.icon] || 'fa-utensils'}" aria-hidden="true"></i>`}
            </div>
            <div class="category-card-body">
                <h3>${cat.title}</h3>
                <span class="category-card-price">From ${rupee(categoryFromPrice(cat))}</span>
            </div>
        </a>
    `).join('');
    observeFadeIns(el);
}

/* ---- about page: live item count, so it stays true when the menu changes ---- */
function renderMenuStats(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const parts = MENU.map(cat => {
        const n = categoryItemCount(cat);
        return `${n} ${n === 1 ? cat.unit[0] : cat.unit[1]}`;
    });
    const total = MENU.reduce((n, cat) => n + categoryItemCount(cat), 0);
    el.textContent = `Across ${total} menu items: ${parts.slice(0, -1).join(', ')} and ${parts[parts.length - 1]}.`;
}

/* ---- menu page: full category-by-category menu + tabs ---- */
const ICONS = {
    flame: 'fa-fire', bread: 'fa-bread-slice', leaf: 'fa-leaf', cup: 'fa-mug-hot', coffee: 'fa-mug-saucer',
    soup: 'fa-bowl-food', mezze: 'fa-utensils', calzone: 'fa-circle-half-stroke',
    pasta: 'fa-bowl-rice', grill: 'fa-fire-burner', dessert: 'fa-cookie-bite', cold: 'fa-martini-glass-citrus'
};

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
                        <h2>${cat.heading}</h2>
                        ${cat.intro ? `<p>${cat.intro}</p>` : ''}
                    </div>
                </div>
                <div class="menu-grid">
                    ${cat.items.map(item => `
                        <div class="menu-item-card fade-in">
                            ${item.img ? `
                                <div class="menu-item-photo">
                                    <img src="${item.img}" alt="${dishAlt(cat, item.name)}" loading="lazy">
                                </div>
                            ` : ''}
                            <div class="menu-item-info">
                                <div class="menu-item-line">
                                    <h3 class="name">${item.name}</h3>
                                    <span class="leader"></span>
                                    ${item.price != null ? `<span class="price">${rupee(item.price)}</span>` : ''}
                                </div>
                                ${item.desc ? `<p class="menu-item-desc">${item.desc}</p>` : ''}
                                ${item.variants ? `
                                    <ul class="menu-item-variants">
                                        ${item.variants.map(variant => `
                                            <li>
                                                <span class="menu-item-variant-name">
                                                    ${variant.img ? `<img src="${variant.img}" alt="${variant.name}, ${item.name} at Toppino's" loading="lazy">` : ''}
                                                    <span>${variant.name}</span>
                                                </span>
                                                <span class="price">${rupee(variant.price)}</span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${cat.footerQuote ? `
                    <blockquote class="menu-category-quote">
                        <p>“${cat.footerQuote.text}”</p>
                        <cite>— ${cat.footerQuote.author}</cite>
                    </blockquote>
                ` : ''}
            </div>
        </section>
    `).join('');
    observeFadeIns(el);
}

/* ---- menu page: Menu structured data, built from the same MENU data ---- */
function injectMenuSchema() {
    const base = 'https://' + SITE.domain + '/';
    const offer = price => ({ '@type': 'Offer', price: String(price), priceCurrency: 'INR' });
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Menu',
        name: "Toppino's Menu",
        url: base + 'menu',
        inLanguage: 'en-IN',
        hasMenuSection: MENU.map(cat => ({
            '@type': 'MenuSection',
            name: cat.title,
            description: cat.intro,
            hasMenuItem: cat.items.flatMap(item => item.variants
                ? item.variants.map(v => ({ '@type': 'MenuItem', name: `${item.name}: ${v.name}`, offers: offer(v.price) }))
                : [Object.assign(
                    { '@type': 'MenuItem', name: item.name },
                    item.desc ? { description: item.desc } : {},
                    item.img ? { image: base + item.img.split('/').map(encodeURIComponent).join('/') } : {},
                    { offers: offer(item.price) }
                )])
        }))
    };
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.textContent = JSON.stringify(schema);
    document.head.appendChild(tag);
}

/* ---- menu tabs: let a plain vertical mouse wheel scroll the horizontal strip ----
   The scrollable element is the outer .menu-tabs (overflow-x:auto), not the
   #menuTabs div that renderMenuTabs fills - that's just its inline-flex content. */
function initMenuTabsWheelScroll() {
    const el = document.querySelector('.menu-tabs');
    if (!el) return;
    el.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return; // let native horizontal gestures pass through
        if (el.scrollWidth <= el.clientWidth) return; // nothing to scroll
        e.preventDefault();
        el.scrollLeft += e.deltaY;
    }, { passive: false });
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

    // keep the active tab in view on phones, where the 10 tabs overflow the strip
    const strip = document.querySelector('.menu-tabs');
    const spy = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tabs.forEach(t => {
                    const isActive = t.dataset.tab === entry.target.id;
                    t.classList.toggle('active', isActive);
                    if (isActive && strip) {
                        strip.scrollTo({ left: t.offsetLeft - (strip.clientWidth - t.offsetWidth) / 2, behavior: 'smooth' });
                    }
                });
            }
        });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(s => spy.observe(s));
}

/* sections are rendered by JS, so the browser can't jump to /menu#salads on load by itself */
function scrollToHashTarget() {
    if (!location.hash) return;
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView();
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

/* ---- contact form (no backend in scope) ----
   The form stays hidden until an email or WhatsApp number is set in
   site-data.js. WhatsApp is preferred when available: it opens the chat
   with everything pre-filled so the visitor only has to tap Send.
   Otherwise it opens the visitor's email app addressed to SITE.email. */
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
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        if (SITE.whatsappNumber) {
            window.open(waLink(`New website enquiry\n\n${body}`), '_blank', 'noopener');
        } else if (SITE.email) {
            location.href = 'mailto:' + SITE.email + '?subject=' + encodeURIComponent('Website enquiry from ' + name) + '&body=' + encodeURIComponent(body);
        } else {
            return;
        }
        trackEvent('contact_form_submit', name);
    });
}

/* ---- current page for nav highlighting: "", "index", "menu.html" and "menu" all normalise ---- */
function pageKey(path) {
    const clean = (path || '').split('#')[0].split('?')[0];
    if (clean === '' || clean.endsWith('/')) return 'home'; // "./", "/", or a sub-folder root
    const key = clean.split('/').pop().replace(/\.html$/, '');
    return key === 'index' ? 'home' : key;
}

/* ---- init everything ---- */
document.addEventListener('DOMContentLoaded', function () {
    applySiteData();
    initEventTracking();
    initContactForm();
    observeFadeIns(document);

    if (document.getElementById('popularPizzas')) {
        renderPopularPizzas('popularPizzas');
    }
    if (document.getElementById('menuGlance')) {
        renderMenuGlance('menuGlance');
    }
    if (document.getElementById('menuStats')) {
        renderMenuStats('menuStats');
    }
    if (document.getElementById('menuTabs')) {
        renderMenuTabs('menuTabs');
        initMenuTabsWheelScroll();
    }
    if (document.getElementById('menuCategories')) {
        renderMenuCategories('menuCategories');
        injectMenuSchema();
        initMenuTabScrollSpy();
        scrollToHashTarget();
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
    const current = pageKey(location.pathname);
    document.querySelectorAll('.nav-links a, .offcanvas-body .nav-link').forEach(a => {
        if (pageKey(a.getAttribute('href')) === current) {
            a.classList.add('active');
        }
    });
});
