import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = ({ id }) => {
    const [focused, setFocused] = useState({});
    const [formData, setFormData] = useState({ name: '', email: '', company: '' });

    const handleFocus = (field) => setFocused(prev => ({ ...prev, [field]: true }));
    const handleBlur = (field) => setFocused(prev => ({ ...prev, [field]: formData[field].length > 0 }));
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <section id={id} className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.textCol}>
                        <h2 className={styles.title}>Empecemos a <span className={styles.highlight}>Optimizar.</span></h2>
                        <p className={styles.desc}>
                            Solicita tu auditoría inicial gratuita. Sin compromiso, solo datos claros sobre tu potencial de ahorro.
                        </p>
                        <ul className={styles.benefitsList}>
                            <li>✅ Análisis de facturación histórica</li>
                            <li>✅ Detección de potencias ineficientes</li>
                            <li>✅ Estrategia de compra personalizada</li>
                        </ul>
                    </div>

                    <div className={styles.formCol}>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>

                            <div className={`${styles.inputGroup} ${focused.name ? styles.focused : ''}`}>
                                <label className={styles.label} htmlFor="name">Nombre Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className={styles.input}
                                    onFocus={() => handleFocus('name')}
                                    onBlur={() => handleBlur('name')}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.inputGroup} ${focused.email ? styles.focused : ''}`}>
                                <label className={styles.label} htmlFor="email">Email Corporativo</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={styles.input}
                                    onFocus={() => handleFocus('email')}
                                    onBlur={() => handleBlur('email')}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.inputGroup} ${focused.company ? styles.focused : ''}`}>
                                <label className={styles.label} htmlFor="company">Empresa / Organización</label>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    className={styles.input}
                                    onFocus={() => handleFocus('company')}
                                    onBlur={() => handleBlur('company')}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Solicitar Auditoría
                                <svg className={styles.arrowIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
