// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAYGoClz_aX1s1arGS4_zXDo4C3gkp82nM",

  authDomain: "checklist-app-denson.firebaseapp.com",

  projectId: "checklist-app-denson",

  storageBucket: "checklist-app-denson.appspot.com",

  messagingSenderId: "1023567013145",

  appId: "1:1023567013145:web:f07fd203784b0fbb399188",

  measurementId: "G-Y3WFY4ZDF9"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);