import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

//Rajouter les liaisons avec la base de donnée

const firebaseConfig = {
  apiKey: "AIzaSyCwOoDEDQoWXet9z5rPjPyFVMQfCF_idzc",
  authDomain: "projetc7-3362e.firebaseapp.com",
  projectId: "projetc7-3362e",
  storageBucket: "projetc7-3362e.appspot.com",
  messagingSenderId: "221332824752",
  appId: "1:221332824752:web:d7b1840ca4820fb54e1175",
  measurementId: "G-LX3XVQDDDH"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);