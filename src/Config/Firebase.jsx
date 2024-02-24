import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyArj6iyRwLCP8SfMWCUCe216j1cIEAbxeU",
  authDomain: "assignment-17-521b2.firebaseapp.com",
  projectId: "assignment-17-521b2",
  storageBucket: "assignment-17-521b2.appspot.com",
  messagingSenderId: "443338748864",
  appId: "1:443338748864:web:bd221720dfab1df275ce25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}