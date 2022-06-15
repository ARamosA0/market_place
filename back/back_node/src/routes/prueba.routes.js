import { Router } from 'express'
import { getCochera } from '../controllers/prueba.conexion'

const router = Router()

router.get('/cochera', getCochera)

export default router
