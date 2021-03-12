import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCEwXkqw2s61u8IVyjYFihDyQVEwOmbxGI",
    authDomain: "productapi-b93a3.firebaseapp.com",
    projectId: "productapi-b93a3",
    storageBucket: "productapi-b93a3.appspot.com",
    messagingSenderId: "1004043061161",
    appId: "1:1004043061161:web:3e2a80639df9dc49a126b8",
    measurementId: "G-RL7JGXTDCV"
}

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };