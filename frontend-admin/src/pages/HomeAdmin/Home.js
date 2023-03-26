import React from "react";
import ApplicantCard from "../../components/ApplicantCard/ApplicantCard";
import "./Home.css";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function handleclick(){
      navigate("/loginpage")
  }
  return (
    <div className="main-div">
      <button onClick={handleclick}> Admin-Login </button>
      Home
      <div className="jobs-container">
        <ApplicantCard />
      </div>
    </div>
  );
}

export default Home;
