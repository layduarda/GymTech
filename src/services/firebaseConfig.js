import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth } from "firebase/auth";
import ReactNativePersistence from '@react-native-async-storage/async-storage';


{/*const auth = initializeAuth(app, {
  persistence:
  getReactNativePersistence(ReactNativeAsyncStorage)
});*/}

const firebaseConfig = {
  apiKey: "AIzaSyB5EUrOHlSDYw3xi-ve5AgGzYdncZb-Tpo",
  authDomain: "gymtech-aa7fa.firebaseapp.com",
  projectId: "gymtech-aa7fa",
  storageBucket: "gymtech-aa7fa.appspot.com",
  messagingSenderId: "945355902696",
  appId: "1:945355902696:web:474a0e5384403c8443035d"
};

const app = initializeApp(firebaseConfig);
