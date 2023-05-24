import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYSnEGttZRADuyHW2HkEXoia6ZYaa7GSA",
  authDomain: "clone-cf1cb.firebaseapp.com",
  projectId: "clone-cf1cb",
  storageBucket: "clone-cf1cb.appspot.com",
  messagingSenderId: "795766829035",
  appId: "1:795766829035:web:87b6844a33c3b75b20b3ae",
  measurementId: "G-TJ5TZ2JKL9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
