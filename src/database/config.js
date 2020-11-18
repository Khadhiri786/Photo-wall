import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyALBa-KtRu0_w9Iz1NxrZLp--aR_8TD7ck",
    authDomain: "photo-wall-18965.firebaseapp.com",
    databaseURL: "https://photo-wall-18965.firebaseio.com",
    projectId: "photo-wall-18965",
    storageBucket: "photo-wall-18965.appspot.com",
    messagingSenderId: "754659097351",
    appId: "1:754659097351:web:09614236a688727af863a2",
    measurementId: "G-3JJTN39QG3"
  };
  firebase.initializeApp(firebaseConfig)
 const database = firebase.database()
 export {database}
