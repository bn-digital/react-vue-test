import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDtmPPiNf3A9GHohaRs5GIC_UUrfBNvEOQ",
  authDomain: "react-vue-test1.firebaseapp.com",
  projectId: "react-vue-test1",
  storageBucket: "react-vue-test1.appspot.com",
  messagingSenderId: "36498135552",
  appId: "1:36498135552:web:13b59e43697591efb9d6e5",
  measurementId: "G-ML4VWPP81N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export default db
