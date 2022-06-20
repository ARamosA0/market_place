import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  const bearerToken = req.headers.authorization
  // console.log('bearer Token = ', bearerToken)
  if (typeof bearerToken !== 'undefined') {
    // ?obtenemos el token enviado
    const bearer = bearerToken.split(' ')
    const token = bearer[1]
    try {
      const decoded = jwt.verify(token, 'codigo2022')
      console.log(decoded)
    } catch (error) {
      return res.status(401).json({
        status: false,
        content: 'token invalido'
      })
    }
    return next()
  } else {
    res.status(403).json({
      status: false,
      message: 'no se encontro el token'
    })
  }
}
