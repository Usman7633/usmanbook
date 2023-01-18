importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyD4WynKgXOW_mLg_M1j6t_obqaPPp1F7vU",
  projectId: "facebook-38261",
  messagingSenderId: "120045407930",
  appId: "1:120045407930:web:08cb652b1f6a7257b6bc83",
};








firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  //   self.registration.showNotification(notificationTitle, notificationOptions);
});
