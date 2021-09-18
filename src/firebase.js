import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2ly1oQkD1Wnf0EWwrwDjy8geqFWCKGvs",
    authDomain: "news-cf222.firebaseapp.com",
    projectId: "news-cf222",
    storageBucket: "news-cf222.appspot.com",
    messagingSenderId: "953049547283",
    appId: "1:953049547283:web:f4b96fcc3094bfaeabf5e6",
    measurementId: "G-ZS1JWJR4JS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
 
   export {auth,provider};
   export default db;
