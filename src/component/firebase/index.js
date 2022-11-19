// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2L99Hg9sHnQErfdgOV0rXWjYUswg8TII",
  authDomain: "osis-election-778f6.firebaseapp.com",
  projectId: "osis-election-778f6",
  storageBucket: "osis-election-778f6.appspot.com",
  messagingSenderId: "285035414823",
  appId: "1:285035414823:web:56ac54a31f69f738801502",
  measurementId: "G-CXSVYWHLTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);