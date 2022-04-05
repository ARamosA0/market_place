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
} from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB4lr10cmD_uKuQ2UC6JSMzOWjYV4K6vAc",
  authDomain: "cochera-ae184.firebaseapp.com",
  databaseURL: "https://cochera-ae184-default-rtdb.firebaseio.com",
  projectId: "cochera-ae184",
  storageBucket: "cochera-ae184.appspot.com",
  messagingSenderId: "20250602522",
  appId: "1:20250602522:web:272b36e2881d44c30f75a3",
  measurementId: "G-YSBB9BFB1R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const getCocheraData = async (nameBd) =>{
  const collectionClothes = collection(db, nameBd);
  const documentClothes = await getDocs(collectionClothes);
  const clothes = documentClothes.docs.map(doc => doc.data());  
  return clothes;
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

// eliminar un registros de la db
export const deleteCochera = async (id) => {
  await deleteDoc(doc(db, "usuarioAnfitrion", id));
};
