import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input_Field } from '../Components/Input_Field';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../Config/Firebase';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; 

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const Change_Handle = (e) => {
    const { value, id } = e.target;
    setData({ ...data, [id]: value });
  }
  
  const LoginHandle = () => {
    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setData({});
        navigate('/Home');
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const auth = getAuth(app);
  const Submit_Handle = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        setData({});
        navigate('/Home');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <div className='form-container'>
      <div className='form-content'>
        <h2><b>Login</b></h2>
        <br /><br />
        <form>
          <Input_Field id='email' type='email' onChange={Change_Handle} required={true} placeholder='Enter your Email...' />
          <Input_Field id='password' type='password' onChange={Change_Handle} required={true} placeholder='Enter your Password...' />
          <br />
          <button type='submit' onClick={Submit_Handle} className='btn'>Login</button>
        </form>
        <br />
        <center>
          <span>____OR___</span> 
          <br /><br />
          <button className='btn' onClick={LoginHandle}>LogIn With Google</button>
          <br /><br />
          <p>Create Have An Account? <Link to='/'>Signup</Link></p>
        </center>
      </div>
      <br /><br />
    </div>
  );
}
