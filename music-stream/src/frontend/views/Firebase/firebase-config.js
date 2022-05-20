import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuumga0jFGCYFlmYJpat47_8fuHgjSR1E",
  authDomain: "music-app-939af.firebaseapp.com",
  projectId: "music-app-939af",
  storageBucket: "music-app-939af.appspot.com",
  messagingSenderId: "170985500132",
  appId: "1:170985500132:web:2120f529edaac328d26bf1",
  measurementId: "G-HNJZCFEQ2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const authentication = getAuth(app);