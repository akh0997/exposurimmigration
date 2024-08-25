import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBet_7AMlrSC6ZjqHAIAeTVDJKV_fXLyzw",
  authDomain: "reactmovie-db.firebaseapp.com",
  databaseURL: "https://reactmovie-db-default-rtdb.firebaseio.com",
  projectId: "reactmovie-db",
  storageBucket: "reactmovie-db.appspot.com",
  messagingSenderId: "784611951995",
  appId: "1:784611951995:web:bc59747aea3166329de9de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
