import Joi from 'joi'

const username = Joi.string().alphanum().min(3).max(20)
const nombre = Joi.string().min(3).max(20)
const apellido = Joi.string().min(3).max(20)
const password = Joi.string().pattern(new RegExp())// '^[a-zA-Z0-9]{3,30}$')
const dni = Joi.number().integer().positive().min(10000000).max(99999999)
const telefono = Joi.number().integer().positive().min(100000000).max(999999999)
const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
const imagen = Joi.string()

export const createUsuarioSchema = Joi.object({
  username: username.required(),
  nombre: nombre.required(),
  apellido: apellido.required(),
  password: password.required(),
  dni: dni.required(),
  telefono: telefono.required(),
  email: email.required()
})

export const updateUsuarioSchema = Joi.object({
  username: username.required(),
  nombre: nombre.required(),
  apellido: apellido.required(),
  imagen: imagen.required(),
  dni: dni.required(),
  telefono: telefono.required(),
  email: email.required()
})
