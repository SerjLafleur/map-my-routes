# Map my routes

El propósito de map-my-routes es poder buscar rutas que previamente se ha implementado en la base de datos. Con ella podemos buscar rutas por meses o años y tener una lista con todas las rutas. Así como también podemos mirar cada detalle de la ruta. Tendremos un mapa para ver la ruta para seguir el recorrido.

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
