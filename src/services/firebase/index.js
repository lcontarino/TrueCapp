// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore"

import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariess

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyDc03WTakFqMlUB7ljLkROxN6Idyi-jBMc",
  authDomain: "truecapp-0001.firebaseapp.com",
  projectId: "truecapp-0001",
  storageBucket: "truecapp-0001.appspot.com",
  messagingSenderId: "161307008696",
  appId: "1:161307008696:web:dbfc4fc76de1658a451e4d",
  measurementId: "G-GDLEG28TSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);

export const collectionsName ={
  products:'products',
  orders:'orders',
  users: 'users',
  suscribers:'suscribers'
}
const auth = getAuth(app);
 
export {auth}


