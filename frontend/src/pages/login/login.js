import React from 'react'

export default function login() {
  return (
    <div>loginpage
    <h2>Login Page</h2><br></br>
    <div className='login'>
      <form id='login'method='get' action='login.php'>
        <label><b>User Name</b></label>
        <input type="text" name="Uname" id="Uname" placeholder='Username'></input>
        <br></br>
        <label><b>Password</b></label>
        <input type="Password" name="Pass" id="Pass" placeholder='Pass'></input>
        <br></br>
        <input type="checkbox" id='check'></input>
        <span>Remember me</span>
        <br></br>
        Forgot <a href='#'>Password</a>
      </form>
    </div>
  </div>
  )
}
