import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyDG5-Cw2109C4kJt9YZXHKGsXbLdV6VkRc',
  authDomain: 'nagesen-34513.firebaseapp.com',
  projectId: 'nagesen-34513',
  storageBucket: 'nagesen-34513.appspot.com',
  messagingSenderId: '1066407484342',
  appId: '1:1066407484342:web:906c3f85a840aed8883f17',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
