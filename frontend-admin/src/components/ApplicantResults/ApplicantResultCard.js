import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ApplicantResultsCard.css";
import ApplicantCard from "../ApplicantCard/ApplicantCard";

function ApplicantResultCard() {
  const location = useLocation();

  const data = location.state;

  return (
    <div>
      {data.map((applicant) => (
        <div key={applicant.id}>
          <h2>{applicant.name}</h2>
          <h2>{applicant.position}</h2>
          <h2>{applicant.answers}</h2>
          <h2>{applicant.prediction}</h2>
        </div>
      ))}
    </div>
  );
}

export default ApplicantResultCard;
