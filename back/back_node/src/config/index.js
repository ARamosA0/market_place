import { config } from 'dotenv'
config()

export default {
  port: process.env.PORT || 5000,
  mysql_user: 'doadmin',
  mysql_pwd: 'AVNS_uWixOS35U6otM1OW5D1',
  mysql_host: 'db-mysql-nyc3-33252-do-user-11817096-0.b.db.ondigitalocean.com',
  mysql_db: 'db_cocheras',
  mysql_port: 25060,
  stripe_Secretkey: 'sk_test_51LEFN3LVZi032wxlQHDoCPQcYe27Rj24pybOYOMzvhhvWNeRyrOMpPoRVMXIrwzUaLSL0Lrq9E8YY3dzgCTUxEIJ00QHrpJJP0'
}
