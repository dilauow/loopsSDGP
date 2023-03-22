import React, { useState } from 'react';
import './Signup.css';

function Signup() {
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
      <form onSubmit={handleSubmit}>
        <h1>SignUp to Hire Vision</h1>
        <div>
          
          <input
            type="text"
            id="name"
            placeholder='Name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          
          <input
            type="email"
            id="email"
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          
          <input
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          
          <input
            type="password"
            id="confirmPassword"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
