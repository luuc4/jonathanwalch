/**
 * Jonathan Walch Portfolio - JavaScript
 * Handles interactivity and animations
 */

document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    handleInitialHash();
    initScrollAnimations();
    updateActiveNavLink(); // Initial check
});

/**
 * Handle initial hash scroll on page load
 */
function handleInitialHash() {
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100); // Small delay to ensure layout is ready
    }
}

/**
 * Navbar scroll effect
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let ticking = false;

    const updateNavbar = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    updateNavbar();
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return;

    const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    };

    const toggleMenu = () => {
        const isOpen = navMenu.classList.contains('active');
        if (isOpen) {
            closeMenu();
        } else {
            hamburger.classList.add('active');
            navMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking a nav link
    navMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            closeMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !hamburger.contains(e.target)) {
            closeMenu();
        }
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Manually set active state for the clicked link
            setActiveNavLink(href);
        });
    });
}

/**
 * Set active navigation link manually
 */
function setActiveNavLink(href) {
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        if (linkHref === href) {
            link.classList.add('active');
        }
    });
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');

    if (sections.length === 0) return;

    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if we're at the bottom of the page (for contact section)
    const isAtBottom = scrollY + windowHeight >= documentHeight - 50;

    let currentSection = '';

    if (isAtBottom) {
        // If at bottom, activate contact if it exists
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            currentSection = 'contact';
        }
    } else {
        // Otherwise, find which section we're currently viewing
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });
    }

    // Update nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');

        // Handle both #section and page.html#section formats
        if (linkHref === `#${currentSection}` || linkHref.endsWith(`#${currentSection}`)) {
            link.classList.add('active');
        }
    });
}

// Throttled scroll handler for active nav link
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
        updateActiveNavLink();
        scrollTimeout = null;
    }, 100);
});

/**
 * Scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.detail-card, .skill-card, .contact-link, .project-card, .values-section'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // Add CSS for animated state
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit = 100) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Add subtle parallax effect to hero background orbs
 */
window.addEventListener('mousemove', throttle((e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    if (orbs.length === 0) return;

    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const x = mouseX * speed;
        const y = mouseY * speed;
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
}, 50));

/**
 * Custom Cursor Logic
 */
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (!cursorDot || !cursorOutline) return;

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with slight delay (animation handled by CSS transition)
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    });

    // Hover effect for links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .detail-card, .skill-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovering');
        });
    });
}

/**
 * Console easter egg
 */
console.log(
    '%c Hey! Du bist neugierig? ',
    'background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; font-size: 14px; padding: 10px 20px; border-radius: 8px; font-weight: bold;'
);
console.log(
    '%c Kontaktiere mich gerne, wenn du Fragen hast! ',
    'color: #a1a1aa; font-size: 12px; padding: 5px;'
);
