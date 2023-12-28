import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoevUWgVd6zM931OAxbnFJcl_SoiKLW_E",
  authDomain: "drinkremix.firebaseapp.com",
  projectId: "drinkremix",
  storageBucket: "drinkremix.appspot.com",
  messagingSenderId: "606682381234",
  appId: "1:606682381234:web:e127d0b2f36a9a87ab82ab"
};

const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIREBASE_DB = getFirestore(FIREBASE_APP);

export {
  FIREBASE_APP,
  FIREBASE_AUTH,
  FIREBASE_DB,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
};


