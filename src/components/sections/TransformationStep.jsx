import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../ui/MagneticButton';
import { useOverlay } from '../../context/OverlayContext';
import { Accordion } from '../ui/Accordion'; // Import Accordion
import styles from './TransformationStep.module.css';

gsap.registerPlugin(ScrollTrigger);

const TransformationStep = () => {
    const containerRef = useRef(null);
    const { openModal } = useOverlay();

    const accordionItems = [
        {
            title: "ESPECIFICACIONES",
            subtitle: "[ ACTIVO ]",
            content: "Nuestra metodología se adapta a cada cliente: desde grandes industrias hasta hogares particulares."
        },
        {
            title: "SERVICIO",
            subtitle: "Auditoría Energética",
            content: "Análisis completo de tu instalación eléctrica. Para empresas: transformadores y maquinaria. Para hogares: electrodomésticos, climatización y hábitos de consumo."
        },
        {
            title: "TECNOLOGÍA",
            subtitle: "Monitorización Smart",
            content: "Despliegue de dispositivos inteligentes para captura de datos en tiempo real. Apps móviles para hogares, dashboards cloud para empresas."
        },
        {
            title: "OBJETIVO",
            subtitle: "Ahorro del 25-40%",
            content: "Meta de ahorro directo en tu factura eléctrica mediante optimización de consumo, cambio de tarifas y autoconsumo solar."
        },
        {
            title: "IMPACTO",
            subtitle: "Transición Verde",
            content: "Plan de ruta hacia la descarbonización: genera tu propia energía limpia y reduce tu huella de carbono."
        }
    ];

    useLayoutEffect(() => {
        // Animation for the "wireframe" sphere or visual element
    }, []);

    return (
        <section className={styles.section} ref={containerRef} id="methodology">
            <div className={`container ${styles.gridContainer}`}>
                {/* Left Column: Context & massive Number */}
                <div className={styles.leftCol}>
                    <div className={styles.chapterLabel}>
                        <span className="mono">CAPÍTULO:</span>
                    </div>
                    <div className={styles.bigNumber}>02</div>

                    <div className={styles.visualWireframe}>
                        {/* CSS Wireframe Globe Placeholder */}
                        <div className={styles.wireframeGlobe}>
                            <div className={styles.meridian}></div>
                            <div className={styles.meridian} style={{ transform: 'rotate(45deg)' }}></div>
                            <div className={styles.meridian} style={{ transform: 'rotate(90deg)' }}></div>
                            <div className={styles.meridian} style={{ transform: 'rotate(135deg)' }}></div>
                        </div>
                        <span className="mono" style={{ fontSize: '0.6rem', marginTop: '1rem' }}>
                            REF: INNOVACIÓN_SOSTENIBLE_V2
                        </span>
                    </div>
                </div>

                {/* Right Column: Narrative & Table */}
                <div className={styles.rightCol}>
                    <h2 className={styles.narrativeTitle}>
                        Transformación energética para todos: empresas y hogares.
                    </h2>
                    <p className={styles.narrativeDesc}>
                        Somos tu Partner Energético independiente. Desde grandes naves industriales hasta viviendas unifamiliares, integramos soluciones completas que reducen tu factura y cuidan del planeta.
                    </p>

                    <div className={styles.accordionContainer}>
                        <Accordion items={accordionItems} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransformationStep;
