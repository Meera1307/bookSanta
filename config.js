import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCBMN6LpuPFXfV_2fX7C07y4UUFlARoV_U",
    authDomain: "book-santa-1c06a.firebaseapp.com",
    projectId: "book-santa-1c06a",
    storageBucket: "book-santa-1c06a.appspot.com",
    messagingSenderId: "648642003772",
    appId: "1:648642003772:web:f45d8ef9d7549ae2de5439",
    measurementId: "G-XJ9LYQ22NL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();