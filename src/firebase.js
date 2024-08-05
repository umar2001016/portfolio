// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDC7L9G8R_rxdB5CDqEwIS8Ex1SJZmFoVY",
    authDomain: "potfolio-comment.firebaseapp.com",
    projectId: "potfolio-comment",
    storageBucket: "potfolio-comment.appspot.com",
    messagingSenderId: "936913113992",
    appId: "1:936913113992:web:4801123c4b76a24dd5a03d"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
