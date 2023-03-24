import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import {getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";

const Signup = () => {

  const auth = getAuth(app);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUp = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email, password,confirmPassword)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the code to submit the form data to your backend API
  };

  const navigate = useNavigate();

    function handleclick(){
        navigate("/loginpage")
    }

  return (
    <div className='bg1'>
      <form className='formsignup' onSubmit={signUp}>
        <h1 className='h1signup'>SignUp to Hire Vision</h1>
        <div>
          
          <input className='inputSignup'
            type="text"
            id="name"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          
          <input className='inputSignup'
            type="email"
            id="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          
          <input className='inputSignup'
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          
          <input className='inputSignup'
            type="password"
            id="confirmPassword"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className='btnsignup' type="submit">Sign Up</button>
        <button className='loginb' onClick={handleclick}>Log In</button>
      </form>
    </div>
  );
}

export default Signup;
