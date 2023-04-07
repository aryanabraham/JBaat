import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCu6z481smMEPTp9pA96Or673f6WiVhAqI",
  authDomain: "jbaat-e55a5.firebaseapp.com",
  projectId: "jbaat-e55a5",
  storageBucket: "jbaat-e55a5.appspot.com",
  messagingSenderId: "861224287137",
  appId: "1:861224287137:web:45533804d1a147448629e0",
};

// Initialize Friebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
