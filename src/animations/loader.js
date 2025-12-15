// ===========================================================================
// LOADER ANIMATION
// ===========================================================================

import { gsap } from 'gsap';

/**
 * Initialize and animate the page loader
 * @returns {Promise} Resolves when loader animation completes
 */
export function initLoader() {
    return new Promise((resolve) => {
        const loader = document.getElementById('loader');
        const loaderProgress = loader?.querySelector('.loader__progress');
        const loaderText = loader?.querySelector('.loader__text');

        if (!loader) {
            resolve();
            return;
        }

        const tl = gsap.timeline({
            onComplete: () => {
                loader.remove();
                resolve();
            }
        });

        // Animate progress circle
        tl.to(loaderProgress, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: 'power2.inOut'
        });

        // Fade out loader text
        tl.to(loaderText, {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: 'power2.in'
        }, '-=0.5');

        // Expand and fade out loader container
        tl.to(loader, {
            scale: 1.1,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.inOut'
        }, '-=0.2');

        console.log('🎬 Loader animation started');
    });
}
