import React, {useEffect, useState} from 'react';
import db from "../../utils/firebase"
import {getValue} from "../../utils/getDoc";
import { doc, updateDoc } from "firebase/firestore";

const SecondPage = () => {
  const [status, setStatus] = useState(true)
  const docRef = doc(db, "test", '2');

  useEffect(() => {
    getValue('2').then(r => {
      console.log(r.value)
      setStatus(r.value)
    })
  }, [status])

  return (
    <>
      <h1>Second page</h1>
      <div>
        <button onClick={async () => {
          await updateDoc(docRef, {
            value: !status
          });
          getValue('2').then(r => {
            console.log(r.value)
            setStatus(r.value)
          })
        }}>Change Doc 2 status</button>
        <span>{status === true ? '+' : '-'}</span>
      </div>
    </>
  )
}

export default SecondPage