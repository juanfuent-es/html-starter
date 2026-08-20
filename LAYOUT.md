# Layout

## Propósito

Este archivo define la estructura base y las reglas compartidas para generar páginas HTML del sitio.

Todas las páginas nuevas deben utilizar este documento como especificación estructural.

No inventar contenido que no haya sido proporcionado.

---

## Documento

Todas las páginas deben utilizar HTML5.

### Idioma

`es`

### Título

Formato:

`[Título de página] | CENTRO`

Si no se proporciona un título, utilizar:

`Título Principal | CENTRO`

### Descripción

Cada página debe incluir una descripción mediante:

`<meta name="description">`

Si no se proporciona una descripción, utilizar:

`Descripción`

### Favicon

Usar:

`./img/favicon.svg`

### Open Graph

Cada página debe incluir:

- `og:type`
- `og:title`
- `og:description`

Los valores de título y descripción deben corresponder con los del documento.

---

## Estructura

Todas las páginas deben mantener esta estructura:

- `header`
- `main`
- `footer`

No utilizar `section`, `article` o `aside` salvo que se solicite explícitamente.

---

## Header

El `header` es compartido por todas las páginas.

Debe mantener la misma estructura y contenido.

### CENTRO

Logo:

`./img/centro-logo.svg`

Texto alternativo:

`CENTRO`

Enlace:

`https://centro.edu.mx/`

### GitHub

Enlace:

`https://github.com/juanfuent-es`

### Navegación

La navegación debe incluir únicamente páginas existentes dentro del sitio.

Cuando se cree una nueva página:

- agregarla a la navegación;
- utilizar una ruta relativa;
- actualizar la navegación de las páginas HTML existentes.

No crear enlaces hacia páginas inexistentes.

---

## Main

`main` contiene el contenido particular de cada página.

Cada página nueva debe iniciar con:

- un `h1`;
- una descripción.

### Título

Usar como `h1` el título proporcionado para la página.

Si no existe:

`Título Principal`

### Descripción

Usar la descripción proporcionada.

Si no existe:

`Descripción`

No inventar contenido adicional.

---

## Footer

El `footer` es compartido por todas las páginas.

Debe mantener la misma estructura y contenido.

### CENTRO

Incluir:

- enlace a CENTRO;
- dirección;
- teléfono.

### Redes

Incluir:

- Instagram;
- LinkedIn;
- Facebook;
- TikTok;
- YouTube.

Las redes deben estructurarse como una lista de enlaces.

---

## Enlaces

### Internos

Utilizar rutas relativas.

Ejemplo:

`./acerca-de.html`

### Externos

Utilizar:

`target="_blank"`

`rel="noopener noreferrer"`

### Correo

Utilizar:

`mailto:`

### Teléfono

Utilizar:

`tel:`

---

## Imágenes

Todas las imágenes deben incluir el atributo `alt`.

Los logos que funcionen como navegación deben estar contenidos dentro de un enlace.

Las imágenes informativas deben incluir una descripción equivalente a su función o contenido.

Las imágenes decorativas deben utilizar:

`alt=""`

---

## Archivos

Los archivos HTML deben nombrarse utilizando:

- minúsculas;
- palabras separadas por guiones;
- extensión `.html`.

Ejemplos:

`index.html`

`acerca-de.html`

`contacto.html`

---

## Reglas

- Mantener la misma estructura global en todas las páginas.
- Mantener el mismo `header` y `footer`.
- Mantener actualizada la navegación.
- Utilizar HTML semántico.
- Utilizar listas para colecciones de elementos relacionados.
- Utilizar `div` únicamente cuando sea necesario agrupar contenido sin una función semántica específica.
- No inventar contenido.
- No agregar CSS.
- No agregar JavaScript.
- No agregar elementos, dependencias o funcionalidades que no hayan sido solicitados.