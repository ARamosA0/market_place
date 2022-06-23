import express from 'express'
import config from './src/config/index.js'
import cors from 'cors'

import routeUsuario from './src/routes/usuario.routes'
import routeAuth from './src/routes/auth.routes'

import notFound from './src/middlewares/notFound'
import handleError from './src/middlewares/handleError'
const app = express()

// ?settings
app.set('port', config.port)

// ?middleware
app.use(express.json())
app.use(cors())

// ?principal
app.get('/', (_, res) => {
    res.json({
        status: true,
        message: 'Api de usuarios para cocheras',
        Token: 'se necesita un token para ingresar a los endPoints',
        repository: 'https://github.com/ARamosA0/market_place/tree/main/back/back_node',
        endPointsGet: {
            getUser: '/user',
            getUserId: '/user/:id'
        },
        endPointsPost: {
            info: 'crear usuario y despues verificarse para generar token',
            createtUser: '/user',
            verifyUser: '/auth'
        },
        endPointsPut: {
            UpdateUserId: '/user/:id'
        }
    })
})

// ?routes
app.use(routeAuth)
app.use(routeUsuario)

// ? middlewares
app.use(handleError)
app.use(notFound)
export default app