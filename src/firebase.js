import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJeoGx4tI244V1pJ5q0JWD3o3JjlldAS4",
  authDomain: "clone-4a182.firebaseapp.com",
  databaseURL: "https://clone-4a182.firebaseio.com",
  projectId: "clone-4a182",
  storageBucket: "clone-4a182.appspot.com",
  messagingSenderId: "380130161069",
  appId: "1:380130161069:web:5b516478ab33da5c17b124"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };