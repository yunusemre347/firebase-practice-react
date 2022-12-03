// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2kRijDC2gZzRPzIDAjjDLauSkT_S_48I",
  authDomain: "pedro-deneme.firebaseapp.com",
  projectId: "pedro-deneme",
  storageBucket: "pedro-deneme.appspot.com",
  messagingSenderId: "859246460899",
  appId: "1:859246460899:web:152d9f7543a57a43cdead6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);