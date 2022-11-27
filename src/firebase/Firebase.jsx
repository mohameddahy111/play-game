// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzHYFHEJXcZ2LvdskEqLy_W2sfqqtwGP0",
  authDomain: "play-game-4c8c5.firebaseapp.com",
  projectId: "play-game-4c8c5",
  storageBucket: "play-game-4c8c5.appspot.com",
  messagingSenderId: "665065201016",
  appId: "1:665065201016:web:9279b9d6e393fe46503c8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
