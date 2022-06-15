import { querySql } from '../lib/mysql'
import bcrypt from 'bcryptjs'

export const getUsuario = async (req, res) => {
  const sqlAll = `SELECT ac.id,au.username,au.first_name,au.last_name,dni,telefono,email,imagen 
                  FROM api_cliente as ac JOIN auth_user as au on ac.usuario_id = au.id
                  WHERE is_superuser != 1`
  const result = await querySql(sqlAll)
  res.status(200).json({
    status: true,
    content: result
  })
}

export const createUsuario = async (req, res) => {
  const { username, nombre, apellido, password, dni, telefono, email } = req.body
  const passwordEncrypted = await bcrypt.hash(password, 10)
  const date = new Date()
  const dateConvert = date.toISOString().slice(0, 19).replace('T', ' ')
  console.log(dateConvert)

  const sqlInsertUser = `insert into auth_user(password,is_superuser,username,first_name,last_name,email,is_staff,is_active,date_joined)
                     values('${passwordEncrypted}',0,'${username}','${nombre}','${apellido}','${email}',0,1,'${dateConvert}')`

  const data = await querySql(sqlInsertUser)
  const idUserinsert = data.insertId

  const image = 'https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/WCB4TXLTWBHWHCCYFEH2RNWWQI.jpg'

  const sqlInsertClient = `INSERT INTO api_cliente (dni,telefono,imagen,usuario_id)
                           VALUES('${dni}','${telefono}','${image}',${idUserinsert})`

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
}

export const validateUser = async ({ user }) => {
  console.log(user)
  const { username, password } = user
  try {
    const sqlVerifyUsername = `SELECT id,username,password FROM auth_user where username = '${username}'`

    const resultUsername = await querySql(sqlVerifyUsername)

    if (await bcrypt.compare(password, resultUsername[0].password)) {
      const userFound = {
        id: resultUsername[0].id,
        username: resultUsername[0].username
      }
      return userFound
    }

    const userNotFound = {
      id: 0,
      username: 'usuario no valido'
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
