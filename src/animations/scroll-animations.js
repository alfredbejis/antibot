// ===========================================================================
// SCROLL-TRIGGERED ANIMATIONS
// ===========================================================================

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize scroll-triggered animations for page sections
 */
export function initScrollAnimations() {
    // Hero section animation
    initHeroAnimation();

    // Sections reveal animation
    initSectionsReveal();

    // Header scroll behavior
    initHeaderScroll();

    console.log('🎭 Scroll animations initialized');
}

/**
 * Hero section entrance animation
 */
function initHeroAnimation() {
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const heroActions = document.querySelector('.hero__actions');

    if (!heroTitle) return;

    const tl = gsap.timeline({ delay: 0.2 });

    // Split title lines
    const titleLines = heroTitle.querySelectorAll('.hero__title-line');

    tl.from(titleLines, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15
    });

    if (heroSubtitle) {
        tl.from(heroSubtitle, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5');
    }

    if (heroActions) {
        tl.from(heroActions.children, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.1
        }, '-=0.4');
    }
}

/**
 * Sections reveal on scroll
 */
function initSectionsReveal() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
        const title = section.querySelector('.section__title');
        const subtitle = section.querySelector('.section__subtitle');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        if (title) {
            tl.from(title, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        }

        if (subtitle) {
            tl.from(subtitle, {
                y: 40,
                opacity: 0,
                duration: 0.6,
                ease: 'power3.out'
            }, '-=0.4');
        }
    });
}

/**
 * Header hide/show on scroll
 */
function initHeaderScroll() {
    const header = document.getElementById('header');

    if (!header) return;

    let lastScrollY = 0;

    ScrollTrigger.create({
        start: 'top top',
        end: 'max',
        onUpdate: (self) => {
            const currentScrollY = self.scroll();

            if (currentScrollY > 100) {
                header.classList.add('header--scrolled');

                if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    header.classList.add('header--hidden');
                } else {
                    header.classList.remove('header--hidden');
                }
            } else {
                header.classList.remove('header--scrolled');
            }

            lastScrollY = currentScrollY;
        }
    });
}
