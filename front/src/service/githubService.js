import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEM172ZlC0Cq80WBlD4H7h38QKKyoRHqU",
  authDomain: "cochera-auth.firebaseapp.com",
  projectId: "cochera-auth",
  storageBucket: "cochera-auth.appspot.com",
  messagingSenderId: "91000743517",
  appId: "1:91000743517:web:f6e67d9493b46d16e50fb4",
  measurementId: "G-9Y22CWDCVZ"
};

initializeApp(firebaseConfig);

export const loginGithub = () => {
  const provider = new GithubAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider)
}