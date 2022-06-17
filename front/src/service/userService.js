import axios from 'axios'

const URL = 'http://localhost:5000'

export const createUserAxios = async(user) => {
  // console.log(user)
  const response = await axios.post(`${URL}/user`,user)
  return response.data
}

export const loginUserAxios = async(user) => {
  // console.log(user)
  const response = await axios.post(`${URL}/auth`,user)
  return response.data
}