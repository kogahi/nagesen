import authReducer from './authReducer';
import tipReducer from './tipReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; //firestore
import { firebaseReducer } from 'react-redux-firebase'; //auth

const rootReducer = combineReducers({
  auth: authReducer,
  tip: tipReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
