import express from 'express'
import config from './src/config'
import cocheraRoutes from './src/routes/prueba.routes'

const app = express()

// ?settings
app.set('port', config.port)

// ?principal
app.get('/', (req, res) => {
  res.json({
    status: true,
    content: 'servidor activo'
  })
})

// ? routes
app.use(cocheraRoutes)

export default app
