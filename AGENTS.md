# PAVAMA - Landing Page de Equipo de Desarrollo

## 📁 Estructura del Proyecto

```
PAVAMA/
├── index.html              # Landing page principal
├── proyectos.html          # Página de proyectos (detalle)
├── css/
│   ├── variables.css       # Tokens de diseño (colores, fuentes, spacing)
│   ├── base.css           # Reset y tipografía base
│   ├── components.css     # Componentes reutilizables (navbar, buttons, cards, modals)
│   ├── sections.css       # Estilos de secciones (hero, team, technologies, projects, testimonials, contact, footer)
│   └── animations.css      # Keyframes y animaciones scroll
├── js/
│   └── main.js            # Lógica interactivity (navbar, modals, form, smooth scroll)
└── assets/                # Imágenes y recursos (por crear)
```

## 🎨 Sistema de Diseño

### Colores (variables.css)
- **Primario**: `#0a0a0f` (bg dark)
- **Secundario**: `#12121a` (bg secondary)
- **Acento**: `#8b5cf6` (violeta), `#06b6d4` (cyan), `#3b82f6` (azul)
- **Texto**: `#f8fafc` (primary), `#94a3b8` (secondary), `#64748b` (muted)

### Tipografía
- **Display**: Sora (headings)
- **Body**: DM Sans (textos)

### Componentes
- Cards con hover effects y border glow
- Modales para detalles de equipo
- Navbar sticky con glassmorphism
- Botones con gradiente y glow effect

## 🔧 Convenciones

### CSS
- Usar variables CSS para todo (`var(--color-*)`, `var(--spacing-*)`)
- Mobile-first con `@media (max-width: 768px)`
- Clases BEMlite para componentes
- Animaciones vía Intersection Observer en JS

### JavaScript
- Funciones modulares en `main.js`
- Inicialización en `DOMContentLoaded`
- No usar librerías externas (Vanilla JS)

### HTML
- Semantic tags (`section`, `nav`, `footer`)
- IDs para navegación smooth scroll
- Clases `animate-on-scroll` para animaciones

## 📋 Secciones del Site

1. **Navbar** - Logo, links, CTA button
2. **Hero** - Título, subtítulo, stats, imagen
3. **Equipo** - 3 cards clickeables (abren modal)
4. **Tecnologías** - Grid de 10 techs con logos SVG
5. **Proyectos** - Grid de cards (link a proyectos.html)
6. **Reseñas** - Grid de testimonials
7. **Sobre Nosotros** - Texto + features
8. **Contacto** - Formulario
9. **Footer** - Links, social, copyright

## 🚀 Deployment

```bash
# Vercel (recomendado)
vercel

# O simplemente subir carpeta a Vercel Dashboard
```

## 🔄 Agregar Nuevo Contenido

### Nuevo miembro al equipo
1. Agregar datos en `initTeamModals()` en `js/main.js`
2. Agregar card en `#equipo` section de `index.html`

### Nueva tecnología
1. Agregar card en `#tecnologias` section de `index.html`
2. Usar icono de Iconify: `<span class="iconify" data-icon="devicon:php"></span>`

### Nuevo proyecto
1. Agregar card en `#proyectos` section de `index.html`
2. Crear entrada detallada en `proyectos.html`

### Nueva reseña
1. Agregar card en `#resenas` section de `index.html`