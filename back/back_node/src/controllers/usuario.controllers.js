import { querySql } from '../lib/mySql'
import bcrypt from 'bcryptjs'
import boom from '@hapi/boom'

export const getUsuario = async (req, res) => {
  try {
    const sqlAll = `SELECT ac.id,au.username,au.first_name,au.last_name,dni,telefono,email,imagen 
                    FROM api_cliente as ac JOIN auth_user as au on ac.usuario_id = au.id
                    WHERE is_superuser != 1`
    const result = await querySql(sqlAll)
    res.status(200).json({
      status: true,
      content: result
    })
  } catch (error) {
    res.status(444).json({
      status: true,
      message: 'demora de respueta en la base de datos',
      content: error
    }).end()
  }
}

export const getUsuarioId = async (req, res, next) => {
  const { id } = req.params
  try {
    const sqlUsuarioId = `SELECT ac.id,au.username,au.first_name,au.last_name,dni,telefono,email,imagen 
                          FROM api_cliente as ac JOIN auth_user as au on ac.usuario_id = au.id
                          WHERE is_superuser != 1 AND ac.id = ${id}`
    const result = await querySql(sqlUsuarioId)
    result.length > 0
      ? res.status(200).json({
        status: true,
        content: result
      })
      : res.json(boom.notFound('no hay registros'))
  } catch (error) {
    next(error)
  }
}
export const createUsuario = async (req, res) => {
  const { username, nombre, apellido, password, dni, telefono, email } = req.body
  try {
    const passwordEncrypted = await bcrypt.hash(password, 10)
    const date = new Date()
    const dateConvert = date.toISOString().slice(0, 19).replace('T', ' ')

    const sqlInsertUser = `insert into auth_user(password,is_superuser,username,first_name,last_name,email,is_staff,is_active,date_joined)
                       values('${passwordEncrypted}',0,'${username}','${nombre}','${apellido}','${email}',0,1,'${dateConvert}')`

    const data = await querySql(sqlInsertUser)
    const idUserinsert = data.insertId

    const imageDefult = ''

    const sqlInsertClient = `INSERT INTO api_cliente (dni,telefono,imagen,usuario_id)
                             VALUES('${dni}','${telefono}','${imageDefult}',${idUserinsert})`

    await querySql(sqlInsertClient)

    const sqlAll = `SELECT ac.id,au.username,au.first_name,au.last_name,dni,telefono,email,imagen 
                    FROM api_cliente as ac JOIN auth_user as au on ac.usuario_id = au.id
                    order by ac.id desc limit 1`

    const result = await querySql(sqlAll)
    res.status(200).json({
      status: true,
      message: 'usuario creado',
      content: result
    })
  } catch (error) {
    res.status(500).json({
      status: true,
      message: 'hubo un error y no se pudo crear el usuario',
      content: error.sqlMessage
    }).end()
  }
}
export const updateUser = async (req, res) => {
  const { id } = req.params
  const { username, nombre, apellido, dni, telefono, email, imagen } = req.body

  try {
    const sqlUpdate = `UPDATE auth_user au
                        JOIN api_cliente ac on au.id = ac.usuario_id
                        SET username = '${username}',
                        first_name = '${nombre}',
                        last_name = '${apellido}',
                        email = '${email}',
                        ac.dni = '${dni}',
                        ac.telefono = '${telefono}',
                        ac.imagen = '${imagen}'
                        where ac.id = ${id}`
    const result = await querySql(sqlUpdate)
    console.log(result)

    res.status(200).json({
      status: true,
      content: 'usuario actualizado'
    })
  } catch (error) {
    res.json({
      status: true,
      content: boom.notFound('no hay registro '),
      Error: error
    })
  }
}
export const validateUser = async ({ user }) => {
  // console.log(user)
  const { username, password } = user
  try {
    const sqlVerifyUsername = `SELECT ac.id,username,last_name,password FROM auth_user au
                               JOIN api_cliente ac on au.id = ac.usuario_id where username = '${username}'`

    const resultUsername = await querySql(sqlVerifyUsername)
    console.log(resultUsername)
    if (await bcrypt.compare(password, resultUsername[0].password)) {
      const userFound = {
        id: resultUsername[0].id,
        username: resultUsername[0].username,
        lastname: resultUsername[0].last_name
      }
      return userFound
    }

    const userNotFound = {
      id: 0,
      username: 'usuario no valido',
      lastname: 'usuario no valido'
    }
    return userNotFound
  } catch (error) {
    const userError = {
      id: 0,
      Error: error
    }
    return userError
  }
}
