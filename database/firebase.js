import firebase from "firebase";

import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBBlLdXAAM_U9ivukDXAuvmRCE2biTcy0E",
  authDomain: "react-native-firebase-20567.firebaseapp.com",
  projectId: "react-native-firebase-20567",
  storageBucket: "react-native-firebase-20567.appspot.com",
  messagingSenderId: "388183437807",
  appId: "1:388183437807:web:daa5a8e281b6aaaa12861a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
