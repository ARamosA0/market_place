import axios from "axios";
import URLS from "./URLS";

const { URL_DJANGO } = URLS;

export const cocheraServices = async() => {
    try {
        const response = await axios.get(`${URL_DJANGO}/cochera`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserCocheras = async(id) => {
    try {
        const response = await axios.get(`${URL_DJANGO}/client/${id}/cochera`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const getCoheraCliente = async(id) => {
    try {
        const response = await axios.get(`${URL_DJANGO}/cochera/cliente/${+id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const getcocheraDistrict = async(name) => {
    try {
        const response = await axios.get(`${URL_DJANGO}/cochera/distrito/${name}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const getCoheraHome = async() => {
    try {
        const response = await axios.get(`${URL_DJANGO}/cochera/`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const cocheraFilterServices = async(id) => {
    try {
        const response = await axios.get(`${URL_DJANGO}/cochera/id/${id}/`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
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

export const postCocheraImage = async(id, image) => {
    try {
        const response = await axios.post(`${URL_DJANGO}/cochera/imagen/${id}`,image);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const putCocheras = async(id, space) => {
    try {
        const response = await axios.put(`${URL_DJANGO}/cochera/put/${id}/`,space);
        return response.data;
    } catch (error) {
        console.log(error);
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