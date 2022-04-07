import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid";



const firebaseConfig = {

  //Jeffara
  // apiKey: "AIzaSyB4lr10cmD_uKuQ2UC6JSMzOWjYV4K6vAc",
  // authDomain: "cochera-ae184.firebaseapp.com",
  // databaseURL: "https://cochera-ae184-default-rtdb.firebaseio.com",
  // projectId: "cochera-ae184",
  // storageBucket: "cochera-ae184.appspot.com",
  // messagingSenderId: "20250602522",
  // appId: "1:20250602522:web:272b36e2881d44c30f75a3",
  // measurementId: "G-YSBB9BFB1R"

  //Aldo
  // apiKey: "AIzaSyAEGEh1mEMQrVZlSNPft4I2LDY8MyTiCqY",
  // authDomain: "garage-35e3d.firebaseapp.com",
  // projectId: "garage-35e3d",
  // storageBucket: "garage-35e3d.appspot.com",
  // messagingSenderId: "133245440991",
  // appId: "1:133245440991:web:ac02f6f6d3be9c3403ea6a",
  // measurementId: "G-DB563BGT2B"

  //Roberto
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

export const getCocheraData = async (nameDB) =>{
  const collectionCocheras = collection(db, nameDB);
  const documentCocheras = await getDocs(collectionCocheras);
  const cocheras = documentCocheras.docs.map(doc => doc.data());  
  return cocheras;
}

// Guardar datos
export const storeCochera = async (product, nameBd) => {
  const id = uuidv4().replaceAll("-", "");
  product.id = id;
  await setDoc(doc(db, nameBd, id), product);
};

// actualizar un datos en firebase
export const updateCochera = async (product, nameBd) => {
  const productRef = doc(db, nameBd, product.id);
  await updateDoc(productRef, product);
};

export const updateIdCochera = async (product, nameBd, newId) => {
  const productRef = doc(db, nameBd, product.id);
  await updateDoc(productRef, {idCocheras: arrayUnion(newId)});
}


