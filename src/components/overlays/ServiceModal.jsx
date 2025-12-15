import React from 'react';
import BrutalistModal from './BrutalistModal';
import { useOverlay } from '../../context/OverlayContext';

const ServiceModal = () => {
    const { activeModal, closeModal, overlayData } = useOverlay();
    const isOpen = activeModal === 'service';
    const { title, desc, features, image } = overlayData || {};

    return (
        <BrutalistModal isOpen={isOpen} onClose={closeModal} title={`SERVICIO // ${title || ''}`}>
            <div>
                <img
                    src={image}
                    alt={title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '2rem', filter: 'grayscale(100%)' }}
                />
                <h3 className="mono" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>DESCRIPCIÓN TÉCNICA</h3>
                <p style={{ marginBottom: '2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    {desc} Ampliamos el alcance de este servicio mediante integración directa con sus sistemas SCADA o facturación. Nuestro equipo de ingenieros validará la viabilidad en menos de 48 horas.
                </p>

                <h4 className="mono" style={{ fontSize: '1rem', marginBottom: '1rem', borderTop: '1px solid #000', paddingTop: '1rem' }}>
                    CAPACIDADES INCLUIDAS:
                </h4>
                <ul className="mono" style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {features?.map((f, i) => (
                        <li key={i}>[x] {f}</li>
                    ))}
                </ul>
            </div>
        </BrutalistModal>
    );
};

export default ServiceModal;
