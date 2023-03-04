import React from "react";
import "./rightpane.css";

function Rightpane() {
  return (
    <div className="RightpaneBox">
      rightpane
      <div className="job-card-container">
        <div className="job-card">
          <div className="job-card-first-col">
            <div className="job-card-icon">ICON</div>
            <div className="job-card-title-company-name">
              <h2>JOB Name</h2>
              <h3>Job company</h3>
            </div>
          </div>
          <div className="job-card-second-col">Button</div>
        </div>
      </div>
    </div>
  );
}

export default Rightpane;
