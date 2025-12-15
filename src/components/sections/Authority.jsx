import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Authority.module.css';

gsap.registerPlugin(ScrollTrigger);

const StatCounter = ({ end, suffix = "", label, duration = 2 }) => {
    const numberRef = useRef(null);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(numberRef.current, {
                textContent: 0,
                duration: duration,
                ease: "power2.out",
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, [end, duration]);

    return (
        <div className={styles.statItem} ref={containerRef}>
            <div className={styles.statValue}>
                <span ref={numberRef}>{end}</span>{suffix}
            </div>
            <div className={styles.statLabel}>{label}</div>
        </div>
    );
};

const Authority = ({ id }) => {
    const sectionRef = useRef(null);
    const barRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the "Efficiency Gap" bar
            gsap.fromTo(barRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%"
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id={id} className={styles.section} ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Resultados <span className={styles.highlight}>Verificables</span></h2>
                    <p className={styles.subtitle}>
                        No vendemos promesas. Vendemos matemáticas aplicadas a tu consumo energético.
                    </p>
                </div>

                <div className={styles.metricsGrid}>
                    <StatCounter end={24} suffix="%" label="Ahorro Medio Anual" />
                    <StatCounter end={1200} suffix="h" label="Horas Gestión Ahorradas" />
                    <StatCounter end={100} suffix="%" label="Transparencia" />
                </div>

                <div className={styles.comparisonWrapper}>
                    <h3 className={styles.comparisonTitle}>El Coste de la Inacción</h3>
                    <div className={styles.chartContainer}>
                        <div className={styles.chartRow}>
                            <span className={styles.rowLabel}>Sin Partner</span>
                            <div className={styles.barBackground}>
                                <div className={`${styles.bar} ${styles.barInefficient}`} style={{ width: '90%' }}>
                                    <span>Sobrecoste + Riesgo</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chartRow}>
                            <span className={styles.rowLabel}>Con Partner</span>
                            <div className={styles.barBackground}>
                                <div ref={barRef} className={`${styles.bar} ${styles.barEfficient}`} style={{ width: '60%', transformOrigin: 'left' }}>
                                    <span>Optimizado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Authority;
