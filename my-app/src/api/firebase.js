import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCM3OSoyJpt614cd1qia7WMlVg9d_uMeC8",
    authDomain: "lesson9-b2ee1.firebaseapp.com",
    databaseURL: "https://lesson9-b2ee1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lesson9-b2ee1",
    storageBucket: "lesson9-b2ee1.appspot.com",
    messagingSenderId: "378322279025",
    appId: "1:378322279025:web:e9433d6db4a2770de719d0",
    measurementId: "G-3B5P1WET1B"
  };
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);