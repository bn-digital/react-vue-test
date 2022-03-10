import db  from './firebase.js';
import { doc, getDoc } from "firebase/firestore";

export const getValue = async (id) => {
  const noteSnapshot = await getDoc(doc(db, 'test', id));
  if (noteSnapshot.exists()) {
    return noteSnapshot.data();
  } else {
    console.log("Doc doesn't exist");
  }
};