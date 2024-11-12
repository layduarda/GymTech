import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5EUrOHlSDYw3xi-ve5AgGzYdncZb-Tpo",
  authDomain: "gymtech-aa7fa.firebaseapp.com",
  projectId: "gymtech-aa7fa",
  storageBucket: "gymtech-aa7fa.appspot.com",
  messagingSenderId: "945355902696",
  appId: "1:945355902696:web:f732c1d22b3fc9ee43035d"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);
