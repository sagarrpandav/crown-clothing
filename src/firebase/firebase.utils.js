import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDe6pdavbqjR9dTMjvN3bn13H0nsMIO2Gw",
    authDomain: "crown-dv-a2a0d.firebaseapp.com",
    databaseURL: "https://crown-dv-a2a0d.firebaseio.com",
    projectId: "crown-dv-a2a0d",
    storageBucket: "crown-dv-a2a0d.appspot.com",
    messagingSenderId: "772254354385",
    appId: "1:772254354385:web:0802236f8043ff8142aef0",
    measurementId: "G-FN486ZVQJP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => (auth.signInWithPopup(provider))

export default firebase;