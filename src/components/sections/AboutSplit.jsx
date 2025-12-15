import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../ui/MagneticButton';
import styles from './AboutSplit.module.css';
import teamImg from '../../assets/images/team.jpg'; // Import image

gsap.registerPlugin(ScrollTrigger);

const AboutSplit = () => {
    const sectionRef = useRef(null);
    const leftImageRef = useRef(null);
    const rightImageRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(leftImageRef.current, {
                scale: 1.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    scrub: true
                }
            });
            gsap.from(rightImageRef.current, {
                scale: 1.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "center bottom",
                    scrub: true
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.section} ref={sectionRef} id="about">
            {/* ENFOQUE 1: Manifesto (Left Text, Right Image) */}
            <div className={styles.row}>
                <div className={styles.textCol}>
                    <span className="mono">[ MANIFIESTO ]</span>
                    <h2 className={styles.title}>
                        Infraestructura para alimentar el futuro.
                    </h2>
                    <p className={styles.desc}>
                        No somos una comercializadora más. Somos ingenieros de datos y expertos en mercado eléctrico trabajando para que empresas y familias paguen exactamente lo justo. Ni un euro más.
                    </p>
                    <div className={styles.statSimple}>
                        <div className={styles.statValue}>15</div>
                        <div className={styles.statLabel}>AÑOS DE EXPERIENCIA TÉCNICA</div>
                    </div>
                </div>
                <div className={styles.imageCol}>
                    <div className={styles.imageWrapper}>
                        <img
                            ref={leftImageRef}
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                            alt="Arquitectura Corporativa"
                            className={styles.image}
                        />
                        <div className={styles.imageLabel}>MADRID HQ • 2024</div>
                    </div>
                </div>
            </div>

            {/* ENFOQUE 2: Equipo (Left Image, Right Text) */}
            <div className={`${styles.row} ${styles.reverse}`}>
                <div className={styles.imageCol}>
                    <div className={styles.imageWrapper}>
                        <img
                            ref={rightImageRef}
                            src={teamImg}
                            alt="Equipo de Ingeniería"
                            className={styles.image}
                        />
                        <div className={styles.imageLabel}>EQUIPO DE ANÁLISIS • ENFOQUE 2</div>
                    </div>
                </div>
                <div className={styles.textCol}>
                    <span className="mono">[ HUMANO ]</span>
                    <h2 className={styles.title}>
                        Tecnología con supervisión experta.
                    </h2>
                    <p className={styles.desc}>
                        Los algoritmos detectan las oportunidades de ahorro, pero nuestros consultores personalizan cada solución. La combinación perfecta entre tecnología avanzada y atención cercana.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSplit;
