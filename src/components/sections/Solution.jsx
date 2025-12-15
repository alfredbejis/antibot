import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Solution.module.css';

gsap.registerPlugin(ScrollTrigger);

const Solution = ({ id }) => {
    const sectionRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        // Media Query for GSAP matchMedia if needed for mobile/desktop split
        // For now simple pinning logic

        const ctx = gsap.context(() => {
            // Pin the Left Column (Visual) while scrolling the Right Column (Content)
            // Adjust trigger to be the whole section
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: leftColRef.current,
                scrub: true,
                // pinSpacing: false // false if we want overlap, true default is standard behavior 
            });

            // Animate cards entering
            cardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { opacity: 0.2, scale: 0.95 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 70%",
                            end: "top 40%",
                            scrub: 0.5,
                            toggleActions: "play reverse play reverse"
                        }
                    }
                )
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const steps = [
        {
            title: "01. Auditoría Profunda",
            desc: "Analizamos tu curva de carga histórica y detectamos anomalías invisibles al ojo humano."
        },
        {
            title: "02. Estrategia de Compra",
            desc: "Diseñamos un plan de adquisición de energía a medida, minimizando la exposición a la volatilidad."
        },
        {
            title: "03. Optimización Continua",
            desc: "Monitoreo 24/7 y ajustes en tiempo real para mantener la eficiencia máxima."
        }
    ];

    return (
        <section id={id} className={styles.section} ref={sectionRef}>
            <div className={`container ${styles.gridContainer}`}>

                {/* Pinned Column - Visual / 3D Space Focus */}
                <div className={styles.leftCol} ref={leftColRef}>
                    <div className={styles.visualPlaceholder}>
                        <h3 className={styles.visualTitle}>La Metodología</h3>
                        <div className={styles.visualGraphic}>
                            {/* This space is intentionally left empty/transparent for the 3D WebGL Order State to shine through */}
                            <div className={styles.circle}></div>
                            <div className={styles.line}></div>
                        </div>
                    </div>
                </div>

                {/* Scrolling Column - Content Steps */}
                <div className={styles.rightCol} ref={rightColRef}>
                    <div className={styles.scrollContent}>
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={styles.stepCard}
                                ref={el => cardsRef.current[index] = el}
                            >
                                <h4 className={styles.cardTitle}>{step.title}</h4>
                                <p className={styles.cardDesc}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Solution;
