import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAMRu6Wck4114OroPiy67AmsiZveEFcqGw",
    authDomain: "full-firebase-project.firebaseapp.com",
    databaseURL: "https://full-firebase-project.firebaseio.com",
    projectId: "full-firebase-project",
    storageBucket: "full-firebase-project.appspot.com",
    messagingSenderId: "474099387855"
};
  
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;