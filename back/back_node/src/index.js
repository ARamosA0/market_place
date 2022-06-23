import app from './app'

const main = () => {
  app.listen(app.get('port'))
  console.log(`server on port http:localhost:${app.get('port')}`)
}
main()
