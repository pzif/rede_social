import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCF-vMdNLcFWYdJaurOsHNHbYVLRi68ABs",
  authDomain: "social-31d40.firebaseapp.com",
  projectId: "social-31d40",
  storageBucket: "social-31d40.appspot.com",
  messagingSenderId: "1022507913451",
  appId: "1:1022507913451:web:ba911554193c49cf97eeae",
  measurementId: "G-KXRZG0SQYE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
