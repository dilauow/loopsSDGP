import React from "react";
import "./ApplicantCard.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { getJobs } from "../../controllers/applicationController";
import ApplicantResultCard from "../ApplicantResults/ApplicantResultCard";

function ApplicantCard() {

  const [jobApplications, setJobApplications] = useState([])

  useEffect(()=>{
    
    getJobs().then(jobA =>{
      setJobApplications(jobA)
      console.log(jobA);
    })


  },[])
  
  const applicantData = [
    {
      id: 1,
      name: "Hariha",
      address: "23/6",
      position: "Analyst",
      cv: "https",
      answers: ["Hello im a very smart boy"],
      prediction: [0.333333, 0.3333333, 0, -0.33333, 0],
    },
    {
      id: 2,
      name: "Diman",
      address: "23/7",
      position: "Software Engineer",
      cv: "https",
      answers: ["Hello im a very smart boy"],
      prediction: [0.633333, 0.443333, 0.777, -0.33333, 0],
    },
    {
      id: 3,
      name: "John",
      address: "23/8",
      position: "QA Engineer",
      cv: "https",
      answers: ["Hello im a very big boy"],
      prediction: [0.63333, 0.73333, 0.2222, -0.33333, 0],
    },
  ];

  const navigate = useNavigate();


  const handleClick = async (applicantid) => {
    // event.preventDefault();
    console.log(applicantid);
    try {
      const filteredData = jobApplications.filter(
        (applicant) => {
         
          return applicant.id === applicantid}
      );
      console.log(filteredData);
      navigate("/ApplicantResultspage", { state: filteredData });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="applicant-card-container">
      {jobApplications.map((jobApplicant) => (
        <div className="card" key={jobApplicant.id}>
          <h2>{jobApplicant.name}</h2>
          <br />
          <h2>{jobApplicant.position}</h2>
          <br />
          <a>View The CV</a>
          <br />
          <button onClick={() => handleClick(jobApplicant.id)}>
            View More Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default ApplicantCard;
