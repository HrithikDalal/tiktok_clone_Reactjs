import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC3G06thGWZg-bgtGgxmLw1uof-J-4J4U0",
    authDomain: "tiktok-clone-70c14.firebaseapp.com",
    databaseURL: "https://tiktok-clone-70c14.firebaseio.com",
    projectId: "tiktok-clone-70c14",
    storageBucket: "tiktok-clone-70c14.appspot.com",
    messagingSenderId: "805594903690",
    appId: "1:805594903690:web:0f46c68106bc69325a6973",
    measurementId: "G-QECR1LLVX9"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;