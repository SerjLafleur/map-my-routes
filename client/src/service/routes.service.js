import axios from 'axios'

export default class RoutesService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:4000/api/routes',
            withCredentials: true
        })
    }

    getAllRoutes = () => this.api.get('/')
    getOneRoutes = id => this.api.get(`/${id}`)
}

// const RoutesService = () => {

//     const api = axios.create({
//         baseURL: 'http://localhost:4000/api/routes',
//         withCredentials: true
//     })

//     const getAllRoutes = () => api.get('/')
//     const getOneRoutes = id => api.get(`/${id}`)

// }

// export default RoutesService
