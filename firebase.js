// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlwNN22BHdlQepbahqLUcTxw5GPYzWlp8",
  authDomain: "pantry-tracker-9d1ff.firebaseapp.com",
  projectId: "pantry-tracker-9d1ff",
  storageBucket: "pantry-tracker-9d1ff.appspot.com",
  messagingSenderId: "147952300309",
  appId: "1:147952300309:web:91cb4d4b518ab65c59791c",
  measurementId: "G-YXTWX3L749"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore }