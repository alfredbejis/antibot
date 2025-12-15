# Plan de Implementación: Partner Energético (Stitch Replication)

## Objetivos
Replicar la arquitectura y narrativa visual "Stitch" para el servicio "Partner Energético" utilizando el sistema Antigravity. Se prioriza la performance, animación narrativa (Scrollytelling) y conversión B2B.

## Blueprint Arquitectónico (NotebookLM)
*   **Estrategia:** Long Scrolling + Scrollytelling.
*   **Narrativa:** Problema (Caos) -> Solución (Orden/Claridad) -> Autoridad (Datos) -> Conversión.
*   **Tecnología:** WebGL (Three.js), GSAP ScrollTrigger, Lenis Smooth Scroll.

## Stack Técnico
*   **Core:** React 18 + Vite.
*   **Lenguaje:** JavaScript (ESModules) / JSX.
*   **Estilos:** Vanilla CSS (Variables + CSS Modules para componentes complejos).
*   **Animación:** GSAP (ScrollTrigger), Lenis.
*   **3D:** Three.js + @react-three/fiber + @react-three/drei (para gestión eficiente de escenas).

## Fases de Desarrollo

### Fase 1: Ingeniería Base (Core Engineering)
1.  **Reparación de Dependencias:** Instalar `react`, `react-dom`, `@react-three/fiber`, `@react-three/drei`.
2.  **Design System Foundation:** Configurar `src/styles/variables.css` (colores, tipografía variable, espaciados).
3.  **Layout Shell:** Configurar `App.jsx` con Lenis Smooth Scroll integrado.

### Fase 2: Componentes Nucleares y 3D
1.  **WebGL Scene (Hero):** Implementar "Chaos to Order" shader background.
2.  **3D Network Model:** Modelo abstracto de red energética (Solution Section).
3.  **Scroll Orchestrator:** Configurar triggers de GSAP para la transición de escenas.

### Fase 3: Estructura de Secciones (Stitch Replica)
1.  **Hero Section:** Título de valor + Fondo WebGL.
2.  **Problem Section:** Texto narrativo con disparadores de animación de fondo.
3.  **Solution Section (Pinning):** Sección fijada donde la visualización 3D evoluciona mientras el texto scrollea.
4.  **Authority Section:** "Data Storytelling" (Contadores animados, comparativas visuales).
5.  **CTA/Form:** Formulario de alta conversión.

### Fase 4: Pulido y Performance
1.  **Micro-interacciones:** Hover effects, cursores magnéticos (opcional).
2.  **Optimización:** Lazy loading de modelos 3D, code-splitting.
3.  **SEO:** Meta etiquetas dinámicas.

## Pasos Inmediatos
1.  Instalar dependencias faltantes.
2.  Crear `src/main.jsx` y `src/App.jsx` si no existen o refactorizarlos.
3.  Definir tokens de diseño en CSS.
