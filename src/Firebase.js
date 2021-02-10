import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD3DFnhCtCZjwXMhQTWo8AGunMGSDh4mCM",
    authDomain: "twitter-clone-7838499.firebaseapp.com",
    projectId: "twitter-clone-7838499",
    storageBucket: "twitter-clone-7838499.appspot.com",
    messagingSenderId: "1021544152469",
    appId: "1:1021544152469:web:6ffcc0f4e9db2c57518a9c"
  };
  
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();

    export default db;