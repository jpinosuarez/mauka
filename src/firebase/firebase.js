import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBodfkb-QSR6EZjy29o3K5ecMTHV-CNMRQ",
    authDomain: "mauka-7c271.firebaseapp.com",
    projectId: "mauka-7c271",
    storageBucket: "mauka-7c271.appspot.com",
    messagingSenderId: "910196099109",
    appId: "1:910196099109:web:da333bd8ba0ad63c3517cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);