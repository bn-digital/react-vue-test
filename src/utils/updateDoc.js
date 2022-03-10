import db  from './firebase.js';
import { doc, updateDoc } from "firebase/firestore";

export const updateValue = async (note) => {
  const noteRef = doc(db, "test", note);
  await updateDoc(noteRef, {
    value: true
  });
};