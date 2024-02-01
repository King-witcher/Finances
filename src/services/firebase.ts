import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'kw-finances.firebaseapp.com',
  projectId: 'kw-finances',
  storageBucket: 'kw-finances.appspot.com',
  messagingSenderId: '705694316042',
  appId: '1:705694316042:web:989d5b786bd516834711f3',
  measurementId: 'G-BBYB2YZJ6V',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const auth = getAuth()

export const provider = new GoogleAuthProvider()
