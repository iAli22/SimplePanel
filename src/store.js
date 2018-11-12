import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

// Reducers
import notifyReducer from "./reducer/notifyReducer";
import settingReducers from "./reducer/settingsReducers";

const firebaseConfig = {
  apiKey: "AIzaSyBFU_QKPLS_DAYi1G9jxlyKLx24OuNhQMk",
  authDomain: "reactpanal.firebaseapp.com",
  databaseURL: "https://reactpanal.firebaseio.com",
  projectId: "reactpanal",
  storageBucket: "reactpanal.appspot.com",
  messagingSenderId: "742057272884"
};

// React-Redux-fireBase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// init FireBase
firebase.initializeApp(firebaseConfig);
// inti Firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

//  Add ReactReduxFirebase
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingReducers
});

// Check for settings in localStorage
if (localStorage.getItem("settings") == null) {
  // Default Settings
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  };
  // Set To LocalStoreg
  localStorage.setItem("settings", JSON.stringify(defaultSettings));
}

// Creact initial state
const initialState = { settings: JSON.parse(localStorage.getItem("settings")) };

// Creact Store

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
