import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAItkOcWONW5az6r1cZT7ucJ5__umgx_js",
  authDomain: "item7-ca991.firebaseapp.com",
  projectId: "item7-ca991",
  storageBucket: "item7-ca991.appspot.com",
  messagingSenderId: "477558728433",
  appId: "1:477558728433:web:19f82631a08a23a6cbeb50",
  measurementId: "G-FEWER7NCH3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
