import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2G3Ux2Xdf3CrC4Z4hErBwDzH7QrJiCAM",
  authDomain: "proyectopasteleria-ff2bc.firebaseapp.com",
  projectId: "proyectopasteleria-ff2bc",
  storageBucket: "proyectopasteleria-ff2bc.firebasestorage.app",
  messagingSenderId: "102072245284",
  appId: "1:102072245284:web:cc8111f0cbbf10be240cb1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; // ✅ Solo exportar, sin re-importar
