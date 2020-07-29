import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBT7oqdS18reBr1binGF5i6qsbAywwCz0Y",
    authDomain: "hope-recipes.firebaseapp.com",
    databaseURL: "https://hope-recipes.firebaseio.com",
    projectId: "hope-recipes",
    storageBucket: "hope-recipes.appspot.com",
    messagingSenderId: "1033934227800",
    appId: "1:1033934227800:web:cfc5824e622c22bdbb7d2d",
    measurementId: "G-JMV9WXEL4R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export const auth = firebase.auth();