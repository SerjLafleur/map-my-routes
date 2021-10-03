# Map my routes

El propósito de map-my-routes es poder buscar rutas que previamente se ha implementado en la base de datos. Con ella podemos buscar rutas por meses o años y tener una lista con todas las rutas. Así como también podemos mirar cada detalle de la ruta. Tendremos un mapa para ver la ruta para seguir el recorrido.

Una captura de lo que verás: https://map-my-routes.herokuapp.com/
La Url de la base de datos: https://map-my-routes-api.herokuapp.com/api/routes

Si quieres clonar el repo, deberás tener instalado node.js Luego en tu terminal ejecuta: git clone
https://github.com/SerjLafleur/map-my-routes.git

## Instalación 🔧
Ahora solo tendrás que ejecutar npm install o yarn install desde tu terminal para istalar las dependencias.

## Construido con 🛠️

* React
* React-router
* Material-ui
* Styled-component
* Axios
* Node.js
* Express.js
* Mongoose
* MongoDB



## Estructura del proyecto front React

```
  ├── public
  │   └── routes.png 
  ├── src
     │ ├── componentes 
         │ ├── DetailsRoute 
         │ ├── ListRoutes
         │ ├── Map 
         │ ├── SelectRoutes 
     │ ├── service  
         │ ├── routes.service 
     │ ├── services 
     │ ├── App.js 
     │ ├── App.css 
     │ ├── index.js 
     │ ├── index.css 
  ├── README.md
  └── package.json
```
## Estructura del proyecto Backend

```
├── congig
  │   └── db.js 
├── controllers
     │ └── routerControllers
│ ├── models
     │ └── routes.models
│ ├── routes
     │ └── rroutes.js
│ ├── .env
│ ├── .eslintrc.js
│ ├── gitignore
│ ├── app.js 
│ ├── package-lock.json
└── package.json
```

## Diseño conceptual del modelo e datos

El diseño elegido fue el formato Json y con la siguiente diseño. Ej:

```
{
 "id": Number,
 "start": String,
 "end": String,
 "date": Number,
 "Desde": {lat: Number, lng: Number},
 "Hasta": {lat: Number, lng: Number}
}
```


## Autores ✒️

* **Sergio Baltanás* - [SerjLaFleur](https://github.com/SerjLaFleur)
