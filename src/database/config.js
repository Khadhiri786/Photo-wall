import * as firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDT5BW7wsqtT8rOa9FvfXT2ECyBPRe2bF4",
  authDomain: "photo-wall-c4461.firebaseapp.com",
  databaseURL: "https://photo-wall-c4461.firebaseio.com",
  projectId: "photo-wall-c4461",
  storageBucket: "photo-wall-c4461.appspot.com",
  messagingSenderId: "696363900683",
  appId: "1:696363900683:web:17f8da6605dca7e1b60c0e",
  measurementId: "G-Q6ZKZW2T4V"
};
  firebase.initializeApp(firebaseConfig)
 const database = firebase.database()
 export const auth = firebase.auth();

 export {database}
