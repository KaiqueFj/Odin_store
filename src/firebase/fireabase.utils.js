import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBqMqH5OnXtACtv6VKngi4SNCNyWgnuKeY",
    authDomain: "odin-store-7d93a.firebaseapp.com",
    projectId: "odin-store-7d93a",
    storageBucket: "odin-store-7d93a.appspot.com",
    messagingSenderId: "238022698336",
    appId: "1:238022698336:web:7b1d4b04850815037eea05",
    measurementId: "G-JM98ZT1L6N"
};

//call the firebase config

firebase.initializeApp(config);

//auth from google
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//parameters to login and auth the user.
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;