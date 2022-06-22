import axios from "axios";
import URLS from "./URLS";

const { URL_DJANGO } = URLS;

export const cocheraServices = async() => {
    const response = await axios.get(`${URL_DJANGO}/cochera`);
    return response.data;
};

export const getUserCocheras = async(id) => {
    try {
        const response = await axios.get(`${URL_DJANGO}/client/${id}/cochera`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const cocheraFilterServices = async() => {
    const response = await axios.get(`${URL_DJANGO}/cochera`);
    console.log(response);
};

export const createUserCocheras = async(cochera) => {
    console.log(cochera)
    try {
        const response = await axios.post(`${URL_DJANGO}/cochera`, cochera);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

export const deleteUserCocheras = async(id) => {
    try {
        const response = await axios.delete(`${URL_DJANGO}/cochera/id/${id}/`);
        return response.data
    } catch (error) {
        console.log(error)
    }

}