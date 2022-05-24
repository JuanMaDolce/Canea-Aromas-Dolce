import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDS7yGRE0d_-Vm3D2NtfhwvI2MmTZsaiCQ",
    authDomain: "canela-aromas-dolce.firebaseapp.com",
    projectId: "canela-aromas-dolce",
    storageBucket: "canela-aromas-dolce.appspot.com",
    messagingSenderId: "691710546589",
    appId: "1:691710546589:web:49db0c213ff055b74f7a74"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db