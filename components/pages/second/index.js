import React, {useEffect, useState} from 'react';
import db from "../../utils/firebase"
import {getValue} from "../../utils/getDoc";
import { doc, updateDoc } from "firebase/firestore";
import {SideBar} from "../../side-bar";

const SecondPage = () => {
  const [status, setStatus] = useState(true)
  const docRef = doc(db, "test", '2');

  useEffect(() => {
    getValue('2').then(r => {
      setStatus(r.value)
    })
  }, [status])

  return (
    <>
      <div className={'page-wrapper'} style={{height: '100%'}}>
        <SideBar />
        <div className={'page-content'}>
          <h1>Second page</h1>
          <div>
            <button className={'control-button'} onClick={async () => {
              await updateDoc(docRef, {
                value: !status
              });
              getValue('2').then(r => {
                setStatus(r.value)
              })
            }}>Change Doc 2 status</button>
            <span>{status === true ? 'true' : 'false'}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondPage