import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuumga0jFGCYFlmYJpat47_8fuHgjSR1E",
  authDomain: "music-app-939af.firebaseapp.com",
  databaseURL: "https://music-app-939af-default-rtdb.firebaseio.com",
  projectId: "music-app-939af",
  storageBucket: "music-app-939af.appspot.com",
  messagingSenderId: "170985500132",
  appId: "1:170985500132:web:8e74da2e089abe63d26bf1",
  measurementId: "G-PEWLE764WM"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

const database = getDatabase(app);
export const db = getFirestore(app);
export const authentication = getAuth(app);
