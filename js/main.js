/* ============================================
   MOON SUSHI - MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // SWIPER INITIALIZATION - Testimonials
    // ============================================
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    // ============================================
    // SWIPER INITIALIZATION - Instagram Gallery
    // ============================================
    const instagramSwiper = new Swiper('.instagram-swiper', {
        loop: true,
        loopedSlides: 5,
        speed: 3000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        slidesPerView: 'auto',
        spaceBetween: 2,
        freeMode: false,          // ← remove freeMode, it breaks delay:0
        allowTouchMove: false,    // ← prevents user dragging from stopping it
        grabCursor: false,
        on: {
            init() {
                document.querySelectorAll('.instagram-item video').forEach(v => v.play());
            },
            loopFix() {
                document.querySelectorAll('.instagram-item video').forEach(v => v.play());
            }
        }
    });

    document.querySelectorAll('.instagram-item video').forEach(v => v.play());

    // ============================================
    // SWIPER INITIALIZATION - Menu
    // ============================================
    const menuSwiper = new Swiper('.menu-swiper', {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto',
        spaceBetween: 24,
        centeredSlides: true,
        grabCursor: true,
        pagination: {
            el: '.menu-swiper .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4, centeredSlides: false },
        },
    });

    // ============================================
    // SCROLL TO TOP
    // ============================================
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // NAVBAR BACKGROUND ON SCROLL
    // ============================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)';
            navbar.style.backdropFilter = 'none';
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close offcanvas if open
                const offcanvas = document.getElementById('offcanvasMenu');
                const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
                if (bsOffcanvas) {
                    bsOffcanvas.hide();
                }
            }
        });
    });

    // ============================================
    // RESERVATION FORM HANDLER
    // ============================================
    const reservationForm = document.querySelector('.reservation-form');
    const successOverlay = document.getElementById('reservationSuccess');
    const successCloseBtn = document.getElementById('successCloseBtn');

    if (reservationForm && successOverlay) {
        reservationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log('Reservation submitted');

            // Show the success overlay
            successOverlay.classList.add('active');
        });

        // Close overlay & reset form
        if (successCloseBtn) {
            successCloseBtn.addEventListener('click', function () {
                successOverlay.classList.remove('active');
                reservationForm.reset();

                // Reset SVG animations so they replay next time
                setTimeout(() => {
                    const circle = successOverlay.querySelector('.checkmark-circle');
                    const check = successOverlay.querySelector('.checkmark-check');
                    const title = successOverlay.querySelector('.success-title');
                    const msg = successOverlay.querySelector('.success-message');
                    const btn = successOverlay.querySelector('.success-close-btn');

                    // Force re-trigger by cloning
                    [circle, check].forEach(el => {
                        if (el) {
                            const clone = el.cloneNode(true);
                            el.parentNode.replaceChild(clone, el);
                        }
                    });

                    // Reset opacity on text elements
                    [title, msg, btn].forEach(el => {
                        if (el) {
                            el.style.opacity = '0';
                            el.style.transform = 'translateY(12px)';
                            // Force reflow then clear inline styles
                            requestAnimationFrame(() => {
                                el.style.removeProperty('opacity');
                                el.style.removeProperty('transform');
                            });
                        }
                    });
                }, 500); // Wait for overlay fade-out
            });
        }
    }

    // ============================================
    // ADD TO CART HANDLER
    // ============================================
    document.querySelectorAll('.menu-card-add').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const card = this.closest('.menu-card');
            const itemName = card.querySelector('.menu-card-name').textContent;
            alert(itemName + ' added to cart!');
        });
    });

    // ============================================
    // HERO SLIDER DOTS (Visual only - can be expanded)
    // ============================================
    const dots = document.querySelectorAll('.hero-pagination .dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ============================================
    // INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

});

// ============================================
// FADE-IN ANIMATION STYLES (injected via JS)
// ============================================
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .fade-in-visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
