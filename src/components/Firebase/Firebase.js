import firebase from "firebase"; 

  var firebaseConfig = {
    apiKey: "AIzaSyAFcLmjf3G6PI0zSX3j_ycvDeIyGvyrvKE",
    authDomain: "e-commerce-b496f.firebaseapp.com",
    projectId: "e-commerce-b496f",
    storageBucket: "e-commerce-b496f.appspot.com",
    messagingSenderId: "231904393599",
    appId: "1:231904393599:web:2afa21e37f1e9434eb424a"
  };
  // Initialize Firebase
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  export default database; 