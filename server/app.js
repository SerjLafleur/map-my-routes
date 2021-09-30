const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const App = express()

connectDB()

App.use(cors())
App.use(express.json())
App.use(express.urlencoded({ extended: false }))

App.use('/api/routes', require('./routes/routes'))

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
        date: '2021-10-11',
        desde: {
            lat: 37.3753501,
            lng: -6.0250983
        },
        hasta: {
            lat: 36.5164196,
            lng: -6.2999767
        }
    },
    {
        id: '5',
        start: 'El Rubio',
        end: 'Puente Genil',
        date: '2021-10-13',
        desde: {
            lat: 37.3544716,
            lng: -4.9942236
        },
        hasta: {
            lat: 37.3891277,
            lng: -4.7808754
        }
    },
    {
        id: '6',
        start: 'Peñiscola',
        end: 'Lucena',
        date: '2021-10-20',
        desde: {
            lat: 40.3494119,
            lng: 0.2865269
        },
        hasta: {
            lat: 37.4148533,
            lng: -4.5140462
        }
    },
    {
        id: '2',
        start: 'Zuheros',
        end: 'Málaga',
        date: '2021-11-09',
        desde: {
            lat: 37.5434333,
            lng: -4.3166595
        },
        hasta: {
            lat: 36.765025,
            lng: -4.5642724
        }
    },
    {
        id: '3',
        start: 'Cabra',
        end: 'Córdoba',
        date: '2021-12-16', desde: {
            lat: 37.4718,
            lng: -4.4470926
        },
        hasta: {
            lat: 37.8916069,
            lng: -4.8195047
        }
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


const PORT = process.env.PORT || 4000
App.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

