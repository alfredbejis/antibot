import React, { useState } from 'react';
import BrutalistModal from './BrutalistModal';
import { useOverlay } from '../../context/OverlayContext';
import styles from './InvoiceModal.module.css';

const InvoiceModal = () => {
    const { activeModal, closeModal } = useOverlay();
    const [step, setStep] = useState(1);
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        company: ''
    });

    const isOpen = activeModal === 'invoice';

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if (step === 1 && !file) return alert("Por favor selecciona una factura.");
        setStep(step + 1);
    };

    const encode = (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((k) => {
            formData.append(k, data[k]);
        });
        return formData;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(3); // Loading

        // Create form payload for Netlify
        const dataPayload = new FormData();
        dataPayload.append('form-name', 'contact');
        if (file) dataPayload.append('invoice', file);
        dataPayload.append('email', formData.email);
        dataPayload.append('phone', formData.phone);
        dataPayload.append('company', formData.company);
        dataPayload.append('terms', 'true');

        fetch("/", {
            method: "POST",
            body: dataPayload
        })
            .then(() => {
                setStep(4); // Success
            })
            .catch((error) => {
                alert("Error al enviar: " + error);
                setStep(2); // Go back to correct
            });
    };

    const reset = () => {
        setStep(1);
        setFile(null);
        setFormData({ email: '', phone: '', company: '' });
        closeModal();
    };

    return (
        <BrutalistModal isOpen={isOpen} onClose={reset} title="ANÁLISIS DE FACTURA // IA ESTIMATION">
            {step === 1 && (
                <div className={styles.stepContainer}>
                    <h3 className={styles.stepTitle}>1. Sube tu Factura Eléctrica</h3>
                    <p className={styles.stepDesc}>Nuestra IA analizará tu curva de carga para detectar anomalías.</p>

                    <div className={styles.fileUpload}>
                        <input type="file" id="invoice" onChange={handleFileChange} className={styles.inputHidden} accept=".pdf,.image/*" />
                        <label htmlFor="invoice" className={styles.uploadLabel}>
                            {file ? `[ ${file.name} ]` : "[ SELECCIONAR ARCHIVO PDF/JPG ]"}
                        </label>
                    </div>

                    <button className={styles.actionBtn} onClick={handleNext}>SIGUIENTE →</button>
                </div>
            )}

            {step === 2 && (
                <form className={styles.stepContainer} onSubmit={handleSubmit} name="contact" method="post">
                    <input type="hidden" name="form-name" value="contact" />

                    <h3 className={styles.stepTitle}>2. Datos de Contacto</h3>
                    <p className={styles.stepDesc}>¿Dónde enviamos el informe de ahorro preliminar?</p>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Corporativo"
                        className={styles.inputField}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Teléfono"
                        className={styles.inputField}
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Nombre de la Empresa"
                        className={styles.inputField}
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                    />

                    <div className={styles.checkboxRow}>
                        <input type="checkbox" required id="terms" name="terms" />
                        <label htmlFor="terms">Acepto la política de privacidad</label>
                    </div>

                    <button type="submit" className={styles.actionBtn}>ANALIZAR AHORA</button>
                </form>
            )}

            {step === 3 && (
                <div className={styles.stepContainer}>
                    <h3 className={styles.stepTitle}>PROCESANDO...</h3>
                    <div className={styles.loadingBar}>
                        <div className={styles.loadingProgress}></div>
                    </div>
                    <p className="mono">Enviando datos de forma segura...</p>
                </div>
            )}

            {step === 4 && (
                <div className={styles.stepContainer}>
                    <h3 className={styles.stepTitle}>¡RECIBIDO!</h3>
                    <div className={styles.successIcon}>✓</div>
                    <p className={styles.stepDesc}>
                        Hemos recibido tu documentación correctamente. Nuestro equipo se pondrá en marcha de inmediato.
                    </p>
                    <button className={styles.actionBtn} onClick={reset}>CERRAR</button>
                </div>
            )}
        </BrutalistModal>
    );
};

export default InvoiceModal;
