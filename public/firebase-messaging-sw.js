// This a service worker file for receiving push notifitications.
// See `Access registration token section` @ https://firebase.google.com/docs/cloud-messaging/js/client#retrieve-the-current-registration-token

// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.0/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDc7C0X456ehA09DBCvrDERQXT5d1GiKp0",
  authDomain: "wedevelopers-bc3c3.firebaseapp.com",
  projectId: "wedevelopers-bc3c3",
  storageBucket: "wedevelopers-bc3c3.appspot.com",
  messagingSenderId: "266715009295",
  appId: "1:266715009295:web:b4f32ed545f91e4765ee7a",
  measurementId: "G-3WNTQLZ3H2",
};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
