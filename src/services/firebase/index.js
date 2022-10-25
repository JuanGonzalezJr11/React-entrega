import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHEQVqtcJuTDH78bNiFZhd91OkFyGsaDk",
  authDomain: "bdvansstore.firebaseapp.com",
  projectId: "bdvansstore",
  storageBucket: "bdvansstore.appspot.com",
  messagingSenderId: "729192295265",
  appId: "1:729192295265:web:7b65ee59cd07c0873bf320"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);