// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import  {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
// const analytics = getAnalytics(app);
export const collectionsName ={
  products:'products',
  orders:'orders'
}