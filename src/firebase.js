import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAzvLVfnol96NBUAnjZKF_Ewgix6G5tV0o",
    authDomain: "instagram-clone-9479e.firebaseapp.com",
    databaseURL: "https://instagram-clone-9479e.firebaseio.com",
    projectId: "instagram-clone-9479e",
    storageBucket: "instagram-clone-9479e.appspot.com",
    messagingSenderId: "963519912540",
    appId: "1:963519912540:web:6c00de43f481d02bf92499",
    measurementId: "G-9WS0T3MJ1E"
});


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};

