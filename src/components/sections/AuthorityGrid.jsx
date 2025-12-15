import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AuthorityGrid.module.css';

gsap.registerPlugin(ScrollTrigger);

const AuthorityGrid = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.header}`}>
                <h1 className={styles.bigTitle}>Autoridad <span style={{ fontFamily: 'serif', fontStyle: 'italic' }}>(Exp)</span></h1>
                <div className={styles.metaBlock}>
                    <span className="mono">SOLUCIONES INTEGRALES</span>
                    <span className="mono">EST. 2009</span>
                </div>
            </div>

            <div className="container">
                <p className={styles.leadText}>
                    Transformamos el consumo energético con precisión y escala. Un partner independiente con la infraestructura para alimentar el futuro.
                </p>

                <div className={styles.badgesRow}>
                    <span className={styles.badge}>NEGOCIOS</span>
                    <span className={styles.badge}>INDUSTRIA</span>
                    <span className={`${styles.badge} ${styles.badgeYellow}`}>HOGARES (GRATIS)</span>
                </div>

                {/* 2x2 GRID */}
                <div className={styles.grid2x2}>
                    {/* Item 1 */}
                    <div className={styles.gridItem}>
                        <span className={styles.itemIndex}>01</span>
                        <h3 className={styles.itemTitle}>IMPACTO</h3>
                        <p className={styles.itemDesc}>Empresas y hogares que confían en nuestra gestión energética diaria.</p>
                        <div className={styles.bigStat}>+100<span style={{ color: '#FFC800' }}>k</span></div>
                        <span className={styles.statLabel}>CLIENTES ACTIVOS</span>
                    </div>
                    {/* Item 2 */}
                    <div className={styles.gridItem}>
                        <span className={styles.itemIndex}>02</span>
                        <h3 className={styles.itemTitle}>COBERTURA</h3>
                        <p className={styles.itemDesc}>Operatividad total en todo el territorio nacional sin excepciones geográficas.</p>
                        <div className={styles.bigStat}>17<span className={styles.blackBox}>ES</span></div>
                        <span className={styles.statLabel}>COMUNIDADES AUTÓNOMAS</span>
                    </div>
                    {/* Item 3 */}
                    <div className={styles.gridItem}>
                        <span className={styles.itemIndex}>03</span>
                        <h3 className={styles.itemTitle}>INFRAESTRUCTURA</h3>
                        <p className={styles.itemDesc}>Proyectos fotovoltaicos ejecutados y en funcionamiento.</p>
                        <div className={styles.bigStat}>3000<span style={{ color: '#FFC800' }}>+</span></div>
                        <span className={styles.statLabel}>INSTALACIONES SOLARES</span>
                    </div>
                    {/* Item 4 */}
                    <div className={styles.gridItem}>
                        <span className={styles.itemIndex}>04</span>
                        <h3 className={styles.itemTitle}>TRAYECTORIA</h3>
                        <p className={styles.itemDesc}>Liderando la transición energética desde antes de que fuera tendencia.</p>
                        <div className={styles.bigStat}>15<span style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '0.4em' }}>Años</span></div>
                        <span className={styles.statLabel}>DE EXPERIENCIA</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthorityGrid;
