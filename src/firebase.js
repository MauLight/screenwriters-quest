// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL-cwBeyKUl2rKuMyBafp0tgcJhiU1Tc0",
    authDomain: "screenwriters-quest-9c24f.firebaseapp.com",
    projectId: "screenwriters-quest-9c24f",
    storageBucket: "screenwriters-quest-9c24f.appspot.com",
    messagingSenderId: "941475148094",
    appId: "1:941475148094:web:b51ef60915d35ff46b7c6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);