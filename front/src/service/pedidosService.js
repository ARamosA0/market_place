import axios from 'axios'
import URLS from "./URLS";
const { URL_DJANGO } = URLS;


export const Pedido = async(pedido) =>{
    console.log(pedido)
    try {
    const response = await axios.post(`${URL_DJANGO}/pedido`,pedido)
    return response.data        
    } catch (error) {
        console.log(error)
    }
}
