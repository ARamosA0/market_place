import { Router } from 'express'
import jwt from 'jsonwebtoken'
import { validateUser } from '../controllers/usuario.controllers'

const router = Router()

router.post('/auth', async (req, res) => {
  const { body: user } = req
  const dataValidate = await validateUser({ user })

  if (dataValidate.id > 0) {
    const token = jwt.sign(
      dataValidate,
      'codigo2022',
      {
        expiresIn: '2h'
      }
    )
    res.status(200).json({
      status: true,
      Token: token
    })
  } else {
    res.status(401).json({
      status: false,
      content: 'usuario o clave invalidos'
    })
  }
})

export default router
