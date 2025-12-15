import React from 'react';
import CircularGallery from '../ui/CircularGallery';
import styles from './DetailedServices.module.css';

// New images
import auditoriaImg from '../../assets/images/auditoria.jpg';
import ppaImg from '../../assets/images/ppa.jpg';
import fotovoltaicaImg from '../../assets/images/fotovoltaica.jpg';
import bateriasImg from '../../assets/images/baterias.jpg';
import cocheElectricoImg from '../../assets/images/coche_electrico.jpg';
import isoImg from '../../assets/images/iso.jpg';

const allServices = [
    {
        number: "01",
        title: "Auditoría Energética",
        category: "ANÁLISIS",
        content: "Diagnóstico personalizado para empresas y hogares. Detectamos ineficiencias en tu consumo, tarifas inadecuadas y oportunidades de ahorro. Para industrias analizamos potencia reactiva; para hogares, electrodomésticos y hábitos. Ahorro típico del 25-40%.",
        image: auditoriaImg
    },
    {
        number: "02",
        title: "Gestión de Compras Energéticas",
        category: "MERCADOS",
        content: "Negociamos las mejores tarifas y condiciones con comercializadoras. Para empresas: contratos PPA a largo plazo. Para hogares: comparativas de tarifas y cambio a la mejor opción del mercado. Estabiliza tu factura sin sorpresas.",
        image: ppaImg
    },
    {
        number: "03",
        title: "Instalación Fotovoltaica",
        category: "AUTOCONSUMO",
        content: "Paneles solares para naves industriales, locales comerciales y viviendas. Proyectos llave en mano desde 3kW para hogares hasta instalaciones de megavatios para industria. ROI típico de 4-7 años con garantía de rendimiento.",
        image: fotovoltaicaImg
    },
    {
        number: "04",
        title: "Baterías & Almacenamiento",
        category: "RESILIENCIA",
        content: "Almacena tu energía solar para usarla cuando la necesites. Para empresas: Peak Shaving y respaldo ante cortes. Para hogares: independencia de la red y aprovechamiento nocturno de la energía generada de día.",
        image: bateriasImg
    },
    {
        number: "05",
        title: "Punto de Recarga V.E.",
        category: "MOVILIDAD",
        content: "Instalación de cargadores para vehículos eléctricos. Desde wallbox domésticos de 7kW hasta estaciones de carga rápida para empresas y flotas. Gestión inteligente para optimizar costes de recarga.",
        image: cocheElectricoImg
    },
    {
        number: "06",
        title: "Certificación y Normativa",
        category: "CUMPLIMIENTO",
        content: "Asesoramiento para cumplir con normativas energéticas. Implementación de sistemas de gestión: ISO 9001 (Calidad), ISO 14001 (Medio Ambiente), ISO 45001 (Seguridad y Salud) e ISO 50001 (Eficiencia Energética). También Certificados de Eficiencia Energética para viviendas.",
        image: isoImg
    }
];

const DetailedServices = () => {
    return (
        <section className={styles.section} id="services">
            <CircularGallery items={allServices} />
        </section>
    );
};

export default DetailedServices;
