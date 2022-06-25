import { Router } from 'express'
import { postPago } from '../controllers/pago.controllers'

const router = Router()

router.get('/pago', postPago)
router.post('/pago', postPago)

export default router
