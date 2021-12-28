import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCK9LsJMSJKRB--m4dbcvXo5Wyt_mPXgsQ",
  authDomain: "clone-93fb5.firebaseapp.com",
  projectId: "clone-93fb5",
  storageBucket: "clone-93fb5.appspot.com",
  messagingSenderId: "561394429708",
  appId: "1:561394429708:web:1b63204e4b5a5c4b762329",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
