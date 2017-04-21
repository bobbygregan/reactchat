import * as firebase from 'firebase';

// should go in a secret file
const config = {
apiKey: "AIzaSyCXwQfuc_RHn-crZTWnHfmJMUypYUwibBM",
    authDomain: "chatapp-78e75.firebaseapp.com",
    databaseURL: "https://chatapp-78e75.firebaseio.com",
    projectId: "chatapp-78e75",
    storageBucket: "chatapp-78e75.appspot.com",
    messagingSenderId: "301688987192"
  };


  firebase.initializeApp(config); 

   export default firebase;