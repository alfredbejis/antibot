import React from 'react';
import BrutalistModal from './BrutalistModal';
import { useOverlay } from '../../context/OverlayContext';

const LegalModal = () => {
    const { activeModal, closeModal } = useOverlay();
    const isOpen = activeModal === 'legal';

    return (
        <BrutalistModal isOpen={isOpen} onClose={closeModal} title="AVISO LEGAL // TÉRMINOS">
            <div style={{ fontFamily: 'var(--font-family-mono)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '1rem' }}><strong>1. DATOS IDENTIFICATIVOS</strong><br />
                    En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico.</p>

                <p style={{ marginBottom: '1rem' }}><strong>2. PROPIEDAD INTELECTUAL</strong><br />
                    El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en el presente sitio web están protegidos por la legislación española.</p>

                <p style={{ marginBottom: '1rem' }}><strong>3. PROTECCIÓN DE DATOS</strong><br />
                    La empresa garantiza el cumplimiento de la normativa de Protección de Datos de Carácter Personal, y así lo muestra en su Política de Privacidad.</p>

                <p><strong>REF: LEGAL_2024_V2</strong></p>
            </div>
        </BrutalistModal>
    );
};

export default LegalModal;
