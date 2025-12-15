---
description: Extraer e integrar componentes de fuentes externas
---

# Workflow: Extracción de Componentes Externos

Pipeline para buscar, extraer y adaptar componentes de 21st.dev y react.bits.

## Fuentes Target

- <https://21st.dev>
- <https://react.bits>

## Proceso

### 1. Descubrimiento (ComponentDiscoveryAgent)

Buscar componentes por intención:

- Navegar a la fuente
- Buscar por palabras clave (ej: "button", "card", "hero")
- Evaluar compatibilidad y licencia

### 2. Identificación (CodeInterpretationAgent)

- Detectar bloques de código vs documentación
- Identificar botones de "copy code" si existen
- Clasificar: JS/TS, JSX/TSX, CSS/SCSS/Tailwind

### 3. Extracción (CodeExtractionAgent)

- Preferir botón de copia si existe
- Si no, selección robusta del código completo
- Identificar dependencias implícitas

### 4. Adaptación (ComponentAdaptationAgent)

- Convertir a arquitectura local
- Mapear a design tokens locales
- Convertir estrategia CSS si necesario
- Aislar lógica stateful

### 5. Validación (ComponentFidelityAgent)

- Tests de render aislado
- Verificar timing de animaciones
- Comparar screenshots before/after

### 6. Integración

- Solo después de aprobación de Claude
- Documentar origen y licencia en manifest
- Commit con referencia a fuente

## Reglas

- NUNCA integrar snippets preview-only o instructional
- Instalar dependencias automáticamente
- Mantener atribución de origen
- Priorizar fidelidad sobre conveniencia
