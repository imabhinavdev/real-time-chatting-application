// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8sawBLjK4DdUDMHO1HddtjvELP7I7Bow",
  authDomain: "real-time-chat-fe16d.firebaseapp.com",
  projectId: "real-time-chat-fe16d",
  storageBucket: "real-time-chat-fe16d.appspot.com",
  messagingSenderId: "835340275307",
  appId: "1:835340275307:web:7c7061c9db346043d3ab2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);