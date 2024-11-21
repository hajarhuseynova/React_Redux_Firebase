import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCnr6lSYHlTH-zPgVCerx0Lv9Y8j-roYGM",
    authDomain: "react-blog-app-72b8a.firebaseapp.com",
    databaseURL: "https://react-blog-app-72b8a-default-rtdb.firebaseio.com",
    projectId: "react-blog-app-72b8a",
    storageBucket: "react-blog-app-72b8a.firebasestorage.app",
    messagingSenderId: "292221829364",
    appId: "1:292221829364:web:fe149b2a96eabd1f365ea1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database as default, googleAuthProvider, firebase };
