// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';

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
// const messaging = getMessaging();
const db = getFirestore();
const storage = getStorage();


// export const requestForToken = async () => {
//   try {
//     const currentToken = await getToken(messaging, { vapidKey: `BAsP-z3x7MxI3llXDcLpOuwAEwOJWNC5IAiMUu7UvmksqJpHdixhMstw8NTx8mFpPCGO6F_uhMxG5gpAWb9tgIw` });
//     if (currentToken) {
//       console.log('current token for client: ', currentToken);
//     } else {
//       // Show permission request UI
//       console.log('No registration token available. Request permission to generate one.');
//     }
//   } catch (err) {
//     console.log('An error occurred while retrieving token. ', err);
//   }
// };

// // Handle incoming messages. Called when:
// // - a message is received while the app has focus
// // - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
// export const onMessageListener = () =>
//   new Promise((resolve) => {    
//     onMessage(messaging, (payload) => {
//       resolve(payload);
//     });
//   });
  
export default app;
export { db, storage};
