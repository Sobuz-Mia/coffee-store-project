// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoiZX7_wTjM9VfmZORCp1vBIkOFFDQduo",
  authDomain: "coffee-store-project-98231.firebaseapp.com",
  projectId: "coffee-store-project-98231",
  storageBucket: "coffee-store-project-98231.appspot.com",
  messagingSenderId: "928549956234",
  appId: "1:928549956234:web:304ab6c91fac5a6bc51b73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;