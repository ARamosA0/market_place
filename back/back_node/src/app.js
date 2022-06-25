import express from 'express'
import config from './config'
import cors from 'cors'

import routeUsuario from './routes/usuario.routes'
import routeAuth from './routes/auth.routes'
import pagoRoute from './routes/pago.routes'

import notFound from './middlewares/notFound'
import handleError from './middlewares/handleError'
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
app.use(pagoRoute)

// ? middlewares
app.use(handleError)
app.use(notFound)
export default app
