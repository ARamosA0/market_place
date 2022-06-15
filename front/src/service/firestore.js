import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    setDoc,
    updateDoc,
    deleteDoc,
    arrayUnion,
    firestore
} from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {



    //Roberto Parking
    apiKey: "AIzaSyD36x2aYrNKcPORpayq81KcFDCX7l2h9sE",
    authDomain: "garage-2a267.firebaseapp.com",
    projectId: "garage-2a267",
    storageBucket: "garage-2a267.appspot.com",
    messagingSenderId: "640634564300",
    appId: "1:640634564300:web:22be63f04dddc7d3f5dc69",
    measurementId: "G-T58KYD30N1"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


//eliminar

export const eliminarRegistro = async(id) => {
    await deleteDoc(doc(db, "cochera", id));
}

export const getCocheraData = async(nameDB) => {
    const collectionCocheras = collection(db, nameDB);
    const documentCocheras = await getDocs(collectionCocheras);
    const cocheras = documentCocheras.docs.map(doc => doc.data());
    return cocheras;
}

// Guardar datos
export const storeCochera = async(product, nameBd) => {
    const id = uuidv4().replaceAll("-", "");
    product.id = id;
    await setDoc(doc(db, nameBd, id), product);
};


export const updateCochera = async(product, data, nameBd) => {
    const productRef = doc(db, nameBd, product.id);
    await updateDoc(productRef, data);
};

export const updatePhotoCochera = async(product, data, nameBd) => {
    const productRef = doc(db, nameBd, product.id);
    await updateDoc(productRef, { image: arrayUnion(data) });
};

export const updateReservaCochera = async(product, data, nameBd) => {
    const productRef = doc(db, nameBd, product.id);
    await updateDoc(productRef, { idCocherasReservadas: arrayUnion(data) });
};

export const updateFechaReservaCochera = async(product, data, nameBd) => {
    const productRef = doc(db, nameBd, product.id);
    await updateDoc(productRef, { fechaReservaFin: [data] });
};

export const updateSpaceCochera = async(product, data, nameBd) => {
    const productRef = doc(db, nameBd, product.id);
    await updateDoc(productRef, { space: data });
};

export const updateGeoCochera = async(product, data, nameBd) => {
    const productRef = doc(db, nameBd, product.id);
    await updateDoc(productRef, { geolocation: arrayUnion(data.lat) });
    await updateDoc(productRef, { geolocation: arrayUnion(data.lng.toString()) });
    // await updateDoc(productRef, {geolocation: [data.lat.toString(), data.lng.toString()]});
};

export const updateIdCochera = async(product, nameBd, newId) => {
    const productRef = doc(db, nameBd, product.id);
    await updateDoc(productRef, { idCocheras: arrayUnion(newId) });
}