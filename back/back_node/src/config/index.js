import { config } from 'dotenv'
config()

export default {
  // port: process.env.PORT || 5000,
  // mysql_user: process.env.MYSQL_USER || 'root',
  // mysql_pwd: process.env.MYSQL_PWD || '',
  // mysql_host: process.env.MYSQL_HOST || 'localhost',
  // mysql_db: process.env.MYSQL_DB || 'api'

  // port: process.env.PORT || 5000,
  // mysql_user: process.env.MYSQL_USER || 'ubhorzwcejox3ycd',
  // mysql_pwd: process.env.MYSQL_PWD || 'l72IvbdbY8TdBHZevgsy',
  // mysql_host: process.env.MYSQL_HOST || 'byqrvadx0lu4nsn9njsf-mysql.services.clever-cloud.com',
  // mysql_db: process.env.MYSQL_DB || 'byqrvadx0lu4nsn9njsf'

  port: process.env.PORT || 5000,
  mysql_user: process.env.MYSQL_USER || 'doadmin',
  mysql_pwd: process.env.MYSQL_PWD || 'AVNS_uWixOS35U6otM1OW5D1',
  mysql_host: process.env.MYSQL_HOST || 'db-mysql-nyc3-33252-do-user-11817096-0.b.db.ondigitalocean.com',
  mysql_db: process.env.MYSQL_DB || 'db_cocheras',
  mysql_port: process.env.MYSQL_PORT || 25060
}

