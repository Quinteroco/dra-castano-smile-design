# Dra. Alejandra Castaño — Propuesta de sitio web (demo)

Sitio de una sola página (landing) para presentar como propuesta inicial. Bilingüe (ES/EN), enfocado en pacientes locales e internacionales (turismo dental desde EE.UU.).

**Demo en vivo:** se publica en GitHub Pages tras el primer push.

## Qué incluye este demo
- Hero, servicios, slider interactivo antes/después, sección de pacientes internacionales, testimonios (de ejemplo), sedes, formulario de contacto (sin backend aún) y botón flotante de WhatsApp (conectado al enlace real de Instagram).
- Selector de idioma ES/EN funcional.
- 100% responsive, sin build step (HTML/CSS/JS puro) para poder iterar rápido.

## Pendiente de confirmar con la clienta (para la siguiente iteración)
- Logo/identidad de marca definitiva (hoy es un logotipo tipográfico provisional).
- Fotos reales de antes/después (hoy son ilustraciones de marcador de posición).
- Testimonios reales de pacientes (hoy son ejemplos de formato).
- Dirección exacta, horarios de atención y datos de contacto formales.
- Lista definitiva de servicios y precios.
- Pasarela de pagos internacionales en USD (Stripe u otra) — requiere cuenta habilitada por la clienta.
- Dominio propio (ej. www.dralejandracastano.com) en lugar del subdominio de GitHub Pages.

## Seguidores de Instagram en vivo (card del hero)
La card de Instagram del hero lee `assets/followers.json`. Hoy ese archivo se actualiza a mano; para que se actualice solo con el número real de seguidores, se necesita que **la Dra. Castaño** (solo ella, como dueña de la cuenta) haga esto una vez:

1. Convertir la cuenta de Instagram a **Cuenta profesional (Business o Creator)** si no lo es ya, y vincularla a una página de Facebook (puede ser una página nueva, no requiere actividad).
2. Crear una app en [developers.facebook.com](https://developers.facebook.com/) y generar un **token de acceso de larga duración** para esa cuenta de Instagram (Instagram Graph API).
3. Pasarme el `IG_USER_ID` y el `IG_ACCESS_TOKEN` (o cargarlos tú misma en **Settings → Secrets and variables → Actions** de este repo).
4. Yo activo el cron en `.github/workflows/update-followers.yml` (ya está listo, solo comentado) para que corra 1 vez al día y sobreescriba `assets/followers.json` con los datos reales — el sitio los recoge automáticamente, sin tocar código.

Mientras tanto, el número mostrado (349 publicaciones · 18.5K seguidores · 374 seguidos) es real pero cargado manualmente — pídeme "actualiza seguidores" cuando cambie y lo actualizo en segundos.

## Desarrollo local
Abrir `index.html` directamente o servirlo con cualquier servidor estático.
