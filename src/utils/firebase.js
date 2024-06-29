// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJHZzTFPBvLdsLab3soIQGbhAbSMqpPqo",
  authDomain: "flavorflow-995b6.firebaseapp.com",
  projectId: "flavorflow-995b6",
  storageBucket: "flavorflow-995b6.appspot.com",
  messagingSenderId: "506257673169",
  appId: "1:506257673169:web:c6e1c650940a6035caeef0",
  measurementId: "G-H35X4Z56HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();