import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDz5q11JPmv9VBVCYD7wLbxGl93f94RXf0",
  authDomain: "carrito-curso-react.firebaseapp.com",
  projectId: "carrito-curso-react",
  storageBucket: "carrito-curso-react.appspot.com",
  messagingSenderId: "1015521053713",
  appId: "1:1015521053713:web:a9f7034da5470beb7435b0"
};

const app = initializeApp(firebaseConfig);

export const db =getFirestore(app)