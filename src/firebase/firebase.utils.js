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
export const createUserProfileDocument = async (userAuth, additionalUserInfo) => {
    if (!userAuth) return;
    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = {...userAuth};
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalUserInfo
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    return userRef;
    
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => (auth.signInWithPopup(provider))

export const signInWithPhone = () => {
    //window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    let appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    auth.signInWithPhoneNumber('+917276457633', appVerifier).then(res => {
        console.log(res);
        let code = prompt('Enter OTP','');
        res.confirm(code).then(result => {
            console.log(result);
        })
    })

}

export default firebase;