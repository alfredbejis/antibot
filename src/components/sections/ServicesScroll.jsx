import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from '../ui/BlurText';
import { Accordion } from '../ui/Accordion';
import styles from './ServicesScroll.module.css';

// Images
import auditImg from '../../assets/images/audit.jpg';
import monitoringImg from '../../assets/images/monitoring.jpg';
import renewableImg from '../../assets/images/renewable.jpg';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "01",
        title: "Auditoría Inicial",
        category: "Diagnóstico",
        desc: "Evaluación profunda de tus patrones de consumo actuales y detección de fugas de eficiencia.",
        features: ["Análisis de Curva de Carga", "Detección de Reactiva", "Informe de Potencial"],
        image: auditImg
    },
    {
        id: "02",
        title: "Monitorización IoT",
        category: "Tecnología",
        desc: "Implementación de sensores en tiempo real para control total de tu infraestructura.",
        features: ["Dashboard 24/7", "Alertas Predictivas", "Control Remoto"],
        image: monitoringImg
    },
    {
        id: "03",
        title: "Implementación",
        category: "Ejecución",
        desc: "Instalación llave en mano de soluciones fotovoltaicas y baterías industriales.",
        features: ["Paneles Tier-1", "Baterías LFP", "Legalización Incluida"],
        image: renewableImg
    }
];

const ServicesScroll = () => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const panelsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const panels = panelsRef.current;

            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + containerRef.current.offsetWidth * 2
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.section} ref={containerRef}>
            <div className={styles.stickyHeader}>
                <span className="mono">SERVICIOS ACTIVOS [ 01 — 03 ]</span>
            </div>

            <div className={styles.horizontalWrapper} ref={wrapperRef}>
                {services.map((service, i) => (
                    <div
                        key={service.id}
                        className={styles.panel}
                        ref={el => panelsRef.current[i] = el}
                    >
                        <div className={`container ${styles.panelContent}`}>
                            {/* Left: Typography */}
                            <div className={styles.textBlock}>
                                <div className={styles.numberDisplay}>{service.id}</div>
                                <h2 className={styles.serviceTitle}>
                                    <BlurText delay={0.2}>{service.title}</BlurText>
                                </h2>
                                <span className={styles.categoryBadge}>{service.category}</span>

                                <div style={{ marginTop: '2rem' }}>
                                    <Accordion items={[{
                                        title: "DETALLES TÉCNICOS",
                                        subtitle: "[ EXPANDIR ]",
                                        content: (
                                            <div>
                                                <p style={{ marginBottom: '1rem' }}>{service.desc}</p>
                                                <ul>
                                                    {service.features.map((f, idx) => (
                                                        <li key={idx}>+ {f}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    }]} />
                                </div>
                            </div>

                            {/* Right: Visual */}
                            <div className={styles.imageBlock}>
                                <div className={styles.imageWrapper}>
                                    <img src={service.image} alt={service.title} className={styles.image} />
                                    <div className={styles.overlay}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesScroll;
