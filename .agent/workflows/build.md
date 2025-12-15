---
description: Construir bundle de producción
---

# Workflow: Build de Producción

Pasos para generar el bundle optimizado para producción.

## Pasos

1. Limpiar builds anteriores (opcional)

```bash
rm -rf dist
```

2. Ejecutar build de producción
// turbo

```bash
npm run build
```

3. Previsualizar el build
// turbo

```bash
npm run preview
```

## Output

El build se genera en la carpeta `dist/` con:

- HTML minificado
- CSS optimizado y autoprefijado
- JS con code splitting (vendor, three)
- Assets optimizados con fingerprinting

## Despliegue

El contenido de `dist/` está listo para:

- Vercel
- Netlify
- GitHub Pages
- Cualquier hosting estático
