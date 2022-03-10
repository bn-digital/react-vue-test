import db from './firebase.js'
import { collection, getDocs } from "firebase/firestore";

  export const getFields = async () => {
  const notesSnapshot = await getDocs(collection(db, "test"));
  const fieldsList = notesSnapshot.docs.map((doc) => doc.data());
  return fieldsList;
};



