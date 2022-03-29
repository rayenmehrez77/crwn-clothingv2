import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhOdDcrmVd3xOuTKT50zm_rRNysTyPX1M",
  authDomain: "crwn-clothing-db-30253.firebaseapp.com",
  projectId: "crwn-clothing-db-30253",
  storageBucket: "crwn-clothing-db-30253.appspot.com",
  messagingSenderId: "1049847507173",
  appId: "1:1049847507173:web:bc10539a27d869c6e18c0c",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
