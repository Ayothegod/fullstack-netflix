import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCryE5fecI4G87aYTyf8LTFiOfa6kktsdk",
  authDomain: "fullstack-netflix-b2e32.firebaseapp.com",
  projectId: "fullstack-netflix-b2e32",
  storageBucket: "fullstack-netflix-b2e32.appspot.com",
  messagingSenderId: "889659395528",
  appId: "1:889659395528:web:ea0df7da8aa433b77944fd",
  measurementId: "G-BXMG5B5CVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default app