# Map my routes

El propósito de map-my-routes es poder buscar rutas que previamente se ha implementado en la base de datos. Con ella podemos buscar rutas por meses o años y tener una lista con todas las rutas. Así como también podemos mirar cada detalle de la ruta. Tendremos un mapa para ver la ruta para seguir el recorrido.

## Estructura del proyecto front React

```
├── mock # datos simulados locales
  ├── public
  │   └── favicon.ico          # Favicon
  ├── src
     │ ├── activos # Recursos estáticos locales
     │ ├── common # Aplicar configuración común, como información de navegación
     │ ├── enums # enum
     │ ├── componentes # Componentes comunes
     │ ├── widgets # componentes comerciales
     │ ├── e2e # Caso de prueba de integración
     │ ├── diseños # Diseño general
     │ ├── almacena # objetos relacionados con el estado (modelo dva)
  │   ├── models               # domain object
     │ ├── rutas # Entrada de página comercial y plantillas comunes
     │ ├── services # Servicios de interfaz en segundo plano
     │ ├── biblioteca de herramientas utils #
     │ ├── g2.js # Configuración de gráficos visuales
     │ ├── theme.js # Configuración del tema
     │ ├── index.ejs # Plantilla de entrada HTML
     │ ├── index.js # Entrada de aplicación
     │ ├── index.less # estilo global
     │ └── router.js # entrada de enrutamiento
     ├── pruebas # herramientas de prueba
  ├── README.md
  └── package.json

```


