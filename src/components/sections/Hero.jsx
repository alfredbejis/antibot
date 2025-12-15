import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className="container">
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        <span className={styles.line}>Claridad en un</span>
                        <span className={styles.line}>Mundo Energético</span>
                        <span className={styles.lineHighlight}>Complejo.</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Transformamos la incertidumbre del mercado en estrategias de eficiencia rentables y sostenibles.
                    </p>
                    <div className={styles.ctaGroup}>
                        <button className={styles.primaryBtn}>Auditoría Gratuita</button>
                        <button className={styles.secondaryBtn}>Ver Casos de Éxito</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
