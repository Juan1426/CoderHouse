import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDHxV37f3fiBOTIS3iogJ6p_ZEhgxBnGmk",
    authDomain: "proyecto-juan-react.firebaseapp.com",
    projectId: "proyecto-juan-react",
    storageBucket: "proyecto-juan-react.appspot.com",
    messagingSenderId: "123057390316",
    appId: "1:123057390316:web:3442b3b1bff205267ddbc9"
  };

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}
        
export const getFirestore = () => {
    return firebase.firestore(app)
}