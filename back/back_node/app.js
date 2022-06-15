import express from 'express'
import config from './src/config'
import cors from 'cors'

import routeUsuario from './src/routes/usuario.routes'
import routeAuth from './src/routes/auth.routes'

import { verifyToken } from './src/middlewares/auth'

const app = express()

// ?settings
app.set('port', config.port)

// ? middleware
app.use(express.json())
app.use(cors())

// ?principal
app.get('/', verifyToken, (req, res) => {
  res.json({
    status: true,
    content: 'api User activo'
  })
})

// ? routes
app.use(routeAuth)
app.use(routeUsuario)

export default app
