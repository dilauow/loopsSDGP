import React from "react";
import ApplicantCard from "../../components/ApplicantCard/ApplicantCard";
import "./Home.css";

function Home() {
  return (
    <div className="main-div">
      Home
      <div className="jobs-container">
        <ApplicantCard />
      </div>
    </div>
  );
}

export default Home;
