import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from '../ui/BlurText';
import { Accordion } from '../ui/Accordion';
import MagneticButton from '../ui/MagneticButton';
import { useOverlay } from '../../context/OverlayContext';
import styles from './EfficiencyHero.module.css';

gsap.registerPlugin(ScrollTrigger);

const EfficiencyHero = () => {
    const containerRef = useRef(null);
    const yellowTextRef = useRef(null);
    const { openModal } = useOverlay();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Highlight Animation
            gsap.to(yellowTextRef.current, {
                color: '#FFC800',
                duration: 0.5,
                delay: 1
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const accordionItems = [
        {
            number: "01",
            title: "Auditoría Inicial",
            subtitle: "Evaluación exhaustiva de patrones",
            content: "Analizamos su consumo histórico para detectar ineficiencias. Para empresas: picos de potencia y penalizaciones por reactiva. Para hogares: tarifas inadecuadas y aparatos vampiro. El resultado es un diagnóstico claro con ahorro garantizado."
        },
        {
            number: "02",
            title: "Optimización Técnica",
            subtitle: "Ajuste personalizado de consumo",
            content: "Para industrias: ajuste de potencia contratada y eliminación de reactiva. Para hogares: optimización de tarifas, discriminación horaria y mejora del aislamiento. Reducción inmediata en tu factura."
        },
        {
            number: "03",
            title: "Integración Renovable",
            subtitle: "Autoconsumo solar a tu medida",
            content: "Proyectos llave en mano para naves industriales y viviendas unifamiliares. Desde la ingeniería hasta la instalación de paneles de alta eficiencia. Independencia energética real para todos."
        },
        {
            number: "04",
            title: "Gestión Continua",
            subtitle: "Monitorización inteligente",
            content: "Vigilamos tus consumos en tiempo real mediante apps y dashboards personalizados. Alertas de consumo anómalo y recomendaciones para maximizar tu ahorro mensual."
        },
    ];

    return (
        <section className={styles.section} ref={containerRef}>
            <div className={`container ${styles.gridWrapper}`}>

                {/* Header Block */}
                <div className={styles.headerBlock}>
                    <div className={styles.metaRow}>
                        <span className="mono">[ CONTEXTO ]</span>
                        <span className="mono">SCROLL PARA EXPLORAR ↓</span>
                    </div>

                    <h1 className={styles.massiveTitle}>
                        <BlurText delay={0.1} className={styles.line}>PARTNER</BlurText>
                        <div className={styles.line}>
                            <span ref={yellowTextRef} className={styles.yellowSpan}>ENERGÉTICO</span>
                        </div>
                    </h1>

                    <p className={styles.subtitle}>
                        Soluciones integrales de ahorro energético para industrias, empresas y hogares. Reducimos tu factura, maximizamos tu eficiencia.
                    </p>

                    <MagneticButton className={styles.heroCta} onClick={() => openModal('invoice')}>
                        INICIAR ESTUDIO GRATUITO →
                    </MagneticButton>
                </div>

                {/* Accordion List (Replacing Grid) */}
                <div className={styles.accordionWrapper}>
                    <div className={styles.cardsHeader}>
                        <span className="mono">SERVICIOS INTEGRADOS</span>
                        <span className="mono" style={{ color: 'var(--accent-primary)' }}>[ EXPANDIR ]</span>
                    </div>
                    <Accordion items={accordionItems} />
                </div>

            </div>
        </section>
    );
};

export default EfficiencyHero;
