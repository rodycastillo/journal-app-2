import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBErTKRRtxxtWVp4a9260efEePr6E46lhA",
    authDomain: "journal-app-bbd2d.firebaseapp.com",
    projectId: "journal-app-bbd2d",
    storageBucket: "journal-app-bbd2d.appspot.com",
    messagingSenderId: "1018357164324",
    appId: "1:1018357164324:web:095c5304b4e73b97f92bb1"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}