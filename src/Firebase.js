import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1jCS5RyRUjVnIYCtrvNfeChM3NiMo6Ok",
  authDomain: "workoutplannerapp-4f6f0.firebaseapp.com",
  projectId: "workoutplannerapp-4f6f0",
  storageBucket: "workoutplannerapp-4f6f0.appspot.com",
  messagingSenderId: "293930973122",
  appId: "1:293930973122:web:828067d0332fcf9c50485b",
  measurementId: "G-JPGRM5R9EQ"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
