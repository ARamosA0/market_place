import express from 'express'
import config from './src/config'

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

export default app
