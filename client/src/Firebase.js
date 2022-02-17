/* eslint-disable no-unused-vars */
// Your web app's Firebase configuration

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBzdzR7WZ-pRZpz_TYBFZmLfTYzTsXNiTE",
  authDomain: "mern-ecommerce-bec56.firebaseapp.com",
  projectId: "mern-ecommerce-bec56",
  storageBucket: "mern-ecommerce-bec56.appspot.com",
  messagingSenderId: "776416117466",
  appId: "1:776416117466:web:4c10ca5aa0fdfd55471be3",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const Provider = new firebase.auth.GoogleAuthProvider()

export { auth, Provider }
