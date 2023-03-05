import React from 'react'
import "./login.css"

export default function login() {
  return (
    <div>loginpage
    <h2>Login Page</h2>
    <br></br>
    <div className='login'>
      <form id='login'method='get' action='login.php'>
        <label><b>User Name</b></label>
        <input type="text" name="Uname" id="Uname" placeholder='Username'></input>
        <br></br>
        <label><b>Password</b></label>
        <br></br>
        <input type="Password" name="Pass" id="Pass" placeholder='Password'></input>
        <br></br>
        <input type="checkbox" id='check'></input>
        <span>Remember me</span>
        <br></br>
        <br></br>
        <button>Forget Password</button>
        <br></br>
        <br></br>
        <span className='Registertxt'>If you are not a member, Click Register.</span>
        <br></br>
        <button>Register</button>
      </form>
    </div>
  </div>
  )
}
