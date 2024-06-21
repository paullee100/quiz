// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBOyu1texIgRac-pCJ9SobbhuvXbN4uui8",
  authDomain: "quizsession-12fe0.firebaseapp.com",
  projectId: "quizsession-12fe0",
  storageBucket: "quizsession-12fe0.appspot.com",
  messagingSenderId: "611052930662",
  appId: "1:611052930662:web:6d640586a5d08aca39cfa7",
  measurementId: "G-Z9Z24Z3F3V"
});

// Initialize Firebase
export function writeSessionData(time, day, lesson) {
    switch(lesson) {
        case 0:
            lesson = "Definition"
            break
        case 1:
            lesson = "Exponent"
            break
        case 2:
            lesson = "Prime Numbers"
            break
        case 3:
            lesson = "PEMDAS"
            break
        case 4:
            lesson = "Factor"
            break
        default:
            lesson = "An Error Has Occurred!"
    }

    const db = getDatabase();
    set(ref(db, 'sessions/' + day + " | " + time), lesson);
}