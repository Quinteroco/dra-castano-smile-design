# Dra. Alejandra Castaño — Ortodoncia de Precisión (propuesta v2)

Landing de una sola página, bilingüe (ES/EN), rediseñada para posicionar el consultorio ante
pacientes internacionales (principalmente EE.UU.) alrededor de su ventaja real: tecnología
(3Shape TRIOS 3, VALO X) y un espacio construido para transmitir calma y confianza.

**Demo en vivo:** se publica en GitHub Pages tras el próximo push (o abre `index.html` directamente).

## Qué cambió vs. la versión anterior
- Rediseño completo de paleta y tipografía a partir de fotos reales del consultorio: blanco
  travertino, madera de nogal, bronce cepillado (los mismos tonos del logo y del letrero de pared).
- Nuevo hero con una **carilla dental 3D interactiva** (Three.js, geometría procedural — no requiere
  modelo `.glb` externo). Se puede arrastrar para girar; también gira sola.
- Segunda escena 3D "pinneada" en la sección Tecnología: al hacer scroll, la carilla gira y la cámara
  se acerca mientras aparecen las cifras clave (precisión de escaneo, % de plan digital, tiempo de
  curado), inspirado en el mecanismo de producto de la referencia de motionsites.ai que compartió el cliente.
- Sección "El consultorio" con fotografía real del espacio (antes eran ilustraciones).
- Copy reorientado a **ortodoncia** (antes era diseño de sonrisa/carillas en general) con foco en el
  diferenciador tecnológico.
- `vendor/three.min.js`: Three.js está autoalojado (no depende de un CDN externo) para que el sitio
  cargue igual de rápido y confiable sin importar la red del visitante.

## Pendiente de confirmar con la clienta (para la siguiente iteración)
- Fotos reales de antes/después (hoy el slider es una vista previa ilustrativa).
- Testimonios reales de pacientes (hoy son ejemplos de formato).
- Dirección exacta, horarios de atención y datos de contacto formales.
- Lista definitiva de tratamientos de ortodoncia y precios.
- Confirmar si se mantiene el alcance a una sola sede (Montería) — la versión anterior mencionaba
  Medellín y Maracaibo; se removieron de esta versión por no estar en el brief actual.
- Pasarela de pagos internacionales en USD (Stripe u otra).
- Dominio propio (ej. www.dralejandracastano.com) en lugar del subdominio de GitHub Pages.

## Seguidores de Instagram en vivo (card del hero)
(Sin cambios respecto a la versión anterior — ver `.github/workflows/update-followers.yml` si quieres
activar la actualización automática; requiere que la Dra. Castaño genere un token de Instagram Graph API.)

## Desarrollo local
Abrir `index.html` directamente, o servirlo con cualquier servidor estático, por ejemplo:
```
python3 -m http.server 8080
```
