import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyA-piQXK7b0PH1C_iw73ZW1ay8zWSRLGh4',
    authDomain: 'discord-clone-43361.firebaseapp.com',
    projectId: 'discord-clone-43361',
    storageBucket: 'discord-clone-43361.appspot.com',
    messagingSenderId: '171532712997',
    appId: '1:171532712997:web:fa53637a41edae40df93cc'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, db }
