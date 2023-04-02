import React from "react";
import ApplicantCard from "../../components/ApplicantCard/ApplicantCard";
import NavBar from "../../components/Navigation/NavBar"
import Footer from "../../components/Footer/Footer"
import "./Home.css";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function handleclick(){
      navigate("/loginpage")
  }
  return (
    <div className="homebg">
      <NavBar/>
      <div className="main-div">
        <h1 className="head1">JOB APPLICANTS</h1>
      <div className="jobs-container">
        <ApplicantCard />
      </div>
      </div>
      <div className="footer1">
        <Footer/>
      </div>
    </div> 
  );
}

export default Home;
