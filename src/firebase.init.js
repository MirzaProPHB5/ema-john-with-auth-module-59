// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6x-Kr7rHj_7E-x2v24wS_Npocop_hcvs",
    authDomain: "ema-john-simple-a3341.firebaseapp.com",
    projectId: "ema-john-simple-a3341",
    storageBucket: "ema-john-simple-a3341.appspot.com",
    messagingSenderId: "929436654802",
    appId: "1:929436654802:web:498d6a97281396acaea10b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;