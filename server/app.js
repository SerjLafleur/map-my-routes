const express = require('express')
const App = express()


let routes = [
    {
        id: '1',
        start: 'Lucena',
        end: 'Llanos de San Juan',
        date: '2021-09-10',
        desde: {
            lat: 37.4148533,
            lng: -4.5140462
        },
        hasta: {
            lat: 37.4067561,
            lng: -4.4199274
        }
    },
    {
        id: '4',
        start: 'Sevilla',
        end: 'Cádiz',
        date: '2021-10-11'
    },
    {
        id: '5',
        start: 'El Rubio',
        end: 'Puente Genil',
        date: '2021-10-13'
    },
    {
        id: '6',
        start: 'Peñiscola',
        end: 'Lucena',
        date: '2021-10-20'
    },
    {
        id: '2',
        start: 'Zuheros',
        end: 'Málaga',
        date: '2021-11-09'
    },
    {
        id: '3',
        start: 'Cabra',
        end: 'Córdoba',
        date: '2021-12-16'
    }
]

App.get('/', (request, response) => {
    response.send('<h1>Hello Word</h1>')
})

App.get('/api/routes', (request, response) => {
    response.json(routes)
})

App.get('/api/routes/:id', (request, response) => {
    const id = request.params.id
    const routeId = routes.find(route => route.id === id)

    if (routeId) {
        response.send(routeId)
    } else {
        response.status(404).end()
    }

})

App.use(express.json())
App.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 4000
App.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

