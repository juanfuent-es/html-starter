# HTML Starter

Template base para generar páginas HTML a partir de una especificación de layout.

## Estructura

- `README.md` · documentación y manual de uso.
- `LAYOUT.md` · reglas estructurales compartidas.
- `index.html` · página inicial.
- `img/` · imágenes y recursos.
- `docs/` · documentación adicional.

## Cómo funciona

`LAYOUT.md` define las reglas persistentes del sitio:

- estructura del documento;
- metadata;
- header;
- navegación;
- main;
- footer;
- enlaces;
- imágenes;
- nomenclatura de archivos.

Cuando se crea una nueva página, la instrucción debe utilizar `LAYOUT.md` como especificación.

## Generar una nueva página

Ejemplo:

> Crea `acerca-de.html` a partir de `LAYOUT.md`.
>
> Título: Acerca de  
> Descripción: Información general sobre el proyecto.

## Agregar una página a la navegación

Ejemplo:

> Crea `contacto.html` a partir de `LAYOUT.md`.
>
> Título: Contacto  
> Descripción: Información de contacto.

La nueva página debe añadirse automáticamente a la navegación según las reglas definidas en `LAYOUT.md`.

## Modificar una página existente

Ejemplo:

> Actualiza `acerca-de.html` usando `LAYOUT.md`.
>
> Cambia el título a: Sobre el proyecto.

## Regla principal

No repetir en cada prompt las reglas ya definidas en `LAYOUT.md`.

El prompt debe describir únicamente la tarea y el contenido variable.