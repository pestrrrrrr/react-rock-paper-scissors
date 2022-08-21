import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCS746Y7KVdMn3c_60t1tEwVvN9XqI9_Lg',
  authDomain: 'rockpaperscissors-5cae6.firebaseapp.com',
  projectId: 'rockpaperscissors-5cae6',
  storageBucket: 'rockpaperscissors-5cae6.appspot.com',
  messagingSenderId: '162024804751',
  appId: '1:162024804751:web:8a44a44ce2fe6628de3bfa'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
