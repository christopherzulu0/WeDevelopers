// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc7C0X456ehA09DBCvrDERQXT5d1GiKp0",
  authDomain: "wedevelopers-bc3c3.firebaseapp.com",
  projectId: "wedevelopers-bc3c3",
  storageBucket: "wedevelopers-bc3c3.appspot.com",
  messagingSenderId: "266715009295",
  appId: "1:266715009295:web:b4f32ed545f91e4765ee7a",
  measurementId: "G-3WNTQLZ3H2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
