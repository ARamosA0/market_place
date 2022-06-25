import axios from 'axios'
import URLS from "./URLS";

const { URL_NODE } = URLS;

export const pagoService = async(pedido) =>{
    const response = await axios.post(`${URL_NODE}/pago`,pedido)
    return response.data 
}