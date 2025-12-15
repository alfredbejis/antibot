import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Navbar.module.css';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navRef = useRef(null);

    useLayoutEffect(() => {
        const showAnim = gsap.from(navRef.current, {
            yPercent: -100,
            paused: true,
            duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
            }
        });
    }, []);

    return (
        <nav className={styles.navbar} ref={navRef}>
            <div className="container">
                <div className={styles.navContent}>
                    <div className={styles.logo}>
                        <span className={styles.logoText}>PARTNER ENERGÉTICO</span>
                    </div>
                    <ul className={styles.navLinks}>
                        <li><a href="#services">Servicios</a></li>
                        <li><a href="#methodology">Metodología</a></li>
                        <li><a href="#about">Nosotros</a></li>
                        <li><a href="#contact" className={styles.ctaButton}>Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
