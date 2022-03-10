import React, {useEffect, useState} from 'react';
import {getFields} from "../../utils/collection.js";
import db from "../../utils/firebase"
import {getValue} from "../../utils/getDoc";
import { doc, updateDoc } from "firebase/firestore";

const Main = () => {
  const [status, setStatus] = useState(true)
  const docRef = doc(db, "test", '1');

  useEffect(() => {
    getValue('1').then(r => {
      console.log(r.value)
      setStatus(r.value)
    })
  }, [status])

  return (
    <>
      <h1>Main page</h1>
      <div>
        <button onClick={async () => {
          await updateDoc(docRef, {
            value: !status
          });
          getValue('1').then(r => {
            console.log(r.value)
            setStatus(r.value)
          })
        }}>Change Doc 1 status</button>
        <span>{status === true ? '+' : '-'}</span>
      </div>
    </>
  )
}

export default Main