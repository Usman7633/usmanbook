import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD4WynKgXOW_mLg_M1j6t_obqaPPp1F7vU",
  authDomain: "facebook-38261.firebaseapp.com",
  projectId: "facebook-38261",
  storageBucket: "facebook-38261.appspot.com",
  messagingSenderId: "120045407930",
  appId: "1:120045407930:web:08cb652b1f6a7257b6bc83",
  measurementId: "G-PKTHRV7BG5"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
