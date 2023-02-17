import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBv0f-2Z1R5sVN72_QESmU_FMfJQ_Aoe3Q",
  authDomain: "workoutplannerapp-ae90f.firebaseapp.com",
  projectId: "workoutplannerapp-ae90f",
  storageBucket: "workoutplannerapp-ae90f.appspot.com",
  messagingSenderId: "892122747187",
  appId: "1:892122747187:web:8075532689040f8fbdae46",
  measurementId: "G-M39K3WV38P"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);