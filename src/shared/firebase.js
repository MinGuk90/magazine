import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "image-community1.firebaseapp.com",
  projectId: "image-community1",
  storageBucket: "image-community1.appspot.com",
  messagingSenderId: "996666830665",
  appId: "1:996666830665:web:bb8ef4111a50267bb93498",
  measurementId: "G-Q67QZ4PD12"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export{auth};