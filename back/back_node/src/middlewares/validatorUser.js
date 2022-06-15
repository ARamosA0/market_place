import boom from '@hapi/boom'

export const validatorHandler = (scheme, property) => {
  return (req, res, next) => {
    const data = req[property]
    const { error } = scheme.validate(data, { abortEarly: false })
    if (error) {
      next(boom.badRequest(error))
    }
    next()
  }
}
