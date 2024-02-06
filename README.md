# Aplicación Web Similar a Wallapop

## Descripción General

Este proyecto es una aplicación web inspirada en Wallapop, diseñada para permitir a los usuarios ver, crear, y gestionar anuncios de compra y venta de productos. Se ha desarrollado sin el uso de librerías o frameworks de JavaScript, aunque se ha permitido el uso de utilidades de CSS externas como Tailwind o Bootstrap para facilitar el diseño y la maquetación.

## Características

La aplicación incluye las siguientes características principales:
- **Listado de Anuncios**: Muestra anuncios con imagen (si está disponible), nombre, descripción, precio, y si el artículo está en venta o compra. 
- **Detalle de Anuncio**: Ofrece una vista detallada de cada anuncio, incluyendo foto, nombre, descripción, y precio.
- **Creación de Anuncio**: Permite a los usuarios logueados crear nuevos anuncios con foto, nombre, descripción, precio, y tipo de transacción (compra/venta).
- **Autenticación de Usuarios**: Incluye páginas de login y registro para autenticar usuarios y gestionar el acceso a ciertas funcionalidades.
- **Gestión de Estados de Interfaz**: La aplicación maneja estados de interfaz para carga, error, vacío, y éxito en diferentes vistas.

## Tecnologías Utilizadas

- HTML5
- CSS3 (con utilidades externas como Tailwind o Bootstrap)
- JavaScript (Vanilla)
- Backend simulado con sparrest.js sobre json-server

## Cómo Iniciar

1. **Configuración del Entorno**: Clonar el repositorio de `sparrest.js` y ejecutar `npm install` para instalar las dependencias necesarias.
2. **Iniciar el Servidor**: Ejecutar `npm start` para arrancar el servidor en `http://127.0.0.1:8000/`.
3. **Uso de la Aplicación**: Acceder a la aplicación a través de un navegador web ingresando a la dirección donde se esté sirviendo (por defecto `http://127.0.0.1:8000/`).

## Estructura del Proyecto

- **/public**: Contiene los archivos estáticos de la aplicación (HTML, CSS, imágenes).
- **/src**: Código fuente JavaScript para la lógica de la aplicación.
- **db.json**: Archivo para el backend con datos de ejemplo.

## API REST Utilizada

La aplicación hace uso de `sparrest.js` para simular un backend real, utilizando los siguientes endpoints principales:
- `/auth/register` y `/auth/login` para el registro y login de usuarios.
- `/upload` para la subida de imágenes.
- `/api/` para el acceso a los anuncios y otras funcionalidades con autenticación mediante token JWT.

## Contribuciones

Si estás interesado en contribuir a este proyecto, por favor envía un pull request o abre un issue para discutir los cambios propuestos.
