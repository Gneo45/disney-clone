import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const firebaseConfig = {
    apiKey: "AIzaSyDJGFIP0WILPs_8yK_udNgqlQulYjkk4kI",
    authDomain: "dinsey-clone-db.firebaseapp.com",
    projectId: "dinsey-clone-db",
    storageBucket: "dinsey-clone-db.appspot.com",
    messagingSenderId: "999867290074",
    appId: "1:999867290074:web:7ca450e2e48e5774f670e3",
    measurementId: "G-W7EZJRLBWE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
