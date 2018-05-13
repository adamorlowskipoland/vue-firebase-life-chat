import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAh1b91q7NHRvc8WdcXF8TlWN78sQvYvlg",
  authDomain: "live-chat-vue-ninja.firebaseapp.com",
  databaseURL: "https://live-chat-vue-ninja.firebaseio.com",
  projectId: "live-chat-vue-ninja",
  storageBucket: "live-chat-vue-ninja.appspot.com",
  messagingSenderId: "223799266581"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true});

export default firebaseApp.firestore()
