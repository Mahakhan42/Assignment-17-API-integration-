import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input_Field } from '../Components/Input_Field';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../Config/Firebase';

export const Signup = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { value, id } = e.target;
    setData({ ...data, [id]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        setData({});
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <div className='form-container' >
      <div className='form-content'>
        <h2><b>Sign Up</b></h2>
        <br /><br />
        <form onSubmit={handleSubmit}>
          <Input_Field id='name' type='text'  onChange={handleChange} required={true} placeholder='Enter your Username...' />
          <Input_Field id='email' type='email'  onChange={handleChange} required={true} placeholder='Enter your Email...' />
          <Input_Field id='password' type='password' onChange={handleChange} required={true} placeholder='Enter your Password...' />
          <br />
          <button type='submit' className='btn'>Sign Up</button>
        </form>
        <br />
        <center>
        <span>____OR___</span> 
        <br /> <br />
        <p align='center'>Already Have An Account? <Link to='/login'>Login</Link></p>
        </center>
      </div>
      <br /><br />
    </div>
  );
}
