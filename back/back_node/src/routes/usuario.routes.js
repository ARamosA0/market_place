import { Router } from 'express'
import { getUsuario, createUsuario } from '../controllers/usuario.controllers'
import { createUsuarioSchema } from '../schemas/user.schema'
import { validatorHandler } from '../middlewares/validatorUser'
import { verifyToken } from '../middlewares/auth'

const router = Router()

router.get('/user', verifyToken, getUsuario)
router.post('/user', validatorHandler(createUsuarioSchema, 'body'), createUsuario)
export default router
