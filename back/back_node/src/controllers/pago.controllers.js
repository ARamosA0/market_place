import { querySql } from '../lib/mysql.js'
import config from '../config/index.js'
import Stripe from 'stripe'

const stripe = new Stripe(config.stripe_Secretkey)

export const postPago = async (req, res) => {
  const { id, amout, cliente, pedidoId } = req.body
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amout,
      currency: 'USD',
      description: `Pago de pedido del cliente con id ${cliente}`,
      payment_method: id,
      confirm: true
    })
    console.log(payment)
    try {
      const sqlUpdate = `UPDATE api_pedido SET status = '1' where id = ${pedidoId}`
      await querySql(sqlUpdate)
      res.send({
        messageSucess: 'sucess payment'
      })
    } catch (error) {
      res.json({
        messageError: error.raw.message
      })
    }
  } catch (error) {
    console.log(error)
    res.json({
      messageError: error.raw.message
    })
  }
}
