// Import Firebase core + services
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPduUyDei2aVuJf5ekN3LaplTnJz-Apdg",
    authDomain: "portfolio-80b40.firebaseapp.com",
    projectId: "portfolio-80b40",
    storageBucket: "portfolio-80b40.appspot.com",
    messagingSenderId: "98735530914",
    appId: "1:98735530914:web:f53291e48e7110223348fb",
    measurementId: "G-9KCKN7LGQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage instances
export const db = getFirestore(app);
export const storage = getStorage(app);
