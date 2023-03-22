//https://stackoverflow.com/questions/70445014/module-not-found-error-package-path-is-not-exported-from-package

// import firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


//https://stackoverflow.com/questions/41352150/typeerror-firebase-storage-is-not-a-function
import 'firebase/storage';

const firebaseConfig = {
  // apiKey: process.env.APP_KEY,
  apiKey: "fakeApiKey",
  authDomain: "netflix-151df.firebaseapp.com",
  projectId: "netflix-151df",
  storageBucket: "netflix-151df.appspot.com",

  messagingSenderId: "316700975498",
  appId: "1:316700975498:web:15063159b205c1a349a873",
  measurementId: "G-2ZGE63ES9F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.storage()
const storage = firebase.storage();

export default storage;
