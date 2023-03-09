import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA2gwfBq9imrWRhTVD39HG6lNpJIky-_fM",
  authDomain: "chat-app-by-harsh.firebaseapp.com",
  projectId: "chat-app-by-harsh",
  storageBucket: "chat-app-by-harsh.appspot.com",
  messagingSenderId: "899274705316",
  appId: "1:899274705316:web:32927de548abed2bff5931"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();