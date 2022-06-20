import axios from "axios";
import URLS from "./URLS";

const {URL_NODE } = URLS

export const getUsuarioById = async (id,token) => {
  try {
    const response = await axios.get(`${URL_NODE}/user/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
    return response.data
  } catch (error) {
    console.log(error)
  }
};

export const createUserAxios = async (user) => {
  try {
    const response = await axios.post(`${URL_NODE}/user`, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUserAxios = async (user) => {
  try {
    const response = await axios.post(`${URL_NODE}/auth`, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
