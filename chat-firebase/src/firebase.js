import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyC_KSHhz153L6sulA4sf5s1YwTh80YorXc",
  authDomain: "chat-99328.firebaseapp.com",
  projectId: "chat-99328",
  storageBucket: "chat-99328.appspot.com",
  messagingSenderId: "612481927561",
  appId: "1:612481927561:web:9c9986f7f3ab47a0d23958"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const auth = getAuth(); 
export const storage = getStorage()
