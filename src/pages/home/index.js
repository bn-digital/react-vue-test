import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '../../utils/firebase'
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate()
  const googleHandler = async () => {
    provider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/main", { replace: true })
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // The email of the user's account used.
        const email = error.email;
        console.log(email)
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential)
        // ...
      });
  }
  return (
    <>
      <button onClick={googleHandler}>hdfjghfkdhdfkhkhdfdk</button>
    </>
  )
}

export default Home