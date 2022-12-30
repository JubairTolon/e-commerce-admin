// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsgogs6CfEAD2z5PcVknrgPudefnmoqQQ",
    authDomain: "e-commerce-admin-20869.firebaseapp.com",
    projectId: "e-commerce-admin-20869",
    storageBucket: "e-commerce-admin-20869.appspot.com",
    messagingSenderId: "320707995661",
    appId: "1:320707995661:web:7a870f9f7d3677c4f68d44",
    measurementId: "G-LNMN12XH8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);


export default auth;