import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyCkOo_umvgMA-J5XomhPgKGiQ_ACXf1I7U",
  authDomain: "asiarep-como.firebaseapp.com",
  databaseURL: "https://asiarep-como.firebaseio.com",
  projectId: "asiarep-como",
  storageBucket: "asiarep-como.appspot.com",
  messagingSenderId: "463539869931"
});

export const db = app.database();
export const viscoRef = db.ref('visco/Visco001').limitToLast(10);
