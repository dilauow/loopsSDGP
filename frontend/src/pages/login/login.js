import React, { useState } from 'react';
import './login.css';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the code to submit the form data to your backend API
  };

  return (
    <div className='bg'>
      <form className='form1' onSubmit={handleSubmit}>
        <h1 className='h1'>LogIn to Hire Vision</h1>
        <div>
          
          <input className='inputlogin'
            type="email"
            id="email"
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>

          <input className='inputlogin'
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
    
        <button className='buttonsignup' type="submit">Log-In</button>
      </form>
    </div>
  );
}

export default Login;
