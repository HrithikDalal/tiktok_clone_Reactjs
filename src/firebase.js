import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configure via .env (see .env.example). Firebase web config is not a
// secret, but keeping it out of the source makes the project reusable.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

let db = null;

if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  const firebaseApp = initializeApp(firebaseConfig);
  db = getFirestore(firebaseApp);
}

export default db;
