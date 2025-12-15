import React, { useState } from 'react';
import MagneticButton from '../ui/MagneticButton';
import { useOverlay } from '../../context/OverlayContext';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const { openModal } = useOverlay();

    return (
        <section className={styles.section} id="contact">
            <div className={`container ${styles.gridContainer} `}>
                {/* Left: Call to Action */}
                <div className={styles.ctaCol}>
                    <h2 className={styles.heading}>
                        ¿Listo para ahorrar?
                    </h2>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoBlock}>
                            <span className="mono">EMAIL</span>
                            <a href="mailto:energialfred@gmail.com">energialfred@gmail.com</a>
                        </div>
                        <div className={styles.infoBlock}>
                            <span className="mono">SOCIAL</span>
                            <div className={styles.socialLinks}>
                                <span>LN</span>
                                <span>IG</span>
                                <span>TW</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Brutalist Form */}
                <div className={styles.formCol}>
                    <div className={styles.formHeader}>
                        <span className="mono">ESTADO: ESPERANDO INPUT</span>
                    </div>
                    <MagneticButton className={styles.massiveButton} onClick={() => openModal('invoice')}>
                        CONSULTAR AHORA →
                    </MagneticButton>
                </div>
            </div>

            {/* Footer Bar */}
            <div className={`container ${styles.footerBar} `}>
                <div className={styles.barcode}>
                    {/* CSS Barcode */}
                    {[...Array(20)].map((_, i) => (
                        <div key={i} style={{
                            width: Math.random() > 0.5 ? '4px' : '2px',
                            height: '40px',
                            background: '#000',
                            marginLeft: '2px'
                        }}></div>
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button
                        onClick={() => openModal('legal')}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                        className="mono"
                    >
                        [ AVISO LEGAL ]
                    </button>
                    <span className="mono" style={{ fontSize: '0.75rem' }}>© 2025 PARTNER ENERGÉTICO</span>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
