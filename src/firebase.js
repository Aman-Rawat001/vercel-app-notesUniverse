import firebase from "firebase";
import "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI6YTtb_yzYO60r0yYd19UYWu_NdLvQTw",
  authDomain: "notes-universe.firebaseapp.com",
  projectId: "notes-universe",
  storageBucket: "notes-universe.appspot.com",
  messagingSenderId: "413801278728",
  appId: "1:413801278728:web:d46fd77add7e8b6f8d10bd",
  measurementId: "G-GCB9HGVVX9",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const analytics = firebase.analytics();

export { storage, firebase as default };
export { analytics };
