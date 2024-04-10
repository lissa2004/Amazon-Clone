import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBToFEt5lUrv4-IPz3j5imtMH9YT9rPltI",
    authDomain: "clone-225dc.firebaseapp.com",
    projectId: "clone-225dc",
    storageBucket: "clone-225dc.appspot.com",
    messagingSenderId: "123144516197",
    appId: "1:123144516197:web:589aa0e76512e280e88c8c",
    measurementId: "G-N2V44B8T4T"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
