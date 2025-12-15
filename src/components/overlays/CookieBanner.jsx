import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './CookieBanner.module.css';

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consented = localStorage.getItem('cookieConsent');
        if (!consented) {
            setVisible(true);
            setTimeout(() => {
                gsap.fromTo("#cookie-banner",
                    { y: 100 },
                    { y: 0, duration: 0.5, ease: "power2.out" }
                );
            }, 1000);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('cookieConsent', 'true');
        gsap.to("#cookie-banner", {
            y: 100,
            duration: 0.5,
            onComplete: () => setVisible(false)
        });
    };

    if (!visible) return null;

    return (
        <div id="cookie-banner" className={styles.banner}>
            <div className={`container ${styles.content}`}>
                <p className={styles.text}>
                    <span className="mono">[ PRIVACIDAD ]</span> Utilizamos cookies para optimizar la experiencia técnica y analizar el tráfico corporativo.
                </p>
                <div className={styles.actions}>
                    <button className={styles.rejectBtn} onClick={accept}>RECHAZAR</button>
                    <button className={styles.acceptBtn} onClick={accept}>ACEPTAR TODO</button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
