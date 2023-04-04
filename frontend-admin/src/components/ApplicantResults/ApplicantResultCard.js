import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ApplicantResultsCard.css";
import ApplicantCard from "../ApplicantCard/ApplicantCard";
import { motion } from "framer-motion";

function ApplicantResultCard() {
  const location = useLocation();

  const data = location.state;

  const navigate2 = useNavigate();

    function handleclick(){
        navigate2("/")
    }

  return (
    <motion.div className="result-card-container" initial={{width:0}} animate={{width:"100%"}} exit={{x:"100%"}}>
      <h1 className="head">APPLICANT RESULTS</h1>
      {data.map((applicant) => (
        <div key={applicant.id} className="results">
        <h2 className="applicant-prediction">FULL NAME : {applicant.name}</h2>
        <h2 className="applicant-prediction" >JOB POSITION : {applicant.position}</h2>
        <h2 className="applicant-prediction">ANSWER </h2>
        <h2 className="applicant-prediction">{applicant.answers}</h2>
        <h2 className="applicant-prediction-PT">PERSONALITY TRAITS</h2>
        <div className="prediction-list">
          <div className="prediction-item">
            <span className="prediction-label">Openness :</span>
            <span className="prediction-value">{applicant.prediction[0].toFixed(2)}</span>
          </div>
          <div className="prediction-item">
            <span className="prediction-label">Conscientiousness :</span>
            <span className="prediction-value">{applicant.prediction[1].toFixed(2)}</span>
          </div>
          <div className="prediction-item">
            <span className="prediction-label">Extraversion :</span>
            <span className="prediction-value">{applicant.prediction[2].toFixed(2)}</span>
          </div>
          <div className="prediction-item">
            <span className="prediction-label">Agreeableness :</span>
            <span className="prediction-value">{applicant.prediction[3].toFixed(2)}</span>
          </div>
          <div className="prediction-item">
            <span className="prediction-label">Neuroticism :</span>
            <span className="prediction-value">{applicant.prediction[4].toFixed(2)}</span>
          </div>
        </div>
      </div>
      ))}
      <div className="btnOKdiv">
        <button className="btnOK" onClick={handleclick}>OK</button>
      </div>
    </motion.div>
  );
}

export default ApplicantResultCard;
