# 🚀 Antigravity Landing Page System

Sistema fundacional para la creación de landing pages de alto rendimiento con animaciones cinematográficas, WebGL opcional y optimización de conversión (CRO).

## 📋 Tabla de Contenidos

- [Inicio Rápido](#inicio-rápido)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Design System](#design-system)
- [Capas del Sistema](#capas-del-sistema)
- [Scripts Disponibles](#scripts-disponibles)
- [Agentes del Sistema](#agentes-del-sistema)

## 🏁 Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:3000
```

## 📁 Estructura del Proyecto

```
antibot/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── base/            # Componentes atómicos (Button, Card, etc.)
│   │   ├── adapted/         # Componentes externos adaptados
│   │   ├── lottie/          # Componentes Lottie
│   │   └── svg/             # Componentes SVG
│   ├── styles/
│   │   ├── tokens.scss      # Design tokens
│   │   └── global.scss      # Estilos globales
│   ├── animations/          # Animaciones GSAP
│   ├── scroll/              # Orquestación de scroll (Lenis + ScrollTrigger)
│   ├── webgl/               # Escenas Three.js (opcional)
│   └── main.js              # Entry point
├── assets/                  # Assets del proyecto
├── branding/                # Identidad visual y tokens de marca
├── seo/                     # SEO técnico (meta, sitemap, JSON-LD)
├── content/                 # Copy y contenido modular
├── docs/                    # Documentación
├── tests/                   # Tests (Playwright)
└── performance/             # Reportes Lighthouse
```

## 🎨 Design System

### Tokens Principales

| Categoría | Archivo | Descripción |
|-----------|---------|-------------|
| **Colores** | `tokens.scss` | Paleta neutral dark-first adaptable |
| **Tipografía** | `tokens.scss` | Syne (display) + DM Sans (body) |
| **Espaciado** | `tokens.scss` | Sistema de 8px |
| **Branding** | `branding/tokens.json` | Tokens de marca exportables |

### Colores Principales

- **Primary**: `#FF5A1F` (Vivid Orange)
- **Background**: `#0A0A0A` (Deep Black)
- **Text**: `#FFFFFF` / `#8A8A8A` (muted)

## 🧩 Capas del Sistema

1. **Core Engineering** - Estructura técnica base
2. **Conversion & Copy** - Mensajes con intención CRO
3. **Cinematic Scroll & WebGL** - Narrativa visual
4. **External Component Intelligence** - Extracción y adaptación
5. **Branding** - Identidad visual automática
6. **SEO Technical** - Optimización técnica

## 📜 Scripts Disponibles

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Build de producción
npm run preview    # Preview del build
npm run test       # Tests Playwright
npm run lighthouse # Auditoría de performance
```

## 🤖 Agentes del Sistema

El sistema utiliza múltiples agentes especializados:

- **DesignSystemAgent** - Tokens y componentes base
- **MotionArchitectureAgent** - Arquitectura de animaciones
- **ScrollOrchestrationAgent** - Orquestación de scroll
- **ComponentDiscoveryAgent** - Búsqueda de componentes externos
- **SEOTechnicalAgent** - SEO técnico y datos estructurados
- **CROOptimizationAgent** - Optimización de conversión

Ver `docs/decisions.md` para el historial de decisiones.

---

**Antigravity System v1.0.0** | Creado: 2024-12-14
