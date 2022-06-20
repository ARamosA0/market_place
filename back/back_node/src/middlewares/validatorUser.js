import boom from '@hapi/boom'

export const validatorHandler = (scheme, property) => {
  return (req, res, next) => {
    const data = req[property]
    const { error } = scheme.validate(data, { abortEarly: false })
    if (error) {
      res.status(406).json({
        status: false,
        error: boom.badRequest(error).output
      })
      next(boom.badRequest(error))
    }
    next()
  }
}
