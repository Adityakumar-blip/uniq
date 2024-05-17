import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLPbW226zLWXSmFZdt4AVK-Pcww2DPpSM",
  authDomain: "meetnote-bbfff.firebaseapp.com",
  projectId: "meetnote-bbfff",
  storageBucket: "meetnote-bbfff.appspot.com",
  messagingSenderId: "934929472071",
  appId: "1:934929472071:web:fa82b4771c5c391e8cef62",
  measurementId: "G-HVX2J0F5DH",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, app };
