import React from 'react'
import NavBar from "../../components/Navigation/NavBar";
import "./frontpage.css";
import { useNavigate } from 'react-router-dom';

export default function Frontpage() {
  const navigate = useNavigate();

  function handleclick(){
      navigate("/home")
  }

  return (
    <>
    <div className='frontface'>
      <body className='banner1'>
        <div className='content1'>
          <h1>WELCOME TO HIREVISION</h1>
          <p>“You know you are on the road to success if you would do your job, and not be paid for it.”<br></br> - Oprah Winfrey -</p>
          <div>
            <button className='btnhome' type='button' onClick={handleclick}><span></span>Get Start</button>
            <button className='btnhome' type='button'><span></span>About us</button>
          </div>
        </div>
      </body>
    </div>
    </>
  )
}
