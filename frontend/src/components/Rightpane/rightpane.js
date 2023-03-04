import React from "react";
import "./rightpane.css";

function Rightpane() {
  return (
    <div className="RightpaneBox">
      <div className="job-card-container">
        <div className="job-card">
          <div className="job-card-first-row">
            <div className="job-card-first-col">
              {/* <div className="job-card-icon">ICON</div> */}
              <div className="job-card-title-company-name">
                <h2>Data Science / Data Engineering Internship</h2>
                <h3>Surge Global</h3>
              </div>
            </div>
            <div className="job-card-second-col">Button</div>
          </div>
          <div className="job-card-second-row">
            <h3>1 dfsfdsf</h3>
            <h3>2 dvs</h3>
            <h3>3 dgsg</h3>
            <h3>4 fsgfgvs</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightpane;
