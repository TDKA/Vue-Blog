import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAKwH_fdD_I23VSj2VUWQ1_aIvYRtH7_3w",
  authDomain: "vue-firebase-14c6b.firebaseapp.com",
  projectId: "vue-firebase-14c6b",
  storageBucket: "vue-firebase-14c6b.appspot.com",
  messagingSenderId: "686250184137",
  appId: "1:686250184137:web:3b52883d3a423ecd792c18"
};

// init firebase

firebase.initializeApp(firebaseConfig);

// firestore

const projectFirestore=firebase.firestore()

// Timestamps
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }