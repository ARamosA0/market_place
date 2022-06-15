import mysql from 'mysql2'
import config from '../config'

const dbSettings = {
  host: config.mysql_host,
  user: config.mysql_user,
  password: config.mysql_pwd,
  database: config.mysql_db
}

const getConnection = async () => {
  try {
    const pool = await mysql.createConnection(dbSettings)
    return pool
  } catch (error) {
    console.log(error)
  }
}

export const querySql = async (sql) => {
  const pool = await getConnection()
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, result, fields) => {
      if (!err) resolve(JSON.parse(JSON.stringify(result)))
      else reject(err)
    })
  })
}
