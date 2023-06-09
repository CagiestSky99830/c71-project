import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAf3VD1SCyqwcV2DfGSydmr-S8Lo6ht0l4",
    authDomain: "e-library-f5550.firebaseapp.com",
    projectId: "e-library-f5550",
    storageBucket: "e-library-f5550.appspot.com",
    messagingSenderId: "705962935774",
    appId: "1:705962935774:web:33e656216f0996f856494f"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
