// ===========================================================================
// LENIS SMOOTH SCROLL INITIALIZATION
// ===========================================================================

import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize Lenis smooth scrolling
 * @returns {Lenis} Lenis instance
 */
export function initLenis() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease out
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Expose for debugging
    window.lenis = lenis;

    console.log('🎯 Lenis smooth scroll initialized');

    return lenis;
}

/**
 * Stop Lenis scrolling (useful for modals)
 */
export function stopLenis() {
    if (window.lenis) {
        window.lenis.stop();
    }
}

/**
 * Start Lenis scrolling
 */
export function startLenis() {
    if (window.lenis) {
        window.lenis.start();
    }
}

/**
 * Scroll to target element
 * @param {string|HTMLElement} target - CSS selector or element
 * @param {Object} options - Lenis scrollTo options
 */
export function scrollTo(target, options = {}) {
    if (window.lenis) {
        window.lenis.scrollTo(target, {
            offset: 0,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            ...options
        });
    }
}
