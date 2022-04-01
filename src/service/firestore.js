import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getDatabase, ref, set } from "firebase/database";


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

