import React from "react";
import ApplicantCard from "../../components/ApplicantCard/ApplicantCard";
import NavBar from "../../components/Navigation/NavBar"
import Footer from "../../components/Footer/Footer"
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { animate, motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  function handleclick(){
      navigate("/loginpage")
  }
  return (
    <motion.div className="homebg" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <NavBar/>
      <div className="main-div">
        <span>
        <h1 className="head1">JOB APPLICANTS</h1>
        </span>
      <div className="jobs-container">
        <ApplicantCard />
      </div>
      </div>
      <div className="footer1">
        <Footer/>
      </div>
    </motion.div> 
  );
}

export default Home;
