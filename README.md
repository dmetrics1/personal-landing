# Landing Page Personal — Daniel Molina

> **Transformo datos en soluciones, productos y decisiones.**

Landing page personal y portafolio de **Daniel Molina Barrios** — Economista & Data Scientist.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Vanilla](https://img.shields.io/badge/Stack-Vanilla-success?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_First-blue?style=flat-square)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

---

## 🎯 Contexto

Este sitio es la pieza central de la **Fase 1 — Presencia** del Plan Maestro de Marca Personal: una landing de una sola página, sin dependencias de framework, optimizada para conversión y SEO, diseñada para presentar servicios empaquetados a clientes LATAM.

Está construida en **HTML, CSS y JavaScript planos (vanilla)** por tres motivos:

1. **Carga instantánea** — sin bundlers, sin runtime de framework, sin tiempos de hidratación.
2. **Despliegue trivial** — sirve en GitHub Pages, Vercel o Netlify sin configuración.
3. **Cero deuda técnica** — no hay dependencias que mantener ni vulnerabilidades en `node_modules`.

---

## 🌐 Demo en vivo

🔧 **TODO:** Publicar y reemplazar con la URL real (ej. `https://danielmolina.dev`).

---

## 🛠️ Stack

| Categoría | Tecnologías |
| :--- | :--- |
| **Estructura** | HTML5 semántico, ARIA para accesibilidad |
| **Estilos** | CSS3 (custom properties, grid, flexbox, glassmorphism) |
| **Interactividad** | JavaScript ES6+ vanilla (sin frameworks) |
| **Animaciones** | `IntersectionObserver` API (rendimiento nativo) |
| **Tipografía** | Inter (Google Fonts) |
| **Iconografía** | SVG inline (Feather Icons style) |
| **Analytics** | Plausible / GA4 (placeholder en `<head>`) |

---

## 📂 Estructura del repositorio

```
personal-landing/
├── index.html              # Estructura HTML5 semántica + meta SEO
├── style.css               # Sistema de diseño + variables + responsive
├── script.js               # Interacciones (menú, scroll, animaciones, form)
├── README.md               # Este archivo
├── LICENSE                 # Licencia MIT
├── .gitignore              # Exclusiones de versionado
├── colores_paleta.md       # Documentación de la paleta de marca
└── assets/
    ├── logo-principal.svg      # Monograma degradado
    ├── logo-blanco.svg         # Logotipo blanco (footer)
    ├── logo-negativo.svg       # Variante negativa
    ├── og-image-1200x630-oscuro.png  # Preview para LinkedIn/WhatsApp
    ├── favicon.ico             # Favicon multi-formato
    ├── favicon-32x32.png
    ├── favicon-16x16.png
    ├── apple-touch-icon.png
    └── fotos_perfil.png        # Retrato profesional
```

---

## 🧩 Secciones de la landing

| # | Sección | ID | Propósito |
| :- | :--- | :--- | :--- |
| 1 | Navegación | `navbar` | Sticky con dropdowns y menú móvil colapsable |
| 2 | Hero | `#hero` | Foto + tagline de marca + CTAs principales |
| 3 | Sobre Mí | `#sobre-mi` | Identidad profesional + diferencial + filosofía |
| 4 | Mi Método | `#metodo` | 3 pasos (Diagnóstico → Desarrollo → Transferencia) |
| 5 | Servicios | `#servicios` | 4 servicios: Dashboards, Automatización, ETL, Landings |
| 6 | Datos Clave | — | Contadores animados con métricas verificables |
| 7 | Planes y Precios | `#pricing` | 3 servicios A/B/C con rangos "Desde X USD" |
| 8 | Portafolio | `#portafolio` | 3 proyectos públicos reales en GitHub |
| 9 | CTA Diagnóstico | — | Banner para agendar diagnóstico gratuito 15 min |
| 10 | Contacto | `#contacto` | Info + formulario con honeypot anti-spam |
| 11 | Footer | — | Logo + copyright + redes sociales |

---

## 🎨 Sistema de diseño

Diseño **Premium Dark Fintech**: paleta azul-cian sobre fondo noche profundo, glassmorphism en tarjetas, degradados de marca en CTAs y bordes destacados.

📄 **Detalle completo:** [`colores_paleta.md`](./colores_paleta.md) — variables CSS, escala de superficies, hex codes y guía para replicar la estética en Power BI / Streamlit / PDFs.

**Resumen rápido:**

- **Degradado de marca:** `#1E40AF → #2563EB → #06B6D4`
- **Fondo base:** `#0A0E1A`
- **Escala de superficies:** 5 capas de azul noche (`#0F1729` → `#202D4E`)
- **Acento de éxito:** `#10B981` (verde esmeralda)
- **Tipografía:** Inter (pesos 400 / 500 / 800)

---

## 🚀 Cómo ejecutar localmente

No requiere build ni dependencias. Cualquiera de estas opciones funciona:

**Opción A — Abrir directamente:**
```bash
# Doble click sobre index.html en el explorador
```

**Opción B — Servidor local (recomendado para probar formulario y rutas absolutas):**
```bash
# Python 3
python -m http.server 8000

# Node.js (con npx)
npx serve .

# VSCode
# Instalar extensión "Live Server" → click derecho sobre index.html → "Open with Live Server"
```

Luego abrir <http://localhost:8000>.

---

## ⚙️ Configuración antes de desplegar

Antes de publicar, revisar los bloques marcados con `🔧 TODO` en el código:

### 1. Correo de contacto
En [`index.html`](./index.html) (línea 481), el formulario usa `mailto:` para abrir el cliente de correo del visitante. Para cambiar la dirección:
```html
<form action="mailto:tu-correo@dominio.com" data-contact-email="tu-correo@dominio.com" ...>
```

### 2. CV en PDF
En [`index.html`](./index.html), el botón "Ver Perfil GitHub" del hero está marcado con un TODO. Cuando tengas el CV en PDF:
1. Subir el archivo a `assets/Daniel_Molina_CV.pdf`.
2. Cambiar `href` por `./assets/Daniel_Molina_CV.pdf`.
3. Cambiar el texto del botón a "Descargar CV".

### 3. Analytics (Plausible o GA4)
En [`index.html`](./index.html), dentro del `<head>` hay un bloque comentado con instrucciones:
- **Recomendado:** Plausible (privacy-friendly, sin cookies, ~1KB).
- **Alternativa:** Google Analytics 4 (gratuito, requiere banner de cookies).

Descomentar la línea correspondiente y reemplazar el dominio / Measurement ID.

### 4. Redes sociales
LinkedIn, GitHub y correo ya están configurados en el footer y sección de contacto.

---

## 🌍 Despliegue

Al ser un proyecto estático, se despliega en segundos sin configuración:

### GitHub Pages
1. Crear repositorio en GitHub (sugerido: nombre en kebab-case → `personal-landing`).
2. `git init`, `git add .`, `git commit`, `git push`.
3. **Settings → Pages → Source: `main` branch → `/ (root)`.**
4. La URL será `https://<usuario>.github.io/personal-landing/`.

### Vercel
1. Conectar el repositorio en [vercel.com](https://vercel.com).
2. Sin configuración: detecta sitio estático automáticamente.
3. URL `*.vercel.app` instantánea + opción de dominio personalizado.

### Netlify
1. Drag & drop de la carpeta en [app.netlify.com](https://app.netlify.com).
2. URL `*.netlify.app` instantánea.

### Dominio personalizado
Cualquiera de los tres permite conectar un dominio propio (`danielmolina.co`, `.dev`, etc.) en pocos pasos desde su panel.

---

## ✅ Checklist pre-despliegue

- [ ] Reemplazar el botón "Ver Perfil GitHub" cuando exista el CV en PDF.
- [ ] Activar analytics (Plausible o GA4) descomentando el snippet del `<head>`.
- [ ] Actualizar `og:url` con el dominio real de producción.
- [ ] Probar la landing en móvil (Chrome DevTools → Toggle device toolbar).
- [ ] Verificar links del portafolio a GitHub.
- [ ] Comprobar que el formulario de contacto abre el cliente de correo.
- [ ] Pasar la página por [PageSpeed Insights](https://pagespeed.web.dev/) (objetivo ≥ 95).
- [ ] Validar accesibilidad con [WAVE](https://wave.webaim.org/) o axe DevTools.

---

## 📊 Proyectos del portafolio

Los 3 proyectos públicos referenciados en la sección de portafolio:

1. **[colombia-multidimensional-poverty-pca](https://github.com/dmetrics1/colombia-multidimensional-poverty-pca)**
   *Python / scikit-learn.* PCA sobre el Índice de Pobreza Multidimensional departamental colombiano.

2. **[dashboard_mercado_laboral_colombiano](https://github.com/dmetrics1/dashboard_mercado_laboral_colombiano)**
   *Python / Polars / Streamlit.* Dashboard interactivo de microdatos GEIH del DANE con pruebas automatizadas en pytest.

3. **[micronegocios-colombia-2024](https://github.com/dmetrics1/micronegocios-colombia-2024)**
   *R / Quarto / Apriori.* Minería de reglas de asociación sobre 5.3M micronegocios (EMICRON) con reporte interactivo en Quarto.

---

## 📜 Licencia

Distribuido bajo licencia **MIT**. Ver [`LICENSE`](./LICENSE) para más detalles.

Puedes usar este código como referencia para tu propio portafolio personal — solo mantén la atribución y no copies textos de marca/branding directamente.

---

## 👤 Autor

**Daniel Molina Barrios** — Economista & Data Scientist

- 🌐 GitHub: [@dmetrics1](https://github.com/dmetrics1)
- 💼 LinkedIn: [daniel-molina-b76a4323b](https://www.linkedin.com/in/daniel-molina-b76a4323b)
- 📧 Correo: dm0025900@gmail.com
- 📍 Santa Marta, Colombia · LATAM remoto

---

*Los datos no son el objetivo, son el medio. El valor está en las soluciones.*
