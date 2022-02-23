// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7fVawvKR79pFolG2LxMFnRO7J90v1tsk",
  authDomain: "scp-app-71b8b.firebaseapp.com",
  projectId: "scp-app-71b8b",
  storageBucket: "scp-app-71b8b.appspot.com",
  messagingSenderId: "982962465102",
  appId: "1:982962465102:web:6352eca9ecd761b355d61f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);