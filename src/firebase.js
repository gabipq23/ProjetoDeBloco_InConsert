import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import useAuthStore from "./store/AuthStore";

const firebaseConfig = {
    apiKey: "AIzaSyDGDhrT-hZlgJJmKYFv8e0DuTjmZ6Vhjis",
    authDomain: "inconsert-pb-13d11.firebaseapp.com",
    projectId: "inconsert-pb-13d11",
    storageBucket: "inconsert-pb-13d11.appspot.com",
    messagingSenderId: "851393368750",
    appId: "1:851393368750:web:5cfbc548f3cf8c6016133f"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

onAuthStateChanged(auth, (user) => {
    if(user) {
        useAuthStore.setState({usuario:user})
    }else{
        useAuthStore.setState({usuario:null})
    }
})

export { db, auth }