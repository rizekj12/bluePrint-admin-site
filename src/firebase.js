import firebase from "firebase/app"
import "firebase/auth"

  const app = firebase.initializeApp({
    apiKey: "AIzaSyDTEhGxQ8fnCl2S5IWn7mK0eYg5cpCuDgA",
    authDomain: "bluprint-admin.firebaseapp.com",
    projectId: "bluprint-admin",
    storageBucket: "bluprint-admin.appspot.com",
    messagingSenderId: "187903528171",
    appId: "1:187903528171:web:5252b42660c79fd6b0c2ae",
    // measurementId: "G-3EPLQ700RZ"
  });

 export default app