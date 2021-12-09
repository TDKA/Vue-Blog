import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {

};

// init firebase

firebase.initializeApp(firebaseConfig);

// firestore

const projectFirestore=firebase.firestore()

// Timestamps
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }