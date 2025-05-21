
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEwLibntey1rTzlaWnwId3xBOWJ_A4XtA",
  authDomain: "hobby-hive-55664.firebaseapp.com",
  projectId: "hobby-hive-55664",
   storageBucket: "hobby-hive-55664.appspot.com",
  messagingSenderId: "1016250629698",
  appId: "1:1016250629698:web:d71945d43953e7b62e37db"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
