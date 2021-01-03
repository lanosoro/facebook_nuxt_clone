import firebase from 'firebase'
import'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDScbkc8AvZPH4Rwl6I05tvqKHIcHZpsuY",
  authDomain: "facebook-15fe4.firebaseapp.com",
  projectId: "facebook-15fe4",
  storageBucket: "facebook-15fe4.appspot.com",
  messagingSenderId: "1095577396754",
  appId: "1:1095577396754:web:0bb0343b941a88cebbdacb",
  measurementId: "G-E1M13Y3JTE"
};
// Initialize Firebase
let app=null;
if(!firebase.apps.length){
  app=firebase.initializeApp(firebaseConfig);
}



