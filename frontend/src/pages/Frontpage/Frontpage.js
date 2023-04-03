import React from 'react'
import NavBar from "../../components/Navigation/NavBar";
import "./frontpage.css";
import { useNavigate } from 'react-router-dom';
import { animate, motion } from "framer-motion";

export default function Frontpage() {
  const navigate = useNavigate();

  function handleclick(){
      navigate("/home")
  }
  function handleclick2(){
    navigate("/aboutus")
}

  return (
    <>
    <motion.div className='frontface' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <body className='banner1'>
        <div className='content1'>
          <h1>WELCOME TO HIREVISION</h1>
          <p className='para1'>“You know you are on the road to success if you would do your job, and not be paid for it.”<br></br> - Oprah Winfrey -</p>
          <div>
            <button className='btnhome' type='button' onClick={handleclick}><span></span>Get Start</button>
            <button className='btnhome' type='button' onClick={handleclick2}><span></span>About us</button>
          </div>
        </div>
      </body>
    </motion.div>
    </>
  )
}
