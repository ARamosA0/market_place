import { querySql } from '../lib/mysql'

export const getCochera = async (req, res) => {
  const sqlAll = 'select * from api_cochera'
  const result = await querySql(sqlAll)
  res.status(200).json({
    status: true,
    content: result
  })
}
