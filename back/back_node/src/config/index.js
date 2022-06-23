import { config } from 'dotenv'
config()

export default {
  port: process.env.PORT || 5000,
  mysql_user: process.env.MYSQL_USER || 'doadmin',
  mysql_pwd: process.env.MYSQL_PWD || 'AVNS_uWixOS35U6otM1OW5D1',
  mysql_host: process.env.MYSQL_HOST || 'db-mysql-nyc3-33252-do-user-11817096-0.b.db.ondigitalocean.com',
  mysql_db: process.env.MYSQL_DB || 'db_cocheras',
  mysql_port: process.env.MYSQL_PORT || 25060
}
