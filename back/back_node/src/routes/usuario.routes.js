import { Router } from 'express'
import { getUsuario, getUsuarioId, createUsuario, updateUser } from '../controllers/usuario.controllers'
import { createUsuarioSchema, updateUsuarioSchema } from '../schemas/user.schema'
import { validatorHandler } from '../middlewares/validatorUser'
import { verifyToken } from '../middlewares/auth'

const router = Router()

router.get('/user', verifyToken, getUsuario)
router.get('/user/:id', verifyToken, getUsuarioId)
router.post('/user', validatorHandler(createUsuarioSchema, 'body'), createUsuario)
router.put('/user/:id', verifyToken, validatorHandler(updateUsuarioSchema, 'body'), updateUser)
export default router
