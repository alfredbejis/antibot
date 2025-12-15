import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Problem.module.css';

gsap.registerPlugin(ScrollTrigger);

const Problem = ({ id }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        // Initial reveal animation
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        end: "top 30%",
                        scrub: 1
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id={id} className={styles.section} ref={containerRef}>
            <div className="container">
                <div className={styles.contentWrapper} ref={textRef}>
                    <h2 className={styles.heading}>El Mercado Energético es un <span className={styles.hightlight}>Desafío.</span></h2>
                    <p className={styles.description}>
                        Volatilidad de precios. Regulaciones cambiantes. Datos dispersos.
                        Gestionar la energía de una empresa sin las herramientas adecuadas no es solo difícil, es costoso.
                    </p>
                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>+40%</span>
                            <span className={styles.statLabel}>Sobre-costes por ineficiencia</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>Hrs</span>
                            <span className={styles.statLabel}>Perdidas en gestión manual</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
