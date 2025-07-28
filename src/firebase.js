// Import Firebase core + services
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "1",
    measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage instances
export const db = getFirestore(app);
export const storage = getStorage(app);
